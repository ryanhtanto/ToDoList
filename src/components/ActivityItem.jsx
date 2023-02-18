import React from 'react';
import ActivityItemBody from './ActivityItemBody';
import DeleteActivity from './DeleteActivity';
import DoneActivityButton from './DoneActivityButton';
 
function ActivityItem({title, body, createdAt, id, onDelete, onArsip}) {
        return (
                <React.Fragment>
                        <div className="alert alert-primary" style={{ height : '95%'}}>
                                <ActivityItemBody title={title} body={body} createdAt={createdAt} />
                                <div className="card-body" style={{marginTop: '10px'}}>
                                        <DeleteActivity id={id} onDelete={onDelete}/>
                                        <DoneActivityButton id={id} onArsip={onArsip}/>
                                </div>
                        </div>
                </React.Fragment>
                
        );
}
 
export default ActivityItem;