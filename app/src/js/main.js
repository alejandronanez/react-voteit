/** @jsx React.DOM */
var React = require('react');
var Feed = require('./components/Feed');

React.renderComponent(
    <Feed />,
    document.getElementById('app')
);
