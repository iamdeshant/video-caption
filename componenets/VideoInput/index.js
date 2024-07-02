
import { useState } from 'react';

const VideoInput = ({ setVideoUrl }) => {
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setVideoUrl(url);
  };

  return (
    <form onSubmit={handleSubmit} className='text-center p-2'>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter video URL"
      />
      <button type="submit">Load Video</button>
    </form>
  );
};

export default VideoInput;
