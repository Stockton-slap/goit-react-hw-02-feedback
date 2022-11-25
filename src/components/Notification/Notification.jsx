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

import { Component } from 'react';

import { Message } from './Notification.styled';

export class Notification extends Component {
  render() {
    const { message } = this.props;

    return <Message>{message}</Message>;
  }
}
