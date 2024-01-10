interface ICharacter {
    id: number,
    maleName: string,
    femaleName: string,
    point: {
        min: number,  // >=
        max: number, // <=
    }
}

export const Characters: ICharacter[] = [
    {
        id: 1,
        maleName: 'Hoàng tử Charming',
        femaleName: 'Elsa',
        point: {
            min: 97,
            max: 103,
        }
    },

    {
        id: 2,
        maleName: 'Hoàng tử Adam - Beast',
        femaleName: 'Belle',
        point: {
            min: 104,
            max: 108,
        }
    },

    {
        id: 3,
        maleName: 'Hoàng tử Eric',
        femaleName: 'Aurora',
        point: {
            min: 48,
            max: 54,
        }
    },

    {
        id: 4,
        maleName: 'Hoàng tử Li Shang',
        femaleName: 'Aurora',
        point: {
            min: 62,
            max: 68,
        }
    },

    {
        id: 5,
        maleName: 'Hoàng tử Ali',
        femaleName: 'Tiana',
        point: {
            min: 41,
            max: 47,
        }
    },

    {
        id: 6,
        maleName: 'Hoàng tử Phillip',
        femaleName: 'Cinderella',
        point: {
            min: 69,
            max: 75,
        }
    },

    {
        id: 7,
        maleName: 'Hoàng tử Young MacGuffin',
        femaleName: 'Công chúa tóc xù',
        point: {
            min: 76,
            max: 82,
        }
    },

    {
        id: 8,
        maleName: 'Hoàng tử John Smith',
        femaleName: 'Pocahontas',
        point: {
            min: 55,
            max: 61,
        }
    },

    {
        id: 9,
        maleName: 'Hoàng tử Eugene Fitzherbert - Flynn Rider',
        femaleName: 'Jasmine',
        point: {
            min: 27,
            max: 33,
        }
    },

    {
        id: 10,
        maleName: 'Hoàng tử Florian từ',
        femaleName: 'Bạch Tuyết',
        point: {
            min: 83,
            max: 89,
        }
    },

    {
        id: 11,
        maleName: 'Hoàng tử Naveen',
        femaleName: 'Rapunzel',
        point: {
            min: 34,
            max: 40,
        }
    },

    {
        id: 12,
        maleName: 'Hoàng tử Aladdin',
        femaleName: 'Mulan',
        point: {
            min: 90,
            max: 96,
        }
    },
];

