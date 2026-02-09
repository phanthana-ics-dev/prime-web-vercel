'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { pagePermissions } from '../utils/permissions';

const withAuth = <P extends object>(WrappedComponent: React.FC<P>) => {
  const AuthComponent: React.FC<P> = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [hasAccess, setHasAccess] = useState(false);
    const [permission, setPermission] = useState<unknown>(null);

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            router.push('/login');
            setLoading(false);
            return;
        }

        const payload = JSON.parse(atob(token.split('.')[1]));
        const userRole = payload.role;
        const currentTime = Math.floor(Date.now() / 1000);

        if (payload.exp < currentTime) {
            localStorage.removeItem('authToken');
            router.push('/login');
            setLoading(false);
            return;
        }

        const timeRemaining = payload.exp - currentTime;
        console.log(`Time remaining before token expires: ${timeRemaining} seconds`);

        const currentPath = window.location.pathname;
        const permission = pagePermissions[currentPath];
        if (!permission.roles.includes(userRole)) {
            setLoading(false);
            return;
        } else {
            setPermission(permission);
            setHasAccess(true);
            setLoading(false);
        }
    }, [router]);

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!hasAccess) {
      return <div>Unauthorized...</div>;
    }

    return <WrappedComponent {...props} permission={permission} />;
  };

  return AuthComponent;
};

export default withAuth;
