import React, { memo } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";

import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import useScrollTop from "./hooks/useScrollTop";

const App = memo(() => {
  useScrollTop();

  return ( 
    <div className="app">
      <AppHeader />
      <div className="content">{useRoutes(routes)}</div>
      <AppFooter />
    </div>
  );
});

export default App;
