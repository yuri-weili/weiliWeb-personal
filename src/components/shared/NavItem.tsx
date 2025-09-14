// 共享的容器
// 接收一些container数据
interface NavItemProps{
  href: string;
  text: string;
}
export const NavItem = ({ href, text }: NavItemProps) => {
  // 插入类名，传递children
  return (
    <li>
      <a href={href} className="duration-300 font-medium ease-linear hover:text-primary py-3 ">
        {text}
      </a>
    </li>
  );
};