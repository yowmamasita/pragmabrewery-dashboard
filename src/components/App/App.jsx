import React, {useEffect} from 'react';
import {useBeerTemps} from '../../hooks';
import {useInterval} from '../../hooks/useInterval';
import {Beer} from "../Beer";

export const App = () => {
  const {beers, getBeerTemps} = useBeerTemps();
  useEffect(()=>getBeerTemps(),[])
  useInterval(()=>getBeerTemps(), 2000);
  return (<div><h1>PragmaBrewery Beer Temperature Dashboard</h1><div>{beers.map(beer => <Beer beer={beer}/>)}</div></div>)
};
