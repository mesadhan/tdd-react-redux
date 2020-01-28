import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './style.scss'


class IconWithList extends Component {

    render() {
        const {icon, name, ratings} = this.props;

        if (!name) return null;

        return (
            <div data-test="IconWithListComponent" className="IconWithList">
                <img className="itemIcon" src={icon} alt="Icon"/>
                <div className="itemBoxChildren">
                    <h3 className="itemTitle" data-test="componentTitle"> {name}</h3>
                    <p>Avg. Stars:- {ratings.avgStars}</p>
                    <p>Total Points:- {ratings.totalPoints}</p>
                    <p>Votes:- {ratings.numberVotes}</p>
                </div>
            </div>
        )
    }
}

IconWithList.propTypes = {
    name: PropTypes.string
};


export default IconWithList;
