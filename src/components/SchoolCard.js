import React from 'react'

const SchoolCard = ({ school, handleCompareSelect }) => {

  const dataKeys = Object.keys(school.data);

  const schoolDataDisplay = dataKeys.map((key, index) =>
    <li key={index} className={(school.data[key] > .5) ? "green" : "red"}>{key}: {school.data[key]}</li>
  )

  return (
    <div className="school-card"
         onClick={ () => handleCompareSelect(school) }>
      <p>{school.location}</p>
      <ul className="school-data">
        {schoolDataDisplay}
      </ul>
    </div>
  )
};

export default SchoolCard;
