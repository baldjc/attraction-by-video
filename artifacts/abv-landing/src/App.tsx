import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { ThankYou } from "./pages/ThankYou";
import { AuditLanding } from "./pages/AuditLanding";
import { AdminVideo } from "./pages/AdminVideo";
import { WebinarRegistration } from "./pages/WebinarRegistration";
import { WebinarThankYou } from "./pages/WebinarThankYou";
import { VideoPlayer } from "./components/VideoPlayer";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { PlatformShowcase } from "./components/PlatformShowcase";
import { HireAHuman } from "./components/HireAHuman";
import { BeforeAfter } from "./components/BeforeAfter";
import { Testimonials } from "./components/Testimonials";
import { AboutJared } from "./components/AboutJared";
import { FAQ } from "./components/FAQ";
import { AuditReportPreview } from "./components/AuditReportPreview";
import { AuditForm } from "./components/AuditForm";
import { DirectJoin } from "./components/DirectJoin";
import { FinalClose } from "./components/FinalClose";
import { StickyJoinBar } from "./components/StickyJoinBar";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

function LandingPage() {
  return (
    <div className="w-full">
      <Nav />
      <StickyJoinBar />

      {/* 1. Hook — hero with single primary CTA */}
      <Hero />

      {/* 1b. VSL — auto-play video */}
      <section style={{ background: 'var(--bg-dark)', padding: '0 24px 56px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          <VideoPlayer slot="homepage" unmuteLabel="Click to hear Jared" />
        </div>
      </section>

      {/* 2. Empathy — establish the problem / why this matters */}
      <Problem />

      {/* 3. Features — platform showcase (big feature) */}
      <PlatformShowcase />

      {/* 4. Services — done-for-you tiers (feature cards) */}
      <HireAHuman />

      {/* 5. Proof — before/after transformation */}
      <BeforeAfter />

      {/* 6. Social proof — testimonials / reviews */}
      <Testimonials />

      {/* 7. Credibility — about the host */}
      <AboutJared />

      {/* 8. FAQ — reduce hesitation */}
      <FAQ />

      {/* 9. Audit offer — the primary conversion path */}
      <AuditReportPreview />
      <AuditForm />

      {/* 10. Direct join — for visitors ready to commit */}
      <DirectJoin />

      {/* 11. Final CTA wrap-up */}
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
      <Route path="/audit" component={AuditLanding} />
      <Route path="/webinar-registration" component={WebinarRegistration} />
      <Route path="/webinar-thank-you" component={WebinarThankYou} />
      <Route path="/admin/video" component={AdminVideo} />
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
