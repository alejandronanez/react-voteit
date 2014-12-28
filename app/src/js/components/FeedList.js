/** @jsx React.DOM */
var React = require('react');
var FeedItem = require('./FeedItem');
var FeedList = React.createClass({
    render: function () {
        var feedItems = this.props.items.map(function (item) {
            return <FeedItem key={item.key}
                             title={item.title}
                             description={item.description}
                             voteCount={item.voteCount}
                             onVote={this.props.onVote} />
        }.bind(this));

        return (
            <ul className="list-group container">
                {feedItems}
            </ul>
        )
    }
});

module.exports = FeedList;
