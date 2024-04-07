import { Button } from "../Components";
import { render, renderHook } from "@testing-library/react";

describe("Button.tsx", () => {
  test("should render Button component", () => {
    const test = renderHook(() => Button);
    
    console.info(test);
    // expect(test).
  });
});
