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
            <div className={'vb'}>
                <div className={'vb__container'}>
                {this.state.goalTypes.map((g) =>{
                    return <VisionPanel key={g} goal={g} active={false}/>
                 })}  
                </div>              
            </div>
        );
    }

}

export default VisionBoard;