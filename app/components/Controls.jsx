var React = require('react');

var Controls = React.createClass({
  propTypes:{
    countdownStatus:React.PropTypes.string.isRequired,
    onStatusChange:React.PropTypes.func.isRequired,
    pauseTitle:React.PropTypes.string.isRequired
  },
  onStatusChange:function(newStatus){
    return () => {
      this.props.onStatusChange(newStatus);
    }
  },
  render:function(){
    var {countdownStatus, pauseTitle} = this.props;
    var renderStartStopButton = () => {
      if(countdownStatus === 'started'){
        return <button onClick={this.onStatusChange('paused')} className="button secondary">{pauseTitle}</button>
      }
      else if(countdownStatus === 'paused' || countdownStatus === 'stopped'){
        return <button onClick={this.onStatusChange('started')} className="button primary">Start</button>
      }
    };
    return(
      <div className="form-wrapper">
        <div className="controls">
          {renderStartStopButton()}
          <button onClick={this.onStatusChange('stopped')} className="button alert hollow">Reset</button>
        </div>
    </div>
    );
  }
});

module.exports = Controls;
