"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$2999",
    description: "Perfect for simple MVP apps",
    features: [
      "Basic UI/UX Design",
      "Core Feature Implementation",
      "Basic Authentication",
      "2 Week Delivery",
      "1 Month Support",
      "Source Code Access",
    ],
  },
  {
    name: "Pro",
    price: "$4999",
    description: "For more complex applications",
    features: [
      "Advanced UI/UX Design",
      "Complex Features",
      "Social Auth Integration",
      "3 Week Delivery",
      "3 Months Support",
      "Source Code Access",
      "API Integration",
      "Push Notifications",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For full-scale applications",
    features: [
      "Premium UI/UX Design",
      "Custom Feature Development",
      "Advanced Security",
      "Custom Timeline",
      "6 Months Support",
      "Source Code Access",
      "Third-party Integrations",
      "Scalable Architecture",
      "24/7 Priority Support",
    ],
  },
];

function Pricing() {
  return (
    <div id="pricing" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose the perfect plan for your MVP development needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className={cn(
                "p-8 rounded-2xl relative",
                "backdrop-blur-sm border",
                plan.highlighted
                  ? "-translate-y-4 bg-gradient-to-br from-blue-500/20 via-blue-500/10 to-blue-400/5 border-blue-500/50 shadow-xl shadow-blue-500/20"
                  : "bg-white/5 border-white/10"
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-blue-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              <p className="text-gray-400 mb-6">{plan.description}</p>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={cn(
                  "w-full mt-8 py-3 px-6 rounded-lg font-medium transition-all",
                  plan.highlighted
                    ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/10 hover:bg-white/20"
                )}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
