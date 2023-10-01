import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_INQUIRIES } from "../utils/queries";
import { MARK_RESPONDED } from "../utils/mutations";
export default function Inquiries() {
  const [markResponded] = useMutation(MARK_RESPONDED);
  const { loading, data, error } = useQuery(QUERY_INQUIRIES, {
    onCompleted: (data) => console.log("Query completed:", data),
    onError: (error) => console.error("Query error:", error),
  });
  const inquiries = data?.inquiries || [];

  if (loading) {
    return <h2>...loading</h2>;
  }
  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  const markInquiryResponded = async (event) => {
    console.log(event.target.id);
    await markResponded({
      variables: {
        _id: event.target.id,
      },
    });
  };

  if (!loading) {
    console.log(inquiries);

    return (
      <>
        <div className="flex flex-wrap ">
          {inquiries.map((inquiry) => (
            <div
              className="border border-accent rounded-lg bg-secondary m-2 p-3"
              key={inquiry._id}
            >
              <p>
                <b>Date of Inquiry: </b>
                {new Date(parseInt(inquiry.createdAt, 10)).toDateString()}
              </p>
              <p>
                <b>Name: </b>
                {inquiry.name}
              </p>
              <p>
                <b>Date of Event: </b>
                {inquiry.date}
              </p>
              <p>
                <b>Email: </b>
                <a href={"mailto:" + inquiry.email}>{inquiry.email}</a>
              </p>
              <p>
                <b>Phone: </b>
                <a href={"tel:" + inquiry.phone}>{inquiry.phone}</a>
              </p>
              <p>
                <b>Comm: </b>
                {inquiry.commMethod}
              </p>
              <p>
                <b>Package: </b>
                {inquiry.package}
              </p>
              <p>
                <b>Message: </b> {inquiry.message}
              </p>
              <p>
                <b>Responded to: </b>
                {inquiry.responded ? "yes" : "no"}
              </p>
              {inquiry.responded ? (
                <></>
              ) : (
                <button
                  id={inquiry._id}
                  className="btn border border-accent rounded-lg"
                  onClick={markInquiryResponded}
                >
                  Mark Responded
                </button>
              )}
            </div>
          ))}
        </div>
      </>
    );
  }
}
