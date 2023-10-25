import { React } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useQuery, useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_INVOICE } from "../../utils/mutations";
import { QUERY_CLIENTS } from "../../utils/queries";
import * as Yup from "yup";

export default function CreateInvoiceForm() {
  const [createInvoice] = useMutation(CREATE_INVOICE);
  const { loading, data, error } = useQuery(QUERY_CLIENTS, {
    onCompleted: (data) => console.log("Query completed:", data),
    onError: (error) => console.error("Query error:", error),
  });
  const clients = data?.clients || [];
  // showing successful creation of invoice
  const [successOpen, setSuccessOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(true);
  function showSuccessMessage() {
    setSuccessOpen((successOpen) => !successOpen);
    setFormOpen((formOpen) => !formOpen);
    setTimeout(() => {
      setSuccessOpen((successOpen) => !successOpen);
      setFormOpen((formOpen) => !formOpen);
    }, 5000);
  }

  const initialValues = {
    client: "Please Select Client",
    amount: "0",
    discount: "0",
    dateOfEvent: "",
    package: "",
    notes: "",
    active: true,
  };

  const validationSchema = Yup.object().shape({
    client: Yup.string().required("This field is required"),
    amount: Yup.number().required("This field is required"),
    discount: Yup.number(),
    dateOfEvent: Yup.date().required("This field is required"),
    package: Yup.string(),
    notes: Yup.string(),
    active: Yup.bool().required("This field is required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      console.log(values);
      await createInvoice({
        variables: {
          client: values.client,
          amount: values.amount,
          discount: values.discount,
          dateOfEvent: values.dateOfEvent,
          package: values.package,
          notes: values.notes,
          active: values.active,
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
          id="createInvoiceForm"
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              {/* Clients populated from query and selected by admin user */}
              <div className="form-control">
                <label className="label" htmlFor="client">
                  <span className="label-text text-xl ">Client</span>
                </label>
                <Field
                  name="client"
                  as="select"
                  className="input input-bordered"
                >
                  <option value=""></option>
                  {clients.map((client) => (
                    <option value={client._id}>
                      {client.lastName}, {client.firstName}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="client" component="div" className="error" />
              </div>
              {/* Charge Amount before discount in an integer */}
              <div className="form-control">
                <label className="label" htmlFor="amount">
                  <span className="label-text text-xl ">Amount</span>
                </label>
                <Field
                  className="input input-bordered"
                  type="text"
                  name="amount"
                />
                <ErrorMessage name="amount" component="div" className="error" />
              </div>
              {/* Discount percentage in integer for */}
              <div className="form-control">
                <label className="label" htmlFor="discount">
                  <span className="label-text text-xl ">Discount (%)</span>
                </label>
                <Field
                  className="input input-bordered"
                  type="text"
                  name="discount"
                />
                <ErrorMessage
                  name="discount"
                  component="div"
                  className="error"
                />
                <p className="text-s">(Optional)</p>
              </div>
              {/* Date of Event */}
              <div className="form-control">
                <label className="label" htmlFor="discount">
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
              </div>
              {/* Package specification if applicable */}
              <div className="form-control">
                <label className="label" htmlFor="package">
                  <span className="label-text text-xl ">Package</span>
                </label>
                <Field
                  name="package"
                  as="select"
                  className="input input-bordered"
                >
                  <option value=""></option>
                  <option value="Wedding Ceremony">Wedding Ceremony</option>
                  <option value="Wedding Reception">Wedding Reception</option>
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
              {/* Notes */}
              <div className="form-control">
                <label className="label" htmlFor="notes">
                  <span className="label-text text-xl ">Notes</span>
                </label>
                <Field
                  className="input input-bordered"
                  type="text"
                  name="notes"
                />
                <ErrorMessage name="notes" component="div" className="error" />
              </div>
              {/* Has the bill already been paid? */}
              <div role="group" aria-labelledby="active">
                <label className="label" htmlFor="active">
                  <span className="label-text text-xl ">
                    Has this bill already been paid?
                  </span>
                </label>
                <label>
                  <Field
                    type="radio"
                    name="active"
                    // need to mark active as false if paid
                    value={false}
                    onChange={() => setFieldValue("active", false)}
                    className="mr-2"
                  />
                  Yes
                </label>
                <label className="ml-6">
                  <Field
                    type="radio"
                    name="active"
                    //mark active as true if not paid yet
                    value={true}
                    onChange={() => setFieldValue("active", true)}
                    className="mr-2"
                  />
                  No
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
        <p className="max-w-md my-6 text-lg">Invoice Successfully Created</p>
      )}
    </div>
  );
}
