import React, {Component} from 'react';
import GoalsPreview from './GoalsPreview';


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
        document.querySelectorAll('.active').forEach((el)=>{el.classList.remove('active')});
        this.setState((prevState)=> ({active: !prevState.active}));
    }
    render(){
//        let active = this.state.active ? "active" : null;
        let goal = this.state.goalType;
        let goalName = goal.charAt(0).toUpperCase() + goal.slice(1);
        if(goalName !== 'Accomplishments'){
            goalName += ' Goals';
        }
        return(
            <div className={`goal--${goal} ${this.state.active ? "active":''} goal__container `} onClick={this.handleClick}>
                {!this.state.active && <h1 className={`goal__title--panel goal__title ${(goal === 'professional')? 'goal__title--professional': ''}`}>{goalName}</h1>}
                {this.state.active && <GoalsPreview data={this.state.data} goal={goalName} goalType={this.state.goalType} />}
            </div>
        );
    }
}

export default VisionPanel;