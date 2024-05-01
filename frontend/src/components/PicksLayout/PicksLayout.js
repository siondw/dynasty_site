import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PicksContainer from '../PicksContainer/PicksContainer';
import styles from './PicksLayout.module.css';

const cache = {};

function useCache(url, params) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = `${url}-${JSON.stringify(params)}`;

    if (cache[cacheKey]) {
      setData(cache[cacheKey]);
      setIsLoading(false);
    } else {
      axios.get(url, { params })
        .then(response => {
          const groupedPicks = response.data.reduce((acc, pick) => {
            const yearIndex = acc.findIndex(p => p.year === pick.year);
            if (yearIndex > -1) {
              acc[yearIndex].picks.push({
                pickId: pick.pick_id,
                pickNumber: pick.pick_number,
                round: pick.round,
                previousOwner: pick.original_owner_id
              });
            } else {
              acc.push({
                year: pick.year,
                picks: [{
                  pickId: pick.pick_id,
                  pickNumber: pick.pick_number,
                  round: pick.round,
                  previousOwner: pick.original_owner_id
                }]
              });
            }
            return acc;
          }, []);

          // Sort the grouped picks array by year
          groupedPicks.sort((a, b) => a.year - b.year);

          cache[cacheKey] = groupedPicks;
          setData(groupedPicks);
          setIsLoading(false);
        })
        .catch(error => {
          console.error("Failed to fetch picks:", error);
          setError(error);
          setIsLoading(false);
        });
    }
  }, [url, JSON.stringify(params)]);

  return { data, isLoading, error };
}

function PicksLayout({ teamId }) {
  const apiUrl = process.env.REACT_APP_API_URL; // Accessing the environment variable
  const { data: picksData, isLoading, error } = useCache(`${apiUrl}/api/teams/${teamId}/draft_picks`, {});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching draft picks.</div>;

  return (
    <div className={styles.layout}>
      {picksData && picksData.map((data, index) => (
        <div key={data.year} style={{ marginTop: `${index * 64}px` }}>
          <PicksContainer year={data.year} picks={data.picks} />
        </div>
      ))}
    </div>
  );
}

export default PicksLayout;
