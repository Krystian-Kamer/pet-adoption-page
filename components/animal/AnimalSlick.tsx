'use client';
import { AnimalCard } from '@/components/animal/AnimalCard';
import { Animal } from '@/animals';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

type AnimalGridProps = {
  animals: Animal[];
  basePath: string;
};

export const AnimalSlick = ({ animals, basePath }: AnimalGridProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    beforeChange: () => setIsDragging(true),
    afterChange: () => {
      setTimeout(() => setIsDragging(false), 100);
    },
    onSwipe: () => setIsDragging(true),
  };

  return (
    <div
      className="slider-container mb-20"
      onClick={(e) => {
        if (isDragging) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      onClickCapture={(e) => {
        if (isDragging) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
    >
      <Slider {...settings}>
        {animals.map((animal) => (
          <AnimalCard
            basePath={basePath}
            id={animal.id}
            image={animal.imageUrl}
            name={animal.name}
          />
        ))}
      </Slider>
    </div>
  );
};
