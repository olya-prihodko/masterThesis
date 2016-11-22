import React from 'react';
import ActionStep from './ActionStep';

const Step = React.createClass({

  getInitialState() {
    return {

    }
  },

  render() {
    return (
      <div>
        <div className="container test-container">
          <h5 className="text-center">Title (Step 1)</h5>

          <div className="actions">
            <ActionStep />
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
                  <button type="button" className="btn btn-default">Create next step</button>
                  <button type="button" className="btn btn-default pull-right">Finish</button>
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
