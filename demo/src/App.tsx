import React, { useEffect, useState } from 'react';
import { useAuth } from 'reactfire';
import { useCloudFS, useFirebaseController } from 'usecloudfs';
import './App.css';
import logo from './logo.svg';

function App() {
    const cloudFS = useCloudFS(useFirebaseController)
    const auth = useAuth()
    const [filename,updateName] = useState("")
    const [signedIn, setSignedIn] = useState(false)

    useEffect(() => {
        if (!auth.currentUser)
            auth.signInWithEmailAndPassword("test-email@gmail.com", "test-password")

        auth.onAuthStateChanged(user => {
            console.log(user || 'signed out')
            setSignedIn(!!user)
        });

        console.log(cloudFS)
        if (cloudFS.signedIn) {
            console.log(`useCloudFS.user: ${cloudFS.user}`)
            cloudFS.fsOps.deleteFile('bucket1/helloagain2.txt').catch(err => console.info(err) )
            // cloudFS.fsOps.uploadFile('bucket1', new File([], 'file-1.txt')).catch(err => console.info(err) )
            // cloudFS.fsOps.deleteFile('bucket1/file-1.txt').catch(err => console.info(err) )
            // cloudFS.fsOps.renameFile('bucket1/file-1.txt','renamedfile.txt').catch(err => console.info(err) )
        }
    }, [cloudFS.signedIn])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
  );
}

export default App;
