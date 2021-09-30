import classes from './AnswerItem.module.scss'

const AnswerItem = props => {

    const cls = [classes.AnswerItem]

    if (props.id){
        cls.push(classes[props.id])
    }

    return (
        <li 
            className={cls.join(' ')}
            onClick={() => props.onAnswerClick(props.answer.id)}
        >
            {props.answer.text}
        </li>
    )
}

export default AnswerItem