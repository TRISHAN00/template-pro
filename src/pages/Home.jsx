import React, { useState } from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import {
  FaBriefcase, FaCode,
  FaCog,
  FaCreditCard,
  FaDownload,
  FaGraduationCap,
  FaHeadset,
  FaHome, FaHospital,
  FaMobile, FaPaintBrush,
  FaShieldAlt,
  FaShoppingCart,
  FaStar
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

const HeroSection = styled(Section)`
  background: linear-gradient(135deg, #2a3b8f 0%, #4361ee 100%);
  color: white;
  min-height: 80vh;
  display: flex;
  align-items: center;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
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
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  
  &:after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background-color: #4361ee;
    margin: 1rem auto 0;
  }
`;

const FeaturedSection = styled(Section)`
  background-color: #f8f9fa;
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

const CategoryCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  height: 100%;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #4361ee;
  margin-bottom: 1.5rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const CategoryDescription = styled.p`
  color: #666;
  font-size: 1rem;
`;

const HowItWorksSection = styled(Section)`
  background-color: #f8f9fa;
`;

const StepCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  text-align: center;
  height: 100%;
  position: relative;
`;

const StepNumber = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #4361ee;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 auto 1.5rem;
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const BenefitSection = styled(Section)`
  background-color: white;
`;

const BenefitCard = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

const BenefitIcon = styled.div`
  font-size: 1.75rem;
  color: #4361ee;
  margin-right: 1rem;
  min-width: 2.5rem;
`;

const BenefitContent = styled.div``;

const BenefitTitle = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
`;

const BenefitDescription = styled.p`
  color: #666;
`;

const TestimonialSection = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`;

const TestimonialCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  height: 100%;
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:before {
    content: '"';
    font-size: 4rem;
    color: #4361ee;
    opacity: 0.1;
    position: absolute;
    top: -1.5rem;
    left: -1rem;
  }
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorAvatar = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #e9ecef;
  margin-right: 1rem;
`;

const AuthorName = styled.h5`
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
`;

const AuthorTitle = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const StarRating = styled.div`
  color: #FFD700;
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const CtaSection = styled(Section)`
  background: linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%);
  color: white;
  text-align: center;
`;

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CtaText = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
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

// Main Component
const HomePage = () => {
  const [featuredTemplates] = useState([
    {
      id: 1,
      title: "Modern Real Estate Agency",
      description: "Complete website template for real estate agencies with property listings, agent profiles, and contact forms.",
      price: 79,
      category: "Real Estate",
      badge: "Best Seller"
    },
    {
      id: 2,
      title: "Medical Center",
      description: "Professional website template for hospitals and healthcare providers with appointment booking system.",
      price: 89,
      category: "Hospital",
      badge: "New"
    },
    {
      id: 3,
      title: "University Portal",
      description: "Comprehensive website template for educational institutions with course catalog and student portal.",
      price: 99,
      category: "Education"
    },
    {
      id: 4,
      title: "Corporate Business",
      description: "Elegant website template for businesses with services showcase, team section, and testimonials.",
      price: 69,
      category: "Business",
      badge: "Popular"
    }
  ]);
  
  return (
    <>
      <GlobalStyle />
      
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <HeroTitle>Ready-to-Use Professional Websites</HeroTitle>
              <HeroSubtitle>
                Get beautifully designed templates for Real Estate, Hospitals, Education, Business & more.
                Just purchase, customize and launch!
              </HeroSubtitle>
              <div className="d-flex flex-wrap">
                <PrimaryButton size="lg">Browse Templates</PrimaryButton>
                <SecondaryButton size="lg">View Pricing</SecondaryButton>
              </div>
            </Col>
            <Col lg={6} className="d-none d-lg-block">
              {/* Here you can add an illustration or image */}
            </Col>
          </Row>
        </Container>
      </HeroSection>
      
      {/* Featured Templates Section */}
      <FeaturedSection id="templates">
        <Container>
          <SectionTitle>Featured Templates</SectionTitle>
          <Row>
            {featuredTemplates.map(template => (
              <Col md={6} lg={3} className="mb-4" key={template.id}>
                <ProductCard>
                  <ProductImage style={{ backgroundColor: '#e9ecef' }}>
                    {template.badge && (
                      <ProductBadge bg="danger">{template.badge}</ProductBadge>
                    )}
                  </ProductImage>
                  <ProductContent>
                    <Badge bg="primary" className="mb-2">{template.category}</Badge>
                    <ProductTitle>{template.title}</ProductTitle>
                    <ProductDescription>{template.description}</ProductDescription>
                    <ProductPrice>
                      <Price>${template.price}</Price>
                      <BuyButton><FaShoppingCart /> Buy Now</BuyButton>
                    </ProductPrice>
                  </ProductContent>
                </ProductCard>
              </Col>
            ))}
          </Row>
          <div className="text-center mt-5">
            <PrimaryButton size="lg">View All Templates</PrimaryButton>
          </div>
        </Container>
      </FeaturedSection>
      
      {/* Categories Section */}
      <Section id="categories">
        <Container>
          <SectionTitle>Template Categories</SectionTitle>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <CategoryCard>
                <IconWrapper>
                  <FaHome />
                </IconWrapper>
                <CategoryTitle>Real Estate</CategoryTitle>
                <CategoryDescription>
                  Modern templates designed for real estate agencies, property listings, and agents.
                </CategoryDescription>
              </CategoryCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <CategoryCard>
                <IconWrapper>
                  <FaHospital />
                </IconWrapper>
                <CategoryTitle>Hospital</CategoryTitle>
                <CategoryDescription>
                  Clean and professional designs for hospitals, clinics, and healthcare providers.
                </CategoryDescription>
              </CategoryCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <CategoryCard>
                <IconWrapper>
                  <FaGraduationCap />
                </IconWrapper>
                <CategoryTitle>Education</CategoryTitle>
                <CategoryDescription>
                  Engaging templates for schools, universities, online courses, and educational platforms.
                </CategoryDescription>
              </CategoryCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <CategoryCard>
                <IconWrapper>
                  <FaBriefcase />
                </IconWrapper>
                <CategoryTitle>Business</CategoryTitle>
                <CategoryDescription>
                  Professional designs for corporate websites, startups, and enterprises.
                </CategoryDescription>
              </CategoryCard>
            </Col>
          </Row>
        </Container>
      </Section>
      
      {/* How It Works Section */}
      <HowItWorksSection id="how-it-works">
        <Container>
          <SectionTitle>How It Works</SectionTitle>
          <Row>
            <Col md={4} className="mb-4">
              <StepCard>
                <StepNumber>1</StepNumber>
                <IconWrapper>
                  <FaShoppingCart />
                </IconWrapper>
                <StepTitle>Purchase a Template</StepTitle>
                <StepDescription>
                  Browse our collection and select the perfect template for your needs. Purchase with a secure payment.
                </StepDescription>
              </StepCard>
            </Col>
            <Col md={4} className="mb-4">
              <StepCard>
                <StepNumber>2</StepNumber>
                <IconWrapper>
                  <FaDownload />
                </IconWrapper>
                <StepTitle>Download Files</StepTitle>
                <StepDescription>
                  Get instant access to download your template files after purchase. No waiting period.
                </StepDescription>
              </StepCard>
            </Col>
            <Col md={4} className="mb-4">
              <StepCard>
                <StepNumber>3</StepNumber>
                <IconWrapper>
                  <FaCog />
                </IconWrapper>
                <StepTitle>Customize & Launch</StepTitle>
                <StepDescription>
                  Easily customize the template with your content and branding, then launch your new website.
                </StepDescription>
              </StepCard>
            </Col>
          </Row>
        </Container>
      </HowItWorksSection>
      
      {/* Why Choose Us Section */}
      <BenefitSection>
        <Container>
          <SectionTitle>Why Choose Our Templates</SectionTitle>
          <Row>
            <Col md={6} lg={3} className="mb-4">
              <BenefitCard>
                <BenefitIcon>
                  <FaCode />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Clean Code</BenefitTitle>
                  <BenefitDescription>
                    Well-structured and documented code following best practices.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <BenefitCard>
                <BenefitIcon>
                  <FaMobile />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Fully Responsive</BenefitTitle>
                  <BenefitDescription>
                    Templates that look great on any device and screen size.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <BenefitCard>
                <BenefitIcon>
                  <FaPaintBrush />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Modern UI</BenefitTitle>
                  <BenefitDescription>
                    Contemporary design with the latest UI/UX trends.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <BenefitCard>
                <BenefitIcon>
                  <FaCog />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Easy to Customize</BenefitTitle>
                  <BenefitDescription>
                    Simple and intuitive ways to make templates your own.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col md={6} lg={3} className="mb-4">
              <BenefitCard>
                <BenefitIcon>
                  <FaShieldAlt />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Secure Payments</BenefitTitle>
                  <BenefitDescription>
                    Safe and secure checkout process with multiple payment options.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <BenefitCard>
                <BenefitIcon>
                  <FaHeadset />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Support Included</BenefitTitle>
                  <BenefitDescription>
                    Get help with your template with our responsive support team.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <BenefitCard>
                <BenefitIcon>
                  <FaCreditCard />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>One-time Payment</BenefitTitle>
                  <BenefitDescription>
                    No subscriptions or hidden fees. Pay once and own forever.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
            </Col>
            <Col md={6} lg={3} className="mb-4">
              <BenefitCard>
                <BenefitIcon>
                  <FaDownload />
                </BenefitIcon>
                <BenefitContent>
                  <BenefitTitle>Instant Access</BenefitTitle>
                  <BenefitDescription>
                    Get instant download access after purchase completion.
                  </BenefitDescription>
                </BenefitContent>
              </BenefitCard>
            </Col>
          </Row>
        </Container>
      </BenefitSection>
      
      {/* Testimonials Section */}
      <TestimonialSection>
        <Container>
          <SectionTitle>Customer Testimonials</SectionTitle>
          <Row>
            <Col md={4} className="mb-4">
              <TestimonialCard>
                <StarRating>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </StarRating>
                <TestimonialText>
                  "The template I purchased saved me at least 50 hours of development time. It was easy to customize and the code was clean and well-organized."
                </TestimonialText>
                <TestimonialAuthor>
                  <AuthorAvatar />
                  <div>
                    <AuthorName>John Smith</AuthorName>
                    <AuthorTitle>Web Developer</AuthorTitle>
                  </div>
                </TestimonialAuthor>
              </TestimonialCard>
            </Col>
            <Col md={4} className="mb-4">
              <TestimonialCard>
                <StarRating>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </StarRating>
                <TestimonialText>
                  "As a small business owner with no coding experience, these templates were a lifesaver. I was able to set up my business website in just a few days."
                </TestimonialText>
                <TestimonialAuthor>
                  <AuthorAvatar />
                  <div>
                    <AuthorName>Sarah Johnson</AuthorName>
                    <AuthorTitle>Small Business Owner</AuthorTitle>
                  </div>
                </TestimonialAuthor>
              </TestimonialCard>
            </Col>
            <Col md={4} className="mb-4">
              <TestimonialCard>
                <StarRating>
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </StarRating>
                <TestimonialText>
                  "The hospital template was perfect for our clinic. The appointment booking system worked flawlessly, and the support team was very helpful."
                </TestimonialText>
                <TestimonialAuthor>
                  <AuthorAvatar />
                  <div>
                    <AuthorName>Dr. Michael Chen</AuthorName>
                    <AuthorTitle>Medical Clinic Director</AuthorTitle>
                  </div>
                </TestimonialAuthor>
              </TestimonialCard>
            </Col>
          </Row>
        </Container>
      </TestimonialSection>
      
      {/* Call to Action Section */}
      <CtaSection id="pricing">
        <Container>
          <CtaTitle>Ready to Get Your Website?</CtaTitle>
          <CtaText>
            Save time and impress your clients with ready-made solutions. Purchase once, use forever.
          </CtaText>
          <PrimaryButton size="lg">Browse Templates</PrimaryButton>
        </Container>
      </CtaSection>
      
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
              <FooterLink href="#">Business</FooterLink>
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

export default HomePage;