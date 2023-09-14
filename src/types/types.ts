export interface IProduct {
    id: number,
    gender: string[],
    name: string,
    price: number,
    image: string,
    type?: string,
    cloth: string,
    quantity?: number;
    size: string[] | string | null;
}

export interface cartItemProps {};

export interface PromoCodeDiscount {
    code: string;
    discountPercentage: number;
}

export interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
    image: string;
    size: string[];
}
  
export interface OrderModalProps {
    onClose: () => void;
    discountedPrice: number;
    originalPrice: number;
}
  
export interface CustomerInfo {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    paymentMethod: "cash" | "card";
}