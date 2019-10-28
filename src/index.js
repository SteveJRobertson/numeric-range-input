/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState } from "react";
import ReactDOM from "react-dom";
import { NumericRangeInput } from "./components";

import "./styles.css";

function App() {
  const [rangeTypeText, setRangeTypeText] = useState(null);
  const [rangeNumber, setRangeNumber] = useState(null);

  const containerStyles = css`
    display: flex;
    justify-content: center;
    padding: 10px 0 20px;
  `;

  const handleRangeInputChange = (rangeType, value) => {
    switch (rangeType) {
      case "<":
        setRangeTypeText("Less than");
        break;
      case "<=":
        setRangeTypeText("Less than or equal to");
        break;
      case "=":
        setRangeTypeText("Equal to");
        break;
      case ">=":
        setRangeTypeText("Greater than or equal to");
        break;
      case ">":
        setRangeTypeText("Greater than");
        break;
      default:
        break;
    }

    setRangeNumber(value);
  };

  return (
    <div className="App">
      <h1>Numeric Range Input</h1>
      <div css={containerStyles}>
        <NumericRangeInput
          onRangeInputChange={handleRangeInputChange}
          disabled={false}
        />
      </div>
      {rangeTypeText && rangeNumber && (
        <p>{`${rangeTypeText} ${rangeNumber}`}</p>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
