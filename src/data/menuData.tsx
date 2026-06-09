import faq from "../assets/faq.png";
import scholarship from "../assets/scholarship.png";
import calendar from "../assets/calendar.png";
import certificate from "../assets/certificate.png";
import type { Menu } from "../types/Chat";

export const menuData: Menu[] = [
  {
    title: "FAQ/챗봇소개",
    icon: faq,

    showInMenu: true,
    page: 0,

    keywords: [
      "faq",
      "챗봇",
      "챗봇소개",
      "쿠비",
      "사용법",
      "뭐야",
      "소개",
    ],

    userText: "챗봇 소개해주세요",
    botText: "쿠비를 소개해드릴게요!",
    description:
      "쿠비는 건국대학교 마스코트인 쿠와 비서의 비를 결합한 이름이에요. 학생들이 학교생활 중 필요한 정보를 쉽고 빠르게 확인할 수 있도록 돕는 건국대학교 맞춤형 챗봇 비서라는 의미를 담고있어요.\n 증명서 발급, 버스, 기숙사 등 자주 찾는 정보를 빠르게 안내해줘요.\n궁금한 것이 있으면 언제든지 물어보세요!",
  },

  {
    title: "장학",
    icon: scholarship,

    showInMenu: true,
    page: 0,

    keywords: [
      "장학",
      "장학금",
      "국가장학금",
      "교내장학",
      "교외장학",
      "장학 신청",
    ],

    userText: "장학금 정보 알려주세요",
    botText: "장학금 정보를 안내해드릴게요!",
    description:
      "장학금은 국가장학금, 교내장학금, 교외장학금 등으로 구분됩니다.\n\n자세한 신청 기간과 지급 기준은 학교 장학 공지사항을 확인하는 것이 가장 정확합니다.",
    buttonText: "장학금 바로가기",
    url: "https://www.konkuk.ac.kr",
  },

  {
    title: "학사일정",
    icon: calendar,

    showInMenu: true,
    page: 0,

    keywords: [
      "학사일정",
      "일정",
      "개강",
      "종강",
      "시험",
      "중간고사",
      "기말고사",
      "수강신청 기간",
    ],

    userText: "학사일정 알려주세요",
    botText: "학사일정을 안내해드릴게요!",
    description:
      "건국대학교 학사일정을 확인하고 싶으신가요?\n학사일정에서는 개강일, 수강신청 기간, 중간고사, 기말고사, 종강일 등을 확인할 수 있어요.\n\n해당 페이지로 바로 연결해드릴게요!👇",
    buttonText: "학사일정 바로가기",
    url: "https://www.kku.ac.kr/cms/FR_CON/index.do?MENU_ID=1350&SCH_GBN=SUM&SCH_YEAR=2026",
  },

  {
    title: "교내 연락처",
    icon: certificate,

    showInMenu: true,
    page: 0,

    keywords: [
      "연락처",
      "교내 연락처",
      "전화번호",
      "학사팀",
      "장학팀",
      "학생지원",
      "행정실",
    ],

    userText: "교내 연락처 알려주세요",
    botText: "교내 연락처를 안내해드릴게요!",
    description:
      "주요 부서 연락처는 학교 홈페이지의 교내 연락처 메뉴에서 확인할 수 있습니다.\n\n학사 관련 문의는 학사팀, 장학 관련 문의는 장학 담당 부서로 문의하면 됩니다.",
    buttonText: "교내 연락처 바로가기",
    url: "https://www.konkuk.ac.kr",
  },

  {
    title: "증명서 발급",
    icon: certificate,

    showInMenu: true,
    page: 0,

    keywords: [
      "증명서",
      "증명서 발급",
      "재학증명서",
      "성적증명서",
      "졸업증명서",
      "발급",
      "제증명",
    ],

    userText: "증명서 발급 알려주세요",
    botText: "증명서 발급을 안내해드릴게요!",
    description:
      "재학증명서, 성적증명서, 졸업증명서 등 각종 증명서는 온라인 증명발급 사이트에서 발급할 수 있습니다.",
    buttonText: "증명서 발급 바로가기",
    url: "https://www.certpia.com",
  },

  {
    title: "캠퍼스 맵",
    icon: faq,

    showInMenu: true,
    page: 0,

    keywords: [
      "캠퍼스",
      "캠퍼스맵",
      "지도",
      "건물",
      "위치",
      "강의동",
    ],

    userText: "캠퍼스 맵 알려주세요",
    botText: "캠퍼스 맵을 안내해드릴게요!",
    description:
      "건국대학교 글로컬캠퍼스의 건물 위치와 주요 시설을 캠퍼스 맵에서 확인할 수 있습니다.",
    buttonText: "캠퍼스 맵 바로가기",
    url: "https://www.konkuk.ac.kr",
  },

  {
    title: "버스",
    icon: faq,

    showInMenu: true,
    page: 0,

    keywords: [
      "버스",
      "셔틀",
      "통학버스",
      "시내버스",
      "교통",
      "건국터미널",
      "건터",
    ],

    userText: "버스 정보 알려주세요",
    botText: "버스 정보를 안내해드릴게요!",
    description:
      "학교 주변 버스 정보와 통학 관련 정보는 교통 안내 페이지에서 확인할 수 있습니다.",
    buttonText: "버스 정보 바로가기",
    url: "https://www.konkuk.ac.kr",
  },

  {
    title: "기숙사",
    icon: faq,

    showInMenu: true,
    page: 0,

    keywords: [
      "기숙사",
      "생활관",
      "입사",
      "퇴사",
      "기숙사 연락처",
      "기숙사 홈페이지",
    ],

    userText: "기숙사 정보 알려주세요",
    botText: "기숙사 정보를 안내해드릴게요!",
    description:
      "기숙사 입사 신청, 주요 시설, 연락처, 찾아오시는 길은 생활관 홈페이지에서 확인할 수 있습니다.",
    buttonText: "기숙사 바로가기",
    url: "https://www.konkuk.ac.kr",
  },

  {
    title: "도서관",
    icon: faq,

    showInMenu: true,
    page: 1,

    keywords: [
      "도서관",
      "책",
      "열람실",
      "자료실",
      "도서 대출",
    ],

    userText: "도서관 정보 알려주세요",
    botText: "도서관 정보를 안내해드릴게요!",
    description:
      "도서관 이용 시간, 도서 대출, 열람실 정보는 도서관 홈페이지에서 확인할 수 있습니다.",
    buttonText: "도서관 바로가기",
    url: "https://www.konkuk.ac.kr",
  },

  {
    title: "졸업",
    icon: faq,

    showInMenu: true,
    page: 1,

    keywords: [
      "졸업",
      "졸업요건",
      "졸업학점",
      "졸업 조건",
      "이수학점",
    ],

    userText: "졸업요건 알려주세요",
    botText: "졸업요건을 안내해드릴게요!",
    description:
      "졸업요건은 학과, 입학년도, 전공, 교양 이수 기준에 따라 달라질 수 있습니다.\n\n정확한 졸업 기준은 학과 사무실 또는 학사 안내 자료를 확인하는 것이 좋습니다.",
    buttonText: "졸업요건 바로가기",
    url: "https://www.konkuk.ac.kr",
  },

  {
    title: "수강신청시스템",
    icon: faq,

    showInMenu: true,
    page: 1,

    keywords: [
      "수강신청",
      "수강",
      "수강신청시스템",
      "강의 신청",
      "시간표",
    ],

    userText: "수강신청 정보 알려주세요",
    botText: "수강신청 정보를 안내해드릴게요!",
    description:
      "수강신청은 정해진 기간에 수강신청 시스템을 통해 진행됩니다.\n\n장바구니, 정정기간, 폐강 여부 등을 반드시 확인하세요.",
    buttonText: "수강신청 시스템 바로가기",
    url: "https://www.konkuk.ac.kr",
  },

  {
    title: "TLS",
    icon: faq,

    showInMenu: true,
    page: 1,

    keywords: [
      "tls",
      "이캠퍼스",
      "강의자료",
      "온라인강의",
      "과제",
    ],

    userText: "TLS 알려주세요",
    botText: "TLS를 안내해드릴게요!",
    description:
      "TLS에서는 강의자료, 과제, 온라인 강의, 공지사항 등을 확인할 수 있습니다.",
    buttonText: "TLS 바로가기",
    url: "https://tls.kku.ac.kr/login.php",
  },

  {
    title: "학사정보시스템",
    icon: faq,

    showInMenu: true,
    page: 1,

    keywords: [
      "학사정보",
      "학사정보시스템",
      "종합정보",
      "성적",
      "등록",
      "학적",
    ],

    userText: "학사정보시스템 알려주세요",
    botText: "학사정보시스템을 안내해드릴게요!",
    description:
      "학사정보시스템에서는 성적, 등록, 학적, 수강 정보 등을 확인할 수 있습니다.",
    buttonText: "학사정보시스템 바로가기",
    url: "https://kis.kku.ac.kr/index.do",
  },

  {
    title: "입학처",
    icon: faq,

    showInMenu: true,
    page: 1,

    keywords: [
      "입학",
      "입학처",
      "수시",
      "정시",
      "편입",
      "입시",
    ],

    userText: "입학처 정보 알려주세요",
    botText: "입학처 정보를 안내해드릴게요!",
    description:
      "입학 관련 전형, 모집요강, 합격자 발표 등은 입학처 홈페이지에서 확인할 수 있습니다.",
    buttonText: "입학처 바로가기",
    url: "https://enter.kku.ac.kr/intro/",
  },
];

export const getMenuPages = (): Menu[][] => {
  const visibleMenus = menuData.filter((menu) => menu.showInMenu);

  const pageCount =
    Math.max(...visibleMenus.map((menu) => menu.page ?? 0)) + 1;

  return Array.from({ length: pageCount }, (_, pageIndex) =>
    visibleMenus.filter((menu) => menu.page === pageIndex)
  );
};