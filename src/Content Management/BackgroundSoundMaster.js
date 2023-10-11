import React, { useState } from 'react';
import MainMenu from '../MainMenu';

const BackgroundSoundMaster = () => {
  const [selectedType, setSelectedType] = useState('');
  const [audioName, setAudioName] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [audioList, setAudioList] = useState([]);

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const handleAudioNameChange = (event) => {
    setAudioName(event.target.value);
  };

  const handleAudioFileChange = (event) => {
    const file = event.target.files[0];
    setAudioFile(file);
  };

  const handleAddAudio = () => {
    if (audioName && audioFile) {
      const audio = {
        title: audioName,
        type: selectedType,
        file: audioFile,
      };
      setAudioList([...audioList, audio]);
      setAudioName('');
      setAudioFile(null);
    }
  };

  const handleDeleteAudio = (index) => {
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
          <div className="search1">
            <h1 className='reg'>Background Sound Master</h1>
          </div>

          <div className="container3">
            <label htmlFor="type">Select Type:</label>
            <select className='id' id="type" value={selectedType} onChange={handleTypeChange}>
              <option value="">Select Type</option>
              <option value="Tik tok">Tik tok</option>
              <option value="Live Gaming">Live Gaming</option>
              <option value="Splash Screens">Splash Screens</option>
            </select>

            <label htmlFor="audioName">Audio Name:</label>
            <input
              type="text"
              id="audioName"
              value={audioName}
              onChange={handleAudioNameChange}
            />

            <label htmlFor="audioUpload">Audio Upload:</label>
            <input
              type="file"
              id="audioUpload"
              onChange={handleAudioFileChange}
              accept="audio/*"
            />
          </div>
          <button className="button3" onClick={handleAddAudio}>
            Submit
          </button>


          <div className="table3">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Audio</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {audioList.map((audio, index) => (
                  <tr key={index}>
                    <td>{audio.title}</td>
                    <td>{audio.type}</td>
                    <td>
                      <audio src={URL.createObjectURL(audio.file)} controls />
                    </td>
                    <td>
                      <svg onClick={() => handleDeleteAudio(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackgroundSoundMaster;
