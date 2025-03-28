import Link from 'next/link';

interface ButtonVariantProps {
  variant: 'primary' | 'secondary';
  as?: 'button' | 'link';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ButtonVariant: React.FC<ButtonVariantProps> = ({ 
  variant, 
  as = 'button', 
  href, 
  children, 
  className = '', 
  onClick 
}) => {
  const baseStyles = "py-2 w-full flex justify-center items-center rounded-xl cursor-pointer transition-all duration-150 font-bold";
  
  const variants = {
    primary: "bg-vibrantOrange text-charcoalBlue hover:scale-105",
    secondary: "bg-charcoalBlue hover:bg-vibrantOrange border-2 hover:border-0 border-vibrantOrange text-vibrantOrange hover:text-charcoalBlue hover:shadow-md hover:scale-105"
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (as === 'link' && href) {
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
