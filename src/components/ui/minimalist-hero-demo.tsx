import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MinimalistHero } from '@/components/ui/minimalist-hero';

const MinimalistHeroDemo = () => {
  const navLinks = [
    { label: 'HOME', href: '#' },
    { label: 'PRODUCT', href: '#' },
    { label: 'STORE', href: '#' },
    { label: 'ABOUT US', href: '#' },
  ];

  const socialLinks = [
    { icon: FaFacebook, href: '#' },
    { icon: FaInstagram, href: '#' },
    { icon: FaTwitter, href: '#' },
    { icon: FaLinkedin, href: '#' },
  ];

  return (
    <MinimalistHero
      logoText="mnmlst."
      navLinks={navLinks}
      mainText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ultrices, justo vel tempus."
      readMoreLink="#"
      imageSrc="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=900&fit=crop&crop=face&grayscale"
      imageAlt="A portrait of a person in profile."
      overlayText={{
        part1: 'less is',
        part2: 'more.',
      }}
      socialLinks={socialLinks}
      locationText="Arlington Heights, IL"
    />
  );
};

export default MinimalistHeroDemo;
