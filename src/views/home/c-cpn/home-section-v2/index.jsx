import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import PropTypes from "prop-types";
import React, { memo, useCallback, useState } from "react";
import { SectionV2Wrapper } from "./style";

const HomeSectionV2 = memo((props) => {
  // 从props获取数据
  const { infoData } = props;

  // 定义内部的state
  const initialName = Object.keys(infoData.dest_list)[0]; // 初始化列表中的第一个值
  const [name, setName] = useState(initialName);
  const tabNames = infoData.dest_address?.map((item) => item.name);
  // 事件处理函数
  // 每次刷新都会产生一个新函数导致子组件刷新，useCallback进行优化
  const tabClickHandle = useCallback(function (index, name) {
    setName(name);
  }, []);
  return (
    <SectionV2Wrapper>
      <SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
      <SectionTabs tabNames={tabNames} tabClick={tabClickHandle} />
      <SectionRooms roomList={infoData.dest_list?.[name]} itemWidth="33.333%" />
      <SectionFooter name={name} />
    </SectionV2Wrapper>
  );
});

HomeSectionV2.propTypes = {
  infoData: PropTypes.object,
};

export default HomeSectionV2;
