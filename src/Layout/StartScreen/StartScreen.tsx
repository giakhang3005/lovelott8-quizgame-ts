import React from 'react'
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

const StartScreen = (props: Props) => {
    // Next step function from useStep hook
    const { nextStep } = useStep()
    
    return (
        <motion.div
            onClick={nextStep}
            className='startScreen'
            initial={defaultAnimate}
            animate={animate}
            exit={exitAnimate}
            transition={transition}
        >

            {/* Call to action */}
            <div className='startScreen_CTA'>
                CHẠM ĐỂ BẮT ĐẦU
            </div>
        </motion.div>
    )
}

export default StartScreen