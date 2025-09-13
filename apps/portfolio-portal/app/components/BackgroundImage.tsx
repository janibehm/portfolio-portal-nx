import Image from 'next/image';
import styles from './BackgroundImage.module.css';

export default function BackgroundImage() {
  return (
    <div className={styles.backgroundContainer}>
      <Image
        src="/mountains.jpg"
        alt="Mountains background"
        fill
        priority
        style={{
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        quality={85}
      />
      {/* Dark overlay */}
      <div className={styles.overlay} />
    </div>
  );
}
