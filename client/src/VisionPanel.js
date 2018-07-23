import React, {Component} from 'react';
import GoalsPreview from './GoalsPreview';

class VisionPanel extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    name: 'Lose 10 by 10',
                    dateStarted: 'July 23, 2018',
                    dueDate: 'Oct 10, 2018',
                    progress: 0,
                    description: 'I have gained more weight than I am comfortable with.  I want to begin the weight loss process, and I want to feel better when I go to the beach in October.',
                    resources: [
                        {name: 'MyFitnessPal', url: 'https://www.myfitnesspal.com', description: 'Calorie counting app'},
                        {name: 'Good Measure Meals', url: 'https://www.turner.com', description: 'Expensive Lean Cuisine provided by work.'}
                    ]
                },
                {
                    name: 'Go to 10 non-coding Meetups by New Years Eve',
                    dateStarted: 'July 21, 2018',
                    dueDate: 'Dec 31, 2018',
                    progress: 1,
                    description: 'I\'m not naturally a social butterfly, and I often let exhaustion and work prevent me from having a social life.',
                    resources: [{
                        name: 'Meetup.com', url: 'https://www.meetup.com', description: 'An app listing meetups for various interests.'
                    }]
                }
            ],
            setParentState: this.props.changeParentState
        }
        this.removeActiveClasses = this.removeActiveClasses.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(){
        //Go fetch your data
        console.log({props: this.props, state: this.state, this: this})
    }
    
   removeActiveClasses = ()=>{
        document.querySelectorAll('.active').forEach((el)=>{el.classList.remove('active')});
    }

    
    handleClick = (e)=>{
        this.removeActiveClasses();
        this.state.setParentState(this.props.goal);
        this.setState((prevState)=>({active: !prevState.active}));
    }

    render(){
        let goalType = this.props.goal;
        let goalTypeName = goalType.charAt(0).toUpperCase() + goalType.slice(1);
        if(goalTypeName !== 'Accomplishments'){
            goalTypeName += ' Goals';
        }
        return (
        <div className={`goal--${goalType} ${this.props.active ? "active":''} 
goal__container `} onClick={(e)=>{this.handleClick(e)}} >
            <div className={'goal__container--inner'} >
                {!this.props.active && 
                    <h1 className={`goal__title--panel goal__title ${(goalType === 'professional')?'goal__title--professional': ''}`}>              {goalTypeName}
                    </h1>}
                    {
                        this.props.active && 
                        <GoalsPreview 
                            data={this.state.data} 
                            goal={goalTypeName} 
                            goalType={this.props.goal} 
                        />
                    }
                </div>
            </div>
        ); //end return
    }//end render
} //end component


export default VisionPanel;