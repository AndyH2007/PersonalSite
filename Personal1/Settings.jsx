import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';
import { PaymentModal } from '../UserProfile';
import { loadStripe } from '@stripe/stripe-js';
import { createCheckoutSession } from '../../services/stripe';

// Initialize Stripe outside of component to avoid multiple instances
let stripePromise = null;
const getStripe = () => {
  if (!stripePromise) {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;
    if (!key) {
      console.error('Stripe publishable key not found. Please check your environment variables.');
      return null;
    }
    stripePromise = loadStripe(key);
  }
  return stripePromise;
};

const SettingsSection = ({ title, children }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`rounded-xl p-6 border transition-colors ${
      isDarkMode 
        ? 'bg-dark-bg-secondary border-neutral-800' 
        : 'bg-white border-gray-200'
    }`}>
      <h2 className={`text-xl font-bold mb-4 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h2>
      {children}
    </div>
  );
};

const ToggleButton = ({ enabled, onChange, label }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="flex items-center justify-between">
      <span className={isDarkMode ? 'text-white' : 'text-gray-900'}>
        {label}
      </span>
      <button
        onClick={() => onChange(!enabled)}
        className={`w-12 h-6 rounded-full p-1 transition-colors ${
          enabled
            ? isDarkMode ? 'bg-red-500' : 'bg-blue-500'
            : isDarkMode ? 'bg-neutral-700' : 'bg-gray-200'
        }`}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full transition-transform transform ${
            enabled ? 'translate-x-6' : 'translate-x-0'
          }`}
        />
      </button>
    </div>
  );
};

const Settings = () => {
  const { currentUser } = useAuth();
  const { isDarkMode, toggleTheme } = useTheme();
  const [settings, setSettings] = useState({
    notifications: true,
    emailUpdates: false,
    emailNewsletter: false,
    language: 'cpp',
    difficulty: 'intermediate'
  });
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [stripeError, setStripeError] = useState(null);

  const handleSettingChange = (key, value) => {
    if (key === 'darkMode') {
      toggleTheme();
    } else {
      setSettings(prev => ({
        ...prev,
        [key]: value
      }));
    }
  };

  useEffect(() => {
    // Check if Stripe is properly initialized
    const initStripe = async () => {
      try {
        const stripe = await getStripe();
        if (!stripe) {
          setStripeError('Payment system is currently unavailable. Please try again later.');
        }
      } catch (err) {
        console.error('Error initializing Stripe:', err);
        setStripeError('Failed to initialize payment system. Please try again later.');
      }
    };
    
    initStripe();
  }, []);

  const handleUpgradeClick = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const stripe = await getStripe();
      if (!stripe) {
        throw new Error('Payment system is not available at the moment.');
      }

      // Create checkout session using our service
      const { id: sessionId } = await createCheckoutSession(
        currentUser.uid,
        currentUser.email
      );

      // Redirect to Stripe checkout
      const { error } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (error) {
        throw error;
      }
    } catch (err) {
      console.error('Error starting checkout:', err);
      setError(err.message || 'An error occurred while processing your request.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Settings</h1>
      
      {/* Theme Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Theme</h2>
        <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Dark Mode</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Toggle between light and dark themes</p>
          </div>
          <button
            onClick={toggleTheme}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 dark:bg-gray-700"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                isDarkMode ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </section>

      {/* Email & Notifications */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Email & Notifications</h2>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Email Notifications</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Receive updates about your progress and achievements</p>
            </div>
            <button
              onClick={() => handleSettingChange('notifications', !settings.notifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                settings.notifications 
                  ? isDarkMode ? 'bg-red-500' : 'bg-blue-600'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  settings.notifications ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Weekly Updates</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Get weekly summaries of your learning progress</p>
            </div>
            <button
              onClick={() => handleSettingChange('emailUpdates', !settings.emailUpdates)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                settings.emailUpdates 
                  ? isDarkMode ? 'bg-red-500' : 'bg-blue-600'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  settings.emailUpdates ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Newsletter Subscription</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Stay updated with competitive programming news and tips</p>
            </div>
            <button
              onClick={() => handleSettingChange('emailNewsletter', !settings.emailNewsletter)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full ${
                settings.emailNewsletter 
                  ? isDarkMode ? 'bg-red-500' : 'bg-blue-600'
                  : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition ${
                  settings.emailNewsletter ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Subscription Settings */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Subscription</h2>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Current Plan</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {currentUser?.subscriptionStatus === 'pro' ? 'Pro Plan' : 'Free Plan'}
              </p>
            </div>
            {currentUser?.subscriptionStatus !== 'pro' && !stripeError && (
              <button
                onClick={handleUpgradeClick}
                disabled={isLoading}
                className={`px-4 py-2 ${
                  isDarkMode 
                    ? 'bg-red-500 hover:bg-red-600' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white rounded-lg transition-colors ${
                  isLoading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Processing...' : 'Upgrade to Pro'}
              </button>
            )}
          </div>
          {(error || stripeError) && (
            <div className="mt-2 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error || stripeError}
            </div>
          )}
          {currentUser?.subscriptionStatus === 'pro' && (
            <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Your Pro subscription is active. To manage your subscription or billing, please contact support.
              </p>
              <a
                href="mailto:support@learnolympiad.com"
                className="inline-block mt-2 text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                Contact Support
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Integrations */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
          Integrations
          <span className="ml-2 text-sm font-normal text-gray-500 dark:text-gray-400">(Coming Soon)</span>
        </h2>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow space-y-4">
          <div className="flex items-center justify-between opacity-60">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Desmos Integration</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Visualize mathematical concepts and algorithms</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Coming Soon</span>
          </div>

          <div className="flex items-center justify-between opacity-60">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">Miro Integration</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Collaborative problem-solving and visualization</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Coming Soon</span>
          </div>

          <div className="flex items-center justify-between opacity-60">
            <div>
              <p className="font-medium text-gray-900 dark:text-white">GitHub Integration</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Track your coding progress and submissions</p>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">Coming Soon</span>
          </div>
        </div>
      </section>

      {/* Account Settings */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Account</h2>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <div className="mb-4">
            <p className="font-medium text-gray-900 dark:text-white">Email</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{currentUser?.email}</p>
          </div>
          <div>
            <p className="font-medium text-gray-900 dark:text-white">Account Type</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {currentUser?.subscriptionStatus === 'pro' ? 'Pro User' : 'Free User'}
            </p>
          </div>
        </div>
      </section>

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        currentUser={currentUser}
      />
    </div>
  );
};

export default Settings; 