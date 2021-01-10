import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

export default function CustomerDetailPage(props) {
  const customerId = props.match.params.id;
  const [customerItem, setCustomerItem] = useState();
  const history = useHistory();

  function getCustomerItem() {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => setCustomerItem(data));
  }

  function deleteCustomer() {
    const url = `https://frebi.willandskill.eu/api/v1/customers/${customerId}/`;
    const token = localStorage.getItem("WEBB20");
    fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      }
    }).then(() => history.push("/customers"));
  }

  useEffect(() => {
    getCustomerItem();
  }, []);

  return (
    <div>
      <h1>Customer Detail Page</h1>
      {customerItem ? (
        <div>
          <h1>{customerItem.name}</h1>
          <table>
            <tbody>
              <tr>
                <td>Organization Number</td>
                <td>{customerItem.organisationNr}</td>
              </tr>
              <tr>
                <td>Payment Term</td>
                <td>{customerItem.paymentTerm}</td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td>{customerItem.phoneNumber}</td>
              </tr>
              <tr>
                <td>Reference</td>
                <td>{customerItem.reference}</td>
              </tr>
              <tr>
                <td>VAT Number</td>
                <td>{customerItem.vatNr}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <a href={`mailto:${customerItem.email}`}>
                    {customerItem.email}
                  </a>
                </td>
              </tr>
              <tr>
                <td>Website</td>
                <td>
                  <a href={customerItem.website} target="_blank">
                    {customerItem.website}
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={deleteCustomer}>Delete Customer</button>
          <button>
            <Link to={`/customers/${customerId}/edit`}>Update Customer</Link>
          </button>
        </div>
      ) : (
        <span>Laddar data...</span>
      )}
    </div>
  );
}
