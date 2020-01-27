import React, {Component} from 'react'
import PropTypes from 'prop-types';
import './style.scss'

class ListItem extends Component {

    render() {
        const {title, description} = this.props;
        
        if(!title) return null;

        return (
           <div data-test="listItemComponent">
             <h3 className="title" data-test="componentTitle">{title}</h3>
             <p data-test="componentDescription">{description}</p>
           </div>
        )
    }
}

ListItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}


export default ListItem;
