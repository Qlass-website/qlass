import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const testimonialsData = [
    {
      id: 1,
      rating: 5,
      content:
        "When I came first time, I was scared and have tension of how to improve my studies. But after my first days I understand and learn the best and easy way of studies in my life because of the best teacher and management and best easy way of teaching it helped mevery much before joining the coaching my maths and science was worst and after joining the coaching, my maths and science are going to be best from to be best. I like science very much now from before and after Maths and at last, but not the least I want to thank the management and teacher to teaching me nice and in a very easy way.",
      name: "Anshul",
      image: "/Anshul.jpg",
    },
    {
      id: 2,
      rating: 4.5,
      content:
        "As honest my feelings for coaching are that key coaching, Bahut Mast Hai and Humko Lagta Hai ki Yeh Best coaching of Patna Hai because is coaching my teacher Sabat friendly and according to me students khol Ke Apni Saari Baaten share kar sakte hain teacher school like Problem life Main Hota Hai and coaching mein Han Aste Padai Hoti Hai and coaching my teachers come Friends Jada Hote hain Sab Ke of pressure Nahi Hota or Parag ko leke bahar teacher Sab sare concept clear kar Dete hain and honestly speakinggrateful grateful ki hum is coaching my Padte Hain. Thank you",
      name: "Tanmay",
      image: "/Tanmay.jpg",
    },
    {
      id: 3,
      rating: 4,
      content:
        "Jab Maine coaching join kiya T mujhe Bohot special feel Hota Tha Yogi saare teachers Jada Tara Mere Upar focus Karte The starting mujhe Jada kuch Samajh nahin Aata Tha Par Dheere Dheere mujhe Samajh ane laga Pele mujhe physics ka numerical Bilkul Samajh mein nahin Aata Tha par a sari numerical mujhe Bohot Lagne laga Pehle mujhe Maths Bana Bilkul pasand Nahi Tha par mujhe Maths Banane mein Maza Aata Haiology mein mam Bohot Achcha Hai chemistry mein Mere Pehle Se Bohot Jada improvement Hai Yahan teachers Bohot friendly hair coaching join karne ke baad meri school mein periodic test usme Mera Bohot acha marks aaya h",
      name: "Deepasmita",
      image: "/Deepsmita.jpg",
    },
    {
      id: 4,
      rating: 5,
      content:
        "When I came first time, I was scared and have tension of how to improve my studies. But after my first days I understand and learn the best and easy way of studies in my life because of the best teacher and management and best easy way of teaching it helped mevery much before joining the coaching my maths and science was worst and after joining the coaching, my maths and science are going to be best from to be best. I like science very much now from before and after Maths and at last, but not the least I want to thank the management and teacher to teaching me nice and in a very easy way.",
      name: "Anshul",
      image: "/Anshul.jpg",
    },
    {
      id: 5,
      rating: 4.5,
      content:
        "As honest my feelings for coaching are that key coaching, Bahut Mast Hai and Humko Lagta Hai ki Yeh Best coaching of Patna Hai because is coaching my teacher Sabat friendly and according to me students khol Ke Apni Saari Baaten share kar sakte hain teacher school like Problem life Main Hota Hai and coaching mein Han Aste Padai Hoti Hai and coaching my teachers come Friends Jada Hote hain Sab Ke of pressure Nahi Hota or Parag ko leke bahar teacher Sab sare concept clear kar Dete hain and honestly speakinggrateful grateful ki hum is coaching my Padte Hain. Thank you",
      name: "Tanmay",
      image: "/Tanmay.jpg",
    },
    {
      id: 6,
      rating: 4,
      content:
        "Jab Maine coaching join kiya T mujhe Bohot special feel Hota Tha Yogi saare teachers Jada Tara Mere Upar focus Karte The starting mujhe Jada kuch Samajh nahin Aata Tha Par Dheere Dheere mujhe Samajh ane laga Pele mujhe physics ka numerical Bilkul Samajh mein nahin Aata Tha par a sari numerical mujhe Bohot Lagne laga Pehle mujhe Maths Bana Bilkul pasand Nahi Tha par mujhe Maths Banane mein Maza Aata Haiology mein mam Bohot Achcha Hai chemistry mein Mere Pehle Se Bohot Jada improvement Hai Yahan teachers Bohot friendly hair coaching join karne ke baad meri school mein periodic test usme Mera Bohot acha marks aaya h",
      name: "Deepasmita",
      image: "/Deepsmita.jpg",
    },
    {
      id: 7,
      rating: 5,
      content:
        "When I came first time, I was scared and have tension of how to improve my studies. But after my first days I understand and learn the best and easy way of studies in my life because of the best teacher and management and best easy way of teaching it helped mevery much before joining the coaching my maths and science was worst and after joining the coaching, my maths and science are going to be best from to be best. I like science very much now from before and after Maths and at last, but not the least I want to thank the management and teacher to teaching me nice and in a very easy way.",
      name: "Anshul",
      image: "/Anshul.jpg",
    },
    {
      id: 8,
      rating: 4.5,
      content:
        "As honest my feelings for coaching are that key coaching, Bahut Mast Hai and Humko Lagta Hai ki Yeh Best coaching of Patna Hai because is coaching my teacher Sabat friendly and according to me students khol Ke Apni Saari Baaten share kar sakte hain teacher school like Problem life Main Hota Hai and coaching mein Han Aste Padai Hoti Hai and coaching my teachers come Friends Jada Hote hain Sab Ke of pressure Nahi Hota or Parag ko leke bahar teacher Sab sare concept clear kar Dete hain and honestly speakinggrateful grateful ki hum is coaching my Padte Hain. Thank you",
      name: "Tanmay",
      image: "/Tanmay.jpg",
    },
    {
      id: 9,
      rating: 4,
      content:
        "Jab Maine coaching join kiya T mujhe Bohot special feel Hota Tha Yogi saare teachers Jada Tara Mere Upar focus Karte The starting mujhe Jada kuch Samajh nahin Aata Tha Par Dheere Dheere mujhe Samajh ane laga Pele mujhe physics ka numerical Bilkul Samajh mein nahin Aata Tha par a sari numerical mujhe Bohot Lagne laga Pehle mujhe Maths Bana Bilkul pasand Nahi Tha par mujhe Maths Banane mein Maza Aata Haiology mein mam Bohot Achcha Hai chemistry mein Mere Pehle Se Bohot Jada improvement Hai Yahan teachers Bohot friendly hair coaching join karne ke baad meri school mein periodic test usme Mera Bohot acha marks aaya h",
      name: "Deepasmita",
      image: "/Deepsmita.jpg",
    },
  ];

  const getStarIcons = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
  
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>⭐️</span>);
    }
  
    if (hasHalfStar) {
      stars.push(<span key="half" style={{ position: "relative", display: "inline-block" }}>
        <span style={{
          position: "absolute",
          overflow: "hidden",
          width: "50%",
          height: "100%",
        }}>⭐️</span>
        ⭐️
      </span>);
    }
  
    return stars;
  };

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{
        align: "start",
      }}
      className="w-full max-w-6xl"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {testimonialsData.map((testimonial) => (
          <CarouselItem
            key={testimonial.id}
            className="lg:basis-1/1 md:basis-1/2"
          >
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col items-center p-6 md:flex-row md:justify-between md:space-x-14">
                  <div className="flex items-center space-x-4 md:mb-0">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={testimonial.image} />
                      <AvatarFallback>{testimonial.name}</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col items-start space-y-3">
                    <div className="space-x-1 text-3xl font-semibold">
                      {getStarIcons(testimonial.rating)}
                    </div>
                    <p className="text-gray-700">{testimonial.content}</p>
                    <strong>{testimonial.name}</strong>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
