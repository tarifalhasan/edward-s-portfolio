import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  name: string;
  icon?: React.ReactNode | string;
  type?: 'primary' | 'secondary' | 'outline'; // Corrected typo here
  link?: string;
  target?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  name,
  icon,
  type = 'primary',
  link,
  target,
  onClick,
}) => {
  const buttonClasses = `px-5 flex flex-wrap items-center py-1.5 ${
    type === 'primary'
      ? 'bg-transparent border border-primary text-white'
      : type === 'secondary'
      ? 'bg-transparent border border-dark text-dark'
      : 'bg-transparent border-none text-white px-0' // Outline style when type is not provided or 'outline'
  }`;

  return (
    <Link target={target} href={link || '/'} type="button">
      <button onClick={onClick} className={buttonClasses}>
        {name} {icon && <span className="mr-2">{icon}</span>}
      </button>
    </Link>
  );
};

export default Button;
