import React from "react";
import BannerSlider from "./BannerSlider";
import FeatureSection from "./FeatureSection";
import FeatureBanner from "./FeatureBanner";
import BestProducts from "./BestProduct";
import ElectronicProducts from "./ElectronicsProduct";
import FeatureBannertwo from "./FeatureBannertwo";
import ProductQuickviewModal from "../product/ProductQuickviewModal";

const HomeMain = () => {
  return (
    <div>
      <main
        className="relative flex-grow bg-gray-100"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="lg:mb-8">
          <BannerSlider />
        </div>
        <div className="mx-auto sm:max-w-[1730px]  max-w-[1870px] px-4 md:px-6 lg:px-8 2xl:px-20">
          <FeatureSection />
          <FeatureBanner />
          <BestProducts />
          <ElectronicProducts/>
          <FeatureBannertwo/>
        </div>
      </main>
      <ProductQuickviewModal/>
    </div>
  );
};

export default HomeMain;
