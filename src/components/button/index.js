import React, {Component} from 'react'
import PropTypes from 'prop-types';

class SharedButton extends Component {
    render() {
        return (
          <button data-test="button" type="">
          
          </button>
        )
    }
}

SharedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
}


export default SharedButton;