
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

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
};



const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.5,
    reviewCount: 128,
    image: 'https://picsum.photos/seed/headphones/600/600',
    category: 'Audio',
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Premium  Cable',
    price: 22.99,
    originalPrice: 2222.99,
    rating: 42.5,
    reviewCount: 1128,
    image: 'https://picsum.photos/seed/headphones/600/600',
    category: 'Electric',
    isBestSeller: true,
  },
   {
    id: '3',
    name: 'Smartphone',
    price: 99,
    originalPrice: 24.99,
    rating: 45,
    reviewCount:8,
    image: 'https://picsum.photos/seed/headphones/600/600',
    category: 'Mobile',
    isBestSeller: true,
  },
];

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 15',
    slug: 'getting-started-with-nextjs-15',
    excerpt: 'Learn the basics of Next.js 15 and its new features',
    content: '<p>Next.js 15 introduces several exciting new features...</p>',
    date: '2023-10-15',
  },
  {
    id: '2',
    title: 'Mastering Server Components',
    slug: 'mastering-server-components',
    excerpt: 'A deep dive into React Server Components in Next.js',
    content: '<p>Server Components represent a paradigm shift...</p>',
    date: '2023-11-02',
  },
];

export async function getFeatureProducts():Promise<Product[]>{
    await new Promise((resolve)=>setTimeout(resolve,500));
    return products;
}

export async function getPosts():Promise<BlogPost[]>{
    await new Promise((resolve)=>setTimeout(resolve,500));
    return blogPosts;
}

export async function getPostBySlus(slug:string):Promise<BlogPost|undefined>{
    await new Promise((resolve)=>setTimeout(resolve,500));
    return blogPosts.find((post)=>post.slug === slug);
}

