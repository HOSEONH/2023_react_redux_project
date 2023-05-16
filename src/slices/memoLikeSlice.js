import { createSlice, createSelector } from '@reduxjs/toolkit';

const memoLikeSlice = createSlice({
   name: 'memoLike',
   initialState: [],
   reducers: {
      toggleLike: (state, action) => {
         const memoId = action.payload;
         const memo = state.find((memo) => memo.id === memoId);
         if (memo) {
            memo.isLiked = !memo.isLiked;
         } else {
            state.push({ id: memoId, isLiked: true });
         }
      },
   },
});

export const { toggleLike } = memoLikeSlice.actions;
export default memoLikeSlice.reducer;

export const selectMemoLike = createSelector(
   (state) => state.memo,
   (state) => state.memoLike,
   (memo, memoLike) =>
      memo.filter((memoItem) =>
         memoLike.some((likeItem) => likeItem.id === memoItem.id && likeItem.isLiked)
      )
);