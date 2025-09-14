// 共享的容器
// 接收一些container数据
interface ParagraphProps{
  children: React.ReactNode;
  className?: string;
}
export const Paragraph = ({ children, className = "" }: ParagraphProps) => {
  // 插入类名，传递children
  return (
    <p className={`text-heading-3 md:text-lg ${className}`}>{ children}</p>
  );
};