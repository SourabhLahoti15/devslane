import React, { useState } from "react";
import TableRow from "./Tablerow"

function Table(){
    const [num, updatenum] = useState(2);  

    function next(){
        updatenum(num+1);
    }

    return(
        <div className='flex flex-col items-center gap-2'>
            <TableRow num={num} row="1" />
            <TableRow num={num} row="2" />
            <TableRow num={num} row="3" />
            <TableRow num={num} row="4" />
            <button onClick={next} className='bg-indigo-500 font-bold px-6 py-2 rounded text-white'>next</button>
        </div>
    );
}

export default Table;