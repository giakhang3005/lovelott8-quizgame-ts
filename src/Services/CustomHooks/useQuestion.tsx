import { useContext } from 'react'
import { IContext, Data } from '../../Layout/MainLayout'
import { QuestionsDatas } from '../../Data/Questions'
import { ISavedAnswer } from '../Interfaces'

const useQuestion = () => {
    const { interactedData, setInteractedData } = useContext(Data) as IContext

    // Return the next unanswer question
    const getCurrentQuestionData = () => {
        const nextQuestionId = interactedData.answers.length + 1
        const questionContent = QuestionsDatas.find(question => question.id === nextQuestionId)
        return questionContent
    }

    //Get total questions
    const getTotalQuestions = () => {
        return QuestionsDatas.length
    }

    //Add answer to interactData
    const saveAnswer = (newAnswer: ISavedAnswer) => {
        try {
            let answersArr = interactedData.answers
            answersArr.push(newAnswer)

            setInteractedData({ ...interactedData, answers: answersArr })
            return true;
        } catch (error) {
            console.error(error)
            return false;
        }


    }

    //check if user answer the first question or not
    const checkFirstQuestion = () => {
        return interactedData.answers.length > 0
    }


    return { getCurrentQuestionData, saveAnswer, getTotalQuestions, checkFirstQuestion }
}

export default useQuestion