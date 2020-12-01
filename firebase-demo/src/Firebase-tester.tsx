import React, { useEffect, useRef, useState } from 'react';


function FirebaseTester(props: any) {

    const [testsRan, settestsRan] = useState(false);
    const [permTestsRan, setpermTestsRan] = useState(false);
    const [test1, setTest1] = useState(true);
    const [test2, setTest2] = useState(true);
    const [test3, setTest3] = useState(true);
    const [test4, setTest4] = useState(true);
    const [test5, setTest5] = useState(true);
    const [test6, setTest6] = useState(true);
    const [test7, setTest7] = useState(true);
    const [downUrl, setUrl] = useState("");

    const [permtest1, setpermtest1] = useState(false);

    const runTests = async (tests: (()=>void)[]) => {
        for(const test of tests){
            await test();
        }
    }


    const switchUser = async (permtestarr: any) => {
        await props.auth.signOut().then(()=>props.auth.signInWithEmailAndPassword("test-email2@gmail.com", "test-password")).then(() => {runTests(permtestarr); console.log(props.auth.currentUser);})
        await props.auth.signOut().then(()=>props.auth.signInWithEmailAndPassword("test-email@gmail.com", "test-password"));
        console.log(props.auth.currentUser);
    }

    const user1TestOps = () =>{
        
        console.log(props.auth.currentUser);

        const sampleFile =  new File([], 'test-upload2.txt',{
            type: "text/plain",
          });
        console.log(sampleFile.type)

        const calltest1 = () => props.cloudFS.fsOps.uploadFile('bucket1',sampleFile).catch((err:any) => setTest1(false) )

        const calltest2 = () => props.cloudFS.fsOps.getDownloadURL('bucket1/test-upload2.txt').catch((err:any) => {console.info(err);setTest2(false);}).then((url:any) => setUrl(url))

        const calltest3 = () => props.cloudFS.fsOps.renameFile('bucket1/test-upload2.txt','bucket1/renamed-test-upload2.txt').catch((err:any) => setTest3(false) )

        const calltest4 = () => props.cloudFS.fsOps.deleteFile('bucket1/test-upload2.txt').catch((err:any) => {console.info(err);setTest4(false);} )

        const calltest5 = () => props.cloudFS.fsOps.createFolder('bucket3').catch((err:any) => {console.info(err);setTest5(false);})
            .then(
                () => {
                    props.cloudFS.fsOps.createFolder('bucket3/subBucket1').catch((err:any) => {console.info(err);setTest5(false);})
                    props.cloudFS.fsOps.createFolder('bucket3/subBucket2').catch((err:any) => {console.info(err);setTest5(false);})
                }
            )
        const testDate = new Date();
        testDate.setDate(testDate.getDate() + 1);
        const calltest6 = () =>  props.cloudFS.fsOps.setAutoDelete('bucket3',testDate).catch( (err:any) =>{console.info(err);setTest6(false);} )
        const calltest7 = () => props.cloudFS.fsOps.deleteFolder('bucket3').catch( (err:any) =>{console.info(err);setTest7(false);} )
       
        const testarr = [calltest1,calltest2, calltest3, calltest4, calltest5, calltest6, calltest7];

        runTests(testarr);
        settestsRan(true);
        
    }
    const user1Tests = async () => {
        await user1TestOps()
    }


    useEffect(() => {
        if (props.cloudFS.signedIn && !testsRan && props.auth.currentUser.uid  === "nZjFOjp1fjcV3EVbQ4Xm9IWFTQk2") {
            
            user1Tests();

            settestsRan(true);
            return;
        }

       /* if (props.cloudFS.signedIn && !permTestsRan) {
            
            setpermTestsRan(true);

            const sampleFile =  new File([], 'test-upload2.txt',{
                type: "text/plain",
              });
            
            const callpermtest1 = async () => await props.cloudFS.fsOps.uploadFile('bucket1',sampleFile).catch((err:any) => setTest1(true) )
            console.log("Permissions Tests")
            const permtestarr = [callpermtest1];
            
            switchUser(permtestarr);
 
        }*/
        
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
                <div>Set Auto Delete Test Passed <span>{`${test6}`}</span></div>
                <div>Delete Folder Test Passed:<span> {`${test7}`}</span></div>
            </div>
            <div>
                <h2>Permisssions Test Suite</h2>
                <div>Unauthorized Upload Test Passed:<span> {`${permtest1}`}</span></div>
            </div>
        </div>

    )

}

export default FirebaseTester;