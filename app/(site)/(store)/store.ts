
import create from 'zustand';

const useCart = create(
    (set, get) => ({
        currentAppliedFilters: [],
        products: [],
        cart: [],
        product: {},
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
            set(state => ({
                ...state,
                isOpenModel: !state.isOpenModel
            }))
        },
        addItemToCart: (item) => {
            set(state => {
                const newItem = state.cart.find(product => product._id === item._id);
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
            set(state => ({
                ...state,
                cart: state.cart.filter(product => product._id !== itemId)
            }))
        },
        clearCart: () => {
            set(state => ({
                ...state,
                cart: []
            }))
        },
        setProduct: (product) => {
            set(state => ({
                ...state,
                product: product
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
        },
    }),
)

export default useCart;