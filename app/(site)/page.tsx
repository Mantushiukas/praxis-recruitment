import { LandingHero } from '@/components/LandingHero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Praxis Recruitment — Recruitment by Practitioners',
  description: 'Connecting high-performing talent with companies building digital and tech teams.',
};

export default function HomePage() {
  return <LandingHero />;
}
