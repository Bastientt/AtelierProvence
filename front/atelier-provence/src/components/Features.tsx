import React from 'react';
import styled from 'styled-components';
import { features } from '../data/features';

const Section = styled.section`
  background-color: #fefcfa;
  padding: 5rem 1rem;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h3`
  font-size: 2.25rem;
  font-weight: 300;
  text-align: center;
  margin-bottom: 3rem;
  color: #4a6741;
`;

const Grid = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: 1fr;

  @media(min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 1.5rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  border: 1px solid #e8f2e6;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-0.75rem);
    box-shadow: 0 12px 24px rgba(0,0,0,0.15);
  }
`;

const Icon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 9999px;
  background: linear-gradient(45deg, #7fb069, #6a9c56);
  color: white;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
`;

const FeatureTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #4a6741;
`;

const Description = styled.p`
  color: #5a7c50;
  line-height: 1.6;
`;

const Features: React.FC = () => (
  <Section id="produits">
    <Container>
      <Title>Nos Valeurs</Title>
      <Grid>
        {features.map((feature, index) => (
          <Card key={index}>
            <Icon>{feature.icon}</Icon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <Description>{feature.description}</Description>
          </Card>
        ))}
      </Grid>
    </Container>
  </Section>
);

export default Features;
