import { create } from 'zustand';

export interface IMenu {
    isCollapse: boolean
}
interface IMenuAction {
    setCollapse: () => void
}


const useMenu = create<IMenu & IMenuAction>()(set => ({
    isCollapse: false, // Initial state is set to false
    setCollapse: () => set((state: { isCollapse: boolean; }) => ({ isCollapse: !state.isCollapse })),
}))
export default useMenu;
