import React from "react";

export const Pending = (props) => {
  return (
    <div
      style={{
        backgroundColor: "tomato",
        padding: "8px 16px",
        fontWeight: 600,
        color: "#fff",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.18)",
        borderRadius: 8,
        marginTop: 8,
        marginBottom: 8
      }}
    >
      {props.msg}
    </div>
  );
};
