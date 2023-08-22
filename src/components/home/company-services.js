import {
  ChartLineIcon,
  DesignIcon,
  InfrastructureIcon,
  ShoppingIcon,
  SkyIcon,
  WebIcon,
} from "components/icons";
import { ServiceCard, TitleWithUnderLine } from "components/shared";

const { Fragment } = require("react");

const CompanyServices = () => {
  return (
    <div className="mt-[80px]">
      <TitleWithUnderLine>خدمات الشركة</TitleWithUnderLine>
      <div class="mt-[50px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mx-[10px] lg:grid-cols-2 mx-[20px] xl:grid-cols-3 mx-[120px]">
        <ServiceCard
          title="الخدمات السحابية"
          description="أول تطبيق سعودي يتبنى نموذج تقديم الخدمات عند الطلب بين أصحاب المهارات الراغبين بالعمل وطالبي الخدمات من أفراد أو شركات ."
        >
          <SkyIcon />
        </ServiceCard>
        <ServiceCard
          title="التسويق الرقمي"
          description="أول تطبيق سعودي يتبنى نموذج تقديم الخدمات عند الطلب بين أصحاب المهارات الراغبين بالعمل وطالبي الخدمات من أفراد أو شركات ."
        >
          <ShoppingIcon />
        </ServiceCard>
        <ServiceCard
          title="البنية التحتية والتحول الرقمي"
          description="أول تطبيق سعودي يتبنى نموذج تقديم الخدمات عند الطلب بين أصحاب المهارات الراغبين بالعمل وطالبي الخدمات من أفراد أو شركات ."
        >
          <InfrastructureIcon />
        </ServiceCard>
        <ServiceCard
          title="تطوير تطبيقات الويب والجوال"
          description="أول تطبيق سعودي يتبنى نموذج تقديم الخدمات عند الطلب بين أصحاب المهارات الراغبين بالعمل وطالبي الخدمات من أفراد أو شركات ."
        >
          <WebIcon />
        </ServiceCard>
        <ServiceCard
          title="خدمات التصميم والهوية"
          description="أول تطبيق سعودي يتبنى نموذج تقديم الخدمات عند الطلب بين أصحاب المهارات الراغبين بالعمل وطالبي الخدمات من أفراد أو شركات ."
        >
          <DesignIcon />
        </ServiceCard>
        <ServiceCard
          title="الاستشارات التقنية"
          description="أول تطبيق سعودي يتبنى نموذج تقديم الخدمات عند الطلب بين أصحاب المهارات الراغبين بالعمل وطالبي الخدمات من أفراد أو شركات ."
        >
          <ChartLineIcon />
        </ServiceCard>
      </div>
    </div>
  );
};
export default CompanyServices;
