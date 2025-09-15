import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, Heart, Calendar, LogOut, Building, MapPin, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, profile, signOut, loading } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Error signing out",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Signed out successfully",
        description: "You have been logged out.",
      });
      navigate('/');
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-secondary to-secondary-dark rounded-md flex items-center justify-center">
              <span className="text-secondary-foreground font-bold text-sm">JS</span>
            </div>
            <span className="text-xl font-bold text-gradient">LuxStay</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary" onClick={() => navigate('/')}>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary" onClick={() => navigate('/hotels')}>
              <Building className="w-4 h-4 mr-2" />
              Hotels
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary" onClick={() => navigate('/search')}>
              <MapPin className="w-4 h-4 mr-2" />
              Destinations
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary" onClick={() => navigate('/favorites')}>
              <Heart className="w-4 h-4 mr-2" />
              Favorites
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary" onClick={() => navigate('/bookings')}>
              <Calendar className="w-4 h-4 mr-2" />
              My Bookings
            </Button>
            <Button variant="ghost" size="sm" className="text-foreground hover:text-primary" onClick={() => navigate('/about')}>
              <Info className="w-4 h-4 mr-2" />
              About
            </Button>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {!loading && (
              user ? (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-secondary to-secondary-dark flex items-center justify-center">
                      <span className="text-secondary-foreground font-semibold text-sm">
                        {profile?.display_name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {profile?.display_name || user.email?.split('@')[0]}
                    </span>
                  </div>
                  <Button variant="ghost" size="sm" onClick={handleSignOut}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </Button>
                </div>
              ) : (
                <Button className="btn-luxury" onClick={() => navigate('/auth')}>
                  Log In
                </Button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn("md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border transition-all duration-300", isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible")}>
          <nav className="flex flex-col space-y-4 p-6">
            <Button variant="ghost" size="sm" className="justify-start" onClick={() => navigate('/')}>
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Home
            </Button>
            <Button variant="ghost" size="sm" className="justify-start" onClick={() => navigate('/hotels')}>
              <Building className="w-4 h-4 mr-2" />
              Hotels
            </Button>
            <Button variant="ghost" size="sm" className="justify-start" onClick={() => navigate('/search')}>
              <MapPin className="w-4 h-4 mr-2" />
              Destinations
            </Button>
            <Button variant="ghost" size="sm" className="justify-start" onClick={() => navigate('/favorites')}>
              <Heart className="w-4 h-4 mr-2" />
              Favorites
            </Button>
            <Button variant="ghost" size="sm" className="justify-start" onClick={() => navigate('/bookings')}>
              <Calendar className="w-4 h-4 mr-2" />
              My Bookings
            </Button>
            <Button variant="ghost" size="sm" className="justify-start" onClick={() => navigate('/about')}>
              <Info className="w-4 h-4 mr-2" />
              About
            </Button>
            
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              {!loading && (
                user ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 px-3 py-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-secondary to-secondary-dark flex items-center justify-center">
                        <span className="text-secondary-foreground font-semibold text-xs">
                          {profile?.display_name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-foreground">
                        {profile?.display_name || user.email?.split('@')[0]}
                      </span>
                    </div>
                    <Button variant="ghost" size="sm" className="justify-start w-full" onClick={handleSignOut}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <Button className="btn-luxury justify-start" onClick={() => navigate('/auth')}>
                    <User className="w-4 h-4 mr-2" />
                    Log In
                  </Button>
                )
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>;
};
export default Header;