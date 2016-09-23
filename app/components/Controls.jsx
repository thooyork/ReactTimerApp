var React = require('react');

var Controls = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    var startsecs = this.refs.secstart.value;

    if(startsecs && startsecs > 0){
      this.props.startCountdown(startsecs);
      this.refs.secstart.value = '';
    }
  },
  render:function(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" ref="secstart"/>
          <input type="submit" value="start"/>
        </form>
      </div>
    );
  }
});

module.exports = Controls;
