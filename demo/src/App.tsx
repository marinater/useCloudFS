import React, { useRef } from 'react';
import { useAuth } from 'reactfire';
import { useAmplifyController, useCloudFS } from 'usecloudfs';
import './App.css';
import logo from './logo.svg';

function App() {
    const cloudFS = useCloudFS(useAmplifyController)
    const auth = useAuth()

    if (cloudFS.signedIn) {
        cloudFS.fsOps.createFolder('folder-e')
        cloudFS.fsOps.deleteFolder('folder-e')
        cloudFS.fsOps.deleteFile('file-1.txt')
    }

    const inputRef = useRef<HTMLInputElement>(null)
    const fileUploadCallback = () => {
        if (!inputRef.current) return
        const files = inputRef.current.files
        if (!files || files.length === 0) {
            console.info('file input is empty')
            return
        }

        console.log(`useCloudFS.signedIn: ${cloudFS.signedIn}`)
        if (cloudFS.signedIn) {
            console.log(`useCloudFS.user: ${cloudFS.user.username}`)
            cloudFS.fsOps.uploadFile('folder-a', files[0])
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>

                <input type="file" ref={inputRef} onChange={fileUploadCallback}/>

                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
  );
}

export default App;
