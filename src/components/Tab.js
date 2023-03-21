import React, {Component} from 'react'; 
import { PropTypes } from 'prop-types'; // mechanism to ensure to use correct data type and pass the right data
import Tab from './Tab';
// Imports are needed to keep track of which tab is active, display a list of tabs, and the content for the active tabs.


class Tab extends Component { //extend keywork allows the component to access all of the components properties, including function
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    }

    constructor(props) { // In Reactm constructors are mainly used for two purposes: Its used for initializing the local state of the component by assigning an object to this. state 
        super(props); // super(props) pass the props to the parent contructor

        this.state = {
            activeTab: this.props.children[0].props.label,
        };
    }

    onClickTabItem = (tab) => {
        this.setState({activeTab:tab});
    }
}
// The initial state is added for the active tab and will start at 0 in the array of tabs I am creating. 
// onClickTabItem will update the app state to the current tab that is clicked by the user. 

// Now, I can add render function

render () {
    const {
        onClickTabItem,
        props: {
            children,
        },
        state: {
            activeTab,
        }
    } = this;

    return (
        <div className='all-tabs'>
            <ol className='tab-list'>
                {children.map((child)=> {
                    const { label } = child.props;

                    return (
                        <Tab 
                        activeTab={activeTab}
                        key={label}
                        label= {label}
                        onClick={onClickTabItem}
                        />
                    );
                })}

            </ol>
            <div className="tab-content">
                {children.map((child) => {
                    if (child.props.label !== activeTabe) return undefined;
                    return child.props.children;
                })}
            </div>
        </div>
    )
    }

    export default Tabs;