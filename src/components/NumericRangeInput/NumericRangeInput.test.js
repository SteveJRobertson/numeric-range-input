import React from "react";
import { mount } from "enzyme";
import { ControlGroup, HTMLSelect, NumericInput } from "@blueprintjs/core";
import setupTests from "../../../setupTests";
import NumericRangeInput from "./NumericRangeInput";

describe("NumericRangeInput", () => {
  let component;
  let controlGroup;
  let htmlSelect;
  let numericInput;

  beforeEach(() => {
    const onRangeInputChangeMock = jest.fn(() => {});

    component = mount(
      <NumericRangeInput onRangeInputChange={onRangeInputChangeMock} />
    );
    controlGroup = component.find(ControlGroup);
    htmlSelect = controlGroup.find(HTMLSelect);
    numericInput = controlGroup.find(NumericInput);
  });

  it("renders without crashing", () => {
    expect(component.exists()).toBe(true);
  });

  it("renders a BlueprintJS ControlGroup", () => {
    // TODO: Second ControlGroup exists in NumericInput component. Need a more robust test here.
    expect(controlGroup).toHaveLength(2);
  });

  it("renders a BlueprintJS HTML Select inside the ControlGroup", () => {
    expect(htmlSelect).toHaveLength(1);
  });

  it("renders a BlueprintJS NumericInput inside the ControlGroup", () => {
    expect(numericInput).toHaveLength(1);
  });
});
