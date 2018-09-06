import React, { Component } from 'react'
import { connect } from 'react-redux';
import Chart from '../components/chart'

class WeatherList extends Component {
    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp)
        const pres = cityData.list.map(weather => weather.main.pressure)
        const hum = cityData.list.map(weather => weather.main.humidity)

        return (
            <tr key={cityData.city.name}>
                <td>
                    {cityData.city.name}
                </td>
                <td>
                    <Chart data={temps} color="red" units="k" />
                </td>
                <td>
                    <Chart data={pres} color="orange" units="Hpa" />
                </td>
                <td>
                    <Chart data={hum} color="red" units="%" />
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