import React from 'react';
import renderer from 'react-test-renderer';
import {Thermometer} from './Thermometer';

it('renders correctly', () => {
  const thermometer = renderer
    .create(<Thermometer lowerBound={-2} upperBound={10} lowestSafeTemp={5} highestSafeTemp={7} currentTemp={5.5}/>)
    .toJSON();
  expect(thermometer).toMatchSnapshot();
});
