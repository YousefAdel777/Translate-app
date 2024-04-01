/* eslint-disable react/prop-types */
import Mic from "./Mic";

const InputContainer = ({lang, inputLength, input, changeUrl, setSpeechText, setInputData}) => {

    const handleInputChange = (e) => {
        const {name, value, type} = e.target;
        if (value.length <= 500) {
            if (type === "textarea") {
                setInputData(prevState => ({...prevState, [name]: value, inputLength: value.length}));
            }
            else {
                setInputData(prevState => ({...prevState, [name]: value}));
            }
        }
    }

    const handleInputClick = (e) => {
        const {lang} = e.target.dataset;
        setInputData(prevState => ({...prevState, lang: lang}));
    }

    return (
    <form onSubmit={(e) => e.preventDefault()} className="bg-gray-800 p-6 rounded-3xl basis-1/2 border-2 border-gray-700 w-full">
        <div className="control-lang">
            <p>Select Language</p>
            <button data-lang="en" className={lang === "en" ? "active" : ""} onClick={handleInputClick}>English</button>
            <button data-lang="fr" className={lang === "fr" ? "active" : ""} onClick={handleInputClick}>French</button>
            <div className="select-box">
                <select name="lang" value={lang} onChange={handleInputChange}>
                    <option value="ar">Arabic</option>
                    <option value="cs">Czech</option>
                    <option value="en">English</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                    <option value="it">Italian</option>
                    <option value="es">Spanish</option>
                    <option value="ru">Russian</option>
                    <option value="tr">Turkish</option>
                </select>
                <img src="/Expand_down.svg" alt="Arrow icon" />
            </div>
        </div>
        <div className="relative">
            <textarea name="input" onChange={handleInputChange} value={input} autoFocus></textarea>
            <div className="letter-counter absolute right-0 -bottom-4 text-gray-700 text-sm">{inputLength} / 500</div>
        </div>
        <div className="btn-container">
            <button className="control-btn speak" onClick={() => setSpeechText({text:input, lang:lang, isPlay: true})}>
                <img src="/sound_max_fill.svg" alt="Speaker icon" />
            </button>
            <button className="control-btn copy" onClick={() => navigator.clipboard.writeText(input)}>
                <img src="/Copy.svg" alt="Copy to clipboard icon" />
            </button>
            <Mic setInputData={setInputData} lang={lang}/>
            <button type="sumbit" className="translate" onClick={changeUrl}>
                <img src="/Sort_alfa.svg" alt="Translate icon" />
                <span className="text-white">Translate</span>
            </button>
        </div>
    </form>
    )
}

export default InputContainer;