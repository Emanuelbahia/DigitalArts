import React from "react";

function Users(props) {
  return (
    <React.Fragment>
      <tr>
        <td className="center-row">{props.id}</td>
        <td className="center-row">{props.firstName}</td>
        <td className="center-row">{props.lastName}</td>
        <td className="center-row">{props.email}</td>
      </tr>
    </React.Fragment>
  );
}

export default Users;
