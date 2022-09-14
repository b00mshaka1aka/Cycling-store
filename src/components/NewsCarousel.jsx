import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';

import news_one from '../assets/images/news_one.jpg';
import news_two from '../assets/images/news_two.jpg';
import news_three from '../assets/images/news_three.jpg';
import news_four from '../assets/images/news_four.jpg';
import news_five from '../assets/images/news_five.jpg';
import news_six from '../assets/images/news_six.jpg';

const items = [
  {
    id: 1,
    img: news_one,
  },
  {
    id: 2,
    img: news_two,
  },
  {
    id: 3,
    img: news_three,
  },
  {
    id: 4,
    img: news_four,
  },
  {
    id: 5,
    img: news_five,
  },
  {
    id: 6,
    img: news_six,
  },
];

const NewsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        tag="div"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}>
        <img className="img-fluid" src={item.img} alt="News" />
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
};

export default NewsCarousel;
