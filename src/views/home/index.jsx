import React, { memo, useEffect, useState } from "react";
import ycRequest from "@/services";

const Home = memo(() => {
  // 定义状态
  const [highscore, setHighscore] = useState({});

  // 发送网络请求代码
  useEffect(() => {
    ycRequest.get({ url: "/home/highscore" }).then((res) => {
      console.log(res);
      setHighscore(res);
    });
  }, []);

  return (
    <div>
      <h2>{highscore.title}</h2>
      <ul>
        {highscore.list?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});

export default Home;
