import React, {Component} from 'react';

class VisionContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: ''
        }
    }
    render(){
        return (<div>
                {this.props.data.map((goal)=>{
                    return (
                    <div className="personalGoal goal" key={goal.goal}>
                        <h2>{goal.goal}</h2>
                        <ul>
                            <li>Started: {goal.started ? 'true': 'false'}</li>
                            <li>Accomplished: {goal.accomplished ? 'true': 'false'}</li>
                        </ul>
                        <h3>Resources: </h3>
                        <ul>
                            {
                                goal.resources.map(resource =>{
                                    return <li key='resource'><a href={resource.url}>{resource.name}</a></li>;
                                })
                        }
                        </ul>
                    </div>
                    );
                })}
            </div>
        );
    }
}

export default VisionContent;