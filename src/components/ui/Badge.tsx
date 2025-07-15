interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
  className?: string;
}

const Badge = ({ 
  children, 
  variant = 'primary', 
  size = 'small', 
  className = '' 
}: BadgeProps) => {
  const baseClasses = 'inline-block font-semibold border rounded-full shadow-sm';
  
  const variantClasses = {
    primary: 'text-[#5B4BD7] bg-white border-[#EAE9F7] shadow-[0_2px_6px_rgba(91,75,215,0.15)]',
    secondary: 'text-purple-600 bg-purple-100 border-purple-200'
  };

  const sizeClasses = {
    small: 'text-[10px] px-3 py-1',
    medium: 'text-xs px-4 py-2'
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;