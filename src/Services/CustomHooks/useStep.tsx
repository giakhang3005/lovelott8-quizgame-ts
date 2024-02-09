import { useContext } from "react"
import { IContext, Data } from '../../Layout/MainLayout'
import { message } from "antd"

export const useStep = () => {
    const { currentStep, setCurrentStep } = useContext(Data) as IContext

    const nextStep = () => {
        navigator.onLine ? setCurrentStep(currentStep + 1) : message.error('Vui lòng kiểm tra lại kết nối mạng của bạn')
    }

    return {nextStep}
}