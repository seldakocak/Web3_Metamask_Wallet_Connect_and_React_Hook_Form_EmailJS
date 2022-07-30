import React from "react";
import Wallet from "../Wallet/Wallet";
import "./Header.css";
import logo from "../../../src/logo.svg";

function Header() {
  return (
    <div className="header">
      <header>
        <img src={logo} className="logo" alt="logo" title="NFT Collection"/>
        <Wallet />
      </header>
    </div>
  );
}

export default Header;
