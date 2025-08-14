import classNames from 'classnames';
import React, { useEffect, useState } from 'react'
import { CiCircleCheck } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { withAlert } from './withProvider';

function Alert({ alert, setAlert }) {
    if (!alert) {
        return;
    }
    useEffect(() => {
        if (alert) {
            const timeoutID = setTimeout(removeAlert, 3 * 1000);
            return () => clearTimeout(timeoutID);
        }
    }, [alert])
    const { type, message } = alert;
    function removeAlert() {
        setAlert(undefined);
    }

    let Icon;
    let bgcolor;
    let bordercolor;
    let textcolor;
    if (type === "success") {
        bgcolor = "bg-green-100";
        bordercolor = "border-green-500";
        textcolor = "text-green-900";
        Icon = CiCircleCheck
    } else if (type === "error") {
        bgcolor = "bg-red-100";
        bordercolor = "border-red-500";
        textcolor = "text-red-900";
        Icon = MdErrorOutline
    }
    // bg-teal-100
    // border-teal-500
    // text-teal-900
    return (
        <div className={classNames("fixed top-5 right-5 z-10 border-t-4 rounded-b px-4 py-3 shadow-md", bgcolor, textcolor, bordercolor)} >
            <div className="flex items-center gap-4">
                <div><Icon className="text-xl font-bold"></Icon></div>
                <div>
                    <p className="font-bold">{type}</p>
                    <p className="text-sm">{message}</p>
                </div>
                <button onClick={removeAlert}><RxCross2 /></button>
            </div>
        </div>
    )
}

export default withAlert(Alert);