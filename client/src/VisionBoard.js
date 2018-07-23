import React, { Component } from 'react';
import VisionPanel from './VisionPanel';

class VisionBoard extends Component {
	constructor(props){
		super(props);
		this.state = {
			goalTypes: ['personal', 'professional', 'material', 'environmental',
				'accomplishments'],
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