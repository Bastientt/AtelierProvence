import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: linear-gradient(135deg, #f0f8ef, #dcebd6);
  padding: 5rem 1rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: #4a6741;
  font-family: Georgia, serif;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #5a7c50;
  max-width: 800px;
  margin: 1.5rem auto 0;
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media(min-width: 640px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const Button = styled.button<{ secondary?: boolean }>`
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 9999px;
  cursor: pointer;
  border: ${props => props.secondary ? '2px solid #7fb069' : 'none'};
  background: ${props => props.secondary ? 'transparent' : 'linear-gradient(45deg, #7fb069, #6a9c56)'};
  color: ${props => props.secondary ? '#4a6741' : 'white'};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
    background: ${props => props.secondary ? '#7fb069' : 'linear-gradient(45deg, #6a9c56, #5a8748)'};
    color: white;
  }
`;

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => (
  <Section>
    <Title>Créations artisanales du Sud de la France</Title>
    <Subtitle>
      Chaque pièce raconte une histoire, façonnée avec passion selon les traditions provençales.
    </Subtitle>
    <ButtonGroup>
      <Button onClick={() => scrollToSection('produits')}>Découvrir nos produits</Button>
      <Button secondary onClick={() => scrollToSection('personnalisation')}>Créer sur mesure</Button>
    </ButtonGroup>
  </Section>
);

export default Hero;
