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
            <div className="coverBtn">
                <button className='rule_startBtn' onClick={handleStart}>{countDown > 0 ? countDown : `BẮT ĐẦU`}</button>
            </div>

        </div>
    )
}

export default RuleModal