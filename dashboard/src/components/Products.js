import React from "react";

function Products(props) {
  return (
    <React.Fragment>
      <tr>
        <td className="center-row">{props.id}</td>
        <td className="center-row">{props.name}</td>
        <td className="center-row">{props.size}</td>
        <td className="center-row">{props.price}</td>
      </tr>
    </React.Fragment>
  );
}

export default Products;
