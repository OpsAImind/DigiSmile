// pages/index.tsx
import React from "react";
import Slider from "react-slick";
import TestimonialReview from "@/components/common/TestimonialReview";
import { Box } from "@chakra-ui/react";

const testimonials = [
  {
    username: "Caniesha Swinton",
    userImage:
      "https://lh3.googleusercontent.com/a-/ALV-UjX-Jg2TKahChZeML1-vol2vVysspOlN0S-uuH5onW9DYb65E1EV7g=w81-h81-p-rp-mo-ba2-br100",
    review:
      "This is the first dentist where I feel safe. I had bad experiences with dentist office and this one is my favorite! I had problems with my mouth since childhood and they fixed them all. Quick, painless and so easy. Plus the staff are so nice! I love it here.",
    stars: 5
  },
  {
    username: "John Rudolph Mueller",
    userImage:
      "https://lh3.googleusercontent.com/a-/ALV-UjXAmk5tEuxbmYGDj-Z8JUqUuQDb1ntwuPt0487Wzq0W3AdRgCl5=w81-h81-p-rp-mo-ba3-br100",
    review:
      "Got quick and affordable care for a scary toothache. They got me checked out with X-rays and the dentist gave me an overview of my whole mouth in addition to letting me know what was going on with my more acute issue. Everything was very affordable and they didn’t try to upsell me on anything— just great care for the issue I came in for!",
    stars: 5
  },
  {
    username: "Soal Carson",
    userImage:
      "https://lh3.googleusercontent.com/a-/ALV-UjVKR7Q-9FyduV8kXZ0GAcGUNJe33935kFmsslDi-YkWhiqdn-d1=w90-h90-p-rp-mo-br100",
    review:
      "Smile dental experts is honestly the best dentist in the city. Ive always had anxiety about meeting with dentist but they make you feel comfortable and welcomed. Great for any and everyone 10/10",
    stars: 5
  },
  {
    username: "Sherrie Simmons",
    userImage:
      "https://lh3.googleusercontent.com/a-/ALV-UjUSrnyQPiRYTSlgicsKwsKJqPHxKIApeghSrBhiS5qwE9TdIC0=w81-h81-p-rp-mo-br100",
    review:
      "Great Customer Service, Fast & Friendly, Dentist & Assistant was very patient and kind, Quick Appointments. Was in & out within a hour and 1/2. Also, they have a massage chair that tickles your feet & a kids playroom while you wait 😂 I love it!",
    stars: 5
  },
  {
    username: "Nick St. Sauveur",
    userImage:
      "https://lh3.googleusercontent.com/a-/ALV-UjWbhJ2mYZ3ELnmDiZrY3nUJDuFMjQaD868jA-8xq1mhcVp9mpk=w81-h81-p-rp-mo-br100",
    review:
      "Dr. Mahmood and her staff are exceptional. Went in for a routine check-up and found out that my teeth needed some critical support. In less than an hour, I was done. Have never felt better! Thank you!",
    stars: 5
  },
  {
    username: "Laura Ramirez",
    userImage:
      "https://lh3.googleusercontent.com/a-/ALV-UjUr3NxJEJnBgvG59DUX6CLT55X-igx5mekAAVs1qKrAWUn2_H41=w81-h81-p-rp-mo-br100",
    review:
      "They were incredibly careful and kind throughout my visit, making me feel at ease. What I appreciated most was how straightforward they were—they quickly identified the issue and provided effective solutions without unnecessary delays. The whole process was smooth and efficient. I highly recommend them to anyone looking for professional and compassionate dental care!",
    stars: 5
  }
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 640, settings: { slidesToShow: 1 } }
  ]
};

const Testimonial: React.FC = () => {
  return (
    <div className="bg-blue-white-gradient py-8">
      <Box className="flex justify-center">
        <h1 className="text-center p-3 font-bold">
          What our patient&apos;s say
        </h1>
      </Box>

      <div className="p-4">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-2">
              <TestimonialReview
                username={testimonial.username}
                userImage={testimonial.userImage}
                review={testimonial.review}
                stars={testimonial.stars}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
