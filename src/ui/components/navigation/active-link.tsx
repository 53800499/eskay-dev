interface Props{
    href: string;
    children: React.ReactNode;
}
import Link from 'next/link';
import {useRouter} from 'next/router';
import clsx from "clsx";
import React from 'react'
import {useMemo} from 'react';
import Typography from '@/ui/design-system/typography/typography';
interface Props{
    href: string;
    children: React.ReactNode;
    className?: string;
}

export default function ActiveLink({href, children, className}:Props) {
    const router = useRouter();
    const isActive = useMemo(()=>{
        return router.pathname === href
    },[router.pathname, href]);
  return (
    <Link href={href} className={clsx( isActive && "font-bold font-regular underline", className)}>
      <Typography variant='body1' theme='black'>
        {children}
      </Typography>
    </Link>
  )
}
