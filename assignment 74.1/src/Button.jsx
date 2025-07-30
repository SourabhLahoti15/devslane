import clsx from "clsx";
import { memo } from "react";

function Button(props){
    return (
        <button className={clsx("px-5 py-2 h-fit whitespace-nowrap bg-red-500 text-white rounded font-bold",props.className)}  onClick={props.onClick}>{props.children}</button>
    )
}

export default memo(Button);