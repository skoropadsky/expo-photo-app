import { configureStore } from "@reduxjs/toolkit"

import portfoliosReducer from "./portfolios"

const store = configureStore({
    reducer: {
        portfolios: portfoliosReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    },
})

export default store

// Infer the RootState and AppDispatch types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
