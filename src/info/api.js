const Papa = require("papaparse");

const parseFile = () => new Promise((resolve) => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vQMgRBlz2-gJ2AxhYwMnJIs0q51A21u-eVk-Waxg3ogBctXzgGezIxrN33gCZCifiy97A7xg8MmAsuI/pub?output=csv", {
        download: true,
        header: true,
        complete: (results) => {
            resolve(results.data);
        }
    });
});

export default parseFile