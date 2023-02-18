import React from "react";
import FormSubmit from "./FormSubmit"
import { getInitialData, showFormattedDate } from '../utils/index.js';
import ActivityDecideDone from "./ActivityDecideDone";

class ActivityApp extends React.Component {
  constructor(props) {
    super(props);
    
    const newActivities = []
    for(let i = 0; i < getInitialData().length; i++){
      const {id, title, body, archived} = getInitialData()[i]
      newActivities.push({
        id: id ,
        title: title,
        body: body,
        createdAt: showFormattedDate(getInitialData()[i].createdAt),
        archived: archived
      })
    }
    
    this.state = {
      activities: newActivities
    }
    
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddActivityHandler = this.onAddActivityHandler.bind(this);
    this.onArsipHandler = this.onArsipHandler.bind(this);
    this.onUndoneHandler = this.onUndoneHandler.bind(this);
  }
  
  onDeleteHandler(id) {
    const activities = this.state.activities.filter(activity => activity.id !== id);
    this.setState({ activities });
  }

  onArsipHandler(id){
    const activities = this.state.activities;
    for (let i = 0; i < activities.length; i++) {
      if (activities[i].id === id) {
        activities[i].archived = true;
      }
    }
    this.setState({ activities });
  }

  onUndoneHandler(id){
    const activities = this.state.activities;
    for (let i = 0; i < activities.length; i++) {
      if (activities[i].id === id) {
        activities[i].archived = false;
      }
    }
    this.setState({ activities });
  }

  onAddActivityHandler({ title, body }) {
    const date = new Date();
    const current_date = date.toISOString();
    this.setState((prevState) => {
      return {
        activities: [
          ...prevState.activities,
          {
            id: +new Date(),
            title,
            body,
            createdAt: showFormattedDate(current_date),
            archived: false,
          }
        ]
      }
    });
  }

  render() {
    return (
      <div className="container">
        <FormSubmit addActivities={this.onAddActivityHandler}/>
        <div style={{marginTop : '10px'}}>
          <ActivityDecideDone activities={this.state.activities} onArsip={this.onArsipHandler} onDelete={this.onDeleteHandler} onUndone={this.onUndoneHandler}/>
        </div>
      </div>
    );
  }
}

export default ActivityApp;