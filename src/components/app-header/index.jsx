import useScrollPosition from "@/hooks/useScrollPosition";
import classNames from "classnames";
import React, { memo, useRef, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import HeaderCenter from "./c-cpns/header-center";
import HeaderLeft from "./c-cpns/header-left";
import HeaderRight from "./c-cpns/header-right";
import { HeaderWrapper, SearchAreaWrapper } from "./style";

const AppHeader = memo(() => {
  // 定义组件内部的状态
  const [isSearch, setIsSearch] = useState(false);

  // 从redux中获取数据
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual
  );
  const { isFixed, topAlpha } = headerConfig;

  // 监听滚动
  const { scrollY } = useScrollPosition();
  const PrevY = useRef(0);
  // 在正常情况下，不断记录值
  if (!isSearch) PrevY.current = scrollY;
  // 在弹出窗口下，滚动的距离大于之前记录的30取消窗口
  if (isSearch && Math.abs(scrollY - PrevY.current) > 30) setIsSearch(false);

  // 透明度的逻辑
  const isAlpha = topAlpha && scrollY === 0;

  return (
    <ThemeProvider theme={{ isAlpha }}>
      <HeaderWrapper className={classNames({ fixed: isFixed })}>
        <div className="content">
          <div className="top">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isAlpha || isSearch}
              searchBarClick={(e) => setIsSearch(true)}
            />
            <HeaderRight />
          </div>
          <SearchAreaWrapper isSearch={isSearch}></SearchAreaWrapper>
        </div>
        {isSearch && (
          <div className="cover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppHeader;
