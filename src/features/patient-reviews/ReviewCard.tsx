import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "./patient-reviews.scss";
import { Flex, HStack, Icon, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";
import { useCallback, useState } from "react";

const ReviewCard = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  // const testimonials = [
  //   {
  //     text: "I went in for an exam and cleaning, and I was so impressed with the attention to detail. The dentist was thorough, kind, and explained everything in a way that made sense. It’s rare to find a place where you feel genuinely cared for. I’ll definitely return for all my dental needs!",
  //     name: "Rajesh Kumar",
  //     profession: "Software Engineer",
  //     image: review4
  //   },
  //   {
  //     text: "The team at this dental clinic is absolutely incredible! I came in for a root canal and was honestly a bit nervous, but they explained everything thoroughly and made me feel at ease. The process was painless, and the results were outstanding. Their professionalism and care really stood out. ",
  //     name: "Michael Brown",
  //     profession: "Teacher",
  //     image: review1
  //   },
  //   {
  //     text: "I couldn’t be happier with the teeth whitening service! My teeth are brighter, and I’ve been getting compliments on my smile ever since. The clinic is spotless, and the staff are so welcoming. I loved how easy it was to book through their app. It's refreshing to find a place that combines technology with excellent service.",
  //     name: "Sarah Lee",
  //     profession: "Graphic Designer",
  //     image: review2
  //   },
  //   {
  //     text: "The orthodontic services here are top-notch. After two years of braces, I now have the perfect smile, and it’s all thanks to this amazing team. They were with me every step of the way, ensuring I was comfortable and informed. I couldn’t be more grateful. The results are truly life-changing!",
  //     name: "Emily Carter",
  //     profession: "Student",
  //     image: review3
  //   },
  //   {
  //     text: "I recently got a set of dentures here, and the experience was fantastic. The dentist took the time to ensure they fit perfectly and even gave me tips on how to care for them. It’s clear they prioritize their patients' comfort and satisfaction. I’m beyond grateful for their exceptional care and professionalism.",
  //     name: "Sophia",
  //     profession: "Designer",
  //     image: review5
  //   }
  // ];

  const testimonials = [
    {
      text:
        "This is the first dentist where I feel safe. I had bad experiences with dentist office and this one is my favorite! I had problems with my mouth since childhood and they fixed them all. Quick, painless and so easy. Plus the staff are so nice! I love it here.",
      name: "Caniesha Swinton",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjX-Jg2TKahChZeML1-vol2vVysspOlN0S-uuH5onW9DYb65E1EV7g=w81-h81-p-rp-mo-ba2-br100",
      stars: 5
    },
    {
      text:
        "Got quick and affordable care for a scary toothache. They got me checked out with X-rays and the dentist gave me an overview of my whole mouth in addition to letting me know what was going on with my more acute issue. Everything was very affordable and they didn’t try to upsell me on anything— just great care for the issue I came in for!",
      name: "John Rudolph Mueller",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjXAmk5tEuxbmYGDj-Z8JUqUuQDb1ntwuPt0487Wzq0W3AdRgCl5=w81-h81-p-rp-mo-ba3-br100",
      stars: 5
    },
    {
      text:
        "Smile dental experts is honestly the best dentist in the city. Ive always had anxiety about meeting with dentist but they make you feel comfortable and welcomed. Great for any and everyone 10/10",
      name: "Soal Carson",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjVKR7Q-9FyduV8kXZ0GAcGUNJe33935kFmsslDi-YkWhiqdn-d1=w90-h90-p-rp-mo-br100",
      stars: 5
    },
    {
      text:
        "Great Customer Service, Fast & Friendly, Dentist & Assistant was very patient and kind, Quick Appointments. Was in & out within a hour and 1/2. Also, they have a massage chair that tickles your feet & a kids playroom while you wait 😂 I love it!",
      name: "Sherrie Simmons",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjUSrnyQPiRYTSlgicsKwsKJqPHxKIApeghSrBhiS5qwE9TdIC0=w81-h81-p-rp-mo-br100",
      stars: 5
    },
    {
      text:
        "Dr. Mahmood and her staff are exceptional. Went in for a routine check-up and found out that my teeth needed some critical support. In less than an hour, I was done. Have never felt better! Thank you!",
      name: "Nick St. Sauveur",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjWbhJ2mYZ3ELnmDiZrY3nUJDuFMjQaD868jA-8xq1mhcVp9mpk=w81-h81-p-rp-mo-br100",
      stars: 5
    },
    {
      text:
        "They were incredibly careful and kind throughout my visit, making me feel at ease. What I appreciated most was how straightforward they were—they quickly identified the issue and provided effective solutions without unnecessary delays. The whole process was smooth and efficient. I highly recommend them to anyone looking for professional and compassionate dental care!",
      name: "Laura Ramirez",
      image:
        "https://lh3.googleusercontent.com/a-/ALV-UjUr3NxJEJnBgvG59DUX6CLT55X-igx5mekAAVs1qKrAWUn2_H41=w81-h81-p-rp-mo-br100",
      stars: 5
    }
  ];

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <Swiper
      slidesPerView={"auto"}
      centeredSlides={true}
      spaceBetween={30}
      loop={true}
      onSwiper={setSwiperRef}
      breakpoints={{
        640: {
          slidesPerView: 1
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      }}
    >
      {testimonials.map((testimonial, index) => (
        <SwiperSlide key={index}>
          {({ isActive }) => (
            <>
              <Flex
                alignItems={"center"}
                gap={10}
                _hover={{ ".nav-buttons": { opacity: 1 } }}
              >
                {isActive && (
                  <GrLinkPrevious
                    style={{
                      transition: "all .3s ease-in"
                    }}
                    className="nav-buttons"
                    opacity={0}
                    onClick={handlePrevious}
                    size={40}
                    color="#963f36"
                    cursor={"pointer"}
                  />
                )}
                <Image
                  className="slide-image"
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  style={{ width: 64, height: 64, objectFit: "cover", borderRadius: "9999px" }}
                />
                {isActive && (
                  <GrLinkNext
                    style={{
                      transition: "all .3s ease-in"
                    }}
                    className="nav-buttons"
                    opacity={0}
                    onClick={handleNext}
                    size={40}
                    color="#963f36"
                    cursor={"pointer"}
                  />
                )}
              </Flex>
              <Flex className="slide-text" flexDir={"column"}>
                <Text as={"h5"}>{testimonial.text}</Text>
                <Text as={"h4"} mt={4} fontWeight={900}>
                  {testimonial.name}
                </Text>
                <HStack spacing={1} mt={1} aria-label={`${testimonial.stars} out of 5 stars`}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} as={FaStar} color={i < (testimonial.stars || 5) ? "yellow.400" : "gray.300"} boxSize={3.5} />
                  ))}
                </HStack>
              </Flex>
            </>
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewCard;
