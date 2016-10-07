var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
    it('should exist', () => {
        expect(Timer).toExist();
    });

    describe('handleSetTimer', () => {
        it('should set state to started and count up', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleSetTimer();

            expect(timer.state.count).toBe(0);
            expect(timer.state.timerStatus).toBe('started');

            setTimeout(() => {
                expect(timer.state.count).toBe(1);
                done();
            }, 1001)
        });

        it('should pause countdown on paused status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleSetTimer();
            timer.handleStatusChange('paused');

            setTimeout(() => {
                expect(timer.state.count).toBe(0);
                expect(timer.state.timerStatus).toBe('paused');
                done();
            }, 1001);
        });
        it('should reset count on stopped status', (done) => {
            var timer = TestUtils.renderIntoDocument(<Timer/>);
            timer.handleSetTimer();
            timer.handleStatusChange('stopped');

            setTimeout(() => {
                expect(timer.state.count).toBe(0);
                expect(timer.state.timerStatus).toBe('stopped');
                done();
            }, 1001);
        });
    });
});
