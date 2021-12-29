import { FC, useRef, MouseEvent } from 'react';
import styled from 'styled-components';
import isMobile from 'is-mobile';

const SwiperRoot = styled.div`
  width: 100%;
  overflow: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SwiperContainer = styled.div`
  display: flex;
  & > * {
    margin-right: 6px;
  }
`;

const Swiper: FC = ({ children }) => {
  if (isMobile()) {
    return (
      <SwiperRoot>
        <SwiperContainer>{children}</SwiperContainer>
      </SwiperRoot>
    );
  }

  const prevMouseCoordinatesX = useRef<number>(0);
  const isMouseDown = useRef<boolean>(false);

  const rootRef = useRef<HTMLDivElement>(null);

  const onMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    prevMouseCoordinatesX.current = e.clientX;
    isMouseDown.current = true;
  };

  const onMouseUp = () => {
    isMouseDown.current = false;
  };

  const onMouseLeave = () => {
    isMouseDown.current = false;
  };

  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isMouseDown.current) return;
    if (rootRef.current) {
      rootRef.current.scrollLeft += prevMouseCoordinatesX.current - e.clientX;
      prevMouseCoordinatesX.current = e.clientX;
    }
  };

  return (
    <SwiperRoot
      ref={rootRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      <SwiperContainer>{children}</SwiperContainer>
    </SwiperRoot>
  );
};

export default Swiper;
