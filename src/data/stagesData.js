// src/data/stagesData.js

const imgBase = "https://images.unsplash.com/photo-"; 

export const stagesData = [
  {
    id: 1,
    title: "Chặng 1: Bản chất thời kỳ quá độ",
    shortTitle: "Bản chất",
    subtitle: "Tính chất & Thông điệp cốt lõi",
    icon: "🚩", 
    shortDesc: "Thời kỳ cải biến xã hội sâu sắc nhất, phức tạp, lâu dài, khó khăn và gian khổ.",
    // Nội dung tóm tắt hiển thị ở thẻ nhỏ bên ngoài
    bullets: [
      "Cải biến sâu sắc từ xã hội cũ sang xã hội mới.",
      "Xóa bỏ giai cấp bóc lột, thay đổi nếp sống cũ.",
      "Biến nước nông nghiệp lạc hậu thành nước văn hóa cao.",
    ],
    // NỘI DUNG CHI TIẾT (FULL PDF)
    sections: [
      {
        heading: "1. Nội dung cốt lõi",
        points: [
          "Thời kỳ quá độ là thời kỳ cải biến xã hội sâu sắc nhất.",
          "Đây là một quá trình phức tạp, lâu dài.",
          "Là giai đoạn khó khăn, gian khổ.",
          "Là quá trình chuyển từ xã hội cũ sang xã hội mới – xã hội xã hội chủ nghĩa.",
        ],
      },
      {
        heading: "2. Mục tiêu cụ thể",
        points: [
          "Xây dựng một xã hội chưa từng có trong lịch sử dân tộc Việt Nam.",
          "Phải xóa bỏ giai cấp bóc lột.",
          "Thay đổi tận gốc nếp sống, thói quen, tư tưởng cũ tồn tại hàng nghìn năm.",
          "Biến một nước nông nghiệp lạc hậu, dốt nát, nghèo khổ thành một nước có văn hóa cao, đời sống nhân dân ấm no, hạnh phúc.",
        ],
      },
      {
        heading: "3. Thông điệp trọng tâm",
        points: [
          "Tiến lên chủ nghĩa xã hội không thể nóng vội, không thể một sớm một chiều.",
          "Phải làm dần dần, vững chắc.",
        ],
      }
    ],
    theme: {
      primary: "#d32f2f", 
      secondary: "#ff6659",
    },
    image: `${imgBase}1535024966967-7681cdf3f169?auto=format&fit=crop&w=800&q=80`,
    quote: "Tiến lên chủ nghĩa xã hội không thể nóng vội, không thể một sớm một chiều, mà phải làm dần dần, vững chắc.",
  },
  {
    id: 2,
    title: "Chặng 2: Đặc điểm riêng của Việt Nam",
    shortTitle: "Đặc điểm",
    subtitle: "Bỏ qua chế độ TBCN",
    icon: "⚖️",
    shortDesc: "Đặc điểm lớn nhất là từ một nước nông nghiệp lạc hậu tiến thẳng lên CNXH, không trải qua giai đoạn TBCN.",
    bullets: [
      "Đặc điểm lớn nhất: Bỏ qua chế độ tư bản chủ nghĩa.",
      "Đan xen giữa cái cũ và cái mới.",
      "Vừa cải tạo, vừa xây dựng, vừa đấu tranh.",
    ],
    sections: [
      {
        heading: "1. Đặc điểm lớn nhất",
        points: [
          "Từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội.",
          "Không trải qua giai đoạn phát triển tư bản chủ nghĩa.",
        ],
      },
      {
        heading: "2. Tính chất đan xen",
        points: [
          "Trong thời kỳ quá độ tồn tại đan xen giữa yếu tố xã hội cũ và yếu tố xã hội mới.",
          "Có lúc yếu tố cũ còn mạnh, có thể lấn át yếu tố mới.",
        ],
      },
      {
        heading: "3. Tính chất quá trình",
        points: [
          "Đây là một quá trình: Vừa cải tạo, vừa xây dựng, vừa đấu tranh.",
        ],
      },
      {
        heading: "4. Ý nghĩa phương pháp luận",
        points: [
          "Chính đặc điểm này quy định nhiệm vụ đặc thù.",
          "Đòi hỏi con đường đi sáng tạo, phù hợp Việt Nam.",
          "Không máy móc sao chép mô hình nước khác.",
        ],
      }
    ],
    theme: {
      primary: "#f57c00", 
      secondary: "#ffb74d",
    },
    image: `${imgBase}1580191947425-c6913d379c35?auto=format&fit=crop&w=800&q=80`,
    quote: "Đặc điểm lớn nhất của ta là từ một nước nông nghiệp lạc hậu tiến thẳng lên chủ nghĩa xã hội không phải kinh qua giai đoạn phát triển tư bản chủ nghĩa.",
  },
  {
    id: 3,
    title: "Chặng 3: Nhiệm vụ trong thời kỳ quá độ",
    shortTitle: "Nhiệm vụ",
    subtitle: "Xây dựng xã hội mới trên mọi lĩnh vực",
    icon: "🏗️",
    shortDesc: "Thực hiện đồng bộ 4 nhiệm vụ lớn về Chính trị, Kinh tế, Văn hóa và Xã hội.",
    bullets: [
      "Chính trị: Xây dựng chế độ dân chủ.",
      "Kinh tế: Cải tạo cũ, xây dựng mới (chủ chốt).",
      "Văn hóa: Xóa bỏ nô dịch, xây nền văn hóa mới.",
      "Xã hội: Cải biến nếp sống, công bằng văn minh.",
    ],
    sections: [
      {
        heading: "1. Nhiệm vụ Chính trị",
        points: [
          "Xây dựng chế độ dân chủ xã hội chủ nghĩa.",
          "Chống chủ nghĩa cá nhân, quan liêu, tham nhũng.",
          "Bồi dưỡng cho nhân dân: Trí thức, năng lực làm chủ, quyền làm chủ xã hội.",
        ],
      },
      {
        heading: "2. Nhiệm vụ Kinh tế",
        points: [
          "Cải tạo nền kinh tế cũ.",
          "Xây dựng nền kinh tế mới: Công nghiệp hiện đại, Nông nghiệp hiện đại.",
          "Xây dựng cơ sở vật chất – kỹ thuật của CNXH.",
          "Nguyên tắc: Xây dựng là nhiệm vụ chủ chốt, lâu dài; gắn với quyền làm chủ của nhân dân.",
        ],
      },
      {
        heading: "3. Nhiệm vụ Văn hóa",
        points: [
          "Xóa bỏ: Di tích văn hóa thuộc địa, ảnh hưởng nô dịch của văn hóa đế quốc.",
          "Phát triển: Truyền thống văn hóa dân tộc và tinh hoa văn hóa nhân loại.",
          "Xây dựng nền văn hóa: Dân tộc – Khoa học – Đại chúng.",
        ],
      },
      {
        heading: "4. Nhiệm vụ Xã hội",
        points: [
          "Cải biến triệt để: Quan hệ xã hội cũ, nếp sống, lối sống cũ.",
          "Xây dựng xã hội: Dân chủ, Công bằng, Văn minh.",
          "Kết hợp hài hòa: Lợi ích cá nhân chính đáng – Lợi ích tập thể – Lợi ích xã hội.",
        ],
      },
    ],
    theme: {
      primary: "#0288d1", 
      secondary: "#5eb8ff",
    },
    image: `${imgBase}1504917595217-d4dc5ebe5120?auto=format&fit=crop&w=800&q=80`,
    quote: "Nhiệm vụ quan trọng nhất là xây dựng nền tảng vật chất và kỹ thuật của chủ nghĩa xã hội.",
  },
  {
    id: 4,
    title: "Chặng 4: Nguyên tắc xây dựng CNXH",
    shortTitle: "Nguyên tắc",
    subtitle: "Kim chỉ nam hành động",
    icon: "🧭",
    shortDesc: "4 nguyên tắc cốt lõi: Kiên định Mác-Lênin, Độc lập dân tộc, Đoàn kết quốc tế và Xây đi đôi với Chống.",
    bullets: [
      "Kiên định chủ nghĩa Mác – Lênin.",
      "Giữ vững độc lập dân tộc.",
      "Đoàn kết và học tập quốc tế.",
      "Xây đi đôi với chống.",
    ],
    sections: [
      {
        heading: "NT1: Kiên định Mác – Lênin",
        points: [
          "Mọi tư tưởng và hành động phải dựa trên nền tảng Mác – Lênin.",
          "Vận dụng linh hoạt, sáng tạo, phù hợp hoàn cảnh Việt Nam.",
        ],
      },
      {
        heading: "NT2: Giữ vững độc lập dân tộc",
        points: [
          "Độc lập – tự do là mục tiêu tối thượng.",
          "Là điều kiện tiên quyết để xây dựng CNXH.",
          "CNXH là cơ sở bảo đảm vững chắc cho độc lập dân tộc.",
        ],
      },
      {
        heading: "NT3: Đoàn kết & Học tập quốc tế",
        points: [
          "Cách mạng Việt Nam là một bộ phận của phong trào cách mạng thế giới.",
          "Học tập kinh nghiệm quốc tế: Không rập khuôn, không máy móc, phải sáng tạo.",
        ],
      },
      {
        heading: "NT4: Xây đi đôi với Chống",
        points: [
          "Xây dựng xã hội mới phải song song với chống thế lực thù địch.",
          "Chống tư tưởng lạc hậu, chống chủ nghĩa cá nhân.",
          "Mỗi người phải thắng 'kẻ địch bên trong chính mình', rèn luyện đạo đức cách mạng.",
        ],
      },
    ],
    theme: {
      primary: "#388e3c", 
      secondary: "#66bb6a",
    },
    image: `${imgBase}1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=800&q=80`,
    quote: "Muốn xây dựng chủ nghĩa xã hội, trước hết cần có những con người xã hội chủ nghĩa.",
  },
  {
    id: 5,
    title: "Chặng 5: Kết luận - Giá trị và Ý nghĩa",
    shortTitle: "Ý nghĩa",
    subtitle: "Giá trị tư tưởng & Thực tiễn",
    icon: "⭐",
    isDestination: true,
    shortDesc: "Hệ thống quan điểm toàn diện, khoa học, là kim chỉ nam cho công cuộc đổi mới.",
    bullets: [
      "Khẳng định con đường đi lên CNXH là tất yếu.",
      "Là kim chỉ nam cho công cuộc đổi mới.",
      "Giá trị bền vững: Vì con người, do con người.",
    ],
    sections: [
      {
        heading: "1. Khái quát chung",
        points: [
          "Tư tưởng Hồ Chí Minh là hệ thống quan điểm toàn diện, khoa học, sâu sắc.",
          "Phù hợp với điều kiện lịch sử – xã hội của Việt Nam.",
          "Đây là quá trình lâu dài, gian khổ, phức tạp, đòi hỏi kiên trì, sáng tạo và bản lĩnh chính trị vững vàng.",
        ],
      },
      {
        heading: "2. Ý nghĩa lý luận",
        points: [
          "Khẳng định con đường đi lên CNXH ở Việt Nam là tất yếu lịch sử.",
          "Chứng minh Việt Nam có thể tiến thẳng lên CNXH mà không cần trải qua giai đoạn tư bản chủ nghĩa.",
          "Vận dụng sáng tạo chủ nghĩa Mác – Lênin, phát triển lý luận CNXH phù hợp với thực tiễn Việt Nam.",
        ],
      },
      {
        heading: "3. Ý nghĩa thực tiễn",
        points: [
          "Là kim chỉ nam cho đường lối cách mạng và công cuộc xây dựng, bảo vệ Tổ quốc.",
          "Định hướng xây dựng nhà nước dân chủ, phát triển kinh tế – văn hóa – xã hội.",
          "Phát huy quyền làm chủ của nhân dân.",
          "Giúp nhận diện và đấu tranh với chủ nghĩa cá nhân và các thế lực chống phá.",
        ],
      },
      {
        heading: "4. Giá trị bền vững",
        points: [
          "Tư tưởng không chỉ có giá trị trong quá khứ mà vẫn còn nguyên giá trị hiện nay.",
          "Là nền tảng tư tưởng cho sự nghiệp đổi mới.",
          "Hướng tới mục tiêu: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh.",
        ],
      },
      {
        heading: "5. Thông điệp kết thúc",
        points: [
          "Xây dựng chủ nghĩa xã hội ở Việt Nam là một sự nghiệp vì con người, do con người, và vì hạnh phúc của toàn dân tộc.",
        ],
      }
    ],
    theme: {
      primary: "#c2185b",
      secondary: "#f48fb1",
    },
    image: `${imgBase}1532375810709-75b1da00537c?auto=format&fit=crop&w=800&q=80`,
    quote: "Xây dựng chủ nghĩa xã hội ở Việt Nam là một sự nghiệp vì con người, do con người, và vì hạnh phúc của toàn dân tộc.",
  },
];