/** @jsx React.DOM */
var React = require('react');
var ShowAddButton = require('./ShowAddButton');
var FeedForm = require('./FeedForm');
var FeedList = require('./FeedList');

var Feed = React.createClass({
    getInitialState: function () {
        var FEED_ITEMS = [
            {key: 1, title: 'Realtime data!', description: 'Firebase is cool!', voteCount: 49},
            {key: 2, title: 'Javascipt is fun', description: 'Javascript feature here!', voteCount: 34},
            {key: 3, title: 'Coffee makes you awake', description: 'A coffee pro here!', voteCount: 25}
        ];
        return {
            items: FEED_ITEMS,
            formDisplayed: false
        }
    },
    onToggleForm: function () {
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    },
    render: function () {
        return (
            <div>
                <div className="container">
                    <ShowAddButton displayed={this.state.formDisplayed} onToggleForm={this.onToggleForm} />
                </div>

                <FeedForm />

                <br/>
                <br/>

                <FeedList items={this.state.items} />
            </div>
        );
    }
});

module.exports = Feed;
