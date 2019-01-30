import React, { Component } from 'react';
import VisionPanel from './VisionPanel';
// This component creates the category slices once the user has logged in and acts as the container for the categories.
//This component will be passed the user's information, and in particular the goal types and cover photos, but it will also need to pass along the most recent goal for the goals preview section.
class VisionBoard extends Component {
	constructor(props){
		super(props);
		this.state = {
			goalTypes: [], //This needs to be filled in from props.
				activeEl: ''
		};
		this.changeActiveEl = this.changeActiveEl.bind(this);
		this.getAllGoalTypes = this.getAllGoalTypes.bind(this);
	}
	getAllGoalTypes = ()=>{
		console.log('Ready to go fetch!');
	}
	
	changeActiveEl=(el)=>{
		this.setState((prevState)=>{
			return (prevState.activeEl !== el) ? {activeEl: el} : {activeEl: ''};
		})
	}

	render(){
		return (
			<div className={'vb'}>
				<div className={'vb__container'}>
					{
						this.state.goalTypes.map((g) => {
							return <VisionPanel key={g} goal={g} active={this.state.activeEl === g ? true : false} changeParentState={this.changeActiveEl} />;
						})
					}  
				</div>
			</div>
		);
	}

}

export default VisionBoard;