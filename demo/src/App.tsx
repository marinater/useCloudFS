import React, { useEffect, useState  } from 'react';
import { useAuth } from 'reactfire'
import { useCloudFS, useFirebaseController } from 'usecloudfs';
import './App.css';
import logo from './logo.svg';

function App() {

    


    
    const cloudFS = useCloudFS(useFirebaseController)
    
    const auth = useAuth()
    
    useEffect(() => {
        
        const signin = auth.signInWithEmailAndPassword("test-email@gmail.com","test-password")

        auth.onAuthStateChanged(function(user) {
            if (user) {
                console.log(auth.currentUser)
            } else {
              console.log("no user")
            }
          });

        console.log(`useCloudFS.signedIn: ${cloudFS.signedIn}`)
        if (cloudFS.signedIn) {
            console.log(`useCloudFS.user: ${cloudFS.user}`)
            cloudFS.fsOps.uploadFile('bucket1-a', new File([], 'file-1.txt'))
        }
    }, [cloudFS.signedIn])

    const [filename,updateName] = useState("")

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <div>
                    <input type="text" value={filename} onChange={(e) => updateName(e.target.value)} />
                    <button type="button" onClick={() => console.log(`bucket1/${filename}`)}>Upload</button>
                </div>
            </header>
        </div>
  );
}

export default App;
