import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.scss'


class DetailsPage extends Component {

    constructor(props) {
        super(props);

        //console.log('DetailsPage-----', props);
        //console.log('DetailsPage-----', props.location);
        console.log('DetailsPage-----', props.location.state.singlePost);
        //console.log('DetailsPage-----location', props.location);
    }

    /*componentDidMount() {
        console.log("received ", this.props.location.state);
    }*/

    render() {
        return (
            <div data-test="detailsPageComponent" className="DetailsPage">
                <h1>Hello from details page</h1>
                <img src={this.props.location.state.singlePost.icon}/>
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
