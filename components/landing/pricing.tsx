"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
const plans = [
  {
    name: "Basic",
    price: "$2999",
    description: "Perfect for simple MVP apps",
    features: [
      "Basic UI/UX Design",
      "Core Feature Implementation",
      "Authentication",
      "Source Code Access",
      "Android & iOS",
      "14 Days Delivery",
      "1 Month Support",
    ],
  },
  {
    name: "Pro",
    price: "$4999",
    description: "For more complex applications",
    features: [
      "Premium UI/UX Design",
      "Complex Features",
      "Authentication",
      "Analytics",
      "Push Notifications",
      "In-App Purchases",
      "14 Days Delivery",
      "2 Months Support",
      "Source Code Access",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For intense business apps",
    features: [],
    isCustom: true,
  },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

function Pricing() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
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
                "p-8 rounded-2xl relative min-h-[550px]",
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
              {plan.isCustom ? (
                <button
                  data-cal-namespace="30min"
                  data-cal-link="khushaal-choithramani-5mvbsx/30min"
                  data-cal-config='{"layout":"month_view"}'
                  onClick={() => scrollToSection("home")}
                  className={cn(
                    "w-full mt-8 py-3 max-w-xs mx-auto px-6 rounded-lg font-medium transition-all absolute bottom-5 left-0 right-0",
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/10 hover:bg-white/20"
                  )}
                >
                  Book a Call
                </button>
              ) : (
                <button
                  data-cal-namespace="30min"
                  data-cal-link="khushaal-choithramani-5mvbsx/30min"
                  data-cal-config='{"layout":"month_view"}'
                  onClick={() => scrollToSection("home")}
                  className={cn(
                    "w-full mt-8 py-3 max-w-xs mx-auto px-6 rounded-lg font-medium transition-all absolute bottom-5 left-0 right-0",
                    plan.highlighted
                      ? "bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white/10 hover:bg-white/20"
                  )}
                >
                  Get Started
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
