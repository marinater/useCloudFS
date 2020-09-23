import React, { useState } from "react";


import {useCloudFS, useFirebaseController} from 'usecloudfs'



export default function Demo(props){


    const [count, setCount] = useState(0);


    const callfb = () => {
        setCount(count+1);
    }


    
    const hook =  useCloudFS(useFirebaseController);

    

    return (

        <div style={{marginTop:"50px"}}><span>click this</span><button type="button" onClick={callfb }>Click Me!</button><span>{count}</span></div>
        
    );

}
