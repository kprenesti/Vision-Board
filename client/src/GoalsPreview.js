import React from 'react';

const GoalsPreview = (props)=>{
    const goal = props.goal;
    const data = props.data;
    const goalType = props.goalType;

    
    return(
        <div className={`goalsPreview goalsPreview__container goalsPreview--${goal}`}>
            <h1 className={`goal__title goal__title--preview ${(goalType === 'professional')? 'goal__title--professional': ''}`}>{goal} Preview</h1>
            <div className={`goalsPreview__content`}>
                
            </div>
        </div>
    );
};

export default GoalsPreview