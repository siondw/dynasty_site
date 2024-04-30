import styles from './ProfilePicture.module.css'; 

function ProfilePicture({ teamId, altText, className }) {
    console.log(className);  // In ProfilePicture, to see what className it receives
    let imagePath;
    try {
        imagePath = require(`../../assets/${teamId}.jpeg`);
    } catch (e) {
        imagePath = require('../../assets/default_pic.png');
    }

    // Note: className combines ProfilePicture's own style and any additional classes passed
    return (
        <div className={`${styles.profilePicture} ${className}`}>
            <img src={imagePath} alt={altText || "Team Profile Picture"} />
        </div>
    );
}


export default ProfilePicture;
