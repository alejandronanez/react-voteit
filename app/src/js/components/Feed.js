/** @jsx React.DOM */
var React = require('react');
var ShowAddButton = require('./ShowAddButton');
var FeedForm = require('./FeedForm');
var FeedList = require('./FeedList');
var _ = require('lodash');
var Firebase = require('firebase');

var Feed = React.createClass({

    loadData: function () {
        var ref = new Firebase('https://react-voting.firebaseio.com/feed');
        ref.on('value', function (snapshot) {
            var items = [];
            var sorted = [];

            snapshot.forEach(function (itemSnapshot) {
                var item = itemSnapshot.val();
                item.key = itemSnapshot.key();
                items.push(item);
            });

            sorted = _.sortBy(items, function (item) {
                return -item.voteCount;
            });

            this.setState({
                items: sorted
            });
        }.bind(this));
    },

    componentDidMount: function () {
        this.loadData();
    },
    getInitialState: function () {
        return {
            items: [],
            formDisplayed: false
        }
    },
    /**
     * Adds a new item
     * @param newItem {Object} Item to be added
     */
    onNewItem: function (newItem) {
        var ref = new Firebase('https://react-voting.firebaseio.com/feed');
        ref.push(newItem);
    },
    onToggleForm: function () {
        this.setState({
            formDisplayed: !this.state.formDisplayed
        });
    },
    onVote: function (item) {
        var ref = new Firebase('https://react-voting.firebaseio.com/feed').child(item.key);
        ref.update(item);
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

                <FeedList items={this.state.items} onVote={this.onVote}/>
            </div>
        );
    }
});

module.exports = Feed;
