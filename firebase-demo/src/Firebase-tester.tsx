import React, { useEffect, useRef, useState } from 'react';


function FirebaseTester(props: any) {

    const [test1, setTest1] = useState(true);
    const [test2, setTest2] = useState(true);
    const [test3, setTest3] = useState(true);
    const [test4, setTest4] = useState(true);
    const [test5, setTest5] = useState(true);
    const [test6, setTest6] = useState(true);
    const [downUrl, setUrl] = useState("");


    useEffect(() => {
        if (props.cloudFS.signedIn) {

            const sampleFile =  new File([], 'test-upload2.txt',{
                type: "text/plain",
              });
            console.log(sampleFile.type)

            props.cloudFS.fsOps.uploadFile('bucket1',sampleFile).catch((err:any) => setTest1(false) )

            props.cloudFS.fsOps.getDownloadURL('bucket1/test-upload2.txt').catch((err:any) => {console.info(err);setTest2(false);}).then((url:any) => setUrl(url))

            props.cloudFS.fsOps.renameFile('bucket1/test-upload2.txt','bucket1/renamed-test-upload2.txt').catch((err:any) => setTest3(false) )

            props.cloudFS.fsOps.deleteFile('bucket1/test-upload2.txt').catch((err:any) => {console.info(err);setTest4(false);} )

            props.cloudFS.fsOps.createFolder('bucket3').catch((err:any) => {console.info(err);setTest5(false);})
			    .then(
			        () => {
			            props.cloudFS.fsOps.createFolder('bucket3/subBucket1').catch((err:any) => {console.info(err);setTest5(false);})
			            props.cloudFS.fsOps.createFolder('bucket3/subBucket2').catch((err:any) => {console.info(err);setTest5(false);})
			        }
                )
                
            props.cloudFS.fsOps.deleteFolder('bucket3').catch( (err:any) =>{console.info(err);setTest6(false);} )
           
        }
        
    },[props.cloudFS.signedIn]);

   
    return(

        <div style={{margin:"50px"}}>
            <div>
                <h2>File Operations Test Suite</h2>
                <div>Upload File Test Passed:<span> {`${test1}`}</span></div>
                <div>Download Url Test Passed:<span> {`${test2}`}</span>
                    <div style={{fontSize:"12px",width:"800px",overflow:"hidden"}}>{`Download Url ${downUrl}`}</div>
                </div>
                <div>Rename File Test Passed:<span> {`${test3}`}</span></div>
                <div>Delete File Test Passed:<span> {`${test4}`}</span></div>
            </div>
            <div>
                <h2>Folder Operations Test Suite</h2>
                <div>Create Folder Test Passed:<span> {`${test5}`}</span></div>
                <div>Delete Folder Test Passed:<span> {`${test6}`}</span></div>
            </div>
        </div>

    )

}

export default FirebaseTester;