import { Row, Col, Popconfirm } from 'antd'
import { RightOutlined, RedoOutlined } from '@ant-design/icons'
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
  const { getName, restart } = useInteractedData()
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

      {/* logo */}
      <Row className='logo'>

        <img src="./Assets/Logo/logowhite.png" />
        <img src="./Assets/Logo/L8veLott.png" />
      </Row>

      {/* Behavior */}
      <Row className='result_body'>
        <Col span={13} className='behaviorContainer'>
          <Row className='title'>TÍNH CÁCH</Row>
          <Row className="behaveCont">
            {
              result?.ownCharacter.behavior.map((behavior: string, i: number) => (
                <motion.div
                  key={i}
                  className="behavior"
                  initial={defaultAnimate}
                  animate={animate}
                  exit={exitAnimate}
                  transition={{ delay: i * 0.25 }}
                >
                  {behavior}
                </motion.div>
              ))
            }
          </Row>
        </Col>
        <Col span={11} className='character_image_container'>
          <img src="Assets/Images/elsa.png" className='ownCharacterImg' />
        </Col>
      </Row>

      {/* Match & Anti */}
      <Row className='result_body2'>
        <Col span={13} className='anti_character'>
          <Row className='title'>KHÔNG HỢP</Row>
          <Row className='body'>
            {
              result?.antiCharacter.map((character: any, i: number) =>
                <CharacterDisplay key={i} name={character.name} imgUrl="./Assets/Images/elsa.png" animationDelay={i} />)
            }
          </Row>
        </Col>
        <Col span={11} className='attract_character'>
          <Row className='title'>HỢP</Row>
          <Row className='body'>
            {
              result?.matchCharacter.map((character: any, i: number) =>
                <CharacterDisplay key={i} name={character.name} imgUrl="./Assets/Images/elsa.png" animationDelay={i} />)
            }
          </Row>
        </Col>
      </Row>

      {/* Btns */}
      <Row className='btnsContainer'>
        <Popconfirm title="Bạn có chắc chắn muốn chơi lại không?" cancelText="Không" okText="Chắc chắn" onConfirm={restart}>
          <button className="restart"> <RedoOutlined className="icon" />Chơi lại</button>
        </Popconfirm>
      </Row>

      {/* Footer */}
      <Row className='result_footer'>
        <div className="copyright">Coc Sai Gon Comminication Club 2024 © All rights are reserved </div>
      </Row>
    </motion.div>
  )
}

export default Result