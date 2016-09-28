var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('Should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('Should call setCountdwon if valid seconds entered', () => {
    var spy = expect.createSpy();
    var theForm = TestUtils.renderIntoDocument(<CountdownForm setCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(theForm));

    theForm.refs.secstart.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });


});
