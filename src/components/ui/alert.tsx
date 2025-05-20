'use client';
// src/components/ui/Alert.tsx
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Info, CheckCircle, AlertTriangle, XCircle, Icon as LucideIcon } from 'lucide-react';

type AlertType = 'info' | 'success' | 'warning' | 'error';

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AlertType;
  title?: string;
  message: ReactNode; // Mesaj string veya JSX olabilir
}

interface AlertTypeStyles {
  containerClasses: string;
  icon: React.ReactElement<React.ComponentProps<typeof LucideIcon>>;
  titleClasses: string;
  messageClasses: string;
}

const alertStylesMap: Record<AlertType, AlertTypeStyles> = {
  info: {
    containerClasses: 'bg-info/10 border-info text-info-foreground',
    icon: <Info className="h-5 w-5 text-info" />,
    titleClasses: 'text-info-foreground font-semibold',
    messageClasses: 'text-info-foreground/90',
  },
  success: {
    containerClasses: 'bg-success/10 border-success text-success-foreground',
    icon: <CheckCircle className="h-5 w-5 text-success" />,
    titleClasses: 'text-success-foreground font-semibold',
    messageClasses: 'text-success-foreground/90',
  },
  warning: {
    containerClasses: 'bg-warning/10 border-warning text-warning-foreground',
    icon: <AlertTriangle className="h-5 w-5 text-warning" />,
    titleClasses: 'text-warning-foreground font-semibold',
    messageClasses: 'text-warning-foreground/90',
  },
  error: {
    containerClasses: 'bg-destructive/10 border-destructive text-destructive-foreground',
    icon: <XCircle className="h-5 w-5 text-destructive" />,
    titleClasses: 'text-destructive-foreground font-semibold',
    messageClasses: 'text-destructive-foreground/90',
  },
};

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  message,
  className,
  ...props
}) => {
  const styles = alertStylesMap[type];

  return (
    <div
      className={cn(
        'flex items-start p-4 rounded-md border-l-4 text-sm', // Temel Tailwind sınıfları
        styles.containerClasses, // Duruma özel renk ve kenarlık sınıfları
        className
      )}
      role="alert"
      {...props}
    >
      <div className="flex-shrink-0 mr-3">{styles.icon}</div>
      <div className="flex-grow">
        {title && <h5 className={cn('mb-1', styles.titleClasses)}>{title}</h5>}
        <div className={styles.messageClasses}>{message}</div>
      </div>
    </div>
  );
};
