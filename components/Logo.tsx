import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'header' | 'footer';
  className?: string;
}

export const Logo = ({ variant = 'header', className = '' }: LogoProps) => {
  const height = variant === 'header' ? 187 : 32;
  
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <Image
        src="/images/logo.png"
        alt="Praxis Recruitment - Recruitment by Practitioners"
        width={height * 1.7} // Logo aspect ratio ~1.7:1
        height={height}
        priority={variant === 'header'}
        className="h-auto w-auto max-h-[187px] -my-20"
      />
    </Link>
  );
};
