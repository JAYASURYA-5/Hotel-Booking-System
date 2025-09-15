import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, Coffee, Dumbbell } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import images
import luxurySuite from "@/assets/luxury-suite.jpg";
import boutiqueRoom from "@/assets/boutique-room.jpg";
import businessHotel from "@/assets/business-hotel.jpg";
import hotelLobby from "@/assets/hotel-lobby.jpg";
import heroHotel from "@/assets/hero-hotel.jpg";
import chennaiBusy from "@/assets/chennai-beach-resort.jpg";
import ootyHill from "@/assets/ooty-hill-resort.jpg";
import kodaikanalResort from "@/assets/kodaikanal-resort.jpg";
import maduraiHeritage from "@/assets/madurai-heritage-hotel.jpg";
import kanyakumariBeach from "@/assets/kanyakumari-beach-hotel.jpg";
import coimbatoreBusiness from "@/assets/coimbatore-business-hotel.jpg";
import thanjavurPalace from "@/assets/thanjavur-palace-hotel.jpg";
import salemModern from "@/assets/salem-modern-hotel.jpg";
import tirunelveliTemple from "@/assets/tirunelveli-temple-hotel.jpg";
import vellorefort from "@/assets/vellore-fort-hotel.jpg";

// Mock hotel data
const allHotels = [
  {
    id: "1",
    name: "The Grand Luxury Resort",
    image: luxurySuite,
    location: "Maldives",
    rating: 5,
    price: 450,
    amenities: ["Free WiFi", "Private Beach", "Restaurant", "Spa"]
  },
  {
    id: "2",
    name: "Metropolitan Elite Hotel",
    image: boutiqueRoom,
    location: "New York City",
    rating: 5,
    price: 320,
    amenities: ["Free WiFi", "Business Center", "Restaurant", "Gym"]
  },
  {
    id: "3",
    name: "Mountain Lodge",
    image: businessHotel,
    location: "Denver, CO",
    rating: 4.5,
    price: 159,
    amenities: ["Wifi", "Parking", "Restaurant"]
  },
  {
    id: "4",
    name: "City Center Hotel",
    image: hotelLobby,
    location: "Chicago, IL",
    rating: 4.7,
    price: 249,
    amenities: ["Wifi", "Parking", "Gym"]
  },
  {
    id: "5",
    name: "Sunset Beach Resort",
    image: heroHotel,
    location: "San Diego, CA",
    rating: 4.9,
    price: 329,
    amenities: ["Wifi", "Restaurant", "Gym"]
  },
  {
    id: "6",
    name: "Historic Downtown Inn",
    image: luxurySuite,
    location: "Boston, MA",
    rating: 4.4,
    price: 179,
    amenities: ["Wifi", "Parking", "Restaurant"]
  },
  // Tamil Nadu Hotels
  {
    id: "7",
    name: "Marina Beach Resort",
    image: chennaiBusy,
    location: "Chennai, Tamil Nadu",
    rating: 4.8,
    price: 280,
    amenities: ["Free WiFi", "Beach Access", "Restaurant", "Spa"]
  },
  {
    id: "8",
    name: "Nilgiri Hills Resort",
    image: ootyHill,
    location: "Ooty, Tamil Nadu",
    rating: 4.6,
    price: 220,
    amenities: ["Free WiFi", "Mountain View", "Restaurant", "Garden"]
  },
  {
    id: "9",
    name: "Lake View Resort",
    image: kodaikanalResort,
    location: "Kodaikanal, Tamil Nadu",
    rating: 4.7,
    price: 250,
    amenities: ["Free WiFi", "Lake View", "Restaurant", "Boating"]
  },
  {
    id: "10",
    name: "Meenakshi Heritage Hotel",
    image: maduraiHeritage,
    location: "Madurai, Tamil Nadu",
    rating: 4.5,
    price: 190,
    amenities: ["Free WiFi", "Heritage Theme", "Restaurant", "Temple Tours"]
  },
  {
    id: "11",
    name: "Sunrise Point Hotel",
    image: kanyakumariBeach,
    location: "Kanyakumari, Tamil Nadu",
    rating: 4.8,
    price: 300,
    amenities: ["Free WiFi", "Ocean View", "Restaurant", "Sunset View"]
  },
  {
    id: "12",
    name: "Textile City Business Hotel",
    image: coimbatoreBusiness,
    location: "Coimbatore, Tamil Nadu",
    rating: 4.4,
    price: 180,
    amenities: ["Free WiFi", "Business Center", "Restaurant", "Conference Hall"]
  },
  {
    id: "13",
    name: "Chola Palace Hotel",
    image: thanjavurPalace,
    location: "Thanjavur, Tamil Nadu",
    rating: 4.6,
    price: 200,
    amenities: ["Free WiFi", "Heritage Architecture", "Restaurant", "Cultural Tours"]
  },
  {
    id: "14",
    name: "Steel City Modern Hotel",
    image: salemModern,
    location: "Salem, Tamil Nadu",
    rating: 4.3,
    price: 160,
    amenities: ["Free WiFi", "Modern Amenities", "Restaurant", "Gym"]
  },
  {
    id: "15",
    name: "Temple City Resort",
    image: tirunelveliTemple,
    location: "Tirunelveli, Tamil Nadu",
    rating: 4.5,
    price: 170,
    amenities: ["Free WiFi", "Temple View", "Restaurant", "Spiritual Tours"]
  },
  {
    id: "16",
    name: "Fort City Heritage Hotel",
    image: vellorefort,
    location: "Vellore, Tamil Nadu",
    rating: 4.4,
    price: 185,
    amenities: ["Free WiFi", "Fort View", "Restaurant", "Historical Tours"]
  }
];

const getAmenityIcon = (amenity: string) => {
  switch (amenity.toLowerCase()) {
    case 'wifi': return <Wifi className="h-4 w-4" />;
    case 'parking': return <Car className="h-4 w-4" />;
    case 'restaurant': return <Coffee className="h-4 w-4" />;
    case 'gym': return <Dumbbell className="h-4 w-4" />;
    default: return null;
  }
};

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      className={`h-4 w-4 ${
        i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
      }`}
    />
  ));
};

const Hotels = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">All Hotels</h1>
          <p className="text-muted-foreground text-lg">Discover our collection of premium hotels worldwide</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allHotels.map((hotel) => (
            <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold">{hotel.name}</h3>
                  <div className="flex items-center gap-1">
                    {renderStars(hotel.rating)}
                    <span className="text-sm text-muted-foreground ml-1">
                      {hotel.rating}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{hotel.location}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.map((amenity) => (
                    <Badge key={amenity} variant="secondary" className="flex items-center gap-1">
                      {getAmenityIcon(amenity)}
                      <span className="text-xs">{amenity}</span>
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-primary">
                    ₹{hotel.price}
                    <span className="text-sm font-normal text-muted-foreground">/night</span>
                  </div>
                  <Button className="btn-luxury">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hotels;