import { motion } from 'framer-motion'

type Props = {
    currentStep: number
}

const LogoContainer = ({ currentStep }: Props) => {
    return (
        <div className='logoContainer'>
            <img src="./Assets/Logo/logowhite.png" />
            {currentStep > 1 && <motion.img
                initial={{ transform: 'translate(18vw, 13vh)', opacity: 1, height: '50px' }}
                animate={{ transform: 'translate(0, 0)', opacity: 1, height: '37px' }}
                transition={{ duration: 0.5 }}
                src="./Assets/Logo/L8veLott.png" />}
        </div>
    )
}

export default LogoContainer