import React from "react";
import logo from "./images/logo.svg";
import lock from "./images/lock.svg";
import data from "./data/request.json";
import ApproverProfile from "./components/ApproverProfile";
import RequestCard from "./components/RequestCard";
import Button from "./components/Button";

function App() {
  const service = data.service || {};
  console.log(data);
  const approvedApprovers = [];
  const pendingApprovers = [];
  const approvers = data.approvers || [];
  approvers.forEach(person => {
    if (person.status === "accepted") {
      approvedApprovers.push(person);
    } else {
      pendingApprovers.push(person);
    }
  });
  return (
    <div className="App">
      <div className="content-wrapper">
        <header className="logo-container">
          <img src={logo} alt="Airbase" className="logo" />
        </header>
        <div className="message-bar">
          <img src={lock} alt="security_icon" style={{ width: 9, height: 12, marginRight: 3}} />
          <p className="text-orange text-small">Security Message</p>
          <p className="light-text text-small" style={{ marginLeft: '8px' }}>
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            id elit non mi porta gravida at eget metus.
          </p>
        </div>
        <div className="request-card-wrapper">
          <div className="request-card-header">
            {service.logo && service.logo !== "" ? (
              <img
                className="request-service-logo"
                src={service.logo}
                alt={service.name}
              />
            ) : (
              ""
            )}
            <p className="heading">
              Request for {service.name} (#{data.id})
            </p>
          </div>
          <div className="request-card-content">
            <div className="request-section">
              <RequestCard data={data} />
              <div className="usage-message">
                <p
                  className="text-red text-small"
                  style={{ lineHeight: "16px" }}
                >
                  Your company is already paying for Amazon Web Service on a
                  recurring basis.
                </p>
                <p
                  className="light-text text-small"
                  style={{ lineHeight: "16px" }}
                >
                  (1 instance owned by John Smith).
                </p>
              </div>
              <div style={{ marginTop: '16px' }}>
                <Button type="primary" style={{ marginRight: '8px' }}>Approve</Button>
                <Button type="danger">Deny</Button>
              </div>
            </div>
            <div className="approval-card">
              <div className="approved">
                <p className="light-text text-small">Approved</p>
                {approvedApprovers.map((person, index) => (
                  <ApproverProfile key={person.approver.email} data={person} index={index + 1} />
                ))}
              </div>
              <hr />
              <div className="pending">
                <p className="light-text text-small">Pending</p>
                {pendingApprovers.map((person, index) => (
                  <ApproverProfile key={person.approver.email} data={person} index={index + 1} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
