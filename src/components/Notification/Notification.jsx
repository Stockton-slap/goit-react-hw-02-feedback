// import PropTypes from 'prop-types';
// import { Component } from 'react';

// import css from './Notification.module.css';

// class Notification extends Component {
//   render() {
//     return <p className={css.message}>{this.props.message}</p>;
//   }
// }

// Notification.propTypes = {
//   message: PropTypes.string.isRequired,
// };

// export default Notification;

// WITH EMOTION =====================================================================================================================
import PropTypes from 'prop-types';

import { Message } from './Notification.styled';

const Notification = ({ message }) => {
  return <Message>{message}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
