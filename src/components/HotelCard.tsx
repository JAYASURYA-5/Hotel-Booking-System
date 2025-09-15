import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Wifi, Car, Utensils, Waves, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

interface HotelCardProps {
  id: string;
  name: string;
  image: string;
  location: string;
  rating: number;
  price: number;
  originalPrice?: number;
  amenities: string[];
  featured?: boolean;
  onBook: (id: string) => void;
  onFavorite: (id: string) => void;
  isFavorite?: boolean;
}

const amenityIcons = {
  wifi: Wifi,
  parking: Car,
  restaurant: Utensils,
  pool: Waves,
};

const HotelCard = ({
  id,
  name,
  image,
  location,
  rating,
  price,
  originalPrice,
  amenities,
  featured = false,
  onBook,
  onFavorite,
  isFavorite = false,
}: HotelCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={cn(
          "w-4 h-4",
          i < rating ? "fill-secondary text-secondary" : "text-muted-foreground"
        )}
      />
    ));
  };

  return (
    <Card className={cn(
      "card-luxury overflow-hidden group cursor-pointer",
      featured && "ring-2 ring-secondary"
    )}>
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavorite(id);
          }}
          className={cn(
            "absolute top-4 right-4 p-2 rounded-full backdrop-blur-md transition-colors",
            isFavorite 
              ? "bg-red-500 text-white" 
              : "bg-white/20 text-white hover:bg-white/30"
          )}
        >
          <Heart className={cn("w-4 h-4", isFavorite && "fill-current")} />
        </button>
        
        {featured && (
          <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">
            Featured
          </Badge>
        )}
        
        {originalPrice && (
          <Badge className="absolute bottom-4 left-4 bg-destructive text-destructive-foreground">
            {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
          </Badge>
        )}
      </div>

      <CardContent className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-1">{name}</h3>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="w-4 h-4 mr-1" />
              <span className="text-sm">{location}</span>
            </div>
          </div>
          <div className="flex items-center">
            {renderStars(rating)}
            <span className="ml-2 text-sm font-medium">{rating}.0</span>
          </div>
        </div>

        {/* Amenities */}
        <div className="flex items-center gap-4 mb-4">
          {amenities.slice(0, 4).map((amenity) => {
            const IconComponent = amenityIcons[amenity.toLowerCase() as keyof typeof amenityIcons];
            return IconComponent ? (
              <div key={amenity} className="flex items-center text-muted-foreground">
                <IconComponent className="w-4 h-4" />
              </div>
            ) : null;
          })}
          {amenities.length > 4 && (
            <span className="text-sm text-muted-foreground">+{amenities.length - 4} more</span>
          )}
        </div>

        {/* Price & Book */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">₹{price}</span>
              {originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{originalPrice}
                </span>
              )}
            </div>
            <span className="text-sm text-muted-foreground">per night</span>
          </div>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              onBook(id);
            }}
            className="btn-luxury"
          >
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HotelCard;