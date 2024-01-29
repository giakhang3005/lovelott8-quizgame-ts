import { useContext } from "react"
import { IContext, Data } from '../App'
import { characters } from "../Data/Character"
import { charactersRuleSet } from "../Data/Character"

const useResult = () => {
    const { interactedData, setInteractedData } = useContext(Data) as IContext

    const findCharacter = (characterId: string) => {
        return characters.find(character => character.id === characterId)
    }

    const getOwnCharacter = () => {
        // Count points
        let totalPoints = 0
        interactedData.answers.forEach((answer) => {
            totalPoints += answer.answer.point
        })

        // Find character rule set
        const ownCharacterRuleSet = charactersRuleSet.find(ruleSet => totalPoints >= ruleSet.point.min && totalPoints <= ruleSet.point.max)

        // Find user character
        let ownCharacter = null
        if (ownCharacterRuleSet) {
            ownCharacter = interactedData.isMale ? findCharacter(ownCharacterRuleSet?.male) : findCharacter(ownCharacterRuleSet?.female)
        }

        // Find match character
        let matchCharacter = null
        if (ownCharacter) {
            matchCharacter = ownCharacter.match.map((characterId) => findCharacter(characterId))
        }

        // Find anti character
        let antiCharacter = null
        if (ownCharacter) {
            antiCharacter = ownCharacter.anti.map((characterId) => findCharacter(characterId))
        }

        // Returned Object
        const returnedObject = {
            points: totalPoints,
            ownCharacter: ownCharacter,
            matchCharacter: matchCharacter,
            antiCharacter: antiCharacter
        }

        return returnedObject
    }

    return { getOwnCharacter }
}

export default useResult