import { useEffect } from "react";
import { Footer } from "./elements/Footer";
import { Navbar } from "./elements/Navbar";

// 这个组件需要从父组件App.tsx接收的数据
interface LayoutProps{
  //网页标题
  title: string;
  //接收父组件传下来的react项目
  children: React.ReactNode;
}
export const Layout = ({title,children}: LayoutProps) => {
  // useEffect钩子在安装组件时运行一些代码,当title改变时运行
  useEffect(() => {
    document.title = title;
  },[title])
  return (<>
    <Navbar />
    {/* 包含子元素 */}
    <main className="flex flex-col gap-y-20 md:gap-y-32 overflow-hidden">{children}</main>
  
    <Footer/>
  </>);
}