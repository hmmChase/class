import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { CommentContext } from '../../../context/contexts';
import * as sc from './AnswerDropdown.style';

const AnswerDropdown = props => {
  const { demoteAnswer, deleteComment } = useContext(CommentContext);

  return (
    <sc.Dropdownn
      className={props.className}
      isDropdownOpen={props.isDropdownOpen}
      close={props.close}
    >
      {props.role === 'TEACHER' && (
        <li>
          <span onClick={() => demoteAnswer(props.commentId)}>
            Demote from Answer
          </span>
        </li>
      )}

      <li>
        <span onClick={() => deleteComment(props.commentId)}>Remove Post</span>
      </li>
    </sc.Dropdownn>
  );
};

// AnswerDropdown.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(AnswerDropdown);