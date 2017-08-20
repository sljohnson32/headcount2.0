import React, { Component } from 'react';
import './App.css';
import DistrictRepository from './helper.js'
import Header from './components/Header'
import SideBar from './components/SideBar'
import MainContainer from './components/MainContainer'
import kinderData from '../data/kindergartners_in_full_day_program.js';

const schoolData = new DistrictRepository(kinderData)

class App extends Component {
  constructor() {
    super()
    this.state = {
      schoolsArr: [],
      selectedSchools: [],
    }
    this.selectSchool = this.selectSchool.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    let schoolsArrData = Object.keys(schoolData.data).map(key => {
      return schoolData.data[key]
    })
    this.setState({ schoolsArr: schoolsArrData, menuSchools: schoolsArrData })
  }

  handleSearch(input) {
    let newArr = schoolData.findAllMatches(input);
    this.setState({ schoolsArr: newArr })
  }

  selectSchool(status, school) {
    let selectedSchools = this.state.selectedSchools
    if (status === true) {
      selectedSchools.push(school);
    } else {
      let schoolIndex = selectedSchools.indexOf(school);
      selectedSchools.splice(schoolIndex, 1)
    }
    this.setState({ selectedSchools: selectedSchools })
  }

  render() {

    console.log('schoolsArr ', this.state.schoolsArr)

    return (
      <div className="App">
        <Header />
        <SideBar schools={ this.state.schoolsArr }
                 handleSearch={ this.handleSearch }
                 selectSchool={ this.selectSchool }
        />
        <MainContainer selectedSchools={ this.state.selectedSchools }/>
      </div>
    );
  }
}

export default App;
