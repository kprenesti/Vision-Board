import React, {Component} from 'react';
import VisionContent from './VisionContent';

class VisionPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {goal: 'Lose Weight', started: true, accomplished: false, resources: [{name: 'My Fitness Pal', url: 'https://www.myfitnesspal.com'}]}, 
                {goal: 'Learn How to Scuba Dive', started: false, accomplished: false, resources: [{name: 'Sprayberry Dive Shop', url: 'http://www.diveshop1.com/marietta/'}] }
            ],
            active: true
        }
    }
    render(){
        return(<div>
                <h2>This is a Vision Board Panel Component.</h2>
                {this.state.active && <VisionContent data={this.state.data} />}
            </div>);
    }
}

export default VisionPanel;