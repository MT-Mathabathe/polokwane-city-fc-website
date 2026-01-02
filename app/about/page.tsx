'use client';

import SectionHeader from '@/components/SectionHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Target, Users, MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  const achievements = [
    { year: '2018', title: 'PSL Promotion', description: 'Earned promotion to Premier Soccer League' },
    { year: '2019', title: 'Top 8 Finish', description: 'Finished in the top 8 in our debut season' },
    { year: '2021', title: 'Nedbank Cup Semi-Final', description: 'Reached the semi-finals of the Nedbank Cup' },
    { year: '2023', title: 'Community Shield Winners', description: 'Won the prestigious Community Shield' },
  ];

  const stadiumFeatures = [
    'Capacity: 46,000',
    'State-of-the-art facilities',
    'Premium hospitality suites',
    'Modern training grounds',
    'Youth academy facilities',
    'Medical and recovery center',
  ];

  return (
    <div className="pt-24 pb-20">
      {/* Page Header */}
      <section className="relative h-[400px] flex items-center justify-center mb-16 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1487466365202-1afdb86c764e?w=1920)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-[#FF6B00]/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Our Club
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Discover the history, vision, and values of Polokwane City FC
          </motion.p>
        </div>
      </section>

      {/* Club History */}
      <section id="history" className="container mx-auto px-4 mb-20">
        <SectionHeader
          title="Our History"
          subtitle="The journey of Rise of the City"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Polokwane City FC, affectionately known as "Rise of the City," was founded in 2015 in the vibrant city of Polokwane, Limpopo. The club represents the aspirations and dreams of the local community, bringing top-tier football to the region.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Since our inception, we have steadily climbed the ranks of South African football. Our promotion to the Premier Soccer League in 2018 marked a significant milestone in our journey, establishing us as a competitive force in the country's top football division.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, Polokwane City FC stands as a beacon of excellence, community engagement, and sporting achievement. We continue to inspire the next generation of football talent while competing at the highest level.
            </p>
          </div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800"
              alt="Polokwane City FC History"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-20 mb-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Vision & Mission"
            subtitle="Our goals and values"
            centered
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600">
                  To become one of Africa's most successful and respected football clubs, inspiring communities through excellence in sport.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600">
                  To develop world-class talent, compete at the highest level, and make a positive impact in our community.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <p className="text-gray-600">
                  Excellence, integrity, teamwork, community engagement, and a relentless pursuit of success on and off the field.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="container mx-auto px-4 mb-20">
        <SectionHeader
          title="Club Achievements"
          subtitle="Celebrating our success over the years"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#FF6B00] to-[#e05000] text-white p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl font-bold mb-4">{achievement.year}</div>
              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-sm opacity-90">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stadium Information */}
      <section id="stadium" className="bg-black text-white py-20 mb-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Peter Mokaba Stadium"
            subtitle="Our home ground"
            centered
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1487466365202-1afdb86c764e?w=800"
                alt="Peter Mokaba Stadium"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Peter Mokaba Stadium, named after the anti-apartheid activist and politician, is our proud home. This world-class venue has hosted international matches and continues to provide an electric atmosphere for our fans.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {stadiumFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#FF6B00] rounded-full mt-2 mr-3" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="container mx-auto px-4">
        <SectionHeader
          title="Contact Us"
          subtitle="Get in touch with Polokwane City FC"
          centered
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                Peter Mokaba Stadium<br />
                Polokwane<br />
                Limpopo, 0699<br />
                South Africa
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">
                Main: +27 15 291 2121<br />
                Tickets: +27 15 291 2122<br />
                Media: +27 15 291 2123
              </p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-[#FF6B00] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-gray-600 text-sm">
                info@polokwanecityfc.co.za<br />
                tickets@polokwanecityfc.co.za<br />
                media@polokwanecityfc.co.za
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
