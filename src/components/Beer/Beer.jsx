import React from 'react';
import {Thermometer} from '../Thermometer/Thermometer';

export const Beer = ({beer}) => {
  return (
    <div style={({backgroundColor: (beer.lowestSafeTemp <= beer.currentTemperature && beer.currentTemperature <= beer.highestSafeTemp) ? '#fff' : '#F5B7B1'})}>
      <h3>{beer.name}</h3>
      <Thermometer lowerBound={-2} upperBound={10} lowestSafeTemp={beer.lowestSafeTemp} highestSafeTemp={beer.highestSafeTemp} currentTemp={beer.currentTemperature} />
    </div>
  );
}
