import React from "react";
import UndoneActivity from "./UndoneActivity";
import DoneActivity from "./DoneActivity";

const ActivityDecideDone = ({ activities, onDelete, onArsip, onUndone }) => {
  return (
    <div>
      <h5 className="text-center" >Aktivitas sebelum arsip</h5>
      <hr style={{marginBottom : '50px'}}></hr>
      <UndoneActivity activities={activities} onDelete={onDelete} onArsip={onArsip}/>
      <h5 className="text-center">Aktivitas dalam arsip</h5>
      <hr style={{marginBottom : '50px'}}></hr>
      <DoneActivity activities={activities} onDelete={onDelete} onUndone={onUndone}/>
    </div>
  );
};

export default ActivityDecideDone;
