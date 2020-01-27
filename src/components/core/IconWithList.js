import React, {Component} from 'react'
import PropTypes from 'prop-types';

class IconWithList extends Component {

    render() {
        const {icon, name, ratings} = this.props;

        if (!name) return null;

        return (
            <div data-test="IconWithListComponent" className="itemBox">
                <img className="itemIcon" src={icon} alt="Icon"/>
                <h3 className="title" data-test="componentTitle">Name: {name}</h3>
                <p>{ratings.avgStars} = {ratings.totalPoints} = {ratings.numberVotes}</p>
            </div>
        )
    }
}

IconWithList.propTypes = {
    name: PropTypes.string
}


export default IconWithList;
