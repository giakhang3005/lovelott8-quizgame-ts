import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './StartScreen.scss'
import { useStep } from '../../Services/useStep'

//Animation
const defaultAnimate = { opacity: 0 }
const animate = { opacity: 1 }
const exitAnimate = { opacity: 0 }
const transition = { duration: 0.4 }

type Props = {

}

const initAnimate = { top: '38.5%', left: '50%', opacity: 0 }

const StartScreen = (props: Props) => {
    // Next step function from useStep hook
    const { nextStep } = useStep()
    const [animateRun, setAnimateRun] = useState<boolean>(false)
    const [showCall, setShowCall] = useState<boolean>(false)

    useEffect(() => {
        const img = document.querySelectorAll('img')

        img[2].onload = () => {
            setTimeout(() => {
                setAnimateRun(true)

                setTimeout(() => {
                    setShowCall(true)
                }, 1000 * 2);

            }, 1000);
        }
    }, [])

    const handleTap = () => {
        showCall && nextStep()
    }

    return (
        <motion.div
            onClick={handleTap}
            className='startScreen'
            initial={defaultAnimate}
            animate={animate}
            exit={exitAnimate}
            transition={transition}
        >
            <div className="boxContainer">
                <img src="./Assets/Images/Elements/headBox.png" className={animateRun ? 'headAnimate' : ''} />
                <img src="./Assets/Images/Elements/bodyBox.png" />
            </div>

            <img src="./Assets/Images/Elements/blink.png" className='blink' />

            {animateRun &&
                <div className="heartContainer">
                    <motion.img
                        initial={initAnimate}
                        animate={{ opacity: 1, top: '3%', left: '81%', scale: 1.3 }}
                        transition={{ delay: 1.1, duration: 0.7, ease: 'easeOut' }}
                        src="./Assets/Images/Elements/Heart1.png" />
                    <motion.img
                        initial={initAnimate}
                        animate={{ opacity: 1, top: '6%', left: '71%', scale: 1.1 }}
                        transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
                        src="./Assets/Images/Elements/Heart2.png" />
                    <motion.img
                        initial={initAnimate}
                        animate={{ opacity: 1, top: '9%', left: '82%', scale: 1.1 }}
                        transition={{ delay: 1.3, duration: 0.7, ease: 'easeOut' }}
                        src="./Assets/Images/Elements/Heart3.png" />

                    <motion.img
                        initial={initAnimate}
                        animate={{ opacity: 1, top: '94%', left: '85%', scale: 1.3 }}
                        transition={{ delay: 1.1, duration: 0.7, ease: 'easeOut' }}
                        src="./Assets/Images/Elements/Heart1.png" />
                    <motion.img
                        initial={initAnimate}
                        animate={{ opacity: 1, top: '92%', left: '73%', scale: 1.1 }}
                        transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
                        src="./Assets/Images/Elements/Heart2.png" />
                    <motion.img
                        initial={initAnimate}
                        animate={{ opacity: 1, top: '87.5%', left: '90%', scale: 1.1 }}
                        transition={{ delay: 1.3, duration: 0.7, ease: 'easeOut' }}
                        src="./Assets/Images/Elements/Heart3.png" />

                    <motion.img
                        initial={initAnimate}
                        animate={{ opacity: 1, top: '94%', left: '8%', scale: 1.3 }}
                        transition={{ delay: 1.1, duration: 0.7, ease: 'easeOut' }}
                        src="./Assets/Images/Elements/Heart1.png" />
                    <motion.img
                        initial={initAnimate}
                        animate={{ opacity: 1, top: '94.5%', left: '20%', scale: 1.1 }}
                        transition={{ delay: 1.2, duration: 0.7, ease: 'easeOut' }}
                        src="./Assets/Images/Elements/Heart2.png" />
                    <motion.img
                        initial={initAnimate}
                        animate={{ opacity: 1, top: '88%', left: '5%', scale: 1.1 }}
                        transition={{ delay: 1.3, duration: 0.7, ease: 'easeOut' }}
                        src="./Assets/Images/Elements/Heart3.png" />
                </div>}

            {/* Call to action */}
            {showCall &&
                <motion.div
                    className='startScreen_CTA'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    CHẠM ĐỂ BẮT ĐẦU
                </motion.div>}
        </motion.div>
    )
}

export default StartScreen