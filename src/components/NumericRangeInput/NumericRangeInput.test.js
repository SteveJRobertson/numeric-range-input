import React from "react";
import { act } from "react-dom/test-utils";
import { mount } from "enzyme";
import { ControlGroup, HTMLSelect, NumericInput } from "@blueprintjs/core";
import setupTests from "../../../setupTests";
import NumericRangeInput from "./NumericRangeInput";

describe("NumericRangeInput", () => {
  const onRangeInputChangeMock = jest.fn(() => {});

  let component;
  let controlGroup;
  let htmlSelect;
  let numericInput;

  beforeEach(() => {
    act(() => {
      component = mount(
        <NumericRangeInput onRangeInputChange={onRangeInputChangeMock} />
      );
    });

    onRangeInputChangeMock.mockReset();
    controlGroup = component.find(ControlGroup);
    htmlSelect = controlGroup.find(HTMLSelect);
    numericInput = controlGroup.find(NumericInput);
  });

  afterEach(() => {
    component.unmount();
  });

  it("renders without crashing", () => {
    expect(component.exists()).toBe(true);
  });

  it("renders a BlueprintJS ControlGroup", () => {
    // TODO: Second ControlGroup component exists inside NumericInput component. Need a more robust test here.
    expect(controlGroup).toHaveLength(2);
  });

  it("renders a BlueprintJS HTML Select inside the ControlGroup", () => {
    expect(htmlSelect).toHaveLength(1);
  });

  it("renders a BlueprintJS NumericInput inside the ControlGroup", () => {
    expect(numericInput).toHaveLength(1);
  });

  describe("when entering a number", () => {
    it("calls onRangeInputChange with the updated value", () => {
      const inputProps = numericInput.props();
      act(() => {
        inputProps.onValueChange(5, "5");
      });
      expect(onRangeInputChangeMock).toHaveBeenCalledWith("<", "5");
    });
  });

  describe("when changing the range type", () => {
    it.only("calls onRangeInputChange with the updated value", () => {
      const selectProps = htmlSelect.props();
      act(() => {
        selectProps.onChange({ currentTarget: { value: "=" } });
      });
      expect(onRangeInputChangeMock).toHaveBeenCalledWith("=", null);
    });
  });
});
