import React from "react";
import classNames from "classnames";
import { useField } from "formik";

function Input(props) {

    const field = useField(props.name);

    const [field0, field1, field2] = field;

    const {name, value, onChange, onBlur} = field0;
    const {error, touched} = field1;

    let borderClass = "border-gray-400";
    if (error && touched){
        borderClass = "border-red-500";
    }

    return (
        <div>
        <label className="sr-only" htmlFor={props.id}>
            {props.label}
        </label>
        <input
            className={classNames("p-2 text-white w-full bg-transparent border rounded", borderClass, props.className)}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            name={name}
            type={props.type}
            id={props.id}
            autoComplete={props.autoComplete}
            placeholder={props.placeholder}
            required
        />
        {touched && error && (
            <div className="text-red-700">{error}</div>
        )}
        </div>
    );
}

export default Input;
