import React from 'react';
import styled from 'styled-components';

interface NavItem {
  name: string;
  id: string;
}

interface HeaderProps {
  navItems: NavItem[];
  scrollToSection: (id: string) => void;
  isScrolled: boolean;
}

const HeaderWrapper = styled.header<{ isScrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 40;
  background: linear-gradient(135deg, #e8f2e6 0%, #d5e8d1 100%);
  box-shadow: ${({ isScrolled }) => (isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none')};
  transition: all 0.3s ease;
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  @media(min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  background: linear-gradient(45deg, #7fb069, #6a9c56);
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 300;
  color: #4a6741;
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const NavButton = styled.button`
  font-size: 1.125rem;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  background: transparent;
  color: #5a7c50;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(74, 103, 65, 0.1);
    color: #4a6741;
    transform: translateY(-2px);
  }
`;

const Header: React.FC<HeaderProps> = ({ navItems, scrollToSection, isScrolled }) => (
  <HeaderWrapper isScrolled={isScrolled}>
    <Container>
      <Brand>
        <Logo>🌿</Logo>
        <Title>Atelier Provence</Title>
      </Brand>
      <nav>
        <NavList>
          {navItems.map((item) => (
            <li key={item.id}>
              <NavButton onClick={() => scrollToSection(item.id)}>{item.name}</NavButton>
            </li>
          ))}
        </NavList>
      </nav>
    </Container>
  </HeaderWrapper>
);

export default Header;
