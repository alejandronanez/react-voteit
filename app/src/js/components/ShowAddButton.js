/** @jsx React.DOM */
var React = require('react');
var ShowAddButton = React.createClass({
    render: function () {
        // Compute values to modify the button
        var classString = '';
        var buttonText = '';

        if (this.props.displayed) {
            classString = 'btn btn-default btn-block';
            buttonText = 'Cancel';
        } else {
            classString = 'btn btn-success btn-block';
            buttonText = 'Create New Item';
        }

        return (
            <button
                className={classString}
                onClick={this.props.onToggleForm}>
                {buttonText}
            </button>
        )
    }
});

module.exports = ShowAddButton;
