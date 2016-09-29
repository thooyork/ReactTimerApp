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

  describe('handleSetCountdown', () => {

    it('Should set state to started and count down', (done) => {

      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(10);

      expect(countdown.state.secs).toBe(10);
      expect(countdown.state.countdownStatus).toBe('started');

      setTimeout(() => {
          expect(countdown.state.secs).toBe(9);
          done();
      },1001);

    });

    it('Should never be negative count', (done) => {

      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(1);

      setTimeout(() => {
          expect(countdown.state.secs).toBe(0);
          done();
      },3001);

    });


    it('shoud pause countdown on paused status ', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');

      setTimeout(() => {
        expect(countdown.state.secs).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1003);
    });


    it('shoud reset count on stopped status ', (done) => {
      var countdown = TestUtils.renderIntoDocument(<Countdown/>);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');

      setTimeout(() => {
        expect(countdown.state.secs).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1003);
    });



  });
});
