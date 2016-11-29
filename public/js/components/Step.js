import React from 'react';
import ActionStep from './ActionStep';
import axios from 'axios';

const Step = React.createClass({

  getInitialState() {
    return {
      steps: [],
      reset: false,
      currentStep: {
        id: Date.now(),
        title: 'awesome title',
        assignedTo: 'admin',
        blockedBy: 'here step id',
        actions: []
      }
    }
  },

  setActions(data) {
    var state = Object.assign({}, this.state);
    state.currentStep.actions = data.actions;
    this.setState({
      currentStep: state.currentStep,
      reset: false
    });
  },

  sendStep() {
    var state = Object.assign({}, this.state);
    state.steps.push(state.currentStep);

    //reset currentStep
    state.currentStep = {
      id: Date.now(),
        title: 'awesome title',
        assignedTo: 'admin',
        blockedBy: 'here step id',
        actions: []
    };

    state.reset = true;

    this.setState(state);

  },

  sendForm() {

    var state = Object.assign({}, this.state);
    state.steps.push(state.currentStep);

    this.props.saveData(state.steps);

  },

  render() {
    return (
      <div>
        <div className="container modal-step-container">
          <h5 className="text-center">{this.state.currentStep.title}</h5>

          <div className="actions">
            <ActionStep sendState={this.setActions} reset={this.state.reset} />
          </div>

          <div className="assign-block">
            <div className="form-group">
              <div className="row">
                <label htmlFor="assignedTo" className="col-sm-2 control-label">Assigned to:</label>
                <div className="col-sm-10">
                  <select className="form-control" id="assignedTo">
                    <option value="">admin</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <div className="row">
                <label htmlFor="blockedBy" className="col-sm-2 control-label">Blocked by:</label>
                <div className="col-sm-10">
                  <select className="form-control" id="blockedBy">
                    <option value="">Optimization step 1</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="step-controls">
              <div className="row">
                <div className="col-md-12">
                  <button type="button" onClick={this.sendStep} className="btn btn-default">Create next step</button>
                  <button type="button" onClick={this.sendForm} className="btn btn-default pull-right">Finish</button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
});


export default Step;
