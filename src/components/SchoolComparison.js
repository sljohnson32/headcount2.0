
import React from 'react'

const getRoundedNum = (num) => {
  return Math.round(1000 * num)/1000;
}

const calcAve = (data) => {
  let dataKeys = Object.keys(data)
  let dataLength = dataKeys.length
  let dataSum = dataKeys.reduce((sum, key) => {
    sum += data[key];
    return sum;
  }, 0)
  return getRoundedNum(dataSum / dataLength)
}

const CompareContainer = ({ comparedSchools }) => {
  let averageA = calcAve(comparedSchools[0].data)
  let averageB = calcAve(comparedSchools[1].data)
  let compareAve = getRoundedNum((averageA + averageB) / 2)

  return (
    <div className="compare-box">
      <p>{`<-----`} average: {averageA}</p>
      <h4>Comparative Average: {compareAve} </h4>
      <p>average: {averageB} {`----->`}</p>
    </div>

  )
};

export default CompareContainer;
