// import PropTypes from 'prop-types';

// import { Component } from 'react';
// import css from './Section.module.css';

// class Section extends Component {
//   render() {
//     return (
//       <section className={css.feedbackSection}>
//         <h1 className={css.title}>{this.props.title} </h1>
//         <div>{this.props.children}</div>
//       </section>
//     );
//   }
// }

// Section.propTypes = {
//   title: PropTypes.string.isRequired,
//   children: PropTypes.node
// };

// export default Section;

// WITH EMOTION =====================================================================================================================
import PropTypes from 'prop-types';

import { FeedbackSection, Title } from './Section.styled';

const Section = ({ children, title }) => {
  return (
    <FeedbackSection>
      <Title>{title}</Title>
      {children}
    </FeedbackSection>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
