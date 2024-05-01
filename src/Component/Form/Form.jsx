import React, { useState } from "react";
import './Form.css';

const Form = () => {
    const [fileContent, setFileContent] = useState('');

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            setFileContent(event.target.result);
        };
        reader.readAsText(file);
    };

    return (
        <div className="wrapper">
            <form action="">
                <div className="input-group">
                    <label>Input Text : </label>
                    <input type="text" id="textInput" required />   
                </div>
                <div className="input-group">
                    <label>File Input : </label>
                    <input type="file" id="fileInput" accept=".txt" onChange={handleFileChange} />
                </div>
                {fileContent && (
                    <div className="file-content">
                        <p>{fileContent}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;