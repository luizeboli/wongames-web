import { useEffect, useRef, useState } from 'react';
import SlickSlider from 'react-slick';
import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos';
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos';
import { Close } from '@styled-icons/material-outlined/Close';

import Slider, { SliderSettings } from 'components/Slider';

import * as S from './styles';

const commonSettings: SliderSettings = {
  infinite: false,
  lazyLoad: 'ondemand',
  arrows: true,
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />,
};

const settings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 4,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true,
      },
    },
  ],
};

const modalSettings: SliderSettings = {
  ...commonSettings,
  slidesToShow: 1,
};

export type GalleryImageProps = {
  src: string;
  label: string;
};

export type GalleryProps = {
  items: GalleryImageProps[];
};

const Gallery = ({ items }: GalleryProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  const sliderRef = useRef<SlickSlider>(null);

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setModalOpen(false);
    };

    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <S.Container>
      <Slider ref={sliderRef} settings={settings}>
        {items.map((item, index) => (
          <img
            role="button"
            onClick={() => {
              setModalOpen(true);
              sliderRef.current!.slickGoTo(index, true);
            }}
            key={`thumb-${index}`}
            src={item.src}
            alt={`Thumb - ${item.label}`}
          />
        ))}
      </Slider>

      <S.Modal aria-label="modal" aria-hidden={!modalOpen} isOpen={modalOpen}>
        <S.Close role="button" aria-label="close modal" onClick={() => setModalOpen(false)}>
          <Close size={40} />
        </S.Close>

        <S.Content>
          <Slider ref={sliderRef} settings={modalSettings}>
            {items.map((item, index) => (
              <img key={`image-${index}`} src={item.src} alt={item.label} />
            ))}
          </Slider>
        </S.Content>
      </S.Modal>
    </S.Container>
  );
};

export default Gallery;
