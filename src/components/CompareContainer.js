import React from 'react';
import SchoolCard from './SchoolCard';
import SchoolComparison from './SchoolComparison';

const CompareContainer = ({ comparedSchools }) => {

  return (
    <div className="compare-container">
      { (comparedSchools.length === 0) ? <p>Please select two schools to compare</p> : (comparedSchools.length === 1) ?
        <div>
          <SchoolCard school={ comparedSchools[0] }/>
          <p>Please select another school to compare.</p>
        </div> :
        <div>
          <SchoolCard school={ comparedSchools[0] }/>
          <SchoolComparison comparedSchools={ comparedSchools } />
          <SchoolCard school={ comparedSchools[1] }/>
        </div>
      }
    </div>

  )
};

export default CompareContainer;
