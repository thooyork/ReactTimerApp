var React = require('react');

var Clock = React.createClass({
  getDefaultProps:function(){
    seconds:0
  },
  propTypes:{
    seconds:React.PropTypes.number
  },
  addLeadingZero:function(num){
    if(num <= 9){
      num = '0' + num;
    }
    return num;
  },
  formatSeconds:function(totalSeconds){
      var mins = Math.floor(totalSeconds/60);
      var secs = (totalSeconds%60);

      secs = this.addLeadingZero(secs);
      mins = this.addLeadingZero(mins);

      return mins + ':' + secs;
  },
  render:function(){
  return(
      <div className="clock">
        <div className="text">
          {this.formatSeconds(this.props.seconds)}
        </div>
      </div>
    );
  }
});

module.exports = Clock;
