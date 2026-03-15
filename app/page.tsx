import ApiPlayground from "./components/index/ApiPlayground";
import CTA from "./components/index/CTA";
import FeatureGrid from "./components/index/FeatureGrid";
import FloatingFeatures from "./components/index/FloatingFeatures";
import Hero from "./components/index/Hero";
import Pricing from "./components/index/Pricing";
import Testimonials from "./components/index/Testimonials";


export default function Page() {
  return (
    <>
    <main className="pt-16">
      <Hero />
      {/* <FloatingFeatures /> */}
      <FeatureGrid />
      <ApiPlayground />
      <Testimonials />
      <Pricing />
      <CTA />
      </main>
    </>
  )
}