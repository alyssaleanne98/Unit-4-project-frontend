import React, {Component} from 'react'; 
import { PropTypes } from 'prop-types'; // mechanism to ensure to use correct data type and pass the right data
import Tab from './Tab';
// Imports are needed to keep track of which tab is active, display a list of tabs, and the content for the active tabs.


class Tab extends Component { //using extend keywork allows the component to access all of the components properties, including function
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }
}