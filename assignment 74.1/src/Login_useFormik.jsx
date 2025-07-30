import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";

function Login_useFormik() {
    const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(8).required(),
    });
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: formSubmit,
        validateOnMount: true,
        validationSchema: schema,
    });
    function formSubmit() {
        console.log("submitting form:", formik.values);
    }
    return (
        <div className="bg-blue-700 h-screen w-full flex flex-col gap-28 items-center justify-center">
            <form
                onSubmit={formik.handleSubmit}
                className="w-[18rem] flex flex-col gap-8"
            >
                <div className="flex flex-col gap-4">
                    <FormInput
                        label="email"
                        name="email"
                        type="email"
                        id="email"
                        placeholder="EMAIL"
                        autoComplete="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.errors.email}
                        touched={formik.touched.email}
                        onBlur={formik.handleBlur}
                    />
                    <FormInput
                        label="password"
                        name="password"
                        type="password"
                        id="password"
                        placeholder="PASSWORD"
                        autoComplete="new-password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.errors.password}
                        touched={formik.touched.password}
                        onBlur={formik.handleBlur}
                    />
                </div>
                <div className="w-full flex flex-col gap-1">
                    <button
                        className="bg-white rounded p-2 text-blue-700 w-full"
                        type="submit"
                    >
                        LOGIN
                    </button>
                    <Link to="/forgetpassword" className="text-white self-end">
                        Forget password?
                    </Link>
                </div>
            </form>
            <p className="text-white">
                Don't have an account? <Link to="/signup">Sign up</Link>
            </p>
        </div>
    );
}

export default Login_useFormik;
