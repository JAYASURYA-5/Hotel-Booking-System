import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, MapPin, Star, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";
import luxurySuiteImage from "@/assets/luxury-suite.jpg";
import hotelLobbyImage from "@/assets/hotel-lobby.jpg";
import boutiqueRoomImage from "@/assets/boutique-room.jpg";

// Mock favorite hotels data
const mockFavorites = [
  {
    id: "1",
    name: "The Grand Luxury Resort",
    image: luxurySuiteImage,
    location: "Maldives",
    rating: 5,
    price: 450,
    amenities: ["Ocean View", "Private Beach", "Spa", "Fine Dining"],
  },
  {
    id: "3",
    name: "Seaside Boutique Resort",
    image: boutiqueRoomImage,
    location: "Santorini, Greece",
    rating: 4,
    price: 280,
    amenities: ["Sea View", "Rooftop Pool", "Wine Tasting", "Sunset Views"],
  },
];

const Favorites = () => {
  const [favorites, setFavorites] = useState(mockFavorites);
  const { toast } = useToast();

  const removeFavorite = (hotelId: string) => {
    setFavorites(favorites.filter(hotel => hotel.id !== hotelId));
    toast({
      title: "Removed from favorites",
      description: "Hotel has been removed from your favorites list.",
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">My Favorite Hotels</h1>
            
            {favorites.length === 0 ? (
              <Card className="text-center py-16">
                <CardContent>
                  <Heart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h2 className="text-xl font-semibold mb-2">No favorites yet</h2>
                  <p className="text-muted-foreground mb-6">
                    Start exploring our amazing hotels and add them to your favorites!
                  </p>
                  <Button className="btn-luxury">
                    Explore Hotels
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {favorites.map((hotel) => (
                  <Card key={hotel.id} className="card-luxury group overflow-hidden">
                    <div className="relative">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute top-2 right-2 bg-white/90 hover:bg-white"
                        onClick={() => removeFavorite(hotel.id)}
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                    
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-semibold line-clamp-1">
                        {hotel.name}
                      </CardTitle>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-muted-foreground text-sm">
                          <MapPin className="w-4 h-4 mr-1" />
                          {hotel.location}
                        </div>
                        <div className="flex items-center space-x-1">
                          {renderStars(hotel.rating)}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {hotel.amenities.slice(0, 3).map((amenity, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                          >
                            {amenity}
                          </span>
                        ))}
                        {hotel.amenities.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full">
                            +{hotel.amenities.length - 3} more
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-primary">
                            ₹{hotel.price}
                          </span>
                          <span className="text-muted-foreground text-sm ml-1">
                            /night
                          </span>
                        </div>
                        <Button className="btn-luxury" size="sm">
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Favorites;