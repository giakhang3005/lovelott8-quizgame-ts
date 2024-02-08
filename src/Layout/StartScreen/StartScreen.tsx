import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './StartScreen.scss'
import { useStep } from '../../Services/CustomHooks/useStep'

//Animation
const defaultAnimate = { opacity: 0 }
const animate = { opacity: 1 }
const exitAnimate = { opacity: 0 }
const transition = { duration: 0.4 }

type Props = {

}

const initAnimate = { top: '38.5%', left: '50%', opacity: 0 }
const initAnimateForContent = { opacity: 0, transform: 'translateY(20px)' }
const showAnimateForContent = { opacity: 1, transform: 'translateY(0)' }
const defaultContentDelay = 2.5
const addDelay = 0.27
const heartArr = [
    {
        heartImg: 1,
        top: 3,
        left: 81,
    },
    {
        heartImg: 2,
        top: 6,
        left: 71,
    },
    {
        heartImg: 3,
        top: 9,
        left: 82,
    },
    {
        heartImg: 1,
        top: 94,
        left: 85,
    },
    {
        heartImg: 2,
        top: 92,
        left: 73,
    },
    {
        heartImg: 3,
        top: 87.5,
        left: 90,
    },
    {
        heartImg: 1,
        top: 94,
        left: 8,
    },
    {
        heartImg: 2,
        top: 94.5,
        left: 20,
    },
    {
        heartImg: 3,
        top: 88,
        left: 5,
    },
]
const contentArr = [
    {
        title: 'Chapter 0 - ONLINE',
        description: 'Mirror Mirror On The Wall',
    },
    {
        title: 'Chapter 1 - LOTTS OF LOVE',
        description: 'Định Mệnh',
    },
    {
        title: 'Chapter 2 - CUPID EXPRESS',
        description: 'Giao Duyên',
    },
    {
        title: 'Chapter 3 - CONNECTION STATION',
        description: 'Lời Nguyền',
    },
    {
        title: 'Chapter 4 - TAROT',
        description: 'Phép Màu',
    },
]

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
                }, 1000 * ((defaultContentDelay + addDelay * 2 +  (contentArr.length) * addDelay) - 0.4));

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
                    {
                        heartArr.map((heart, i) => (
                            <motion.img
                                initial={initAnimate}
                                animate={{ opacity: 1, top: `${heart.top}%`, left: `${heart.left}%`, scale: 1.1 }}
                                transition={{ delay: 1.1, duration: 0.7, ease: 'easeOut' }}
                                src={`./Assets/Images/Elements/Heart${heart.heartImg}.png`} />
                        ))
                    }
                </div>}

            <div className="infoContainer">
                <motion.div
                    className='infoTitle'
                    initial={initAnimateForContent}
                    animate={showAnimateForContent}
                    transition={{ delay: defaultContentDelay }}
                >
                    {/* LOVELOTT */}
                    <img src="./Assets/logollt.png" />
                </motion.div>

                {/* Slogan */}
                <motion.div
                    className="subInfo"
                    initial={initAnimateForContent}
                    animate={showAnimateForContent}
                    transition={{ delay: defaultContentDelay + addDelay }}
                >
                    <div>VALENTINES 2024</div>
                    <div>Truyện cổ se duyên</div>
                    <div>Tình như ý nguyện</div>
                </motion.div>

                {/* Content */}
                {
                    contentArr.map((content, i) => (
                        <motion.div
                            className='content'
                            key={i}
                            initial={initAnimateForContent}
                            animate={showAnimateForContent}
                            transition={{ delay: defaultContentDelay + addDelay * 2 + i * addDelay }}
                        >
                            <div>{content.title}</div>
                            <div>{content.description}</div>
                        </motion.div>
                    ))
                }

                {/* More Info */}
                <motion.div
                    className="addOnContent"
                    initial={initAnimateForContent}
                    animate={showAnimateForContent}
                    transition={{ delay: defaultContentDelay + addDelay * 2 +  (contentArr.length) * addDelay }}
                >
                    <div>13 - 19/02/2024</div>
                    <div>ĐẠI HỌC FPT TP.HCM</div>
                </motion.div>
            </div>

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