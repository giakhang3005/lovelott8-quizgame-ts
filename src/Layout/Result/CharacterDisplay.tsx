import { motion } from 'framer-motion'

type Props = {
  name: string,
  imgUrl: string,
  animationDelay: number,
  textColor: string,
}

//animation
const defaultAnimate = { opacity: 0 }
const animate = { opacity: 1 }

const CharacterDisplay = ({ name, imgUrl, animationDelay, textColor }: Props) => {
  return (
    <motion.div className='characterDisplay'
      initial={defaultAnimate}
      animate={animate}
      transition={{ delay: 0.3 + animationDelay * 0.25 }}
    >
      <div className="imageContainer">
        <img src={imgUrl} className='characterImage' />
      </div>
      <div className="characterName" style={{ color: textColor }}>{name}</div>
    </motion.div>
  )
}

export default CharacterDisplay