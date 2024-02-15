import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Carrousel extends React.Component {
  render() {
    return <div>Hello {this.props.name}!</div>;
  }
}

Carrousel.defaultProps = {
  name: 'David',
};

Carrousel.propTypes = {
  name: PropTypes.string,
};

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Carrousel name="React" />,
    document.getElementById('carrousel-container')
  );
});
