import { useContext } from "react"
import { IContext, Data } from '../App'

export const useStep = () => {
    const { currentStep, setCurrentStep } = useContext(Data) as IContext

    const nextStep = () => {
        setCurrentStep(currentStep + 1)
    }

    return {nextStep}
}