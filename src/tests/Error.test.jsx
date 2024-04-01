import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import Error from "../components/Error"

test("renders error", () => {
    render(<Error />);
    const element = screen.getByText("Please Check Your Internet Connection.");
    expect(element).toBeDefined();
});