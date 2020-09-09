import React from 'react';
// import PropTypes from 'prop-types';
import useDropdown from '../../../utils/useDropdown';
import CommentDelete from '../CommentDelete/CommentDelete';
import CommentPromote from '../CommentPromote/CommentPromote';
import CommentDemote from '../CommentDemote/CommentDemote';
import * as sc from './DropdownComment.style';

const DropdownComment = props => {
  const [isDropdownOpen, setDropdownDisplay] = useDropdown();

  return (
    <sc.Container className={props.className} onClick={setDropdownDisplay}>
      <sc.Button isDropdownOpen={isDropdownOpen}>...</sc.Button>

      {isDropdownOpen && (
        <sc.Body>
          <sc.Ul>
            <sc.Li>
              {props.isAnswer ? (
                <CommentDemote commentId={props.commentId} />
              ) : (
                <span onClick={() => props.setAsAnswer(props.commentId)}>
                  Promote as Answer
                </span>
              )}
            </sc.Li>

            <sc.Li>
              <CommentDelete
                commentId={props.commentId}
                handleDeleteComment={props.handleDeleteComment}
              />
            </sc.Li>
          </sc.Ul>
        </sc.Body>
      )}
    </sc.Container>
  );
};

// DropdownComment.propTypes = {
//   // myProp: PropTypes.string.isRequired
// };

export default React.memo(DropdownComment);
