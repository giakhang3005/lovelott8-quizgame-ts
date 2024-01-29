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
                content: 'Thể dục hoặc nấu ăn',
                point: 3,
            },
            {
                id: 'b',
                content: 'Ngắm sao và tìm hiểu về thiên văn',
                point: 2,
            },
            {
                id: 'c',
                content: 'Thư giãn và đọc sách',
                point: 4,
            },
            {
                id: 'd',
                content: 'Gặp gỡ bạn bè và gia đình',
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
                content: 'Sự bền vững và ổn định',
                point: 1,
            },
            {
                id: 'b',
                content: 'Sự đổi mới',
                point: 4,
            },
            {
                id: 'c',
                content: 'Tự do và độc lập',
                point: 3,
            },
            {
                id: 'd',
                content: 'Sự cảm thông và tương tác trong gia đình',
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
                content: 'Hành động ngay và tìm giải pháp',
                point: 2,
            },
            {
                id: 'b',
                content: 'Tìm kiếm giải pháp sáng tạo',
                point: 3,
            },
            {
                id: 'c',
                content: 'Giải quyết một cách thoải mái, không gò bó',
                point: 4,
            },
            {
                id: 'd',
                content: 'Dựa vào sự hỗ trợ từ người thân',
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
                content: 'Sách ngôn tình và lãng mạn',
                point: 4,
            },
            {
                id: 'b',
                content: 'Sách khoa học viễn tưởng và phiêu lưu, truyện tranh',
                point: 3,
            },
            {
                id: 'c',
                content: 'Sách phát triển cá nhân và tự truyện',
                point: 2,
            },
            {
                id: 'd',
                content: 'Sách về gia đình, truyền thống, văn hoá',
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
                content: 'Lên kế hoạch cho một vài hoạt động với người thân',
                point: 1,
            },
            {
                id: 'b',
                content: 'Khám phá điều mới và thú vị',
                point: 3,
            },
            {
                id: 'c',
                content: 'Tự do sáng tạo và thư giãn',
                point: 4,
            },
            {
                id: 'd',
                content: 'Dành thời gian ở một mình và nghỉ ngơi',
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
                content: 'Công việc mang tính ổn định',
                point: 3,
            },
            {
                id: 'b',
                content: 'Công việc đầy sáng tạo và thách thức',
                point: 2,
            },
            {
                id: 'c',
                content: 'Công việc linh hoạt và tự do',
                point: 1,
            },
            {
                id: 'd',
                content: 'Công việc gắn liền với giá trị gia đình',
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
                content: 'Quan trọng và định hình cuộc sống',
                point: 4,
            },
            {
                id: 'b',
                content: 'Cơ hội để thay đổi và phát triển',
                point: 3,
            },
            {
                id: 'c',
                content: 'Gìn giữ sự tự do và độc lập',
                point: 2,
            },
            {
                id: 'd',
                content: 'Là nguồn động viên và hỗ trợ quan trọng',
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
                content: 'Nói chuyện và giải quyết vấn đề ngay',
                point: 3,
            },
            {
                id: 'b',
                content: 'Tìm kiếm ý tưởng mới để làm mới mối quan hệ',
                point: 2,
            },
            {
                id: 'c',
                content: 'Cần thời gian một mình để suy nghĩ',
                point: 1,
            },
            {
                id: 'd',
                content: 'Hỏi ý kiến và tìm sự hỗ trợ từ người thân',
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
                content: 'Sự bền vững và đáng tin cậy',
                point: 4,
            },
            {
                id: 'b',
                content: 'Sự sáng tạo và những chuyến phiêu lưu cùng nhau',
                point: 3,
            },
            {
                id: 'c',
                content: 'Tự do và sự độc lập',
                point: 2,
            },
            {
                id: 'd',
                content: 'Sự cảm thông và giúp đỡ nhau',
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
                content: 'Sự ổn định tài chính và thành công trong công việc',
                point: 2,
            },
            {
                id: 'b',
                content: 'Đổi mới và vượt qua thách thức đối với bản thân',
                point: 4,
            },
            {
                id: 'c',
                content: 'Tự do và đạt được sự hài lòng của bản thân',
                point: 3,
            },
            {
                id: 'd',
                content: 'Hạnh phúc và sự hòa thuận trong mối các mối quan hệ',
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
                content: 'Chấp nhận và thích nghi',
                point: 1,
            },
            {
                id: 'b',
                content: 'Tìm kiếm cơ hội mới',
                point: 4,
            },
            {
                id: 'c',
                content: 'Giữ vững lập trường của mình',
                point: 2,
            },
            {
                id: 'd',
                content: 'Cảm thấy thoải mái với sự đổi mới',
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
                content: 'Chơi thể thao, vận động,...',
                point: 2,
            },
            {
                id: 'b',
                content: 'Khám phá những điều mới mẻ, phượt,...',
                point: 3,
            },
            {
                id: 'c',
                content: 'Đọc sách hoặc xem phim',
                point: 4,
            },
            {
                id: 'd',
                content: 'Gặp bạn bè và chia sẻ cảm xúc',
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
                content: 'Tuân theo kế hoạch đã đặt ra trước',
                point: 2,
            },
            {
                id: 'b',
                content: 'Tìm kiếm lời giải độc đáo và sáng tạo',
                point: 4,
            },
            {
                id: 'c',
                content: 'Dựa vào trực giác và cảm nhận cá nhân',
                point: 3,
            },
            {
                id: 'd',
                content: 'Thảo luận và hỏi ý kiến người khác',
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
                content: 'Mối quan hệ quan trọng hơn',
                point: 3,
            },
            {
                id: 'b',
                content: 'Sự cân bằng giữa cả hai',
                point: 2,
            },
            {
                id: 'c',
                content: 'Sự nghiệp quan trọng hơn',
                point: 4,
            },
            {
                id: 'd',
                content: 'Phải điều chỉnh tùy tình huống',
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
                content: 'Ballad buồn và nhạc lãng mạn',
                point: 1,
            },
            {
                id: 'b',
                content: 'Nhạc điện tử và pop',
                point: 3,
            },
            {
                id: 'c',
                content: 'Âm nhạc nhẹ và nhạc jazz',
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
                content: 'Bày tỏ bằng lời nói và hành động',
                point: 3,
            },
            {
                id: 'b',
                content: 'Tạo ra những trải nghiệm độc đáo',
                point: 1,
            },
            {
                id: 'c',
                content: 'Cho đi và không cần nhận lại',
                point: 4,
            },
            {
                id: 'd',
                content: 'Chia sẻ thời gian và có những hoạt động chung',
                point: 2,
            },
        ],
    },

]