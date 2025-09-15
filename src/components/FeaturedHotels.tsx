import { useState } from "react";
import HotelCard from "./HotelCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import luxurySuiteImage from "@/assets/luxury-suite.jpg";
import hotelLobbyImage from "@/assets/hotel-lobby.jpg";
import boutiqueRoomImage from "@/assets/boutique-room.jpg";
import businessHotelImage from "@/assets/business-hotel.jpg";
import chennaiBusy from "@/assets/chennai-beach-resort.jpg";
import ootyHill from "@/assets/ooty-hill-resort.jpg";
import kodaikanalResort from "@/assets/kodaikanal-resort.jpg";
import maduraiHeritage from "@/assets/madurai-heritage-hotel.jpg";

const featuredHotels = [
  {
    id: "1",
    name: "The Grand Luxury Resort",
    image: luxurySuiteImage,
    location: "Maldives",
    rating: 5,
    price: 450,
    originalPrice: 600,
    amenities: ["wifi", "pool", "restaurant", "parking"],
    featured: true,
  },
  {
    id: "7",
    name: "Marina Beach Resort",
    image: chennaiBusy,
    location: "Chennai, Tamil Nadu",
    rating: 4.8,
    price: 280,
    originalPrice: 350,
    amenities: ["wifi", "pool", "restaurant", "spa"],
    featured: true,
  },
  {
    id: "8",
    name: "Nilgiri Hills Resort",
    image: ootyHill,
    location: "Ooty, Tamil Nadu",
    rating: 4.6,
    price: 220,
    originalPrice: 280,
    amenities: ["wifi", "restaurant", "garden"],
    featured: true,
  },
  {
    id: "9",
    name: "Lake View Resort",
    image: kodaikanalResort,
    location: "Kodaikanal, Tamil Nadu",
    rating: 4.7,
    price: 250,
    amenities: ["wifi", "restaurant", "boating"],
    featured: true,
  },
];

interface FeaturedHotelsProps {
  onBook: (id: string) => void;
}

const FeaturedHotels = ({ onBook }: FeaturedHotelsProps) => {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleFavorite = (id: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Hotels
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked selection of the world's most exceptional hotels, 
            each offering unparalleled luxury and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredHotels.map((hotel, index) => (
            <div
              key={hotel.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <HotelCard
                {...hotel}
                onBook={onBook}
                onFavorite={handleFavorite}
                isFavorite={favorites.has(hotel.id)}
              />
            </div>
          ))}
        </div>

        <div className="text-center animate-fade-in">
          <Button className="btn-luxury text-lg px-8 py-3">
            View All Hotels
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;