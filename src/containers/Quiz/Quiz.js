import React from "react"
import classes from './Quiz.module.scss'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz"
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz"
import Loader from "../../components/UI/Loader/Loader"
import { connect } from "react-redux"
import {fetchQuizById, quizAnswerClick, retryQuiz} from '../../store/actions/quiz'

class Quiz extends React.Component{

    componentDidMount(){
        this.props.fetchQuizById(this.props.match.params.id)
    }

    componentWillUnmount(){
        this.props.retryQuiz()
    }

    render(){
        return(
            <div className={classes.Quiz}>
                
                <div className={classes.QuizWrapper}>
                    <h1>Chouse the answer</h1>
                    { 
                        this.props.loading || !this.props.quiz
                        ?
                        <Loader/>
                        :
                        this.props.isFinished
                        ?
                        <FinishedQuiz 
                            results={this.props.results}
                            quiz={this.props.quiz}
                            onRepeat={this.props.retryQuiz}
                        />
                        : 
                        <ActiveQuiz
                            id={this.props.answerState}
                            question={this.props.quiz[this.props.activeQuestion].question} 
                            answers={this.props.quiz[this.props.activeQuestion].answers}
                            onAnswerClick={this.props.quizAnswerClick}
                            quizLength={this.props.quiz.length}
                            answerNumber={this.props.activeQuestion + 1}
                            state={this.props.answerState}
                        />
                    
                    }

                </div>

            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        results: state.quiz.results,
        isFinished: state.quiz.isFinished,
        answerState: state.quiz.answerState,
        activeQuestion: state.quiz.activeQuestion,
        quiz: state.quiz.quiz,
        loading: state.quiz.loading
    }
}
function mapSDispacthToProps(dispatch){
    return{
        fetchQuizById: id => dispatch(fetchQuizById(id)),
        quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
        retryQuiz: () => dispatch(retryQuiz())
    }
}

export default connect(mapStateToProps, mapSDispacthToProps)(Quiz) 