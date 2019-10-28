/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { ControlGroup, HTMLSelect, NumericInput } from "@blueprintjs/core";

import "@blueprintjs/core/lib/css/blueprint.css";

const blueprintOverrideStyles = css`
  .bp3-control-group > :only-child {
    border-radius: 0 5px 5px 0;
  }

  .bp3-html-select {
    border-radius: 5px 0 0 5px !important;
    > select {
      :focus {
        outline-offset: -2px;
      }
    }
  }

  .bp3-numeric-input .bp3-input {
    border-radius: 0 5px 5px 0;
    text-align: right;

    :focus {
      border-radius: inherit;
    }
  }
`;

export default function NumericRangeInput({ disabled, onRangeInputChange }) {
  const options = ["<", "<=", "=", ">=", ">"];

  const [selectedRangeType, setSelectedRangeType] = useState(options[0]);
  const [numericValue, setNumericValue] = useState(null);

  useEffect(() => {
    onRangeInputChange(selectedRangeType, numericValue);
  }, [selectedRangeType, numericValue, onRangeInputChange]);

  const handleSelectChange = e => {
    setSelectedRangeType(e.currentTarget.value);
  };

  const handleInputChange = (num, str) => {
    setNumericValue(str);
  };

  return (
    <ControlGroup css={blueprintOverrideStyles}>
      <HTMLSelect
        options={options}
        disabled={disabled}
        onChange={handleSelectChange}
      />
      <NumericInput
        buttonPosition="none"
        disabled={disabled}
        onValueChange={handleInputChange}
      />
    </ControlGroup>
  );
}
