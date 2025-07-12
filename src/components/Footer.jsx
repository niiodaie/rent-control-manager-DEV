import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import rcLogo from '../assets/RC-Logo.png';

const Footer = () => {
  const { t } = useTranslation();

  const footerLinks = {
    product: [
      { name: t('footer.product.features', 'Features'), to: '/#features' },
      { name: t('footer.product.pricing', 'Pricing'), to: '/#pricing' },
      { name: t('footer.product.demo', 'Demo'), to: '/' },
      { name: t('footer.product.api', 'API'), to: '/api' }
    ],
    company: [
      { name: t('footer.company.about', 'About'), to: '/about' },
      { name: t('footer.company.contact', 'Contact'), to: '/contact' },
      { name: t('footer.company.careers', 'Careers'), to: '/careers' },
      { name: t('footer.company.blog', 'Blog'), to: '/blog' }
    ],
    support: [
      { name: t('footer.support.help', 'Help Center'), to: '/help' },
      { name: t('footer.support.faq', 'FAQ'), to: '/faq' },
      { name: t('footer.support.community', 'Community'), to: '/community' },
      { name: t('footer.support.status', 'Status'), to: '/status' }
    ],
    legal: [
      { name: t('footer.legal.privacy', 'Privacy Policy'), to: '/privacy' },
      { name: t('footer.legal.terms', 'Terms of Service'), to: '/terms' },
      { name: t('footer.legal.cookies', 'Cookie Policy'), to: '/cookies' },
      { name: t('footer.legal.gdpr', 'GDPR'), to: '/gdpr' }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img src={rcLogo} alt="Rent Control" className="h-8 w-auto" />
              <span className="text-xl font-bold">Rent Control</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description', 'Global property management platform trusted by thousands of property managers worldwide. Streamline your rental business with our comprehensive solution.')}
            </p>
            
            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <a href="mailto:support@rentcontrol.net" className="text-gray-300 hover:text-white transition-colors">
                  support@rentcontrol.net
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <a href="tel:+19201234567" className="text-gray-300 hover:text-white transition-colors">
                  +1 (920) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  Appleton, WI – Global Headquarters
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  Available Worldwide
                </span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.product.title', 'Product')}</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company.title', 'Company')}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.support.title', 'Support')}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.legal.title', 'Legal')}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.to} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Rent Control. {t('footer.rights', 'All rights reserved.')}
            </div>
            
            {/* Visnec Branding */}
            <div className="text-gray-400 text-sm">
              <a 
                href="https://visnec.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Powered by Visnec
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

