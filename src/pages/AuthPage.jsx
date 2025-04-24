import { useState } from "react";
import { Button, Card, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import { FaLock, FaUserPlus } from "react-icons/fa";
import styled from "styled-components";


export const AuthPage = () => {
  const [key, setKey] = useState("login");

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

  // Login/Signup Page Specific Styled Components
  const AuthContainer = styled(Container)`
    max-width: 900px;
  `;

  
  
  const AuthCard = styled(Card)`
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    border: none;
  `;
  
  const AuthHeader = styled.div`
    background-color: #4361ee;
    color: white;
    padding: 2rem;
    text-align: center;
  `;
  
  const AuthTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 1rem;
  `;
  
  const AuthSubtitle = styled.p`
    font-size: 1rem;
    opacity: 0.9;
    margin-bottom: 0;
  `;
  
  const AuthForm = styled(Form)`
    padding: 2rem;
  `;
  
  const AuthFormGroup = styled(Form.Group)`
    margin-bottom: 1.5rem;
  `;
  
  const AuthTabs = styled(Tabs)`
    justify-content: center;
    border-bottom: none;
    margin-bottom: 2rem;
    
    .nav-link {
      font-size: 1.1rem;
      font-weight: 600;
      color: #666;
      border: none;
      padding: 1rem 2rem;
      
      &.active {
        color: #4361ee;
        border-bottom: 3px solid #4361ee;
      }
      
      &:hover:not(.active) {
        border-bottom: 3px solid #e9ecef;
      }
    }
  `;
  
  const OrDivider = styled.div`
    display: flex;
    align-items: center;
    margin: 2rem 0;
    
    &:before, &:after {
      content: '';
      flex: 1;
      border-bottom: 1px solid #ddd;
    }
    
    span {
      padding: 0 1rem;
      color: #888;
      font-size: 0.9rem;
      text-transform: uppercase;
    }
  `;
  
  const SocialLogin = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 2rem;
  `;
  
  const SocialButton = styled(Button)`
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    flex: 1;
    max-width: 200px;
  `;
  
  const ForgotPasswordLink = styled.a`
    color: #4361ee;
    text-decoration: none;
    font-size: 0.9rem;
    display: block;
    text-align: right;
    margin-top: 0.5rem;
    
    &:hover {
      text-decoration: underline;
    }
  `;
  
  const TermsText = styled.p`
    font-size: 0.85rem;
    color: #888;
    text-align: center;
    margin-top: 1.5rem;
    
    a {
      color: #4361ee;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
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

  return (
    <>
      <PageHeader>
        <Container>
          <PageTitle>
            {key === "login" ? "Login to Your Account" : "Create an Account"}
          </PageTitle>
          <PageSubtitle>
            {key === "login"
              ? "Access all your templates and downloads from your dashboard"
              : "Join thousands of professionals using our premium templates"}
          </PageSubtitle>
        </Container>
      </PageHeader>

      <Section>
        <AuthContainer>
          <AuthCard>
            <AuthTabs
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="login" title="Login">
                <AuthForm>
                  <AuthFormGroup className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </AuthFormGroup>

                  <AuthFormGroup className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter your password"
                    />
                    <ForgotPasswordLink href="#">
                      Forgot password?
                    </ForgotPasswordLink>
                  </AuthFormGroup>

                  <AuthFormGroup className="mb-3">
                    <Form.Check type="checkbox" label="Remember me" />
                  </AuthFormGroup>

                  <PrimaryButton size="lg" className="w-100 mb-3">
                    <FaLock className="me-2" /> Login
                  </PrimaryButton>

                  <OrDivider>
                    <span>or login with</span>
                  </OrDivider>

                  <SocialLogin>
                    <SocialButton variant="outline-dark">
                    <FaGoogle />
                    Google
                    </SocialButton>
                    <SocialButton variant="outline-primary">
                      <i className="fab fa-facebook-f"></i> Facebook
                    </SocialButton>
                  </SocialLogin>

                  <div className="text-center">
                    <p>
                      Don't have an account?{" "}
                      <a href="#" onClick={() => setKey("signup")}>
                        Sign up
                      </a>
                    </p>
                  </div>
                </AuthForm>
              </Tab>

              <Tab eventKey="signup" title="Sign Up">
                <AuthForm>
                  <Row>
                    <Col md={6}>
                      <AuthFormGroup className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your first name"
                        />
                      </AuthFormGroup>
                    </Col>
                    <Col md={6}>
                      <AuthFormGroup className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your last name"
                        />
                      </AuthFormGroup>
                    </Col>
                  </Row>

                  <AuthFormGroup className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </AuthFormGroup>

                  <AuthFormGroup className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Create a password"
                    />
                  </AuthFormGroup>

                  <AuthFormGroup className="mb-3">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm your password"
                    />
                  </AuthFormGroup>

                  <AuthFormGroup className="mb-3">
                    <Form.Check
                      type="checkbox"
                      label="I agree to the Terms of Service and Privacy Policy"
                    />
                  </AuthFormGroup>

                  <PrimaryButton size="lg" className="w-100 mb-3">
                    <FaUserPlus className="me-2" /> Create Account
                  </PrimaryButton>

                  <OrDivider>
                    <span>or sign up with</span>
                  </OrDivider>

                  <SocialLogin>
                    <SocialButton variant="outline-dark">
                      <i className="fab fa-google"></i> Google
                    </SocialButton>
                    <SocialButton variant="outline-primary">
                      <i className="fab fa-facebook-f"></i> Facebook
                    </SocialButton>
                  </SocialLogin>

                  <TermsText>
                    By signing up, you agree to our{" "}
                    <a href="#">Terms of Service</a> and{" "}
                    <a href="#">Privacy Policy</a>
                  </TermsText>

                  <div className="text-center mt-3">
                    <p>
                      Already have an account?{" "}
                      <a href="#" onClick={() => setKey("login")}>
                        Login
                      </a>
                    </p>
                  </div>
                </AuthForm>
              </Tab>
            </AuthTabs>
          </AuthCard>
        </AuthContainer>
      </Section>
    </>
  );
};
