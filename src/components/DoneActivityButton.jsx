import React from 'react';
 
function DoneActivityButton({ id, onArsip }) {
        return (
                <button className="border-0 btn-transition btn btn-outline-success" onClick={() => onArsip(id)}>
                        <i className="fa fa-check"></i>
                </button> 
        ) 
}
 
export default DoneActivityButton;