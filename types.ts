
export interface Service {
  image: string;
  name: string;
  description: string;
  price: string;
  duration: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  avatar: string;
  rating: number;
}

export interface BookingFormData {
  name: string;
  phone: string;
  service: string;
  date: string;
  time: string;
}
