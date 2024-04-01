import { useState, useEffect } from "react";

// const url = "https://api.mymemory.translated.net/get?q=Hello World!&langpair=en|it";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        const getData = async () => {
            setIsLoading(true);
            try {
                const resp = await fetch(url, {signal});
                const data = await resp.json();
                setData(data.responseData.translatedText);
                setIsLoading(false);
            }
            catch (error) {
                console.log(error);
                setIsLoading(false);
                setIsError(true);
            }
        }
        getData();
    }, [url]);
    return [isLoading, isError, data];
}   

export default useFetch;