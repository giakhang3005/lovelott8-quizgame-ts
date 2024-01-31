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
            'Quý phái, Tinh tế, Lãng mạn.',
            'Kiên nhẫn và quyết đoán.',
            'Trách nhiệm và tình yêu gia đình.',
            'Hiền hòa, Lạc quan.',
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
            'Trách nhiệm, Kiên nhẫn.',
            'Sẵn sàng thay đổi, Linh hoạt',
            'Sự lạc quan, Kiên nhẫn trong tìm kiếm tình yêu.',
            'Sự hòa nhã , Thấu hiểu đối phương.',
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
            'Tự tin trong quyết định, Làm chủ tình huống.',
            'Độc lập trong suy nghĩ và hành động.',
            'Thân thiện, Hòa nhã.',
            'Quý phái, Tinh tế, Lãng mạn.',
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
            'Nghiêm túc, Trách nhiệm và tôn trọng.',
            'Khí phách trong tư cách lãnh đạo',
            'Mạnh mẽ về cảm xúc và quyết tâm.',
            'Quyết đoán, Kiên nhẫn, Tận tâm.',
            'Dũng cảm, Nhạy bén.',
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
            'Tự tin, Dũng cảm, Yêu sự tự do.',
            'Lạc quan, Tự tin theo đuổi ước mơ.',
            'Sự thích nghi, Sáng tạo.',
            'Phóng khoáng, Khát khao tự do, Phiêu lưu.',
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
            'Kiên trì, Tận tâm, Trách nhiệm.',
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
            'Sâu sắc, Hồn nhiên trong tình yêu.',
            'Nhạy bén, Thấu hiểu tâm trạng đối phương.',
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
            'Tích cực, Tự tin trong mọi quyết định .',
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
            'Lãng mạn, Tự tin, Duyên dáng.',
            'Khao khát tự do, Sự độc lập',
            'Hài hước, Dễ gần và thân thiện.',
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
            'Tự tin, Tự chủ trong mọi quyết định.',
            'Chung thủy, Có trách nhiệm .',
            'Sự chân thật trong tình yêu.',
            'Sự hài hước, Khả năng thấu hiểu, Lắng nghe.',
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
            'Tự tin vào bản thân, Quyến rũ.',
            'Khao khát tự do, Đam mê phiêu lưu ',
            'Yêu đời, Tận hưởng cuộc sống.',
            'Tôn trọng, Thấu hiểu cảm xúc đối phương.',
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
            'Giải quyết tình huống thông minh, Khéo léo.',
            'Lạc quan, Tích cực.',
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
            'Tinh tế, Thấu hiểu và chia sẻ.',
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
            'Nhạy bén, Sáng tạo',
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
            'Thanh tao, Hiền hòa, Dịu dàng',
            'Sống tình cảm, Đáng yêu',
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
            'Mạnh dạn, Dũng cảm và thẳng thắn.',
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
            'Tích cực, Lạc quan',
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
            'Tốt bụng, Đáng yêu',
            'Tò mò, Đam mê khám phá, Sáng tạo',
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
            'Nghĩa hiệp, Tinh thần phiêu lưu',
            'Kiên nhẫn, Sẵn sàng học hỏi',
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
            'Nghị lực, Kiên nhẫn',
            'Có tầm nhìn',
            'Lãng mạn, Khao khát tình yêu đich thực',
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
            'Dễ thương, Hiền hậu',
            'Hòa đồng',
            'Quyến rũ, Tinh tế',
            'Tôn Trọng',
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
            'Kiên nhẫn, Nỗ lực',
            'Tinh thần phiêu lưu, Sẵn sàng khám phá',
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

