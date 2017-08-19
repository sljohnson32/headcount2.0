
import React from 'react'
import SchoolCard from './SchoolCard'

const CardContainer = ({ selectedSchools }) => {

  const selectedSchoolsDisplay = selectedSchools.map((school, index) =>
    <SchoolCard location={school.location}
                data={school.data}
                key={index}
    />
  )

  return (
    <div className="card-container">
      {selectedSchoolsDisplay}
    </div>
  )
};

export default CardContainer;
