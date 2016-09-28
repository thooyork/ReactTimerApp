var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Countdown Controls', () => {
  it('Should exist', () => {
    expect(Controls).toExist();
  });

  it('Should call setCountdwon if valid seconds entered', () => {
    var spy = expect.createSpy();
    var countdownControls = TestUtils.renderIntoDocument(<Controls setCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownControls));

    countdownControls.refs.secstart.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });


});
