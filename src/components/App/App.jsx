import React, {useEffect} from 'react';
import {useBeerTemps} from '../../hooks';
import {useInterval} from '../../hooks/useInterval';
import {Beer} from "../Beer";

export const App = () => {
  const {beers, getBeerTemps} = useBeerTemps();
  useEffect(()=>getBeerTemps(),[])
  const interval = useInterval(()=>getBeerTemps(), 5000);
    setTimeout(()=>clearInterval(interval),5000);
  return (<div>{beers.map(beer => <Beer beer={beer}/>)}</div>)
};
