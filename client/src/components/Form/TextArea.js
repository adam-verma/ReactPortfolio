import React from "react";

export const TextArea = (props) => {
  return (
    <div className="form-group">
      <textarea className="form-control" {...props} />
    </div>
  );
}
 