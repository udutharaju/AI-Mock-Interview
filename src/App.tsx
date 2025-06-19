import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import PublicLayout from "./layouts/public-layout";
import AuthenticationLayout from "./layouts/auth-layout";
import HomePage from "./routes/home";
import { SignInPage } from "./routes/sign-in";
import { SignUpPage }from "./routes/sign-up";
import ProtectRoutes from "./layouts/protected-routes";
import MainLayout from "./layouts/main-layout";
// import { Dashboard } from "./routes/dashboard";


const App = () => {
  return (
       <Router>
        <Routes>
          {/* Public routes */}
          <Route element={<PublicLayout />}>
          {/* All public routes coming through publiclayout are rendered here  */}
          <Route index element = {<HomePage />} />
          </Route>
          {/* Authenticate layout */}
          <Route element = {<AuthenticationLayout />}>
          <Route path = "/signin/*" element = {<SignInPage />} />
          <Route path = "/signup/*" element = {<SignUpPage />} />
          </Route>
          {/* Protected routes */}
          <Route
           element = {
           <ProtectRoutes>
            <MainLayout />
            </ProtectRoutes>}>
           {/* add all Protected routes */}
          </Route>
        </Routes>
       </Router>
   
    
   
  );
};

export default App;