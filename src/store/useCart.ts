import { toast } from 'sonner';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IProduct } from '../api/products';

export interface IInfo extends IProduct {
    quantity: number;
    size?: string
}

export interface ICart {
    cart: IInfo[];
}




const deCrement = (product: IInfo, cart: IInfo[]) => {
    const res = cart.map((item) => {
        if (item._id == product._id && item.size === product.size) {
            if (product.quantity > 1) {
                return { ...item, quantity: Number(item.quantity) - 1 }
            } else {
                return item;
            }
        }
        return item;
    })
    return res;
}


const inCrement = (product: IInfo, cart: IInfo[]) => {
    const res = cart.map((item) => {
        if (item._id == product._id && item.size === product.size) {
            return { ...item, quantity: Number(item.quantity) + 1 }
        } else {
            return item;
        }
    })
    return res;
}


const remove = (product: IInfo, cart: IInfo[]) => {
    const confirm = window.confirm("Bạn có chắc chắn muốn xóa không");
    if (confirm) {
        const res = cart.filter((item) => item._id == product._id && item.size === product.size)
        return res;
    }
    return cart;
}

interface ICartActions {
    addCart: (newUser: IInfo[]) => void;
    clearCart: () => void;
    onDecrement: (product: IInfo) => void;
    onIncrement: (product: IInfo) => void;
    onRemove: (product: IInfo) => void;
}

const useCartStore = create<ICart & ICartActions>()(
    persist(
        (set) => ({
            cart: [],
            addCart: (newCart: IInfo[]) => {
                set({ cart: newCart })
                toast.success("Thêm đơn hàng thành công!", {
                    position: 'top-center',
                })
            },
            onIncrement: (product: IInfo) => {
                set((state) => ({ cart: inCrement(product, state.cart) }))
            },
            onDecrement: (product: IInfo) => {
                set((state) => ({ cart: deCrement(product, state.cart) }))
            },
            onRemove: (product: IInfo) => {
                set((state) => ({ cart: remove(product, state.cart) }))
            },
            clearCart: () => {
                set({ cart: [] });
            }

        }),
        {
            name: 'cart',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useCartStore;