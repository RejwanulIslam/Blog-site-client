import { blogService } from "@/services/blog.service"
import { BlogPost } from "@/types"
// export const dynamicParams = false

export async function generateStaticParams() {
    const {data}=await blogService.getBlogPost()
    return data?.data?.map((blog:BlogPost)=>({id:blog.id})).splice(0,3)
}

export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
  const {data:post}=await blogService.getBlogById(id)
    console.log(post)
    return (
        <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Thumbnail */}
                <div className="relative">
                    <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                    />
                    {post.isFutured && (
                        <span className="absolute top-3 left-3 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                            Featured
                        </span>
                    )}
                </div>


                {/* Content */}
                <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-bold text-gray-800 line-clamp-2">
                            {post.title}
                        </h2>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                            {post.status}
                        </span>
                    </div>


                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.content}
                    </p>


                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tag?.map((tag:any) => (
                            <span
                                key={tag}
                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>


                    {/* Footer */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center gap-4">
                            <span>👁 {post.viws}</span>
                            <span>💬 {post._count?.comment}</span>
                        </div>
                        <span>
                            {new Date(post.created_at).toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
