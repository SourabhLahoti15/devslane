import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "./Input";

function Signup() {
  function handleSignup(values) {
    console.log("Signup values:", values);
  }

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(8).required(),
    confirmPassword: Yup.string().min(8, "password must be at least 8 characters").required(),
  });

  return (
    <div className="bg-blue-700 h-screen w-full flex flex-col gap-10 items-center justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSignup}
      >
        <Form className="w-[18rem] flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <Input label="Name" name="name" type="text" placeholder="NAME" />
            <Input
              label="Email"
              name="email"
              type="email"
              placeholder="EMAIL"
              autoComplete="email"
            />
            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="PASSWORD"
              autoComplete="new-password"
            />
            <Input
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="CONFIRM PASSWORD"
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <button
              type="submit"
              className="bg-white rounded p-2 text-blue-700 w-full"
            >
              Signup
            </button>
          </div>
        </Form>
      </Formik>
      <p className="text-white">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
