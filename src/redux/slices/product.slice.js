import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../components/api/Auth.services"


export const fetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async (productsData, { rejectWithValue }) => {
        try {
            const response = await api.get("/products", productsData);
            const data = response.data
            console.log(data);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const createProducts = createAsyncThunk(
    "products/fetchProducts",
    async (productsData, { rejectWithValue }) => {
        try {
            const response = await api.post("/products", productsData);
            const data = response.data
            console.log(data);
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);



export const deleteProducts = createAsyncThunk(
    "category/fetchProducts",
    async (productsId) => {
        try {
            const response = await api.delete(`/products/${productsId}`);
            const data = response.data
            console.log(data);
            return data;
        } catch (error) {
            throw error;
        }
    }
)



export const updateFetchProducts = createAsyncThunk(
    "products/fetchProducts",
    async ({productsId,values}) => {
        try {
            const response = await api.put(`/products/${productsId}`, values);
            const data = response.data
            console.log(data, 'fetchProducts');
            return data;
        } catch (error) {
            throw error;
        }
    }
);