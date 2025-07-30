import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import FormInput from "./FormInput";

function Login_withFormik(props) {
    return (
        <div className="bg-blue-700 h-screen w-full flex flex-col gap-28 items-center justify-center">
            <form
                onSubmit={props.handleSubmit}
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
                        value={props.values.email}
                        onChange={props.handleChange}
                        error={props.errors.email}
                        touched={props.touched.email}
                        onBlur={props.handleBlur}
                    />
                    <FormInput
                        label="password"
                        name="password"
                        type="password"
                        id="password"
                        placeholder="PASSWORD"
                        autoComplete="new-password"
                        value={props.values.password}
                        onChange={props.handleChange}
                        error={props.errors.password}
                        touched={props.touched.password}
                        onBlur={props.handleBlur}
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
        </div>
    );
}
const initialValues = {
    email: "",
    password: "",
};
const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
});
export default withFormik({
    validationSchema: schema,
    mapPropsToValues: () => ({
        email: "",
        password: "",
    }),
    handleSubmit: (values) => {
        console.log("Form submitted with:", values);
    },
})(Login_withFormik);
