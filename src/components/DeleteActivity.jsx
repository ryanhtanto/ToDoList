import React from 'react';
 
function DeleteActivity({ id, onDelete }) {
        return (
                <button className="border-0 btn-transition btn btn-outline-danger" onClick={() => onDelete(id)}>
                        <i className="fa fa-trash"></i>
                </button> 
        ) 
}
 
export default DeleteActivity;