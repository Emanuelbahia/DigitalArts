import React from "react";

function Categories(props) {
  return (
    <React.Fragment>
      <tr>
        <td className="center-row">{props.id}</td>
        <td className="center-row">{props.category}</td>
      </tr>
    </React.Fragment>
  );
}

export default Categories;
