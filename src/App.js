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
      menuSchools: [],
      selectedSchools: [],
      comparedSchools: []
    }
    this.selectSchool = this.selectSchool.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleCompareSelect = this.handleCompareSelect.bind(this)
  }

  componentDidMount() {
    let schoolsArrData = Object.keys(schoolData.data).map(key => {
      return schoolData.data[key]
    })
    this.setState({ schoolsArr: schoolsArrData, menuSchools: schoolsArrData })
  }

  handleSearch(input) {
    let newArr = schoolData.findAllMatches(input);
    this.setState({ menuSchools: newArr })
  }

  selectSchool(school) {
    let selectedSchools = this.state.selectedSchools.slice()
    if (selectedSchools.indexOf(school) === -1) {
      selectedSchools.push(school);
    } else {
      let schoolIndex = selectedSchools.indexOf(school);
      selectedSchools.splice(schoolIndex, 1)
    }
    this.setState({ selectedSchools: selectedSchools })
  }

  handleCompareSelect(school) {
    let schoolIndex = this.state.comparedSchools.indexOf(school)
    let comparedSchools = this.state.comparedSchools.slice()

    if (schoolIndex !== -1) {
      comparedSchools.splice(schoolIndex, 1)
      this.setState({ comparedSchools: comparedSchools})
      } else if (comparedSchools.length < 2) {
        comparedSchools.push(school)
        this.setState({ comparedSchools: comparedSchools})
        } else if (comparedSchools.length === 2) {
          alert('You can only compare two schools at a time.  Please deselect a school to continue with your comparison.')
          }
  }


  render() {

    console.log('schoolsArr ', this.state.schoolsArr)

    return (
      <div className="App">
        <Header />
        <SideBar schools={ this.state.menuSchools }
                 handleSearch={ this.handleSearch }
                 selectSchool={ this.selectSchool }
                 selectedSchools={ this.state.selectedSchools }
        />
        <MainContainer selectedSchools={ this.state.selectedSchools }
                       comparedSchools={ this.state.comparedSchools }
                       handleCompareSelect={ this.handleCompareSelect }/>
      </div>
    );
  }
}

export default App;
