import { Container } from "../shared/Container";
import logo from "/assets/icon.svg"
import { NavItem } from "../shared/NavItem";
import { BtnLink } from "../shared/BtnLink";
import { useThemeStore } from "../../store/ThemeStore";


// 创建一个数组，包含Navbar里面的一些链接
export const navItems = [
  // 链接和文本名称
  { href: "#", text: "home" },
  { href: "#services", text: "Services" },
  { href: "#about-me", text: "About me" },
  {href:"#pricing",text:"Pricing"},
]
export const Navbar = () => {
   const { toggleTheme, theme } = useThemeStore();

  return (
    <header className="absolute inset-x-0 top-0 z-50 py-6 ">
    <Container>
      <nav className="w-full flex justify-between gap-6 relative">
        {/* logo */}
        <div className="min-w-max inline-flex relative">
          <a href="/" className="relative flex items-center gap-3">
            <img src={logo} alt="Weili Logo" className="w-10 h-10" />
            <div className="inline-flex text-lg font-semibold text-heading-1">
             未理
            </div>
          </a>
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:items-center 
                        absolute top-full left-0 lg:static lg:top-0 bg-body lg:bg-transparent
                        border-x border-x-box-border lg:border-x-0 lg:h-auto h-0 overflow-hidden">
          <ul className="border-t border-box-border lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0
                        flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-heading-2
                        w-full lg:justify-center lg:items-center">
            {navItems.map((item, key) => (
              // 传入数据navItems数据给NavItem组件
              <NavItem href={ item.href} text={item.text} key={key} />
            ))}
          </ul>
          <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 
                          border-b border-box-border lg:border-0 px-6 lg:px-0">
            <BtnLink text="Get Started" href="#cta" className=""/>    
          </div>
        </div>
        <div className="min-w-max flex items-center gap-x-3">
          <button onClick={toggleTheme} className="outline-hidden flex relative text-heading-2 rounded-full
                             p-2 lg:p-3 border border-box-border cursor-pointer">
          
              {theme === "dark" ? (
                <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
                  >
                <path 
                  strokeLinecap = "round"
                  strokeLinejoin="round"
                    d="m 16.150333,0.03709694 a 0.54958445,0.54958445 0 0 0 -0.732352,0.6430172 C 15.617172,1.504489 15.864493,2.6888512 15.864493,3.4788763 A 10.494316,10.494316 0 0 1 0.7893895,12.917989 0.54958445,0.54958445 0 0 0 0.0089899,13.511493 12.090858,12.090858 0 0 0 12.512041,23.438366 c 6.281747,-0.304975 11.320068,-5.465614 11.483568,-11.75286 A 12.090858,12.090858 0 0 0 16.150292,0.03706421 Z 
                  M 3.930324,4.9407637 a 0.23082547,0.23082547 0 0 0 0.074107,0.010573 1.9565207,1.9565207 0 0 1 1.9510314,1.9510234 0.19647648,0.19647648 0 0 0 0.012215,0.074107 0.29677562,0.29677562 0 0 0 0.5715982,0 0.2253296,0.2253296 0 0 0 0.010573,-0.074107 1.9578946,1.9578946 0 0 1 1.9510235,-1.9510234 0.2253296,0.2253296 0 0 0 0.074103,-0.010573 0.29814954,0.29814954 0 0 0 0,-0.5729827 0.2253296,0.2253296 0 0 0 -0.074103,-0.011394 1.9565207,1.9565207 0 0 1 -1.9510235,-1.9510235 0.2253296,0.2253296 0 0 0 -0.010573,-0.074107 0.29677562,0.29677562 0 0 0 -0.5715982,0 0.19647648,0.19647648 0 0 0 -0.012215,0.074107 1.9551467,1.9551467 0 0 1 -1.9455346,1.9496471 0.23082547,0.23082547 0 0 0 -0.074107,0.011394 0.29814954,0.29814954 0 0 0 0,0.5729823 z"
                  />
                  </svg>
              ) : (
                  <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
                  >
                  <path 
                  strokeLinecap = "round"
                  strokeLinejoin="round"
                  d="m 11.999316,3.995209 a 8.0068438,8.0068438 0 1 0 8.006844,8.006844 8.0068438,8.0068438 0 0 0 -8.006844,-8.006844 z m 0,14.097519 a 6.0906755,6.0906755 0 1 1 6.090677,-6.090675 6.0975185,6.0975185 0 0 1 -6.090677,6.090675 z M 11.041232,0 
m 0.136869,0 h 1.64243 Q 12.9574,0 12.9574,0.136869 v 2.623782 q 0,0.136869 -0.136869,0.136869 h -1.64243 q -0.136869,0 -0.136869,-0.136869 V 0.136869 Q 11.041232,0 11.178101,0 Z M 2.835994,4.191457 m 0.09678,-0.09678 1.161373,-1.161373 q 0.09678,-0.09678 0.193562,0 l 1.855293,1.855293 q 0.09678,0.09678 0,0.193562 L 4.98163,6.143532 q -0.09678,0.09678 -0.193562,0 L 2.932774,4.288238 q -0.09678,-0.09678 0,-0.193561 z 
M 0,11.042602 m 0.136869,0 h 2.623782 q 0.136869,0 0.136869,0.136869 v 1.64243 q 0,0.136869 -0.136869,0.136869 H 0.136869 Q 0,12.95877 0,12.821901 v -1.64243 q 0,-0.136869 0.136869,-0.136869 z m 2.702279,8.765948 m 0.09678,-0.09678 1.855293,-1.855294 q 0.09678,-0.09678 0.193562,0 l 1.161373,1.161373 q 0.09678,0.09678 0,0.193562 l -1.855294,1.855293 q -0.09678,0.09678 -0.193561,0 L 2.935928,19.905331 q -0.09678,-0.09678 0,-0.193561 z m 8.108039,1.39071 m 0.136869,0 h 1.64243 q 0.136869,0 0.136869,0.136869 v 2.623782 Q 12.960135,24 12.823266,24 h -1.64243 q -0.136869,0 -0.136869,-0.136869 v -2.623782 q 0,-0.136869 0.136869,-0.136869 z m 6.580023,-1.989606 m 0.09678,-0.09678 1.161373,-1.161373 q 0.09678,-0.09678 0.193563,0 l 1.855293,1.855292 q 0.09678,0.09678 0,0.193563 l -1.161372,1.161373 q -0.09678,0.09678 -0.193564,0 l -1.855293,-1.855294 q -0.09678,-0.09678 0,-0.193561 z m 3.246209,-7.976231 m 0.136869,0 h 2.62378 q 0.136869,0 0.136869,0.136869 v 1.64243 q 0,0.136869 -0.136869,0.136869 h -2.62378 q -0.136869,0 -0.136869,-0.136869 v -1.64243 q 0,-0.136869 0.136869,-0.136869 z M 17.759104,4.883721 m 0.09678,-0.09678 1.855294,-1.855294 q 0.09678,-0.09678 0.193561,0 l 1.161373,1.161375 q 0.09678,0.09678 0,0.193562 l -1.855294,1.855293 q -0.09678,0.09678 -0.193561,0 L 17.855884,4.980504 q -0.09678,-0.09678 0,-0.193563 z"
                    />
                    </svg>)
                  }
          </button>
        </div>
      </nav>
    </Container>
    </header >);
}