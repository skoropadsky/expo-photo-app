import { createSlice } from "@reduxjs/toolkit"

import { IPortfolio, setCurrentPortfolioId, getPortfolios } from "@/store/portfolios/actions"

interface IInitialState {
    isLoading: boolean
    currentPortfolioId: string
    userPortfolios: IPortfolio[]
    error: string
}

const initialState: IInitialState = {
    isLoading: false,
    currentPortfolioId: "",
    userPortfolios: [],
    error: "",
}

const portfoliosSlice = createSlice({
    name: "portfolios",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(setCurrentPortfolioId, (state, action) => {
                state.currentPortfolioId = action.payload
            })
            .addCase(getPortfolios.pending.type, (state: IInitialState) => {
                state.isLoading = true
            })
            .addCase(getPortfolios.fulfilled.type, (state: IInitialState, { payload }: any) => {
                state.isLoading = false
                state.userPortfolios = payload.data
            })
            .addCase(getPortfolios.rejected.type, (state: IInitialState, { payload }: any) => {
                state.isLoading = false
                state.error = payload
            })
    },
})

export default portfoliosSlice.reducer
