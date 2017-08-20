
import React from 'react'
import SchoolCard from './SchoolCard'

const CardContainer = ({ selectedSchools, handleCompareSelect }) => {

  const selectedSchoolsDisplay = selectedSchools.map((school, index) =>
    <SchoolCard key={ index }
                school={ school }
                handleCompareSelect={ handleCompareSelect }
    />
  )

  return (
    <div className="card-container">
      {selectedSchoolsDisplay}
    </div>
  )
};

export default CardContainer;
