import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from 'reactfire';
import { useCloudFS, useFirebaseController } from 'usecloudfs';
import './App.css';
import logo from './logo.svg';

function App() {
    const cloudFS = useCloudFS(useFirebaseController)
    const auth = useAuth()
    const inputRef = useRef<HTMLInputElement>(null)
    const [signedIn, setSignedIn] = useState(false)

    useEffect(() => {
        if (!auth.currentUser)
            auth.signInWithEmailAndPassword("test-email@gmail.com", "test-password")

        auth.onAuthStateChanged(user => {
            setSignedIn(!!user)
        });

        if (cloudFS.signedIn) {
            // cloudFS.fsOps.createFolder('bucket2').catch(err => console.info(err) )
            // cloudFS.fsOps.renameFolder('bucket1','bucket1').catch(err => console.info(err))
            // cloudFS.fsOps.deleteFolder('bucket2').catch( err => console.info(err) )
            // cloudFS.fsOps.uploadFile('bucket1', new File([], 'test-upload2.txt')).catch(err => console.info(err) )
            // cloudFS.fsOps.getDownloadURL('bucket1/hw1.c').catch(err => console.info(err))
            // cloudFS.fsOps.deleteFile('bucket1/test-upload.txt').catch(err => console.info(err) )
            // cloudFS.fsOps.renameFile('bucket1/renamedfile2.txt','bucket1/renamedfile.txt').catch(err => console.info(err) )
        }
    }, [cloudFS.signedIn])

    const uploadFile = () => {
        if (!cloudFS.signedIn || !inputRef.current?.files)
            return

        const file = inputRef.current?.files?.item(0)
        if (!file)
            return

        cloudFS.fsOps.uploadFile('bucket1', file).catch(err => console.info(err))
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <input ref={inputRef} type='file' onChange={uploadFile}/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
  );
}

export default App;
