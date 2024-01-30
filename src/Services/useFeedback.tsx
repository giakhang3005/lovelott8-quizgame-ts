import { useContext } from "react"
import { IContext, Data } from '../App'
import useResult from "./useResult"
import { saveDataToSheet } from "./APIs"

export const useFeedback = () => {
    const { interactedData, setInteractedData } = useContext(Data) as IContext
    const { getOwnCharacter } = useResult()

    // Validate feedback
    const feedbackChecker = (star: number, feedback: string) => {
        console.log(star, feedback)
        if (star <= 3) {
            // Not rate
            if (star === 0) {
                return {
                    status: false,
                    reason: 'Bạn cần đánh giá trải nghiệm để xem kết quả',
                    data: interactedData,
                }
            } else {
                if (feedback.trim().length === 0) {
                    return {
                        status: false,
                        reason: 'Điều gì đã khiến bạn có trải nghiệm chưa tốt? Hãy chia sẻ với chúng mình nào ^^',
                        data: interactedData,
                    }
                } else {
                    return {
                        status: true,
                        reason: ''
                    }
                }
            }
        } else {
            // Success
            return {
                status: true,
                reason: ''
            }
        }
    }

    // Save feedback
    const saveFeedback = (star: number, feedbackContent: string) => {
        let newFback = { stars: star, content: feedbackContent }
        let newInteractedData = { ...interactedData, feedback: newFback }
        setInteractedData(newInteractedData)
    }

    // Save All Data
    const saveData = (currStar: number, feedbackContent: string) => {
        const character = getOwnCharacter()
        const time = new Date;
        const timeString = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()} ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`
        const savedData = {
            timeStamp: timeString,
            name: interactedData.name,
            mssv: interactedData.mssv,
            isMale: interactedData.isMale,
            answers: interactedData.answers.map(ans => ({
                id: ans.qId,
                answer: ans.answer.id,
                point: ans.answer.point,
            })),
            feedBackStar: currStar,
            feedBackContent: feedbackContent,
            points: character.points,
            character: character.ownCharacter?.name,
        }

        saveDataToSheet(savedData)
    }

    return { feedbackChecker, saveFeedback, saveData }
}