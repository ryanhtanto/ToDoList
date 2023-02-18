import React from 'react';
 
function UndoneActivityButton({ id, onUndone }) {
        return (
                <button className="border-0 btn-transition btn btn-outline-success" onClick={() => onUndone(id)}>
                        <i className="fa fa-undo" aria-hidden="true"></i>
                </button> 
        ) 
}
 
export default UndoneActivityButton;