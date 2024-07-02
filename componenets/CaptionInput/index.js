
import { useState } from 'react';

const CaptionInput = ({ addCaption }) => {
  const [text, setText] = useState('');
  const [timestamp, setTimestamp] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addCaption({ text, timestamp });
    setText('');
    setTimestamp('');
  };

  return (
    <form onSubmit={handleSubmit} className='text-center'>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="caption"
        required
      />
      <input
        type="number"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
        placeholder="timestamp (in seconds)"
        required
      />
      <button type="submit">Add Caption</button>
    </form>
  );
};

export default CaptionInput;
