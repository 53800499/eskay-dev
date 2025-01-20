import React from 'react'
import Typography from './typography/typography'
import clsx from 'clsx';
interface Prop{
    children: string | React.ReactNode;
    className?: string ;
}
export default function TitreSection({children, className}:Prop) {
  return (
    <Typography className={clsx('bg-gray-200 dark:bg-gray-500 rounded p-2 p-auto ', className)}>
      {children}
    </Typography>
  )
}
