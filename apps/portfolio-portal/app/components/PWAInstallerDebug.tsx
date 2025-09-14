'use client';

import { useEffect } from 'react';

export default function PWAInstallerDebug() {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      
      // Debug network status
      const logNetworkStatus = () => {
        console.log(`PWA: Network status - ${navigator.onLine ? 'ONLINE' : 'OFFLINE'}`);
      };
      
      // Initial network status
      logNetworkStatus();
      
      // Manual service worker registration (fallback)
      const registerSW = async () => {
        try {
          console.log('PWA: Attempting manual service worker registration...');
          
          // Check if sw.js exists first
          const swResponse = await fetch('/sw.js');
          if (!swResponse.ok) {
            console.error('PWA: sw.js not found, response:', swResponse.status);
            return;
          }
          console.log('PWA: sw.js file exists, proceeding with registration');
          
          const registration = await navigator.serviceWorker.register('/sw.js', {
            scope: '/'
          });
          
          console.log('PWA: Service worker registered successfully:', registration);
          console.log('PWA: Registration scope:', registration.scope);
          
          // Wait for service worker to be ready
          await navigator.serviceWorker.ready;
          console.log('PWA: Service worker is ready');
          
          return registration;
        } catch (error) {
          console.error('PWA: Service worker registration failed:', error);
        }
      };
      
      // Listen for network changes
      window.addEventListener('online', () => {
        console.log('PWA: Network came back ONLINE');
        logNetworkStatus();
      });
      
      window.addEventListener('offline', () => {
        console.log('PWA: Network went OFFLINE');
        logNetworkStatus();
      });

      // Check if service worker is already registered
      navigator.serviceWorker.getRegistration().then(async (registration) => {
        if (registration) {
          console.log('PWA: Service Worker already registered');
          console.log('PWA: Registration scope:', registration.scope);
          console.log('PWA: Registration active:', !!registration.active);
          
          if (registration.active) {
            console.log('PWA: Active SW script URL:', registration.active.scriptURL);
          }
        } else {
          console.log('PWA: No service worker registration found, attempting manual registration...');
          await registerSW();
        }
      }).catch(error => {
        console.error('PWA: Error getting registration:', error);
      });

      // Debug service worker messages
      navigator.serviceWorker.addEventListener('message', (event) => {
        console.log('PWA: Message from SW:', event.data);
      });

      // Listen for service worker registration
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('PWA: Controller changed - page will reload');
        window.location.reload();
      });

      // Check if PWA is already installed
      window.addEventListener('beforeinstallprompt', (e) => {
        console.log('PWA: Install prompt available');
        e.preventDefault();
      });

      // Detect if running as PWA
      if (window.matchMedia('(display-mode: standalone)').matches) {
        console.log('PWA: Running as installed app');
      } else {
        console.log('PWA: Running in browser');
      }

      // Debug cache storage (delayed to allow SW to create caches)
      setTimeout(() => {
        if ('caches' in window) {
          caches.keys().then(cacheNames => {
            console.log('PWA: Available caches:', cacheNames);
            cacheNames.forEach(cacheName => {
              caches.open(cacheName).then(cache => {
                cache.keys().then(keys => {
                  console.log(`PWA: Cache "${cacheName}" contains ${keys.length} entries:`, keys.map(req => req.url));
                });
              });
            });
          }).catch(error => {
            console.error('PWA: Error checking caches:', error);
          });
        } else {
          console.log('PWA: Cache API not supported');
        }
      }, 3000); // Wait 3 seconds for SW to initialize

      console.log('PWA: Installer component loaded with debugging');
    } else {
      console.log('PWA: Service Worker not supported');
    }
  }, []);

  return null;
}
