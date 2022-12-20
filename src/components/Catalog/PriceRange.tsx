import * as React from 'react';
import styled from 'styled-components';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

import { ParametersTitle, ParametersItems } from './Parameters';

const SliderContainer = styled.div`
  & .rc-slider-rail {
    background-color: rgba(70, 163, 88, 0.2);
  }

  & .rc-slider-track {
    background-color: #46a358;
  }

  & .rc-slider-handle {
    width: 15px;
    height: 15px;
    background-color: #46a358;
    border: 3px solid #ffffff;
    border-radius: 50%;
    opacity: 1;

    &:focus {
      border: 3px solid #ffffff;
      background-color: #46a358;
      box-shadow: none;
    }
  }
`;

const PriceInfo = styled.div`
  margin-top: 15px;
  font-family: 'Cera Pro', sans-serif;
  font-weight: 400;
  font-size: 15px;
  color: #3d3d3d;
`;

const PriceCount = styled.span`
  font-weight: 700;
  color: #46a358;
`;

const SetPriceButton = styled.button`
  margin-top: 16px;
  padding: 8px 25px;
  background-color: #46a358;
  border-radius: 6px;
  border: none;

  color: #ffffff;
  font-family: 'Cera Pro', sans-serif;
  font-weight: 700;
  font-size: 16px;

  transition: all 0.1s ease-in-out;

  &:hover {
    background-color: #315c39;
  }
`;

const PriceRange: React.FC = () => {
  const [min, setMin] = React.useState<number>(100);
  const [max, setMax] = React.useState<number>(1000);

  return (
    <>
      <ParametersTitle>Цена</ParametersTitle>
      <ParametersItems>
        <SliderContainer>
          <Slider
            range
            allowCross={false}
            min={100}
            max={1000}
            onChange={(value: number | number[]) => {
              let array = value as number[];
              setMin(array[0]);
              setMax(array[1]);
            }}
            defaultValue={[100, 300]}
          />
          <PriceInfo>
            Цена:
            <PriceCount>
              {' '}
              {min}₽ - {max}₽
            </PriceCount>
          </PriceInfo>
          <SetPriceButton>Применить</SetPriceButton>
        </SliderContainer>
      </ParametersItems>
    </>
  );
};

export default PriceRange;
