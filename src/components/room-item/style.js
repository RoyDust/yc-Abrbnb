import styled from "styled-components";


export const ItemWrapper = styled.div`
box-sizing: border-box;
  width: ${props => props.itemWidth};
  padding: 8px;

  .inner{
    width: 100%;
  }

  .cover{
    /* css小技巧 就算没有图片也可以撑起来 */
    position: relative;
    box-sizing: border-box;
    /* 直接空出66%的位置出来，再绝对定位覆盖 */
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc{
    margin: 10px 0 5px;
    font-size: 12px;
    flex-wrap: 700;
    color: ${props => props.verifyColor};
  }

  .name{
    font-size: 16px;
    flex-wrap: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price{
    margin: 8px 0; 
  }
  
  .bottom{
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${props => props.theme.text.primaryColor};

    .count{
      margin: 0 2px 0 4px;
    }
    .MuiRating-icon{
    margin-right: -2px;
  }

  }

`