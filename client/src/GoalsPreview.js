import React from 'react';

const GoalsPreview = (props)=>{
    const goal = props.goal;
    const data = props.data;
    const goalType = props.goalType;

    
    return(
        <div 
        className={`goalsPreview goalsPreview__container goalsPreview--${goal}`}
        >
            <h1 className={
                `goal__title goal__title--preview ${(goalType === 'professional')?'goal__title--professional': ''}`}
            >
                {goal} Preview
            </h1>
            <div className={`
                goalsPreview__content`
            }>
                <h2>Lose 10lbs by October: '10 by 10'!</h2>
                <div className={"progressBar"}>
                    <div className={"progress"}>
                    10% (Progress Bar will go here.)
                    (Question to ponder: Do I need a complete button?  Maybe if there's no progress listed?)
                    </div>
                </div>
                <div className="completed">
                    <input 
                    type="checkbox" 
                    id="completedBox" 
                    name="completed"
                    value="completed" 
                    onClick={(e)=>{e.stopPropagation()}}
                    />
                    <label htmlFor="completed">Completed</label>
                </div>
            </div>
        </div>
    );
};

export default GoalsPreview