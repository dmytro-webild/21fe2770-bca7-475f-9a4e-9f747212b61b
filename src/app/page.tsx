"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBase from '@/components/sections/footer/FooterBase';
import HeroBillboardScroll from '@/components/sections/hero/HeroBillboardScroll';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="fluid"
        cardStyle="gradient-mesh"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="glass"
        headingFontWeight="bold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "Our Story",          id: "about"},
        {
          name: "Menu",          id: "menu"},
        {
          name: "Experience",          id: "features"},
        {
          name: "Reservations",          id: "contact"},
      ]}
      brandName="The Wild Fig"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardScroll
      background={{
        variant: "gradient-bars"}}
      title="Elevated Dining Meets Warm Hospitality"
      description="Discover seasonal menus crafted with fresh, locally sourced ingredients. Whether celebrating a milestone or enjoying an intimate dinner, The Wild Fig delivers an unforgettable culinary experience."
      buttons={[
        {
          text: "Reserve Your Table",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/event-hall-wooden-table-with-rustic-chairs_114579-2233.jpg"
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Our Philosophy"},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/female-chef-uniform-garnishes-dish-with-herbs-leaves-spices_482257-124611.jpg",          alt: "Seasonal cooking"},
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          id: "f1",          title: "Locally Sourced",          descriptions: [
            "Hand-selected ingredients from regional farms."],
          imageSrc: "http://img.b2bpic.net/free-photo/vegetables-notepad-template_23-2148006179.jpg"},
        {
          id: "f2",          title: "Expert Service",          descriptions: [
            "Professional hospitality tailored to your needs."],
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-safari-party-with-dessert-table_23-2149707844.jpg"},
        {
          id: "f3",          title: "Elegant Ambiance",          descriptions: [
            "Sophisticated setting for any celebration."],
          imageSrc: "http://img.b2bpic.net/free-photo/table-chairs-italian-garden_628469-330.jpg"},
      ]}
      title="A Destination Experience"
      description="Excellence in every detail, from farm to table."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "p1",          brand: "Appetizer",          name: "Heirloom Tomato Tart",          price: "R325",          rating: 5,
          reviewCount: "120",          imageSrc: "http://img.b2bpic.net/free-photo/meatball-sauce-topped-with-greenery_140725-1813.jpg"},
        {
          id: "p2",          brand: "Entree",          name: "Pan-Seared Scallops",          price: "R615",          rating: 5,
          reviewCount: "95",          imageSrc: "http://img.b2bpic.net/free-photo/white-plate-with-originally-served-salad-stands-dark-wooden-t_1304-4651.jpg"},
        {
          id: "p3",          brand: "Dessert",          name: "Fig & Honey Pavlova",          price: "R250",          rating: 5,
          reviewCount: "67",          imageSrc: "http://img.b2bpic.net/free-photo/tasty-dessert-chocolate-cake-concept-delicious-dessert_185193-108429.jpg"},
        {
          id: "p4",          brand: "Appetizer",          name: "Forest Mushroom Soup",          price: "R285",          rating: 4,
          reviewCount: "42",          imageSrc: "http://img.b2bpic.net/free-photo/raw-fresh-tuna-fish-meat-salad-with-avocado-mango_74190-749.jpg"},
        {
          id: "p5",          brand: "Salad",          name: "Wild Fig & Goat Cheese",          price: "R360",          rating: 5,
          reviewCount: "88",          imageSrc: "http://img.b2bpic.net/free-photo/delicious-salmon-served-with-herbs_23-2148516944.jpg"},
        {
          id: "p6",          brand: "Main",          name: "Herb-Roasted Organic Duck",          price: "R685",          rating: 5,
          reviewCount: "104",          imageSrc: "http://img.b2bpic.net/free-photo/top-view-lemon-tart-plate_23-2148519057.jpg"},
      ]}
      title="Seasonal Menu"
      description="Artisan dishes inspired by the current harvest."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",          value: "15+",          title: "Years of Tradition",          items: [
            "Serving excellence",            "Legacy established"],
        },
        {
          id: "m2",          value: "20",          title: "Local Farm Partners",          items: [
            "Sustainable growth",            "Direct sourcing"],
        },
        {
          id: "m3",          value: "4.9",          title: "Guest Rating",          items: [
            "Consistently high",            "Loved by locals"],
        },
      ]}
      title="Our Culinary Impact"
      description="Measuring our dedication to quality."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwelve
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",          name: "Elena Ross",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-friends-restaurant_23-2148395397.jpg"},
        {
          id: "t2",          name: "Marcus Thorne",          imageSrc: "http://img.b2bpic.net/free-photo/woman-enjoying-her-virtual-date_23-2149307267.jpg"},
        {
          id: "t3",          name: "Sarah Jenkins",          imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-woman-cafe-woman-drinking-champagne-cafe-talking_1321-4303.jpg"},
        {
          id: "t4",          name: "David Wu",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-man-enjoying-party-holding-wine-glass_23-2148037558.jpg"},
        {
          id: "t5",          name: "Clara Bennett",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-pretty-waitress_1098-15705.jpg"},
      ]}
      cardTitle="Guest Reflections"
      cardTag="Testimonials"
      cardAnimation="slide-up"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitMedia
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",          title: "Do you accept reservations?",          content: "Yes, we highly recommend booking in advance via our website."},
        {
          id: "q2",          title: "Is parking available?",          content: "Complimentary valet service is available every evening."},
        {
          id: "q3",          title: "Do you cater to dietary restrictions?",          content: "Absolutely. Please inform us of any allergies when booking."},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/two-men-cafe_23-2147775893.jpg"
      mediaAnimation="slide-up"
      title="Common Questions"
      description="Everything you need to know about dining at The Wild Fig."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Reserve Your Table"
      description="Join us for an unforgettable dining experience."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Full Name",          required: true,
        },
        {
          name: "date",          type: "date",          placeholder: "Date",          required: true,
        },
        {
          name: "guests",          type: "number",          placeholder: "Number of Guests",          required: true,
        },
      ]}
      textarea={{
        name: "notes",        placeholder: "Special occasions or dietary needs?"}}
      imageSrc="http://img.b2bpic.net/free-photo/city-background-panoramic-view_23-2148892901.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBase
      columns={[
        {
          title: "Visit",          items: [
            {
              label: "123 Gourmet Lane",              href: "#"},
            {
              label: "City Center",              href: "#"},
          ],
        },
        {
          title: "Connect",          items: [
            {
              label: "Instagram",              href: "#"},
            {
              label: "Facebook",              href: "#"},
          ],
        },
        {
          title: "Legal",          items: [
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
      ]}
      logoText="The Wild Fig"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}