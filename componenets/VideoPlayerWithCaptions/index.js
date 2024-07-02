
import ReactPlayer from 'react-player';
import { useState, useRef, useEffect } from 'react';

const VideoPlayerWithCaptions = ({ videoUrl, captions }) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [currentCaption, setCurrentCaption] = useState('');

  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const caption = captions.find((c) => parseFloat(c.timestamp) <= currentTime && currentTime < parseFloat(c.timestamp) + 5);
        if (caption) {
          setCurrentCaption(caption.text);
        } else {
          setCurrentCaption('');
        }
      }
    }, 100);

    return () => clearInterval(interval);
  }, [captions]);

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={videoUrl}
        playing={playing}
        width="100%"
        height="70vh"
      />
      <div className="caption">{currentCaption}</div>
      <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
      <style jsx>{`
        .caption {
          position: absolute;
          bottom: 100px;
          width: 100%;
          text-align: center;
          font-size: 24px;
          color: white;
          text-shadow: 2px 2px 4px #000000;
        }
      `}</style>
    </div>
  );
};

export default VideoPlayerWithCaptions;
