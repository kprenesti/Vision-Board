import React, {Component} from 'react';
import VisionPanel from './VisionPanel';

class VisionBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
<<<<<<< HEAD
            data: []
=======
            goalTypes: ['personal', 'professional', 'material', 'environmental']
>>>>>>> PanelStyles
        }
    }

    render(){
        return (
            <div>
<<<<<<< HEAD
                <h1>This is the Vision Board Component</h1>
                <VisionPanel />
=======
                {this.state.goalTypes.map((g) =>{
                   return <VisionPanel goal={g} active={false}/>
                })}                
>>>>>>> PanelStyles
            </div>
        );
    }

}

export default VisionBoard;