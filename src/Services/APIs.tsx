import axios from "axios"

const endPoint = "https://sheet.best/api/sheets/4406b309-7096-4130-b302-f10f79917678"

export const saveDataToSheet = (data: any) => {
    axios.post(endPoint, data)
        .catch()
}