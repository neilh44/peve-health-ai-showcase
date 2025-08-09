import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X, Activity, Stethoscope } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Technology', href: '/technology' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Demo', href: '/demo' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-medical">
            <Activity className="h-5 w-5 text-primary-foreground" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight">PeVe-Health</span>
            <span className="text-xs text-muted-foreground leading-none">AI Medical Diagnostics</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex mx-6 items-center space-x-6 text-sm font-medium">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`transition-colors hover:text-primary ${
                isActive(item.href)
                  ? 'text-primary font-semibold'
                  : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline-medical" size="sm" asChild>
              <Link to="/demo">Try Demo</Link>
            </Button>
            <Button variant="medical" size="sm" asChild>
              <Link to="/contact">Request Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4">
                {/* Mobile Logo */}
                <div className="flex items-center space-x-2 pb-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-medical">
                    <Stethoscope className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <span className="text-lg font-bold">PeVe-Health</span>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex flex-col space-y-3">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center space-x-2 text-lg font-medium transition-colors hover:text-primary ${
                        isActive(item.href)
                          ? 'text-primary'
                          : 'text-muted-foreground'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.name}</span>
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="flex flex-col space-y-3 pt-4">
                  <Button variant="outline-medical" asChild onClick={() => setIsOpen(false)}>
                    <Link to="/demo">Try Demo</Link>
                  </Button>
                  <Button variant="medical" asChild onClick={() => setIsOpen(false)}>
                    <Link to="/contact">Request Consultation</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;