import React from "react";

const Header = ({ text, onClick }) => {
  return (
    <header className="App__header" onClick={onClick}>
      <h2>{text}</h2>
    </header>
  );
};

export default Header;
