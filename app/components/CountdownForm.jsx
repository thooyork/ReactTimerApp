var React = require('react');

var CountdownForm = React.createClass({
  onSubmit:function(e){
    e.preventDefault();
    var startsecs = this.refs.secstart.value;

    if(startsecs.match(/^[0-9]*$/) && startsecs > 0){
      this.props.setCountdown(startsecs);
      this.refs.secstart.value = '';
    }
  },
  render:function(){
    return(
      <div className="form-wrapper">
        <form onSubmit={this.onSubmit} className="countdown-form">
          <input type="text" placeholder="Enter time in seconds" ref="secstart"/>
          <input type="submit" value="start" className="button expanded"/>
        </form>
      </div>
    );
  }
});

module.exports = CountdownForm;
