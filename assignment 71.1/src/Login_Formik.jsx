import React from "react";
import FormInput from "./FormInput";
import classNames from "classnames";
import { Form, Formik, useField } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function FormikInput(props) {
    const [field, meta, helpers] = useField(props.name);

    let borderClass = "border-gray-400";
    if (meta.error && meta.touched) {
        borderClass = "border-red-500";
    }
    return (
        <div>
            <label className="sr-only" htmlFor={props.id}>
                {props.label}
            </label>
            <input
                className={classNames(
                    "p-2 text-white w-full bg-transparent border rounded",
                    borderClass,
                    props.className
                )}
                {...props}
                {...field}
                required
            />
            {meta.error && meta.touched && (
                <div className="text-red-700">{meta.error}</div>
            )}
        </div>
    );
}

function Login_Formik() {
    function handleLogin(values) {
        console.log("Form submitted with:", values);
    }

    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
    });

    const initialValues = { email: "", password: "" };

    return (
        <div className="bg-blue-700 h-screen w-full flex flex-col gap-28 items-center justify-center">
            <Formik
                initialValues={initialValues}
                onSubmit={handleLogin}
                validationSchema={schema}
                validateOnMount={true}
            >
                <Form className="w-[18rem] flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <FormikInput
                            label="email"
                            name="email"
                            type="email"
                            placeholder="EMAIL"
                            autoComplete="email"
                        />
                        <FormikInput
                            label="password"
                            name="password"
                            type="password"
                            placeholder="PASSWORD"
                            autoComplete="new-password"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-1">
                        <button
                            className="bg-white rounded p-2 text-blue-700 w-full"
                            type="submit"
                        >
                            LOGIN
                        </button>
                        <Link
                            to="/forgetpassword"
                            className="text-white self-end"
                        >
                            Forget password?
                        </Link>
                    </div>
                </Form>
            </Formik>
            <p className="text-white">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    );
}

export default Login_Formik;
