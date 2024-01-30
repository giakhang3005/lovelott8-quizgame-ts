import { Row, Col, Popconfirm, Modal, ColorPicker } from 'antd'
import { RedoOutlined, HeartFilled } from '@ant-design/icons'
import "./Result.scss"
import useInteractedData from '../../Services/useInteractedData'
import CharacterDisplay from './CharacterDisplay'
import { useEffect, useState } from 'react'
import useResult from '../../Services/useResult'
import { motion } from 'framer-motion'
import { useStorage } from '../../Services/useStorage'

type Props = {}

//Animation
const defaultAnimate = { opacity: 0 }
const animate = { opacity: 1 }
const exitAnimate = { opacity: 0 }
const transition = { duration: 0.4 }

const Result = (props: Props) => {
  const { getName, restart } = useInteractedData()
  const [result, setResult] = useState<any>(null)
  const heart = [1, 2, 3, 4, 5, 6, 7]

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

  // Color Hanlder
  const { saveColor, getColor } = useStorage()
  let defaultColor = {
    purple: '#565587',
    lightPurple: '#d5c0ec',
    white: '#ffeff9',
    pink: '#e7a4c7',
    lightPink: '#f2cde2',
    heart: '#f472b6',
  }
  const [colorTest, setColorTest] = useState(getColor() ? getColor() : defaultColor)
  const [modalState, setModalState] = useState<boolean>(false)

  const changeColor = (changedColorProp: string, newColor: string) => {
    let newColorSet = { ...colorTest, [changedColorProp]: newColor }
    setColorTest(newColorSet)
    saveColor(newColorSet)
  }

  const resetColor = () => {
    setColorTest(defaultColor)
    saveColor(defaultColor)
  }

  return (
    <motion.div className='result'
      initial={defaultAnimate}
      animate={animate}
      exit={exitAnimate}
      transition={transition}
    >

      <Modal title="Yêu theo màu sắc của bạn" open={modalState} footer={null} onCancel={() => setModalState(false)}>
        <div style={Object.assign({ fontWeight: 600 }, { fontSize: "17px" }, { margin: '0 0 5px 0' })}>Màu nền</div>
        <ColorPicker value={colorTest.purple} onChange={(e) => changeColor('purple', e.toHexString())} showText style={{ margin: '0 8px 5px 0' }} />
        <ColorPicker value={colorTest.lightPurple} onChange={(e) => changeColor('lightPurple', e.toHexString())} showText style={{ margin: '0 8px 5px 0' }} />
        <ColorPicker value={colorTest.white} onChange={(e) => changeColor('white', e.toHexString())} showText style={{ margin: '0 8px 5px 0' }} />
        <ColorPicker value={colorTest.pink} onChange={(e) => changeColor('pink', e.toHexString())} showText style={{ margin: '0 8px 5px 0' }} />
        <ColorPicker value={colorTest.lightPink} onChange={(e) => changeColor('lightPink', e.toHexString())} showText style={{ margin: '0 8px 5px 0' }} />

        <div style={Object.assign({ fontWeight: 600 }, { fontSize: "17px" }, { margin: '12px 0 5px 0' })}>Màu trái tim</div>
        <ColorPicker value={colorTest.heart} onChange={(e) => changeColor('heart', e.toHexString())} showText style={{ margin: '0 8px 5px 0' }} />

        <div className="resetColor" onClick={(setColorTest) => resetColor()}>Reset màu</div>
      </Modal>

      {/* Header */}
      <Row className='result_header'>
        <Col span={12} className='header_left' style={{ backgroundColor: colorTest.lightPurple }} >

          <div className="title">Kết quả của:</div>
          <div className="name">{getName()}</div>

          {/* <RightOutlined className="decorArrow pos1" />
          <RightOutlined className="decorArrow pos2" />
          <RightOutlined className="decorArrow pos3" /> */}
        </Col>
        <Col span={12} className='header_right' style={{ backgroundColor: colorTest.lightPink }}>
          <img src="Assets/favicon.png" className='favIcon' />
          <div className="character">{result?.ownCharacter.name}</div>
        </Col>
      </Row>

      {/* logo */}
      <Row className='logo' style={{ backgroundColor: colorTest.purple }}>
        <img src="./Assets/Logo/logowhite.png" />
        <img src="./Assets/Logo/L8veLott.png" />
      </Row>

      {/* Behavior */}
      <Row className='result_body' style={{ backgroundColor: colorTest.pink }}>
        <Col span={6} sm={7} className='heartContainer'>
          {
            heart.map((i) => (
              <HeartFilled key={i} className="heart" style={Object.assign({ color: colorTest.heart }, { top: `90%` }, { left: `${Math.random() * 90}%` }, { animationDelay: `${Math.random() * 5}s` })} />
            ))
          }

        </Col>
        <Col span={12} sm={10} className='character_image_container'>
          <div className="border" style={{ backgroundColor: colorTest.white }}>
            <img src="Assets/Images/elsa.png" className='ownCharacterImg' />
          </div>
        </Col>
        <Col span={6} sm={7} className='heartContainer'>
          {
            heart.map(i => (
              <HeartFilled key={i} className="heart" style={Object.assign({ color: colorTest.heart }, { top: `90%` }, { left: `${Math.random() * 90}%` }, { animationDelay: `${Math.random() * 5}s` })} />
            ))
          }
        </Col>
      </Row>

      {/* Match & Anti */}
      <Row className='result_body2'>
        <Row className='title' style={{ backgroundColor: colorTest.purple }}>TÍNH CÁCH</Row>
        <Row className="behaveCont" style={{ backgroundColor: colorTest.white }}>
          {
            result?.ownCharacter.behavior.map((behavior: string, i: number) => (
              behavior.split(',').map((behav: string, j: number) => (
                <motion.div
                  key={`${i}${j}`}
                  className="behavior"
                  initial={defaultAnimate}
                  animate={animate}
                  exit={exitAnimate}
                  transition={{ delay: i * 0.25 }}
                  style={{ backgroundColor: colorTest.purple }}
                >
                  {behav.replace('.', '')}
                </motion.div>
              ))

            ))
          }
        </Row>
      </Row>

      <Row className='matchesCharacter'>
        <Col className='attract' span={12}>
          <Row className='title' style={{ backgroundColor: colorTest.pink }}>HỢP</Row>
          <Row className='characters' style={{ backgroundColor: colorTest.lightPink }}>
            {
              result?.matchCharacter.map((character: any, i: number) =>
                <CharacterDisplay key={i} name={character.name} imgUrl="./Assets/Images/elsa.png" animationDelay={i} />)
            }
          </Row>
        </Col>
        <Col className='anti' span={12}>
          <Row className='title' style={{ backgroundColor: colorTest.purple }}>KHÔNG HỢP</Row>
          <Row className='characters' style={{ backgroundColor: colorTest.lightPurple }}>
            {
              result?.antiCharacter.map((character: any, i: number) =>
                <CharacterDisplay key={i} name={character.name} imgUrl="./Assets/Images/elsa.png" animationDelay={i} />)
            }
          </Row>
        </Col>
      </Row>

      {/* Btns */}
      <Row className='btnsContainer' style={{ backgroundColor: colorTest.purple }}>
        <Popconfirm title="Bạn có chắc chắn muốn chơi lại không?" cancelText="Không" okText="Chắc chắn" onConfirm={restart}>
          <button className="restart"> <RedoOutlined className="icon" />Chơi lại</button>
        </Popconfirm>
        <div className="customBtn" onClick={() => setModalState(true)}>Custom màu</div>
      </Row>

      {/* Footer */}
      <Row className='result_footer'>
        <div className="copyright">Coc Sai Gon Comminication Club 2024 © All rights are reserved </div>
      </Row>
    </motion.div>
  )
}

export default Result