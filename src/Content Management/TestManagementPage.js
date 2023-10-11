import React, { useState } from 'react';
import MainMenu from '../MainMenu';

const TestManagementPage = () => {
  const [questions, setQuestions] = useState([]);
  const [showCreateQuestion, setShowCreateQuestion] = useState(false);
  const [newQuestion, setNewQuestion] = useState('');
  const [newGroup, setNewGroup] = useState('');
  const [newOptions, setNewOptions] = useState(['', '', '', '']);
  const [correctOptionIndex, setCorrectOptionIndex] = useState(-1);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddQuestion = () => {
    setShowCreateQuestion(true);
  };

  const handleCreateQuestion = () => {
    const question = {
      question: newQuestion,
      options: newOptions,
      group: newGroup,
      correctOptionIndex,
    };
    setQuestions([...questions, question]);
    setShowCreateQuestion(false);
    setNewQuestion('');
    setNewGroup('');
    setNewOptions(['', '', '', '']);
    setCorrectOptionIndex(-1);
  };

  const handleEditQuestion = (index) => {
    setShowCreateQuestion(true);
    const question = questions[index];
    setNewQuestion(question.question);
    setNewGroup(question.group);
    setNewOptions([...question.options]);
    setCorrectOptionIndex(question.correctOptionIndex);
  };


  const handleDeleteQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className="search1">
            <h1 className='reg'>Live Gaming</h1>
            <button onClick={openAddModal}>Add Question</button>
          </div>

          <table className="admintable">
            <thead>
              <tr>
                <th>Question</th>
                <th>Option</th>
                <th>Group name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((question, index) => (
                <tr key={index}>
                  <td>{question.question}</td>
                  <td>{question.options.join(', ')}</td>
                  <td>{question.group}</td>
                  <td>
                    <svg onClick={() => handleEditQuestion(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    <svg onClick={() => handleDeleteQuestion(index)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div>
            {isAddModalOpen && (
              <div>
                <div className="add-sub-admin-modal" onClick={closeAddModal}></div>
                <form className="add-sub-admin-form1" onSubmit={handleSubmit}>
                  <h2>Add Question</h2>
                  <div className="popup-content">
                    <label className='tml1'>
                      Question:
                      <input
                        type="text"
                        value={newQuestion}
                        onChange={(e) => setNewQuestion(e.target.value)}
                      />
                    </label>
                    <label className='tml2'>
                      Select Group:

                      <select className='id select-grp'
                        value={newGroup}
                        onChange={(e) => setNewGroup(e.target.value)}
                      >
                        <option value="">Select Group</option>
                        <option value="General">General</option>
                        <option value="NEET">NEET</option>
                        <option value="JEE">JEE</option>
                      </select>
                    </label>
                    <label className='tml3'>
                      Add Your Options:
                      <br />
                      {newOptions.map((option, index) => (
                        <input
                          key={index}
                          type="text"
                          value={option}
                          onChange={(e) => {
                            const updatedOptions = [...newOptions];
                            updatedOptions[index] = e.target.value;
                            setNewOptions(updatedOptions);
                          }}
                        />
                      ))}
                    </label>
                    <label className='tml4'>
                      Correct Option:
                      <select className='id select-grp'
                        value={correctOptionIndex}
                        onChange={(e) => setCorrectOptionIndex(Number(e.target.value))}
                      >
                        <option value={-1}>Select Correct Option</option>
                        {newOptions.map((option, index) => (
                          <option key={index} value={index}>
                            Option {index + 1}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                  <div className='buttonCont'>
                    <button type='submit' className='submit' onClick={handleCreateQuestion}>Save</button>
                    <button type='submit' className='buttoncancel' onClick={() => setIsAddModalOpen(false)}>Cancel</button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestManagementPage;
