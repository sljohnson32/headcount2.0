
import React from 'react'
import CardContainer from './CardContainer'
import CompareContainer from './CompareContainer'

const MainContainer = ({ selectedSchools, handleCompareSelect, comparedSchools }) => {

  return (
    <div className="main-container">
      <CardContainer selectedSchools={ selectedSchools }
                     handleCompareSelect={ handleCompareSelect } />
      <CompareContainer comparedSchools={ comparedSchools } />
    </div>
  )
}

export default MainContainer;
