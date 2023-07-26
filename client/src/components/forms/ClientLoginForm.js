import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
// import { CLIENT_LOGIN } from "../../utils/mutations";
import * as Yup from "yup";

export default function ClientLoginForm() {
  const [showModal, setShowModal] = React.useState(false);
  //   const [clientLogin] = useMutation(CLIENT_LOGIN);
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
      .email("Email address not formatted correctly")
      .required("This field is required"),
    message: Yup.string().required("This field is required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      console.log(values);
      //   await clientLogin({
      //     variables: {
      //       email: values.email,
      //       password: values.password,
      //     },
      //   });
      resetForm();
      console.log("submitted");
      setShowModal(false);
    } catch (err) {
      console.error(err);
    }
    setSubmitting(false);
  };
  return (
    <>
      <button
        className="btn w-28 text-sm"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Client Login
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border border-accent p-6 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Client Login</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  //   onSubmit={handleSubmit}
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
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-white background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
