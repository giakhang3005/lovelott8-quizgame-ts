import React, { useEffect, useState } from 'react'

type Props = {
    setModalState: (state: boolean) => void
}

const RuleModal = ({ setModalState }: Props) => {
    const [countDown, setCountDown] = useState<number>(10)

    // Timer countdown until user can start
    useEffect(() => {
        let countDownTimeOut = setTimeout(() => {
            if (countDown === 0) {
                clearTimeout(countDownTimeOut)
            } else {
                setCountDown(countDown - 1)
            }
        }, 1000)
    }, [countDown])

    // Handle when user click start
    const handleStart = () => {
        countDown === 0 && setModalState(false)
    }

    return (
        <div className='rule'>
            <div className="rule">Chào mừng đến với thế giới thần tiên, tại đây các bạn sẽ trải qua một cuộc phiêu lưu thú vị để khám phá chính bản thân mình là ai trong thế giới đầy mộng ảo của cổ tich.
                <br /><br />
                Hãy để những câu trả lời của bạn dẫn dắt bạn đến phần cuối của hành trình và giải đáp câu hỏi: "Mirror Mirror on the Wall, Who Am I?"
                <br /><br />
                Không có gì quá khó khăn nếu bạn tin tưởng vào bản thân và tìm kiếm câu trả lời từ trái tim. Hãy để phép thuật của Mirror giúp bạn khám phá ra chính mình trong mùa yêu này!
            </div>
            <div className="coverBtn">
                <button className='rule_startBtn' onClick={handleStart}>{countDown > 0 ? countDown : `BẮT ĐẦU`}</button>
            </div>

        </div>
    )
}

export default RuleModal