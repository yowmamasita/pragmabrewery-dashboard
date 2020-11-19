import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

export const useBeerTemps = () => {
  const [beers, setBeers] = useState([]);

  const _getBeerTemps = () => {
    const req = axios('http://localhost:8080/beer-temperatures');
    req.then((result) => {
      result &&
        result.data &&
        setBeers(
          result.data.map((beerTemp) => ({
            ...beerTemp.beer,
            currentTemperature: beerTemp.currentTemperature,
          }))
        );
    });
  };
  const getBeerTemps = useCallback(() => _getBeerTemps());
  return {
    beers,
    getBeerTemps,
  };
};
