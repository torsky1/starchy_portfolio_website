import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const YT_PLAYLIST_URL =
  "https://www.youtube.com/embed/videoseries?list=PLe7X8qvalB-e7Es98HGHrYJ2sWncux71d";

const PortfolioPage = () => {
  const location = useLocation();
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    // read hash like #VIDEO_ID
    const hash = location.hash?.replace("#", "");
    if (hash) setVideoId(hash);
    else setVideoId(null);
  }, [location.hash]);

  const src = videoId
    ? `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0`
    : YT_PLAYLIST_URL;

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>VIDEO PLAYLIST</h1>
      <div
        style={{ width: "100%", maxWidth: 720, aspectRatio: "16/9" }}
        className="yt-wrapper"
      >
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          src={src}
          title={videoId ? `YouTube video ${videoId}` : "YouTube playlist"}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PortfolioPage;
