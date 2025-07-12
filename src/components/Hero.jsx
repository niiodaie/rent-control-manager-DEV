import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Play, Check } from 'lucide-react';
import VideoModal from './VideoModal';

const Hero = () => {
  const { t } = useTranslation();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Trust Badge */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {t('hero.trustBadge')}
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t('hero.title.part1')}{' '}
            <span className="text-blue-600 dark:text-blue-400">
              {t('hero.title.part2')}
            </span>
            <br className="hidden sm:block" />
            <span className="block sm:inline"> {t('hero.title.part3')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto px-4 sm:px-0">
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 px-4 sm:px-0">
            <Link
              to="/signup"
              className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 group min-h-[48px]"
            >
              <span>{t('hero.startFreeTrial')}</span>
              <Check size={20} className="group-hover:scale-110 transition-transform" />
            </Link>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="w-full sm:w-auto bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold text-base sm:text-lg flex items-center justify-center space-x-2 group shadow-lg min-h-[48px]"
            >
              <Play size={20} className="group-hover:scale-110 transition-transform" />
              <span>{t('hero.watchDemo')}</span>
            </button>
          </div>

          {/* Features List */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 dark:text-gray-300">
            <div className="flex items-center space-x-2">
              <Check size={16} className="text-green-500" />
              <span>{t('hero.features.noSetupFees')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check size={16} className="text-green-500" />
              <span>{t('hero.features.cancelAnytime')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check size={16} className="text-green-500" />
              <span>{t('hero.features.globalSupport')}</span>
            </div>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {t('dashboard.title')}
              </h3>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600 dark:text-green-400">
                  {t('dashboard.status')}
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 relative">
                <div className="demo-badge">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 dark:text-blue-400">247</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{t('dashboard.properties')}</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-xl p-4 relative">
                <div className="demo-badge">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 dark:text-green-400">1,856</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{t('dashboard.tenants')}</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-4 relative sm:col-span-2 lg:col-span-1">
                <div className="demo-badge">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400">98%</div>
                </div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{t('dashboard.occupancy')}</div>
              </div>
            </div>

            {/* Property List Preview */}
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-gray-900 dark:text-white">Sunset Apartments</span>
                </div>
                <span className="text-green-600 dark:text-green-400 font-semibold">$12,500</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-900 dark:text-white">Downtown Lofts</span>
                </div>
                <span className="text-green-600 dark:text-green-400 font-semibold">$8,750</span>
              </div>
            </div>

            {/* Live Updates */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-600 dark:text-gray-300">{t('dashboard.liveUpdates')}</span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 dark:text-gray-300">{t('dashboard.monthlyRevenue')}</div>
                <div className="text-lg font-semibold text-green-600 dark:text-green-400">+23.5%</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal 
        isOpen={isVideoModalOpen} 
        onClose={() => setIsVideoModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;

