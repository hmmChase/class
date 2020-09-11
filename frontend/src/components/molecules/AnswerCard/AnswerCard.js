import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import DropdownComment from '../DropdownComment/DropdownComment';
import AppContext from '../../../context/app';
import * as sc from './AnswerCard.style';

const AnswerCard = props => {
  const { currentUser } = useContext(AppContext);

  return (
    <sc.Container className={props.className}>
      <sc.Answeredd />

      <sc.GroupCol>
        <sc.Row>
          <sc.Group>
            <sc.Author>{props.authorName}</sc.Author>

            <sc.Timestamp>{props.timestamp}</sc.Timestamp>

            <sc.CreatedAt>{props.createdAt}</sc.CreatedAt>
          </sc.Group>

          {currentUser.role === 'TEACHER' && (
            <DropdownComment
              commentId={props.commentId}
              isAnswer={props.isAnswer}
              handleDeleteComment={props.handleDeleteComment}
              demoteAnswer={props.demoteAnswer}
            />
          )}
        </sc.Row>

        <sc.Body>{props.body}</sc.Body>
      </sc.GroupCol>
    </sc.Container>
  );
};

AnswerCard.propTypes = {
  createdAt: PropTypes.any,
  authorName: PropTypes.string,
  body: PropTypes.string.isRequired
};

export default React.memo(AnswerCard);