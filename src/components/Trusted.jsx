import React from "react";
import { motion } from "framer-motion";

const Trusted = () => {
  const trustedBrands = [
    {
      name: "Brand 1",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Brand 2",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Brand 3",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Brand 4",
      image: "https://via.placeholder.com/150",
    },
    {
      name: "Brand 5",
      image: "https://via.placeholder.com/150",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Trusted By
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We are proud to be trusted by these amazing brands
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {trustedBrands.map((brand, index) => (
            <motion.div
              key={index}
              className="p-4 hover:scale-105 transition-transform duration-300"
              variants={itemVariants}
            >
              <img
                src={brand.image}
                alt={brand.name}
                className="w-32 h-32 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Why Choose Us?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <p className="text-gray-600">Products</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                  <p className="text-gray-600">Support</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;