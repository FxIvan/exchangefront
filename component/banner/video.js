import React from "react";
import styles from './css/Banner.module.css'
export const Video = () => {
  return (
    <div>
      <video
        src="https://res.cloudinary.com/ivanimagenes/video/upload/v1674082025/exchangebackground_css2on.mp4"
        autoPlay
        muted
        playsInline
        loop
        width={1920}
        height={1080}
        className={styles.video}
      />
    </div>
  );
};
