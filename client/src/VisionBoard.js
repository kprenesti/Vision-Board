import React, {Component} from 'react';
import VisionPanel from './VisionPanel';

class VisionBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    render(){
        return (
            <div>
                <h1>This is the Vision Board Component</h1>
                <VisionPanel />
            </div>
        );
    }

}

export default VisionBoard;