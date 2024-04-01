/* eslint-disable no-undef */
import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Header from "../components/Header";

test("renders header", () => {
    const {container} = render(<Header />);
    const element = container.querySelector(".logo");
    expect(element).toBeDefined();
});