var React = require('react');

var TimerStart = React.createClass({
    onClick: function (e) {
        e.preventDefault();
        this.props.onSetTimer();
    },

    render: function () {
        return (
            <div>
                <button onClick={this.onClick} className="button expanded">Start</button>
            </div>
        );
    }
});

module.exports = TimerStart;
