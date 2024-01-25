import { useEffect, useState } from "react"
import "./Feedback.scss"
import { Rate, message } from "antd"
import { useFeedback } from "../../Services/useFeedback"
import { useStep } from '../../Services/useStep'

type Props = {}

const Feedback = (props: Props) => {
  const [currStar, setCurrStar] = useState<number>(0)
  const [feedbackContent, setFeedbackContent] = useState<string>('')
  const [readyToView, setReadyToView] = useState<boolean>(false)

  const { feedbackChecker, saveFeedback } = useFeedback()
  const { nextStep } = useStep()

  // Countdown for calculate
  useEffect(() => {
    let countTimeout = setTimeout(() => {
      setReadyToView(true)
      clearTimeout(countTimeout)
    }, 1000 * 12)
  }, [])

  // Handle submt action
  const handleSubmit = () => {
    if (readyToView) {
      // Finish countdown
      let returnedStatus = feedbackChecker(currStar, feedbackContent)
      if (returnedStatus?.status) {
        // Feedback is ok
        saveFeedback(currStar, feedbackContent)
        nextStep()
      } else {
        message.error(returnedStatus?.reason)
      }
    }
  }
  return (
    <div className='feedback'>

      <div className="displayContainer">
        {/* Loading */}
        <div className="loading">
          <span className="loader"></span>

          <div className="title gradient_purple_blue">{readyToView ? "ĐÃ CÓ KẾT QUẢ" :"ĐANG TÍNH TOÁN"}</div>
          <i className="sub">Trong lúc hệ thống tìm kết quả phù hợp, bạn hãy dành 1 ít thời gian để đánh giá trải
            nghiệm nhằm giúp Cóc Sài Gòn cải thiện web hơn nhé ^^</i>

          <span className="loader2"></span>
        </div>

        {/* Feedback */}
        <div className="FeedbackFill">

          {/* Star */}
          <Rate className="rating" value={currStar} onChange={(e) => setCurrStar(e)} />

          {/* Reason */}
          <textarea className="reason"
            placeholder={(currStar <= 3 && currStar > 0) ?
              "Bạn chưa hài lòng về điều gì? Hãy cho tụi mình biết nhé ^^" :
              "Bạn cảm thấy thế nào? (Không bắt buộc)"}
            onChange={(e) => setFeedbackContent(e.target.value)}
          ></textarea>

          {/* Submit button */}
          <button className={`${readyToView ? '' : 'notAllow'} submit`} onClick={handleSubmit}>Gửi feedback & xem kết quả</button>
        </div>
      </div>


    </div>
  )
}

export default Feedback