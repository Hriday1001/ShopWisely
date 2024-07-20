import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    products : [{
        id : 1,
        details : [{
            title : "",
            price : 0,
            ratings : "",
            no_of_reviews : 0
        }],
        recommendation : ""
        
    }
    ]
}

export const productSlice = createSlice({
    name : "product",
    initialState,
    reducers : {
        addProduct : (state , action) => {
            const product = {
                id : nanoid(),
                details : action.payload,
                recommendation : ""
            }
            state.products.push(product);
        },
        getRecommendation : (state,action) => {
            const product = {
                id : nanoid(),
                details : state.products[state.products.length - 1].details,
                recommendation : action.payload
            }
            state.products.push(product);
        }
    }
})

export const {addProduct,getRecommendation} = productSlice.actions

export const productReducer = productSlice.reducer