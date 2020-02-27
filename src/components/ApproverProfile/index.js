import React from "react";
import moment from "moment";
import check from "../../images/check.svg";
import uncheck from "../../images/uncheck.svg";

function ApproverProfile(props) {
  const data = props.data || {};
  const { approver } = data;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: 12
      }}
    >
      <div style={{ maxWidth: 24, display: "flex", alignItems: "center" }}>
        <p
          style={{
            color: "#222222",
            opacity: 0.5,
            textAlign: "center",
            fontSize: "12px",
            lineHeight: "14px",
            backgroundColor: "rgba(34, 34, 34, 0.1)",
            padding: 2,
            borderRadius: "50%",
            width: 14
          }}
        >
          {props.index}
        </p>
      </div>
      <div
        style={{
          maxWidth: 32,
          marginLeft: 8,
          display: "flex",
          alignItems: "center"
        }}
      >
        {approver.profile_picture ? (
          <img
            style={{ height: 24, width: 24 }}
            src={approver.profile_picture}
            alt=""
          />
        ) : (
          ""
        )}
      </div>
      <div style={{ flex: 1, marginLeft: 8 }}>
        <div style={{ display: "flex" }}>
          <p>
            {approver.first_name} {approver.last_name}
          </p>
          <p
            className="light-text text-small"
            style={{ marginLeft: 5, lineHeight: "16px" }}
          >
            ({approver.email})
          </p>
        </div>
        <div style={{ marginTop: 5 }}>
          <p className="light-text text-small">
            {data.status === "accepted"
              ? `Approved ${moment(data.last_updated_date).format(
                  "MMM DD, YYYY"
                )}`
              : `Last notified ${moment(data.last_notified_time).format(
                  "MMM DD, YYYY"
                )}`}
          </p>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginLeft: '16px' }}>
        {data.status === "accepted" ? (
          <img src={check} alt="approved" />
        ) : (
          <img src={uncheck} alt="pending" />
        )}
      </div>
    </div>
  );
}

export default ApproverProfile;
