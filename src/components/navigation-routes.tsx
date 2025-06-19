import { MainRoutes } from "@/lib/helper";
import { cn } from "@/lib/utils";
import { NavLink } from "react-router-dom";

interface NavigationRoutesProps {
  ismobile?: boolean;
}

export const NavigationRoutes = ({ ismobile = false }: NavigationRoutesProps) => {
  return (
    <ul className={cn("flex items-center gap-6", ismobile && "items-start flex-col gap-8")}>
      {MainRoutes.map((route) => (
        <NavLink
          key={route.href}
          to={route.href}
          className={({ isActive }) =>
            cn("text-base text-neutral-600", isActive && "text-neutral-900 font-semibold")
          }
        >
          {route.label}
        </NavLink>
      ))}
    </ul>
  );
};

export default NavigationRoutes;
