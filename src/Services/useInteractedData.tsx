import { useContext } from "react"
import { IContext, Data, IUserInteractData } from '../App'
import { useStorage } from "./useStorage"

const useInteractedData = () => {
    const { interactedData, setInteractedData, setCurrentStep } = useContext(Data) as IContext
    const { clearData } = useStorage()

    //! Getter
    const getName = () => {
        return interactedData.name
    }

    const getMSSV = () => {
        return interactedData.mssv
    }

    const getGender = () => {
        return interactedData.isMale
    }

    //! Setter
    const setName = (newName: string) => {
        let newData: IUserInteractData = {
            ...interactedData,
            name: newName,
        }
        setInteractedData(newData)
    }

    const setMSSV = (newMSSV: string) => {
        let newData: IUserInteractData = {
            ...interactedData,
            mssv: newMSSV,
        }
        setInteractedData(newData)
    }

    const setGender = (newGender: string) => {
        // newGender
        var isMale = newGender === 'male'
        let newData: IUserInteractData = {
            ...interactedData,
            isMale: isMale,
        }
        setInteractedData(newData)
    }

    //!Validate
    const validateInformations = () => {
        let nameErr = !interactedData.name || interactedData.name.trim().length < 8
        let mssvErr = !interactedData.mssv || interactedData.mssv.trim().length < 8

        return nameErr || mssvErr
    }

    // Restart
    const restart = () => {
        clearData()
        setInteractedData({
            name: null,
            mssv: null,
            isMale: true,
            answers: [],
            feedback: {
                stars: null,
                content: null,
            }
        })
        setCurrentStep(1)
    }

    return { getName, getMSSV, getGender, setName, setMSSV, setGender, validateInformations, restart }
}

export default useInteractedData