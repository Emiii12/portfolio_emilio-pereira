import Link from 'next/link';

interface ButtonCardProps {
  as?: 'button' | 'link';
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ButtonCard: React.FC<ButtonCardProps> = ({ 
  as = 'button', 
  href, 
  children, 
  className = '', 
  onClick 
}) => {
  const baseStyles = "border-[1px] border-vibrantOrange rounded-2xl cursor-pointer transition-colors duration-150 hover:bg-vibrantOrange text-vibrantOrange hover:text-black font-bold";
  
  const buttonClasses = `${baseStyles} ${className}`;

  if (as === 'link' && href) {
    return (
      <Link href={href} className={buttonClasses} target='_blank' rel="noopener noreferrer">
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
