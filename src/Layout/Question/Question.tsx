import { useEffect, useState } from 'react'
import "./Question.scss"
import { AnimatePresence, motion } from 'framer-motion'
import { Modal, message } from 'antd'
import RuleModal from './RuleModal'
import useQuestion from '../../Services/CustomHooks/useQuestion'
import { IAnswers, IQuestion } from '../../Services/Interfaces'
import { useStep } from '../../Services/CustomHooks/useStep'
import useInteractedData from '../../Services/CustomHooks/useInteractedData'

type Props = {}

const Question = (props: Props) => {
    // Custom hooks
    const { getName, getMSSV } = useInteractedData()
    const { getCurrentQuestionData, saveAnswer, getTotalQuestions, checkFirstQuestion } = useQuestion()
    const { nextStep } = useStep()

    // Selected question id
    const [currentQuestion, setCurrentQuestion] = useState<any>(null)
    // Current question object
    const [currentAnswer, setCurrentAnswer] = useState<IAnswers | null>(null)
    // State control
    const [modalState, setModalState] = useState<boolean>(false)
    //Random Num
    const [randomNumber, setRandomNumber] = useState<number>(1)

    // Set the first question onload & remove instructions when reload
    useEffect(() => {
        setCurrentQuestion(getCurrentQuestionData())
        !checkFirstQuestion() && setModalState(true)
    }, [])

    // Handle user click next question
    const handleNextQuestion = () => {
        // Random Background
        setRandomNumber(Math.round(Math.random() * 7) + 1) 

        // Handle next question
        if (currentAnswer) {
            const savedUserAnswer = {
                qId: currentQuestion?.id,
                answer: currentAnswer,
            }

            if (saveAnswer(savedUserAnswer)) {
                if (currentQuestion.id < getTotalQuestions()) {
                    setCurrentAnswer(null)
                    setCurrentQuestion(getCurrentQuestionData())
                } else {
                    nextStep()
                }
            } else {
                message.error('There is an internal error, please try again')
            }
        }

    }
    return (
        <>
            <Modal title="Mirror mirror on the wall, Who Am I?" closeIcon={false} footer={null} open={modalState}>
                <RuleModal setModalState={setModalState} />
            </Modal>
            <img src={`./Assets/Images/CCF/${randomNumber}.png`} className='ccfImg' />
            <motion.div className="question">
                {/* question title */}
                <div className="progressBar">
                    <div className="progress" style={{ width: `${(currentQuestion?.id / getTotalQuestions()) * 100}%` }}></div>
                </div>
                <div className="content">
                    <div className="content_QNum">Câu {currentQuestion?.id} / {getTotalQuestions()}</div>
                    <div className="content_question">{currentQuestion?.question}</div>
                </div>

                {/* Answer */}
                <ul className="answers">
                    {
                        currentQuestion?.answers.map((ans: IAnswers, i: number) => {
                            return (
                                <li
                                    className={`${ans.id === currentAnswer?.id ? 'selected' : ''} option`}
                                    key={`${currentQuestion.id}.${ans.id}`}
                                    onClick={() => setCurrentAnswer(ans)}
                                >
                                    <div className="answer_id">{ans.id.toUpperCase()}</div>
                                    <div className="answer_content">{ans.content}</div>
                                </li>
                            )
                        })
                    }
                </ul>

                {/* Next question Btn */}
                <button
                    className={`${currentAnswer === null ? 'blockedSelect' : ''} nextBtn`}
                    onClick={() => handleNextQuestion()}
                >
                    {currentQuestion?.id < getTotalQuestions() ? 'Câu tiếp theo' : 'Hoàn tất'}
                </button>

                <div className="infoContainer">
                    {getName()} - {getMSSV()}
                </div>

            </motion.div>
        </>
    )
}

export default Question