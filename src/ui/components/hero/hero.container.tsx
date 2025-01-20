import React from 'react';
import AboutElement from './hero.element';
import AboutImage from './hero.image';
import clsx from 'clsx';
import Container from '../container/container';

export default function HeroContainer({ imageSrc = '/assets/images/profile.jpg', imageAlt = 'profile',imageLayout='fill' }) {
  return (
    <Container
      className={clsx(
        'flex flex-col md:flex-row items-center justify-center '
      )}
    >
      <AboutImage
        src={imageSrc}
        alt={imageAlt}
        layout={imageLayout}
        className="rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 md:order-2 hidden min-w-md:block"
      />
      <AboutElement />
      <AboutImage
        src={imageSrc}
        alt={imageAlt}
        layout={imageLayout}
        className="rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:scale-105 md:order-2 hidden md:block"
      />
    </Container>
  );
}
