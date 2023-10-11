import React, { useState } from 'react';
import MainMenu from '../MainMenu';

const Mindfulness = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedMood, setSelectedMood] = useState('');
  const [selectedAudio, setSelectedAudio] = useState('');
  const [selectedAudioType, setSelectedAudioType] = useState('');
  const [audioList, setAudioList] = useState([]);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setSelectedMood('');
  };

  const handleMoodChange = (e) => {
    setSelectedMood(e.target.value);
    setSelectedAudioType('');
  };

  const handleAudioChange = (e) => {
    setSelectedAudio(e.target.files[0]);
  };

  const handleAudioTypeChange = (e) => {
    setSelectedAudioType(e.target.value);
  };

  const handleAudioAdd = () => {
    if (selectedAudio) {
      const newAudio = {
        title: selectedOption,
        mood: selectedMood,
        audio: selectedAudio,
        audioType: selectedAudioType
      };

      setAudioList([...audioList, newAudio]);
      setSelectedAudio(null);
    }
  };

  const handleAudioDelete = (index) => {
    const updatedAudioList = [...audioList];
    updatedAudioList.splice(index, 1);
    setAudioList(updatedAudioList);
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className='search1'>
            <h3 className='reg'>Choice Audio</h3>
          </div>
          <div className='container4'>
            <label>
              Select:
              <br></br>
              <select value={selectedOption} onChange={handleOptionChange} className='select'>
                <option value="">Choose an option</option>
                <option value="Mindfulness">Mindfulness</option>
                <option value="Sleep">Sleep</option>
              </select>
            </label>
            {selectedOption === 'Mindfulness' && (
              <label>
                Mood Select:
                <br></br>
                <select value={selectedMood} onChange={handleMoodChange} className='select'>
                  <option value="">Choose a mood</option>
                  <option value="Calm">Calm</option>
                  <option value="Relaxed">Relaxed</option>
                  <option value="Focused">Focused</option>
                </select>
              </label>
            )}
            {selectedMood && (
              <label>
                Audio Type:
                <br></br>
                <select value={selectedAudioType} onChange={handleAudioTypeChange} className='select'>
                  <option value="">Choose an audio type</option>
                  <option value="Instrumental">Instrumental</option>
                  <option value="Vocal">Vocal</option>
                </select>
              </label>
            )}
            <label>
              Select Audio:
              <br></br>
              <input type="file" accept="audio/*" onChange={handleAudioChange} required />
            </label>

          </div>
          <button onClick={handleAudioAdd} className='button3'>Submit</button>
          <table className='table3'>
            <thead>
              <tr>
                <th>Title</th>
                <th>Mood</th>
                <th>Audio</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {audioList.map((audio, index) => (
                <tr key={index}>
                  <td>{audio.title}</td>
                  <td>{audio.mood}</td>
                  <td>
                    <audio controls>
                      <source src={URL.createObjectURL(audio.audio)} type="audio/mp3" />
                    </audio>
                  </td>
                  <td>{audio.audioType}</td>
                  <td>
                    <button onClick={() => handleAudioDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Mindfulness;
