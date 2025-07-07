import React from "react";
import img1 from "../../assets/images/live-tracking.png";
import img2 from "../../assets/images/safe-delivery.png";
const Benefits = () => {
  const features = [
    {
      id: 1,
      image: img1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    },
    {
      id: 2,
      image: img2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    },
    {
      id: 3,
      image: img2,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
    },
  ];

  return (
    <div className="max-w-321 mx-auto mt-25">
      {/* Separator Line */}
      <div className="border-t-2 border-dashed border-gray-300"></div>
      {/* main Content Section */}
      <div className="space-y-6 mt-20">
        {features.map((feature) => (
          <div key={feature.id} className="bg-white rounded-3xl p-6 md:p-8">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-10 items-center">
              {/* Image Section */}
              <div className="sm:col-span-3 lg:col-span-2 flex justify-center">
                <div className="w-32 h-32 md:w-50 md:h-50 flex items-center justify-center">
                  <img src={feature.image} alt="" />
                </div>
              </div>

              {/* Separator Line */}
              <div className="hidden md:block sm:w-auto sm:flex justify-center">
                <div className="w-px h-30 border-l-2 border-dashed border-gray-300"></div>
              </div>

              {/* Content Section */}
              <div className="sm:col-span-8 lg:col-span-9 space-y-3 lg:-ml-10">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Separator Line */}
      <div className="border-t-2 border-dashed border-gray-300 mt-20"></div>
    </div>
  );
};

export default Benefits;
