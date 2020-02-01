import React, {Component} from 'react';
import {connect} from 'react-redux';
import './style.scss'
import PrintJson from "./core/PrintJson";


class DetailsPage extends Component {

    constructor(props) {
        super(props);
        document.title = "Details Page";

        //console.log('DetailsPage-----', props);
        //console.log('DetailsPage-----', props.location);
        console.log('DetailsPage', props.location.state.singlePost);
    }

    /*componentDidMount() {
        console.log("received ", this.props.location.state);
    }*/

    render() {
        const {name, icon, ratings} = this.props.location.state.singlePost;
        return (
            <div data-test="detailsPageComponent" className="DetailsPageComponent">
                {/*<PrintJson data={this.props.location.state.singlePost}/>*/}

                <h1>Product Details</h1>

                <div className="DetailsBox">
                    <div>
                        <img className="iconBox" src={icon}/>
                    </div>
                    <div className="itemDetails">
                        <h3>{name}</h3>
                        <p>Avg. Stars: {ratings.avgStars}</p>
                        <p>Total Points: {ratings.totalPoints}</p>
                        <p>Votes: {ratings.numberVotes}</p>
                    </div>
                </div>
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
