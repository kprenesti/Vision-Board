import React, {Component} from 'react';
import VisionPanel from './VisionPanel';

class VisionBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            goalTypes: ['personal', 'professional', 'material', 'environmental']
        }
    }

    render(){
        return (
            <div>
                {this.state.goalTypes.map((g) =>{
                   return <VisionPanel goal={g} active={false}/>
                })}                
            </div>
        );
    }

}

export default VisionBoard;