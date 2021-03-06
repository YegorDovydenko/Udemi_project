import classes from './ActiveQuiz.module.scss';
import AnswersList from './AnswersList/AnswersList';

const ActiveQuiz = (props) => (
    <div className={classes.ActiveQuiz}>
        
    <p className={classes.Question}>
        <span>
            <strong>{props.answerNumber}. </strong>
            {props.question}
        </span>
        <small>
            {props.answerNumber} from {props.quizLength}
        </small>
    </p>

    <AnswersList 
        id={props.id}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
    />

    </div>
)

export default ActiveQuiz