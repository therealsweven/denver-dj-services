import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import { CREATE_INQUIRY } from "../../utils/mutations";
import * as Yup from "yup";

export default function InquiryForm() {
  const [showModal, setShowModal] = React.useState(false);
  const [createInquiry] = useMutation(CREATE_INQUIRY);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    dateOfEvent: "",
    message: "",
    package: "",
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
      await createInquiry({
        variables: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          dateOfEvent: values.dateOfEvent,
          message: values.message,
          commMethod: values.commMethod,
          package: values.package,
        },
      });
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
        className="btn btn-accent"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Inquire
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border border-accent p-6 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Inquiry</h3>
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
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting }) => (
                    <Form>
                      <div className="form-control">
                        <label className="label" htmlFor="name">
                          <span className="label-text text-xl ">Name</span>
                        </label>
                        <Field
                          className="input input-bordered"
                          type="text"
                          name="name"
                        />
                        <ErrorMessage
                          name="name"
                          component="div"
                          className="error"
                        />
                      </div>
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
                        <p className="text-s">
                          We'll never share your information with anyone else.
                        </p>
                      </div>
                      <div className="form-control">
                        <label className="label" htmlFor="phone">
                          <span className="label-text text-xl ">Phone</span>
                        </label>
                        <Field
                          className="input input-bordered"
                          type="text"
                          name="phone"
                        />
                        <ErrorMessage
                          name="phone"
                          component="div"
                          className="error"
                        />
                        <p className="text-s">(Optional)</p>
                      </div>
                      <div className="form-control">
                        <label className="label" htmlFor="package">
                          <span className="label-text text-xl ">
                            Are you interested in a specific package?
                          </span>
                        </label>
                        <Field
                          name="package"
                          as="select"
                          className="input input-bordered"
                        >
                          <option value="no">No</option>
                          <option value="Wedding Ceremony">
                            Wedding Ceremony
                          </option>
                          <option value="Wedding Reception">
                            Wedding Reception
                          </option>
                          <option value="Wedding Bundle">Wedding Bundle</option>
                          <option value="School/Corporate Event">
                            School/Corporate Event
                          </option>
                          <option value="Private Event">Private Event</option>
                        </Field>
                        <ErrorMessage
                          name="package"
                          component="div"
                          className="error"
                        />
                        <p className="text-s">(Optional)</p>
                      </div>
                      <div className="form-control">
                        <label className="label" htmlFor="dateOfEvent">
                          <span className="label-text text-xl ">
                            Date of Event
                          </span>
                        </label>
                        <Field
                          className="input input-bordered"
                          type="date"
                          name="dateOfEvent"
                        />
                        <ErrorMessage
                          name="dateOfEvent"
                          component="div"
                          className="error"
                        />
                        <p className="text-s">(Optional)</p>
                      </div>
                      <div className="form-control">
                        <label className="label" htmlFor="message">
                          <span className="label-text text-xl ">Message</span>
                        </label>
                        <Field
                          className="input input-bordered"
                          type="text"
                          as="textarea"
                          name="message"
                        />
                        <ErrorMessage
                          name="message"
                          component="div"
                          className="error"
                        />
                      </div>
                      <div role="group" aria-labelledby="commMethod">
                        <label className="label" htmlFor="messageBody">
                          <span className="label-text text-xl ">
                            How would you like us to contact you?
                          </span>
                        </label>
                        <label>
                          <Field
                            type="radio"
                            name="commMethod"
                            value="Email"
                            className="mr-1"
                          />
                          Email
                        </label>
                        <label className="ml-6">
                          <Field
                            type="radio"
                            name="commMethod"
                            value="Phone"
                            className="mr-1"
                          />
                          Phone
                        </label>
                      </div>

                      <div className="form-control mt-6">
                        <button
                          className="btn btn-sm btn-accent mx-auto mb-6"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          Submit
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
