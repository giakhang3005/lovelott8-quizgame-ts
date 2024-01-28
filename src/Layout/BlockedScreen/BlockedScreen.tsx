import React from 'react'
import "./BlockedScreen.scss"
import {motion} from 'framer-motion'

//Animation
const defaultAnimate = { opacity: 0 }
const animate = { opacity: 1 }
const exitAnimate = { opacity: 0 }
const transition = { duration: 0.3 }

const BlockedScreen = () => {
    return (
        <motion.div className='blockedScreen'
            initial={defaultAnimate}
            animate={animate}
            exit={exitAnimate}
            transition={transition}
        >
            <div className="title">THÔNG BÁO</div>
            <div className="description">Lovelott không hỗ trợ Landscape Mode, bạn vui lòng xoay dọc điện thoại để sử dụng</div>
        </motion.div>
    )
}

export default BlockedScreen