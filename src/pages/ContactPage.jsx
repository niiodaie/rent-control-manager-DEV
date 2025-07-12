import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title', 'Contact Us')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('contact.subtitle', 'Get in touch with our global support team. We\'re here to help you succeed with your property management needs.')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contact.info.title', 'Get in Touch')}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              {t('contact.info.description', 'Have questions about Rent Control? Our global support team is here to help you succeed with your property management needs.')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {t('contact.email.title', 'Email Support')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {t('contact.email.description', 'Get help from our support team')}
                  </p>
                  <a 
                    href="mailto:support@rentcontrol.net" 
                    className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
                  >
                    support@rentcontrol.net
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {t('contact.phone.title', 'Phone Support')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {t('contact.phone.description', 'Speak directly with our team')}
                  </p>
                  <a 
                    href="tel:+19201234567" 
                    className="text-green-600 dark:text-green-400 hover:underline font-medium"
                  >
                    +1 (920) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {t('contact.address.title', 'Global Headquarters')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">
                    {t('contact.address.description', 'Visit us at our main office')}
                  </p>
                  <address className="text-purple-600 dark:text-purple-400 not-italic">
                    Appleton, WI<br />
                    Global Headquarters<br />
                    Available Worldwide
                  </address>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {t('contact.hours.title', 'Support Hours')}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {t('contact.hours.weekdays', 'Monday - Friday: 8:00 AM - 8:00 PM CST')}<br />
                    {t('contact.hours.weekend', 'Saturday - Sunday: 10:00 AM - 6:00 PM CST')}<br />
                    <span className="text-orange-600 dark:text-orange-400 font-medium">
                      {t('contact.hours.emergency', '24/7 Emergency Support Available')}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('contact.form.title', 'Send us a Message')}
            </h2>

            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t('contact.form.success.title', 'Message Sent!')}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t('contact.form.success.message', 'Thank you for contacting us. We\'ll get back to you within 24 hours.')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.name', 'Full Name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                      placeholder={t('contact.form.namePlaceholder', 'Enter your full name')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('contact.form.email', 'Email Address')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                      placeholder={t('contact.form.emailPlaceholder', 'Enter your email address')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.company', 'Company Name')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                    placeholder={t('contact.form.companyPlaceholder', 'Enter your company name')}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.subject', 'Subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors"
                  >
                    <option value="">{t('contact.form.selectSubject', 'Select a subject')}</option>
                    <option value="general">{t('contact.form.subjects.general', 'General Inquiry')}</option>
                    <option value="support">{t('contact.form.subjects.support', 'Technical Support')}</option>
                    <option value="sales">{t('contact.form.subjects.sales', 'Sales Question')}</option>
                    <option value="partnership">{t('contact.form.subjects.partnership', 'Partnership')}</option>
                    <option value="billing">{t('contact.form.subjects.billing', 'Billing Issue')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('contact.form.message', 'Message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors resize-none"
                    placeholder={t('contact.form.messagePlaceholder', 'Tell us how we can help you...')}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>{t('contact.form.submit', 'Send Message')}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('contact.emergency.title', 'Need Immediate Help?')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('contact.emergency.description', 'For urgent technical issues or emergencies, our 24/7 support team is available to assist you.')}
            </p>
            <a
              href="tel:+19201234567"
              className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold inline-block"
            >
              {t('contact.emergency.button', 'Call Emergency Support')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

