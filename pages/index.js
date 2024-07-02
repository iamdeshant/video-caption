
import { useState } from 'react';
import VideoInput from '../componenets/VideoInput';
import CaptionInput from '../componenets/CaptionInput';
import VideoPlayerWithCaptions from '../componenets/VideoPlayerWithCaptions';

const Home = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [captions, setCaptions] = useState([]);

  const addCaption = (caption) => {
    setCaptions((prevCaptions) => [...prevCaptions, caption]);
  };

  return (
    <div className='p-2'>
      <p className='text-center bg-blue-600 text-[24px]'>Video Caption App</p>
      <VideoInput setVideoUrl={setVideoUrl} />
      <CaptionInput addCaption={addCaption} />
      {videoUrl && <VideoPlayerWithCaptions videoUrl={videoUrl} captions={captions} />}
    </div>
  );
};

export default Home;



