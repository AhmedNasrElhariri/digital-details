import { FrameOne, FrameTwo, Link, VectorLeft, VectorRight } from "components/icons";

const CompanyIntroOne = () => {
  return (
    <div className="h-[550px] relative overflow-hidden pt-[126px] pr-[207px] pl-[650px]">
      <div className="font-arabic font-bold	text-[56px] leading-[71px]">
        مرحبا بك في Details Digital
      </div>
      <div className="font-arabic font-light opacity-80	 text-[20px] mt-[10px]">
        شريكك الموثوق لجميع حلول تكنولوجيا المعلومات و خدمات التحول الرقمي ،
        شركتنا رائدة في كل الخدمات التكنولوجيه المصممة  خصيصاً لتطوير أعمالك
        ومساعدتك على الازدهار في العصر الرقمي. يتكون فريق خبرائنا من المحترفين
        القادرين علي تقديم كل الخبرات والخدمات المخصصة لتلبية احتياجاتك مما يضمن
        أن التكنولوجيا الخاصة بك تعمل بقوة وفعالية.
      </div>
      <VectorLeft className="absolute top-[-60px] left-[-20px]" />
      <VectorRight className="absolute top-[-60px] left-0" />
      <Link className="absolute top-[484px] right-1/2	"/>
      <FrameOne className="absolute top-[120px] right-[129px]" width="48.61px" height="63.44px"/>
      <FrameTwo className="absolute top-[380px] left-[978.65px]" width="56.61px" height="37.44px"/>
    </div>
  );
};
export default CompanyIntroOne;
