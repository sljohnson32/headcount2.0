import React from 'react'

const SchoolCard = ({ data, location }) => {

  const dataObj = data;
  const dataKeys = Object.keys(data);

  const schoolDataDisplay = dataKeys.map((key, index) =>
    <li>{key}: {data[key]}</li>
  ) 

  return (
    <div className="school-card">
      <p>{location}</p>
      <ul className="school-data">
        {schoolDataDisplay}
      </ul>
    </div>
  )
};

export default SchoolCard;
