import React, {Component} from 'react';
import VisionContent from './VisionContent';

class VisionPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            goalType: this.props.goal,
            data: [
                {goal: 'Lose Weight', started: true, accomplished: false, resources: [{name: 'My Fitness Pal', url: 'https://www.myfitnesspal.com'}]}, 
                {goal: 'Learn How to Scuba Dive', started: false, accomplished: false, resources: [{name: 'Sprayberry Dive Shop', url: 'http://www.diveshop1.com/marietta/'}] }
            ],
            active: this.props.active
        }
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick =()=>{
        this.setState((prevState)=> ({active: !prevState.active}));
    }
    render(){
        let goal = this.state.goalType;
        return(<div className={`goal--${goal} goal__container`} onClick={this.handleClick}>
                <h1 className={'goal__title'}>{this.state.goalType.charAt(0).toUpperCase() + this.state.goalType.slice(1)} Goals</h1>
                {this.state.active && <VisionContent data={this.state.data} />}
            </div>);
    }
}

export default VisionPanel;