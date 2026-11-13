import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../api/productApi";

const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getProducts();
            return response.data;
        }
        catch (error) {
            const errorMessage = error.response?.data?.error || 'Failed to fetch products';
            return rejectWithValue(errorMessage);
        }   
    }
);

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload.products;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export { fetchProducts };
export default productSlice.reducer;

