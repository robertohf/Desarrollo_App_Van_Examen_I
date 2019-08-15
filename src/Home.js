import React from 'react';
import Weather from './Weather';
import Button from '@material-ui/core/Button';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            home: ['Bienvenidos', 'WeatherApp']
        }
    }

    handleChange() {
        const newHome = {
            home: ['WeatherApp', 'Bienvenidos']
        }

        this.setState({
            home: [this.state.home, newHome]
        })

        console.log(this.state.home)
    }

    render() {
        return (
        <div className="Home">
            <h1>{this.state.home}</h1>
            <Button variant="contained" color="primary" onClick = {this.handleChange}>Intercalar</Button><br></br><br></br>
            <Button variant="contained" color="primary"><Weather month="May" day="20"/>Weather for May 20</Button><br></br><br></br>
            <Button variant="contained" color="primary"><Weather month="May" day="21"/>Weather for May 21</Button><br></br><br></br>
            <Button variant="contained" color="primary"><Weather month="May" day="22"/>Weather for May 22</Button><br></br><br></br>
            <Button variant="contained" color="primary"><Weather month="May" day="23"/>Weather for May 23</Button><br></br><br></br>
        </div>
        );
    }
}

export default Home;
