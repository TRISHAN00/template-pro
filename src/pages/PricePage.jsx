import React, { useState } from 'react';
import { Badge, Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import {
    FaCheck,
    FaShoppingCart,
    FaTimes
} from 'react-icons/fa';
import styled from 'styled-components';

// Reusing some of the styled components from the original code

const Section = styled.section`
  padding: 5rem 0;
`;

const PageHeader = styled.div`
  background: linear-gradient(135deg, #2a3b8f 0%, #4361ee 100%);
  color: white;
  padding: 6rem 0 4rem;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0;
  opacity: 0.9;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
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
  background-color: #4361ee;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #3a56d4;
    transform: translateY(-2px);
  }
`;

const OutlineButton = styled(Button)`
  background-color: transparent;
  border: 2px solid #4361ee;
  color: #4361ee;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(67, 97, 238, 0.1);
    transform: translateY(-2px);
  }
`;

// Price Page Specific Styled Components
const PricingToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

const ToggleText = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
  margin: 0 1rem;
  color: ${props => props.active ? '#4361ee' : '#666'};
`;

const PricingCard = styled(Card)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  border: none;
  
  ${props => props.featured && `
    transform: scale(1.05);
    box-shadow: 0 15px 35px rgba(67, 97, 238, 0.15);
    border: 2px solid #4361ee;
    
    @media (max-width: 768px) {
      transform: scale(1);
      margin: 2rem 0;
    }
  `}
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const PricingHeader = styled.div`
  background-color: ${props => props.featured ? '#4361ee' : '#f8f9fa'};
  color: ${props => props.featured ? 'white' : '#333'};
  padding: 2rem;
  text-align: center;
`;

const PricingTitle = styled.h3`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`;

const PricingPrice = styled.div`
  font-size: 3rem;
  font-weight: 700;
  margin: 1.5rem 0;
  
  span {
    font-size: 1rem;
    font-weight: 400;
    opacity: 0.7;
  }
`;

const PricingDescription = styled.p`
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 0;
`;

const PricingBody = styled.div`
  padding: 2rem;
`;

const PricingFeature = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  font-size: 1rem;
  
  svg {
    margin-right: 0.75rem;
    color: ${props => props.included ? '#4361ee' : '#dc3545'};
  }
`;

const FeatureIcon = styled.div`
  margin-right: 0.75rem;
  color: ${props => props.included ? '#4361ee' : '#aaa'};
  width: 20px;
  display: flex;
  justify-content: center;
`;

const PricingFooter = styled.div`
  padding: 0 2rem 2rem;
`;

const FaqSection = styled(Section)`
  background-color: #f8f9fa;
`;

const FaqCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
`;

const FaqQuestion = styled.div`
  padding: 1.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  svg {
    transition: transform 0.3s ease;
    transform: ${props => props.open ? 'rotate(180deg)' : 'rotate(0)'};
  }
`;

const FaqAnswer = styled.div`
  padding: ${props => props.open ? '0 1.5rem 1.5rem' : '0 1.5rem'};
  height: ${props => props.open ? 'auto' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: ${props => props.open ? '1' : '0'};
  
  p {
    margin-bottom: 0;
  }
`;



// Price Page Component
export const PricePage = () => {
  const [annual, setAnnual] = useState(true);
  const [activeFaq, setActiveFaq] = useState(null);
  
  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };
  
  const plans = [
    {
      title: "Personal",
      monthlyPrice: 19,
      annualPrice: 199,
      description: "Perfect for individuals and small projects",
      features: [
        { text: "5 Templates per month", included: true },
        { text: "Standard quality templates", included: true },
        { text: "Email support", included: true },
        { text: "1 website license", included: true },
        { text: "60-day updates", included: true },
        { text: "Custom modifications", included: false },
        { text: "Priority support", included: false },
        { text: "Unlimited licenses", included: false }
      ],
      featured: false
    },
    {
      title: "Professional",
      monthlyPrice: 49,
      annualPrice: 499,
      description: "Ideal for freelancers and agencies",
      features: [
        { text: "15 Templates per month", included: true },
        { text: "Premium quality templates", included: true },
        { text: "Priority email support", included: true },
        { text: "5 website licenses", included: true },
        { text: "1-year updates", included: true },
        { text: "Custom modifications", included: true },
        { text: "Priority support", included: true },
        { text: "Unlimited licenses", included: false }
      ],
      featured: true
    },
    {
      title: "Enterprise",
      monthlyPrice: 99,
      annualPrice: 999,
      description: "For large businesses and organizations",
      features: [
        { text: "Unlimited Templates", included: true },
        { text: "Premium quality templates", included: true },
        { text: "24/7 support", included: true },
        { text: "Unlimited website licenses", included: true },
        { text: "Lifetime updates", included: true },
        { text: "Custom modifications", included: true },
        { text: "Priority support", included: true },
        { text: "Unlimited licenses", included: true }
      ],
      featured: false
    }
  ];
  
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and bank transfers for Enterprise plans. All payments are processed securely through our payment processors."
    },
    {
      question: "Can I upgrade or downgrade my plan later?",
      answer: "Yes, you can upgrade your plan at any time and the price difference will be prorated for the remainder of your billing cycle. If you downgrade, the new rate will take effect at the next billing cycle."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 14-day money-back guarantee for all plans. If you're not satisfied with our templates or services, you can request a full refund within 14 days of your purchase."
    },
    {
      question: "What's included in the template packages?",
      answer: "Each template package includes all the necessary HTML, CSS, and JavaScript files, along with documentation on how to customize and deploy the template. Premium templates also include PSD/Figma design files."
    },
    {
      question: "Can I use the templates for client projects?",
      answer: "Yes, depending on your plan. The Professional and Enterprise plans include multiple licenses allowing you to use templates for client projects. The Personal plan is limited to a single website license."
    },
    {
      question: "Do I need to credit your company on my website?",
      answer: "No, you don't need to provide attribution. Once you purchase a template, you can use it without any backlinks or attribution to our company."
    }
  ];
  
  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>Pricing Plans</PageTitle>
          <PageSubtitle>
            Choose the perfect plan for your needs. All plans include access to our growing library of templates.
          </PageSubtitle>
        </Container>
      </PageHeader>
      
      <Section>
        <Container>
          <PricingToggle>
            <ToggleText active={!annual}>Monthly</ToggleText>
            <Form.Check 
              type="switch"
              id="billing-toggle"
              checked={annual}
              onChange={() => setAnnual(!annual)}
              label=""
            />
            <ToggleText active={annual}>Annual <Badge bg="success">Save 15%</Badge></ToggleText>
          </PricingToggle>
          
          <Row>
            {plans.map((plan, index) => (
              <Col lg={4} key={index} className="mb-4">
                <PricingCard featured={plan.featured}>
                  <PricingHeader featured={plan.featured}>
                    <PricingTitle>{plan.title}</PricingTitle>
                    <PricingPrice>
                      ${annual ? plan.annualPrice : plan.monthlyPrice}
                      <span>/{annual ? 'year' : 'month'}</span>
                    </PricingPrice>
                    <PricingDescription>{plan.description}</PricingDescription>
                  </PricingHeader>
                  <PricingBody>
                    {plan.features.map((feature, featureIndex) => (
                      <PricingFeature key={featureIndex} included={feature.included}>
                        <FeatureIcon included={feature.included}>
                          {feature.included ? <FaCheck /> : <FaTimes />}
                        </FeatureIcon>
                        {feature.text}
                      </PricingFeature>
                    ))}
                  </PricingBody>
                  <PricingFooter>
                    {plan.featured ? (
                      <PrimaryButton size="lg" block>
                        <FaShoppingCart /> Get Started
                      </PrimaryButton>
                    ) : (
                      <OutlineButton size="lg" block>
                        Choose Plan
                      </OutlineButton>
                    )}
                  </PricingFooter>
                </PricingCard>
              </Col>
            ))}
          </Row>
        </Container>
      </Section>
      
      <FaqSection>
        <Container>
          <SectionTitle>Frequently Asked Questions</SectionTitle>
          <Row>
            <Col lg={8} className="mx-auto">
              {faqs.map((faq, index) => (
                <FaqCard key={index}>
                  <FaqQuestion 
                    open={activeFaq === index} 
                    onClick={() => toggleFaq(index)}
                  >
                    {faq.question}
                    <i className="fas fa-chevron-down"></i>
                  </FaqQuestion>
                  <FaqAnswer open={activeFaq === index}>
                    <p>{faq.answer}</p>
                  </FaqAnswer>
                </FaqCard>
              ))}
            </Col>
          </Row>
          <div className="text-center mt-5">
            <h3 className="mb-4">Need Help Deciding?</h3>
            <p className="mb-4">Our team is here to help you choose the right plan for your needs.</p>
            <SecondaryButton size="lg">Contact Support</SecondaryButton>
          </div>
        </Container>
      </FaqSection>
    </>
  );
};