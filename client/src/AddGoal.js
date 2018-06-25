import React, {Component} from 'react';

class AddGoal extends Component {
    constructor(props){
        super(props);

        this.state = {
            goalType = this.props.goalType || 'personal'
        }
        this.showAddGoalModal = this.showAddGoalModal.bind(this);
    }

    showAddGoalModal(){
        return <AddGoalModal type={this.state.goalType} />
    }

    render(){
        return(
            <div>
                <button className='button button--add' onClick={this.showAddGoalModal()}>+</button>
            </div>
        )
    }
}

export default AddGoal;