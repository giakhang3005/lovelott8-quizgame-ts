import { useContext } from "react"
import { IContext, Data } from '../../Layout/MainLayout'

export const useStep = () => {
    const { currentStep, setCurrentStep } = useContext(Data) as IContext

    const nextStep = () => {
        setCurrentStep(currentStep + 1)
    }

    return {nextStep}
}