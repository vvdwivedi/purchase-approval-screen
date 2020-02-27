import React from "react";
import RequesterProfile from "../RequesterProfile";
import excel from "../../images/excel.svg";

function RequestCard(props) {
  const data = props.data || {};
  const files = data.files || [];
  const getFiles = files => {
    const filesArr = [];
    files.forEach((file, i) => {
      const parts = file.split("/");
      filesArr.push(
        <div style={{ display: 'flex'}} key={i}>
          <img
            src={excel}
            alt="excel_icon"
            style={{ height: 16, width: 16, marginRight: 6 }}
          />
          <p>{parts[parts.length - 1]}</p>
        </div>
      );
    });
    return filesArr;
  };
  return (
    <div className="request-card">
      <div className="card-row no-padding">
        <p
          className="light-text row-label"
          style={{ padding: 16, paddingRight: 0 }}
        >
          Requested by
        </p>
        <div className="row-data" style={{ padding: "12px 0" }}>
          <RequesterProfile data={data.requested_by || {}} />
        </div>
      </div>
      <div className="card-row">
        <p className="light-text row-label">Cost</p>
        <div className="row-data">
          <div>${data.cost}</div>
        </div>
      </div>
      <div className="card-row no-padding">
        <div className="card-inner-row">
          <p className="light-text row-label">Renewal Frequency</p>
          <div className="row-data">
            {data.renewal_frequency_in_months} month
            {data.renewal_frequency_in_months > 1 ? "s" : ""}
          </div>
        </div>
        <div
          className="card-inner-row"
          style={{ borderLeft: "1px solid rgba(34, 34, 34, 0.05)" }}
        >
          <p className="light-text row-label">Annual Cost</p>
          <div className="row-data">
            ${data.renewal_frequency_in_months * data.cost}
          </div>
        </div>
      </div>
      <div className="card-row">
        <p className="light-text row-label">Expense Account</p>
        <div className="row-data">{data.expense_account}</div>
      </div>
      <div className="card-row">
        <p className="light-text row-label">File</p>
        <div className="row-data">{getFiles(files)}</div>
      </div>
      <div className="card-row">
        <p className="light-text row-label">Description</p>
        <div className="row-data">{data.description}</div>
      </div>
    </div>
  );
}

export default RequestCard;
