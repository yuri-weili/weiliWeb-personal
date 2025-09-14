// 共享的容器
// 接收一些container数据
interface TitleProps{
  children: React.ReactNode;
}
export const Title = ({ children}: TitleProps) => {
  // 插入类名，传递children
  return (
    <h1 className="text-heading-1 font-semibold text-2xl sm:text-3xl md:text-4xl" >
      {""}
      {children}
    </h1>
  );
};