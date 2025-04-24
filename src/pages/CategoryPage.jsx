import React, { useState } from 'react';
import { Badge, Button, Col, Container, Form, Row } from 'react-bootstrap';
import {
  FaBriefcase,
  FaFilter,
  FaShoppingCart,
  FaStar,
  FaTags
} from 'react-icons/fa';
import styled, { createGlobalStyle } from 'styled-components';

// Global styles
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    color: #333;
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

// Styled Components
const Section = styled.section`
  padding: 5rem 0;
`;

const CategoryHero = styled.div`
  background: linear-gradient(135deg, #2a3b8f 0%, #4361ee 100%);
  color: white;
  padding: 4rem 0;
`;

const CategoryTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CategoryDescription = styled.p`
  font-size: 1.25rem;
  opacity: 0.9;
  max-width: 700px;
`;

const PrimaryButton = styled(Button)`
  background-color: #FF6B6B;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #FF5252;
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  border: 2px solid white;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  margin-left: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  
  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  margin-bottom: 2rem;
`;

const ProductCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const ProductImage = styled.div`
  height: 220px;
  background-color: #e9ecef;
  background-size: cover;
  background-position: center;
  position: relative;
`;

const ProductBadge = styled(Badge)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const ProductContent = styled.div`
  padding: 1.5rem;
`;

const ProductTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ProductDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #4361ee;
`;

const BuyButton = styled(Button)`
  background-color: #4361ee;
  border: none;
  padding: 0.5rem 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: #3a56d4;
  }
`;

const FilterSection = styled.div`
  background-color: #f8f9fa;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
`;

const FilterTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const FilterGroup = styled.div`
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FilterLabel = styled.h5`
  font-size: 1rem;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const PriceRange = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const PriceInput = styled(Form.Control)`
  max-width: 100px;
`;

const TagButton = styled(Button)`
  background-color: ${props => props.active ? '#4361ee' : '#e9ecef'};
  color: ${props => props.active ? 'white' : '#333'};
  border: none;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#3a56d4' : '#dee2e6'};
  }
`;

const SortDropdown = styled(Form.Select)`
  max-width: 250px;
  margin-left: auto;
`;

const SortContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ResultsCount = styled.p`
  margin-bottom: 0;
  color: #666;
`;

const FilterButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #dee2e6;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1rem;
  
  &:hover {
    background-color: #f8f9fa;
  }
`;

const NavbarWrapper = styled.nav`
  background-color: white;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const NavLogo = styled.a`
  font-size: 1.75rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
  
  &:hover {
    color: #4361ee;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: #666;
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    color: #4361ee;
  }
`;

const NavButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

const CartButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: transparent;
  color: #4361ee;
  border: 1px solid #4361ee;
  
  &:hover {
    background-color: #4361ee;
    color: white;
  }
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const PaginationButton = styled(Button)`
  margin: 0 0.25rem;
  background-color: ${props => props.active ? '#4361ee' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border: 1px solid #dee2e6;
  
  &:hover {
    background-color: ${props => props.active ? '#3a56d4' : '#f8f9fa'};
    color: ${props => props.active ? 'white' : '#333'};
    border: 1px solid #dee2e6;
  }
`;

const Footer = styled.footer`
  background-color: #222;
  color: #f8f9fa;
  padding: 4rem 0 2rem;
`;

const Logo = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
`;

const FooterText = styled.p`
  color: #bbb;
  margin-bottom: 1.5rem;
`;

const FooterTitle = styled.h5`
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
`;

const FooterLink = styled.a`
  color: #bbb;
  display: block;
  margin-bottom: 0.75rem;
  text-decoration: none;
  
  &:hover {
    color: white;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SocialIcon = styled.a`
  color: #bbb;
  font-size: 1.5rem;
  
  &:hover {
    color: white;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #444;
  color: #888;
  font-size: 0.9rem;
`;

const CategoryPage = () => {
  // Business category templates data
  const [templates] = useState([
    {
      id: 1,
      title: "Corporate Business Pro",
      description: "Elegant website template for businesses with services showcase, team section, and testimonials.",
      price: 69,
      badge: "Best Seller",
      tags: ["Business", "Corporate", "Professional"]
    },
    {
      id: 2,
      title: "Startup Landing",
      description: "Modern landing page template designed for startups and new businesses with lead generation forms.",
      price: 59,
      badge: "New",
      tags: ["Business", "Startup", "Landing Page"]
    },
    {
      id: 3,
      title: "Agency Portfolio",
      description: "Showcase your agency's work with this portfolio-focused business template. Includes work gallery and case studies.",
      price: 79,
      tags: ["Business", "Agency", "Portfolio"]
    },
    {
      id: 4,
      title: "Business Consultancy",
      description: "Professional template for consultants and advisors with service areas and booking system.",
      price: 89,
      badge: "Popular",
      tags: ["Business", "Consulting", "Professional"]
    },
    {
      id: 5,
      title: "SaaS Platform",
      description: "Perfect template for software companies and SaaS businesses with feature showcase and pricing tables.",
      price: 99,
      tags: ["Business", "SaaS", "Software"]
    },
    {
      id: 6,
      title: "Corporate Finance",
      description: "Premium template for financial services, accounting firms, and investment companies.",
      price: 89,
      tags: ["Business", "Finance", "Corporate"]
    },
    {
      id: 7,
      title: "Digital Marketing",
      description: "Template designed for marketing agencies with service offerings, analytics integrations, and case studies.",
      price: 75,
      badge: "New",
      tags: ["Business", "Marketing", "Agency"]
    },
    {
      id: 8,
      title: "Law Firm Professional",
      description: "Elegant template for law firms and legal consultancies with practice areas and attorney profiles.",
      price: 95,
      tags: ["Business", "Legal", "Professional"]
    }
  ]);
  
  // Filter states
  const [activeTags, setActiveTags] = useState([]);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(100);
  
  // Get all unique tags
  const allTags = Array.from(new Set(templates.flatMap(template => template.tags)));
  
  // Toggle tag filter
  const toggleTag = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(t => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };
  
  // Apply filters
  const filteredTemplates = templates.filter(template => {
    const matchesTag = activeTags.length === 0 || 
      template.tags.some(tag => activeTags.includes(tag));
    const matchesPrice = template.price >= priceMin && template.price <= priceMax;
    
    return matchesTag && matchesPrice;
  });
  
  return (
    <>
      <GlobalStyle />
      
      {/* Navbar */}
      <NavbarWrapper>
        <NavContainer>
          <NavLogo href="#">TemplatePro</NavLogo>
          <NavLinks>
            <NavLink href="#templates">Templates</NavLink>
            <NavLink href="#categories">Categories</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#pricing">Pricing</NavLink>
            <NavLink href="#support">Support</NavLink>
          </NavLinks>
          <NavButtons>
            <CartButton>
              <FaShoppingCart /> Cart (0)
            </CartButton>
            <PrimaryButton>Login</PrimaryButton>
          </NavButtons>
        </NavContainer>
      </NavbarWrapper>
      
      {/* Category Hero Section */}
      <CategoryHero>
        <Container>
          <Row>
            <Col lg={8}>
              <Badge bg="warning" text="dark" className="mb-3">Business</Badge>
              <CategoryTitle>Business Templates</CategoryTitle>
              <CategoryDescription>
                Professional website templates designed for corporate websites, startups, agencies,
                and businesses of all sizes. Easy to customize and ready to launch.
              </CategoryDescription>
              <div className="d-flex flex-wrap mt-4">
                <PrimaryButton><FaBriefcase className="me-2" /> Browse All Business Templates</PrimaryButton>
              </div>
            </Col>
          </Row>
        </Container>
      </CategoryHero>
      
      {/* Main Content */}
      <Section>
        <Container>
          <Row>
            {/* Sidebar Filters */}
            <Col lg={3}>
              <FilterSection>
                <FilterTitle><FaFilter /> Filters</FilterTitle>
                
                <FilterGroup>
                  <FilterLabel>Price Range</FilterLabel>
                  <PriceRange>
                    <PriceInput 
                      type="number" 
                      placeholder="Min" 
                      value={priceMin}
                      onChange={(e) => setPriceMin(parseInt(e.target.value) || 0)}
                    />
                    <span>to</span>
                    <PriceInput 
                      type="number" 
                      placeholder="Max" 
                      value={priceMax}
                      onChange={(e) => setPriceMax(parseInt(e.target.value) || 0)}
                    />
                  </PriceRange>
                </FilterGroup>
                
                <FilterGroup>
                  <FilterLabel>Features</FilterLabel>
                  <Form>
                    <Form.Check 
                      type="checkbox" 
                      id="responsive" 
                      label="Responsive Design" 
                      defaultChecked 
                    />
                    <Form.Check 
                      type="checkbox" 
                      id="forms" 
                      label="Contact Forms" 
                      defaultChecked 
                    />
                    <Form.Check 
                      type="checkbox" 
                      id="forms" 
                      label="Photo Gallery" 
                    />
                    <Form.Check 
                      type="checkbox" 
                      id="booking" 
                      label="Booking System" 
                    />
                    <Form.Check 
                      type="checkbox" 
                      id="blog" 
                      label="Blog Pages" 
                    />
                  </Form>
                </FilterGroup>
                
                <FilterGroup>
                  <FilterLabel><FaTags className="me-1" /> Tags</FilterLabel>
                  <div>
                    {allTags.map(tag => (
                      <TagButton 
                        key={tag}
                        active={activeTags.includes(tag)}
                        onClick={() => toggleTag(tag)}
                        size="sm"
                      >
                        {tag}
                      </TagButton>
                    ))}
                  </div>
                </FilterGroup>
                
                <FilterGroup>
                  <FilterLabel>Rating</FilterLabel>
                  <Form>
                    <Form.Check 
                      type="radio" 
                      name="rating" 
                      id="rating5" 
                      label={<span><FaStar className="text-warning" /> <FaStar className="text-warning" /> <FaStar className="text-warning" /> <FaStar className="text-warning" /> <FaStar className="text-warning" /> & Up</span>} 
                    />
                    <Form.Check 
                      type="radio" 
                      name="rating" 
                      id="rating4" 
                      label={<span><FaStar className="text-warning" /> <FaStar className="text-warning" /> <FaStar className="text-warning" /> <FaStar className="text-warning" /> & Up</span>} 
                      defaultChecked
                    />
                    <Form.Check 
                      type="radio" 
                      name="rating" 
                      id="rating3" 
                      label={<span><FaStar className="text-warning" /> <FaStar className="text-warning" /> <FaStar className="text-warning" /> & Up</span>} 
                    />
                  </Form>
                </FilterGroup>
                
                <div className="d-grid gap-2">
                  <Button variant="primary">Apply Filters</Button>
                  <Button variant="light">Reset Filters</Button>
                </div>
              </FilterSection>
            </Col>
            
            {/* Templates Grid */}
            <Col lg={9}>
              <SortContainer>
                <ResultsCount>Showing {filteredTemplates.length} templates</ResultsCount>
                <div className="d-flex align-items-center ms-auto">
                  <FilterButton className="d-lg-none">
                    <FaFilter /> Filters
                  </FilterButton>
                  <div className="d-flex align-items-center">
                    <span className="me-2">Sort by:</span>
                    <SortDropdown>
                      <option>Most Popular</option>
                      <option>Newest First</option>
                      <option>Price: Low to High</option>
                      <option>Price: High to Low</option>
                      <option>Rating</option>
                    </SortDropdown>
                  </div>
                </div>
              </SortContainer>
              
              <Row>
                {filteredTemplates.map(template => (
                  <Col md={6} lg={4} className="mb-4" key={template.id}>
                    <ProductCard>
                      <ProductImage style={{ backgroundColor: '#e9ecef' }}>
                        {template.badge && (
                          <ProductBadge bg="danger">{template.badge}</ProductBadge>
                        )}
                      </ProductImage>
                      <ProductContent>
                        <ProductTitle>{template.title}</ProductTitle>
                        <ProductDescription>{template.description}</ProductDescription>
                        <div>
                          {template.tags.map(tag => (
                            <Badge key={tag} bg="light" text="dark" className="me-1">{tag}</Badge>
                          ))}
                        </div>
                        <ProductPrice>
                          <Price>${template.price}</Price>
                          <BuyButton><FaShoppingCart /> Buy Now</BuyButton>
                        </ProductPrice>
                      </ProductContent>
                    </ProductCard>
                  </Col>
                ))}
              </Row>
              
              {/* Pagination */}
              <PaginationContainer>
                <PaginationButton disabled>&laquo;</PaginationButton>
                <PaginationButton active>1</PaginationButton>
                <PaginationButton>2</PaginationButton>
                <PaginationButton>3</PaginationButton>
                <PaginationButton>&raquo;</PaginationButton>
              </PaginationContainer>
            </Col>
          </Row>
        </Container>
      </Section>
      
      {/* Footer */}
      <Footer>
        <Container>
          <Row>
            <Col lg={4} className="mb-4">
              <Logo>TemplatePro</Logo>
              <FooterText>
                Premium website templates for professionals.
                High-quality, responsive designs to save you time and money.
              </FooterText>
              <SocialLinks>
                <SocialIcon href="#"><i className="fab fa-facebook-f"></i></SocialIcon>
                <SocialIcon href="#"><i className="fab fa-twitter"></i></SocialIcon>
                <SocialIcon href="#"><i className="fab fa-instagram"></i></SocialIcon>
                <SocialIcon href="#"><i className="fab fa-linkedin-in"></i></SocialIcon>
              </SocialLinks>
            </Col>
            <Col md={4} lg={2} className="mb-4">
              <FooterTitle>Templates</FooterTitle>
              <FooterLink href="#">Real Estate</FooterLink>
              <FooterLink href="#">Hospital</FooterLink>
              <FooterLink href="#">Education</FooterLink>
              <FooterLink href="#" className="active">Business</FooterLink>
            </Col>
            <Col md={4} lg={2} className="mb-4">
              <FooterTitle>Support</FooterTitle>
              <FooterLink href="#">Help Center</FooterLink>
              <FooterLink href="#">Documentation</FooterLink>
              <FooterLink href="#">Tutorials</FooterLink>
              <FooterLink href="#">Contact Support</FooterLink>
            </Col>
            <Col md={4} lg={2} className="mb-4">
              <FooterTitle>Legal</FooterTitle>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of Service</FooterLink>
              <FooterLink href="#">License</FooterLink>
              <FooterLink href="#">Refund Policy</FooterLink>
            </Col>
            <Col lg={2} className="mb-4">
              <FooterTitle>Contact Us</FooterTitle>
              <FooterText>
                info@templatepro.com<br />
                +1 (555) 123-4567
              </FooterText>
            </Col>
          </Row>
          <Copyright>
            © {new Date().getFullYear()} TemplatePro. All rights reserved.
          </Copyright>
        </Container>
      </Footer>
    </>
  );
};

export default CategoryPage;