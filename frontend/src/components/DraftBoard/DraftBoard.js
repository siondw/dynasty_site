import React, { useState, useEffect } from "react";
import axios from "axios";
import DraftSlot from "../DraftSlot/DraftSlot";
import styles from "./DraftBoard.module.css";

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
      axios
        .get(url, { params })
        .then((response) => {
          cache[cacheKey] = response.data;
          setData(response.data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Failed to fetch data:", error);
          setError(error);
          setIsLoading(false);
        });
    }
  }, [url, JSON.stringify(params)]);

  return { data, isLoading, error };
}

function DraftBoard({ year }) {
  const apiUrl = process.env.REACT_APP_API_URL; // Accessing the environment variable
  const {
    data: draftOrder,
    isLoading,
    error,
  } = useCache(`${apiUrl}/api/draft_picks/${year}`, {});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching draft order.</div>;

  return (
    <div className={styles.draftBoard}>
      {draftOrder.map((teamId, index) => (
        <DraftSlot key={index} teamId={teamId} />
      ))}
    </div>
  );
}

export default DraftBoard;
