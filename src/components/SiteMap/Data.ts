export type MenuItem = {
    title: string;
    items?: string[];
};


export type MenuSectionType = {
    title: string;
    categories: MenuItem[];
};

export const menuData: MenuSectionType[] = [
    {
        title: "자료검색",
        categories: [
            {
                title: "통합검색",
                items: ["학술지논문", "외부기관 자료"],
            },
        ],
    },
    {
        title: "자료",
        categories: [
            {
                title: "Browse",
                items: ["Database", "e-Book", "DVD"],
            },
            {
                title: "Collections",
                items: [
                    "핫북",
                    "신착자료",
                    "성균고전 100선",
                    "대한민국학술원 우수학술도서",
                    "한국출판문화산업진흥원 세종도서",
                    "북 큐레이션",
                    "개인문고",
                ],
            },
            {
                title: "SKKU Collections",
                items: ["SKKU 학위논문", "SKKU Archive", "희귀도서"],
            },
        ],
    },
    {
        title: "연구·학습지원",
        categories: [
            {
                title: "정보활용교육",
                items: ["교육안내"],
            },
            {
                title: "논문작성 및 출판지원",
                items: [
                    "참고문헌스타일",
                    "참고문헌관리도구",
                    "논문투고절차",
                    "논문교열서비스",
                    "논문유사도검사",
                    "OA출판지원서비스",
                ],
            },
            {
                title: "연구성과분석",
                items: [],
            },
        ],
    },
    {
        title: "서비스 이용",
        categories: [
            {
                title: "자료이용",
                items: [
                    "대출/반납/연장/예약d",
                    "북사이렌",
                    "자료구입신청",
                    "캠퍼스/타기관 도서대출",
                    "타기관 자료복사",
                    "타대학도서관 방문신청",
                ],
            },
            {
                title: "시설이용",
                items: [
                    "일반열람실",
                    "그룹스터디룸",
                    "공동협업공간",
                    "무선랜",
                    "사물함",
                ],
            },
            {
                title: "이용자별 안내",
                items: [
                    "학부생",
                    "대학원생",
                    "교수",
                    "졸업생",
                    "지역주민/외부등록이용자",
                    "장애학생",
                ],
            },
            {
                title: "모바일서비스",
                items: ["학술정보관 모바일앱", "모바일학생증"],
            },
            {
                title: "Proxy 서비스",
                items: ["전자자료 교외이용"],
            },
        ],
    },
];

export const secondRowMenuData: MenuSectionType[] = [
    {
        title: "도서관안내·알림·문의",
        categories: [
            {
                title: "학술정보관 소개",
                items: [
                    "Ask Us",
                    "FAQ",
                    "서비스별 문의",
                    "도서관 캘린더",
                    "자료기증",
                    "연혁",
                    "조직/직원 안내",
                    "학술정보관 규정/이용지침/서식",
                    "Annual Report",
                    "학술정보관 방문/견학",
                    "이용시간",
                    "층별안내",
                ],
            },
            {
                title: "알림/문의",
                items: ["공지사항"],
            },
        ],
    },
    {
        title: "발전기금",
        categories: [
            {
                title: "발전기금",
                items: ["모금안내", "참여하기", "기부자 예우"],
            },
        ],
    },
    {
        title: "오거서",
        categories: [
            {
                title: "독서프로그램",
                items: [
                    "AI도서추천",
                    "성균고전 100선",
                    "독서인증서",
                    "오거서장학금",
                    "참여프로그램",
                ],
            },
            {
                title: "독서리뷰",
                items: ["베스트리뷰", "리뷰작가", "나의리뷰", "리뷰쓰기"],
            },
            {
                title: "아카이브",
                items: ["아카이브"],
            },
        ],
    },
    {
        title: "My library",
        categories: [
            {
                title: "My Dashboard",
                items: [
                    "대출현황",
                    "딸림대출현황",
                    "예약현황",
                    "위반현황",
                    "개인보관함",
                    "나의 서평",
                    "나의 연체료",
                ],
            },
            {
                title: "개인공지",
                items: [],
            },
            {
                title: "개인정보관리",
                items: [],
            },
            {
                title: "서비스현황",
                items: [
                    "자료구입 신청현황",
                    "캠퍼스간 도서대출 현황",
                    "타기관 도서대출 이용현황",
                    "원문복사 이용현황",
                    "타기관 열람의뢰 현황",
                    "서고도서 신청현황",
                ],
            },
        ],
    },
];