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
    behavior: string,
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
        name: 'Hoàng tử Charming',
        img: '',
        isMale: true,
        behavior: 'Lịch lãm, lịch thiệp và lãng mạn',
        match: [
            'Tiana', 'Cinderella', 'Ariel', 'Jasmine', 'Rapunzel', 'Mulan', 'Elsa', 'Belle', 'Aurora'
        ],
        anti: [
            'BachTuyet', 'Moana'
        ],
    },
    {
        id: 'Adam',
        name: 'Hoàng tử Adam - Beast',
        img: '',
        isMale: true,
        behavior: 'Ban đầu lạnh lùng và tự ti, nhưng sau đó trở nên trọng thùy và nhân từ',
        match: [
            'Merida', 'Belle', 'Cinderella', 'Moana', 'Bạch Tuyết', 'Mulan', 'Elsa', 'Aurora'
        ],
        anti: [
            'Jasmine', 'Ariel'
        ],
    },
    {
        id: 'Eric',
        name: 'Hoàng tử Eric',
        img: '',
        isMale: true,
        behavior: 'Can đảm, tận tâm và lãng mạn',
        match: [
            'Merida', 'Tiana', 'Ariel', 'Jasmine', 'Rapunzel', 'Elsa', 'Belle', 'Aurora'
        ],
        anti: [
            'BachTuyet', 'Moana'
        ],
    },
    {
        id: 'LiShang',
        name: 'Hoàng tử Li Shang',
        img: '',
        isMale: true,
        behavior: 'Nghiêm túc, trách nhiệm và tôn trọng',
        match: [
            'Merida', 'Tiana', 'Cinderella', 'Moana', 'BachTuyet', 'Mulan', 'Belle', 'Aurora'
        ],
        anti: [
            'Ariel', 'Jasmine'
        ],
    },
    {
        id: 'Ali',
        name: 'Hoàng tử Ali',
        img: '',
        isMale: true,
        behavior: 'Tự tin, dũng cảm và có tình yêu với sự tự do',
        match: [
            'Merida', 'Tiana', 'Cinderella', 'Ariel', 'Jasmine', 'Rapunzel', 'Elsa', 'Aurora'
        ],
        anti: [
            'Mulan', 'BachTuyet'
        ],
    },
    {
        id: 'Phillip',
        name: 'Hoàng tử Phillip',
        img: '',
        isMale: true,
        behavior: 'Can đảm và lãng mạn, sẵn sàng đối mặt với nguy hiểm',
        match: [
            'Aurora', 'Merida', 'Tiana', 'Ariel', 'Moana', 'BachTuyet', 'Belle'
        ],
        anti: [
            'Elsa', 'Rapunzel', 'Jasmine'
        ],
    },
    {
        id: 'Kristoff',
        name: 'Hoàng tử Kristoff',
        img: '',
        isMale: true,
        behavior: 'Tự lập, trung thực, tốt bụng ngoài ra còn rất yêu động vật',
        match: [
            'Tiana', 'Cinderella', 'Ariel', 'Merida', 'Moana', 'Jasmine', 'Rapunzel', 'Elsa', 'Aurora'
        ],
        anti: [
            'Belle', 'Mulan'
        ],
    },
    {
        id: 'JohnSmith',
        name: 'Hoàng tử John Smith',
        img: '',
        isMale: true,
        behavior: 'Sự tò mò, sẵn sàng đón nhận sự đa dạng và hiểu biết văn hóa.',
        match: [
            'Merida', 'Cinderella', 'Moana', 'Jasmine', 'BachTuyet', 'Mulan'
        ],
        anti: [
            'Aurora', 'Elsa', 'Ariel'
        ],
    },
    {
        id: 'FlynnRider',
        name: 'Hoàng tử Flynn Rider',
        img: '',
        isMale: true,
        behavior: 'Hài hước, mạo hiểm và thấu hiểu.',
        match: [
            'Tiana', 'Ariel', 'Moana', 'Jasmine', 'BachTuyet', 'Rapunzel', 'Elsa', 'Aurora'
        ],
        anti: [
            'Merida', 'Belle'
        ],
    },
    {
        id: 'Florian',
        name: 'Hoàng tử Florian',
        img: '',
        isMale: true,
        behavior: 'Hát hay, tốt bụng và nhân từ',
        match: [
            'Merida', 'Cinderella', 'Moana', 'Jasmine', 'BachTuyet', 'Ariel', 'Mulan', 'Belle'
        ],
        anti: [
            'Aurora', 'Tiana'
        ],
    },
    {
        id: 'Naveen',
        name: 'Hoàng tử Naveen',
        img: '',
        isMale: true,
        behavior: 'Sôi nổi, yêu đời và hòa đồng',
        match: [
            'Tiana', 'Ariel', 'Jasmine', 'BachTuyet', 'Rapunzel', 'Mulan', 'Elsa', 'Aurora'
        ],
        anti: [
            'Merida', 'Cinderella'
        ],
    },
    {
        id: 'Aladdin',
        name: 'Hoàng tử Aladdin',
        img: '',
        isMale: true,
        behavior: 'Năng động, thông minh và có trái tim lương thiện',
        match: [
            'Merida', 'Cinderella', 'Moana', 'Jasmine', 'BachTuyet', 'Rapunzel', 'Mulan', 'Elsa', 'Belle'
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
        behavior: 'Chu đáo, sâu sắc và có trách nhiệm.',
        match: [
            'Ali', 'Phillip', 'Kristoff', 'FlynnRider', 'Naveen', 'Aladdin', 'Charming', 'Adam', 'Eric'
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
        behavior: 'Thân thiện và hào phóng, sở hữu cách nói chuyện nhẹ nhàng.',
        match: ['LiShang', 'Adam', 'Phillip', 'JohnSmith', 'Florian', 'Aladdin', 'Charming', 'Eric'],
        anti: ['FlynnRider', 'Kristoff']
    },
    {
        id: 'Aurora',
        name: 'Aurora',
        img: '',
        isMale: false,
        behavior: 'Có phẩm chất thanh tao, cách sống tình cảm, đáng yêu.',
        match: ['LiShang', 'Ali', 'Phillip', 'Kristoff', 'Naveen', 'Charming', 'Adam', 'Eric'],
        anti: ['Florian', 'JohnSmith']
    },
    {
        id: 'Merida',
        name: 'Merida',
        img: '',
        isMale: false,
        behavior: 'Mạnh dạn, không biết sợ hãi, dũng cảm và thẳng thắn.',
        match: ['LiShang', 'Ali', 'Phillip', 'JohnSmith', 'Aladdin', 'Adam', 'Eric', 'Florian'],
        anti: ['Kristoff', 'FlynnRider'],
    },
    {
        id: 'Tiana',
        name: 'Tiana',
        img: '',
        isMale: false,
        behavior: 'Vô cùng kiên quyết và cứng đầu, có tầm nhìn rõ ràng về tương lai của mình.',
        match: ['LiShang', 'Ali', 'Phillip', 'Kristoff', 'FlynnRider', 'Naveen', 'Charming', 'Eric'],
        anti: ['Aladdin', 'Florian'],
    },
    {
        id: 'Cinderella',
        name: 'Cinderella',
        img: '',
        isMale: false,
        behavior: 'Đầy nghị lực, bất chấp mọi tình huống tìm ra cách để làm cho mọi thứ trở nên tốt đẹp hơn.',
        match: ['Eric', 'LiShang', 'Ali', 'Kristoff', 'JohnSmith', 'Florian', 'Adam', 'Charming'],
        anti: ['Naveen', 'FlynnRider'],
    },
    {
        id: 'Ariel',
        name: 'Nàng tiên cá',
        img: '',
        isMale: false,
        behavior: 'Luôn tỏ ra một vẻ ngoài cứng rắn, nhưng sâu bên trong họ lại là một con người tốt bụng và rất đáng yêu.',
        match: ['Ali', 'Phillip', 'Kristoff', 'LiShang', 'JohnSmith', 'FlynnRider', 'Naveen', 'Charming', 'Eric'],
        anti: ['Adam', 'Aladdin']
    },
    {
        id: 'Moana',
        name: 'Moana',
        img: '',
        isMale: false,
        behavior: 'Chịu trách nhiệm về cuộc sống của mình, rất mạnh mẽ, sẵn sàng bảo vệ người khác.',
        match: ['LiShang', 'Phillip', 'JohnSmith', 'FlynnRider', 'Florian', 'Aladdin'],
        anti: ['Eric', 'Charming', 'Kristoff']
    },
    {
        id: 'Jasmine',
        name: 'Jasmine',
        img: '',
        isMale: false,
        behavior: 'Chăm chỉ nhất, luôn đặt ra những mục tiêu cao cho bản thân và không ngừng nỗ lực để đạt được chúng một cách hoàn hảo',
        match: ['Ali', 'Kristoff', 'JohnSmith', 'FlynnRider', 'Florian', 'Naveen', 'Charming', 'Eric', 'Aladdin'],
        anti: ['LiShang', 'Adam']
    },
    {
        id: 'BachTuyet',
        name: 'Bạch Tuyết',
        img: '',
        isMale: false,
        behavior: 'Dễ thương và dễ dàng kết bạn có một nét quyến rũ thu hút mọi ánh nhìn từ người khác.',
        match: ['LiShang', 'Phillip', 'JohnSmith', 'FlynnRider', 'Florian', 'Kristoff', 'Aladdin', 'Adam'],
        anti: ['Eric', 'Ali']
    },
    {
        id: 'Rapunzel',
        name: 'Công chúa tóc mây',
        img: '',
        isMale: false,
        behavior: 'Quan tâm đến lợi ích của mình làm bất cứ điều gì để đạt được những gì mình muốn.',
        match: ['Ali', 'Kristoff', 'FlynnRider', 'Florian', 'Naveen', 'Aladdin', 'Charming', 'Eric'],
        anti: ['LiShang', 'Phillip']
    },
    {
        id: 'Mulan',
        name: 'Hoa Mộc Lan',
        img: '',
        isMale: false,
        behavior: 'Yêu thích mạo hiểm, táo bạo và biết hi sinh.',
        match: ['LiShang', 'Phillip', 'JohnSmith', 'FlynnRider', 'Florian', 'Naveen', 'Aladdin', 'Charming', 'Adam'],
        anti: ['Ali', 'Kristoff']
    }
];


// All characters rule set
export const charactersRuleSet: ICharacterRuleSet[] = [
    {
        id: 1,
        male: 'Charming',
        female: 'Elsa',
        point: {
            min: 97,
            max: 103,
        }
    },
    {
        id: 2,
        male: 'Adam',
        female: 'Belle',
        point: {
            min: 104,
            max: 108,
        }
    },
    {
        id: 3,
        male: 'Eric',
        female: 'Aurora',
        point: {
            min: 48,
            max: 54,
        }
    },
    {
        id: 4,
        male: 'LiShang',
        female: 'Merida',
        point: {
            min: 62,
            max: 68,
        }
    },
    {
        id: 5,
        male: 'Ali',
        female: 'Tiana',
        point: {
            min: 41,
            max: 47,
        }
    },
    {
        id: 6,
        male: 'Phillip',
        female: 'Cinderella',
        point: {
            min: 69,
            max: 75,
        }
    },
    {
        id: 7,
        male: 'Kristoff',
        female: 'Ariel',
        point: {
            min: 76,
            max: 82,
        }
    },
    {
        id: 8,
        male: 'JohnSmith',
        female: 'Moana',
        point: {
            min: 55,
            max: 61,
        }
    },
    {
        id: 9,
        male: 'FlynnRider',
        female: 'Jasmine',
        point: {
            min: 27,
            max: 33,
        }
    },
    {
        id: 10,
        male: 'Florian',
        female: 'BachTuyet',
        point: {
            min: 83,
            max: 89,
        }
    },
    {
        id: 11,
        male: 'Naveen',
        female: 'Rapunzel',
        point: {
            min: 34,
            max: 40,
        }
    },
    {
        id: 12,
        male: 'Aladdin',
        female: 'Mulan',
        point: {
            min: 90,
            max: 96,
        }
    },
];

