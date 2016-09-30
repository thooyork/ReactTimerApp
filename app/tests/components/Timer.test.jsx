var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');



describe('Timer',()=>{
  it('Should exist',()=>{
    expect(Timer).toExist();
  });

  it('Should start timer on status "started" ',(done)=>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');
    expect(timer.state.secs).toBe(0);

    setTimeout(()=>{
      expect(timer.state.secs).toBe(1);
      expect(timer.state.timerStatus).toBe('started');
      done();
    },1001);
  });


  it('Should pause timer on status "paused" ',(done)=>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({secs:10});
    timer.handleStatusChange('started');
    timer.handleStatusChange('paused');

    setTimeout(()=>{
      expect(timer.state.secs).toBe(10);
      expect(timer.state.timerStatus).toBe('paused');
      done();
    },1001);
  });

});
