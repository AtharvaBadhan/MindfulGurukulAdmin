import React, { useState } from 'react';
import MainMenu from '../MainMenu';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';

const PrivacyPolicy = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleSave = () => {
    const contentState = editorState.getCurrentContent();
    const rawText = convertToRaw(contentState);
    const text = rawText.blocks.map((block) => block.text).join('\n');
    // Here, you can perform the save operation using the 'text' variable

    console.log('Saved:', text);
  };

  return (
    <div>
      <div className='container-main'>
        <div className='side-menu'>
          <MainMenu />
        </div>
        <div className='main-screen'>
          <div className="search1">
            <h1 className='reg'>Privacy Policy</h1>
            <button onClick={handleSave}>Save</button>
          </div>
          <div>
            <Editor
              editorState={editorState}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={handleEditorStateChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
