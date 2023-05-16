import { configureStore } from '@reduxjs/toolkit'

import memoSlice from './slices/memoSlice';

export default configureStore({
    reducer: {
        memo: memoSlice
    }
})