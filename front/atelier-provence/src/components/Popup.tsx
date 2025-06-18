import React from 'react';
import styled from 'styled-components';

interface PopupProps {
  onClose: () => void;
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  max-width: 28rem;
  padding: 3rem;
  border-radius: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #f8faf8 0%, #e8f2e6 100%);
  border: 2px solid #7fb069;
  box-shadow: 0 20px 30px rgba(0,0,0,0.2);
`;

const Title = styled.h3`
  font-size: 1.875rem;
  font-weight: 300;
  color: #4a6741;
  margin-bottom: 1.25rem;
`;

const Text = styled.p`
  font-size: 1.125rem;
  color: #5a7c50;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 9999px;
  background: linear-gradient(45deg, #7fb069, #6a9c56);
  color: white;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #6a9c56, #5a8748);
    transform: translateY(-4px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  }
`;

const Popup: React.FC<PopupProps> = ({ onClose }) => (
  <Overlay>
    <Box>
      <Title>🌿 Bienvenue chez Atelier Provence</Title>
      <Text>
        Découvrez l'authenticité de nos créations artisanales, fabriquées avec passion dans le Sud de la France.
      </Text>
      <Button onClick={onClose}>Découvrir nos créations</Button>
    </Box>
  </Overlay>
);

export default Popup;
