// Character
export interface ICharacter {
    id: string,
    name: string,
    img: string,
    isMale: boolean,
    behavior: string[],
    match: string[],
    anti: string[],
    // color: {
    //     text: string,
    //     background: string,
    //     sub: string,
    // }
}

// rule set to define correct character
export interface ICharacterRuleSet {
    id: number,

    //ID of character
    male: string,
    female: string,

    // Point range
    point: {
        min: number,  // >=
        max: number, // <=
    }
}

// Interface for answers
export interface IAnswers {
    id: string,
    content: string,
    point: number,
}

// Interface for question
export interface IQuestion {
    id: number,
    question: string,
    answers: IAnswers[],
}

// Saved Answers to user data
export interface ISavedAnswer {
    qId: number,
    answer: IAnswers,
}

// User Data
export interface IUserInteractData {
    name: string | null,
    mssv: string | null,
    isMale: boolean,
    answers: ISavedAnswer[],
    feedback: {
        stars: number | null,
        content: string | null,
    }
}