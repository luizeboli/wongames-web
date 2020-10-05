import { Settings } from 'react-slick';
import styled from 'styled-components';
import { Meta, Story } from '@storybook/react/types-6-0';

import Slider from '.';

export default {
  title: 'Slider',
  component: Slider,
} as Meta;

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Slide = styled.div`
  background: gray;
  width: 30rem;
  padding: 10rem 0;
  border: 0.1rem solid red;
  color: white;
  text-align: center;
`;

export const Horizontal: Story = (args) => (
  <Slider {...args} settings={settings}>
    <Slide>Alow</Slide>
    <Slide>Alow</Slide>
  </Slider>
);

const verticalSettings: Settings = {
  vertical: true,
  verticalSwiping: true,
  dots: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export const Vertical: Story = (args) => (
  <Slider {...args} settings={verticalSettings}>
    <Slide>Alow</Slide>
    <Slide>Alow</Slide>
  </Slider>
);
