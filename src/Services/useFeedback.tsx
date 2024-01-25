import { useContext } from "react"
import { IContext, Data } from '../App'

export const useFeedback = () => {
    const { interactedData, setInteractedData } = useContext(Data) as IContext

    // Validate feedback
    const feedbackChecker = (star: number, feedback: string) => {
        if (star <= 3) {
            // Not rate
            if (star === 0) {
                return {
                    status: false,
                    reason: 'Bạn cần đánh giá trải nghiệm để xem kết quả'
                }
            } else {
                // Star <= 3 but no reason
                if (feedback.trim().length === 0) {
                    return {
                        status: false,
                        reason: 'Vì sao bạn lại có trải nghiệm chưa tốt? Hãy chia sẻ với chúng mình nào ^^'
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
        setInteractedData({ ...interactedData, feedback: newFback })
    }

    return { feedbackChecker, saveFeedback }
}