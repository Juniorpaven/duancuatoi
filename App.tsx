
import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-cream font-sans text-primary-text antialiased">
      <Header
        onScrollToAbout={() => scrollTo(aboutRef)}
        onScrollToServices={() => scrollTo(servicesRef)}
        onScrollToTestimonials={() => scrollTo(testimonialsRef)}
        onScrollToBooking={() => scrollTo(bookingRef)}
      />
      <main>
        <Hero onScrollToBooking={() => scrollTo(bookingRef)} />
        <div ref={aboutRef}><About /></div>
        <div ref={servicesRef}><Services /></div>
        <div ref={testimonialsRef}><Testimonials /></div>
        <div ref={bookingRef}><BookingForm /></div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
