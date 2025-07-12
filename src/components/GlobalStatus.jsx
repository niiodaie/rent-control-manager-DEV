import React from 'react';
import { Globe, MapPin, Languages, Wifi, WifiOff } from 'lucide-react';
import useGeolocation from '../hooks/useGeolocation';
import useLanguage from '../hooks/useLanguage';

const GlobalStatus = () => {
  const location = useGeolocation();
  const { currentLanguage, autoDetected, getLanguageFlag, getLanguageName } = useLanguage();

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 max-w-sm">
        <div className="flex items-center space-x-2 mb-2">
          <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            Global Status
          </span>
        </div>
        
        <div className="space-y-2 text-xs">
          {/* Location Status */}
          <div className="flex items-center space-x-2">
            <MapPin className="w-3 h-3 text-green-600 dark:text-green-400" />
            <span className="text-gray-600 dark:text-gray-300">
              {location.loading ? (
                'Detecting location...'
              ) : location.city ? (
                `${location.city}, ${location.country}`
              ) : (
                'Location unavailable'
              )}
            </span>
          </div>

          {/* Language Status */}
          <div className="flex items-center space-x-2">
            <Languages className="w-3 h-3 text-purple-600 dark:text-purple-400" />
            <span className="text-gray-600 dark:text-gray-300">
              {getLanguageFlag(currentLanguage)} {getLanguageName(currentLanguage)}
              {autoDetected && (
                <span className="text-blue-600 dark:text-blue-400 ml-1">(auto)</span>
              )}
            </span>
          </div>

          {/* Connection Status */}
          <div className="flex items-center space-x-2">
            {navigator.onLine ? (
              <Wifi className="w-3 h-3 text-green-600 dark:text-green-400" />
            ) : (
              <WifiOff className="w-3 h-3 text-red-600 dark:text-red-400" />
            )}
            <span className="text-gray-600 dark:text-gray-300">
              {navigator.onLine ? 'Connected' : 'Offline'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalStatus;

