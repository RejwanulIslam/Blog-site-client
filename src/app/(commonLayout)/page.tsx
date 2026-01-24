import BlogCard from "@/components/modules/homePage/BlogCard";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { blogService } from "@/services/blog.service";
import { userServices } from "@/services/user.service";
import { BlogPost } from "@/types";
import { cookies } from "next/headers";

export default async function Home() {
  // const seation=await authClient.getSession()
  const { data } = await blogService.getBlogPost({
    isFutured: true,
    serch:""
                
},{
  revalidate:10
  // cache:"no-store"
})
  console.log(data)
  return (
    <div className="">
      <Button variant="outline">Click Hear</Button>
      <div className="grid grid-cols-3 gap-5">
        {
          data?.data?.map((post: BlogPost) => (<BlogCard key={post.id} blogData={post}></BlogCard>))
        }
      </div>
    </div>
  );
}
