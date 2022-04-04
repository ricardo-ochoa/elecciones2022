const Papa = require("papaparse");

const parseExperience = () => new Promise((resolve) => {
    Papa.parse("https://docs.google.com/spreadsheets/d/e/2PACX-1vT-97BKvIpZR-bb7QDNKVE2utBVdEMjzbPxqnEvcGOcEhGQiM1BnuuvPasbEMIAMihe4clRiImYyfa-/pub?output=csv", {
        download: true,
        header: true,
        complete: (results) => {
            resolve(results.data);
        }
    });
});

export default parseExperience