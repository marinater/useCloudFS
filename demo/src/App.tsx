import React, { useEffect } from 'react';
import { useAmplifyController, useCloudFS } from 'usecloudfs';
import './App.css';
import logo from './logo.svg';

function App() {
    const cloudFS = useCloudFS(useAmplifyController)

    useEffect(() => {
        console.log(`useCloudFS.signedIn: ${cloudFS.signedIn}`)
        if (cloudFS.signedIn) {
            console.log(`useCloudFS.user: ${cloudFS.user.username}`)
            cloudFS.fsOps.uploadFile('folder-b', new File([], 'file-1.txt'))
        }
    }, [cloudFS.signedIn])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
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
