interface ICharacterRuleSet {
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

interface ICharacter {
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

// All characters data
export const characters: ICharacter[] = [
    {
        id: 'Charming',
        name: 'Charming',
        img: '',
        isMale: true,
        behavior: [
            'Quý phái, tinh tế, lãng mạn.',
            'Kiên nhẫn và quyết đoán.',
            'Trách nhiệm và tình yêu gia đình.',
            'Hiền hòa, lạc quan.',
        ],
        match: [
            'Cinderella'
        ],
        anti: [
            'BachTuyet', 'Moana'
        ],
    },
    {
        id: 'Adam',
        name: 'Adam - Beast',
        img: '',
        isMale: true,
        behavior: [
            'Trách nhiệm, kiên nhẫn.',
            'Sẵn sàng thay đổi, linh hoạt',
            'Sự lạc quan, kiên nhẫn trong tìm kiếm tình yêu.',
            'Sự hòa nhã , thấu hiểu đối phương.',
        ],
        match: [
            'Belle'
        ],
        anti: [
            'Jasmine', 'Ariel'
        ],
    },
    {
        id: 'Eric',
        name: 'Eric',
        img: '',
        isMale: true,
        behavior: [
            'Tự tin trong quyết định, làm chủ tình huống.',
            'Độc lập trong suy nghĩ và hành động.',
            'Thân thiện, hòa nhã.',
            'Quý phái, tinh tế, lãng mạn.',
        ],
        match: [
            'Ariel'
        ],
        anti: [
            'BachTuyet', 'Moana'
        ],
    },
    {
        id: 'LiShang',
        name: 'Li Shang',
        img: '',
        isMale: true,
        behavior: [
            'Nghiêm túc, trách nhiệm và tôn trọng.',
            'Khí phách trong tư cách lãnh đạo',
            'Mạnh mẽ về cảm xúc và quyết tâm.',
            'Quyết đoán, kiên nhẫn, tận tâm.',
            'Dũng cảm, nhạy bén.',
        ],
        match: [
            'Mulan'
        ],
        anti: [
            'Ariel', 'Jasmine'
        ],
    },
    {
        id: 'Olaf',
        name: 'Olaf',
        img: '',
        isMale: true,
        behavior: [
            'Tự tin, dũng cảm, yêu sự tự do.',
            'Lạc quan, tự tin theo đuổi ước mơ.',
            'Sự thích nghi, sáng tạo.',
            'Phóng khoáng, khát khao tự do, phiêu lưu.',
        ],
        match: [
            'Elsa'
        ],
        anti: [
            'Mulan', 'BachTuyet'
        ],
    },
    {
        id: 'Phillip',
        name: 'Phillip',
        img: '',
        isMale: true,
        behavior: [
            'Lãng mạn trong tình cảm.',
            'Quyết đoán trong việc đối mặt với thách thức.',
            'Chung thủy với mối quan hệ.',
            'Kiên trì, tận tâm, trách nhiệm.',
        ],
        match: [
            'Aurora'
        ],
        anti: [
            'Elsa', 'Rapunzel'
        ],
    },
    {
        id: 'Kristoff',
        name: 'Kristoff',
        img: '',
        isMale: true,
        behavior: [
            'Chân thành trong tình cảm.',
            'Tự tin trong tình yêu.',
            'Sâu sắc, hồn nhiên trong tình yêu.',
            'Nhạy bén, thấu hiểu tâm trạng đối phương.',
        ],
        match: [
            'Merida'
        ],
        anti: [
            'Belle', 'Mulan'
        ],
    },
    {
        id: 'JohnSmith',
        name: 'John Smith',
        img: '',
        isMale: true,
        behavior: [
            'Dũng cảm ',
            'Tích cực, tự tin trong mọi quyết định .',
            'Khả năng đồng thuận và lắng nghe.',
            'Sẵn sàng chia sẻ tâm tư của mình.',
        ],
        match: [
            'Moana'
        ],
        anti: [
            'Aurora', 'Elsa'
        ],
    },
    {
        id: 'FlynnRider',
        name: 'Flynn Rider',
        img: '',
        isMale: true,
        behavior: [
            'Lãng mạn, tự tin, duyên dáng.',
            'Khao khát tự do, sự độc lập',
            'Hài hước,dễ gần và thân thiện.',
            'Có trách nhiệm với mối quan hệ.',
        ],
        match: [
            'Rapunzel'
        ],
        anti: [
            'Merida', 'Belle'
        ],
    },
    {
        id: 'Florian',
        name: 'Florian',
        img: '',
        isMale: true,
        behavior: [
            'Tự tin, tự chủ trong mọi quyết định.',
            'Chung thủy, có trách nhiệm .',
            'Sự chân thật trong tình yêu.',
            'Sự hài hước, khả năng thấu hiểu, lắng nghe.',
        ],
        match: [
            'BachTuyet'
        ],
        anti: [
            'Aurora', 'Tiana'
        ],
    },
    {
        id: 'Naveen',
        name: 'Naveen',
        img: '',
        isMale: true,
        behavior: [
            'Tự tin vào bản thân, quyến rũ.',
            'Khao khát tự do, đam mê phiêu lưu ',
            'Yêu đời, tận hưởng cuộc sống.',
            'Tôn trọng, thấu hiểu cảm xúc đối phương.',
        ],
        match: [
            'Tiana'
        ],
        anti: [
            'Merida', 'Cinderella'
        ],
    },
    {
        id: 'Aladdin',
        name: 'Aladdin',
        img: '',
        isMale: true,
        behavior: [
            'Quan tâm đến cảm xúc đối phương.',
            'Giải quyết tình huống thông minh, khéo léo.',
            'Lạc quan, tích cực. ',
            'Sự tận tâm với đối phương',
            'Sẵn sàng hy sinh cho hạnh phúc chung.',
        ],
        match: [
            'Merida'
        ],
        anti: [
            'Tiana', 'Ariel'
        ],
    },
    {
        id: 'Elsa',
        name: 'Elsa',
        img: '',
        isMale: false,
        behavior: [
            'Độc lập',
            'Tự chủ',
            'Tinh tế, thấu hiểu và chia sẻ.',
            'Tinh thần tự do',
        ],
        match: [
            'Olaf'
        ],
        anti: [
            'Florian', 'JohnSmith'
        ]
    },
    {
        id: 'Belle',
        name: 'Belle',
        img: '',
        isMale: false,
        behavior: [
            'Tư duy độc lập',
            'Tri thức',
            'Nhạy bén, sáng tạo',
            'Tâm hồn nghệ thuật',
        ],
        match: ['Adam'],
        anti: ['FlynnRider', 'Kristoff']
    },
    {
        id: 'Aurora',
        name: 'Aurora',
        img: '',
        isMale: false,
        behavior: [
            'Thanh tao, hiền hòa, dịu dàng',
            'Sống tình cảm, đáng yêu',
            'Tinh thần phiêu lưu',
            'Lãng mạn',
        ],
        match: ['Phillip'],
        anti: ['Florian', 'JohnSmith']
    },
    {
        id: 'Merida',
        name: 'Merida',
        img: '',
        isMale: false,
        behavior: [
            'Mạnh dạn, dũng cảm và thẳng thắn.',
            'Kiêu hãnh',
            'Năng động',
            'Tự do và độc lập',
        ],
        match: ['Phillip'],
        anti: ['Kristoff', 'FlynnRider'],
    },
    {
        id: 'Tiana',
        name: 'Tiana',
        img: '',
        isMale: false,
        behavior: [
            'Chăm chỉ, nỗ lực',
            'Nhìn xa trông rộng',
            'Tích cực, lạc quan',
            'Thông minh, kiên định',
        ],
        match: ['Naveen'],
        anti: ['Aladdin', 'Florian'],
    },
    {
        id: 'Cinderella',
        name: 'Cinderella',
        img: '',
        isMale: false,
        behavior: [
            'Nghị lực, quyết tâm, kiên trì',
            'Tốt bụng, nhân ái',
            'Quý phái',
            'Thấu hiểu',
        ],
        match: ['Charming'],
        anti: ['Naveen', 'FlynnRider'],
    },
    {
        id: 'Ariel',
        name: 'Nàng tiên cá',
        img: '',
        isMale: false,
        behavior: [
            'Mạnh mẽ',
            'Tốt bụng, đáng yêu',
            'Tò mò, đam mê khám phá, sáng tạo',
            'Hoài bão',
            'Tinh thần nghệ thuật',
        ],
        match: ['Eric'],
        anti: ['Adam', 'Aladdin']
    },
    {
        id: 'Moana',
        name: 'Moana',
        img: '',
        isMale: false,
        behavior: [
            'Trách nhiệm',
            'Mạnh mẽ',
            'Nghĩa hiệp, tinh thần phiêu lưu',
            'Kiên nhẫn, sẵn sàng học hỏi',
        ],
        match: ['JohnSmith'],
        anti: ['Eric', 'Charming']
    },
    {
        id: 'Jasmine',
        name: 'Jasmine',
        img: '',
        isMale: false,
        behavior: [
            'Chăm chỉ',
            'Nghị lực, kiên nhẫn',
            'Có tầm nhìn',
            'Lãng mạn, khao khát tình yêu đich thực',
        ],
        match: ['Eric'],
        anti: ['LiShang', 'Adam']
    },
    {
        id: 'BachTuyet',
        name: 'Bạch Tuyết',
        img: '',
        isMale: false,
        behavior: [
            'Dễ thương, hiền hậu',
            'Hòa đồng',
            'Quyến rũ, tinh tế',
            'Tôn trọng',
        ],
        match: ['Florian'],
        anti: ['Eric', 'Olaf']
    },
    {
        id: 'Rapunzel',
        name: 'Công chúa tóc mây',
        img: '',
        isMale: false,
        behavior: [
            'Kiên định',
            'Quyết tâm',
            'Mạnh mẽ',
            'Lạc quan',
            'Tính nghệ sĩ trong tâm hồn',
        ],
        match: ['FlynnRider'],
        anti: ['LiShang', 'Phillip']
    },
    {
        id: 'Mulan',
        name: 'Hoa Mộc Lan',
        img: '',
        isMale: false,
        behavior: [
            'Yêu thích mạo hiểm',
            'Táo bạo',
            'Biết hi sinh',
            'Kiên nhẫn, nỗ lực',
            'Tinh thần phiêu lưu, sẵn sàng khám phá',
        ],
        match: ['LiShang'],
        anti: ['Olaf', 'Kristoff']
    }
];


// All characters rule set
export const charactersRuleSet: ICharacterRuleSet[] = [
    {
        id: 1,
        male: 'Charming',
        female: 'Elsa',
        point: {
            min: 16,
            max: 19,
        }
    },
    {
        id: 2,
        male: 'Adam',
        female: 'Belle',
        point: {
            min: 20,
            max: 23,
        }
    },
    {
        id: 3,
        male: 'Eric',
        female: 'Aurora',
        point: {
            min: 24,
            max: 27,
        }
    },
    {
        id: 4,
        male: 'LiShang',
        female: 'Merida',
        point: {
            min: 28,
            max: 31,
        }
    },
    {
        id: 5,
        male: 'Olaf',
        female: 'Tiana',
        point: {
            min: 32,
            max: 35,
        }
    },
    {
        id: 6,
        male: 'Phillip',
        female: 'Cinderella',
        point: {
            min: 36,
            max: 39,
        }
    },
    {
        id: 7,
        male: 'Kristoff',
        female: 'Ariel',
        point: {
            min: 40,
            max: 43,
        }
    },
    {
        id: 8,
        male: 'JohnSmith',
        female: 'Moana',
        point: {
            min: 44,
            max: 47,
        }
    },
    {
        id: 9,
        male: 'FlynnRider',
        female: 'Jasmine',
        point: {
            min: 48,
            max: 51,
        }
    },
    {
        id: 10,
        male: 'Florian',
        female: 'BachTuyet',
        point: {
            min: 52,
            max: 56,
        }
    },
    {
        id: 11,
        male: 'Naveen',
        female: 'Rapunzel',
        point: {
            min: 57,
            max: 60,
        }
    },
    {
        id: 12,
        male: 'Aladdin',
        female: 'Mulan',
        point: {
            min: 61,
            max: 64,
        }
    },
];

