import React from 'react'

const SchoolCard = ({ school }) => {

  const schoolDataDisplay = school.data.map((data, index) => {

  })

  return (
    <div className="school-card">
      <p>{school.location}</p>

    </div>
  )
};

export default SchoolCard;
