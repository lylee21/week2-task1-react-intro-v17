import React, {Component} from "react"; 

//App is class-component
class App extends Component { 
  state = {
    lastName: 'Lee',
    designation: 'volunteer',
    affliation: 'Pawrents Club',
    contact:['91234567','iluHamsters@example.com'],
    hamstersForAdoption: [{
      name: 'Sofie',
      ageInMonths: 7,
      breed: 'Winter White',
      gender: 'female',
      Adopted: false
    },{
      name: 'Charles',
      ageInMonths: 12,
      breed: 'Syrian',
      gender: 'male',
      Adopted: false
    },{
      name: 'Peanut',
      ageInMonths: 2,
      breed:'Roborovski',
      gender: 'male',
      Adopted: false
    }]
  }

  profileUpdate = () => {
    this.setState({
      designation: 'fosterer',
      affliation: 'Hamster Society'
    })
  }
  render() {
    return (
      <div class ="text-center mt-5">
        <p><b>PROFILE</b></p>
        <div>Ms {this.state.lastName} is a {this.state.designation} affliated with {this.state.affliation}.</div>
        <div>She currently has {this.state.hamstersForAdoption.length} hamsters up for adoption.</div><br/>
        <button class = "mb-3" onClick={this.profileUpdate}>Update Profile</button>
        <p><b>Hamsters for Adoption</b></p>
        {this.state.hamstersForAdoption.map((e => <div>Name: {e.name}, {e.gender} {e.breed}, {e.ageInMonths} months old</div>))}
        <br/>
        <div><b>CONTACT INFORMATION</b></div>
        {this.state.contact.map((e) => {return (<div>{e}</div>)})}
      </div>     
    )
  }
}

export default App;
