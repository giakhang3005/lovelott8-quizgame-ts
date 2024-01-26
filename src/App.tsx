import { useState, createContext, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import StartScreen from './Layout/StartScreen/StartScreen';
import Information from './Layout/Information/Information';
import { Col, Row } from 'antd';
import Result from './Layout/Result/Result';
import Question from './Layout/Question/Question';
import { IAnswers } from './Data/Questions';
import Feedback from './Layout/Feedback/Feedback';
import { useStorage } from './Services/useStorage';

//Interfaces
//App Global State to store data from user
export interface ISavedAnswer {
  qId: number,
  answer: IAnswers,
}

export interface IUserInteractData {
  name: string | null,
  mssv: string | null,
  isMale: boolean,
  answers: ISavedAnswer[],
  feedback: {
    stars: number | null,
    content: string | null,
  }
}


//Context to send Data through app
export interface IContext {
  interactedData: IUserInteractData,
  setInteractedData: (newInteractedData: IUserInteractData) => void

  currentStep: number,
  setCurrentStep: (step: number) => void
}

export const Data = createContext<IContext | null>(null);

function App() {
  // Local storage interact
  const { saveData, getData } = useStorage()

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
  const [interactedData, setInteractedData] = useState<IUserInteractData>(
    getData() ? getData().interactedData : defaultInteractedData
  )
  const [currentStep, setCurrentStep] = useState<number>(
    getData() ? getData().step : 1
  )

  // Save Data
  useEffect(() => {
    saveData(interactedData, currentStep)
  }, [interactedData, currentStep])

  return (
    <Data.Provider value={{ interactedData, setInteractedData, currentStep, setCurrentStep }}>
      <Row>
        <Col className='unuseZone' xs={0} sm={6}></Col>
        <Col xs={24} sm={12}>
          <div className="App">
            {/* Step 1: Tap start */}
            <AnimatePresence>
              {
                currentStep === 1 && (
                  <StartScreen />
                )
              }
            </AnimatePresence>

            {/* Step 2: Enter personal Informations */}
            <AnimatePresence>
              {
                currentStep === 2 && (
                  <Information />
                )
              }
            </AnimatePresence>

            {/* Step 3: Answer questions */}
            <AnimatePresence>
              {
                currentStep === 3 && (
                  <Question />
                )
              }
            </AnimatePresence>

            {/* Step 4: Feedback */}
            <AnimatePresence>
              {
                currentStep === 4 && (
                  <Feedback />
                )
              }
            </AnimatePresence>

            {/* Step 5: Receive result */}
            <AnimatePresence>
              {
                currentStep === 5 && (
                  <Result />
                )
              }
            </AnimatePresence>

          </div>
        </Col>

        <Col className='unuseZone' xs={0} sm={6}></Col>
      </Row>
    </Data.Provider>
  );
}

export default App;
