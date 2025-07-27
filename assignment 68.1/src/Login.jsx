import React from "react";
import Input from "./Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Login() {
  function handleLogin(values) {
    console.log("Form submitted with:", values);
  }

  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     password: "",
  //   },
  //   onSubmit: callLoginAPI,
  //   validateOnMount: true,
  //   validationSchema: Schema,
  // });

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
            <Input
              label="email"
              name="email"
              type="email"
              placeholder="EMAIL"
              autoComplete="email"
            />
            <Input
              label="password"
              name="password"
              type="password"
              placeholder="PASSWORD"
              autoComplete="password"
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
        </Form>
      </Formik>
      <p className="text-white">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}

export default Login;
