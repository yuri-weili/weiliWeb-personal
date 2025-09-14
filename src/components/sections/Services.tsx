import { services } from "../../utils/services-data";
import { Service } from "../cards/Service";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Services = () => {
  return <section id="services">
    {""}
    <Container className="space-y-10 md:space-y12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <Title> 我们的服务 </Title>
        <Paragraph>
          在续作剧情中，理子收藏的未来毕业照背面写着变身咒语 “Cure Up・Rapapa”，
          未来还把这句咒语当作论文密码，理子将其化为点名口号，这句魔法界的话语成为二人专属的情感符号，
          意味着她们始终铭记这份独有的魔法冒险经历与对方带来的力量 。
        </Paragraph>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, key) => (
          <Service
            key={key}
            title={service.title}
            description={service.description}
            icon={service.icon} />
        ))}
        
      </div>
    </Container>
  </section>;
}