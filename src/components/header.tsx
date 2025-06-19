import { useAuth } from "@clerk/clerk-react";
import { Container } from "@/components/container";
import { cn } from "@/lib/utils";
import LogoContainer from "./logo-container";
import NavigationRoutes from "./navigation-routes";
import { NavLink } from "react-router-dom";
import { ToggleContainer } from "./toggle-container";
import { ProfileContaner } from "./profile-contaner";


const Header = () => { 
  const { userId } = useAuth();

  return <header className={cn("w-full border-b duration-150 translate-all ease-in-out")}>
    <Container>
      <div className="flex items-center gap-4 w-full">
        {/* {logo section} */}
        <LogoContainer />
        {/* navigation section */}
        <nav className="hidden md:flex items-center gap-3">
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
        
        {/* profile section  */}

          <div className="ml-auto flex items-center gap-6"></div>
          {/* profile section  */}
          <ProfileContaner />

          {/* mobile toggle section  */}
          <ToggleContainer />


      </div>
    </Container>
  </header>
};

export default Header