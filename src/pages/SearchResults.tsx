import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, Coffee, Dumbbell, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import luxurySuite from '@/assets/luxury-suite.jpg';
import boutiqueRoom from '@/assets/boutique-room.jpg';
import businessHotel from '@/assets/business-hotel.jpg';
import hotelLobby from '@/assets/hotel-lobby.jpg';
import chennaiBusy from "@/assets/chennai-beach-resort.jpg";
import ootyHill from "@/assets/ooty-hill-resort.jpg";
import kodaikanalResort from "@/assets/kodaikanal-resort.jpg";
import maduraiHeritage from "@/assets/madurai-heritage-hotel.jpg";

// Mock hotel data for search results
const hotelResults = [
  {
    id: "1",
    name: "The Grand Luxury Resort",
    image: luxurySuite,
    location: "Maldives",
    rating: 5,
    price: 450,
    amenities: ["Free WiFi", "Private Beach", "Restaurant", "Spa"],
    availability: "Available"
  },
  {
    id: "2", 
    name: "Metropolitan Elite Hotel",
    image: boutiqueRoom,
    location: "New York City",
    rating: 5,
    price: 320,
    amenities: ["Free WiFi", "Business Center", "Restaurant", "Gym"],
    availability: "Available"
  },
  {
    id: "3",
    name: "Mountain Lodge",
    image: businessHotel, 
    location: "Aspen, USA",
    rating: 4.7,
    price: 249,
    amenities: ["Free WiFi", "Parking", "Restaurant", "Ski Access"],
    availability: "Available"
  },
  {
    id: "4",
    name: "City Center Hotel",
    image: hotelLobby,
    location: "London, UK", 
    rating: 4.5,
    price: 179,
    amenities: ["Free WiFi", "Restaurant", "Gym", "Business Center"],
    availability: "Available"
  },
  // Tamil Nadu Hotels
  {
    id: "7",
    name: "Marina Beach Resort",
    image: chennaiBusy,
    location: "Chennai, Tamil Nadu",
    rating: 4.8,
    price: 280,
    amenities: ["Free WiFi", "Beach Access", "Restaurant", "Spa"],
    availability: "Available"
  },
  {
    id: "8",
    name: "Nilgiri Hills Resort",
    image: ootyHill,
    location: "Ooty, Tamil Nadu",
    rating: 4.6,
    price: 220,
    amenities: ["Free WiFi", "Mountain View", "Restaurant", "Garden"],
    availability: "Available"
  },
  {
    id: "9",
    name: "Lake View Resort",
    image: kodaikanalResort,
    location: "Kodaikanal, Tamil Nadu",
    rating: 4.7,
    price: 250,
    amenities: ["Free WiFi", "Lake View", "Restaurant", "Boating"],
    availability: "Available"
  },
  {
    id: "10",
    name: "Meenakshi Heritage Hotel",
    image: maduraiHeritage,
    location: "Madurai, Tamil Nadu",
    rating: 4.5,
    price: 190,
    amenities: ["Free WiFi", "Heritage Theme", "Restaurant", "Temple Tours"],
    availability: "Available"
  }
];

const getAmenityIcon = (amenity: string) => {
  switch (amenity) {
    case "Free WiFi": return <Wifi className="h-4 w-4" />;
    case "Parking": return <Car className="h-4 w-4" />;
    case "Restaurant": return <Coffee className="h-4 w-4" />;
    case "Gym": return <Dumbbell className="h-4 w-4" />;
    default: return <Coffee className="h-4 w-4" />;
  }
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedHotel, setSelectedHotel] = useState<typeof hotelResults[0] | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  const location = searchParams.get("location") || "";
  const checkIn = searchParams.get("checkIn");
  const checkOut = searchParams.get("checkOut");
  const guests = searchParams.get("guests") || "2";

  const handleBookNow = (hotel: typeof hotelResults[0]) => {
    setSelectedHotel(hotel);
    setIsBookingModalOpen(true);
  };

  // Filter hotels based on location if provided
  const filteredHotels = location 
    ? hotelResults.filter(hotel => 
        hotel.location.toLowerCase().includes(location.toLowerCase())
      )
    : hotelResults;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <h1 className="text-3xl font-bold">Search Results</h1>
          </div>
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            {location && <span>📍 {location}</span>}
            {checkIn && <span>📅 {format(new Date(checkIn), "MMM dd")} - {checkOut ? format(new Date(checkOut), "MMM dd") : "Select date"}</span>}
            <span>👥 {guests} Guest{guests !== "1" ? "s" : ""}</span>
          </div>
        </div>

        <div className="grid gap-6">
          {filteredHotels.length > 0 ? (
            filteredHotels.map((hotel) => (
              <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-4 gap-0">
                    <div className="md:col-span-1">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    
                    <div className="md:col-span-2 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold">{hotel.name}</h3>
                        <Badge variant={hotel.availability === "Available" ? "default" : "secondary"}>
                          {hotel.availability}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{hotel.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-1 mb-4">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{hotel.rating}</span>
                        <span className="text-muted-foreground">(324 reviews)</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity) => (
                          <div key={amenity} className="flex items-center gap-1 text-sm text-muted-foreground">
                            {getAmenityIcon(amenity)}
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-1 p-6 flex flex-col justify-between border-l">
                      <div className="text-right">
                        <div className="text-2xl font-bold">₹{hotel.price}</div>
                        <div className="text-muted-foreground">per night</div>
                      </div>
                      
                      <div className="space-y-2 mt-4">
                        <Button 
                          className="w-full"
                          onClick={() => handleBookNow(hotel)}
                        >
                          Book Now
                        </Button>
                        <Button 
                          variant="outline" 
                          className="w-full"
                          onClick={() => navigate(`/hotel/${hotel.id}`)}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card className="p-8 text-center">
              <h3 className="text-xl font-semibold mb-2">No hotels found</h3>
              <p className="text-muted-foreground">Try adjusting your search criteria or location.</p>
            </Card>
          )}
        </div>
      </main>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        hotel={selectedHotel}
      />

      <Footer />
    </div>
  );
};

export default SearchResults;