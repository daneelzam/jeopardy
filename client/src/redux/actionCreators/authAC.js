
import {AUTH_SUCCESSFULLY,LOGOUT} from "../types";

export const authSuccessAC = (user) => ({type: AUTH_SUCCESSFULLY,payload:user})
export const logoutAC = () => ({type:LOGOUT})