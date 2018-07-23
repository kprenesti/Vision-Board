import React from 'react';

const GoalsPreview = (props)=>{
    const goal = props.goal;
    const data = props.data[0];
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
                <h2>{data.name}</h2>
                <div className={"progressBar"}>
                    <div className={"progress"}>
                        {data.progress}
                    </div>
                </div>
                {(data.progress !== 0 || data.progress !== 'undefined') && <div className="completed">
                    <input 
                    type="checkbox" 
                    id="completedBox" 
                    name="completed"
                    value="completed" 
                    onClick={(e)=>{e.stopPropagation()}}
                    />
                    <label htmlFor="completed">Completed</label>
                </div>}
            </div>
        </div>
    );
};

export default GoalsPreview;