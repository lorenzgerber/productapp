import { PRODUCTS, SUPPLIERS } from "./dataTypes";

export const initialData = {
    [PRODUCTS]: [
        { id: 1, name: "Trail Shoes", category: "Running", price: 100 },
        { id: 2, name: "Thermal Hat", category: "Running", price: 12 },
        { id: 3, name: "Running Socks", category: "Running", price: 6 },
        { id: 4, name: "Lycra Shorts", category: "Running", price: 25 },
        { id: 5, name: "Stability Shoes", category: "Running", price: 120 }],
    [SUPPLIERS]: [
        { id: 1, name: "Zoom Shoes", city: "London", products: [1, 5] },
        { id: 2, name: "Cosy Gear", city: "New York", products: [2, 3, 4] } ],
}