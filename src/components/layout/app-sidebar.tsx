import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { SwitchCamera } from "lucide-react"
import { adminRoutes } from "@/routes/adminRoutes"
import { UNDERSCORE_NOT_FOUND_ROUTE_ENTRY } from "next/dist/shared/lib/entry-constants"
import { userRoutes } from "@/routes/userRoutes"
import { Route, userRole } from "@/types"

// This is sample data.


export function AppSidebar({ user, ...props }: { user: userRole & React.ComponentProps<typeof Sidebar> }) {

  let routes: Route[] = []
  switch (user.role) {
    case "admin": routes = adminRoutes
      break;
    case "user": routes = userRoutes

      break;

    default: routes = []
      break;
  }
  return (
    <Sidebar {...props}>

      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {routes.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
