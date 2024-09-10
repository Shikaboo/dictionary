const encyclopedia = {
    inputs : {
        word : '',
        content : '',
        category : ''
    },

    datas: [
        {
            id: 1,
            word: '<!Doctype html>',
            content: 'HTML5 문서 유형 선언으로, 웹 브라우저에게 HTML5 버전의 문서임을 알립니다.',
            category: 'html',
            createData: '2024. 02. 12'
        },
        {
            id: 2,
            word: '<html>',
            content: 'HTML 문서의 루트 요소로 모든 HTML 요소의 컨테이너입니다.',
            category: 'html',
            createData: '2024. 01. 15'
        },
        {
            id: 3,
            word: '<head>',
            content: 'HTML 문서의 메타데이터를 포함하는 구역으로, 스크립트, 스타일시트, 메타 태그 등을 포함합니다.',
            category: 'html',
            createData: '2024. 01. 28'
        },
        {
            id: 4,
            word: '<meta>',
            content: '문서의 메타 정보를 정의하는 태그로, 문자셋, 페이지 설명, 키워드 등을 설정할 수 있습니다.',
            category: 'html',
            createData: '2024. 01. 05'
        },
        {
            id: 5,
            word: 'border',
            content: '요소의 테두리를 설정하는 CSS 속성입니다. 테두리의 스타일, 너비, 색상을 지정할 수 있습니다.',
            category: 'css',
            createData: '2024. 02. 21'
        },
        {
            id: 6,
            word: 'flex-box',
            content: 'CSS의 유연한 박스 레이아웃을 구현하기 위한 모델로, 컨테이너 내 아이템들의 배치, 정렬 등을 효과적으로 제어할 수 있습니다.',
            category: 'css',
            createData: '2024. 01. 20'
        },
        {
            id: 7,
            word: 'grid-box',
            content: '2차원 레이아웃을 위한 CSS 그리드 레이아웃 시스템을 사용하여 요소를 격자 형태로 배치할 수 있습니다.',
            category: 'css',
            createData: '2024. 01. 17'
        },
        {
            id: 8,
            word: '@media',
            content: '반응형 웹 디자인을 구현하는 데 사용되는 CSS의 미디어 쿼리, 다양한 디스플레이 환경에 맞춰 스타일을 조정할 수 있습니다.',
            category: 'css',
            createData: '2024. 03. 01'
        },
        {
            id: 9,
            word: 'Functions',
            content: '자바스크립트에서 하나의 작업을 수행하도록 설계된 코드의 블록으로, 호출을 통해 여러 번 재사용이 가능합니다.',
            category: 'javascript',
            createData: '2024. 03. 22'
        },
        {
            id: 10,
            word: 'Objects',
            content: '자바스크립트에서 객체는 키와 값의 쌍으로 구성된 속성들을 포함할 수 있는 복잡한 데이터 구조입니다.',
            category: 'javascript',
            createData: '2024. 03. 12'
        },
        {
            id: 11,
            word: 'Events',
            content: '웹 페이지에서 발생하는 다양한 사용자 상호작용을 처리하는 방법을 제공하는 자바스크립트의 구성 요소입니다.',
            category: 'javascript',
            createData: '2024. 03. 29'
        },
        {
            id: 12,
            word: 'Strings',
            content: '텍스트 데이터를 나타내는 자바스크립트의 데이터 유형으로, 문자의 시퀀스를 표현할 수 있습니다.',
            category: 'javascript',
            createData: '2024. 04. 05'
        },
        {
            id: 13,
            word: 'Functions',
            content: 'Node.js에서 함수는 모듈 내에서나 모듈 간에 코드를 재사용하도록 도와줍니다.',
            category: 'node',
            createData: '2024. 04. 12'
        },
        {
            id: 14,
            word: 'Objects',
            content: 'Node.js에서 객체를 사용하여 데이터와 그 데이터를 조작할 수 있는 함수를 함께 묶어 관리할 수 있습니다.',
            category: 'node',
            createData: '2024. 04. 15'
        },
        {
            id: 15,
            word: 'Events',
            content: 'Node.js의 이벤트 드리븐 아키텍처는 비동기 작업을 효율적으로 처리할 수 있게 해줍니다.',
            category: 'node',
            createData: '2024. 04. 18'
        },
        {
            id: 16,
            word: 'Strings',
            content: 'Node.js에서 문자열 처리를 위한 다양한 메서드와 모듈을 제공합니다.',
            category: 'node',
            createData: '2024. 04. 22'
        },
        {
            id: 17,
            word: 'Functions',
            content: 'React에서 함수는 컴포넌트를 정의하거나 라이프사이클 이벤트를 관리하는 데 사용됩니다.',
            category: 'react',
            createData: '2024. 05. 10'
        },
        {
            id: 18,
            word: 'Objects',
            content: 'React에서 객체를 사용하여 컴포넌트의 상태와 프로퍼티를 관리하고, UI 업데이트를 트리거할 수 있습니다.',
            category: 'react',
            createData: '2024. 05. 15'
        },
        {
            id: 19,
            word: 'Events',
            content: 'React에서 이벤트를 통해 사용자 상호작용을 감지하고, 해당 데이터로 컴포넌트의 상태를 업데이트할 수 있습니다.',
            category: 'react',
            createData: '2024. 05. 20'
        },
        {
            id: 20,
            word: 'Strings',
            content: 'React에서 문자열은 JSX 내에서 데이터를 표시하거나, 속성을 설정하는 데 사용됩니다.',
            category: 'react',
            createData: '2024. 05. 25'
        },
        {
            id: 21,
            word: 'Strings',
            content: '자바스크립트의 문자열을 사용하여 텍스트 데이터를 처리하고, 웹 페이지 내에서 동적으로 내용을 수정할 수 있습니다.',
            category: 'javascript',
            createData: '2024. 04. 07'
        }
    ]
}

const Reduce = (state, action) => {
    switch(action.type) {
        case 'change':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            };
        case 'create': 
            return {
                inputs: encyclopedia.inputs,
                datas: state.datas.concat(action.data)
            };
        case 'delete': 
            return {
                ...state,
                datas: state.datas.filter((data) => data.id !== action.id)    
            };
        case 'edit': 
            return {
                ...state,
                datas: state.datas.map((data) => 
                    data.id === action.id ? 
                    {
                        ...data,
                        content: action.content
                    } : data
                )
            };
        case 'search':
            if (action.text.trim() === '') {
                return state;  // 빈 문자열이면 상태를 변경하지 않음
            }

            return {
                ...state,
                datas: encyclopedia.datas.filter((data) => {
                    return (
                        data.word.toLowerCase().includes(action.text.toLowerCase()) ||
                        data.content.toLowerCase().includes(action.text.toLowerCase()) ||
                        data.category.toLowerCase().includes(action.text.toLowerCase())
                    );
                })
            };
        default:
            return state;
    }
};

export {
    encyclopedia, 
    Reduce
}