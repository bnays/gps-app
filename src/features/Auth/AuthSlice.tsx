import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { loginApi, signupApi } from "../../api/api";

interface LoginProps {
    email: string;
    password: string;
}
interface SignupProps {
    name: string;
    email: string;
    password: string;
}

const initialStateValue = {
    auth: {},
    apiStatus: ""
};

export const login = createAsyncThunk("auth/Login", async (params: LoginProps) => {
    try {
        const response = await axios.post(
            `${loginApi}`,
            {},
            {
                auth: {
                    username: params.email,
                    password: params.password
                }
            }
        );
        return response.data;
    } catch (err: any) {
        return err.response;
    }
});

export const signup = createAsyncThunk("auth/signup", async (params: SignupProps) => {
    try {
        const body = {
            name: params.name,
            email: params.email,
            password: params.password
        };

        const response = await axios.post(`${signupApi}`, body);

        return response.data;
    } catch (err: any) {
        return err.response;
    }
});

export const AuthSlice = createSlice({
    name: "auth",
    initialState: initialStateValue,
    reducers: {
        setAuthUser: (state, action) => {
            state.auth = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.apiStatus = "loading";
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
                localStorage.setItem("accessToken", action.payload.response.message.loginToken);
                state.auth = action.payload;
                state.apiStatus = "done";
            })
            .addCase(signup.pending, (state) => {
                state.apiStatus = "loading";
            })
            .addCase(signup.fulfilled, (state, action: PayloadAction<any>) => {
                state.apiStatus = "done";
            });
    }
});

export const { setAuthUser } = AuthSlice.actions;

export default AuthSlice.reducer;
