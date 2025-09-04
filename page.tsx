import Link from 'next/link';
import { blogPosts } from '.././data/blog';


export default function BlogPage({ searchParams }: { searchParams: { category?: string } }) {
  const category = searchParams?.category;

  const filteredPosts = category
    ? blogPosts.filter(post => post.category.toLowerCase() === category.toLowerCase())
    : blogPosts;


 return ( 
   <main className="container mx-auto">
       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 h-screen">
           <h1 className="text-3xl font-bold mb-8 text-soft-brown">𝐁𝐥𝐨𝐠 𝐏𝐨𝐬𝐭𝐬</h1>
           <div className="mt-4 mb-6 flex justify-center space-x-4">
     <Link href="/blog?category=CSS" className={`text-soft-brown ${!category ? 'font-bold' : ''}`}>CSS</Link>
     <Link href="/blog?category=Tallwind" className={`text-soft-brown ${category === 'website' ? 'font-bold' : ''}`}>Tallwind</Link>
     <Link href="/blog?category=Tips" className={`text-soft-brown ${category === 'mobile' ? 'font-bold' : ''}`}>Tips</Link>
</div>
           <div className="grid gap-6">
               {filteredPosts.map((post) => (
               <div key={post.id} className="border border-[#4E342E] p-4 rounded-lg">
                   <Link href={`/blog/${post.slug}`}>
                   <h2 className="text-xl font-semibold mb-2 text-brown hover:underline">
                       {post.title}
                   </h2>
                   </Link>
                   <p className="text-[#D2B48C] text-sm font-semibold mb-2">{post.date}</p>
                   <p className="text-[#E6D3B3] text-sm font-semibold shadow-black mb-2">{post.excerpt}</p>
               </div>
               ))}
           </div>
       </div>
   </main>
 );
}
