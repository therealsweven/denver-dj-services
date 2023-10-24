import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_CLIENTS } from "../utils/queries";
//import { UPDATE_CLIENT } from "../utils/mutations";
export default function ClientDirectory() {
  //const [updateCLient] = useMutation(UPDATE_CLIENT);
  const { loading, data, error } = useQuery(QUERY_CLIENTS, {
    onCompleted: (data) => console.log("Query completed:", data),
    onError: (error) => console.error("Query error:", error),
  });
  const clients = data?.clients || [];

  if (loading) {
    return <h2>...loading</h2>;
  }
  if (error) {
    return <h2>Error: {error.message}</h2>;
  }

  if (!loading) {
    console.log(clients);

    return (
      <>
        <table className="w-full text-center">
          <tr>
            <th>Last</th>
            <th>First</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Adress</th>
            <th>Update</th>
          </tr>
          {clients.map((client) => (
            <tr
              className="border border-accent bg-secondary m-1 p-2"
              key={client._id}
            >
              <td>{client.lastName}</td>
              <td>{client.firstName}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>
                {client.street}, {client.city}, {client.state} {client.zip}
              </td>
              <td>
                <button className="btn border border-accent rounded-lg h-3">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </table>
      </>
    );
  }
}
