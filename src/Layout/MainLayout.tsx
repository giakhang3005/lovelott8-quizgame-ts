import { useState, createContext, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import StartScreen from './StartScreen/StartScreen';
import Information from './Information/Information';
import { Col, Modal, Row } from 'antd';
import Result from './Result/Result';
import Question from './Question/Question';
import { IUserInteractData } from '../Services/Interfaces';
import Feedback from './Feedback/Feedback';
import { useStorage } from '../Services/CustomHooks/useStorage';
import BlockedScreen from './BlockedScreen/BlockedScreen';
import { useCheck } from '../Services/CustomHooks/useCheck';
import { checkingVersion } from '../Services/APIs';
import UpdateRequire from './UpdateRequire/UpdateRequire';
import LogoContainer from './Background/LogoContainer';

//Context to send Data through app
export interface IContext {
  interactedData: IUserInteractData,
  setInteractedData: (newInteractedData: IUserInteractData) => void

  currentStep: number,
  setCurrentStep: (step: number) => void
}

export const Data = createContext<IContext | null>(null);

const MainLayout = () => {
  // Local storage interact
  const { saveData, getData } = useStorage()

  // Check device mobile/tablet/desktop
  const { checkDevice, checkDevTool, preventCopy } = useCheck()

  // Default Data if user first visit
  const defaultInteractedData = {
    name: null,
    mssv: null,
    isMale: true,
    answers: [],
    feedback: {
      stars: null,
      content: null,
    }
  }

  // State to store current User Data & Progress
  const [interactedData, setInteractedData] = useState<IUserInteractData>(
    getData() ? getData().interactedData : defaultInteractedData
  )

  // Current user step
  const [currentStep, setCurrentStep] = useState<number>(
    getData() ? getData().step : 1
  )

  // Detect if user is using landscape mobile device
  const [landscapePhone, setLandscapePhone] = useState<boolean>(false)
  // Version
  const [correctVersion, setCorrectVersion] = useState<boolean>(true)

  useEffect(() => {
    // Update result to state
    setLandscapePhone(checkDevice())

    // Listen to change view
    window.addEventListener("orientationchange", function () {
      setLandscapePhone(!checkDevice())
    }, false);

    // Prevent Dev Tools
    checkDevTool()

    // Prevent Copy
    preventCopy()

    // Checking for version every 1 minute
    checkingVersion(setCorrectVersion)
    setInterval(() => {
      checkingVersion(setCorrectVersion)
    }, 1000 * 60)
  }, [])

  // Save Data everytime data or step change
  useEffect(() => saveData(interactedData, currentStep), [interactedData, currentStep])

  // Array of Quiz Screens
  const quizScreenArr = [<StartScreen />, <Information />, <Question />, <Feedback />, <Result />]
  
  return (
    <Data.Provider value={{ interactedData, setInteractedData, currentStep, setCurrentStep }}>
      
      {/* Club & Event logo */}
      <LogoContainer currentStep={currentStep} />

      {/* Wrong Version Noti -> Call user to reload page */}
      <Modal title="Yêu cầu cập nhật phiên bản" open={!correctVersion} footer={null} closable={false}>
        <UpdateRequire />
      </Modal>
      {
        landscapePhone ?
          // Show block screen on landscape mobile devices
          <AnimatePresence>
            <BlockedScreen />
          </AnimatePresence>
          :
          <Row>
            <Col className='unuseZone' xs={0} md={6}></Col>

            {/* Quiz part, return correct component for each part */}
            <Col xs={24} sm={12} className="App">
              <AnimatePresence>
                {quizScreenArr[currentStep - 1]}
              </AnimatePresence>
            </Col>

            <Col className='unuseZone' xs={0} md={6}></Col>
          </Row>
      }
    </Data.Provider>
  );
}

export default MainLayout;
