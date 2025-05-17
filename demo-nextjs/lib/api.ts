type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
};

type BlogPost = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
};

// Mock data
const products: Product[] = [
  {
    id: '1',
    name: 'Premium Headphones',
    price: 199.99,
    description: 'High-quality over-ear headphones with noise cancellation',
    image: '/headphones.jpg',
  },
  {
    id: '2',
    name: 'Wireless Earbuds',
    price: 129.99,
    description: 'True wireless earbuds with 24-hour battery life',
    image: '/earbuds.jpg',
  },
  {
    id: '3',
    name: 'Smart Watch',
    price: 249.99,
    description: 'Feature-rich smartwatch with health monitoring',
    image: '/smartwatch.jpg',
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

