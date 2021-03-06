import classes from './AnswersList.module.scss'
import AnswerItem from './AnswerItem/AnswerItem'

const AnswersList = props => (
    <ul className={classes.AnswersList}>
        {props.answers.map((answer, index) => {
            return(
                <AnswerItem
                    id={props.id ? props.id[answer.id] : null}
                    key={index}
                    answer={answer}
                    onAnswerClick={props.onAnswerClick}
                />
            )
        })}
    </ul>
)

export default AnswersList