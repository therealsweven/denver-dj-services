import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADMIN_LOGIN } from "../utils/mutations";
import * as Yup from "yup";
import Inquiries from "./Inquiries";
import CreateClientForm from "./forms/CreateClientForm";

export default function Admin() {
  const [adminLoggedIn, setAdminLoggedIn] = useState(
    localStorage.getItem("adminLoggedIn") || false
  );
  const [adminLogin] = useMutation(ADMIN_LOGIN);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Email address not formatted correctly")
      .required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      console.log("test");
      console.log(values);
      await adminLogin({
        variables: {
          email: values.email,
          password: values.password,
        },
      });
      resetForm();
      setAdminLoggedIn(true);
      localStorage.setItem("adminLoggedIn", "true");
      console.log("submitted");
    } catch (err) {
      console.error(err);
    }
    setSubmitting(false);
  };

  const adminLogout = () => {
    localStorage.setItem("adminLoggedIn", false);
    setAdminLoggedIn(false);
  };
  return (
    <>
      <h1 className="text-3xl font-semibold text-center mt-6">Admin</h1>
      {!adminLoggedIn && (
        <div className="flex justify-evenly">
          <div className="bg-secondary border border-accent rounded-lg max-w-[500px] min-w-[300px] m-6 p-3">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <div className="form-control">
                    <label className="label" htmlFor="email">
                      <span className="label-text text-xl ">Email</span>
                    </label>
                    <Field
                      className="input input-bordered"
                      type="text"
                      name="email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="error"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label" htmlFor="password">
                      <span className="label-text text-xl ">Password</span>
                    </label>
                    <Field
                      className="input input-bordered"
                      type="password"
                      name="password"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
                  </div>

                  <div className="form-control mt-6">
                    <button
                      className="btn btn-sm btn-accent mx-auto mb-6"
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}
      {adminLoggedIn && (
        <div>
          <h1>test admin home</h1>
          <button onClick={adminLogout}>Logout</button>
          <div>
            <h2>Inquiries</h2>
            <Inquiries />
            <h1>Create New Client</h1>
            <CreateClientForm />
          </div>
        </div>
      )}
    </>
  );
}
