
import { Product, ProductInCart } from '@/types';
import create from 'zustand';
import { devtools, persist } from "zustand/middleware"
interface UseCartProps {
    currentAppliedFilters: string[],
    products: Product[],
    cart: ProductInCart[],
    isOpenModel: false,
    setcurrentAppliedFilters: (currentFilters: string[]) => void;
    setProducts: (products: Product[]) => void;
    setIsOpenModel: () => void;
    addItemToCart: (item: Product) => void;
    removeItemFromCart: (itemId: string) => void;
    clearCart: () => void;
    decreaseQuantity: (itemId: string) => void;
}
const useCart = create<UseCartProps>(
    devtools(
        (set) => ({
            currentAppliedFilters: [],
            products: [],
            cart: [],
            isOpenModel: false,

            setcurrentAppliedFilters: (currentFilters) => {
                set((state) => ({
                    ...state,
                    currentAppliedFilters: currentFilters,
                }))
            },

            setProducts: (products) => {
                set((state) => ({
                    ...state,
                    products
                }))
            },

            setIsOpenModel: () => {
                set((state: any) => ({
                    ...state,
                    isOpenModel: !state.isOpenModel
                }))
            },
            addItemToCart: (item) => {
                set((state) => {
                    const newItem = state.cart.find((product) => product._id === item._id);
                    if (newItem) {
                        newItem.quantity = newItem.quantity + 1;
                        return ({
                            ...state,
                            cart: [...state.cart]
                        })
                    }
                    return ({
                        ...state,
                        cart: [...state.cart, { ...item, quantity: 1 }]
                    })
                })
            },
            removeItemFromCart: (itemId) => {
                set((state) => ({
                    ...state,
                    cart: state.cart.filter((product) => product._id !== itemId)
                }))
            },
            clearCart: () => {
                set(state => ({
                    ...state,
                    cart: []
                }))
            },
            decreaseQuantity: (itemId) => {
                set(state => {

                    return ({
                        ...state,
                        cart: state.cart.map(product => {
                            if (product._id === itemId && product.quantity > 1) {
                                product.quantity = product.quantity - 1;
                            }
                            return product;
                        })
                    })
                })
            }
        }),


    )
)

export default useCart;