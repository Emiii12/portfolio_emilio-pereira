import Link from 'next/link';

interface ButtonVariantProps {
  variant: 'primary' | 'secondary';
  as?: 'button' | 'link';
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  onClick?: () => void;
}

export const ButtonVariant: React.FC<ButtonVariantProps> = ({
  variant,
  as = 'button',
  href,
  children,
  className = '',
  target,
  onClick
}) => {
  const baseStyles =
    'py-2 w-full flex justify-center items-center rounded-xl cursor-pointer font-bold transition-all duration-150';

  const variants = {
    primary: 'bg-vibrantOrange text-charcoalBlue hover:bg-vibrantOrange/80',
    secondary:
      'bg-charcoalBlue hover:bg-vibrantOrange/90 border-2 border-vibrantOrange text-vibrantOrange hover:text-charcoalBlue hover:shadow-md'
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (as === 'link' && href) {
    const isExternal = target === '_blank' || href.endsWith('.pdf') || href.startsWith('http');

    if (isExternal) {
      return (
        <a href={href} target={target} rel="noopener noreferrer" className={buttonClasses}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};
