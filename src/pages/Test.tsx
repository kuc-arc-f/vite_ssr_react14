import * as React from 'react';
import { addAndMultiply } from '../add'
import { multiplyAndAdd } from '../multiply'
let apiData: string = "";
//
export default function Test() {
    const [updatetime, setUpdatetime] = React.useState("");
    const msg: string = "Test";
    //
    const updateTimestap = function() {
        const dt = new Date().toString();
        setUpdatetime(dt);
    }
    const test = async function(){
        const res = await fetch("/api/test");
        const d = await res.json();
        apiData = d.msg;
        updateTimestap();
console.log(d);
    };
    //
    return (
    <>
        <h1>Test!!</h1>
        <p>apiData=[ {apiData} ]</p>
        <hr />
        <div>{addAndMultiply(1, 2, 3)}</div>
        <div>{multiplyAndAdd(1, 2, 3)}</div>
        <hr />
        <button onClick={()=>{test()}}>Test</button>
    </>
    )
}
