import React from "react";

function CheckOutComplete({ onOk }) {
  return (
    <div className="control">
      <h2>Success !</h2>
      <div>Your order Sucsess</div>
      <div className="modal-actions">
        <button className="button" onClick={onOk}>
          Okay
        </button>
      </div>
    </div>
  );
}

export default CheckOutComplete;
