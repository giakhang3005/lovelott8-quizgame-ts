import { Row, Col } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import "./Result.scss"
import useInteractedData from '../../Services/useInteractedData'
import CharacterDisplay from './CharacterDisplay'
import { useEffect, useState } from 'react'
import useResult from '../../Services/useResult'
import { motion } from 'framer-motion'

type Props = {}

//Animation
const defaultAnimate = { opacity: 0 }
const animate = { opacity: 1 }
const exitAnimate = { opacity: 0 }
const transition = { duration: 0.4 }

const Result = (props: Props) => {
  const { getName } = useInteractedData()
  const [result, setResult] = useState<any>(null)

  window.addEventListener('resize', setHeight);
  window.addEventListener('load', setHeight);

  function setHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setHeight()
  
  const { getOwnCharacter } = useResult()
  useEffect(() => {
    setResult(getOwnCharacter())
  }, [])

  return (
    <motion.div className='result'
      initial={defaultAnimate}
      animate={animate}
      exit={exitAnimate}
      transition={transition}
    >
      {/* Header */}
      <Row className='result_header'>
        <Col span={12} className='header_left'>

          <div className="title">Kết quả của:</div>
          <div className="name">{getName()}</div>

          <RightOutlined className="decorArrow pos1" />
          <RightOutlined className="decorArrow pos2" />
          <RightOutlined className="decorArrow pos3" />
        </Col>
        <Col span={12} className='header_right'>
          <img src="Assets/favicon.png" className='favIcon' />
          <div className="character">{result?.ownCharacter.name}</div>
        </Col>
      </Row>

      {/* behavior */}
      <Row className='characteristic'>
        <Col span={6} className="characteristic_title">Tính cách: </Col>
        <Col span={18} className="characteristic_content">
          {result?.ownCharacter.behavior}
        </Col>
      </Row>

      {/* ko Hợp & Image */}
      <Row className='result_body'>
        <Col span={3} className='attractTitleContainer'>
          <div className='attract_title'>KHÔNG HỢP</div>
        </Col>
        <Col span={11} className='attract_character'>
          {
            result?.antiCharacter.map((character: any, i: number) =>
              <CharacterDisplay key={i} name={character.name} imgUrl="./Assets/Images/elsa.png" animationDelay={i} />)
          }
        </Col>
        <Col span={10} className='character_image_container'>
          <img src="Assets/Images/elsa.png" className='ownCharacterImg' />
        </Col>
      </Row>

      {/* ko Hợp & Image */}
      <Row className='result_body2'>
        <Col span={3} className='attractTitleContainer'>
          <div className='attract_title'>HỢP</div>
        </Col>
        <Col span={21} className='attract_character'>
          {
            result?.matchCharacter.map((character: any, i: number) =>
              <CharacterDisplay key={i} name={character.name} imgUrl="./Assets/Images/elsa.png" animationDelay={i} />)
          }
        </Col>
      </Row>

      {/* Footer */}
      <Row className='result_footer'>
        <div className="copyright">Coc Sai Gon Comminication Club 2024 © All rights are reserved </div>
      </Row>
    </motion.div>
  )
}

export default Result