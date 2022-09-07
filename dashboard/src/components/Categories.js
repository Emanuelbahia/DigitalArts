import React from "react";

function Categories(props) {
  return (
    <React.Fragment>
      <tr>
        <td>{props.id}</td>
        <td>{props.category}</td>
      </tr>
    </React.Fragment>
  );
}

export default Categories;
