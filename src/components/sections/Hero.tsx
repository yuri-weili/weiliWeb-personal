import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import weili from "/assets/weili.jpg"
import { Button } from "../shared/Button";
import { Numbers } from "./Numbers";
//import Image from ""


export const Hero = () => {
  return <section className="relative pt-32 lg:pt-36">
    {""}
    <Container className="flex flex-col lg:flex-row gap-10 lg:gap-12 r">
      <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0">
        <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24
                      rotate-90 skew-x-12 rounded-3xl bg-gradient-to-r from-blue-600
                      to-violet-600 blur-xl opacity-60 lg:opacity-95 lg:block hidden">
        </span>
        <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-primary
                        blur-xl opacity-80 ">
          {""}
        </span>
      </div>

      <div className="realtive flex flex-col items-center text-center 
                      lg:text-left lg:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto
                      lg:mx-0 lg:flex-1 lg:w-1/2">
        <h1 className="text-heading-1 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold">
          {""}
          text out me <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600
                      to-violet-600 ml-2">AI</span>
        </h1>
        <Paragraph className="mt-8">
          即将升上初二的朝日奈未来，怀着对魔法使的无限憧憬，在春假的一天，与来自魔法界的十六夜理子相遇。未来的热情开朗与理子的沉稳努力，碰撞出奇妙的火花。
          起初，理子因寻找 “波纹翡翠” 来到人类世界，却遭遇暗之魔法使的部下巴提。在与欲望怪的战斗中，未来和理子携手毛芙伦，喊出 “Cure Up・Rapapa! ”，变身成为传说中的魔法使 “光之美少女”，从此开启了并肩作战的冒险之旅。
          在魔法学校学习期间，未来对理子的目标和能力满怀憧憬，而理子也逐渐被未来的乐观所感染。她们一起经历了无数次的战斗，在这个过程中，彼此的信任与依赖不断加深。两人经常一起练习魔法，一起探索魔法世界的奥秘，她们的身影出现在魔法学校的各个角落，成为了形影不离的伙伴。
          一次，在做蛋糕的过程中，未来提议为两人相遇的纪念日做蛋糕，理子虽无奈但还是答应了。制作时，未来搅拌过猛，蛋糕糊喷到理子脸上，未来调皮地尝了理子脸上的蛋糕糊，理子害羞反击，用蛋糕糊点在未来鼻尖。最后理子手把手教未来挤奶油，两人的互动满是甜蜜。这不仅是她们日常生活的一个片段，更展现出她们之间超越友情的深厚情感。
          然而，天下无不散之筵席，随着威胁的解除，她们不得不面临分别。未来回到人类世界，理子则返回魔法界，一个成为大学生，一个成为魔法学校老师。但命运让她们再次重逢，当新的危机出现，她们毫不犹豫地再次携手，变身光之美少女，共同对抗黑暗势力。此时，她们的感情更加坚定，彼此的默契也达到了新的高度，为守护魔法界和人类世界全力以赴。未来与理子的感情从相遇时的新奇，到并肩作战的信任，再到分别后的牵挂以及重逢后的坚定，成为了《魔法使光之美少女》中一段令人难以忘怀的动人篇章 。
        </Paragraph>
        {/* 发送邮件信息 */}
        <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
          <div className="flex sm:flex-row  flex-col gap-5 w-full">
            <form action="#" className="py-1 pl-6 w-full pr-1 flex gap-3 items-center 
                                        text-heading-3 shadow-lg shadow-box-shadow border border-box-border
                                        bg-box-bg rounded-full ease-linear focus-within:bg-body
                                        focus-within:border-primary">
              <span className="min-w-max pr-2 border-r border-box-border">
                {""}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M 22.57972,9.0401682 13.285459,1.0278488 C 12.986373,0.77003883 12.604196,0.62800413 12.20926,0.62800413 c -0.394934,0 -0.777093,0.1420332 -1.076198,0.39984467 L 1.8387715,9.0401682 C 1.1808824,9.2566851 0.70449686,9.8765221 0.70449686,10.605919 v 10.812502 c 0,0.90885 0.73938514,1.648244 1.64824484,1.648244 H 22.065782 c 0.908851,0 1.648245,-0.739387 1.648245,-1.648244 V 10.605919 c 0,-0.7294119 -0.476434,-1.3492419 -1.134307,-1.5657508 z m -8.701124,4.5300938 -1.131234,-0.975217 c -0.270527,-0.233191 -0.65485,-0.262408 -0.953868,-0.08749 a 0.82530635,0.82530635 0 0 0 -0.122323,0.08749 l -1.5016,1.294485 -0.9324433,0.803827 -4.7685989,-4.087438 H 19.950064 l -4.768677,4.087383 z"
                    />
                </svg>                
              </span>
              <input type="email" placeholder="请输入你的邮箱"
                className="w-full py-3 outline-none bg-transparent" />
              <Button className="min-w-max text-white">
                <span className=" realative z-[5]">开始</span>
              </Button>
            </form>

          </div>
        </div>
      </div>
      <div className=" relative flex flex-1 lg:w-1/2 lg:h-auto lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
        <img src={weili}
          alt="hero image"
          width={2350}
          height={2359}
          className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-180"
        />
      </div>
    </Container>
    <Numbers/>
  </section>;
};