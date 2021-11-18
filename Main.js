import React ,{useState} from 'react';
import App from './App';
import AppClass from './AppClass';

export default function Main(props){
    const[showAppComponent,setShowAppComponent]=useState(true);
    const[showAppClassComponent,setShowAppClassComponent]=useState(true);
    const toggleComponent=(asd)=>{
        if(asd==="f"){
            setShowAppComponent(!showAppComponent);
        }else {
            setShowAppClassComponent(!showAppClassComponent);
        }
    };

    return(
        <div style ={{display: "flex"}}>
       <div style={{flex:1}}>
    <button onClick={()=>toggleComponent("f") }>
     {showAppComponent ? "Hide":"Show"}
    </button>
    {showAppComponent && <App />}</div>
    <div style={{flex:1}}>
    <button onClick={()=>toggleComponent("c") }>
     {showAppClassComponent ? "Hide":"Show"}
    </button>
    {showAppClassComponent && <AppClass />}
    </div>
    </div>
    );
}
