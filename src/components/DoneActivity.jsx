import React from 'react';
import ActivityItemDone from './ActivityItemDone';
import IsEmpty from './IsEmpty';
 
function DoneActivity({ activities, onDelete, onUndone }) {
        const archivedTrue = activities.filter((activity) => activity.archived === true)
        if(archivedTrue.length === 0){
                return <IsEmpty />
        }else{
                return (
                        <div className='row'>
                                {
                                        activities.map((activity) => { 
                                                if(activity.archived){
                                                        return(
                                                                <div className='col-sm-6 col-md-4 col-lg-3' key={activity.id}>
                                                                        <ActivityItemDone id={activity.id} onDelete={onDelete} onUndone={onUndone} {...activity} />
                                                                </div>
                                                        )
                                                }         
                                        })
                                }
                        </div>
                );
        }
}
 
export default DoneActivity;