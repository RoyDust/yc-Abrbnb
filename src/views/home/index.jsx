import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import HomeBanner from "./c-cpn/home-banner";
import { HomeWrapper } from "./style";
import { fetchHomeDataAction } from "@/store/modules/home";
import HomeSectionV1 from "./c-cpn/home-section-v1";
import HomeSectionV2 from "./c-cpn/home-section-v2";
import HomeSectionV3 from "./c-cpn/home-section-v3";
import { isEmpty } from "@/utils";
import HomeLongfor from "./c-cpn/home-longfor";

const Home = memo(() => {
  // 从redux中获取数据
  const {
    goodPriceInfo,
    highScoreInfo,
    discountInfo,
    recommendInfo,
    longforInfo,
    plusInfo,
  } = useSelector(
    (state) => ({
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountInfo: state.home.discountInfo,
      recommendInfo: state.home.recommendInfo,
      longforInfo: state.home.longforInfo,
      plusInfo: state.home.plusInfo,
    }),
    shallowEqual
  );

  // 派发异步时间：发起进行网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchHomeDataAction());
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {isEmpty(discountInfo) && <HomeSectionV2 infoData={discountInfo} />}
        {isEmpty(recommendInfo) && <HomeSectionV2 infoData={recommendInfo} />}

        {isEmpty(longforInfo) && <HomeLongfor infoData={longforInfo} />}

        {isEmpty(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo} />}
        {isEmpty(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo} />}
        {isEmpty(plusInfo) && <HomeSectionV3 infoData={plusInfo} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
