import {Component} from 'react'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {first: countryAndCapitalsList[0].id}

  getCountry = () => {
    const {first} = this.state

    const countryCapital = countryAndCapitalsList.find(
      each => each.id === first,
    )
    return countryCapital.country
  }

  onChangeSelect = event => {
    this.setState({first: event.target.value})
  }

  render() {
    const {first} = this.state
    const country = this.getCountry(first)

    return (
      <div>
        <div>
          <h1>Countries And Capitals</h1>
          <select value={first} onChange={this.onChangeSelect}>
            {countryAndCapitalsList.map(each => (
              <option key={each.id} value={each.id}>
                {each.capitalDisplayText}
              </option>
            ))}
          </select>
          <p>is capital of which country</p>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
