// 共享的容器
// 接收一些container数据
interface ButtonProps{
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
export const Button = ({ onClick,children,className=""}: ButtonProps) => {
  // 插入类名，传递children
  return (
    <button onClick={onClick}
      className={`px-6 py-3 rounded-full outline-none cursor-pointer
                  relative overflow-hidden border border-transparent bg-violet-600 ${className}`}>
      {children}
    </button>
  );
};