import React from 'react';
 
function ActivityItemBody({ title, body, createdAt }) {
 return (
        <React.Fragment>  
                <h5 style={{fontWeight: 'bold'}}>{title}</h5>
                <p className='text-muted'>{createdAt}</p>
                <div className="card-body">
                        {body}
                </div>    
        </React.Fragment>
 );
}
 
export default ActivityItemBody;