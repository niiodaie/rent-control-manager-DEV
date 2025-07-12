import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Check, Star, Crown, Building } from 'lucide-react';

const Pricing = () => {
  const { t } = useTranslation();
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      id: 'starter',
      name: t('pricing.starter.name', 'Starter'),
      description: t('pricing.starter.description', 'Perfect for individual property owners'),
      price: 0,
      originalPrice: 0,
      icon: Building,
      badge: t('pricing.starter.badge', 'Free Forever'),
      badgeColor: 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400',
      buttonText: t('pricing.starter.button', 'Start Free'),
      buttonStyle: 'bg-green-600 hover:bg-green-700 text-white',
      features: [
        t('pricing.starter.features.properties', 'Manage up to 1 property'),
        t('pricing.starter.features.tenants', 'Basic tenant management'),
        t('pricing.starter.features.collection', 'Rent collection'),
        t('pricing.starter.features.support', 'Email support'),
        t('pricing.starter.features.marketplace', 'Access to marketplace'),
        t('pricing.starter.features.mobile', 'Mobile app access')
      ]
    },
    {
      id: 'professional',
      name: t('pricing.professional.name', 'Professional'),
      description: t('pricing.professional.description', 'Ideal for growing property portfolios'),
      price: isAnnual ? 41.58 : 49.99,
      originalPrice: 49.99,
      icon: Star,
      badge: t('pricing.professional.badge', 'Most Popular'),
      badgeColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400',
      buttonText: t('pricing.professional.button', 'Start Free Trial'),
      buttonStyle: 'bg-blue-600 hover:bg-blue-700 text-white',
      popular: true,
      features: [
        t('pricing.professional.features.properties', 'Manage up to 10 properties'),
        t('pricing.professional.features.portal', 'Advanced tenant portal'),
        t('pricing.professional.features.currency', 'Multi-currency support'),
        t('pricing.professional.features.workflows', 'Maintenance workflows'),
        t('pricing.professional.features.support', 'Priority email support'),
        t('pricing.professional.features.analytics', 'Advanced analytics'),
        t('pricing.professional.features.api', 'API access'),
        t('pricing.professional.features.branding', 'Custom branding')
      ]
    },
    {
      id: 'premium',
      name: t('pricing.premium.name', 'Premium'),
      description: t('pricing.premium.description', 'For established property managers'),
      price: isAnnual ? 83.32 : 99.99,
      originalPrice: 99.99,
      icon: Crown,
      badge: t('pricing.premium.badge', 'Advanced'),
      badgeColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400',
      buttonText: t('pricing.premium.button', 'Start Free Trial'),
      buttonStyle: 'bg-purple-600 hover:bg-purple-700 text-white',
      features: [
        t('pricing.premium.features.properties', 'Manage up to 50 properties'),
        t('pricing.premium.features.language', 'Multi-language support'),
        t('pricing.premium.features.payments', 'Global payment processing'),
        t('pricing.premium.features.automation', 'Advanced automation'),
        t('pricing.premium.features.support', 'Phone support'),
        t('pricing.premium.features.whitelabel', 'White-label solution'),
        t('pricing.premium.features.integrations', 'Custom integrations'),
        t('pricing.premium.features.manager', 'Dedicated account manager')
      ]
    },
    {
      id: 'enterprise',
      name: t('pricing.enterprise.name', 'Enterprise'),
      description: t('pricing.enterprise.description', 'For large property management companies'),
      price: isAnnual ? 416.65 : 499.99,
      originalPrice: 499.99,
      icon: Building,
      badge: t('pricing.enterprise.badge', 'Custom'),
      badgeColor: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
      buttonText: t('pricing.enterprise.button', 'Contact Sales'),
      buttonStyle: 'bg-gray-800 hover:bg-gray-900 text-white dark:bg-gray-600 dark:hover:bg-gray-500',
      isContactSales: true,
      features: [
        t('pricing.enterprise.features.properties', 'Unlimited properties'),
        t('pricing.enterprise.features.compliance', 'Global compliance tools'),
        t('pricing.enterprise.features.security', 'Enterprise security'),
        t('pricing.enterprise.features.workflows', 'Custom workflows'),
        t('pricing.enterprise.features.support', '24/7 phone support'),
        t('pricing.enterprise.features.deployment', 'On-premise deployment'),
        t('pricing.enterprise.features.development', 'Custom development'),
        t('pricing.enterprise.features.sla', 'SLA guarantee')
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            {t('pricing.subtitle')}
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              {t('pricing.monthly')}
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              {t('pricing.annual')}
            </span>
            {isAnnual && (
              <span className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 text-xs font-medium px-2 py-1 rounded-full">
                {t('pricing.save17')}
              </span>
            )}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 ${
                  plan.popular ? 'ring-2 ring-blue-600 dark:ring-blue-400' : ''
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium ${plan.badgeColor}`}>
                    {plan.badge}
                  </div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className={`p-3 rounded-full ${
                    plan.id === 'starter' ? 'bg-green-100 dark:bg-green-900/20' :
                    plan.id === 'professional' ? 'bg-blue-100 dark:bg-blue-900/20' :
                    plan.id === 'premium' ? 'bg-purple-100 dark:bg-purple-900/20' :
                    'bg-gray-100 dark:bg-gray-700'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      plan.id === 'starter' ? 'text-green-600 dark:text-green-400' :
                      plan.id === 'professional' ? 'text-blue-600 dark:text-blue-400' :
                      plan.id === 'premium' ? 'text-purple-600 dark:text-purple-400' :
                      'text-gray-600 dark:text-gray-300'
                    }`} />
                  </div>
                </div>

                {/* Plan Name */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center mb-6">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="text-center mb-6">
                  {plan.price === 0 ? (
                    <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                      Free
                    </div>
                  ) : (
                    <>
                      <div className="text-4xl font-bold text-gray-900 dark:text-white">
                        ${plan.price}
                        <span className="text-lg font-normal text-gray-600 dark:text-gray-300">/mo</span>
                      </div>
                      {isAnnual && plan.originalPrice > plan.price && (
                        <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                          ${plan.originalPrice}/mo
                        </div>
                      )}
                    </>
                  )}
                </div>

                {/* CTA Button */}
                {plan.isContactSales ? (
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-colors duration-200 block ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </Link>
                ) : (
                  <Link
                    to="/signup"
                    className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-colors duration-200 block ${plan.buttonStyle}`}
                  >
                    {plan.buttonText}
                  </Link>
                )}

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              {t('pricing.enterprise.cta.title', 'Need a Custom Global Solution?')}
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              {t('pricing.enterprise.cta.description', 'We offer custom enterprise solutions for large property management companies with specific requirements across multiple countries and jurisdictions.')}
            </p>
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-block"
            >
              {t('pricing.enterprise.cta.button', 'Contact Enterprise Sales')}
            </Link>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            {t('pricing.questions', 'Have questions about our pricing?')}{' '}
            <Link to="/contact" className="text-blue-600 dark:text-blue-400 hover:underline">
              {t('pricing.contactUs', 'Contact us')}
            </Link>{' '}
            {t('pricing.or', 'or check our')}{' '}
            <Link to="/faq" className="text-blue-600 dark:text-blue-400 hover:underline">
              {t('pricing.faq', 'frequently asked questions')}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

