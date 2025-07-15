export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface SectionProps {
  className?: string;
  children?: React.ReactNode;
}

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium';
  className?: string;
}

