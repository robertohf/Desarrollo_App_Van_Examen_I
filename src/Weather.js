import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.list = [{month: 'May', day: '20', max: '38', min: '18'}, 
        {month: 'May', day: '21', max: '30', min: '20'},
        {month: 'May', day: '22', max: '33', min: '17'},
        {month: 'May', day: '23', max: '31', min: '19'}]
    }

    render() {
        return (
            <div className="Weather">

            </div>
        );
    }
}

export default Weather;
