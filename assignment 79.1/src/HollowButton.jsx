import clsx from "clsx";
import { memo } from "react";

function Button(props){
    return (
        <button className={clsx("px-5 py-2 h-fit whitespace-nowrap text-red-500 border-2 border-red-500 bg-white rounded font-bold",props.className)}  onClick={props.onClick}>{props.children}</button>
    )
}

export default memo(Button);