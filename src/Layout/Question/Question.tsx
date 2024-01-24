import { useEffect, useState } from 'react'
import "./Question.scss"
import { motion } from 'framer-motion'
import { Modal, message } from 'antd'
import RuleModal from './RuleModal'
import useQuestion from '../../Services/useQuestion'
import { IAnswers, IQuestion } from '../../Data/Questions'
import { useStep } from '../../Services/useStep'

type Props = {}

//Animation
const defaultAnimate = { opacity: 0 }
const animate = { opacity: 1 }
const exitAnimate = { opacity: 0 }
const transition = { duration: 0.4 }

const Question = (props: Props) => {
    // State control
    const [modalState, setModalState] = useState<boolean>(true)
    // Selected question id
    const [currentQuestion, setCurrentQuestion] = useState<any>(null)
    // Current question object
    const [currentAnswer, setCurrentAnswer] = useState<IAnswers | null>(null)

    const { getCurrentQuestionData, saveAnswer, getTotalQuestions } = useQuestion()
    const { nextStep } = useStep()

    // Set the first question onload
    useEffect(() => {
        setCurrentQuestion(getCurrentQuestionData())
    }, [])

    // Handle user click next question
    const handleNextQuestion = () => {
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
            <Modal title="CÁCH CHƠI" closeIcon={false} footer={null} open={modalState}>
                <RuleModal setModalState={setModalState} />
            </Modal>
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
                                <motion.li
                                    className={`${ans.id === currentAnswer?.id ? 'selected' : ''}`}
                                    key={`${currentQuestion.id}.${ans.id}`}
                                    initial={defaultAnimate}
                                    animate={animate}
                                    exit={exitAnimate}
                                    transition={{ delay: i * 0.05 }}
                                    onClick={() => setCurrentAnswer(ans)}
                                >
                                    <div className="answer_id">{ans.id.toUpperCase()}</div>
                                    <div className="answer_content">{ans.content}</div>
                                </motion.li>
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

            </motion.div>
        </>
    )
}

export default Question