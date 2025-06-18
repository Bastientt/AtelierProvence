import React from 'react';
import styled from 'styled-components';
import { navItems } from '../data/navItems';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #3d2f2a 0%, #2a1f1a 100%);
  color: white;
  padding: 4rem 1rem;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2.5rem;

  @media(min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 300;
  color: #e8f2e6;
  margin-bottom: 1.25rem;
`;

const NavButton = styled.button`
  display: block;
  margin-bottom: 0.5rem;
  background: none;
  border: none;
  padding: 0;
  color: #7fb069;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #e8f2e6;
  }
`;

const Link = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  color: #7fb069;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #e8f2e6;
  }
`;

const ContactInfo = styled.div`
  color: #7fb069;
`;

const SocialIcon = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  background-color: #7fb069;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s;
  margin-right: 0.5rem;

  &:hover {
    background-color: #e8f2e6;
    color: #3d2f2a;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #7fb069;
  background-color: #f8faf8;
  color: #3d2f2a;
`;

const SubscribeButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background: linear-gradient(45deg, #7fb069, #6a9c56);
  color: white;
  font-weight: 600;
  margin-top: 0.75rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: linear-gradient(45deg, #6a9c56, #5a8748);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  }
`;

const BottomText = styled.div`
  border-top: 1px solid #4a3530;
  padding-top: 1.25rem;
  text-align: center;
  color: #8b7355;
`;

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => (
  <FooterSection id="contact">
    <Container>
      <Grid>
        <div>
          <SectionTitle>Navigation</SectionTitle>
          {navItems.map((item) => (
            <NavButton key={item.id} onClick={() => scrollToSection(item.id)}>
              {item.name}
            </NavButton>
          ))}
        </div>
        <div>
          <SectionTitle>Informations</SectionTitle>
          {["Conditions générales de vente", "Mentions légales", "Politique de confidentialité", "Livraisons & retours"].map((link, i) => (
            <Link href="#" key={i}>{link}</Link>
          ))}
        </div>
        <div>
          <SectionTitle>Contact</SectionTitle>
          <ContactInfo>
            <p>📍 Provence-Alpes-Côte d'Azur</p>
            <p>📞 +33 4 XX XX XX XX</p>
            <p>✉️ contact@atelier-provence.fr</p>
            <div style={{ display: 'flex', marginTop: '1rem' }}>
              {["📘", "📷", "🎵"].map((icon, i) => (
                <SocialIcon key={i} href="#">{icon}</SocialIcon>
              ))}
            </div>
          </ContactInfo>
        </div>
        <div>
          <SectionTitle>Newsletter</SectionTitle>
          <p style={{ color: '#7fb069', marginBottom: '0.75rem' }}>
            Recevez nos dernières créations et actualités
          </p>
          <Input type="email" placeholder="Votre email" />
          <SubscribeButton>S'abonner</SubscribeButton>
        </div>
      </Grid>
      <BottomText>
        <p>&copy; 2025 Atelier Provence. Tous droits réservés. Créé avec passion en Provence.</p>
      </BottomText>
    </Container>
  </FooterSection>
);

export default Footer;
