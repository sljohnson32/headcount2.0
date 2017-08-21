import React, { Component } from 'react'
import Search from './Search'
import SideBarCards from './SideBarCards'

class SideBar extends Component {

  render(){
    let { schools, handleSearch, selectSchool, selectedSchools } = this.props

    const schoolDisplay = schools.map((school, index) =>
      <SideBarCards school={ school }
                    selectSchool={ selectSchool }
                    selectedSchools={ selectedSchools }
                    key={ index } />
    )

    return (
      <div className="sidebar-container">
        <Search handleSearch={ handleSearch }/>
        <section className="school-card-container">
          {schoolDisplay}
        </section>
      </div>
    )
  }
}

export default SideBar;
