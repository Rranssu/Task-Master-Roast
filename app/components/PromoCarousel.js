import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView, Image, Dimensions } from 'react-native';
import { authStyles } from '../styles/authStyles';

const { width } = Dimensions.get('window');

const images = [
  'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80', // Productivity
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', // Writing
  'https://images.unsplash.com/photo-1506784365371-06fd0ede4eb4?auto=format&fit=crop&w=800&q=80', // Relax
];

const PromoCarousel = () => {
  const [active, setActive] = useState(0);
  const scrollRef = useRef();

  // Handle manual scroll to update dots
  const onScroll = (event) => {
    const slide = Math.ceil(event.nativeEvent.contentOffset.x / width);
    if (slide !== active) {
      setActive(slide);
    }
  };

  // Optional: Auto Scroll Logic
  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = active < images.length - 1 ? active + 1 : 0;
      scrollRef.current?.scrollTo({ x: nextSlide * width, animated: true });
      setActive(nextSlide);
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(interval);
  }, [active]);

  return (
    <View style={authStyles.carouselContainer}>
      <ScrollView
        ref={scrollRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {images.map((img, index) => (
          <Image key={index} source={{ uri: img }} style={authStyles.image} />
        ))}
      </ScrollView>

      {/* Pagination Dots */}
      <View style={authStyles.paginationWrapper}>
        {images.map((_, index) => (
          <View 
            key={index} 
            style={[authStyles.dot, active === index && authStyles.activeDot]} 
          />
        ))}
      </View>
    </View>
  );
};

export default PromoCarousel;