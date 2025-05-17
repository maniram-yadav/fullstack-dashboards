// import Image from "next/image";
// import Link from "next/link";

type Product = {
    id:string;
    name:string;
    price:number;
    originalPrice?:number;
    rating:number;
    reviewCount:number;
    image:string;
    category?:string;
    isNew?:boolean;
    isBestSeller?:boolean;
}

type ProductCardProps = {
    product:Product;
    className?:string;
    onAddToCart?:(productId:string) => void;
    onAddToWishlist?:(productId:string)=>void;

}
export default function ProductCard({
    product,
    className='',
}:ProductCardProps){
    
    return (
        <div className={className}>
                <div>{product.id}</div>
        </div>
    
    );
}