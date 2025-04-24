import React from 'react';
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import {
    FaCheckCircle,
    FaCog,
    FaDownload,
    FaHome,
    FaLaptopCode,
    FaQuestionCircle,
    FaRocket,
    FaShoppingCart,
    FaUserCheck
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

const PageHero = styled.div`
  background: linear-gradient(135deg, #2a3b8f 0%, #4361ee 100%);
  color: white;
  padding: 4rem 0;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled.p`
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

const ProcessStep = styled.div`
  text-align: center;
  padding: 2rem;
  position: relative;
  
  @media (min-width: 992px) {
    &:not(:last-child):after {
      content: '';
      position: absolute;
      top: 5.5rem;
      right: -2rem;
      width: 4rem;
      height: 2px;
      background-color: #dee2e6;
    }
  }
`;

const ProcessIcon = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  color: #4361ee;
  font-size: 2.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #4361ee;
    color: white;
    transform: translateY(-5px);
  }
`;

const ProcessTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProcessDescription = styled.p`
  color: #666;
  font-size: 1rem;
`;

const FeatureSection = styled(Section)`
  background-color: #f8f9fa;
`;

const FeatureCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  height: 100%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: #4361ee;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: #666;
  font-size: 1rem;
`;

const FaqSection = styled(Section)`
  background-color: white;
`;

const FaqItem = styled.div`
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #dee2e6;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const FaqQuestion = styled.h4`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  
  svg {
    color: #4361ee;
    margin-right: 0.75rem;
    flex-shrink: 0;
  }
`;

const FaqAnswer = styled.p`
  color: #666;
  margin-left: 2rem;
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

const InfoCard = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const InfoIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #e9ecef;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #4361ee;
  font-size: 1.5rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const HowItWorksPage = () => {
  return (
    <>
      <GlobalStyle />
      
      {/* Navbar */}
      <NavbarWrapper>
        <NavContainer>
          <NavLogo href="/">TemplatePro</NavLogo>
          <NavLinks>
            <NavLink href="/templates">Templates</NavLink>
            <NavLink href="/categories">Categories</NavLink>
            <NavLink href="/how-it-works" className="active">How It Works</NavLink>
            <NavLink href="/pricing">Pricing</NavLink>
            <NavLink href="/support">Support</NavLink>
          </NavLinks>
          <NavButtons>
            <CartButton>
              <FaShoppingCart /> Cart (0)
            </CartButton>
            <PrimaryButton>Login</PrimaryButton>
          </NavButtons>
        </NavContainer>
      </NavbarWrapper>
      
      {/* Hero Section */}
      <PageHero>
        <Container>
          <Row>
            <Col lg={8}>
              <PageTitle>How It Works</PageTitle>
              <PageDescription>
                Get your website up and running in minutes with our professional templates.
                Learn how TemplatePro simplifies the web development process.
              </PageDescription>
            </Col>
          </Row>
        </Container>
      </PageHero>
      
      {/* Main Process Section */}
      <Section>
        <Container>
          <SectionTitle>Simple 4-Step Process</SectionTitle>
          <Row>
            <Col md={3}>
              <ProcessStep>
                <ProcessIcon>
                  <FaHome />
                </ProcessIcon>
                <ProcessTitle>Browse Templates</ProcessTitle>
                <ProcessDescription>
                  Explore our collection of professionally designed templates for various industries.
                </ProcessDescription>
              </ProcessStep>
            </Col>
            <Col md={3}>
              <ProcessStep>
                <ProcessIcon>
                  <FaShoppingCart />
                </ProcessIcon>
                <ProcessTitle>Purchase</ProcessTitle>
                <ProcessDescription>
                  Select your template and complete the purchase with our secure checkout process.
                </ProcessDescription>
              </ProcessStep>
            </Col>
            <Col md={3}>
              <ProcessStep>
                <ProcessIcon>
                  <FaDownload />
                </ProcessIcon>
                <ProcessTitle>Download</ProcessTitle>
                <ProcessDescription>
                  Instantly download your template files and documentation after purchase.
                </ProcessDescription>
              </ProcessStep>
            </Col>
            <Col md={3}>
              <ProcessStep>
                <ProcessIcon>
                  <FaRocket />
                </ProcessIcon>
                <ProcessTitle>Launch</ProcessTitle>
                <ProcessDescription>
                  Customize your template with your content and launch your professional website.
                </ProcessDescription>
              </ProcessStep>
            </Col>
          </Row>
        </Container>
      </Section>
      
      {/* Features Section */}
      <FeatureSection>
        <Container>
          <SectionTitle>Why Choose TemplatePro</SectionTitle>
          <Row>
            <Col md={6} lg={4} className="mb-4">
              <FeatureCard>
                <FeatureIcon>
                  <FaCheckCircle />
                </FeatureIcon>
                <FeatureTitle>Premium Quality</FeatureTitle>
                <FeatureDescription>
                  All templates are designed by professional designers with attention to detail and modern trends.
                </FeatureDescription>
              </FeatureCard>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <FeatureCard>
                <FeatureIcon>
                  <FaLaptopCode />
                </FeatureIcon>
                <FeatureTitle>Clean Code</FeatureTitle>
                <FeatureDescription>
                  Templates are built with clean, well-structured code following the latest web standards.
                </FeatureDescription>
              </FeatureCard>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <FeatureCard>
                <FeatureIcon>
                  <FaCog />
                </FeatureIcon>
                <FeatureTitle>Easy Customization</FeatureTitle>
                <FeatureDescription>
                  User-friendly customization options make it simple to adapt templates to your needs.
                </FeatureDescription>
              </FeatureCard>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <FeatureCard>
                <FeatureIcon>
                  <FaUserCheck />
                </FeatureIcon>
                <FeatureTitle>Dedicated Support</FeatureTitle>
                <FeatureDescription>
                  Our support team is ready to help you with any questions or issues you might have.
                </FeatureDescription>
              </FeatureCard>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <FeatureCard>
                <FeatureIcon>
                  <FaDownload />
                </FeatureIcon>
                <FeatureTitle>Instant Download</FeatureTitle>
                <FeatureDescription>
                  Get immediate access to your purchased templates without waiting for approval.
                </FeatureDescription>
              </FeatureCard>
            </Col>
            <Col md={6} lg={4} className="mb-4">
              <FeatureCard>
                <FeatureIcon>
                  <FaRocket />
                </FeatureIcon>
                <FeatureTitle>Regular Updates</FeatureTitle>
                <FeatureDescription>
                  We continuously update our templates to ensure compatibility with the latest technologies.
                </FeatureDescription>
              </FeatureCard>
            </Col>
          </Row>
        </Container>
      </FeatureSection>
      
      {/* FAQs Section */}
      <FaqSection>
        <Container>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <Row>
            <Col lg={6}>
              <FaqItem>
                <FaqQuestion>
                  <FaQuestionCircle /> How do I purchase a template?
                </FaqQuestion>
                <FaqAnswer>
                  Browse our collection, select a template, add it to your cart, and proceed to checkout. After payment, you'll receive an email with download instructions.
                </FaqAnswer>
              </FaqItem>
              <FaqItem>
                <FaqQuestion>
                  <FaQuestionCircle /> Can I modify the templates?
                </FaqQuestion>
                <FaqAnswer>
                  Yes, all our templates are fully customizable. You can modify colors, fonts, images, and content to match your brand identity.
                </FaqAnswer>
              </FaqItem>
              <FaqItem>
                <FaqQuestion>
                  <FaQuestionCircle /> Do you offer refunds?
                </FaqQuestion>
                <FaqAnswer>
                  Due to the digital nature of our products, we offer refunds only if the template has technical issues that we cannot resolve.
                </FaqAnswer>
              </FaqItem>
            </Col>
            <Col lg={6}>
              <FaqItem>
                <FaqQuestion>
                  <FaQuestionCircle /> Do I need to pay any monthly fees?
                </FaqQuestion>
                <FaqAnswer>
                  No, all our templates come with a one-time payment. You own the template forever without any recurring charges.
                </FaqAnswer>
              </FaqItem>
              <FaqItem>
                <FaqQuestion>
                  <FaQuestionCircle /> Do I need coding skills to use the templates?
                </FaqQuestion>
                <FaqAnswer>
                  Basic knowledge of HTML and CSS is helpful but not necessary. Our templates come with comprehensive documentation to guide you through the customization process.
                </FaqAnswer>
              </FaqItem>
              <FaqItem>
                <FaqQuestion>
                  <FaQuestionCircle /> Can I use the templates for client projects?
                </FaqQuestion>
                <FaqAnswer>
                  Yes, our standard license allows you to use a template for one project, either personal or for a client. For multiple projects, you need to purchase additional licenses.
                </FaqAnswer>
              </FaqItem>
            </Col>
          </Row>
          <div className="text-center mt-5">
            <PrimaryButton size="lg">View All FAQs</PrimaryButton>
          </div>
        </Container>
      </FaqSection>
      
      {/* Step by Step Guide */}
      <Section>
        <Container>
          <SectionTitle>Detailed Guide: From Purchase to Launch</SectionTitle>
          <Row className="mb-5">
            <Col md={6}>
              <InfoCard>
                <InfoIcon>
                  <FaShoppingCart />
                </InfoIcon>
                <InfoTitle>Step 1: Purchase Your Template</InfoTitle>
                <InfoText>
                  Browse our collection and find the perfect template for your project. Add it to your cart and proceed to checkout. We accept credit cards, PayPal, and various other payment methods.
                </InfoText>
                <Badge bg="primary" className="me-2">Secure Checkout</Badge>
                <Badge bg="success">Instant Processing</Badge>
              </InfoCard>
            </Col>
            <Col md={6}>
              <InfoCard>
                <InfoIcon>
                  <FaDownload />
                </InfoIcon>
                <InfoTitle>Step 2: Download Files</InfoTitle>
                <InfoText>
                  After your purchase is complete, you'll receive an email with download instructions. You can also access your downloads from your account dashboard. The package includes template files and documentation.
                </InfoText>
                <Badge bg="primary" className="me-2">Instant Access</Badge>
                <Badge bg="success">Complete Package</Badge>
              </InfoCard>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <InfoCard>
                <InfoIcon>
                  <FaCog />
                </InfoIcon>
                <InfoTitle>Step 3: Customize Your Template</InfoTitle>
                <InfoText>
                  Follow the documentation to customize your template. Replace placeholder content with your own, change colors and fonts to match your brand, and add your images and logos.
                </InfoText>
                <Badge bg="primary" className="me-2">Easy Customization</Badge>
                <Badge bg="success">Detailed Documentation</Badge>
              </InfoCard>
            </Col>
            <Col md={6}>
              <InfoCard>
                <InfoIcon>
                  <FaRocket />
                </InfoIcon>
                <InfoTitle>Step 4: Launch Your Website</InfoTitle>
                <InfoText>
                  Once customization is complete, upload your files to your web hosting provider using FTP or the hosting provider's file manager. Set up your domain, and your website is ready to go live!
                </InfoText>
                <Badge bg="primary" className="me-2">Ready for Deployment</Badge>
                <Badge bg="success">Support Available</Badge>
              </InfoCard>
            </Col>
          </Row>
        </Container>
      </Section>
      
      {/* Call to Action */}
      <CtaSection>
        <Container>
          <CtaTitle>Ready to Get Started?</CtaTitle>
          <CtaText>
            Browse our collection of professionally designed templates and launch your website today.
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

export default HowItWorksPage;