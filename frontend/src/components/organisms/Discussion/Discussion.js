import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import AppContext from '../../../context/app';
import QuestionDetail from '../../molecules/QuestionDetail/QuestionDetail';
import Questions from '../../molecules/Questions/Questions';
import Label from '../../atoms/Label/Label';
import * as sc from './Discussion.style';

const Discussion = props => {
  const [questions, setQuestions] = useState([]);
  const { currentUser } = useContext(AppContext);
  const { questionId } = useParams();

  return (
    <sc.Container className={props.className}>
      <sc.Heading>
        <Label>DISCUSSION</Label>

        <sc.Titlee>
          {currentUser.role === 'TEACHER'
            ? 'Challenge Questions'
            : 'Ask a Question'}
        </sc.Titlee>

        {questionId && <sc.BtnBackk />}

        {currentUser.role === 'STUDENT' && !questionId && (
          <sc.QuestionNeww questions={questions} setQuestions={setQuestions} />
        )}
      </sc.Heading>

      {questionId ? (
        <QuestionDetail questionId={questionId} />
      ) : (
        <Questions questions={questions} setQuestions={setQuestions} />
      )}
    </sc.Container>
  );
};

Discussion.propTypes = {
  className: PropTypes.string
};

export default React.memo(Discussion);
