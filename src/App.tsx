import { Outlet } from "react-router-dom";
import Header from "./components/ui/Header";
// import LiquidEther from "./lib/reactbits/LiquidEther";

function App() {
  return (
    <div className="relative bg-linear-to-l from-black via-foreground to-black text-white max-w-full overflow-hidden">
      {/* the background */}
      <div className="absolute -z-100 inset-0 w-full h-full">
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          {/* <LiquidEther
            colors={["#D4AF37", "#0F0F10", "#E6C767"]}
            mouseForce={20}
            cursorSize={100}
            isViscous={false}
            viscous={30}
            iterationsViscous={32}
            iterationsPoisson={32}
            resolution={0.5}
            isBounce={false}
            autoDemo={true}
            autoSpeed={0.5}
            autoIntensity={2.2}
            takeoverDuration={0.25}
            autoResumeDelay={3000}
            autoRampDuration={0.6}
            className="bg-foreground"
          /> */}
        </div>
      </div>

      <Header />
      <main className="w-10/12 m-auto  min-h-screen  p-2">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
