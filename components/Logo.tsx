import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

export const Logo = ({ variant = 'header', className = '' }: LogoProps) => {
  const maxHeight = variant === 'header' ? 48 : 40;
  const width = Math.round(maxHeight * 1.7);

  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src={variant === 'header' ? '/images/logo.png' : '/images/logo-light.png'}
        alt="Praxis Recruitment"
        width={width}
        height={maxHeight}
        priority={variant === 'header'}
        className="h-auto w-auto"
        style={{ maxHeight: `${maxHeight}px` }}
      />
    </Link>
  );
};
