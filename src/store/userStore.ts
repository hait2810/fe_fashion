import { toast } from 'sonner';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface IUser {
  _id: string;
  username: string;
  fullname: string;
  role: string;
  access_token: string;
  avatar: string;
}

interface IUserActions {
  data: IUser | null;
  setUser: (newUser: IUser) => void;
  clearUser: () => void;
}

const useUserStore = create<IUserActions>()(
  persist(
    (set) => ({
      data: null,
      setUser: (newUser: IUser) => set({ data: newUser }),
      clearUser: () => {
        localStorage.removeItem('user');
        toast.success('Logout success!!!');
        setTimeout(() => {
          window.location.href = '/';
        }, 1000); 
      },
    }),
    {
      name: 'user',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
