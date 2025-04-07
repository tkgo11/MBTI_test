// MBTI 테스트 문항 데이터
const questions = [
    // E/I 문항 (1-10)
    {
        text: "사회 모임 후 기분이 어떠신가요?",
        options: {
            a: { text: "에너지를 받고 활기차게 느낍니다.", type: "E" },
            b: { text: "에너지가 소모되어 혼자만의 시간이 필요합니다.", type: "I" }
        }
    },
    {
        text: "새로운 사람들을 만날 때 어떻게 반응하나요?",
        options: {
            a: { text: "쉽게 다가가 대화를 시작합니다.", type: "E" },
            b: { text: "상대방이 먼저 다가오기를 기다립니다.", type: "I" }
        }
    },
    {
        text: "주말을 보내는 이상적인 방법은 무엇인가요?",
        options: {
            a: { text: "친구들과 약속을 잡거나 사회적 활동에 참여합니다.", type: "E" },
            b: { text: "집에서 책을 읽거나 영화를 보는 등 혼자만의 시간을 즐깁니다.", type: "I" }
        }
    },
    {
        text: "토론이나 회의에서 자신의 의견을 어떻게 표현하나요?",
        options: {
            a: { text: "적극적으로 의견을 공유하고 토론에 참여합니다.", type: "E" },
            b: { text: "다른 사람의 의견을 듣고 내부적으로 생각을 정리한 후에 의견을 제시합니다.", type: "I" }
        }
    },
    {
        text: "여러 사람이 모인 자리에서 당신은 주로 어떤 역할을 하나요?",
        options: {
            a: { text: "대화를 이끌고 분위기를 주도합니다.", type: "E" },
            b: { text: "관찰자의 위치에서 상황을 지켜보며 참여합니다.", type: "I" }
        }
    },
    {
        text: "새로운 환경에 처했을 때 어떻게 느끼나요?",
        options: {
            a: { text: "흥분되고 새로운 가능성을 탐색하는 것을 즐깁니다.", type: "E" },
            b: { text: "조금 긴장되고 익숙해질 때까지 시간이 필요합니다.", type: "I" }
        }
    },
    {
        text: "일을 처리하는 방식에 대해 어떻게 생각하나요?",
        options: {
            a: { text: "다른 사람과 협력하며 아이디어를 나누는 것을 선호합니다.", type: "E" },
            b: { text: "혼자서 집중하여 일하는 것이 더 효율적이라고 느낍니다.", type: "I" }
        }
    },
    {
        text: "스트레스를 받았을 때 어떻게 해소하나요?",
        options: {
            a: { text: "친구나 가족과 대화하며 마음을 털어놓습니다.", type: "E" },
            b: { text: "혼자만의 시간을 가지며 내적으로 문제를 해결합니다.", type: "I" }
        }
    },
    {
        text: "여행을 갈 때 선호하는 스타일은 무엇인가요?",
        options: {
            a: { text: "그룹 여행을 선호하며 다양한 사람들과의 교류를 즐깁니다.", type: "E" },
            b: { text: "혼자 또는 친한 사람과의 소규모 여행을 선호합니다.", type: "I" }
        }
    },
    {
        text: "일상에서 에너지를 얻는 원천은 무엇인가요?",
        options: {
            a: { text: "외부 활동과 사람들과의 상호작용에서 에너지를 얻습니다.", type: "E" },
            b: { text: "내적 사고와 개인적인 활동에서 에너지를 충전합니다.", type: "I" }
        }
    },
    
    // S/N 문항 (11-20)
    {
        text: "새로운 프로젝트를 시작할 때 어떤 접근 방식을 선호하나요?",
        options: {
            a: { text: "검증된 방법과 실제 경험을 바탕으로 계획을 세웁니다.", type: "S" },
            b: { text: "가능성을 탐구하고 창의적인 해결책을 모색합니다.", type: "N" }
        }
    },
    {
        text: "여가 시간에 어떤 활동을 선호하나요?",
        options: {
            a: { text: "실제로 만지고 체험할 수 있는 취미 활동을 선호합니다.", type: "S" },
            b: { text: "상상력을 사용하거나 개념적인 아이디어를 탐구하는 활동을 선호합니다.", type: "N" }
        }
    },
    {
        text: "문제를 해결할 때 어떤 정보를 중요시하나요?",
        options: {
            a: { text: "구체적인 사실과 데이터에 더 많이 의존합니다.", type: "S" },
            b: { text: "전체적인 맥락과 가능한 의미에 더 많이 의존합니다.", type: "N" }
        }
    },
    {
        text: "새로운 사람을 만났을 때 어떤 것을 먼저 주목하나요?",
        options: {
            a: { text: "그 사람의 외모와 행동과 같은 구체적인 특징입니다.", type: "S" },
            b: { text: "그 사람이 주는 전반적인 인상이나 분위기입니다.", type: "N" }
        }
    },
    {
        text: "의사결정을 할 때 어떤 기준을 사용하나요?",
        options: {
            a: { text: "현재 상황과 관련된 구체적인 정보와 경험을 기반으로 합니다.", type: "S" },
            b: { text: "미래의 가능성과 자신의 직관을 기반으로 합니다.", type: "N" }
        }
    },
    {
        text: "책을 읽거나 영화를 볼 때 어떤 유형을 선호하나요?",
        options: {
            a: { text: "현실적이고 구체적인 세부 사항이 잘 묘사된 이야기를 선호합니다.", type: "S" },
            b: { text: "상상력을 자극하고 개념적인 주제를 탐구하는 이야기를 선호합니다.", type: "N" }
        }
    },
    {
        text: "여행을 갈 때 어떤 유형의 경험을 더 선호하나요?",
        options: {
            a: { text: "감각적인 경험과 실제로 체험할 수 있는 활동을 선호합니다.", type: "S" },
            b: { text: "새로운 아이디어와 문화를 탐험하는 것을 선호합니다.", type: "N" }
        }
    },
    {
        text: "회의나 강의에서 정보를 어떻게 기억하나요?",
        options: {
            a: { text: "구체적인 사실, 숫자, 그리고 예시를 잘 기억합니다.", type: "S" },
            b: { text: "주요 개념, 패턴, 그리고 의미를 잘 기억합니다.", type: "N" }
        }
    },
    {
        text: "새로운 아이디어나 프로젝트에 대해 어떻게 생각하나요?",
        options: {
            a: { text: "실제로 적용 가능하고 현실적인 것을 선호합니다.", type: "S" },
            b: { text: "혁신적이고 이론적인 것에 끌립니다.", type: "N" }
        }
    },
    {
        text: "학습할 때 어떤 방식을 더 선호하나요?",
        options: {
            a: { text: "단계별 지침과 구체적인 예제를 통해 배우는 것을 선호합니다.", type: "S" },
            b: { text: "개념적인 틀과 원리를 이해하면서 배우는 것을 선호합니다.", type: "N" }
        }
    },
    
    // T/F 문항 (21-30)
    {
        text: "중대한 결정을 내릴 때 주로 무엇에 의존하나요?",
        options: {
            a: { text: "명확한 기준과 논리적 분석을 사용합니다.", type: "T" },
            b: { text: "개인적 가치와 타인의 감정을 고려합니다.", type: "F" }
        }
    },
    {
        text: "갈등 상황에서 당신의 접근 방식은 어떤가요?",
        options: {
            a: { text: "객관적 사실을 바탕으로 문제를 해결하려 합니다.", type: "T" },
            b: { text: "사람들의 감정을 우선시하고 화합을 추구합니다.", type: "F" }
        }
    },
    {
        text: "친구가 조언을 구할 때 어떻게 반응하나요?",
        options: {
            a: { text: "해결책과 실질적인 조언을 제공합니다.", type: "T" },
            b: { text: "공감하고 감정적 지지를 제공합니다.", type: "F" }
        }
    },
    {
        text: "새로운 사람을 만날 때 어떤 것을 더 중요하게 생각하나요?",
        options: {
            a: { text: "그 사람의 생각과 의견이 논리적인지 여부입니다.", type: "T" },
            b: { text: "그 사람과 감정적으로 얼마나 잘 연결되는지 여부입니다.", type: "F" }
        }
    },
    {
        text: "프로젝트나 과제를 평가할 때 무엇을 더 선호하나요?",
        options: {
            a: { text: "구체적이고 객관적인 피드백을 선호합니다.", type: "T" },
            b: { text: "격려와 긍정적인 강화를 선호합니다.", type: "F" }
        }
    },
    {
        text: "작업을 할 때 어떤 스타일을 선호하나요?",
        options: {
            a: { text: "목표와 효율성에 중점을 둡니다.", type: "T" },
            b: { text: "팀워크와 개인 간의 조화에 중점을 둡니다.", type: "F" }
        }
    },
    {
        text: "문제 해결 시 당신의 접근 방식은 무엇인가요?",
        options: {
            a: { text: "문제를 분석하고 체계적으로 접근합니다.", type: "T" },
            b: { text: "직관과 개인적 경험을 바탕으로 접근합니다.", type: "F" }
        }
    },
    {
        text: "평가를 내릴 때 어떤 기준을 더 중시하나요?",
        options: {
            a: { text: "정확성과 공정성을 중시합니다.", type: "T" },
            b: { text: "관계와 사람들의 필요를 중시합니다.", type: "F" }
        }
    },
    {
        text: "새로운 아이디어나 제안을 받아들일 때 주로 무엇을 고려하나요?",
        options: {
            a: { text: "아이디어가 얼마나 논리적이고 실용적인지를 고려합니다.", type: "T" },
            b: { text: "아이디어가 사람들에게 어떤 영향을 미칠지를 고려합니다.", type: "F" }
        }
    },
    {
        text: "리더십을 발휘할 때 당신의 스타일은 어떤가요?",
        options: {
            a: { text: "결정적이고 목표 지향적입니다.", type: "T" },
            b: { text: "포용적이고 사람들을 동기부여하는 데 중점을 둡니다.", type: "F" }
        }
    },
    
    // J/P 문항 (31-40)
    {
        text: "계획을 세울 때 어떻게 하나요?",
        options: {
            a: { text: "미리 계획을 세우고 그 계획을 따르는 것을 선호합니다.", type: "J" },
            b: { text: "유연하게 대처하고 계획을 변경하는 것에 개방적입니다.", type: "P" }
        }
    },
    {
        text: "마감기한을 관리하는 방식은?",
        options: {
            a: { text: "마감기한 전에 일을 끝내려고 노력합니다.", type: "J" },
            b: { text: "마감기한에 임박해서 작업하는 경향이 있습니다.", type: "P" }
        }
    },
    {
        text: "일상 생활에서 얼마나 조직적인가요?",
        options: {
            a: { text: "일과를 정리하고 체계적으로 유지하는 것을 중요하게 생각합니다.", type: "J" },
            b: { text: "일과가 유동적이며 조직보다는 융통성을 중요시합니다.", type: "P" }
        }
    },
    {
        text: "여가 시간을 어떻게 보내나요?",
        options: {
            a: { text: "여가 활동도 일정에 포함시키고 계획적으로 보냅니다.", type: "J" },
            b: { text: "기분이나 상황에 따라 자발적으로 결정합니다.", type: "P" }
        }
    },
    {
        text: "작업 환경에 대한 선호도는 어떤가요?",
        options: {
            a: { text: "깔끔하고 정돈된 환경에서 일하는 것을 선호합니다.", type: "J" },
            b: { text: "약간의 무질서가 있어도 창의성이 더 자극받는다고 느낍니다.", type: "P" }
        }
    },
    {
        text: "팀 프로젝트에서의 역할은?",
        options: {
            a: { text: "프로젝트의 계획과 진행을 주도하는 역할을 맡습니다.", type: "J" },
            b: { text: "유연하게 다양한 역할을 맡고 상황에 따라 조정합니다.", type: "P" }
        }
    },
    {
        text: "여행 계획을 세울 때 어떤 스타일인가요?",
        options: {
            a: { text: "여행 일정, 숙소, 방문지를 미리 계획합니다.", type: "J" },
            b: { text: "대략적인 계획만 세우고 현지에서 결정하는 것을 선호합니다.", type: "P" }
        }
    },
    {
        text: "변경 사항이나 예기치 않은 일이 발생했을 때 반응은?",
        options: {
            a: { text: "계획이 변경되면 스트레스를 받습니다.", type: "J" },
            b: { text: "새로운 상황에 쉽게 적응하고 유연하게 대처합니다.", type: "P" }
        }
    },
    {
        text: "결정을 내릴 때 어떤 과정을 거치나요?",
        options: {
            a: { text: "가능한 빨리 결정을 내리고 결과에 집중합니다.", type: "J" },
            b: { text: "여러 옵션을 탐색하며 결정을 미루는 경향이 있습니다.", type: "P" }
        }
    },
    {
        text: "일을 처리하는 방식은 어떤가요?",
        options: {
            a: { text: "한 번에 하나의 일을 끝내고 다음 일로 넘어가는 것을 선호합니다.", type: "J" },
            b: { text: "여러 가지 일을 동시에 진행하는 것이 자연스럽습니다.", type: "P" }
        }
    }
];

// MBTI 유형 설명 데이터
const typeDescriptions = {
    "ISTJ": {
        title: "청렴결백한 논리주의자",
        description: "사실을 중시하는 믿음직한 현실주의자입니다. 책임감이 강하고 체계적이며 논리적으로 일을 처리합니다. 전통과 질서를 중요시하며 안정성을 추구합니다."
    },
    "ISFJ": {
        title: "용감한 수호자",
        description: "헌신적이고 따뜻한 수호자입니다. 의무감이 강하고 실용적이며 남을 돕는 것에 기쁨을 느낍니다. 세부사항에 주의를 기울이며 전통과 안정을 중요시합니다."
    },
    "INFJ": {
        title: "선의의 옹호자",
        description: "조용하고 신비로운 통찰력을 가진 이상주의자입니다. 창의적이고 헌신적이며 타인의 감정에 민감합니다. 깊은 통찰력으로 복잡한 문제를 해결하는 능력이 있습니다."
    },
    "INTJ": {
        title: "용의주도한 전략가",
        description: "상상력이 풍부하고 전략적인 사고를 하는 혁신가입니다. 독립적이고 분석적이며 높은 기준을 가지고 있습니다. 장기적인 비전을 세우고 체계적으로 목표를 달성합니다."
    },
    "ISTP": {
        title: "만능 재주꾼",
        description: "대담하고 실용적인 문제 해결사입니다. 논리적이고 효율적이며 위기 상황에서 침착함을 유지합니다. 도구와 기계를 다루는 데 능숙하며 즉흥적인 해결책을 찾아냅니다."
    },
    "ISFP": {
        title: "호기심 많은 예술가",
        description: "조용하고 친절한 감성적 예술가입니다. 현재에 충실하며 자신만의 공간과 자유를 중요시합니다. 타인의 감정에 민감하고 조화로운 환경을 선호합니다."
    },
    "INFP": {
        title: "열정적인 중재자",
        description: "이상적이고 창의적인 몽상가입니다. 깊은 감정과 강한 개인적 가치관을 가지고 있으며 타인의 잠재력을 발견하는 데 능숙합니다. 조화와 진정성을 추구합니다."
    },
    "INTP": {
        title: "논리적인 사색가",
        description: "혁신적인 발명가이자 지식 탐구자입니다. 논리적이고 분석적이며 복잡한 문제를 해결하는 것을 즐깁니다. 독창적인 아이디어를 생성하고 이론적 가능성을 탐구합니다."
    },
    "ESTP": {
        title: "모험을 즐기는 사업가",
        description: "활동적이고 현실적인 문제 해결사입니다. 즉흥적이고 적응력이 뛰어나며 위험을 감수하는 것을 두려워하지 않습니다. 현재에 집중하고 실용적인 해결책을 선호합니다."
    },
    "ESFP": {
        title: "자유로운 영혼의 연예인",
        description: "자발적이고 열정적인 연예인입니다. 사교적이고 낙관적이며 삶을 즐기는 방법을 알고 있습니다. 사람들과 함께하는 것을 좋아하고 현재의 경험을 중요시합니다."
    },
    "ENFP": {
        title: "재기발랄한 활동가",
        description: "열정적이고 창의적인 자유 영혼입니다. 사람들과의 관계에서 에너지를 얻으며 새로운 가능성을 발견하는 것을 좋아합니다. 적응력이 뛰어나고 혁신적인 아이디어로 가득합니다."
    },
    "ENTP": {
        title: "논쟁을 즐기는 변론가",
        description: "영리하고 호기심 많은 사색가입니다. 지적 도전을 즐기며 창의적인 문제 해결 능력이 뛰어납니다. 다양한 관점을 탐구하고 기존의 규칙에 도전하는 것을 좋아합니다."
    },
    "ESTJ": {
        title: "엄격한 관리자",
        description: "실용적이고 사실적인 관리자입니다. 체계적이고 책임감이 강하며 명확한 규칙과 절차를 중요시합니다. 효율성을 추구하고 목표 달성을 위해 노력합니다."
    },
    "ESFJ": {
        title: "사교적인 외교관",
        description: "배려심이 깊고 사교적인 협력자입니다. 조화와 균형을 중요시하며 타인의 필요에 민감합니다. 전통과 사회적 규범을 존중하고 안정적인 환경을 선호합니다."
    },
    "ENFJ": {
        title: "정의로운 사회운동가",
        description: "카리스마 있고 영감을 주는 지도자입니다. 타인의 성장과 발전을 돕는 것에 열정적이며 조화로운 관계를 중요시합니다. 공동체의 가치와 사회적 책임을 강조합니다."
    },
    "ENTJ": {
        title: "대담한 통솔자",
        description: "대담하고 결단력 있는 지도자입니다. 전략적 사고와 장기적 계획 수립에 능숙하며 효율성과 논리를 중요시합니다. 목표 지향적이고 결과를 중시하는 성향이 있습니다."
    }
};

// 사용자 응답 저장 배열
let userAnswers = Array(questions.length).fill(null);
let currentQuestionIndex = 0;

// DOM 요소 참조
const mainPage = document.getElementById('main-page');
const testPage = document.getElementById('test-page');
const resultPage = document.getElementById('result-page');

const startTestBtn = document.getElementById('start-test');
const questionText = document.getElementById('question-text');
const optionA = document.getElementById('option-a');
const optionB = document.getElementById('option-b');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const progressBar = document.getElementById('progress-bar');

const mbtiResult = document.getElementById('mbti-result');
const resultSubtitle = document.getElementById('result-subtitle');
const typeDescriptionText = document.getElementById('type-description-text');
const restartTestBtn = document.getElementById('restart-test');
const shareResultBtn = document.getElementById('share-result');

// 페이지 전환 함수
function showPage(page) {
    // 모든 페이지 숨기기
    mainPage.classList.remove('active');
    testPage.classList.remove('active');
    resultPage.classList.remove('active');
    
    // 선택한 페이지만 표시
    page.classList.add('active');
}

// 테스트 시작 함수
function startTest() {
    showPage(testPage);
    userAnswers = Array(questions.length).fill(null);
    currentQuestionIndex = 0;
    updateQuestion();
    updateProgress();
}

// 질문 업데이트 함수
function updateQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.textContent = question.text;
    optionA.textContent = question.options.a.text;
    optionB.textContent = question.options.b.text;
    
    // 이미 답변한 질문이면 선택 상태 표시
    optionA.classList.remove('selected');
    optionB.classList.remove('selected');
    
    if (userAnswers[currentQuestionIndex] === 'a') {
        optionA.classList.add('selected');
    } else if (userAnswers[currentQuestionIndex] === 'b') {
        optionB.classList.add('selected');
    }
    
    // 이전 버튼 활성화/비활성화
    prevBtn.disabled = currentQuestionIndex === 0;
    
    // 다음 버튼 텍스트 변경 (마지막 질문이면 "결과 보기"로 변경)
    nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? '결과 보기' : '다음';
}

// 진행 상태 업데이트 함수
function updateProgress() {
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    totalQuestionsSpan.textContent = questions.length;
    
    const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
}

// 옵션 선택 함수
function selectOption(option) {
    userAnswers[currentQuestionIndex] = option;
    
    optionA.classList.remove('selected');
    optionB.classList.remove('selected');
    
    if (option === 'a') {
        optionA.classList.add('selected');
    } else {
        optionB.classList.add('selected');
    }
    
    // 자동으로 다음 질문으로 이동 (마지막 질문이 아닌 경우)
    if (currentQuestionIndex < questions.length - 1) {
        setTimeout(() => {
            nextQuestion();
        }, 300);
    }
}

// 다음 질문으로 이동 함수
function nextQuestion() {
    // 현재 질문에 답변하지 않았으면 경고
    if (userAnswers[currentQuestionIndex] === null) {
        alert('질문에 답변해 주세요.');
        return;
    }
    
    // 마지막 질문이면 결과 계산
    if (currentQuestionIndex === questions.length - 1) {
        calculateResult();
        return;
    }
    
    currentQuestionIndex++;
    updateQuestion();
    updateProgress();
}

// 이전 질문으로 이동 함수
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestion();
        updateProgress();
    }
}

// MBTI 결과 계산 함수
function calculateResult() {
    // 각 차원별 점수 계산
    let scores = {
        E: 0, I: 0,
        S: 0, N: 0,
        T: 0, F: 0,
        J: 0, P: 0
    };
    
    // 사용자 응답에 따라 점수 계산
    userAnswers.forEach((answer, index) => {
        if (answer !== null) {
            const selectedType = questions[index].options[answer].type;
            scores[selectedType]++;
        }
    });
    
    // MBTI 유형 결정 (Form M 자가 채점 분류 기준 적용)
    let mbtiType = '';
    
    // E-I 차원
    mbtiType += scores.I >= 10 ? 'I' : 'E';
    
    // S-N 차원
    mbtiType += scores.N >= 13 ? 'N' : 'S';
    
    // T-F 차원
    mbtiType += scores.F >= 15 ? 'F' : 'T';
    
    // J-P 차원
    mbtiType += scores.P >= 12 ? 'P' : 'J';
    
    // 결과 페이지 표시
    showResult(mbtiType, scores);
}

// 결과 표시 함수
function showResult(mbtiType, scores) {
    showPage(resultPage);
    
    // MBTI 유형 표시
 
(Content truncated due to size limit. Use line ranges to read in chunks)