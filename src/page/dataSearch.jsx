import { useState, useContext } from 'react';
import { editContext } from "../App";

const DataSearch = () => {
    const { searchWord } = useContext(editContext);
    const [searchData, setSearchData] = useState('');

    // 입력 필드 변경 핸들러
    function onChangeHandler(e) {
        setSearchData(e.target.value);
    }

    // 검색 버튼 클릭 핸들러
    function searchBtn() {
        if (searchData.trim() === '') {
            // 입력 필드가 비어있다면 검색을 실행하지 않음
            return;
        }
        searchWord(searchData);
    }

    return (
        <div className='search_wrap'>
            <input 
                type="text" 
                value={searchData} 
                onChange={onChangeHandler} 
                placeholder="Search by word, content, or category" 
            />
            <button onClick={searchBtn}>검색</button>
        </div>
    );
};

export default DataSearch;
