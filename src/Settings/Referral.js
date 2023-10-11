import React, { useState } from 'react';
import MainMenu from '../MainMenu';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';

const Referral = () => {
  const [referrerEditorState, setReferrerEditorState] = useState(EditorState.createEmpty());
  const [referredEditorState, setReferredEditorState] = useState(EditorState.createEmpty());
  const [displayOption, setDisplayOption] = useState('referrer');
  const [referredUserPoints, setReferredUserPoints] = useState('');
  const [referrerUserPoints, setReferrerUserPoints] = useState('');
  const [invitationText, setInvitationText] = useState('');

  const handleReferrerEditorStateChange = (newEditorState) => {
    setReferrerEditorState(newEditorState);
  };

  const handleReferredEditorStateChange = (newEditorState) => {
    setReferredEditorState(newEditorState);
  };

  const handleDisplayOptionChange = (option) => {
    setDisplayOption(option);
  };

  const handleSave = () => {
    const referrerContentState = referrerEditorState.getCurrentContent();
    const referrerRawText = convertToRaw(referrerContentState);
    const referrerText = referrerRawText.blocks.map((block) => block.text).join('\n');

    const referredContentState = referredEditorState.getCurrentContent();
    const referredRawText = convertToRaw(referredContentState);
    const referredText = referredRawText.blocks.map((block) => block.text).join('\n');

    // Here, you can perform the save operation using the 'referrerText' and 'referredText' variables
    console.log('Saved Referrer User Policy:', referrerText);
    console.log('Saved Referred User Policy:', referredText);
    console.log('Referred User Points:', referredUserPoints);
    console.log('Referrer User Points:', referrerUserPoints);
    console.log('Invitation Text:', invitationText);
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className="search1">
            <h1 className='reg'>Referral</h1>
            <button onClick={handleSave}>Save</button>
          </div>
          <div className='subscriptionUserList1'>
            <div className='userbuttoncontainer1'>
              <div
                className={displayOption === 'referrer' ? 'active-option' : 'option'}
                onClick={() => handleDisplayOptionChange('referrer')}
              >
                Refer User
              </div>

              <div
                className={displayOption === 'referred' ? 'active-option' : 'option'}
                onClick={() => handleDisplayOptionChange('referred')}
              >
                Referral Program
              </div>
            </div>
          </div>
          {displayOption === 'referrer' && (
            <div className='reffer'>

              <label>Referred User Points:</label>
              <input
                type="number"
                value={referredUserPoints}
                onChange={(e) => setReferredUserPoints(e.target.value)}
              />
              <label>Referrer User Points:</label>
              <input
                type="number"
                value={referrerUserPoints}
                onChange={(e) => setReferrerUserPoints(e.target.value)}
              />
              <label>Invitation Text:</label>
              <input
                className='id1'
                type='text'
                value={invitationText}
                onChange={(e) => setInvitationText(e.target.value)}
              />
            </div>
          )}
          {displayOption === 'referred' && (
            <>
              <h2>Referral Program</h2>
              <div>
                <Editor
                  editorState={referredEditorState}
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                  onEditorStateChange={handleReferredEditorStateChange}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Referral;
