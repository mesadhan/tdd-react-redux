import React, {Component} from 'react'
import './style.scss'
import PropTypes from 'prop-types';

class Headline extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        const {header, description} = this.props;

        if(!header){
            return null;
        }

        return (
            <div data-test="headlineComponent">
                <h1 data-test="headline">{header}</h1>
                <p data-test="description">{description}</p>
            </div>
        )
    }
}

Headline.propTypes = {
    headline: PropTypes.string,
    description: PropTypes.string,
    // Complex example for working with PropTypes (not used in component)
    persons: PropTypes.arrayOf(PropTypes.shape({
        firstName: PropTypes.string,
        lastName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool
    }))
}

export default Headline;