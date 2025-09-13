'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './clouds.module.css';

export default function Clouds() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll: () => void = () => {
      if (typeof window !== 'undefined') {
        setScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div 
      className={styles.cloudsContainer}
      style={{ transform: `translateY(${scrollY * 0.1}px)` }}
    >
      <Image
        src="/clouds.webp"
        alt="Clouds background"
        fill
        priority
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        quality={85}
      />
    </div>
  );
}
