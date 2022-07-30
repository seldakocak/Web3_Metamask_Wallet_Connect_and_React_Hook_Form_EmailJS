import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../../redux/blockchain/blockchainActions";
import { fetchData } from "../../redux/data/dataActions";
import "./Wallet.css";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

function Wallet(props) {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    }
  });

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <div>
      {blockchain.account === "" || blockchain.smartContract === null ? (
        <div className="connection">
          <p>
            {blockchain.errorMsg !== "" ? (
              <span>{blockchain.errorMsg}</span>
            ) : (
              <span>Connect to the {CONFIG.NETWORK.NAME} network</span>
            )}
          </p>
          <button
            className="btn-connect "
            onClick={(e) => {
              e.preventDefault();
              dispatch(connect());
              getData();
            }}
          >
            {" "}
            CONNECT{" "}
          </button>
        </div>
      ) : (
        <p>
          <strong>Wallet Address: </strong> <span wallet={blockchain.account}>{truncate(blockchain.account, 15)}</span>
        </p>
      )}
    </div>
  );
}

export default Wallet;
