import React, { Component } from 'react';
import { PropTypes as types } from 'prop-types';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: props.db
    }
  }

  render() {
    return (
      <>
        <h1>This ain't it, chief.</h1>
      </>
    );
  }
}

App.propTypes = {
  db: types.arrayOf(types.object).isRequired
};

export default App;
