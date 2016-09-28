var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown Component',() =>{
  it('Should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', (done) => {
    it('Should set state to started and count down', () => {

      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.secs).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
          expect(countdown.state.secs).toBe(9);
          done();
      },1001);

    });

    it('Should never be negative count', () => {

      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
          expect(countdown.state.secs).toBe(0);
          done();
      },3001);

    });


  });
});
