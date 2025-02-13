"use client"
import Image from 'next/image';
import { Smartphone, Tag, Headphones, ShieldCheck, Truck, CreditCard, Users, Trophy, Clock, Mail } from 'lucide-react';
import Header from '../components/Header';

export default function About() {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-gray-50 ">
                {/* Hero Section */}
                <section className="relative bg-blue-900 text-white py-32 px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-5xl font-bold mb-6">About EcomMobile</h1>
                        <p className="text-xl text-blue-100">Empowering Your Digital Life Through Cutting-Edge Technology</p>
                    </div>
                </section>

                {/* Mission & Vision */}
                <section className="max-w-7xl mx-auto py-16 px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/about-showroom.jpg"
                                alt="Our Store"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                                <Trophy className="text-blue-600" size={32} />
                                Our Journey
                            </h2>
                            <p className="text-gray-600 text-lg mb-4">
                                Since 2012, EcomMobile has been revolutionizing mobile technology retail. What began as a small kiosk in
                                New York has grown into a nationwide network of digital stores serving millions of satisfied customers.
                            </p>
                            <p className="text-gray-600 text-lg">
                                Our vision is to bridge the gap between cutting-edge technology and everyday users through education,
                                accessible pricing, and exceptional service.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us */}
                <section className="bg-white py-16 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-12">Why EcomMobile?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {[
                                { icon: Smartphone, title: "Latest Devices", text: "New launches within 24 hours" },
                                { icon: Tag, title: "Best Prices", text: "Price match guarantee" },
                                { icon: Headphones, title: "Expert Support", text: "24/7 customer care" },
                                { icon: ShieldCheck, title: "2-Year Warranty", text: "Extended protection plans" },
                                { icon: Truck, title: "Fast Shipping", text: "Next-day delivery available" },
                                { icon: CreditCard, title: "Secure Payments", text: "256-bit SSL encryption" },
                            ].map((item, index) => (
                                <div key={index} className="p-6 bg-gray-50 rounded-xl transition hover:shadow-lg">
                                    <item.icon className="mx-auto text-blue-600" size={40} />
                                    <h3 className="text-lg font-semibold mt-4 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Company Milestones */}
                <section className="max-w-7xl mx-auto py-16 px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800 mb-2">Our Milestones</h2>
                        <p className="text-gray-600">Pioneering mobile retail innovation</p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { year: "2012", title: "Founded", text: "Started in NYC" },
                            { year: "2015", title: "1M Customers", text: "National expansion" },
                            { year: "2018", title: "AI Chatbot", text: "24/7 support system" },
                            { year: "2023", title: "Global Reach", text: "50+ countries served" },
                        ].map((item, index) => (
                            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                                <div className="text-blue-600 font-bold text-3xl mb-3">{item.year}</div>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Team Section */}
                <section className="bg-gray-100 py-16 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
                                <Users className="text-blue-600" size={32} />
                                Leadership Team
                            </h2>
                            <p className="text-gray-600">Experts driving mobile innovation</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                { name: "Sarah Johnson", role: "CEO & Founder", image: "/team-ceo.jpg" },
                                { name: "Michael Chen", role: "CTO", image: "/team-cto.jpg" },
                                { name: "Emma Wilson", role: "COO", image: "/team-coo.jpg" },
                            ].map((member, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                    <div className="relative h-72">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                        />
                                    </div>
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                        <p className="text-gray-600">{member.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <Mail className="mx-auto mb-6" size={48} />
                        <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
                        <p className="text-lg mb-8">Get exclusive deals, tech insights, and early access to new launches</p>
                        <div className="max-w-md mx-auto flex gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900"
                            />
                            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}