import { MoreInfo } from "components/icons";

const DigitalFutureMaking = () => {
  return (
    <div class="grid grid-cols-4 gap-4 bg[#F7F7F7] mt-[150px]">
      <div class="col-span-4 lg:col-span-1">
        <img
          src="images/outline.png"
          alt="..."
          className="w-[645px] h-[333px] object-cover"
        />
      </div>
      <div class="col-span-4 lg:col-span-3 mr-[84px]">
        <h1 class="font-arabic text-[45px] font-bold">صناعة مستقبلك الرقمي</h1>
        <p className="w-[128px] h-[4px] bg-[#5C4C8B]"></p>
        <p class="font-arabic font-light text-[18px] leading-[31px] mt-[26px] ml-[68px] opacity-80	">
          <p className="h-[124.34px]">
            شغفنا و إلتزامنا تجاه الشركات لتمكينهم من إستخدام قوة التكنولوجيا و
            تحقيق الازدهار في العصر الرقمي من خلال تقديم حلول تكنولوجيا
            المعلومات المبتكرة وتوجيهات خبرائنا التي تساعدهم علي الظهور بشكل
            إستثنائي في المشهد الرقمي المتقدم.
          </p>
          <p>
            نحن نؤمن بأننا عبر خدماتنا الشاملة ونهجنا في التفكير المستقبلي
            سنساعد المؤسسات علي الاستفادة من كل فرص النمو و تحقيق الإمكانيات
            الشاملة في رحلة التحول الرقمي والقيادة نحو النجاح في المستقبل
            الرقمي.
          </p>
        </p>
        <MoreInfo className="w-[74px] h-[28px] mt-[30px]" />
      </div>
    </div>
  );
};
export default DigitalFutureMaking;
