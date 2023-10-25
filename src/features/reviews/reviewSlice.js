import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";

const reviewSlice = createSlice({
    name: "reviews",
    initialState: {
        entities: []
    },
    reducers: {
        reviewAdded(state, action) {
            const { restaurantId, comment } = action.payload;
            state.entities.push({
                id: uuid(),
                restaurantId: restaurantId,
                comment: comment
            })
        },
        reviewRemoved(state, action) {
            state.entities = state.entities.filter((review) => review.id !== action.payload)
        }
    }
})

export const { reviewAdded, reviewRemoved } = reviewSlice.actions

export default reviewSlice.reducer