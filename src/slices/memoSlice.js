import { createSlice } from '@reduxjs/toolkit'

export const memoSlice = createSlice({
    name: "memo",
    initialState : [
        {
            id: 1,
            text: "메모입니다",
            date: "2023-05-15",
			isLiked: false
        },
		{
            id: 2,
            text: "간단한 기록을 남길 수 있는 메모입니다",
            date: "2023-05-15",
			isLiked: false
        },
		{
            id: 3,
            text: "하트를 누르면 즐겨찾기로 따로 값이 저장됩니다",
            date: "2023-05-15",
			isLiked: false
        },
    ],
    reducers : {
        addMemoToolkit : (state,action)=>{
            const newMemo = {
                ...action.payload,
                id : id,
				isLiked: false
            }
            state.push(newMemo)
        },
        deleteMemoSplice : (state, action)=>{
            state.splice(action.payload, 1);
        },
		toggleLike : (state, action)=>{
			const memo = state.find(memo => memo.id === action.payload);
			memo.isLiked = !memo.isLiked;
		}
    }
})

let id = 4;

export const { addMemoToolkit, deleteMemoSplice, toggleLike } = memoSlice.actions
export default memoSlice.reducer