import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { userServices } from "@/services/user.service";
import { cookies } from "next/headers";

export default async function Home() {
  // const seation=await authClient.getSession()
const {data}=await  userServices.getseation()
console.log(data)
  return (
    <div className="">
      <Button variant="outline">Click Hear</Button>
    </div>
  );
}
