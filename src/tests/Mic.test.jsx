import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { expect, test } from "vitest";
import Mic from "../components/Mic";

test("<Mic /> is renderd and changes parent state", async () => {
    const user = userEvent.setup();

    const {container} = render(<Mic />);
    const micBtn = container.querySelector(".mic");

    await user.click(micBtn);
    expect(container.querySelector(".listening")).toBeDefined();
});