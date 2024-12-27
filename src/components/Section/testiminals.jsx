import React from "react";

const testimonials = [
  {
    name: "Kato Drake Smith",
    role: "App Developer",
    image: "https://via.placeholder.com/150",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat dui diam lacus arcu. Faucibus venenatis felis id augue et cursus pellentesque enim.",
  },
  {
    name: "Dr. Drakeson",
    role: "UX/UI Designer",
    image: "https://via.placeholder.com/150",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat dui diam lacus arcu. Faucibus venenatis felis id augue et cursus pellentesque enim.",
  },
  {
    name: "Katende Phillip",
    role: "Vlogger",
    image: "https://via.placeholder.com/150",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat dui diam lacus arcu. Faucibus venenatis felis id augue et cursus pellentesque enim.",
  },
];

const Testimonials = () => {
  return (
    <div
      className="py-16 px-4 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1500x1000')", // Replace with your background image URL
      }}
    >
      <h2 className="text-center text-2xl font-bold mb-8 text-white">
        What Our Clients Say About Us
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 relative">
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-900 rounded-full p-2 shadow-lg">&#8592;</button>

        <div className="flex flex-row gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg flex flex-col items-center overflow-hidden"
              style={{
                borderRadius: "15px 50px", // Apply border-radius
                padding: "20px", // Add padding
                width: "200px", // Set width
                height: "250px", // Set height
                position: "relative", // To position other elements correctly
              }}
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 bg-blue-500 border-blue-600 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-center">{testimonial.name}</h3>
              <p className="text-blue-600 text-sm mb-4 text-center">
                {testimonial.role}
              </p>
              <p className="text-gray-600 text-sm text-center">{testimonial.text}</p>
              <div
                className="absolute bottom-0 w-full h-12 bg-blue-900 rounded-tl-full rounded-tr-full"
                style={{ zIndex: -1 }}
              ></div>
              <div
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-900 rounded-full"
                style={{ zIndex: -2 }}
              ></div>
              <div
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-blue-900 rounded-full"
                style={{ zIndex: -2 }}
              ></div>
            </div>
          ))}
        </div>

        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white text-blue-900 rounded-full p-2 shadow-lg">&#8594;</button>
      </div>

      <div className="flex justify-center mt-6 gap-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className="w-3 h-3 rounded-full bg-blue-600 cursor-pointer"
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
