import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedHotels from "@/components/FeaturedHotels";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import luxurySuiteImage from "@/assets/luxury-suite.jpg";
import hotelLobbyImage from "@/assets/hotel-lobby.jpg";
import boutiqueRoomImage from "@/assets/boutique-room.jpg";
import businessHotelImage from "@/assets/business-hotel.jpg";
import chennaiBusy from "@/assets/chennai-beach-resort.jpg";
import ootyHill from "@/assets/ooty-hill-resort.jpg";
import kodaikanalResort from "@/assets/kodaikanal-resort.jpg";

const hotelData = [
  {
    id: "1",
    name: "The Grand Luxury Resort",
    image: luxurySuiteImage,
    location: "Maldives",
    rating: 5,
    price: 450,
  },
  {
    id: "7",
    name: "Marina Beach Resort",
    image: chennaiBusy,
    location: "Chennai, Tamil Nadu",
    rating: 4.8,
    price: 280,
  },
  {
    id: "8",
    name: "Nilgiri Hills Resort",
    image: ootyHill,
    location: "Ooty, Tamil Nadu",
    rating: 4.6,
    price: 220,
  },
  {
    id: "9",
    name: "Lake View Resort",
    image: kodaikanalResort,
    location: "Kodaikanal, Tamil Nadu",
    rating: 4.7,
    price: 250,
  },
];

const Index = () => {
  const [selectedHotel, setSelectedHotel] = useState<any>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const handleHotelBook = (hotelId: string) => {
    const hotel = hotelData.find(h => h.id === hotelId);
    if (hotel) {
      setSelectedHotel(hotel);
      setIsBookingModalOpen(true);
    }
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setSelectedHotel(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturedHotels onBook={handleHotelBook} />
        <ReviewsSection />
      </main>
      <Footer />
      
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
        hotel={selectedHotel}
      />
    </div>
  );
};

export default Index;
