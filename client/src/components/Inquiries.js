import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_INQUIRIES } from "../utils/queries";

export default function Inquiries() {
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

  if (!loading) {
    console.log(inquiries);

    return (
      <>
        <div className="flex flex-wrap">
          {inquiries.map((inquiry) => (
            <div
              className="border border-accent rounded-lg bg-secondary"
              key={inquiry._id}
            >
              <p>
                Date of Inquiry:
                {new Date(parseInt(inquiry.createdAt, 10)).toDateString()}
              </p>
              <p>Name: {inquiry.name}</p>
              <p>Date of Event: {inquiry.date}</p>
              <p>
                Email: <a href={"mailto:" + inquiry.email}>{inquiry.email}</a>
              </p>
              <p>
                Phone: <a href={"tel:" + inquiry.phone}>{inquiry.phone}</a>
              </p>
              <p>Comm: {inquiry.commMethod}</p>
              <p>Package: {inquiry.package}</p>
              <p>Message: {inquiry.message}</p>
              <p>Responded to: {inquiry.responded ? "yes" : "no"}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
}
