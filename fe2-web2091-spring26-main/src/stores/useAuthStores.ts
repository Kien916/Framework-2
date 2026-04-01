import { create } from "zustand";
interface AuthState{
    user:any;

}
const useAuthStore = create()