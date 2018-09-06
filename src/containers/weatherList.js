import React, { Component } from 'react'
import { connect } from 'react-redux';

class WeatherList extends Component {
    renderWeather(cityData) {
        return (
            <tr key={cityData.city.name}>
                <td>
                    {cityData.city.name}
                </td>
                <td>
                    {cityData.list}
                </td>
            </tr>
        )
    }

    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>
                            City
                        </th>
                        <th>
                            Temprature
                        </th>
                        <th>
                            Pression
                        </th>
                        <th>
                            Humidity
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state) => {
    return { weather: state.weather }
}
export default connect(mapStateToProps)(WeatherList)