import { useContext } from 'react'
import { IContext, Data, ISavedAnswer } from '../App'
import { IAnswers, IQuestion, QuestionsDatas } from '../Data/Questions'

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

    return { getCurrentQuestionData, saveAnswer, getTotalQuestions }
}

export default useQuestion