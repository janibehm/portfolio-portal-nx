'use client';

import { useEffect } from 'react';

export default function PWAInstaller() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      
      // Service worker registration
      const registerSW = async () => {
        try {
          const swResponse = await fetch('/sw.js');
          if (!swResponse.ok) {
            return;
          }
          
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
          });
          
          await navigator.serviceWorker.ready;
          return registration;
        } catch {
          // Silent failure
        }
      };
      
      // Network change handlers (silent)
      const handleOnline = () => {
        // Network came back online
      };
      
      const handleOffline = () => {
        // Network went offline
      };
      
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      // Check and register service worker
      navigator.serviceWorker.getRegistration().then(async (registration) => {
        if (!registration) {
          await registerSW();
        }
      }).catch(() => {
        // Silent error handling
      });

      // Handle PWA install prompt
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        // Store event for later use if needed
      });

      // Handle service worker updates
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        window.location.reload();
      });

      // Cleanup event listeners on component unmount
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  return null;
}
