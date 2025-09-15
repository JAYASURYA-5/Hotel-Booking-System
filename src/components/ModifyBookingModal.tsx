import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPin, Users, Bed } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Booking {
  id: string;
  hotelName: string;
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
  status: string;
  total: number;
}

interface ModifyBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  booking: Booking | null;
  onUpdate: (bookingId: string, updatedBooking: Partial<Booking>) => void;
}

const ModifyBookingModal = ({ isOpen, onClose, booking, onUpdate }: ModifyBookingModalProps) => {
  const { toast } = useToast();
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(
    booking ? new Date(booking.checkIn) : undefined
  );
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(
    booking ? new Date(booking.checkOut) : undefined
  );
  const [guests, setGuests] = useState(booking?.guests?.toString() || "2");
  const [rooms, setRooms] = useState(booking?.rooms?.toString() || "1");

  if (!booking) return null;

  const calculateNights = () => {
    if (checkInDate && checkOutDate) {
      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      return Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
    return 0;
  };

  const calculateNewTotal = () => {
    const nights = calculateNights();
    const basePrice = booking.total / ((new Date(booking.checkOut).getTime() - new Date(booking.checkIn).getTime()) / (1000 * 3600 * 24));
    return Math.round(basePrice * nights * parseInt(rooms));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkInDate || !checkOutDate) {
      toast({
        title: "Error",
        description: "Please select both check-in and check-out dates.",
        variant: "destructive",
      });
      return;
    }

    if (checkInDate >= checkOutDate) {
      toast({
        title: "Error",
        description: "Check-out date must be after check-in date.",
        variant: "destructive",
      });
      return;
    }

    const updatedBooking = {
      checkIn: format(checkInDate, "yyyy-MM-dd"),
      checkOut: format(checkOutDate, "yyyy-MM-dd"),
      guests: parseInt(guests),
      rooms: parseInt(rooms),
      total: calculateNewTotal(),
    };

    onUpdate(booking.id, updatedBooking);
    
    toast({
      title: "Booking Updated",
      description: "Your booking has been successfully modified.",
    });
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Modify Booking</DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Hotel Information */}
          <div className="space-y-6">
            <div className="card-luxury p-6">
              <h3 className="text-xl font-semibold mb-4">{booking.hotelName}</h3>
              <div className="flex items-center text-muted-foreground mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {booking.location}
              </div>
              <Badge className={`${booking.status === 'confirmed' ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </Badge>
            </div>

            <div className="card-luxury p-6">
              <h4 className="font-semibold mb-4">Current Booking Details</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Original Check-in:</span>
                  <span>{booking.checkIn}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Original Check-out:</span>
                  <span>{booking.checkOut}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Original Guests:</span>
                  <span>{booking.guests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Original Rooms:</span>
                  <span>{booking.rooms}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Original Total:</span>
                  <span>₹{booking.total}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Modification Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="card-luxury p-6">
                <h4 className="font-semibold mb-4">Modify Dates</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="checkIn">Check-in Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkInDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkInDate ? format(checkInDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkInDate}
                          onSelect={setCheckInDate}
                          disabled={(date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="checkOut">Check-out Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !checkOutDate && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {checkOutDate ? format(checkOutDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={checkOutDate}
                          onSelect={setCheckOutDate}
                          disabled={(date) => date <= (checkInDate || new Date())}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>

              <div className="card-luxury p-6">
                <h4 className="font-semibold mb-4">Modify Guests & Rooms</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="guests">
                      <Users className="w-4 h-4 inline mr-2" />
                      Number of Guests
                    </Label>
                    <Select value={guests} onValueChange={setGuests}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Guest" : "Guests"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="rooms">
                      <Bed className="w-4 h-4 inline mr-2" />
                      Number of Rooms
                    </Label>
                    <Select value={rooms} onValueChange={setRooms}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Room" : "Rooms"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="card-luxury p-6">
                <h4 className="font-semibold mb-4">Updated Booking Summary</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Nights:</span>
                    <span>{calculateNights()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Guests:</span>
                    <span>{guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rooms:</span>
                    <span>{rooms}</span>
                  </div>
                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>New Total:</span>
                      <span className="text-primary">₹{calculateNewTotal()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                  Cancel
                </Button>
                <Button type="submit" className="btn-luxury flex-1">
                  Update Booking
                </Button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModifyBookingModal;