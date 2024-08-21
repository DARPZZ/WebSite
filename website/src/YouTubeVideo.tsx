const YouTubeVideo = ({ videoId }) => (
    <iframe 
      id="iframe"
      width="800" 
      height="450"
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&mute=1`} 
      title="YouTube Video Player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
     
    >
    </iframe>
);

export default YouTubeVideo;
