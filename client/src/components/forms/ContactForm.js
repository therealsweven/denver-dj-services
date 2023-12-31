import { React } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_INQUIRY } from "../../utils/mutations";
import * as Yup from "yup";

export default function ContactForm() {
  const [createInquiry] = useMutation(CREATE_INQUIRY);
  const [successOpen, setSuccessOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(true);
  function showSuccessMessage() {
    setSuccessOpen((successOpen) => !successOpen);
    setFormOpen((formOpen) => !formOpen);
  }

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
          package: "contact page",
        },
      });
      resetForm();
      console.log("submitted");
      showSuccessMessage();
    } catch (err) {
      console.error(err);
    }
    setSubmitting(false);
  };

  return (
    <div className="bg-secondary p-10 min-w-[50%] rounded-lg m-6 border border-accent">
      {formOpen && (
        <Formik
          id="contactForm"
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
                <ErrorMessage name="name" component="div" className="error" />
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
                <ErrorMessage name="email" component="div" className="error" />
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
                <ErrorMessage name="phone" component="div" className="error" />
                <p className="text-s">(Optional)</p>
              </div>
              <div className="form-control">
                <label className="label" htmlFor="dateOfEvent">
                  <span className="label-text text-xl ">Date of Event</span>
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
                    className="mr-2"
                  />
                  Email
                </label>
                <label className="ml-6">
                  <Field
                    type="radio"
                    name="commMethod"
                    value="Phone"
                    className="mr-2"
                  />
                  Phone
                </label>
              </div>

              <div className="form-control mt-6">
                <button
                  className="btn btn-lg btn-accent mx-auto"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      )}
      {successOpen && (
        <p className="max-w-md my-6 text-lg">
          Thank you for reaching out! Please check your email for confirmation,
          and we will get back to you as soon as possible.
        </p>
      )}
    </div>
  );
}
