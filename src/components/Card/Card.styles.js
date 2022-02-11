import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  padding: 16px;
  min-width: 272px;
  border-radius: 4px;
  position: relative;
  text-align: left;
  transition: all 0.2s;
  outline: none;
  border: none;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  background-color: ${({ theme }) => theme.colors.white};

  > .content {
    margin-left: 20px;

    p,
    h2,
    span {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
    }
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0px 16px 80px rgba(84, 16, 95, 0.32);
  }
`;

export const Title = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Authors = styled.div`
  display: flex;
  font-size: 12px;
  min-height: 40px;
  line-height: 20px;
  margin-bottom: 8px;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.pink40};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-size: 12px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const ImageContainer = styled.div`
  width: 82px;
  height: 120px;
  position: relative;
  box-shadow: 0px 6px 9px rgba(0, 0, 0, 0.15);
`;

export const Image = styled.img``;
