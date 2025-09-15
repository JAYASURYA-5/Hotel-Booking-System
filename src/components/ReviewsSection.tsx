import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "",
    rating: 5,
    location: "New York, USA",
    date: "2 weeks ago",
    review: "Absolutely stunning hotel with exceptional service. The staff went above and beyond to make our honeymoon perfect. The ocean view suite was breathtaking, and the spa was incredibly relaxing.",
    hotel: "The Grand Luxury Resort",
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "",
    rating: 5,
    location: "London, UK",
    date: "1 month ago",
    review: "Best business hotel I've ever stayed at. The location is perfect for meetings, rooms are spacious and modern, and the concierge service is top-notch. Will definitely return on my next business trip.",
    hotel: "Metropolitan Elite Hotel",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "",
    rating: 4,
    location: "Madrid, Spain", 
    date: "3 weeks ago",
    review: "Beautiful boutique hotel with incredible sunset views. The infinity pool overlooking the caldera was amazing. Food was excellent and the staff was very friendly. Highly recommend for couples!",
    hotel: "Seaside Boutique Resort",
  },
  {
    id: 4,
    name: "David Thompson",
    avatar: "",
    rating: 5,
    location: "Toronto, Canada",
    date: "1 week ago",
    review: "Exceeded all expectations! The luxury suite was spacious and elegantly designed. The hotel's attention to detail is remarkable - from the welcome champagne to the turndown service. Perfect for special occasions.",
    hotel: "The Grand Luxury Resort",
  },
];

const ReviewsSection = () => {
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
    <section className="py-20 bg-gradient-to-b from-accent/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Read authentic reviews from travelers who have experienced our exceptional hotels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className="card-luxury p-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-4">
                  <Quote className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-foreground leading-relaxed mb-4">
                      "{review.review}"
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback className="bg-secondary text-secondary-foreground">
                        {review.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{review.name}</p>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant="secondary" className="mb-1">
                      {review.hotel}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 p-6 bg-gradient-to-r from-secondary/10 to-secondary-dark/10 rounded-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">4.8</div>
              <div className="flex items-center justify-center mb-1">
                {renderStars(5)}
              </div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">2,847</div>
              <div className="text-sm text-muted-foreground">Total Reviews</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;