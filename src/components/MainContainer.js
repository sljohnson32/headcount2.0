
import React from 'react'
import CardContainer from './CardContainer'
import CompareContainer from './CompareContainer'

const MainContainer = ({ selectedSchools }) => {

  return (
    <div className="main-container">
      <CardContainer selectedSchools={ selectedSchools }/>
      <CompareContainer />
    </div>
  )
};

export default MainContainer;
