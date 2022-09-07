import React from "react";

function Products(props) {
  return (
    <React.Fragment>
      <tr>
        <td>{props.name}</td>
        <td>{props.size}</td>
        <td>{props.price}</td>
      </tr>
    </React.Fragment>
  );
}

export default Products;
