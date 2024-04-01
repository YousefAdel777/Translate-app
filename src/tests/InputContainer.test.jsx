import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest";
import InputContainer from "../components/InputContainer";

test("<InputContainer /> updates parent state and calls changeUrl", async () => {
    const changeUrl = vi.fn();
    const setInputData = vi.fn();
    const user = userEvent.setup();
    const {container} = render(<InputContainer changeUrl={changeUrl} setInputData={setInputData} /> );

    const input = container.querySelector("textarea");
    const translateBtn = container.querySelector(".translate");
    const langControl = container.querySelector("button[data-lang='fr']");

    await user.click(langControl);
    await user.type(input, "auto");
    await user.click(translateBtn);

    expect(changeUrl.mock.calls).toHaveLength(1);
    expect(setInputData.mock.calls).toHaveLength(5);
    expect(container.querySelector("button.active")).toBeDefined();
});

test("<InputContainer /> renders control buttons and calls setSpeechText", async () => {
    const inputData = {
        input: "car",
        lang: "en",
        inputLength: 3,
    }

    const setInputData = vi.fn();
    const setSpeechText = vi.fn();

    const {container} = render(<InputContainer setInputData={setInputData} {...inputData} setSpeechText={setSpeechText}/>);
    const speakBtn = container.querySelector(".speak");
    const copyBtn = container.querySelector(".copy");
    const user = userEvent.setup();

    await user.click(speakBtn);
    await user.click(copyBtn);

    expect(setSpeechText.mock.calls).toHaveLength(1);
    expect(setSpeechText.mock.calls[0][0].text).toBe("car");
    expect(await navigator.clipboard.readText()).toBe("car");
});