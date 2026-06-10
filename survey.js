/* ════════════════════════════════════════════════════════════
   ╔═══════════════════════════════════════════════════════╗
   ║               SURVEY CONFIG — EDIT HERE               ║
   ║  All questions, options and event variables live here ║
   ╚═══════════════════════════════════════════════════════╝
════════════════════════════════════════════════════════════ */
const CONFIG = {
  /* ── Event variables ─────────────────────────────── */
  event: {
    city: "Hanoi",
    edition: "11th",
    seriesName: "Techcombank Hanoi International Marathon",
    titleSponsor: "Techcombank",
    sponsorBrand: "New Balance", // For J1 shirt question
    foundations: [
      // For J2 charity awareness
      "Operation Smile Vietnam",
      "Green Vietnam Fund",
      "SOS Children's Villages",
    ],
    // Aided recall sponsors (include 2 foil/non-sponsors at end)
    aidedBrands: [
      "Techcombank",
      "New Balance",
      "Garmin",
      "GU Energy",
      "Pocari Sweat",
      "VTV",
      "Grab",
      "Vinamilk",
      "Foil Brand A",
      "Foil Brand B", // ← non-sponsors (foils)
    ],
    charityChannels: [
      // For J3 channel matrix
      "Facebook / Instagram",
      "Friends / family",
      "News / media",
      "Company / employer",
      "Through the race",
      "Other",
    ],
  },

  /* ── Sections ─────────────────────────────────────── */
  sections: [
    /* ─── INTRO ─────────────────────────────── */
    {
      id: "intro",
      badge: "INTRODUCTION · GIỚI THIỆU",
      title: { en: "Welcome", vi: "Chào mừng" },
      intro:
        "Thank you for participating in the {edition} {seriesName}. Your feedback helps plan next year's event. This survey takes about 12 minutes. Complete it to enter the draw for 1 of 10 complimentary entries! / Cảm ơn bạn đã tham gia. Khảo sát mất khoảng 12 phút.",
      questions: [
        {
          id: "P0",
          type: "text",
          required: true,
          label: {
            en: "Registration ID — please do not edit this field",
            vi: "Mã đăng ký — Vui lòng KHÔNG điều chỉnh",
          },
          placeholder: "Auto-filled from registration",
          note: "Links your entry to the prize draw. / Dùng để rút thăm trúng thưởng.",
        },
      ],
    },

    /* ─── A: Overall ─────────────────────────── */
    {
      id: "A",
      badge: "SECTION A · PHẦN A",
      title: { en: "Overall Experience", vi: "Trải nghiệm tổng thể" },
      questions: [
        {
          id: "A1",
          type: "scale5",
          required: true,
          label: {
            en: "Overall, how satisfied are you with the {edition} {seriesName}?",
            vi: "Nhìn chung, bạn đánh giá trải nghiệm tại {seriesName} như thế nào?",
          },
          scaleLabels: {
            en: ["Very dissatisfied", "Very satisfied"],
            vi: ["Rất không hài lòng", "Rất hài lòng"],
          },
        },
        {
          id: "A2",
          type: "nps",
          required: true,
          label: {
            en: "How likely are you to recommend the {seriesName} to a friend or colleague?",
            vi: "Bạn có sẵn lòng giới thiệu giải chạy cho bạn bè và đồng nghiệp không?",
          },
        },
        {
          id: "A3",
          type: "scale5",
          required: false,
          label: {
            en: "Please rate your overall satisfaction with the Customer Service experience.",
            vi: "Đánh giá mức độ hài lòng với Dịch vụ chăm sóc khách hàng.",
          },
        },
        {
          id: "A4",
          type: "textarea",
          required: false,
          label: {
            en: "Do you have any feedback regarding the Customer Service experience?",
            vi: "Bạn có góp ý gì đối với Dịch vụ chăm sóc khách hàng không?",
          },
          placeholder: "Your comments… / Góp ý của bạn…",
        },
        {
          id: "A5",
          type: "radio",
          required: true,
          label: {
            en: "Do you plan to participate in next year's event?",
            vi: "Bạn có dự định tiếp tục tham gia sự kiện năm sau không?",
          },
          options: {
            en: ["Yes", "No", "Maybe"],
            vi: ["Có", "Không", "Có thể"],
          },
        },
      ],
    },

    /* ─── B: Travel & Spending ───────────────── */
    {
      id: "B",
      badge: "SECTION B · PHẦN B",
      title: { en: "Travel & Spending", vi: "Di chuyển & Chi tiêu" },
      questions: [
        {
          id: "B1",
          type: "radio",
          required: true,
          label: {
            en: "Was this event the main reason for your visit to {city}?",
            vi: "Sự kiện này có phải là lý do chính bạn đến {city} không?",
          },
          options: {
            en: [
              "Yes — I came specifically for this event",
              "No — I was already planning to visit",
              "No — I live here",
            ],
            vi: [
              "Có — Tôi đến đây chính vì sự kiện",
              "Không — Tôi đã có kế hoạch đến",
              "Không — Tôi sống ở đây",
            ],
          },
        },
        {
          id: "B2",
          type: "radio",
          required: true,
          label: {
            en: "How did you travel to the event? (primary mode)",
            vi: "Bạn đã di chuyển đến sự kiện bằng phương tiện gì?",
          },
          options: {
            en: [
              "Motorbike",
              "Car (private/taxi)",
              "Bus / coach",
              "Train",
              "Domestic flight",
              "International flight — short-haul (<1,500 km)",
              "International flight — long-haul (>3,500 km)",
              "Walking / cycling",
              "Grab / ride-hail",
            ],
            vi: [
              "Xe máy",
              "Ô tô (cá nhân/taxi)",
              "Xe buýt / khách",
              "Tàu hỏa",
              "Bay nội địa",
              "Bay quốc tế ngắn (<1,500 km)",
              "Bay quốc tế dài (>3,500 km)",
              "Đi bộ / xe đạp",
              "Grab / xe công nghệ",
            ],
          },
        },
        {
          id: "B3",
          type: "radio",
          required: true,
          label: {
            en: "What is the approximate one-way distance you traveled? (km)",
            vi: "Khoảng cách một chiều bạn đã di chuyển đến sự kiện?",
          },
          options: {
            en: [
              "Under 10 km",
              "10–50 km",
              "50–150 km",
              "150–500 km",
              "500–1,500 km",
              "1,500–3,500 km",
              "Over 3,500 km",
            ],
            vi: [
              "Dưới 10 km",
              "10–50 km",
              "50–150 km",
              "150–500 km",
              "500–1,500 km",
              "1,500–3,500 km",
              "Trên 3,500 km",
            ],
          },
        },
        {
          id: "B4",
          type: "radio",
          required: true,
          label: {
            en: "How many people traveled with you to {city}?",
            vi: "Bạn đến {city} cùng bao nhiêu người?",
          },
          options: {
            en: ["Just me", "2 people", "3 people", "4 people", "5 or more"],
            vi: [
              "Chỉ mình tôi",
              "2 người",
              "3 người",
              "4 người",
              "5 người trở lên",
            ],
          },
        },
        {
          id: "B5",
          type: "radio",
          required: true,
          label: {
            en: "How many nights did you stay during the event?",
            vi: "Bạn đã ở lại bao nhiêu đêm để tham dự sự kiện?",
          },
          options: {
            en: ["0 — day trip", "1", "2", "3", "4", "5", "6 or more"],
            vi: ["0 — về trong ngày", "1", "2", "3", "4", "5", "6 hoặc hơn"],
          },
        },
        {
          id: "B6",
          type: "radio",
          required: true,
          label: {
            en: "What was the approximate cost of your accommodation per night? (VND)",
            vi: "Chi phí chỗ ở mỗi đêm của bạn khoảng bao nhiêu? (VND)",
          },
          skipIf: (ans) => ans.B5 === "0 — day trip" || ans.B5 === "0",
          options: {
            en: [
              "Under 300,000",
              "300,000–700,000",
              "700,000–1,500,000",
              "1,500,000–3,000,000",
              "3,000,000–6,000,000",
              "Over 6,000,000",
            ],
            vi: [
              "Dưới 300k",
              "300–700k",
              "700k–1.5 triệu",
              "1.5–3 triệu",
              "3–6 triệu",
              "Trên 6 triệu",
            ],
          },
        },
        {
          id: "B7",
          type: "radio",
          required: true,
          label: {
            en: "In total, how much money did you spend during the event? (VND, excluding ticket)",
            vi: "Bạn đã sử dụng hết bao nhiêu tiền trong suốt sự kiện? (không tính vé)",
          },
          options: {
            en: [
              "Under 500,000",
              "500,000–1,000,000",
              "1,000,000–3,000,000",
              "3,000,000–5,000,000",
              "5,000,000–10,000,000",
              "Over 10,000,000",
            ],
            vi: [
              "Dưới 500k",
              "500k–1 triệu",
              "1–3 triệu",
              "3–5 triệu",
              "5–10 triệu",
              "Trên 10 triệu",
            ],
          },
        },
        {
          id: "B8",
          type: "radio",
          required: true,
          label: {
            en: "The amount above — is it for you alone, or for your group?",
            vi: "Số tiền trên — là cho riêng bạn hay cho cả nhóm?",
          },
          options: {
            en: ["Just me", "For my whole group"],
            vi: ["Chỉ riêng tôi", "Cho cả nhóm"],
          },
        },
        {
          id: "B9",
          type: "radio",
          required: false,
          label: {
            en: "How much did you spend at the Marathon Village? (VND)",
            vi: "Bạn đã chi tiêu khoảng bao nhiêu tiền tại Làng Marathon? (VND)",
          },
          options: {
            en: [
              "Nothing",
              "Under 200,000",
              "200,000–500,000",
              "500,000–1,000,000",
              "1,000,000–3,000,000",
              "Over 3,000,000",
            ],
            vi: [
              "Không chi",
              "Dưới 200k",
              "200–500k",
              "500k–1 triệu",
              "1–3 triệu",
              "Trên 3 triệu",
            ],
          },
        },
      ],
    },

    /* ─── C: Participation Factors ───────────── */
    {
      id: "C",
      badge: "SECTION C · PHẦN C",
      title: { en: "Participation Factors", vi: "Yếu tố tham gia" },
      questions: [
        {
          id: "C1",
          type: "matrix5",
          required: false,
          label: {
            en: "Please rate the importance of the following factors when deciding to participate in a running event. (1 = not important, 5 = very important)",
            vi: "Vui lòng đánh giá mức độ quan trọng của những yếu tố sau trong quyết định tham gia giải chạy.",
          },
          rows: {
            en: [
              "Location / venue",
              "Course map & design",
              "Cost of entry",
              "Event reputation",
              "Distance to travel",
              "Total trip cost",
              "Event calendar / date",
              "Family-friendliness",
            ],
            vi: [
              "Địa điểm",
              "Cung đường & thiết kế",
              "Giá vé",
              "Danh tiếng sự kiện",
              "Khoảng cách di chuyển",
              "Chi phí tổng",
              "Thời gian tổ chức",
              "Thân thiện gia đình",
            ],
          },
        },
      ],
    },

    /* ─── D: Communications ──────────────────── */
    {
      id: "D",
      badge: "SECTION D · PHẦN D",
      title: { en: "Communications", vi: "Truyền thông" },
      questions: [
        {
          id: "D1",
          type: "checkbox",
          required: false,
          label: {
            en: "Through which channel(s) did you receive communication from us?",
            vi: "Bạn đã nhận được thông tin qua các kênh truyền thông nào?",
          },
          options: {
            en: [
              "Email",
              "Event Fanpage (Facebook/Instagram)",
              "Event Website",
              "Other",
            ],
            vi: ["Email", "Fanpage sự kiện", "Website sự kiện", "Kênh khác"],
          },
        },
        {
          id: "D2",
          type: "number",
          required: false,
          label: {
            en: "Including this event, how many running events have you participated in total?",
            vi: "Bao gồm sự kiện này, bạn đã tham gia tổng cộng bao nhiêu giải chạy?",
          },
          placeholder: "e.g. 5",
        },
        {
          id: "D3",
          type: "scale5text",
          required: false,
          label: {
            en: "How satisfied were you with the email communications?",
            vi: "Đánh giá mức độ hài lòng với giao tiếp qua Email.",
          },
          skipIf: (ans) =>
            !Array.isArray(ans.D1) || !ans.D1.some((v) => v.includes("Email")),
          commentLabel: {
            en: "Any comments about our emails?",
            vi: "Góp ý về email của chúng tôi?",
          },
        },
        {
          id: "D4",
          type: "scale5text",
          required: false,
          label: {
            en: "How satisfied were you with the Fanpage communications?",
            vi: "Đánh giá mức độ hài lòng với Fanpage sự kiện.",
          },
          skipIf: (ans) =>
            !Array.isArray(ans.D1) ||
            !ans.D1.some((v) => v.includes("Fanpage")),
          commentLabel: {
            en: "Any comments about our Fanpage?",
            vi: "Góp ý về Fanpage của chúng tôi?",
          },
        },
        {
          id: "D5",
          type: "radio",
          required: false,
          label: {
            en: "Did you read the Program Booklet / Athlete Guide?",
            vi: "Bạn đã đọc Cẩm Nang Vận Động Viên chưa?",
          },
          options: { en: ["Yes", "No"], vi: ["Có", "Không"] },
        },
        {
          id: "D5b",
          type: "scale5text",
          required: false,
          label: {
            en: "How satisfied were you with the Program Booklet?",
            vi: "Đánh giá mức độ hài lòng với Cẩm Nang Vận Động Viên.",
          },
          skipIf: (ans) => ans.D5 !== "Yes",
          commentLabel: {
            en: "Any comments about the booklet?",
            vi: "Góp ý về cẩm nang?",
          },
        },
      ],
    },

    /* ─── E: Touchpoint Satisfaction ────────── */
    {
      id: "E",
      badge: "SECTION E · PHẦN E",
      title: { en: "Touchpoint Satisfaction", vi: "Đánh giá từng khâu" },
      intro:
        "Rate each touchpoint 1–5. Add a comment on any item you wish. / Đánh giá từng khâu từ 1–5. Thêm góp ý nếu muốn.",
      questions: [
        {
          id: "E_matrix",
          type: "touchpoints",
          required: false,
          label: {
            en: "Please rate your satisfaction with each touchpoint below.",
            vi: "Đánh giá mức độ hài lòng với từng khâu dưới đây.",
          },
          touchpoints: [
            {
              id: "E1",
              en: "Registration process",
              vi: "Quy trình đăng ký",
            },
            {
              id: "E2",
              en: "Check-in process",
              vi: "Quy trình check-in",
            },
            {
              id: "E3",
              en: "Marathon Village vendors",
              vi: "Gian hàng Làng Marathon",
            },
            { id: "E4", en: "Bag drop service", vi: "Dịch vụ gửi túi" },
            {
              id: "E5",
              en: "Bag pick-up service",
              vi: "Dịch vụ nhận túi",
            },
            {
              id: "E6",
              en: "Start line area",
              vi: "Khu vực vạch xuất phát",
            },
            {
              id: "E7",
              en: "Route quality",
              vi: "Chất lượng đường chạy",
            },
            { id: "E8", en: "Aid stations", vi: "Trạm tiếp sức" },
            { id: "E9", en: "Finish line area", vi: "Khu vực về đích" },
            { id: "E10", en: "Race results", vi: "Kết quả đua" },
            { id: "E11", en: "Recovery area", vi: "Khu vực hồi phục" },
            { id: "E12", en: "Award ceremony", vi: "Buổi lễ trao giải" },
            {
              id: "E13",
              en: "Shuttle bus service",
              vi: "Dịch vụ xe buýt đưa đón",
            },
          ],
        },
        {
          id: "E14",
          type: "checkbox",
          required: false,
          label: {
            en: "Which day(s) did you visit the Marathon Village?",
            vi: "Bạn đến Làng Marathon vào ngày nào?",
          },
          options: {
            en: ["Friday", "Saturday", "Sunday", "Did not visit"],
            vi: ["Thứ 6", "Thứ 7", "Chủ nhật", "Không đến"],
          },
        },
        {
          id: "E15",
          type: "number",
          required: false,
          label: {
            en: "How many booths / activities did you visit at the Marathon Village?",
            vi: "Bạn đã ghé thăm bao nhiêu gian hàng tại Làng Marathon?",
          },
          placeholder: "0",
        },
      ],
    },

    /* ─── F: Health & Wellbeing ──────────────── */
    {
      id: "F",
      badge: "SECTION F · PHẦN F — MPW PILLAR 3",
      title: { en: "Health & Wellbeing", vi: "Sức khỏe & Hạnh phúc" },
      questions: [
        {
          id: "F1",
          type: "radio",
          required: true,
          label: {
            en: "Before this event, how many days per week did you typically exercise for at least 30 minutes?",
            vi: "Trước sự kiện, bạn thường tập thể dục ít nhất 30 phút vào bao nhiêu ngày mỗi tuần?",
          },
          options: {
            en: ["0", "1", "2", "3", "4", "5", "6", "7"],
            vi: ["0", "1", "2", "3", "4", "5", "6", "7"],
          },
        },
        {
          id: "F2",
          type: "radio",
          required: true,
          label: {
            en: "After participating, how many days per week do you now exercise or intend to exercise?",
            vi: "Sau khi tham gia, bạn dự định tập thể dục bao nhiêu ngày mỗi tuần?",
          },
          options: {
            en: ["0", "1", "2", "3", "4", "5", "6", "7"],
            vi: ["0", "1", "2", "3", "4", "5", "6", "7"],
          },
        },
        {
          id: "F3",
          type: "radio",
          required: true,
          label: {
            en: "Compared to before the event, how would you rate your overall wellbeing now?",
            vi: "So với trước sự kiện, bạn đánh giá sức khỏe tinh thần tổng thể hiện tại như thế nào?",
          },
          options: {
            en: [
              "Much worse",
              "Somewhat worse",
              "About the same",
              "Somewhat better",
              "Much better",
            ],
            vi: [
              "Tệ hơn nhiều",
              "Tệ hơn một chút",
              "Không thay đổi",
              "Tốt hơn một chút",
              "Tốt hơn nhiều",
            ],
          },
        },
        {
          id: "F4",
          type: "radio",
          required: true,
          label: {
            en: "Since participating, have you noticed a change in your mental health or emotional state?",
            vi: "Kể từ khi tham gia, bạn có nhận thấy thay đổi về sức khỏe tinh thần không?",
          },
          options: {
            en: ["Declined", "No change", "Somewhat improved", "Much improved"],
            vi: [
              "Giảm sút",
              "Không thay đổi",
              "Cải thiện một chút",
              "Cải thiện nhiều",
            ],
          },
        },
        {
          id: "F5",
          type: "radio",
          required: true,
          label: {
            en: "Since participating, have you noticed a change in your energy levels and motivation?",
            vi: "Bạn có nhận thấy thay đổi về năng lượng và động lực không?",
          },
          options: {
            en: ["Declined", "No change", "Somewhat improved", "Much improved"],
            vi: [
              "Giảm sút",
              "Không thay đổi",
              "Cải thiện một chút",
              "Cải thiện nhiều",
            ],
          },
        },
        {
          id: "F6",
          type: "checkbox",
          required: true,
          label: {
            en: "As a result of this event, which of the following apply to you? (Select all)",
            vi: "Kết quả từ sự kiện, điều nào sau đây đúng với bạn? (Chọn tất cả)",
          },
          options: {
            en: [
              "My physical fitness improved",
              "I achieved a personal goal",
              "I'm inspired to set new fitness goals",
              "I feel proud of my accomplishment",
            ],
            vi: [
              "Thể lực được cải thiện",
              "Đạt được mục tiêu cá nhân",
              "Truyền cảm hứng đặt mục tiêu mới",
              "Tự hào về thành tích",
            ],
          },
        },
        {
          id: "F7",
          type: "radio",
          required: true,
          label: {
            en: "Would you have achieved this level of physical activity and wellbeing without this event?",
            vi: "Bạn có đạt được mức cải thiện này nếu không có sự kiện này không?",
          },
          options: {
            en: [
              "Definitely yes",
              "Probably yes",
              "Probably not",
              "Definitely not",
            ],
            vi: [
              "Chắc chắn có",
              "Có thể có",
              "Có thể không",
              "Chắc chắn không",
            ],
          },
        },
      ],
    },

    /* ─── G: Social Impact ───────────────────── */
    {
      id: "G",
      badge: "SECTION G · PHẦN G — MPW PILLAR 4",
      title: { en: "Social Impact", vi: "Tác động xã hội" },
      questions: [
        {
          id: "G1",
          type: "radio",
          required: true,
          label: {
            en: "Did you make any new social connections through this event?",
            vi: "Bạn có kết bạn hoặc tạo mối quan hệ mới nào qua sự kiện này không?",
          },
          options: {
            en: [
              "No",
              "Yes — approximately 1–2 people",
              "Yes — approximately 3–5 people",
              "Yes — approximately 6–10 people",
              "Yes — more than 10 people",
            ],
            vi: [
              "Không",
              "Có — khoảng 1–2 người",
              "Có — khoảng 3–5 người",
              "Có — khoảng 6–10 người",
              "Có — hơn 10 người",
            ],
          },
        },
        {
          id: "G2",
          type: "radio",
          required: true,
          label: {
            en: 'How much do you agree: "This event strengthened my sense of community."',
            vi: 'Mức độ đồng ý: "Sự kiện này tăng cường cảm giác cộng đồng của tôi."',
          },
          options: {
            en: ["Strongly disagree", "Disagree", "Agree", "Strongly agree"],
            vi: ["Rất không đồng ý", "Không đồng ý", "Đồng ý", "Rất đồng ý"],
          },
        },
        {
          id: "G3",
          type: "radio",
          required: false,
          label: {
            en: "How inclusive did you find this event?",
            vi: "Bạn cảm thấy sự kiện này hòa nhập ở mức nào?",
          },
          options: {
            en: [
              "Not inclusive",
              "Slightly inclusive",
              "Moderately inclusive",
              "Very inclusive",
              "Extremely inclusive",
            ],
            vi: [
              "Không hòa nhập",
              "Hơi hòa nhập",
              "Khá hòa nhập",
              "Rất hòa nhập",
              "Cực kỳ hòa nhập",
            ],
          },
        },
      ],
    },

    /* ─── H: Environment ─────────────────────── */
    {
      id: "H",
      badge: "SECTION H · PHẦN H — MPW PILLAR 5",
      title: {
        en: "Environmental Awareness",
        vi: "Nhận thức môi trường",
      },
      questions: [
        {
          id: "H1",
          type: "radio",
          required: true,
          label: {
            en: "Were you aware of any sustainability or environmental initiatives at this event?",
            vi: "Bạn có biết về sáng kiến bền vững hoặc môi trường nào tại sự kiện không?",
          },
          options: { en: ["Yes", "No"], vi: ["Có", "Không"] },
        },
      ],
    },

    /* ─── I: Brand & Sponsor ─────────────────── */
    {
      id: "I",
      badge: "SECTION I · PHẦN I — MPW PILLAR 6",
      title: { en: "Brand & Sponsor", vi: "Thương hiệu & Nhà tài trợ" },
      questions: [
        {
          id: "I1",
          type: "textarea",
          required: true,
          label: {
            en: "Without looking, can you name any official sponsors of this event? (Type up to 5 names)",
            vi: "Không cần nhìn, bạn có thể kể tên nhà tài trợ chính thức nào không? (Tối đa 5 tên)",
          },
          placeholder: "e.g. Techcombank, New Balance… / Nhập tên nhà tài trợ…",
          note: "Unaided recall — please answer before viewing the next question. / Nhớ tự nhiên — trả lời trước khi xem câu tiếp theo.",
        },
        {
          id: "I2",
          type: "checkbox",
          required: true,
          label: {
            en: "Which brands do you remember seeing at the event? (Select all that apply)",
            vi: "Bạn nhận diện được các thương hiệu nào tại sự kiện? (Chọn tất cả)",
          },
          optionsFromConfig: "aidedBrands",
          extraOption: {
            en: "None of the above",
            vi: "Không nhớ thương hiệu nào",
          },
        },
        {
          id: "I3",
          type: "radio",
          required: false,
          label: {
            en: "Did you interact with or visit any sponsor booths / activations?",
            vi: "Bạn có tương tác hoặc ghé gian hàng nhà tài trợ nào không?",
          },
          options: { en: ["Yes", "No"], vi: ["Có", "Không"] },
        },
        {
          id: "I4",
          type: "radio",
          required: false,
          label: {
            en: "How would you rate your overall impression of {titleSponsor} now?",
            vi: "Bạn đánh giá ấn tượng về {titleSponsor} hiện tại như thế nào?",
          },
          options: {
            en: [
              "Very negative",
              "Negative",
              "Neutral",
              "Positive",
              "Very positive",
            ],
            vi: [
              "Rất tiêu cực",
              "Tiêu cực",
              "Trung lập",
              "Tích cực",
              "Rất tích cực",
            ],
          },
        },
      ],
    },

    /* ─── J: Sponsor Product & Charity ──────── */
    {
      id: "J",
      badge: "SECTION J · PHẦN J",
      title: {
        en: "Sponsor Product & Charity",
        vi: "Sản phẩm nhà tài trợ & Từ thiện",
      },
      questions: [
        {
          id: "J1",
          type: "radio",
          required: false,
          label: {
            en: "How do you feel about the race shirt from {sponsorBrand}?",
            vi: "Bạn cảm thấy trang phục áo thi đấu đến từ {sponsorBrand} như thế nào?",
          },
          options: {
            en: [
              "Not good — needs improvement",
              "Average",
              "Good",
              "Very good",
            ],
            vi: ["Chưa tốt, cần cải thiện", "Bình thường", "Tốt", "Rất tốt"],
          },
        },
        {
          id: "J2",
          type: "checkbox",
          required: false,
          label: {
            en: "Do you know any of the following foundations?",
            vi: "Bạn có biết đến các quỹ nào dưới đây không?",
          },
          optionsFromConfig: "foundations",
          extraOption: {
            en: "None of the above",
            vi: "Không biết quỹ nào",
          },
        },
        {
          id: "J3",
          type: "matrixCheckbox",
          required: false,
          label: {
            en: "For the foundations you know, through which channels did you learn about them?",
            vi: "Bạn biết đến các quỹ này qua kênh nào?",
          },
          skipIf: (ans) =>
            !Array.isArray(ans.J2) ||
            ans.J2.length === 0 ||
            (ans.J2.length === 1 && ans.J2[0].includes("None")),
          rowsFromConfig: "foundations",
          colsFromConfig: "charityChannels",
        },
      ],
    },

    /* ─── K: Final Feedback ──────────────────── */
    {
      id: "K",
      badge: "SECTION K · PHẦN K",
      title: { en: "Final Feedback", vi: "Góp ý chung" },
      questions: [
        {
          id: "K1",
          type: "textarea",
          required: false,
          label: {
            en: "What was the single best thing about today's event?",
            vi: "Điều tốt nhất về sự kiện hôm nay là gì?",
          },
          placeholder: "The best part was… / Điều tôi thích nhất là…",
        },
        {
          id: "K2",
          type: "textarea",
          required: false,
          label: {
            en: "Please share any additional feedback on how we can improve your experience for next year's event.",
            vi: "Xin vui lòng chia sẻ ý kiến phản hồi để nâng cấp trải nghiệm của bạn năm sau.",
          },
          placeholder: "Your suggestions… / Góp ý của bạn…",
        },
      ],
    },
  ],
};
/* ════════════════════════════════════════════════════════════
   END CONFIG
════════════════════════════════════════════════════════════ */

/* ── State ── */
let answers = {};
let currentSection = 0;
let csvFileHandle = null;
let existingRows = [];
const SESSION_ID =
  "sess_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9);

/* ── Interpolate event variables ── */
function interp(str) {
  return str
    .replace(/{city}/g, CONFIG.event.city)
    .replace(/{edition}/g, CONFIG.event.edition)
    .replace(/{seriesName}/g, CONFIG.event.seriesName)
    .replace(/{titleSponsor}/g, CONFIG.event.titleSponsor)
    .replace(/{sponsorBrand}/g, CONFIG.event.sponsorBrand);
}

/* ══════════════════════════════════════════
   FILE SYSTEM ACCESS API
══════════════════════════════════════════ */
async function loadCSV() {
  try {
    const [handle] = await window.showOpenFilePicker({
      types: [{ description: "CSV Files", accept: { "text/csv": [".csv"] } }],
      multiple: false,
    });
    csvFileHandle = handle;
    const file = await handle.getFile();
    const text = await file.text();
    existingRows = parseCSV(text);
    showStats(file.name, existingRows);
  } catch (e) {
    if (e.name !== "AbortError") console.error("Load error:", e);
  }
}

function parseCSV(text) {
  const lines = text.trim().split("\n");
  if (lines.length <= 1) return [];
  return lines.slice(1).map((l) => l.split(","));
}

function showStats(filename, rows) {
  const box = document.getElementById("stats-box");
  const lastRow = rows.length > 0 ? rows[rows.length - 1] : null;
  document.getElementById("stat-count").textContent = rows.length;
  document.getElementById("stat-last").textContent = lastRow
    ? lastRow[1] || "—"
    : "—";
  document.getElementById("stat-file").textContent = filename;
  box.style.display = "block";
  document.getElementById("splash-actions").classList.add("hidden");
  document.getElementById("splash-loaded").classList.remove("hidden");
}

function resetLoad() {
  csvFileHandle = null;
  existingRows = [];
  document.getElementById("stats-box").style.display = "none";
  document.getElementById("splash-actions").classList.remove("hidden");
  document.getElementById("splash-loaded").classList.add("hidden");
}

async function saveResponse() {
  const headers = buildHeaders();
  const row = buildRow();

  if (!csvFileHandle) {
    const city = CONFIG.event.city.replace(/\s+/g, "_");
    const date = new Date().toISOString().slice(0, 10);
    try {
      csvFileHandle = await window.showSaveFilePicker({
        suggestedName: `survey_${city}_${date}.csv`,
        types: [{ description: "CSV", accept: { "text/csv": [".csv"] } }],
      });
      const writable = await csvFileHandle.createWritable();
      await writable.write(headers + "\n" + row + "\n");
      await writable.close();
    } catch (e) {
      if (e.name === "AbortError") return false;
      console.error(e);
      return false;
    }
  } else {
    try {
      const file = await csvFileHandle.getFile();
      const writable = await csvFileHandle.createWritable({
        keepExistingData: true,
      });
      await writable.seek(file.size);
      await writable.write(row + "\n");
      await writable.close();
    } catch (e) {
      console.error(e);
      return false;
    }
  }
  return true;
}

function buildHeaders() {
  const cols = ["session_id", "timestamp"];
  CONFIG.sections.forEach((sec) => {
    sec.questions.forEach((q) => {
      if (q.type === "touchpoints") {
        q.touchpoints.forEach((tp) => cols.push(tp.id, tp.id + "_comment"));
      } else if (q.type === "scale5text") {
        cols.push(q.id, q.id + "_comment");
      } else if (q.type === "matrixCheckbox") {
        (CONFIG.event[q.rowsFromConfig] || []).forEach((row) => {
          const safeRow = row.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 20);
          (CONFIG.event[q.colsFromConfig] || []).forEach((col) => {
            const safeCol = col.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 10);
            cols.push(q.id + "_" + safeRow + "_" + safeCol);
          });
        });
      } else if (q.type === "matrix5") {
        (q.rows.en || []).forEach((r, i) => {
          const safe = r.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 20);
          cols.push(q.id + "_" + safe);
        });
      } else {
        cols.push(q.id);
      }
    });
  });
  return cols.map(csvEscape).join(",");
}

function buildRow() {
  const vals = [SESSION_ID, new Date().toISOString()];
  CONFIG.sections.forEach((sec) => {
    sec.questions.forEach((q) => {
      if (q.type === "touchpoints") {
        q.touchpoints.forEach((tp) => {
          vals.push(csvEscape(answers[tp.id] || ""));
          vals.push(csvEscape(answers[tp.id + "_c"] || ""));
        });
      } else if (q.type === "scale5text") {
        vals.push(csvEscape(answers[q.id] || ""));
        vals.push(csvEscape(answers[q.id + "_c"] || ""));
      } else if (q.type === "matrixCheckbox") {
        (CONFIG.event[q.rowsFromConfig] || []).forEach((row) => {
          (CONFIG.event[q.colsFromConfig] || []).forEach((col) => {
            const key = q.id + "|" + row + "|" + col;
            vals.push(csvEscape(answers[key] ? "1" : ""));
          });
        });
      } else if (q.type === "matrix5") {
        (q.rows.en || []).forEach((r) => {
          vals.push(csvEscape(String(answers[q.id + "|" + r] || "")));
        });
      } else {
        const v = answers[q.id];
        vals.push(csvEscape(Array.isArray(v) ? v.join(";") : String(v || "")));
      }
    });
  });
  return vals.join(",");
}

function csvEscape(val) {
  const s = String(val);
  if (s.includes(",") || s.includes('"') || s.includes("\n")) {
    return '"' + s.replace(/"/g, '""') + '"';
  }
  return s;
}

/* ══════════════════════════════════════════
   RENDER ENGINE
══════════════════════════════════════════ */
function renderSection(idx) {
  const sec = CONFIG.sections[idx];
  if (!sec) return;
  const body = document.getElementById("form-body");
  let html = `
    <div class="sec-header">
      <div class="sec-badge">${sec.badge}</div>
      <div class="sec-title">${interp(sec.title.en)}</div>
      <div class="sec-title-vi">${interp(sec.title.vi || "")}</div>
    </div>`;
  if (sec.intro)
    html += `<p style="font-size:14px;color:var(--c-muted);margin-bottom:24px;line-height:1.6">${sec.intro}</p>`;
  html += '<div class="sec-divider"></div>';
  sec.questions.forEach((q) => {
    html += renderQuestion(q);
  });
  html += '<div style="height:40px"></div>';
  body.innerHTML = html;
  attachHandlers(sec);
  restoreAnswers(sec);
  applySkipLogic(sec);
}

function renderQuestion(q) {
  const label = interp(q.label.en);
  const labelVI = q.label.vi ? interp(q.label.vi) : "";
  const req = q.required
    ? '<span class="req">*</span>'
    : '<span class="q-opt"> (optional)</span>';
  let inner = "";

  if (q.type === "text") {
    inner = `<input type="text" id="${q.id}" placeholder="${q.placeholder || ""}" autocomplete="off">`;
  } else if (q.type === "number") {
    inner = `<input type="number" id="${q.id}" min="0" placeholder="${q.placeholder || ""}">`;
  } else if (q.type === "textarea") {
    inner = `<textarea id="${q.id}" rows="3" placeholder="${q.placeholder || ""}"></textarea>`;
  } else if (q.type === "scale5") {
    const sl = q.scaleLabels || {
      en: ["Poor", "Excellent"],
      vi: ["", ""],
    };
    inner = `<div class="scale-wrap">
      <div class="scale-labels"><span>${sl.en[0]}</span><span>${sl.en[1]}</span></div>
      <div class="scale-row" id="${q.id}_row">
        ${[1, 2, 3, 4, 5].map((v) => `<button class="scale-btn" data-val="${v}" onclick="pickScale('${q.id}',${v},this)">${v}</button>`).join("")}
      </div></div>`;
  } else if (q.type === "nps") {
    inner = `<div>
      <div class="nps-row" id="${q.id}_row">
        ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((v) => `<button class="nps-btn" data-val="${v}" onclick="pickNPS('${q.id}',${v},this)">${v}</button>`).join("")}
      </div>
      <div class="nps-labels"><span>Not at all likely / Chắc chắn không</span><span>Extremely likely / Chắc chắn có</span></div>
    </div>`;
  } else if (q.type === "radio") {
    const opts = resolveOptions(q);
    inner = `<div class="option-list" id="${q.id}_list" data-type="radio" data-qid="${q.id}">
      ${opts
        .map(
          (o) => `
        <label class="option-item" data-val="${o.en.replace(/"/g, "&quot;")}">
          <span class="option-dot"></span>
          <span>${o.en}${o.vi ? ` <span style="color:var(--c-muted);font-weight:400">/ ${o.vi}</span>` : ""}</span>
        </label>`,
        )
        .join("")}
    </div>`;
  } else if (q.type === "checkbox") {
    const opts = resolveOptions(q);
    inner = `<div class="option-list" id="${q.id}_list" data-type="checkbox" data-qid="${q.id}">
      ${opts
        .map(
          (o) => `
        <label class="option-item" data-val="${o.en.replace(/"/g, "&quot;")}">
          <span class="option-box"></span>
          <span>${o.en}${o.vi ? ` <span style="color:var(--c-muted);font-weight:400">/ ${o.vi}</span>` : ""}</span>
        </label>`,
        )
        .join("")}
    </div>`;
  } else if (q.type === "scale5text") {
    const cl = q.commentLabel || {
      en: "Additional comments?",
      vi: "Góp ý thêm?",
    };
    inner = `<div class="scale-wrap">
      <div class="scale-labels"><span>Very dissatisfied / Rất không hài lòng</span><span>Very satisfied / Rất hài lòng</span></div>
      <div class="scale-row" id="${q.id}_row">
        ${[1, 2, 3, 4, 5].map((v) => `<button class="scale-btn" data-val="${v}" onclick="pickScale('${q.id}',${v},this)">${v}</button>`).join("")}
      </div></div>
      <button class="comment-toggle" onclick="toggleComment('${q.id}_cb')">+ Add comment / ${cl.vi}</button>
      <div class="comment-box" id="${q.id}_cb">
        <textarea id="${q.id}_c" rows="2" placeholder="${cl.en} / ${cl.vi}"></textarea>
      </div>`;
  } else if (q.type === "matrix5") {
    const rows = q.rows.en.map((r, i) => ({
      en: r,
      vi: q.rows.vi[i] || "",
    }));
    inner = `<div class="matrix-wrap"><table class="matrix-table">
      <thead><tr><th></th>${[1, 2, 3, 4, 5].map((v) => `<th>${v}</th>`).join("")}</tr></thead>
      <tbody>
        ${rows
          .map(
            (r) => `<tr>
          <td>${r.en}${r.vi ? `<br><small style="color:var(--c-muted)">${r.vi}</small>` : ""}</td>
          ${[1, 2, 3, 4, 5].map((v) => `<td><div class="m-dot" onclick="pickMatrix('${q.id}','${r.en}',${v},this)"></div></td>`).join("")}
        </tr>`,
          )
          .join("")}
      </tbody></table></div>`;
  } else if (q.type === "touchpoints") {
    inner = `<div id="${q.id}_container">
      ${q.touchpoints
        .map(
          (tp) => `
        <div class="tp-row" id="tp_${tp.id}">
          <div class="tp-label">${tp.en}<small>${tp.vi}</small></div>
          <div class="tp-scale">
            ${[1, 2, 3, 4, 5].map((v) => `<button class="tp-btn" data-val="${v}" onclick="pickTP('${tp.id}',${v},this)">${v}</button>`).join("")}
          </div>
          <button class="comment-toggle" style="font-size:11px;white-space:nowrap" onclick="toggleComment('tc_${tp.id}')">+ note</button>
        </div>
        <div class="comment-box" id="tc_${tp.id}" style="margin-bottom:4px">
          <textarea id="${tp.id}_c" rows="1" placeholder="Comment / Góp ý…" style="min-height:40px;font-size:13px"></textarea>
        </div>`,
        )
        .join("")}
    </div>`;
  } else if (q.type === "matrixCheckbox") {
    const rows = CONFIG.event[q.rowsFromConfig] || [];
    const cols = CONFIG.event[q.colsFromConfig] || [];
    inner = `<div class="matrix-wrap"><table class="matrix-table">
      <thead><tr><th></th>${cols.map((c) => `<th style="font-size:10px">${c}</th>`).join("")}</tr></thead>
      <tbody>
        ${rows
          .map(
            (r) => `<tr>
          <td style="font-size:13px">${r}</td>
          ${cols.map((c) => `<td><input type="checkbox" style="width:auto;accent-color:var(--c-primary)" onchange="pickMatrixCb('${q.id}','${r}','${c}',this)"></td>`).join("")}
        </tr>`,
          )
          .join("")}
      </tbody></table></div>`;
  }

  const note = q.note ? `<div class="q-note">${q.note}</div>` : "";
  const skipClass = q.skipIf ? " skip-target" : "";
  return `
    <div class="q-card${skipClass}" id="qwrap_${q.id}" data-qid="${q.id}">
      <div class="q-id">${q.id}</div>
      <div class="q-label">${label}${req}</div>
      ${labelVI ? `<div class="q-vi">${labelVI}</div>` : ""}
      ${inner}
      ${note}
    </div>`;
}

function resolveOptions(q) {
  if (q.options) {
    return q.options.en.map((e, i) => ({
      en: e,
      vi: q.options.vi ? q.options.vi[i] : "",
    }));
  }
  if (q.optionsFromConfig) {
    const items = CONFIG.event[q.optionsFromConfig] || [];
    const opts = items.map((o) => ({ en: o, vi: "" }));
    if (q.extraOption)
      opts.push({ en: q.extraOption.en, vi: q.extraOption.vi });
    return opts;
  }
  return [];
}

/* ── Attach event handlers ── */
function attachHandlers(sec) {
  // radio/checkbox handled by delegated listener on form-body (see initDelegation)
  sec.questions.forEach((q) => {
    if (["text", "number", "textarea"].includes(q.type)) {
      const el = document.getElementById(q.id);
      if (el)
        el.addEventListener("input", () => {
          answers[q.id] = el.value;
          showSaved();
        });
    }
    if (q.type === "scale5text") {
      const tc = document.getElementById(q.id + "_c");
      if (tc)
        tc.addEventListener("input", () => {
          answers[q.id + "_c"] = tc.value;
        });
    }
    if (q.type === "touchpoints") {
      q.touchpoints.forEach((tp) => {
        const tc = document.getElementById(tp.id + "_c");
        if (tc)
          tc.addEventListener("input", () => {
            answers[tp.id + "_c"] = tc.value;
          });
      });
    }
  });
}

/* ── Restore saved answers ── */
function restoreAnswers(sec) {
  sec.questions.forEach((q) => {
    const v = answers[q.id];
    if (v === undefined) return;
    if (q.type === "radio") {
      document.querySelectorAll(`#qwrap_${q.id} .option-item`).forEach((el) => {
        if (el.dataset.val === v) {
          el.classList.add("sel");
          document.getElementById("qwrap_" + q.id).classList.add("answered");
        }
      });
    } else if (q.type === "checkbox") {
      const arr = Array.isArray(v) ? v : [];
      document.querySelectorAll(`#qwrap_${q.id} .option-item`).forEach((el) => {
        if (arr.includes(el.dataset.val)) el.classList.add("sel");
      });
      if (arr.length)
        document.getElementById("qwrap_" + q.id).classList.add("answered");
    } else if (q.type === "scale5" || q.type === "nps") {
      document
        .querySelectorAll(`#${q.id}_row .scale-btn, #${q.id}_row .nps-btn`)
        .forEach((btn) => {
          if (Number(btn.dataset.val) === Number(v)) {
            btn.classList.add("sel");
            document.getElementById("qwrap_" + q.id).classList.add("answered");
          }
        });
    } else if (["text", "number", "textarea"].includes(q.type)) {
      const el = document.getElementById(q.id);
      if (el) el.value = v;
    }
  });
}

/* ── Skip logic ── */
function applySkipLogic(sec) {
  sec.questions.forEach((q) => {
    if (!q.skipIf) return;
    const wrap = document.getElementById("qwrap_" + q.id);
    if (!wrap) return;
    const shouldSkip = q.skipIf(answers);
    wrap.style.display = shouldSkip ? "none" : "";
  });
}

/* ── Pickers ── */
function pickScale(qid, val, btn) {
  btn
    .closest(".scale-row")
    .querySelectorAll(".scale-btn")
    .forEach((b) => b.classList.remove("sel"));
  btn.classList.add("sel");
  answers[qid] = val;
  document.getElementById("qwrap_" + qid).classList.add("answered");
  showSaved();
}
function pickNPS(qid, val, btn) {
  btn
    .closest(".nps-row")
    .querySelectorAll(".nps-btn")
    .forEach((b) => b.classList.remove("sel"));
  btn.classList.add("sel");
  answers[qid] = val;
  document.getElementById("qwrap_" + qid).classList.add("answered");
  showSaved();
}
function pickMatrix(qid, row, val, dot) {
  dot
    .closest("tr")
    .querySelectorAll(".m-dot")
    .forEach((d) => d.classList.remove("sel"));
  dot.classList.add("sel");
  answers[qid + "|" + row] = val;
  showSaved();
}
function pickTP(tpid, val, btn) {
  btn
    .closest(".tp-scale")
    .querySelectorAll(".tp-btn")
    .forEach((b) => b.classList.remove("sel"));
  btn.classList.add("sel");
  answers[tpid] = val;
  showSaved();
}
function pickMatrixCb(qid, row, col, cb) {
  answers[qid + "|" + row + "|" + col] = cb.checked;
  showSaved();
}
function toggleComment(id) {
  const el = document.getElementById(id);
  if (el) el.classList.toggle("open");
}

/* ══════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════ */
function startFresh() {
  document.getElementById("splash").classList.remove("active");
  document.getElementById("form-screen").classList.add("active");
  currentSection = 0;
  answers = { _session: SESSION_ID };
  renderSection(0);
  updateNav();
  updateProgress();
}

function nextSection() {
  console.log("nextSection fired, currentSection:", currentSection);
  if (!validateSection()) return;
  if (currentSection >= CONFIG.sections.length - 1) {
    submitForm();
    return;
  }
  currentSection++;
  renderSection(currentSection);
  updateNav();
  updateProgress();
  // console.log("Scroll attempt, scrollY before:", window.scrollY);
  // window.scrollTo({ top: 0, behavior: "smooth" });
  // document.documentElement.scrollTop = 0; // for Safari
  // document.body.scrollTop = 0; // for Safari
  // console.log("Scroll attempt after, scrollY:", window.scrollY);
  const formBody = document.getElementById("form-body");
  // console.log("formBody found:", formBody);
  // console.log("formBody.scrollTop before:", formBody.scrollTop);
  // console.log("formBody.scrollHeight:", formBody.scrollHeight);
  // console.log("formBody.clientHeight:", formBody.clientHeight);
  // console.log(
  //   "formBody overflow-y:",
  //   window.getComputedStyle(formBody).overflowY,
  // );

  formBody.scrollTop = 0;
  // console.log("formBody.scrollTop after:", formBody.scrollTop);
}

function prevSection() {
  if (currentSection <= 0) return;
  currentSection--;
  renderSection(currentSection);
  updateNav();
  updateProgress();
  // window.scrollTo({ top: 0, behavior: "smooth" });
  // document.documentElement.scrollTop = 0; // for Safari
  // document.body.scrollTop = 0; // for Safari
  const formBody = document.getElementById("form-body");
  formBody.scrollTop = 0;
}

function skipSection() {
  if (currentSection >= CONFIG.sections.length - 1) return;
  currentSection++;
  renderSection(currentSection);
  updateNav();
  updateProgress();
  // window.scrollTo({ top: 0, behavior: "smooth" });
  // document.documentElement.scrollTop = 0; // for Safari
  // document.body.scrollTop = 0; // for Safari
  const formBody = document.getElementById("form-body");
  formBody.scrollTop = 0;
}

function updateNav() {
  const backBtn = document.getElementById("btn-back");
  const nextBtn = document.getElementById("btn-next");
  backBtn.style.display = currentSection > 0 ? "" : "none";
  const isLast = currentSection === CONFIG.sections.length - 1;
  nextBtn.textContent = isLast ? "Submit ✓" : "Next →";
  if (isLast) nextBtn.className = "btn btn-coral";
  else nextBtn.className = "btn btn-primary";
}

function updateProgress() {
  const pct = Math.round((currentSection / CONFIG.sections.length) * 100);
  document.getElementById("progress-fill").style.width = pct + "%";
  // document.getElementById("progress-pct").textContent =
  //   `Section ${currentSection + 1} of ${CONFIG.sections.length} · ${pct}%`;
  document.getElementById("topbar-title").textContent = CONFIG.event.seriesName;
  document.getElementById("topbar-meta").textContent =
    `Section ${currentSection + 1}/${CONFIG.sections.length}`;
}

/* ── Validation ── */
function validateSection() {
  const sec = CONFIG.sections[currentSection];
  let valid = true;
  sec.questions.forEach((q) => {
    if (!q.required) return;
    const wrap = document.getElementById("qwrap_" + q.id);
    if (!wrap || wrap.style.display === "none") return;
    if (q.skipIf && q.skipIf(answers)) return;
    const v = answers[q.id];
    const missing =
      v === undefined ||
      v === "" ||
      v === null ||
      (Array.isArray(v) && v.length === 0);
    if (missing) {
      wrap.classList.add("has-error");
      wrap.scrollIntoView({ behavior: "smooth", block: "center" });
      valid = false;
    } else {
      wrap.classList.remove("has-error");
    }
  });
  return valid;
}

/* ── Submit ── */
async function submitForm() {
  if (!validateSection()) return;
  const btn = document.getElementById("btn-next");
  btn.disabled = true;
  btn.textContent = "Saving…";
  const ok = await saveResponse();
  if (ok) {
    let fname = "—";
    if (csvFileHandle) {
      try {
        fname = csvFileHandle.name;
      } catch (e) {}
    }
    document.getElementById("thanks-file").textContent = "Saved to: " + fname;
    document.getElementById("form-screen").classList.remove("active");
    document.getElementById("thanks").classList.add("active");
  } else {
    btn.disabled = false;
    btn.textContent = "Submit ✓";
    alert("Could not save to file. Please try again or grant file permission.");
  }
}

function newResponse() {
  answers = {
    _session:
      "sess_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9),
  };
  currentSection = 0;
  document.getElementById("thanks").classList.remove("active");
  document.getElementById("form-screen").classList.add("active");
  renderSection(0);
  updateNav();
  updateProgress();
  // window.scrollTo({ top: 0 });
  // document.documentElement.scrollTop = 0; // for Safari
  // document.body.scrollTop = 0; // for Safari
  const formBody = document.getElementById("form-body");
  formBody.scrollTop = 0;
}

/* ── Saved indicator ── */
let savedTimer;
function showSaved() {
  const pill = document.getElementById("saved-pill");
  pill.className = "saved-pill show";
  clearTimeout(savedTimer);
  savedTimer = setTimeout(() => {
    pill.className = "saved-pill";
  }, 2000);
}

/* ── Event delegation for radio/checkbox ── */
function initDelegation() {
  document.getElementById("form-body").addEventListener("click", function (e) {
    const item = e.target.closest(".option-item");
    if (!item) return;
    const list = item.closest(".option-list");
    if (!list) return;
    const qid = list.dataset.qid;
    const type = list.dataset.type;
    if (!qid || !type) return;

    if (type === "radio") {
      list
        .querySelectorAll(".option-item")
        .forEach((o) => o.classList.remove("sel"));
      item.classList.add("sel");
      answers[qid] = item.dataset.val;
    } else if (type === "checkbox") {
      item.classList.toggle("sel");
      answers[qid] = Array.from(list.querySelectorAll(".option-item.sel")).map(
        (o) => o.dataset.val,
      );
    }
    document.getElementById("qwrap_" + qid)?.classList.add("answered");
    const sec = CONFIG.sections[currentSection];
    if (sec) applySkipLogic(sec);
    showSaved();
  });
}

/* ── Init ── */
document.getElementById("splash-event-name").textContent =
  CONFIG.event.seriesName;
initDelegation();
