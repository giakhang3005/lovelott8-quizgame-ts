import axios from "axios"

// Sheet
const endPointSheet = "https://sheet.best/api/sheets/4406b309-7096-4130-b302-f10f79917678"

// Version
const currentVersion = 1.2
const endPointVer = "https://657dba623e3f5b1894630954.mockapi.io/lovelottCheckVer"

// Send a post request to sheet endpoint to save data
export const saveDataToSheet = (data: any) => {
    axios.post(endPointSheet, data)
        .catch((err) => console.log(err))
}

// Fetching version number and validate, if wrong version -> notice user to update
export const checkingVersion = (setCorrectVersion: (value: boolean) => void) => {
    axios.get(endPointVer)
        .then((res) => { 
            // console.log(res.data[0].version === currentVersion)
            setCorrectVersion(res.data[0].version === currentVersion) 
        })
        .catch((err) => console.log(err))
}