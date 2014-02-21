/** @jsx React.DOM */

var Clicker = React.createClass({
  getInitialState: function() {
    return {count: 0};
  },
  handleClick: function(e) {
    e.preventDefault();
    this.setState({count: this.state.count + 1})
  },
  handleReset: function(e) {
    e.preventDefault();
    this.setState({count: 0})
  },
  render: function() {
    return (
      <div className="clickers">
        <a href="#" onClick={this.handleClick}>You have clicked {this.state.count} times</a>
        <br />
        <br />
        <a href="#" onClick={this.handleReset}>reset</a>
      </div>
    );
  }
});

React.renderComponent(Clicker(), document.getElementById('content'));

    // return (
    //   React.DOM.div({className:"clickers"},
    //     React.DOM.a({onClick: this.handleClick}, "You have clicked " + this.state.count + " times"),
    //     React.DOM.br()
    //     React.DOM.a({onClick: this.handleReset}, "reset")
    //   )
    // );
