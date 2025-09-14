// 共享的容器
// 接收一些container数据
interface BtnLinkProps{
  href: string;
  text: string;
  className?: string;
}
export const BtnLink = ({ href, text ,className=""}: BtnLinkProps) => {
  // 插入类名，传递children
  return (
    <a href={href} className={`px-6 py-3 rounded-full outline-none relative overflow-hidden
                              border bg-violet-600 dark:bg-violet-600 cursor-pointer
                               ${className}`}>
      <span className="relative z-10 text-white">
        {text}
      </span>
    </a>
  );
};