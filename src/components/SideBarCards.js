import React, { Component } from 'react'

class SideBarCards extends Component {

  checkSelectStatus(school, selectedSchools) {
    if (selectedSchools.indexOf(school) > -1) {
      return true
    } else return false
  }

  render() {
    let { school, selectSchool, selectedSchools } = this.props;

    return (
        <h4 className={ this.checkSelectStatus(school, selectedSchools) ? "sidebar-card selected" : "sidebar-card"}
             onClick={ () => selectSchool(school) }
        >{school.location}</h4>
    )
  }
};

export default SideBarCards;
