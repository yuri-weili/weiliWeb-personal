// 共享的容器
// 接收一些container数据
interface ContainerProps{
  children: React.ReactNode;
  className?: string;
}
export const Container = ({ children, className = "" }: ContainerProps) => {
  // 插入类名，传递children
  return <div className={`mx-auto max-w-7xl w-full px-5 sm:px-8 md:px-14 lg:px-5  ${className}`}
  >
    {children}
  </div>
};