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
                `goal__title goal__title--preview`}
            >
                {goal} Preview
            </h1>
            <div className={`goalsPreview__content`}>
                <h2 className={'goalsPreview__goalName'}>{data.name}</h2>
                <span className={'goalsPreview__date'}><strong>Date Started:</strong> {data.dateStarted}</span> | <span className = {`goalsPreview__date`}><strong>Due Date:</strong> {data.dueDate}</span>
                <div className={"progressBar"}>
                    <div className={"progress"} style={{width: data.progress.toString() + '%'}}>
                        <span className={'progress__text'}>{data.progress}%
                        </span>
                    </div>
                </div>
                {( data.progress == 0 || data.progress == undefined ) && <div className="completed">
                    <input 
                    type="checkbox" 
                    id="completedBox" 
                    name="completed"
                    value="completed" 
                    onClick={(e)=>{e.stopPropagation()}}
                    />
                    <label htmlFor="completed">Completed</label>
                </div>}
                <button className={'goalsPreview__btn'}>See All Goals</button>
            </div>
          
        </div>
    );
};

export default GoalsPreview;