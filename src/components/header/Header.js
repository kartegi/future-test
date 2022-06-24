import React from "react";
import Form from "../form/Form";
import "./header.sass";

function Header() {
  return (
    <header className="header">
      <h1 className="header--title">Search For Books</h1>
      <Form />
    </header>
  );
}

export default Header;
