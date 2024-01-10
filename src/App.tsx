import { useState, createContext } from 'react'

//Interfaces
//App Global State to store data from user
interface IAnswerSaveToData {
  questionId: number,
  answerId: string,
  points: number,
}
export interface IUserInteractData {
  personalInformations: {
    name: string,
    mssv: string,
    isMale: boolean,
  },
  answers: IAnswerSaveToData[],
}

//Context to send Data through app
export interface IContext {
  interactedData: IUserInteractData | null,
  setInteractedData: (newInteractedData: IUserInteractData) => void

  currentStep: number,
  setCurrentStep: (step: number) => void
}

export const Data = createContext<IContext | null>(null);

function App() {
  const [interactedData, setInteractedData] = useState<IUserInteractData | null>(null)
  const [currentStep, setCurrentStep] = useState<number>(1)

  return (
    <Data.Provider value={{ interactedData, setInteractedData, currentStep, setCurrentStep }}>
      <div className="App">

        {/* Step 1: Tap start */}

        {/* Step 2: Enter personal Informations */}

        {/* Step 3: Answer questions */}

        {/* Step 4: Receive results */}

      </div>
    </Data.Provider>
  );
}

export default App;
