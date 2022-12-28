import React, { memo } from "react";
import { useSelector } from "react-redux";
import DetailInfos from "./c-cpns/detail-infos";
import DetailPictures from "./c-cpns/detail-pictures";
import { DetailWrapper } from "./style";

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));

  return (
    <DetailWrapper>
      <DetailPictures />
      <DetailInfos />
    </DetailWrapper>
  );
});

export default Detail;
