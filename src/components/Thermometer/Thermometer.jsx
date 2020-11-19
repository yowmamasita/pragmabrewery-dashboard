import React from 'react';

export const Thermometer = ({lowerBound, upperBound, lowestSafeTemp, highestSafeTemp, currentTemp}) =>
  {
    const range = Math.abs(upperBound - lowerBound);
    const maxWidth = window.innerWidth;
    const unitWidth = maxWidth / range;
    const lowUnsafeWidth = Math.abs(lowestSafeTemp-lowerBound) * unitWidth;
    const highUnsafeWidth = Math.abs(upperBound-highestSafeTemp) * unitWidth;
    const safeWidth = Math.abs(highestSafeTemp-lowestSafeTemp) * unitWidth;
    const currentTempX = (currentTemp - lowerBound) * unitWidth;
    console.log(unitWidth);
    console.log(lowUnsafeWidth, lowestSafeTemp, lowerBound);
    console.log(highUnsafeWidth, upperBound, highestSafeTemp);
    console.log(safeWidth, highestSafeTemp, lowestSafeTemp);
    return (
      <svg width={maxWidth} height="50" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x={0} y={10} width={lowUnsafeWidth} height={30} stroke="#3498DB" fill="#3498DB" stroke-width="1"/>
        <rect x={lowUnsafeWidth} y={10} width={safeWidth} height={30} stroke="#52BE80" fill="#52BE80" stroke-width="1"/>
        <rect x={lowUnsafeWidth+safeWidth} y={10} width={highUnsafeWidth} height={30} stroke="#E74C3C" fill="#E74C3C" stroke-width="1"/>
        <rect x={currentTempX} y={5} width={5} height={40} stroke="black" fill="black" stroke-width="1"/>
      </svg>
    );
  }
