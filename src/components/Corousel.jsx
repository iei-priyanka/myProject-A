import React from "react";

const Carousel = () => {
  // Data for the carousel items
  const carouselData = [
    {
      id: 1,
      title: "Frontend Development",
      imageUrl: "https://images.unsplash.com/photo-1672307974995-cd253f7f7eeb?q=80&w=800&auto=format&fit=crop",
      description: "Creating intuitive and responsive user interfaces using React.js and modern JavaScript frameworks.",
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      imageUrl: "https://images.unsplash.com/photo-1653387137517-fbc54d488ed8?q=80&w=800&auto=format&fit=crop",
      description: "Building scalable e-commerce platforms with seamless shopping experiences and secure payment integrations.",
    },
    {
      id: 3,
      title: "Performance Optimization",
      imageUrl: "https://images.unsplash.com/photo-1685558593626-686907d7ee4b?q=80&w=800&auto=format&fit=crop",
      description: "Enhancing website performance and load times for a smooth user experience across all devices.",
    },
    {
      id: 4,
      title: "API Integration",
      imageUrl: "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?q=80&w=800&auto=format&fit=crop",
      description: "Seamlessly integrating RESTful APIs to enable dynamic content updates and efficient data handling.",
    },
    {
      id: 5,
      title: "Responsive Design",
      imageUrl: "https://images.unsplash.com/photo-1687603863378-0761c86232bc?q=80&w=800&auto=format&fit=crop",
      description: "Crafting adaptive and user-friendly designs that provide a consistent experience across all devices.",
    },
    {
      id: 6,
      title: "Modular Components",
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format&fit=crop",
      description: "Developing reusable and maintainable components to ensure scalability and consistency in web applications.",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1));
  };

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1));
  };

  React.useEffect(() => {
    const timer = setInterval(handleClickNext, 3000);
    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-10">
      {/* Carousel controls */}
      <button
        onClick={handleClickPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        aria-label="Previous Slide"
      >
        &#9664;
      </button>

      {/* Carousel content */}
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselData.map((item) => (
            <div key={item.id} className="flex-shrink-0 w-full p-4">
              <img
                src={item.imageUrl}
                alt={item.title}
                style={{ width: "100%", height: "auto", maxHeight: "400px", objectFit: "cover" }}
                className="rounded-lg shadow-md"
              />
              <div className="p-4 bg-gray-800 bg-opacity-70 text-white rounded-lg mt-2">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleClickNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition duration-300"
        aria-label="Next Slide"
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
