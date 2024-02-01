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

export const QuestionsDatas: IQuestion[] = [
    {
        id: 1,
        question: 'Bạn thường chọn hoạt động nào để giải tỏa stress?',
        answers: [
            {
                id: 'a',
                content: 'Nấu ăn',
                point: 3,
            },
            {
                id: 'b',
                content: 'Thể thao',
                point: 2,
            },
            {
                id: 'c',
                content: 'Nghe nhạc',
                point: 4,
            },
            {
                id: 'd',
                content: 'Đi chơi với bạn bè hoặc người thân',
                point: 1,
            },
        ],
    },

    {
        id: 2,
        question: 'Điều gì làm bạn hạnh phúc nhất trong mối quan hệ?',
        answers: [
            {
                id: 'a',
                content: 'Sự tôn trọng',
                point: 1,
            },
            {
                id: 'b',
                content: 'Đồng điệu về cách nói chuyện',
                point: 4,
            },
            {
                id: 'c',
                content: 'Sự cảm thông',
                point: 3,
            },
            {
                id: 'd',
                content: 'Sự tương đồng',
                point: 2,
            },
        ],
    },

    {
        id: 3,
        question: 'Khi đối mặt với khó khăn, bạn thường:',
        answers: [
            {
                id: 'a',
                content: 'Bình tĩnh giải quyết vấn đề',
                point: 2,
            },
            {
                id: 'b',
                content: 'Sáng tạo một cách giải quyết độc lạ',
                point: 3,
            },
            {
                id: 'c',
                content: 'Nhờ sự giúp đỡ từ người thân',
                point: 4,
            },
            {
                id: 'd',
                content: 'Giải quyết vấn đề theo hướng tích cực',
                point: 1,
            },
        ],
    },

    {
        id: 4,
        question: 'Thể loại sách nào bạn thích đọc nhất?',
        answers: [
            {
                id: 'a',
                content: 'Sách ngôn tình',
                point: 4,
            },
            {
                id: 'b',
                content: 'Sách trinh thám',
                point: 3,
            },
            {
                id: 'c',
                content: 'Truyện tranh',
                point: 2,
            },
            {
                id: 'd',
                content: 'Sách khoa học viễn tưởng',
                point: 1,
            },
        ],
    },

    {
        id: 5,
        question: 'Nếu bạn có một ngày tự do, bạn sẽ dành thời gian để làm gì?',
        answers: [
            {
                id: 'a',
                content: 'Đi chơi với bạn bè và người thân',
                point: 1,
            },
            {
                id: 'b',
                content: 'Lên một chuyến du lịch 1 ngày 1 đêm',
                point: 3,
            },
            {
                id: 'c',
                content: 'Xem phim hoặc chơi game',
                point: 4,
            },
            {
                id: 'd',
                content: 'Tổ chức một bữa tiệc nhỏ ',
                point: 2,
            },
        ],
    },

    {
        id: 6,
        question: 'Công việc lý tưởng của bạn là gì?',
        answers: [
            {
                id: 'a',
                content: 'Công việc có thu nhập ổn',
                point: 3,
            },
            {
                id: 'b',
                content: 'Công việc có thể đi được nhiều nơi',
                point: 2,
            },
            {
                id: 'c',
                content: 'Công việc tự do, thoải mái',
                point: 1,
            },
            {
                id: 'd',
                content: 'Công việc có nhiều mối quan hệ',
                point: 4,
            },
        ],
    },

    {
        id: 7,
        question: 'Mối quan hệ gia đình đối với bạn có ý nghĩa như thế nào?',
        answers: [
            {
                id: 'a',
                content: 'Là nơi mang đến cho mình cảm giác an toàn',
                point: 4,
            },
            {
                id: 'b',
                content: 'Là chỗ dựa vững chắc ',
                point: 3,
            },
            {
                id: 'c',
                content: 'Là nơi có thể chia sẻ những cảm xúc',
                point: 2,
            },
            {
                id: 'd',
                content: 'Là nơi giúp mình hoàn thiện về tất cả mọi mặt',
                point: 1,
            },
        ],
    },

    {
        id: 8,
        question: 'Nếu bạn gặp khó khăn trong mối quan hệ, bạn sẽ:',
        answers: [
            {
                id: 'a',
                content: 'Giải quyết theo hướng hòa giải',
                point: 3,
            },
            {
                id: 'b',
                content: 'Nói chuyện trực tiếp ',
                point: 2,
            },
            {
                id: 'c',
                content: 'Nhờ sự tư vấn từ bạn bè và người thân',
                point: 1,
            },
            {
                id: 'd',
                content: 'Nhìn nhận lại kỹ vấn đề',
                point: 4,
            },
        ],
    },
    {
        id: 9,
        question: 'Bạn đánh giá cao nhất đặc điểm nào trong bạn bè?',
        answers: [
            {
                id: 'a',
                content: 'Sự tin cậy',
                point: 4,
            },
            {
                id: 'b',
                content: 'Sự hợp nhau về sở thích và cách nói chuyện',
                point: 3,
            },
            {
                id: 'c',
                content: 'Sự tôn trọng',
                point: 2,
            },
            {
                id: 'd',
                content: 'Sự thấu hiểu',
                point: 1,
            },
        ],
    },

    {
        id: 10,
        question: 'Ý nghĩa của sự thành công đối với bạn là gì?',
        answers: [
            {
                id: 'a',
                content: 'Sự ổn định tài chính',
                point: 2,
            },
            {
                id: 'b',
                content: 'Sự đổi mới',
                point: 4,
            },
            {
                id: 'c',
                content: 'Sự tự do',
                point: 3,
            },
            {
                id: 'd',
                content: 'Nhiều mối quan hệ tốt',
                point: 1,
            },
        ],
    },

    {
        id: 11,
        question: 'Khi đối diện với sự thay đổi, bạn thường:',
        answers: [
            {
                id: 'a',
                content: 'Xem xét sự thay đổi ấy mang tính tích cực hay tiêu cực',
                point: 1,
            },
            {
                id: 'b',
                content: 'Chấp nhận và tìm cách thích nghi',
                point: 4,
            },
            {
                id: 'c',
                content: 'Cân nhắc xem có nên giữ lập trường cũ hay đổi mới',
                point: 2,
            },
            {
                id: 'd',
                content: 'Lắng nghe bản thân và bình tĩnh trước sự thay đổi nếu nó đến quá nhanh',
                point: 3,
            },
        ],
    },

    {
        id: 12,
        question: 'Khi bạn muốn giải tỏa stress, bạn thích:',
        answers: [
            {
                id: 'a',
                content: 'Chơi thể thao',
                point: 2,
            },
            {
                id: 'b',
                content: 'Khám phá những nơi mới mẻ',
                point: 3,
            },
            {
                id: 'c',
                content: 'Xem phim hoặc đọc sách',
                point: 4,
            },
            {
                id: 'd',
                content: 'Đi chơi với bạn bè',
                point: 1,
            },
        ],
    },

    {
        id: 13,
        question: 'Khi bạn đối diện với quyết định quan trọng, bạn thường:',
        answers: [
            {
                id: 'a',
                content: 'Suy nghĩ thật kỹ ',
                point: 2,
            },
            {
                id: 'b',
                content: 'Tìm kiếm hướng giải quyết mới lạ',
                point: 4,
            },
            {
                id: 'c',
                content: 'Tìm hiểu đánh giá kỹ vấn đề đó',
                point: 3,
            },
            {
                id: 'd',
                content: 'Tâm sự với gia đình',
                point: 1,
            },
        ],
    },

    {
        id: 14,
        question: 'Đối với bạn thì các mối quan hệ hay sự nghiệp quan trọng hơn?',
        answers: [
            {
                id: 'a',
                content: 'Cân bằng cả 2',
                point: 3,
            },
            {
                id: 'b',
                content: 'Sự nghiệp',
                point: 2,
            },
            {
                id: 'c',
                content: 'Tùy vào tình huống mà đưa ra quyết định',
                point: 4,
            },
            {
                id: 'd',
                content: 'Mối quan hệ',
                point: 1,
            },
        ],
    },

    {
        id: 15,
        question: 'Bạn thích thể loại âm nhạc nào nhất?',
        answers: [
            {
                id: 'a',
                content: 'K-pop',
                point: 1,
            },
            {
                id: 'b',
                content: 'Nhạc trẻ',
                point: 3,
            },
            {
                id: 'c',
                content: 'Ballad',
                point: 4,
            },
            {
                id: 'd',
                content: 'Dân ca',
                point: 2,
            },
        ],
    },

    {
        id: 16,
        question: 'Bạn làm thế nào để thể hiện tình cảm của mình?',
        answers: [
            {
                id: 'a',
                content: 'Dành thời gian cho người mình yêu quý',
                point: 3,
            },
            {
                id: 'b',
                content: 'Bằng lời nói',
                point: 1,
            },
            {
                id: 'c',
                content: 'Cử chỉ hành động',
                point: 4,
            },
            {
                id: 'd',
                content: 'Bằng những món quà',
                point: 2,
            },
        ],
    },

]