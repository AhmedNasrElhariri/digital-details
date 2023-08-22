import {
  ChartLineIcon,
  DesignIcon,
  InfrastructureIcon,
  ShoppingIcon,
  SkyIcon,
  WebIcon,
} from "components/icons";
import { ProductCard, TitleWithUnderLine } from "components/shared";

const MyProducts = () => {
  return (
    <div className="mt-[80px] bg-[#E5E7EB]">
      <TitleWithUnderLine>منتجاتنا</TitleWithUnderLine>
      <div class="mt-[50px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 mx-[10px] lg:grid-cols-2 mx-[20px] xl:grid-cols-3 mx-[120px]">
        <ProductCard
          title="برنامج عامر للعقارات"
          description="تحكم بزوار منشأتك عبر تزويدهم بالأوقات المتاحة"
        ></ProductCard>
        <ProductCard
          title="تطبيق Busy للخدمات"
          description="تحكم بزوار منشأتك عبر تزويدهم بالأوقات المتاحة"
        ></ProductCard>
        <ProductCard
          title="برنامج الموارد البشرية HR"
          description="تحكم بزوار منشأتك عبر تزويدهم بالأوقات المتاحة"
        ></ProductCard>
        <ProductCard
          title="برنامج مدير إدارة العمليات E-SOM"
          description="تحكم بزوار منشأتك عبر تزويدهم بالأوقات المتاحة"
        ></ProductCard>
        <ProductCard
          title="نظام المواعيد"
          description="تحكم بزوار منشأتك عبر تزويدهم بالأوقات المتاحة"
        ></ProductCard>
        <ProductCard
          title="نظام المواعيد"
          description="تحكم بزوار منشأتك عبر تزويدهم بالأوقات المتاحة"
        ></ProductCard>
      </div>
    </div>
  );
};
export default MyProducts;
