import FAQ from "../assets/FAQ.png";
import Scholarships from "../assets/Scholarships.png";
import AcademicCalendar from "../assets/AcademicCalendar.png";
import CampusContacts from "../assets/CampusContacts.png";
import CertificateIssuance from "../assets/CertificateIssuance.png";
import CampusMap from "../assets/CampusMap.png";
import ShuttleBus from "../assets/ShuttleBus.png";
import Dormitory from "../assets/Dormitory.png";
import Library from "../assets/Library.png";
import GraduationRequirements from "../assets/GraduationRequirements.png";
import TLS from "../assets/TLS.png";
import AcademicInformationSystem from "../assets/AcademicInformationSystem.png";
import ku_logo from "../assets/ku_logo.png";
import CourseRegistrationSystem from "../assets/CourseRegistration.png";
import type { Menu } from "../types/Chat";

export const menuData: Menu[] = [
  {
    title: "FAQ/챗봇소개",
    icon: FAQ,

    showInMenu: true,
    page: 0,

    keywords: ["faq", "챗봇", "챗봇소개", "쿠비", "사용법", "뭐야", "소개"],

    userText: "챗봇 소개해주세요",
    botText: "쿠비를 소개해드릴게요!",
    description:
      "쿠비는 건국대학교 마스코트인 쿠와 비서의 비를 결합한 이름이에요. 학생들이 학교생활 중 필요한 정보를 쉽고 빠르게 확인할 수 있도록 돕는 건국대학교 맞춤형 챗봇 비서라는 의미를 담고있어요.\n 증명서 발급, 버스, 기숙사 등 자주 찾는 정보를 빠르게 안내해줘요.\n궁금한 것이 있으면 언제든지 물어보세요!",
  },

  {
    title: "장학",
    icon: Scholarships,

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
    botText: "장학금 정보를 안내해드릴게요😄",
    description:
      "장학금은 국가장학금, 교내장학금, 교외장학금 등으로 구분됩니다.\n\n아래버튼에서 안내를 원하는 내용을 선택해주세요!👇",
    buttons: [
      {
        text: "장학금 안내",
        url: "https://www.kku.ac.kr/cms/FR_CON/index.do?MENU_ID=1080",
      },
      {
        text: "장학금 공지",
        url: "https://www.kku.ac.kr/cms/FR_CON/index.do?MENU_ID=1750&CONTENTS_NO=2&P_TAB_NO=2#page1",
      },
      {
        text: "국가 장학금",
        url: "https://www.kosaf.go.kr/ko/main.do?currentMain=1",
      },
    ],
  },

  {
    title: "학사일정",
    icon: AcademicCalendar,

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
    botText: "학사일정을 안내해드릴게요!😄",
    description:
      "학사일정 페이지에서 등록, 휴·복학, 수강신청 등 학사일정을 확인할 수 있어요!👇",
    buttons: [
      {
        text: "학사일정",
        url: "https://www.kku.ac.kr/cms/FR_CON/index.do?MENU_ID=1350&SCH_GBN=CAL&SCH_YEAR=2026",
      },
    ],
  },

  {
    title: "교내 연락처",
    icon: CampusContacts,

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
    botText: "교내 연락처를 안내해 드릴게요!😄",
    description:
      "☎ 대표 번호 : 043-840-3114\n\n부서별연락처는 교내주요연락처 버튼을 눌러 확인해보세요!👇",
    buttons: [
      {
        text: "교내 연락처",
        url: "https://www.kku.ac.kr/cms/FR_CON/index.do?MENU_ID=650&CONTENTS_NO=3&P_TAB_NO=3",
      },
    ],
  },

  {
    title: "증명서 발급",
    icon: CertificateIssuance,

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
    botText: "증명서 발급을 안내해드릴게요!😄",
    description:
      "- 인터넷 발급\n- 우편발급\n- 팩스민원 발급\n- 카카오톡 전자증명서 발급\n- [교내] 자동발급기 발급\n- [교외] 창구 발급\n\n자세한 발급 절차와 유의사항은 상세 페이지를 확인하세요👇",
    buttons: [
      {
        text: "증명서 발급",
        url: "https://www.kku.ac.kr/cms/FR_CON/index.do?MENU_ID=650&CONTENTS_NO=3&P_TAB_NO=3#a",
      },
    ],
  },

  {
    title: "캠퍼스 맵",
    icon: CampusMap,

    showInMenu: true,
    page: 0,

    keywords: ["캠퍼스", "캠퍼스맵", "지도", "건물", "위치", "강의동"],

    userText: "캠퍼스 맵 알려주세요",
    botText: "건국대학교 글로컬캠퍼스의 컴퍼스맵을 안내해드릴게요!😄",
    description: "건물 및 편의시설의 위치를 확인할 수 있어요!👇",
    buttons: [
      {
        text: "캠퍼스 맵",
        url: "https://www.kku.ac.kr/campusMap.do?MENU_ID=670",
      },
    ],
  },

  {
    title: "통학교통",
    icon: ShuttleBus,

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
      "통학",
    ],

    userText: "통학교통 알려주세요",
    botText: "통학교통을 안내해드릴게요!😄",
    description:
      "운행 시간표와 운행코스 등 자세한 내용은 아래 버튼을 눌러 확인하세요!👇",
    buttons: [
      {
        text: "통학교통",
        url: "https://www.kku.ac.kr/cms/FR_CON/index.do?MENU_ID=1090&CONTENTS_NO=2&P_TAB_NO=1",
      },
    ],
  },

  {
    title: "기숙사",
    icon: Dormitory,

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
    botText: "기숙사 정보를 알려드릴게요!😄",
    description:
      "건국대학교 글로컬캠퍼스의 기숙사인 모시래 학사와 해오름 학사는 학생들이 학업에 열중할 수 있도록 기본적인 주거환경과 편의시설을 제공하고 있습니다.\n\n자세한 내용은 아래 버튼을 눌러 확인하세요!👇",
    buttons: [
      {
        text: "모시래 학사",
        url: "https://dorm.kku.ac.kr/main.do?dormType=M",
      },
      {
        text: "해오름 학사",
        url: "https://dorm.kku.ac.kr/main.do?dormType=H",
      },
    ],
  },

  {
    title: "도서관",
    icon: Library,

    showInMenu: true,
    page: 1,

    keywords: ["도서관", "책", "열람실", "자료실", "도서 대출"],

    userText: "도서관 정보 알려주세요",
    botText: "도서관 정보를 안내해드릴게요!😄",
    description:
      "중원도서관은 1980년 건국대학교 충주캠퍼스의 설립과 더불어 건국대학교 중앙도서관 충주분관으로 개관하였으며 1989년 중원도서관으로 명칭을 변경하였습니다.본 도서관은 대학의 교육이념인 ‘성, 신, 의’를 이루기 위하여 학술정보의 수집·정리·분석·보존·축적, 연구 및 학습활동에 대한 원활한 지원, 다른 도서관과의 협력과 정보망을 통한 학술자료의 제공, 도서관 이용의 체계적 지도로 교수와 학생의 연구 및 학습 활동 강화, 휴식공간으로서의 역할 등 다양한 서비스를 제공하고있습니다.",
    buttons: [
      {
        text: "도서관",
        url: "https://lib.kku.ac.kr/#/",
      },
    ],
  },

  {
    title: "졸업 요건",
    icon: GraduationRequirements,

    showInMenu: true,
    page: 1,

    keywords: ["졸업", "졸업요건", "졸업학점", "졸업 조건", "이수학점"],

    userText: "졸업요건 알려주세요",
    botText: "졸업요건을 안내해드릴게요!😄",
    description:
      "학사과정을 졸업하기 위해서는 졸업요구학점의 이수 등 학교규칙이 정하는 졸업요건을 충족해야 합니다.\n\nKU글로컬혁신대학(라이프설계융합학과,첨단산업융합학과) : 120학점\n인문사회융합대학(유아교육과 제외) : 124학점\n의료생명대학(사회복지학과) : 124학점\n디자인대학 : 132학점\n과학기술대학 : 132학점\n의료생명대학(간호학과, 사회복지학과 제외) : 132학점\n의료생명대학(간호학과) : 135학점\n인문사회융합대학(유아교육과) : 140학점\n의과대학 : 233학점\n\n아래 버튼을 눌러 졸업요건별 상세한 내용을 확인해보세요!👇",
    buttons: [
      {
        text: "졸업 요건",
        url: "https://www.kku.ac.kr/cms/FR_CON/index.do?MENU_ID=1320&CONTENTS_NO=5&P_TAB_NO=5",
      },
    ],
  },

  {
    title: "수강신청시스템",
    icon: CourseRegistrationSystem,

    showInMenu: true,
    page: 1,

    keywords: ["수강신청", "수강", "수강신청시스템", "강의 신청", "시간표"],

    userText: "수강신청 정보 알려주세요",
    botText: "수강신청 정보를 안내해드릴게요!😄",
    description:
      "기간 : 2월중(1학기), 5월말(여름계절), 8월중(2학기), 11월말(겨울계절)\n\n아래 버튼을 눌러 상세일정을 확인해보세요! 👇",
    buttons: [
      {
        text: "상세 일정",
        url: "https://www.kku.ac.kr/cms/FR_CON/BoardView.do?MENU_ID=1740&CONTENTS_NO=&SITE_NO=2&P_TAB_NO=&TAB_NO=&BOARD_SEQ=18&BOARD_CATEGORY_NO=&BBS_SEQ=120079&pageNo=1",
      },
      {
        text: "수강신청 시스템",
        url: "https://kupis.kku.ac.kr/wsugang/",
      },
    ],
  },

  {
    title: "TLS",
    icon: TLS,

    showInMenu: true,
    page: 1,

    keywords: ["tls", "이캠퍼스", "강의자료", "온라인강의", "과제"],

    userText: "TLS 알려주세요",
    botText: "TLS에 대해 안내해 드릴게요!😄",
    description:
      "TLS는 통합 교육포털 플랫폼으로서, 학생들에게 학습 환경을 제공하고 교수님들의 강의 활동을 지원하는 교육정보시스템입니다.\n\n아래 버튼을 눌러 궁금한 내용을 확인해보세요!👇",
    buttons: [
      {
        text: "TLS",
        url: "https://tls.kku.ac.kr/login.php",
      },
    ],
  },

  {
    title: "학사정보시스템",
    icon: AcademicInformationSystem,

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
    botText: "학사정보시스템에 대해 안내해 드릴게요!😄",
    description:
      "학사정보시스템에서는 성적, 등록, 학적, 수강 정보 등 학업과 관련된 정보들을 확인할 수 있습니다.\n\n아래 버튼을 눌러 궁금한 내용을 확인해보세요!👇",
    buttons: [
      {
        text: "학사정보시스템",
        url: "https://kis.kku.ac.kr/index.do",
      },
    ],
  },

  {
    title: "입학처",
    icon: ku_logo,

    showInMenu: true,
    page: 1,

    keywords: ["입학", "입학처", "수시", "정시", "편입", "입시"],

    userText: "입학처 정보 알려주세요",
    botText: "입학처 정보를 안내해 드릴게요!😄",
    description:
      "입학처에서는 입학 관련 전형, 모집 요강, 합격자 발표 등 입학과 관련된 정보들을 확인 할 수 있습니다.",
    buttons: [
      {
        text: "건국대학교 글로컬캠퍼스 입학처",
        url: "https://enter.kku.ac.kr/intro/",
      },
    ],
  },
];

export const getMenuPages = (): Menu[][] => {
  const visibleMenus = menuData.filter((menu) => menu.showInMenu);

  const pageCount = Math.max(...visibleMenus.map((menu) => menu.page ?? 0)) + 1;

  return Array.from({ length: pageCount }, (_, pageIndex) =>
    visibleMenus.filter((menu) => menu.page === pageIndex),
  );
};
