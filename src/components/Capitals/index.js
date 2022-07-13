import {Component} from 'react'
import './index.css'

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

class Capitals extends Component {
  state = {countryId: countryAndCapitalsList[0].id}

  onSelected = event => {
    this.setState({countryId: event.target.value})
  }

  getCountry = () => {
    const {countryId} = this.state

    const activeCountryAndCapital = countryAndCapitalsList.find(
      eachCapital => eachCapital.id === countryId,
    )

    return activeCountryAndCapital.country
  }

  render() {
    const {countryId} = this.state
    const country = this.getCountry(countryId)
    return (
      <div className="bg-color">
        <div className="bg-selection-color">
          <h1>Countries and Capitals</h1>
          <div className="arrange">
            <select onChange={this.onSelected} value={countryId}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.id}>
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>
          <div className="countryName">
            <p className="country">{country}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Capitals
