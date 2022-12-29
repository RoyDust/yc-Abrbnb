import { useEffect, useState } from "react";
import { throttle } from "underscore";

export default function useScrollPosition() {
  // 状态记录位置
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // 监听window滚动
  useEffect(() => {
    // 每次监听到滚动改变，就会重新渲染组件，所以要进行节流处理
    // 这里引用的是underscore库进行节流处理
    const handleScroll = throttle(function () {
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }, 100)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.addEventListener("scroll", handleScroll)
    }
  }, [])

  // 返回
  return { scrollX, scrollY }
}