import { BlogPost } from '@/types'
import Link from 'next/link'
import React from 'react'

export default function BlogCard({ blogData }:{blogData:BlogPost}) {
    const { title,
        content,
        thumbnail,
        isFutured,
        tag,
        viws,
        id
        } = blogData
    return (
        <div className="max-w-md rounded-3xl overflow-hidden bg-white shadow-xl hover:shadow-2xl transition duration-300 group">

            {/* Thumbnail */}
            <div className="relative">
                <img
                    src={thumbnail??'.png'}
                    alt={title}
                    className="h-56 w-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Featured Badge */}
                {isFutured && (
                    <span className="absolute top-4 left-4 bg-linear-to-r from-pink-500 to-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                        ⭐ Featured
                    </span>
                )}

                {/* Views */}
                <span className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
                    👁 {viws?.toLocaleString()} views
                </span>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tag?.map((t: string) => (
                        <span
                            key={t}
                            className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full"
                        >
                            #{t}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 leading-snug group-hover:text-purple-600 transition">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 text-sm line-clamp-3">
                    {content}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t">
                   

                    {/* Read More */}
                    <Link href={`/blogs/${id}`} className="text-sm font-semibold text-purple-600 hover:text-purple-800 transition">
                        Read More →
                    </Link>
                </div>
            </div>
        </div>
    )
}
