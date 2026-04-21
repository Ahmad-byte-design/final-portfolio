import { createRoot } from "react-dom/client";
import "./assets/main.css";
import "./assets/global.css";

import { Loading } from "./assets/icons/index.ts";

import { RouterProvider } from "react-router-dom";
import { router } from "./app/route.tsx";
import { Suspense } from "react";
import LottieFiles from "./components/ui/LottieFiles.tsx";

createRoot(document.getElementById("root")!).render(
  <Suspense fallback={<div className="w-full min-h-screen bg-foreground flex items-center justify-center"><LottieFiles animationData={Loading} className="w-1/2" /></div>}>
    <RouterProvider router={router} />
  </Suspense>,
);
