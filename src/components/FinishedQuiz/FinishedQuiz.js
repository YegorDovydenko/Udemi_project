import Button from '../UI/Button/Button'
import classes from './FinishedQuiz.module.scss'
import { Link } from 'react-router-dom'

const FinishedQuiz = props => {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if(props.results[key] === 'green'){
            total++
        }
        return total
    }, 0)

    return(
        <div className={classes.FinishedQuiz}>
            <ul>
                {props.quiz.map((quizItem, index) => {

                    const cls = [
                        'fa',
                        props.results[quizItem.id] === 'red' ? 'fa-times red' : 'fa-check',
                        classes[props.results[quizItem.id]]
                    ]

                    return(
                        <li
                            key={index}
                        >
                            <strong>{index + 1}. </strong>
                            {quizItem.question}
                            <i 
                                className={cls.join(' ')} 
                            />
                        </li>
                    )
                })}

            </ul>
            <p>Right answers are {successCount} from {props.quiz.length}</p>

            <Button 
                onClick={props.onRepeat}
                type='primary'
            >
                Repeat
            </Button>
            <Link to="/">
                <Button 
                    
                    type='red'
                >
                    All quiz
                </Button>
            </Link>

        </div>
    )
}

export default FinishedQuiz