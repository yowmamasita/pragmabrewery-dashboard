import React, { useEffect, useRef } from 'react';

export const useInterval = (intervalFn, interval) => {
  const memoIntervalFn = useRef();

  useEffect(() => {
    memoIntervalFn.current = intervalFn;
  }, [intervalFn]);

  useEffect(() => {
    const tick = () => {
      memoIntervalFn.current();
    };
    let id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
};
