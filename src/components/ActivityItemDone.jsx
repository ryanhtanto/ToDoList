import React from 'react';
import ActivityItemBody from './ActivityItemBody';
import DeleteActivity from './DeleteActivity';
import UndoneActivityButton from './UndoneActivityButton';
 
function ActivityItemDone({title, body, createdAt, id, onDelete, onUndone}) {
        return (
                <React.Fragment>
                        <div className="alert alert-success" style={{ height : '95%'}}>
                                <ActivityItemBody title={title} body={body} createdAt={createdAt} />
                                <div className="card-body" style={{marginTop: '10px'}}>
                                        <DeleteActivity id={id} onDelete={onDelete}/>
                                        <UndoneActivityButton id={id} onUndone={onUndone} />
                                </div>
                        </div>
                </React.Fragment>
                
        );
}
 
export default ActivityItemDone;