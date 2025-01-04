import { createAction, createAsyncThunk } from "@reduxjs/toolkit"

import portfoliosMockData from "@/store/mock/portfoliosMock.json"

export interface IPortfolio {
    id: string
    title: string
    description: string
    currencyId: string
    avatarURL: string
    color: string
}

interface GetPortfoliosParams {
    userId: string
}

export const setCurrentPortfolioId = createAction<string>("portfolios/setCurrentPortfolioId")

export const getPortfolios = createAsyncThunk(
    "portfolios/getPortfolios",
    async ({ userId, ...params }: GetPortfoliosParams, thunkAPI) => {
        try {
            // const response = await new axios.get(`/front/account/${companyId}/list`, { params })

            return { data: portfoliosMockData }
        } catch (error) {
            return thunkAPI.rejectWithValue(error)
        }
    }
)
