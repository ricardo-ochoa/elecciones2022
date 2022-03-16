/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import Papa from "papaparse";

import {Candidatos} from "./types";

export default {
  list: async (): Promise<Candidatos[]> => {
    return axios
      .get(
        `https://docs.google.com/spreadsheets/d/e/2PACX-1vQMgRBlz2-gJ2AxhYwMnJIs0q51A21u-eVk-Waxg3ogBctXzgGezIxrN33gCZCifiy97A7xg8MmAsuI/pub?output=csv`,
        {
          responseType: "blob",
        },
      )
      .then(
        (response) =>
          new Promise<Candidatos[]>((resolve, _reject) => {
            Papa.parse(response.data, {
              header: true,
              complete: (results) => {
                const candidato = results.data as Candidatos[];

                return resolve(
                    candidato.map((candidato ) => ({
                    ...candidato
                  })),
                );
              },
            });
          }),
      );
  },
};
