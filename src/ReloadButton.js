import React from "react";

export const ReloadButton = (props) => {
  return (
    <button style={props.style} onClick={() => window.location.reload()}>
      Reload
    </button>
  );
};
