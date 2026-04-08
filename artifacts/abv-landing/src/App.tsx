import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { ThankYou } from "./pages/ThankYou";
import { WebinarRegistration } from "./pages/WebinarRegistration";
import { WebinarThankYou } from "./pages/WebinarThankYou";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { PlatformShowcase } from "./components/PlatformShowcase";
import { HireAHuman } from "./components/HireAHuman";
import { Testimonials } from "./components/Testimonials";
import { AboutJared } from "./components/AboutJared";
import { BeforeAfter } from "./components/BeforeAfter";
import { AuditReportPreview } from "./components/AuditReportPreview";
import { AuditForm } from "./components/AuditForm";
import { DirectJoin } from "./components/DirectJoin";
import { FinalClose } from "./components/FinalClose";
import { ReadyToJoin } from "./components/ReadyToJoin";
import { StickyJoinBar } from "./components/StickyJoinBar";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

function LandingPage() {
  return (
    <div className="w-full">
      <Nav />
      <StickyJoinBar />
      <Hero />
      <Problem />
      <PlatformShowcase />
      <HireAHuman />
      <Testimonials />
      <BeforeAfter />
      <AboutJared />
      <AuditReportPreview />
      <AuditForm />
      <DirectJoin />
      <ReadyToJoin />
      <FinalClose />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/thank-you" component={ThankYou} />
      <Route path="/webinar-registration" component={WebinarRegistration} />
      <Route path="/webinar-thank-you" component={WebinarThankYou} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
