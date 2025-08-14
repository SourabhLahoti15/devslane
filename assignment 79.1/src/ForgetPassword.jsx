import React from "react";
import FormInput from './FormInput';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function ForgetPassword() {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
  });

  const initialValues = { email: "" };

  function handleResetRequest(values) {
    console.log("Reset password requested for:", values.email);
  }

  return (
    <div className="bg-grey h-screen w-full flex flex-col items-center justify-center">
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleResetRequest}
      >
        <Form className="p-8 bg-white flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-semibold">Forget your password?</h1>
            <p>Please enter the email you use to log in to your account</p>
          </div>

          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email" className="w-full">Your work email</label>
            <FormInput
              label="Your work email"
              name="email"
              type="email"
              id="email"
              placeholder="EMAIL"
              autoComplete="email"
              className="text-black border-b-2 border-black w-full outline-none"
            />
          </div>

          <div className="flex flex-col gap-2 justify-center items-center w-full">
            <button type="submit" className="bg-blue-700 text-white p-2 rounded w-full">
              Request password reset
            </button>
            <Link to="/signup" className="text-blue-700">Back to Sign up</Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ForgetPassword;
