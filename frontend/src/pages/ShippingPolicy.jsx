import React from 'react';
import { motion } from 'framer-motion';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-gray-800 p-8 rounded-lg shadow-lg border border-green-700">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-green-400 mb-8 text-center"
        >
          Shipping Policy
        </motion.h1>
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">1. Delivery Areas</h2>
            <p className="mb-4">
              Vin2Grow currently ships handcrafted wooden products across India. Delivery is available to most major cities and towns. To check if we deliver to your location, please enter your pin code at checkout.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">2. Delivery Timelines</h2>
            <p className="mb-4">
              Orders are typically processed within 1-2 business days. Estimated delivery times:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Metro cities: 3-7 business days</li>
              <li>Other locations: 5-10 business days</li>
            </ul>
            <p className="mt-2">Delivery times may vary due to factors such as product availability, customization, or unforeseen courier delays. You will receive tracking details once your order is shipped.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">3. Shipping Charges</h2>
            <p className="mb-4">
              Shipping charges are calculated at checkout based on your delivery location and order value. Occasionally, we may offer free shipping promotions—please check our website for current offers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">4. Order Tracking</h2>
            <p className="mb-4">
              Once your order is shipped, you will receive an email and/or SMS with tracking information. You can also track your order status in your Vin2Grow account dashboard.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">5. Delivery Guidelines</h2>
            <p className="mb-4">
              Please ensure your shipping address and contact details are accurate to avoid delivery delays. If you have special delivery instructions, add them during checkout. If you are unavailable at the time of delivery, our courier partner will attempt redelivery or contact you for further instructions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-green-400 mb-4">6. Contact Information</h2>
            <p>
              For any shipping-related queries, please contact our support team:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Email: vintogrow2@gmail.com</li>
              <li>Phone: +91 7207711919</li>
              <li>WhatsApp: +91 7207711919</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy; 
