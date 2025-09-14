import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";

export const CTA = () => {
  return (
    <section className="pb-20 relative">
      {""}
      <Container>
        <div className="relative rounded-2xl overflow-hidden">
          <div className="realtive z-10 mx-auto text-center max-w-xl md:max-w-2xl py-8
                          md:py-10 px-6 md:px-8" >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-heading-1">
              {""}
              开始你的<span className="text-transparent bg-clip-text bg-gradient-to-r
              from-blue-600 to-violet-600">魔法使光之美少女</span>之旅吧
            </h1>
            <Paragraph className="pt-10">
              一辈子的魔法使
            </Paragraph>
            <div className="mx-auto max-w-md sm:max-w-xl pt-10 text-white">
              <Button className="w-full transform transition-transform duration hover:scale-105">
              点击加入魔法使
            </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}