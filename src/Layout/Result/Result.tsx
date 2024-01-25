import { Row, Col } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import "./Result.scss"
import useInteractedData from '../../Services/useInteractedData'
import CharacterDisplay from './CharacterDisplay'
import { useEffect, useState } from 'react'
import useResult from '../../Services/useResult'

type Props = {}

const Result = (props: Props) => {
  const { getName } = useInteractedData()
  const [result, setResult] = useState<any>(null)

  const { getOwnCharacter } = useResult()
  useEffect(() => {
    setResult(getOwnCharacter())
  }, [])

  return (
    <div className='result'>
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
          <div className='attract_title'>KHÔNG HỢP VỚI</div>
        </Col>
        <Col span={11} className='attract_character'>
          {
            result?.antiCharacter.map((character: any, i: number) => 
            <CharacterDisplay key={i} name={character.name} imgUrl="./Assets/Images/elsa.png" />)
          }
        </Col>
        <Col span={10} className='character_image_container'>
          <img src="Assets/Images/elsa.png" className='ownCharacterImg' />
        </Col>
      </Row>

      {/* ko Hợp & Image */}
      <Row className='result_body2'>
        <Col span={3} className='attractTitleContainer'>
          <div className='attract_title'>HỢP VỚI</div>
        </Col>
        <Col span={21} className='attract_character'>
        {
            result?.matchCharacter.map((character: any, i: number) => 
            <CharacterDisplay key={i} name={character.name} imgUrl="./Assets/Images/elsa.png" />)
          }
        </Col>
      </Row>

      {/* Footer */}
      <Row className='result_footer'>
        <div className="copyright">Coc Sai Gon Comminication Club © All rights are reserved </div>
      </Row>
    </div>
  )
}

export default Result