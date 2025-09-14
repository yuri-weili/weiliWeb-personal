import { Layout } from "./components/Layout"
import { AboutMe } from "./components/sections/AboutMe"
import { CTA } from "./components/sections/CallToAction"
import { Hero } from "./components/sections/Hero"
import { Interest } from "./components/sections/Interest"
import { Pricing } from "./components/sections/Pricing"
import { Services } from "./components/sections/Services"

function App() {
  return <Layout title="WeiliWeb">
    {/* 将一些重复使用的组件放进去 */}
    <Hero />
    <Interest />
    <Services />
    <AboutMe />
    <Pricing />
    <CTA/>
  </Layout>
}

export default App
