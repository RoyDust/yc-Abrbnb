import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import React, { memo, useEffect, useRef, useState } from "react";
import { ViewWrapper } from "./style";

const ScrollView = memo((props) => {
  // 定义内部状态
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const [totalDistance, setTotalDistance] = useState(0);
  const [posIndex, setPosIndex] = useState(0);

  // 组件渲染完毕，判断是否显示右侧的按钮
  const scrollContentRef = useRef();
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; // 一共可以滚动的宽度
    const clientWidth = scrollContentRef.current.clientWidth; // 本身占据的宽度
    const totalDistance = scrollWidth - clientWidth;
    setShowRight(totalDistance > 0);
    setTotalDistance(totalDistance);
  }, [props.children]);

  // 事件处理逻辑
  function controlClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    // 计算需要滚动的距离
    const newOffsetLeft = newEl.offsetLeft;
    scrollContentRef.current.style.transform = `translate(-${newOffsetLeft}px)`;
    // 设置新的索引
    setPosIndex(newIndex);
    setShowRight(totalDistance > newOffsetLeft);
    setShowLeft(newOffsetLeft > 0);
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div
          className="control left"
          onClick={(e) => controlClickHandle(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {showRight && (
        <div
          className="control right"
          onClick={(e) => controlClickHandle(true)}
        >
          <IconArrowRight />
        </div>
      )}

      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
