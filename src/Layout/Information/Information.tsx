import React from 'react'
import "./Information.scss"
import { motion } from 'framer-motion'
import { useStep } from '../../Services/CustomHooks/useStep'
import useInteractedData from '../../Services/CustomHooks/useInteractedData'
import { message } from 'antd'

type Props = {}

//Animation
const defaultAnimate = { opacity: 0 }
const animate = { opacity: 1 }
const exitAnimate = { opacity: 0 }
const transition = { duration: 0.4 }

const Information = (props: Props) => {
    const { nextStep } = useStep()
    const { getName, getMSSV, getGender, setName, setGender, setMSSV, validateInformations } = useInteractedData()

    const onConfirm = () => {
        const confirmStatus = validateInformations()

        confirmStatus ? message.error('Họ tên & MSSV phải có ít nhất 7 kí tự và không được chứa kí tự đặc biệt') : nextStep()
    }


    return (
        <motion.div
            className='information'
            initial={defaultAnimate}
            animate={animate}
            exit={exitAnimate}
            transition={transition}
        >
            <div className="info_container">
                <div className="title">
                    THÔNG TIN CÁ NHÂN
                </div>

                {/* Name */}
                <div className="inputBox">
                    <label>HỌ & TÊN</label>
                    <input type="text"
                        placeholder="Nguyễn Văn Cóc"
                        value={getName() || ''}
                        onChange={(e) => setName(e.target.value)}
                        maxLength={40}
                        autoFocus
                    />
                </div>

                {/* MSSV */}
                <div className="inputBox">
                    <label>MSSV
                        <i className="note">Nếu bạn không học FPT, bạn vui lòng điền tên trường</i>
                    </label>

                    <input type="text" placeholder="SE190000"
                        value={getMSSV() || ''}
                        onChange={(e) => setMSSV(e.target.value)}
                        maxLength={20}
                    />
                </div>

                {/* Gender */}
                <div className="inputBox" style={{ margin: '47px 0 0 0' }}>
                    <label>GIỚI TÍNH</label>

                    {/* Male */}
                    <span className='genderOptionCover' onClick={() => setGender('male')}>
                        <input type="radio" id="male" name="gender" value="male"
                            checked={getGender()}
                            onChange={() => console.log()}
                        // onChange={(e) => setGender(e.target.value)}
                        />
                        <span className='radioLabel'>Nam</span>
                    </span>

                    {/* Female */}
                    <span className='genderOptionCover' onClick={() => setGender('female')}>
                        <input type="radio" id="female" name="gender" value="female"
                            checked={!getGender()}
                            onChange={() => console.log()}
                        // onChange={(e) => setGender(e.target.value)}
                        />
                        <span className='radioLabel'>Nữ</span>
                    </span>
                </div>

                {/* Next Btn */}
                <div className="BtnContainer">
                    <button className='continueBtn' onClick={onConfirm}>XÁC NHẬN</button>
                </div>
            </div>

        </motion.div>
    )
}

export default Information