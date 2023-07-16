export const Profile = {
  name: '곽지현',
  img: 'https://static.wanted.co.kr/images/avatars/2675514/9eca9f72.jpg',
  info: '',
  email: '938@gmail.com',
  github: 'https://github.com/938938',
  blog: 'https://velog.io/@938938/series',
  skill: {
    Language: ['Javascript', 'Typescript'],
    Library: ['ReactJS', 'Redux-toolkit', 'React-Query'],
    Tools: ['Git & Github'],
  },
  etc: [
    {
      name: '웹디자인기능사 취득',
      date: '2022. 03',
    },
    {
      name: 'JLPT - N1 취득',
      date: '2018. 08',
    },
  ],
};

export const Education = [
  {
    name: '코드스테이츠 (Code States) 프론트엔드 부트캠프 43기',
    term: '2022.12 ~ 2023.06 (6개월)',
    learn: [
      '- JavaScript와 React를 중심으로 한 프론트엔드 역량 학습',
      '- 네트워크, 운영체제, CPU 등의 컴퓨터 공학적 지식 습득',
      '- 페어 프로그램을 통한 지속적인 과제 수행 및 코드 리뷰 경험',
      '- 알고리즘 지식 습득 및 이를 이용한 문제 해결 경험',
      '- 팀 프로젝트를 통한 협업 경험 및 커뮤니케이션 역량 향상',
    ],
  },
  {
    name: '디지털 웹디자인/웹 퍼블리셔 과정',
    term: '2021.10 ~ 2022.02 (4개월)',
    learn: [
      '- html, css, jquery 역량 학습',
      '- 포토샵, 일러스트레이터 기능 습득',
      '- 유지 관리가 용이한 코드에 대한 고민 경험',
      '- 사용자 편의를 고려한 UI/UX 구현의 필요성 습득 및 개선 방향 고민 경험',
      '- 웹디자인 기능사 취득',
    ],
  },
];
export const TeamProject = [
  {
    title: 'SILMUL - 당신의 실력을 물어보세요(실물)',
    info: '주니어 개발자를 타겟으로 본인의 포트폴리오를 정리하고 공유하며 피드백을 받아볼 수 있는 사이트',
    skill: [
      'ReactJS',
      'TypeScript',
      'Redux-toolkit',
      'React-query',
      'styled-components',
    ],
    link: {
      github: 'https://github.com/938938/SILMUL',
      site: 'https://silmul.vercel.app/',
      blog: '',
    },
    term: '2023.04 ~ 2023.05 (4주)',
    position: 'FrontEnd',
    list: [
      '- 마이 페이지 담당',
      '- Redux-toolkit 활용 유저 정보 관리',
      '- 회원 탈퇴 기능 및 모달 컴포넌트 구현',
      '- 댓글 CRUD',
      '- 비밀글 기능 적용',
      '- 유저 작성 게시글 정렬 기능 구현',
      '- React-query 활용 댓글, 게시글 무한스크롤 적용',
    ],
  },
  {
    title: 'StackoverFlow Clone',
    info: 'StackoverFlow 사이트 클론 코딩',
    skill: ['ReactJS', 'Redux-toolkit', 'tailwind css', 'eslint'],
    link: {
      github: 'https://github.com/938938/Stackoverflow-Clone',
      site: '',
      blog: '',
    },
    term: '2023.04 (2주)',
    position: 'FrontEnd',
    list: [
      '- 로그인/회원가입 페이지, 유저 페이지 담당',
      '- 정규표현식을 사용한 아이디, 비밀번호 유효성 검사',
      '- 반응형 적용',
      '- React-quill 텍스트 에디터 적용',
      '- Redux-toolkit 활용 로그인 상태 전역 관리',
    ],
  },
];
