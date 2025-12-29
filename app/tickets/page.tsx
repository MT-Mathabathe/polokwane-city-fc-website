'use client';

import { useState } from 'react';
import SectionHeader from '@/components/SectionHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { matches } from '@/lib/data';
import { formatDate, formatTime } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Check, CreditCard, Ticket, Users, MapPin } from 'lucide-react';

export default function TicketsPage() {
  const [selectedMatch, setSelectedMatch] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const upcomingMatches = matches.filter(m => m.status === 'upcoming' && m.isHome);

  const ticketCategories = [
    { id: 'vip', name: 'VIP', price: 500, features: ['Premium seating', 'Complimentary drinks', 'Exclusive lounge access', 'Meet & greet opportunity'] },
    { id: 'premium', name: 'Premium', price: 300, features: ['Great view', 'Comfortable seating', 'Access to premium facilities', 'Priority entry'] },
    { id: 'standard', name: 'Standard', price: 150, features: ['Good view', 'Standard seating', 'General facilities access'] },
    { id: 'family', name: 'Family (4 pack)', price: 400, features: ['4 tickets', 'Family section', 'Kid-friendly amenities'] },
  ];

  const selectedMatchData = selectedMatch ? matches.find(m => m.id === selectedMatch) : null;
  const selectedCategoryData = selectedCategory ? ticketCategories.find(c => c.id === selectedCategory) : null;
  const totalPrice = selectedCategoryData ? selectedCategoryData.price * quantity : 0;

  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center justify-center mb-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1459865264687-595d652de67e?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-[#FF6B00]/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            className="mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Ticket className="w-24 h-24 mx-auto text-[#FF6B00]" />
          </motion.div>
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get Your Tickets
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Experience the excitement live at Peter Mokaba Stadium
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        {/* Step 1: Select Match */}
        <section className="mb-16">
          <SectionHeader
            title="Step 1: Select Your Match"
            subtitle="Choose from our upcoming home fixtures"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMatches.map((match) => (
              <Card
                key={match.id}
                className={`cursor-pointer transition-all hover:shadow-xl ${
                  selectedMatch === match.id ? 'ring-2 ring-[#FF6B00]' : ''
                }`}
                onClick={() => {
                  setSelectedMatch(match.id);
                  setSelectedCategory(null);
                }}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-2">Polokwane City FC vs {match.opponent}</h3>
                    <span className="bg-[#FF6B00] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {match.competition}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center">
                      <MapPin className="w-4 h-4 mr-2 text-[#FF6B00]" />
                      <span>{match.venue}</span>
                    </div>
                    <div className="text-center font-semibold text-black">
                      {formatDate(match.date)} at {formatTime(match.date + 'T' + match.time)}
                    </div>
                  </div>
                  {selectedMatch === match.id && (
                    <div className="mt-4 flex items-center justify-center text-[#FF6B00]">
                      <Check className="w-5 h-5 mr-2" />
                      <span className="font-semibold">Selected</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Step 2: Select Ticket Category */}
        {selectedMatch && (
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              title="Step 2: Choose Your Ticket Category"
              subtitle="Select the seating option that suits you best"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ticketCategories.map((category) => (
                <Card
                  key={category.id}
                  className={`cursor-pointer transition-all hover:shadow-xl ${
                    selectedCategory === category.id ? 'ring-2 ring-[#FF6B00]' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader>
                    <CardTitle className="text-center">
                      <div className="text-2xl font-bold mb-2">{category.name}</div>
                      <div className="text-3xl text-[#FF6B00]">R{category.price}</div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {category.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <Check className="w-4 h-4 text-[#FF6B00] mr-2 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    {selectedCategory === category.id && (
                      <div className="flex items-center justify-center text-[#FF6B00] font-semibold">
                        <Check className="w-5 h-5 mr-2" />
                        <span>Selected</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.section>
        )}

        {/* Step 3: Select Quantity & Checkout */}
        {selectedMatch && selectedCategory && (
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              title="Step 3: Complete Your Purchase"
              subtitle="Review your order and proceed to checkout"
            />
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Order Summary */}
                  <div>
                    <h3 className="text-xl font-bold mb-4">Order Summary</h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex justify-between">
                        <span>Match:</span>
                        <span className="font-semibold">Polokwane City FC vs {selectedMatchData?.opponent}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Date:</span>
                        <span className="font-semibold">{selectedMatchData && formatDate(selectedMatchData.date)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Category:</span>
                        <span className="font-semibold">{selectedCategoryData?.name}</span>
                      </div>
                    </div>
                  </div>

                  {/* Quantity Selector */}
                  <div>
                    <label className="block text-sm font-semibold mb-2">Number of Tickets</label>
                    <div className="flex items-center gap-4">
                      <Button
                        variant="outline"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        -
                      </Button>
                      <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                      <Button
                        variant="outline"
                        onClick={() => setQuantity(Math.min(10, quantity + 1))}
                      >
                        +
                      </Button>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="border-t pt-6">
                    <div className="flex justify-between items-center text-2xl font-bold">
                      <span>Total:</span>
                      <span className="text-[#FF6B00]">R{totalPrice.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Checkout Button */}
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={() => alert('This is a demo. In production, this would redirect to payment processing.')}
                  >
                    <CreditCard className="w-5 h-5 mr-2" />
                    Proceed to Payment
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    This is a demonstration checkout. No actual payment will be processed.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Information Section */}
        <section className="bg-gray-50 rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Important Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="w-12 h-12 text-[#FF6B00] mx-auto mb-4" />
              <h4 className="font-bold mb-2">Group Bookings</h4>
              <p className="text-sm text-gray-600">
                For groups of 20 or more, please contact our ticketing office for special rates.
              </p>
            </div>
            <div className="text-center">
              <Ticket className="w-12 h-12 text-[#FF6B00] mx-auto mb-4" />
              <h4 className="font-bold mb-2">Digital Tickets</h4>
              <p className="text-sm text-gray-600">
                All tickets are delivered digitally via email and can be scanned at the stadium entrance.
              </p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-[#FF6B00] mx-auto mb-4" />
              <h4 className="font-bold mb-2">Stadium Access</h4>
              <p className="text-sm text-gray-600">
                Gates open 2 hours before kickoff. Please arrive early to avoid queues.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
