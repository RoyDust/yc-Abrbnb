import IconAvatar from "@/assets/svg/icon_avatar";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
  // 定义弹窗组件状态
  const [showPanel, setShowPanel] = useState(false);

  // 事件处理函数
  function profileClickHandle() {
    setShowPanel(true);
  }

  // 副作用代码
  useEffect(() => {
    function windowHandleClick() {
      setShowPanel(false);
    }
    // 第三个参数true将冒泡变成捕获
    window.addEventListener("click", windowHandleClick, true);
    return () => {
      window.removeEventListener("click", windowHandleClick, true);
    };
  }, []);

  return (
    <RightWrapper>
      <div className="btns">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />

        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="register item">注册</div>
              <div className="login item">登录</div>
            </div>
            <div className="bottom">
              <div className="register item">出租房源</div>
              <div className="login item">开展体验</div>{" "}
              <div className="register item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
