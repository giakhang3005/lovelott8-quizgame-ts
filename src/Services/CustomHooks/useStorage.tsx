import { IUserInteractData } from '../Interfaces'

export const useStorage = () => {

    const saveColor = (color: any) => {
        localStorage.setItem('userCustomTheme', JSON.stringify(color));
    }

    const getColor = () => {
        let parsedColor = localStorage.getItem('userCustomTheme')
        if (parsedColor) {
            return JSON.parse(parsedColor)
        } else {
            return null
        }
    }

    const saveData = (data: IUserInteractData, step: number) => {
        let fullData = {
            interactedData: data,
            step: step,
        }
        const stringifyData = JSON.stringify(fullData)
        const encryptedData = encodeURIComponent(stringifyData);

        localStorage.setItem('userData', encryptedData);
    }

    const getData = () => {
        const localData = localStorage.getItem('userData')

        if (localData) {
            const decodedData = decodeURIComponent(localData)
            return JSON.parse(decodedData)
        } else {
            return null
        }
    }

    const clearData = () => {
        localStorage.removeItem('userData')
    }

    return { saveData, getData, clearData, saveColor, getColor }
}