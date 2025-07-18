import React from "react";

function TableRow(props){
    return(
        <>
        <p className="text-indigo-500 font-semibold">{props.num} x {props.row} = {props.num * props.row}</p>
        </>
    )
}

export default TableRow;