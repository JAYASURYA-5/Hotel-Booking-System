import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MapPin, Wifi, Car, Coffee, Dumbbell, Users, Bed } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import { useState } from 'react';
import luxurySuite from '@/assets/luxury-suite.jpg';
import boutiqueRoom from '@/assets/boutique-room.jpg';
import businessHotel from '@/assets/business-hotel.jpg';
import hotelLobby from '@/assets/hotel-lobby.jpg';
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
const hotelData = {
  "1": {
    id: "1",
    name: "The Grand Luxury Resort",
    image: luxurySuite,
    location: "Maldives",
    rating: 5,
    price: 450,
    amenities: ["Free WiFi", "Private Beach", "Restaurant", "Spa"],
    availability: "Available",
    description: "Experience ultimate luxury in the pristine waters of the Maldives. The Grand Luxury Resort offers world-class amenities, overwater villas, and exceptional service in paradise.",
    features: [
      "24/7 Room Service",
      "Concierge Service", 
      "Business Center",
      "Spa & Wellness Center",
      "Fine Dining Restaurant",
      "Overwater Bar"
    ],
    rooms: [
      { type: "Beach Villa", size: "45 sqm", capacity: 2, price: 450 },
      { type: "Overwater Suite", size: "65 sqm", capacity: 4, price: 650 },
      { type: "Presidential Overwater Suite", size: "120 sqm", capacity: 6, price: 1200 }
    ]
  },
  "2": {
    id: "2",
    name: "Metropolitan Elite Hotel",
    image: boutiqueRoom,
    location: "New York City", 
    rating: 5,
    price: 320,
    amenities: ["Free WiFi", "Business Center", "Restaurant", "Gym"],
    availability: "Available",
    description: "Premier business hotel in the heart of New York City. Metropolitan Elite Hotel offers modern accommodations, exceptional service, and convenient access to Manhattan's finest attractions.",
    features: [
      "Business Center",
      "Concierge Service", 
      "Executive Lounge",
      "Fitness Center",
      "Fine Dining Restaurant",
      "Rooftop Terrace"
    ],
    rooms: [
      { type: "Executive Room", size: "35 sqm", capacity: 2, price: 320 },
      { type: "Executive Suite", size: "55 sqm", capacity: 4, price: 480 },
      { type: "Presidential Suite", size: "100 sqm", capacity: 6, price: 850 }
    ]
  },
  "3": {
    id: "3",
    name: "Mountain Lodge",
    image: businessHotel,
    location: "Aspen, USA",
    rating: 4.7,
    price: 249,
    amenities: ["Free WiFi", "Parking", "Restaurant", "Ski Access"],
    availability: "Available",
    description: "Nestled in the Rocky Mountains, our lodge offers the perfect alpine escape with direct ski access and cozy mountain hospitality.",
    features: [
      "Ski-in/Ski-out Access",
      "Heated Indoor Pool",
      "Mountain View Restaurant",
      "Equipment Rental",
      "Hot Tub & Sauna",
      "Fire Pit Lounge"
    ],
    rooms: [
      { type: "Mountain View Room", size: "28 sqm", capacity: 2, price: 249 },
      { type: "Lodge Suite", size: "42 sqm", capacity: 4, price: 379 },
      { type: "Alpine Cabin", size: "75 sqm", capacity: 6, price: 599 }
    ]
  },
  "4": {
    id: "4",
    name: "City Center Hotel",
    image: hotelLobby,
    location: "London, UK",
    rating: 4.5,
    price: 179,
    amenities: ["Free WiFi", "Restaurant", "Gym", "Business Center"],
    availability: "Available",
    description: "Located in the heart of London, our modern hotel provides easy access to major attractions, shopping, and business districts.",
    features: [
      "Prime City Location",
      "Modern Business Center", 
      "Fitness Center",
      "Urban Restaurant",
      "Meeting Rooms",
      "Express Check-in"
    ],
    rooms: [
      { type: "City Room", size: "22 sqm", capacity: 2, price: 179 },
      { type: "Executive Suite", size: "38 sqm", capacity: 3, price: 279 },
      { type: "Business Suite", size: "55 sqm", capacity: 4, price: 429 }
    ]
  },
  // Tamil Nadu Hotels
  "7": {
    id: "7",
    name: "Marina Beach Resort",
    image: chennaiBusy,
    location: "Chennai, Tamil Nadu",
    rating: 4.8,
    price: 280,
    amenities: ["Free WiFi", "Beach Access", "Restaurant", "Spa"],
    availability: "Available",
    description: "Experience the beauty of Chennai's iconic Marina Beach with luxury accommodation, traditional South Indian hospitality, and modern amenities.",
    features: [
      "Direct Beach Access",
      "Traditional Spa Treatments",
      "South Indian Cuisine",
      "Cultural Dance Shows",
      "Swimming Pool",
      "Yoga Classes"
    ],
    rooms: [
      { type: "Ocean View Room", size: "32 sqm", capacity: 2, price: 280 },
      { type: "Beach Suite", size: "45 sqm", capacity: 4, price: 380 },
      { type: "Presidential Beach Villa", size: "75 sqm", capacity: 6, price: 650 }
    ]
  },
  "8": {
    id: "8", 
    name: "Nilgiri Hills Resort",
    image: ootyHill,
    location: "Ooty, Tamil Nadu",
    rating: 4.6,
    price: 220,
    amenities: ["Free WiFi", "Mountain View", "Restaurant", "Garden"],
    availability: "Available",
    description: "Escape to the serene hill station of Ooty with colonial charm, tea gardens, and breathtaking mountain views in the Western Ghats.",
    features: [
      "Tea Garden Tours",
      "Colonial Architecture",
      "Mountain Trekking",
      "Botanical Garden Access",
      "Fireplace Lounge",
      "Heritage Train Rides"
    ],
    rooms: [
      { type: "Hill View Room", size: "28 sqm", capacity: 2, price: 220 },
      { type: "Garden Suite", size: "40 sqm", capacity: 4, price: 320 },
      { type: "Colonial Bungalow", size: "65 sqm", capacity: 6, price: 520 }
    ]
  },
  "9": {
    id: "9",
    name: "Lake View Resort", 
    image: kodaikanalResort,
    location: "Kodaikanal, Tamil Nadu",
    rating: 4.7,
    price: 250,
    amenities: ["Free WiFi", "Lake View", "Restaurant", "Boating"],
    availability: "Available",
    description: "Nestled in the misty hills of Kodaikanal, enjoy pristine lake views, cool climate, and romantic getaway amidst nature's beauty.",
    features: [
      "Lake Boating",
      "Nature Walks",
      "Romantic Dining",
      "Star Gazing Deck",
      "Cycle Rentals",
      "Campfire Evenings"
    ],
    rooms: [
      { type: "Lake View Room", size: "30 sqm", capacity: 2, price: 250 },
      { type: "Honeymoon Suite", size: "42 sqm", capacity: 2, price: 380 },
      { type: "Family Villa", size: "60 sqm", capacity: 6, price: 580 }
    ]
  },
  "10": {
    id: "10",
    name: "Meenakshi Heritage Hotel",
    image: maduraiHeritage,
    location: "Madurai, Tamil Nadu", 
    rating: 4.5,
    price: 190,
    amenities: ["Free WiFi", "Heritage Theme", "Restaurant", "Temple Tours"],
    availability: "Available",
    description: "Experience the cultural heart of Tamil Nadu in Madurai, with traditional architecture, temple tours, and authentic South Indian cuisine.",
    features: [
      "Temple Tour Guidance",
      "Traditional Architecture",
      "Cultural Performances",
      "Heritage Courtyard",
      "Authentic Tamil Cuisine",
      "Handicraft Shopping"
    ],
    rooms: [
      { type: "Heritage Room", size: "26 sqm", capacity: 2, price: 190 },
      { type: "Cultural Suite", size: "38 sqm", capacity: 4, price: 290 },
      { type: "Royal Heritage Suite", size: "55 sqm", capacity: 6, price: 450 }
    ]
  },
  "11": {
    id: "11",
    name: "Sunrise Point Hotel",
    image: kanyakumariBeach,
    location: "Kanyakumari, Tamil Nadu",
    rating: 4.8,
    price: 300,
    amenities: ["Free WiFi", "Ocean View", "Restaurant", "Sunset View"],
    availability: "Available",
    description: "Witness spectacular sunrises and sunsets at India's southernmost tip, where three seas meet in a symphony of natural beauty.",
    features: [
      "Sunrise & Sunset Views",
      "Three Seas Confluence",
      "Vivekananda Rock Memorial",
      "Lighthouse Views",
      "Seafood Specialty Restaurant",
      "Beach Meditation Area"
    ],
    rooms: [
      { type: "Sunrise Room", size: "30 sqm", capacity: 2, price: 300 },
      { type: "Ocean View Suite", size: "45 sqm", capacity: 4, price: 420 },
      { type: "Sunset Villa", size: "70 sqm", capacity: 6, price: 680 }
    ]
  },
  "12": {
    id: "12",
    name: "Textile City Business Hotel",
    image: coimbatoreBusiness,
    location: "Coimbatore, Tamil Nadu",
    rating: 4.4,
    price: 180,
    amenities: ["Free WiFi", "Business Center", "Restaurant", "Conference Hall"],
    availability: "Available",
    description: "Perfect for business travelers in the textile capital of South India, offering modern amenities and professional services.",
    features: [
      "Business Center",
      "Conference Facilities",
      "Executive Lounge",
      "Airport Shuttle",
      "Modern Gym",
      "Corporate Dining"
    ],
    rooms: [
      { type: "Business Room", size: "28 sqm", capacity: 2, price: 180 },
      { type: "Executive Suite", size: "40 sqm", capacity: 3, price: 280 },
      { type: "Corporate Suite", size: "55 sqm", capacity: 4, price: 420 }
    ]
  },
  "13": {
    id: "13",
    name: "Chola Palace Hotel",
    image: thanjavurPalace,
    location: "Thanjavur, Tamil Nadu",
    rating: 4.6,
    price: 200,
    amenities: ["Free WiFi", "Heritage Architecture", "Restaurant", "Cultural Tours"],
    availability: "Available",
    description: "Step into the grandeur of the Chola dynasty with palace-inspired architecture and cultural heritage in the heart of Thanjavur.",
    features: [
      "Palace Architecture",
      "Brihadeeswarar Temple Tours",
      "Classical Music Performances",
      "Art Gallery",
      "Heritage Courtyard",
      "Royal Dining Experience"
    ],
    rooms: [
      { type: "Palace Room", size: "32 sqm", capacity: 2, price: 200 },
      { type: "Royal Suite", size: "48 sqm", capacity: 4, price: 320 },
      { type: "Emperor Suite", size: "65 sqm", capacity: 6, price: 520 }
    ]
  },
  "14": {
    id: "14",
    name: "Steel City Modern Hotel",
    image: salemModern,
    location: "Salem, Tamil Nadu",
    rating: 4.3,
    price: 160,
    amenities: ["Free WiFi", "Modern Amenities", "Restaurant", "Gym"],
    availability: "Available",
    description: "Contemporary accommodation in Salem with modern facilities, comfortable stays, and easy access to the city's attractions.",
    features: [
      "Modern Design",
      "Fitness Center",
      "Multi-Cuisine Restaurant",
      "Express Check-in",
      "City Tour Arrangements",
      "Shopping Center Access"
    ],
    rooms: [
      { type: "Modern Room", size: "26 sqm", capacity: 2, price: 160 },
      { type: "Comfort Suite", size: "38 sqm", capacity: 4, price: 240 },
      { type: "Premium Suite", size: "50 sqm", capacity: 6, price: 380 }
    ]
  },
  "15": {
    id: "15",
    name: "Temple City Resort",
    image: tirunelveliTemple,
    location: "Tirunelveli, Tamil Nadu",
    rating: 4.5,
    price: 170,
    amenities: ["Free WiFi", "Temple View", "Restaurant", "Spiritual Tours"],
    availability: "Available",
    description: "Immerse yourself in spirituality and tradition in Tirunelveli, with temple views and guided spiritual tours.",
    features: [
      "Temple View Rooms",
      "Spiritual Tour Guide",
      "Meditation Hall",
      "Vegetarian Cuisine",
      "Prayer Room",
      "Cultural Activities"
    ],
    rooms: [
      { type: "Temple View Room", size: "28 sqm", capacity: 2, price: 170 },
      { type: "Spiritual Suite", size: "40 sqm", capacity: 4, price: 260 },
      { type: "Devotee Villa", size: "58 sqm", capacity: 6, price: 420 }
    ]
  },
  "16": {
    id: "16",
    name: "Fort City Heritage Hotel",
    image: vellorefort,
    location: "Vellore, Tamil Nadu",
    rating: 4.4,
    price: 185,
    amenities: ["Free WiFi", "Fort View", "Restaurant", "Historical Tours"],
    availability: "Available",
    description: "Discover the historical significance of Vellore Fort with heritage accommodation and guided historical tours.",
    features: [
      "Fort View Rooms",
      "Historical Tours",
      "Heritage Architecture",
      "Museum Access",
      "Cultural Programs",
      "Traditional Crafts Shop"
    ],
    rooms: [
      { type: "Fort View Room", size: "30 sqm", capacity: 2, price: 185 },
      { type: "Heritage Suite", size: "42 sqm", capacity: 4, price: 285 },
      { type: "Historical Villa", size: "60 sqm", capacity: 6, price: 460 }
    ]
  }
};

const getAmenityIcon = (amenity: string) => {
  switch (amenity) {
    case "Free WiFi": return <Wifi className="h-4 w-4" />;
    case "Parking": return <Car className="h-4 w-4" />;
    case "Restaurant": return <Coffee className="h-4 w-4" />;
    case "Gym": return <Dumbbell className="h-4 w-4" />;
    default: return <Coffee className="h-4 w-4" />;
  }
};

const HotelDetails = () => {
  const { hotelId } = useParams();
  const navigate = useNavigate();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const hotel = hotelId ? hotelData[hotelId as keyof typeof hotelData] : null;

  if (!hotel) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Hotel Not Found</h1>
            <Button onClick={() => navigate(-1)}>Go Back</Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleBookNow = () => {
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Results
          </Button>
        </div>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-3xl font-bold">{hotel.name}</h1>
                <Badge variant={hotel.availability === "Available" ? "default" : "secondary"}>
                  {hotel.availability}
                </Badge>
              </div>
              
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{hotel.location}</span>
              </div>
              
              <div className="flex items-center gap-2 mb-4">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-medium text-lg">{hotel.rating}</span>
                <span className="text-muted-foreground">(324 reviews)</span>
              </div>

              <p className="text-muted-foreground mb-6">{hotel.description}</p>

              <div className="flex items-center gap-4 mb-6">
                <div className="text-3xl font-bold">₹{hotel.price}</div>
                <div className="text-muted-foreground">per night</div>
              </div>

              <Button onClick={handleBookNow} className="btn-luxury w-full lg:w-auto">
                Book Now
              </Button>
            </div>
          </div>

          <div className="lg:order-first">
            <img
              src={hotel.image}
              alt={hotel.name}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Amenities */}
          <Card>
            <CardHeader>
              <CardTitle>Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {hotel.amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center gap-3">
                    {getAmenityIcon(amenity)}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Features */}
          <Card>
            <CardHeader>
              <CardTitle>Hotel Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {hotel.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Room Types */}
          <Card>
            <CardHeader>
              <CardTitle>Room Types</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {hotel.rooms.map((room, index) => (
                  <div key={index} className="space-y-2">
                    <h4 className="font-semibold">{room.type}</h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Bed className="h-4 w-4" />
                        {room.size}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {room.capacity} guests
                      </div>
                    </div>
                    <div className="font-bold">₹{room.price}/night</div>
                    {index < hotel.rooms.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Reviews Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Guest Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-medium">Sarah M.</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Absolutely wonderful stay! The staff was incredibly friendly and the amenities were top-notch."
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                    <span className="font-medium">David R.</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Great location and beautiful rooms. Would definitely stay here again!"
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="font-medium">Emily K.</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Perfect for our family vacation. Clean rooms and excellent service throughout our stay."
                  </p>
                </div>
                
                <div className="border-l-4 border-primary pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                    <span className="font-medium">Michael T.</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    "Business trip was made comfortable by the excellent facilities and central location."
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        hotel={hotel}
      />

      <Footer />
    </div>
  );
};

export default HotelDetails;