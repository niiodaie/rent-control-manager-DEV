import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState({
    city: null,
    country: null,
    countryCode: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    const getLocationFromIP = async () => {
      try {
        // Try multiple IP geolocation services for reliability
        const services = [
          'https://ipapi.co/json/',
          'https://ip-api.com/json/',
          'https://ipinfo.io/json'
        ];

        for (const service of services) {
          try {
            const response = await fetch(service);
            if (response.ok) {
              const data = await response.json();
              
              // Normalize data from different services
              let normalizedData = {};
              
              if (service.includes('ipapi.co')) {
                normalizedData = {
                  city: data.city,
                  country: data.country_name,
                  countryCode: data.country_code
                };
              } else if (service.includes('ip-api.com')) {
                normalizedData = {
                  city: data.city,
                  country: data.country,
                  countryCode: data.countryCode
                };
              } else if (service.includes('ipinfo.io')) {
                normalizedData = {
                  city: data.city,
                  country: data.country,
                  countryCode: data.country
                };
              }

              if (normalizedData.city && normalizedData.country) {
                setLocation({
                  ...normalizedData,
                  loading: false,
                  error: null
                });
                
                // Store in localStorage for future use
                localStorage.setItem('userLocation', JSON.stringify(normalizedData));
                return;
              }
            }
          } catch (serviceError) {
            console.warn(`Failed to get location from ${service}:`, serviceError);
            continue;
          }
        }
        
        // If all services fail, try to get from localStorage
        const storedLocation = localStorage.getItem('userLocation');
        if (storedLocation) {
          const parsedLocation = JSON.parse(storedLocation);
          setLocation({
            ...parsedLocation,
            loading: false,
            error: null
          });
        } else {
          // Fallback to default location
          setLocation({
            city: 'Appleton',
            country: 'United States',
            countryCode: 'US',
            loading: false,
            error: 'Unable to detect location'
          });
        }
      } catch (error) {
        console.error('Geolocation error:', error);
        setLocation(prev => ({
          ...prev,
          loading: false,
          error: error.message
        }));
      }
    };

    // Check if we have cached location first
    const cachedLocation = localStorage.getItem('userLocation');
    if (cachedLocation) {
      try {
        const parsedLocation = JSON.parse(cachedLocation);
        setLocation({
          ...parsedLocation,
          loading: false,
          error: null
        });
      } catch (e) {
        // If cached data is invalid, fetch new data
        getLocationFromIP();
      }
    } else {
      getLocationFromIP();
    }
  }, []);

  return location;
};

export default useGeolocation;

