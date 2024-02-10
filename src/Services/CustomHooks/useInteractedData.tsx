import { useContext } from "react"
import { IContext, Data } from '../../Layout/MainLayout'
import { useStorage } from "./useStorage"
import { IUserInteractData } from "../Interfaces"

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
        var firstLetter="[A-EGHIK-VXYÂĐỔÔÚỨa-eghik-vxyàáâãèéêìíòóôõùúýỳỹỷỵựửữừứưụủũợởỡờớơộổỗồốọỏịỉĩệểễềếẹẻẽặẳẵằắăậẩẫầấạảđ₫]".normalize("NFC"),
        otherLetters="[a-eghik-vxyàáâãèéêìíòóôõùúýỳỹỷỵựửữừứưụủũợởỡờớơộổỗồốọỏịỉĩệểễềếẹẻẽặẳẵằắăậẩẫầấạảđ₫]".normalize("NFC"),
        regexString="^"
                   +firstLetter+otherLetters+"+\\s"
                   +"("+firstLetter+otherLetters+"+\\s)*"
                   +firstLetter+otherLetters+"+$",
        regexPattern=RegExp(regexString);


        let nameMatchesPattern = interactedData.name && regexPattern.test(interactedData.name)
        
        let nameErr = !interactedData.name || interactedData.name.trim().length < 7 || /[!@#$%^&*(),.?":{}|<>]/.test(interactedData.name) || !nameMatchesPattern
        let mssvErr = !interactedData.mssv || interactedData.mssv.trim().length < 7 || /[!@#$%^&*(),.?":{}|<>]/.test(interactedData.mssv) || !/\d{5}/.test(interactedData.mssv);

        return {
            nameErr: nameErr,
            mssvErr: mssvErr,
        }
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
        setCurrentStep(2)
    }

    return { getName, getMSSV, getGender, setName, setMSSV, setGender, validateInformations, restart }
}

export default useInteractedData