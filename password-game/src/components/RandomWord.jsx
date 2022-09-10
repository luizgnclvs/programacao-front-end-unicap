import { useState } from "react";

export const fetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchRandomWord = async () => {
      try {
        const response = await fetch(
          "https://api.dicionario-aberto.net/random"
        );

        if (!response.ok) {
          throw new Error(
            `Esse é um erro HTTP: O status é ${response.status}`
          );
        }

        let data = await response.json();

        setData(data);
        setError(null);

      } catch(err) {
        setError(err.message);
        setData(null);
      }
  };
}

export const RandomWord =