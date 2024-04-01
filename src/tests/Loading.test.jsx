import { render } from "@testing-library/react";
import { expect, test } from "vitest";
import Loading from "../components/Loading"

test("renders Loading", () => {
    const {container} = render(<Loading />);
    const element = container.querySelector(".loading");
    expect(element).toBeDefined();
});