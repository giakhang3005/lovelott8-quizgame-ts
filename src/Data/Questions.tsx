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
        question: 'Trong mối quan hệ nào đó, bạn cảm thấy quan trọng nhất là:',
        answers: [
            {
                id: 'a',
                content: 'Sự chắc chắn và ổn định',
                point: 3,
            },
            {
                id: 'b',
                content: 'Sự đổi mới và thú vị',
                point: 1,
            },
            {
                id: 'c',
                content: 'Sự tự do và độc lập',
                point: 2,
            },
            {
                id: 'd',
                content: 'Sự hiểu biết và tương tác với nhau',
                point: 4,
            },
        ],
    },

    {
        id: 13,
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
        id: 14,
        question: 'Khi đối mặt với một vấn đề khó khăn, bạn thường:',
        answers: [
            {
                id: 'a',
                content: 'Tìm kiếm giải pháp ngay',
                point: 4,
            },
            {
                id: 'b',
                content: 'Suy nghĩ cách giải quyết vấn đề theo hướng sáng tạo',
                point: 3,
            },
            {
                id: 'c',
                content: 'Cần thời gian để suy nghĩ và đưa ra quyết định',
                point: 2,
            },
            {
                id: 'd',
                content: 'Hỏi ý kiến và tìm sự hỗ trợ từ người thân, bạn bè',
                point: 1,
            },
        ],
    },

    {
        id: 15,
        question: 'Nếu bạn có một ngày tự do, bạn muốn:',
        answers: [
            {
                id: 'a',
                content: 'Dành thời gian với gia đình',
                point: 1,
            },
            {
                id: 'b',
                content: 'Khám phá những địa điểm mới và thú vị',
                point: 3,
            },
            {
                id: 'c',
                content: 'Tự do sáng tạo, ca hát và thư giãn',
                point: 4,
            },
            {
                id: 'd',
                content: 'Dành thời gian nghỉ ngơi',
                point: 2,
            },
        ],
    },

    {
        id: 16,
        question: 'Trong mối quan hệ nào đó, bạn đặt trọng tâm vào:',
        answers: [
            {
                id: 'a',
                content: 'Sự bền vững và ổn định',
                point: 3,
            },
            {
                id: 'b',
                content: 'Sự đổi mới và thách thức',
                point: 1,
            },
            {
                id: 'c',
                content: 'Sự tự do và độc lập',
                point: 4,
            },
            {
                id: 'd',
                content: 'Sự hiểu biết và tương tác lẫn nhau',
                point: 2,
            },
        ],
    },

    {
        id: 17,
        question: 'Bạn thích đọc những tác phẩm nghệ thuật nào nhất?',
        answers: [
            {
                id: 'a',
                content: 'Tác phẩm cổ điển và tác phẩm nghệ thuật truyền thống',
                point: 4,
            },
            {
                id: 'b',
                content: 'Tác phẩm hiện đại và phá cách',
                point: 3,
            },
            {
                id: 'c',
                content: 'Tác phẩm tư duy và trinh thám',
                point: 1,
            },
            {
                id: 'd',
                content: 'Tác phẩm thể hiện tình cảm và tâm lý',
                point: 2,
            },
        ],
    },

    {
        id: 18,
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
        id: 19,
        question: 'Trong công việc nhóm, bạn thích đảm nhận vai trò nào?',
        answers: [
            {
                id: 'a',
                content: 'Lãnh đạo và tổ chức',
                point: 1,
            },
            {
                id: 'b',
                content: 'Đóng góp ý tưởng mới và sáng tạo',
                point: 4,
            },
            {
                id: 'c',
                content: 'Hoạch định chiến lược và kế hoạch',
                point: 3,
            },
            {
                id: 'd',
                content: 'Hỗ trợ và thúc đẩy sự đồng thuận',
                point: 2,
            },
        ],
    },

    {
        id: 20,
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
        id: 21,
        question: 'Bạn mong muốn gì trên con đường sự nghiệp của mình?',
        answers: [
            {
                id: 'a',
                content: 'Sự ổn định và độ chắc chắn',
                point: 4,
            },
            {
                id: 'b',
                content: 'Sự đổi mới và thách thức',
                point: 3,
            },
            {
                id: 'c',
                content: 'Tự do và linh hoạt',
                point: 2,
            },
            {
                id: 'd',
                content: 'Môi trường làm việc thân thiện',
                point: 1,
            },
        ],
    },

    {
        id: 22,
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
        id: 23,
        question: 'Khi gặp khó khăn, bạn muốn nhận sự giúp đỡ từ:',
        answers: [
            {
                id: 'a',
                content: 'Gia đình và người thân',
                point: 2,
            },
            {
                id: 'b',
                content: 'Đồng nghiệp và bạn bè',
                point: 4,
            },
            {
                id: 'c',
                content: 'Tự giải quyết khó khăn',
                point: 3,
            },
            {
                id: 'd',
                content: 'Chuyên gia và người có kinh nghiệm',
                point: 1,
            },
        ],
    },

    {
        id: 24,
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

    {
        id: 25,
        question: 'Bạn thích ghé thăm khu giải trí nào nhất?',
        answers: [
            {
                id: 'a',
                content: 'Khu vui chơi dành cho gia đình, nhẹ nhàng',
                point: 4,
            },
            {
                id: 'b',
                content: 'Công viên giải trí hiện đại',
                point: 3,
            },
            {
                id: 'c',
                content: 'Khu vực thiên về thiên nhiên hay những nơi có không khí trong lành',
                point: 2,
            },
            {
                id: 'd',
                content: 'Khu vui chơi có những trò chơi cảm giác mạnh hay có độ thử thách cao',
                point: 1,
            },
        ],
    },

    {
        id: 26,
        question: 'Bạn làm thế nào để giữ sự cân bằng giữa công việc và cuộc sống cá nhân?',
        answers: [
            {
                id: 'a',
                content: 'Đặt ưu tiên cho gia đình và thời gian tự do',
                point: 2,
            },
            {
                id: 'b',
                content: 'Chấp nhận thách thức công việc và sự đổi mới',
                point: 4,
            },
            {
                id: 'c',
                content: 'Tìm kiếm sự tự do và linh hoạt trong công việc',
                point: 1,
            },
            {
                id: 'd',
                content: 'Điều chỉnh theo yêu cầu của từng tình huống',
                point: 3,
            },
        ],
    },

    {
        id: 27,
        question: 'Đứng trước quyết định lớn, bạn thường lựa chọn:',
        answers: [
            {
                id: 'a',
                content: 'Sự ổn định và an toàn',
                point: 3,
            },
            {
                id: 'b',
                content: 'Sự sáng tạo và đột phá',
                point: 1,
            },
            {
                id: 'c',
                content: 'Theo cảm nhận, trực giác bản thân',
                point: 2,
            },
            {
                id: 'd',
                content: 'Sự hài lòng và đồng thuận từ mọi người',
                point: 4,
            },
        ],
    },

]