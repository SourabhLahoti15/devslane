import React, { memo } from "react";
import classNames from "classnames";

function FormInput({ error, touched, ...props }) {

    let borderClass = "border-gray-400";
    if (error && touched) {
        borderClass = "border-red-500";
    }
    return (
        <div>
            <label className="sr-only" htmlFor={props.id}>
                {props.label}
            </label>
            <input
                className={classNames("p-2 text-white w-full bg-transparent border rounded", borderClass, props.className)}               
                {...props}
                required
            />
            {error && touched && (
                <div className="text-red-700">{error}</div>
            )}
        </div>
    );
}

export default memo(FormInput);
