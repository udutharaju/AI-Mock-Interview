import {
  Sheet,
  SheetContent,

  SheetHeader,
  SheetTitle,
  SheetTrigger,
}
from "@/components/ui/sheet"
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react"
import { NavLink } from "react-router-dom";
import NavigationRoutes from "./navigation-routes";
import { useAuth } from "@clerk/clerk-react";

export const ToggleContainer = () => {
  const { userId } = useAuth();

  return (
   <Sheet>
  <SheetTrigger className="block md:hidden">
    <Menu />
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle />
     <nav className="gap-6 flex flex-col items-start">
       <NavigationRoutes />
          {userId && (
            <NavLink
                to={"/generate"}
                className={({ isActive }) =>
                cn("text-base text-neutral-600",
                isActive && "text-neutral-900 font-semibold")
                }
              >
              Take An Interview
           </NavLink>
          )}
     </nav>
    </SheetHeader>
  </SheetContent>
</Sheet>
  )
}
