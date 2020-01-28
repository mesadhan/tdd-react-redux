import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.scss'


class DetailsPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div data-test="detailsPageComponent" className="DetailsPage">
                  <h1>Hello from details page</h1>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        // receive data
    }
};

// if we and to override dispatcher method
const mapDispatchToProps = dispatch => ({
    // send data
});


export default connect(mapStateToProps, mapDispatchToProps)(DetailsPage);
