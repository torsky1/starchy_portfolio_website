const YT_PLAYLIST_URL =
  "https://www.youtube.com/embed/videoseries?list=PLe7X8qvalB-e7Es98HGHrYJ2sWncux71d";

const PortfolioPage = () => (
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <h1>VIDEO PLAYLIST</h1>
    <div style={{ width: "100%", maxWidth: 720, aspectRatio: "16/9" }}>
      <iframe
        width="100%"
        height="400"
        src={YT_PLAYLIST_URL}
        title="YouTube playlist"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);

export default PortfolioPage;
