import React, { useState } from 'react';
import MainMenu from '../MainMenu';

const Splash = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [ageGroup, setAgeGroup] = useState('13-18');
  const [language, setLanguage] = useState('English');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAgeGroupChange = (event) => {
    setAgeGroup(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleAddComment = () => {
    const comment = {
      id: Date.now(),
      comment: newComment,
      ageGroup,
      language,
    };

    setComments([...comments, comment]);
    setNewComment('');
  };

  const handleDeleteComment = (id) => {
    const updatedComments = comments.filter((comment) => comment.id !== id);
    setComments(updatedComments);
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className='search1'>
            <h1 className='reg'>Splash Page</h1>
            <button onClick={openAddModal}>Add Comment</button>


          </div>
          <table className='admintable'>
            <thead>
              <tr>
                <th>Comment</th>
                <th>Age Group</th>
                <th>Language</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {comments.map((comment) => (
                <tr key={comment.id}>
                  <td>{comment.comment}</td>
                  <td>{comment.ageGroup}</td>
                  <td>{comment.language}</td>
                  <td>
                    <svg onClick={() => handleDeleteComment(comment.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isAddModalOpen && (
            <div>
              <div className="add-sub-admin-modal" onClick={closeAddModal}></div>
              <form className="add-sub-admin-form" onSubmit={handleSubmit}>
                <div className='splash-cnt'>
                  <h1>Add Comment</h1>
                </div>
                <div className='comment-container' >
                  <div>
                    <label htmlFor="comment">Comment:</label>
                    <input
                      type="text"
                      id="comment"
                      value={newComment}
                      onChange={handleCommentChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="ageGroup">Age Group:</label>
                    <select className='select' id="ageGroup" value={ageGroup} onChange={handleAgeGroupChange}>
                      <option value="13-18">13-18</option>
                      <option value="18+">18+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="language">Language:</label>
                    <select className='select' id="language" value={language} onChange={handleLanguageChange}>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                    </select>
                  </div>
                </div>

                <div className='buttonCont'>
                  <button type='submit' className='submit' onClick={handleAddComment}>Save</button>
                  <button type='submit' className='buttoncancel' onClick={() => setIsAddModalOpen(false)}>Cancel</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Splash;
