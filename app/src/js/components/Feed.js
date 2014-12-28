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
    /**
     * Adds a new item
     * @param newItem {Object} Item to be added
     */
    onNewItem: function (newItem) {
        var newItems = this.state.items.concat([newItem]);
        this.setState({
            items: newItems,
            formDisplayed: false
        });
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

                <FeedForm displayed={this.state.formDisplayed} onNewItem={this.onNewItem} />

                <br/>
                <br/>

                <FeedList items={this.state.items} />
            </div>
        );
    }
});

module.exports = Feed;
