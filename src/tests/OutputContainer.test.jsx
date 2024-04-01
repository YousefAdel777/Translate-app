import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { expect, test, vi } from "vitest";
import OutputContainer from "../components/OutputContainer";

test("<OutputContainer /> changes parent state", async () => {
    const setOutputData = vi.fn();
    const user = userEvent.setup();

    const {container} = render(<OutputContainer setOutputData={setOutputData}/>);
    const langControl = container.querySelector("button[data-lang='fr']");

    await user.click(langControl);

    expect(setOutputData.mock.calls).toHaveLength(1);
    expect(container.querySelector("button.active")).toBeDefined();
});

test("<OutputContainer /> renders control buttons and calls setSpeechText", async () => {
    const outputData = {
        output: "car",
        isLoading: false,
        isError: false,
        lang: "en",
    }

    const setOutputData = vi.fn();
    const setSpeechText = vi.fn();

    const {container} = render(<OutputContainer setOutputData={setOutputData} {...outputData} setSpeechText={setSpeechText}/>);
    const speakBtn = container.querySelector(".speak");
    const copyBtn = container.querySelector(".copy");
    const user = userEvent.setup();

    await user.click(speakBtn);
    await user.click(copyBtn);

    expect(setSpeechText.mock.calls).toHaveLength(1);
    expect(setSpeechText.mock.calls[0][0].text).toBe("car");
    expect(await navigator.clipboard.readText()).toBe("car");
});

test("<OutputContainer /> swaps languages", async () => {
    const outputData = {
        output: "car",
        isLoading: false,
        isError: false,
        lang: "en",
    }

    const swapLang = vi.fn();
    const user = userEvent.setup();

    const {container} = render(<OutputContainer {...outputData} swapLang={swapLang}/>);
    const swapBtn = container.querySelector(".swap-lang");

    await user.click(swapBtn);
    
    expect(swapLang.mock.calls).toHaveLength(1);
    expect(container.querySelector("button.active").dataset).not.toBe("en");
});