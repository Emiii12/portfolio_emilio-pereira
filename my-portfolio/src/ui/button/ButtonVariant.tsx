import Link from 'next/link';

interface ButtonVariantProps {
  variant: 'primary' | 'secondary';
  as?: 'button' | 'link';
  href?: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonVariant: React.FC<ButtonVariantProps> = ({
  variant,
  as = 'button',
  href,
  children,
  className = '',
  target,
  type,
  onClick,
  disabled = false
}) => {
  const baseStyles =
    ' flex justify-center items-center rounded-xl cursor-pointer font-bold transition-all duration-150';

  const variants = {
    primary: 'bg-vibrantOrange/90 text-charcoalBlue hover:bg-vibrantOrange',
    secondary:
      'bg-charcoalBlue hover:bg-vibrantOrange border-2 border-vibrantOrange text-vibrantOrange hover:text-charcoalBlue hover:shadow-md'
  };

  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '';
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${className} ${disabledClasses}`;

  if (as === 'link' && href) {
    const isExternal = target === '_blank' || href.endsWith('.pdf') || href.startsWith('http');

    if (isExternal) {
      return (
        <a 
          href={href} 
          target={target} 
          rel="noopener noreferrer" 
          className={buttonClasses}
          tabIndex={disabled ? -1 : undefined}
          aria-disabled={disabled}
        >
          {children}
        </a>
      );
    }

    return (
      <Link 
        href={href} 
        className={buttonClasses}
        tabIndex={disabled ? -1 : undefined}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={buttonClasses} 
      type={type} 
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};