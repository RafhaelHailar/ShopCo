export interface Product {
    id: number;
    image: string;
    name: string;
    rating: number;
    price: number;
    discount: number;
    type: string;
    gallery_image: string[];
    description: string;
    available_colors: string[];
    available_sizes: string[];
}

export interface ProductReview {
    id: number;
    name: string;
    isVerified: boolean;
    comment: string;
    rating: number;
    datePosted: string;
}

export interface ProductOption {
    size: string;
    color: string;
}