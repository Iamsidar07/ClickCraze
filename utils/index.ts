import { ProductInCart } from "@/types";


export const calculateCartCosts = (cart: ProductInCart[]) => {
    const SUBTOTAL = cart.reduce((sum: number, curr) => sum + curr.price * curr?.quantity, 0);
    const SHIPPING = 5;
    const WAT = 0.20 * SUBTOTAL;
    const TOTAL = Math.round(SUBTOTAL + SHIPPING + WAT);
    return { SUBTOTAL, SHIPPING, WAT, TOTAL }
}

export const PAGE_SIZE = 2;

export const PRICES = [
    {
        name: '$1 to $50',
        value: '1-50',
    },
    {
        name: '$51 to $200',
        value: '51-200',
    },
    {
        name: '$201 to $1000',
        value: '201-1000',
    },
];

export const RATINGS = [1, 2, 3, 4, 5];

export const SORTS = [
    {
        name: 'Newest Arrivals',
        value: 'newest',
    },
    {
        name: 'Price: Low to High',
        value: 'lowest'
    },
    {
        name: 'Price: High to Low',
        value: 'highest'
    },
    {
        name: 'Rating: High to Low',
        value: 'rating-lowest'
    },
    {
        name: 'Rating: Low to High',
        value: 'rating-highest'
    }
]

export const urlFromParams = (key: string, val: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has(key)) {
        searchParams.set(key, val);
    } else {
        searchParams.append(key, val);
    }
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    return newUrl;
}


export const getOrderQuery = (sort: string) => {
    switch (sort) {
        case "lowest":
            return "price"
        case "highest":
            return "price desc"
        case "rating-lowest":
            return "rating.rate"
        case "rating-highest":
            return "rating.rate desc"

        default:
            return ""
    }
}