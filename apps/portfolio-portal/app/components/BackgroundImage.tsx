import Image from 'next/image';

export default function BackgroundImage() {
  return (
    <div 
      className="fixed inset-0 -z-10"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
      }}
    >
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
      <div 
        className="absolute inset-0"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }}
      />
    </div>
  );
}
