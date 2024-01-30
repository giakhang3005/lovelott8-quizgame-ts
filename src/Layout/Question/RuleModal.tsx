import React, { useEffect, useState } from 'react'

type Props = {
    setModalState: (state: boolean) => void
}

const RuleModal = ({ setModalState }: Props) => {
    const [countDown, setCountDown] = useState<number>(0)

    // Timer countdown until user can start
    // useEffect(() => {
    //     let countDownTimeOut = setTimeout(() => {
    //         if (countDown === 0) {
    //             clearTimeout(countDownTimeOut)
    //         } else {
    //             setCountDown(countDown - 1)
    //         }
    //     }, 1000)
    // }, [countDown])

    // Handle when user click start
    const handleStart = () => {
        countDown === 0 && setModalState(false)
    }

    return (
        <div className='rule'>
            <div className="rule">
                Chào mừng bạn đến với vùng đất “Mùa Yêu”, đây là nơi sẽ giúp bạn khám phá ra chính bản thân của mình là ai trong thế giới cổ tích mộng mơ này.
                <br /><br />
                Nhiệm vụ của bạn là phải trả lời những câu hỏi đã được chuẩn bị sẵn để tìm ra chính mình.
                <br /><br />
                Không quá khó để tìm ra bản thân, hãy lựa chọn những câu trả lời mà bạn cảm thấy phù hợp nhất. Và Mirror sẽ cho bạn biết, bạn là ai!
            </div>
            <div className="coverBtn">
                <button className='rule_startBtn' onClick={handleStart}>{countDown > 0 ? countDown : `BÍK GÒI`}</button>
            </div>

        </div>
    )
}

export default RuleModal