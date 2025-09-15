import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModifyBookingModal from "@/components/ModifyBookingModal";

// Mock booking data
const mockBookings = [
  {
    id: "1",
    hotelId: "1",
    hotelName: "The Grand Luxury Resort",
    location: "Maldives",
    image: "/src/assets/luxury-suite.jpg",
    checkIn: "2024-01-15",
    checkOut: "2024-01-20",
    guests: 2,
    rooms: 1,
    status: "confirmed",
    total: 2250,
  },
  {
    id: "2",
    hotelId: "2",
    hotelName: "Metropolitan Elite Hotel",
    location: "New York City",
    image: "/src/assets/business-hotel.jpg",
    checkIn: "2024-02-10",
    checkOut: "2024-02-12",
    guests: 1,
    rooms: 1,
    status: "pending",
    total: 640,
  },
];

const Bookings = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState(mockBookings);
  const [selectedBooking, setSelectedBooking] = useState<typeof mockBookings[0] | null>(null);
  const [showModifyModal, setShowModifyModal] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500 text-white";
      case "pending":
        return "bg-yellow-500 text-white";
      case "cancelled":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const handleModifyBooking = (booking: typeof mockBookings[0]) => {
    setSelectedBooking(booking);
    setShowModifyModal(true);
  };

  const handleUpdateBooking = (bookingId: string, updatedBooking: Partial<typeof mockBookings[0]>) => {
    setBookings(prev => prev.map(booking => 
      booking.id === bookingId 
        ? { ...booking, ...updatedBooking }
        : booking
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20 pb-16">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-foreground mb-8">My Bookings</h1>
            
            {bookings.length === 0 ? (
              <Card className="text-center py-16">
                <CardContent>
                  <Calendar className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h2 className="text-xl font-semibold mb-2">No bookings yet</h2>
                  <p className="text-muted-foreground mb-6">
                    Start exploring our amazing hotels and make your first booking!
                  </p>
                  <Button className="btn-luxury">
                    Explore Hotels
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-6">
                {bookings.map((booking) => (
                  <Card key={booking.id} className="card-luxury">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                      <CardTitle className="text-xl font-semibold">
                        {booking.hotelName}
                      </CardTitle>
                      <Badge className={getStatusColor(booking.status)}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </Badge>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-4">
                        <img 
                          src={booking.image} 
                          alt={booking.hotelName}
                          className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-center text-muted-foreground mb-4">
                            <MapPin className="w-4 h-4 mr-2" />
                            {booking.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2 text-primary" />
                          <div>
                            <div className="font-medium">Check-in</div>
                            <div className="text-muted-foreground">{booking.checkIn}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          <div>
                            <div className="font-medium">Check-out</div>
                            <div className="text-muted-foreground">{booking.checkOut}</div>
                          </div>
                        </div>
                        
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-primary" />
                          <div>
                            <div className="font-medium">{booking.guests} Guests</div>
                            <div className="text-muted-foreground">{booking.rooms} Room(s)</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t border-border">
                        <div className="text-2xl font-bold text-primary">
                          ₹{booking.total}
                        </div>
                        <div className="space-x-2">
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => navigate(`/hotel/${booking.hotelId}`)}
                          >
                            View Details
                          </Button>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => handleModifyBooking(booking)}
                          >
                            Modify Booking
                          </Button>
                        </div>
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
      
      <ModifyBookingModal
        isOpen={showModifyModal}
        onClose={() => setShowModifyModal(false)}
        booking={selectedBooking}
        onUpdate={handleUpdateBooking}
      />
    </div>
  );
};

export default Bookings;