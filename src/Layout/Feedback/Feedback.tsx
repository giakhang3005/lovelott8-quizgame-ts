import { useEffect, useState } from "react"
import "./Feedback.scss"
import { Rate, message } from "antd"
import { useFeedback } from "../../Services/useFeedback"
import { useStep } from '../../Services/useStep'
import { motion } from 'framer-motion'

type Props = {}

//Animation
const defaultAnimate = { opacity: 0 }
const animate = { opacity: 1 }
const exitAnimate = { opacity: 0 }
const transition = { duration: 0.4 }

const Feedback = (props: Props) => {
  const [currStar, setCurrStar] = useState<number>(0)
  const [feedbackContent, setFeedbackContent] = useState<string>('')
  const [readyToView, setReadyToView] = useState<boolean>(false)

  const { feedbackChecker, saveFeedback, saveData } = useFeedback()
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
        saveData(currStar, feedbackContent)
        nextStep()
      } else {
        message.error(returnedStatus?.reason)
      }
    }
  }
  return (
    <motion.div className='feedback'
      initial={defaultAnimate}
      animate={animate}
      exit={exitAnimate}
      transition={transition}
    >

      <div className="displayContainer">
        {/* Loading */}
        <div className="loading">
          <span className="loader"></span>

          <div className="title">{readyToView ? "ĐÃ CÓ KẾT QUẢ" : "ĐANG TÍNH TOÁN"}</div>
          <i className="sub">Trong lúc hệ thống tìm kết quả phù hợp, bạn hãy dành 1 ít thời gian để đánh giá trải
            nghiệm nhằm giúp Cóc Sài Gòn cải thiện web hơn nhé ^^</i>

          <span className="loader2"></span>
        </div>

        {/* Feedback */}
        <div className="FeedbackFill">

          {/* Star */}
          <div className="starContainer">
            <Rate className="rating" value={currStar} onChange={(e) => setCurrStar(e)} /> <i className="starRatingRequire">(Bắt buộc)</i>
          </div>


          {/* Reason */}
          <textarea className="reason"
            placeholder={(currStar <= 3 && currStar > 0) ?
              "Bạn chưa hài lòng về điều gì? Hãy cho tụi mình biết nhé ^^" :
              "Bạn cảm thấy thế nào? (Không bắt buộc)"}
            onChange={(e) => setFeedbackContent(e.target.value)}
            autoFocus
          ></textarea>

          {/* Submit button */}
          <button className={`${readyToView ? '' : 'notAllow'} submit`} onClick={handleSubmit}>Gửi feedback & xem kết quả</button>
        </div>
      </div>


    </motion.div>
  )
}

export default Feedback