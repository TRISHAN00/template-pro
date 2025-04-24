import React, { useEffect, useState } from 'react';
import { Badge, Button, Col, Container, Form, Pagination, Row } from 'react-bootstrap';
import { FaDownload, FaEye, FaFilter, FaHeart, FaRegClock, FaRegHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
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
    background-color: #f9fafb;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

// Styled Components
const PageHeader = styled.div`
  background: linear-gradient(135deg, #2a3b8f 0%, #4361ee 100%);
  color: white;
  padding: 3rem 0;
  margin-bottom: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const PageSubtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 700px;
`;

const FilterSection = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
`;

const FilterTitle = styled.h5`
  font-size: 1rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const PriceRangeWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const PriceSlider = styled(Form.Range)`
  width: 100%;
`;

const PriceDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
`;

const CheckboxWrapper = styled.div`
  margin-bottom: 0.75rem;
`;

const StyledCheckbox = styled(Form.Check)`
  display: flex;
  align-items: center;
  
  label {
    font-size: 0.9rem;
    margin-left: 0.5rem;
  }
`;

const TagBadge = styled(Badge)`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.5rem 0.75rem;
  background-color: #f0f0f0;
  color: #666;
  cursor: pointer;
  font-weight: 500;
  border: none;
  color: #f0f0f0;
  
  &:hover, &.active {
    background-color: #4361ee;
    color: white;
  }
`;

const TemplateCard = styled.div`
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const TemplateImage = styled.div`
  height: 220px;
  background-color: #e9ecef;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
`;

const TemplateOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(67, 97, 238, 0.8);
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  display: flex;
  justify-content: space-around;
  
  ${TemplateCard}:hover & {
    transform: translateY(0);
  }
`;

const OverlayButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8rem;
  cursor: pointer;
  
  svg {
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
  }
  
  &:hover {
    color: #f0f0f0;
  }
`;

const TemplateBadge = styled(Badge)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
`;

const FavoriteButton = styled.button`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: white;
  border: none;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  
  svg {
    color: ${props => props.isFavorite ? '#FF6B6B' : '#666'};
  }
  
  &:hover svg {
    color: #FF6B6B;
  }
`;

const TemplateContent = styled.div`
  padding: 1.5rem;
`;

const CategoryBadge = styled(Badge)`
  background-color: #e9ecef;
  color: #495057;
  font-weight: 500;
  margin-bottom: 0.75rem;
  padding: 0.4rem 0.75rem;
  color: #f0f0f0;
`;

const TemplateTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  
  a {
    color: #333;
    text-decoration: none;
    
    &:hover {
      color: #4361ee;
    }
  }
`;

const TemplateDescription = styled.p`
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const TemplateFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid #f0f0f0;
`;

const TemplatePrice = styled.div`
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

const TemplateStats = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 0.5rem;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #666;
  font-size: 0.8rem;
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const StyledPagination = styled(Pagination)`
  .page-item.active .page-link {
    background-color: #4361ee;
    border-color: #4361ee;
  }
  
  .page-link {
    color: #4361ee;
  }
`;

const SortDropdown = styled(Form.Select)`
  width: auto;
  margin-left: auto;
`;

const ResultsInfo = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
`;

const NoResultsWrapper = styled.div`
  text-align: center;
  padding: 3rem 0;
`;

const NoResultsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const NoResultsText = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
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

const PrimaryButton = styled(Button)`
  background-color: #FF6B6B;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #FF5252;
  }
`;

// Main Component
const TemplatesPage = () => {
  const [priceRange, setPriceRange] = useState(100);
  const [favorites, setFavorites] = useState({});
  const [activeTags, setActiveTags] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const categories = [
    { name: "Real Estate", count: 15 },
    { name: "Hospital", count: 12 },
    { name: "Education", count: 18 },
    { name: "Business", count: 24 },
    { name: "E-commerce", count: 10 },
    { name: "Portfolio", count: 8 }
  ];
  
  const tags = [
    "Responsive", "Modern", "Minimal", "Creative", "Corporate", 
    "Professional", "Elegant", "Dark", "Light", "Material Design"
  ];
  
  // Mock template data
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const mockTemplates = [
        {
          id: 1,
          title: "Modern Real Estate Agency",
          description: "Complete website template for real estate agencies with property listings, agent profiles, and contact forms.",
          price: 79,
          category: "Real Estate",
          badge: "Best Seller",
          rating: 4.9,
          reviews: 124,
          downloads: 1560,
          date: "2 weeks ago",
          tags: ["Responsive", "Modern", "Professional"]
        },
        {
          id: 2,
          title: "Medical Center",
          description: "Professional website template for hospitals and healthcare providers with appointment booking system.",
          price: 89,
          category: "Hospital",
          badge: "New",
          rating: 4.8,
          reviews: 76,
          downloads: 890,
          date: "3 days ago",
          tags: ["Responsive", "Professional", "Light"]
        },
        {
          id: 3,
          title: "University Portal",
          description: "Comprehensive website template for educational institutions with course catalog and student portal.",
          price: 99,
          category: "Education",
          rating: 4.7,
          reviews: 92,
          downloads: 1220,
          date: "1 month ago",
          tags: ["Responsive", "Modern", "Material Design"]
        },
        {
          id: 4,
          title: "Corporate Business",
          description: "Elegant website template for businesses with services showcase, team section, and testimonials.",
          price: 69,
          category: "Business",
          badge: "Popular",
          rating: 4.9,
          reviews: 156,
          downloads: 2100,
          date: "2 months ago",
          tags: ["Responsive", "Corporate", "Professional"]
        },
        {
          id: 5,
          title: "Online Shop",
          description: "E-commerce template with product catalog, shopping cart, and checkout system.",
          price: 119,
          category: "E-commerce",
          rating: 4.8,
          reviews: 108,
          downloads: 1450,
          date: "3 weeks ago",
          tags: ["Responsive", "Modern", "Minimal"]
        },
        {
          id: 6,
          title: "Creative Portfolio",
          description: "Showcase your work with this modern portfolio template. Perfect for designers and photographers.",
          price: 59,
          category: "Portfolio",
          rating: 4.6,
          reviews: 72,
          downloads: 830,
          date: "1 month ago",
          tags: ["Responsive", "Creative", "Dark"]
        },
        {
          id: 7,
          title: "Medical Clinic",
          description: "Perfect for small clinics and healthcare providers with doctor profiles and service listings.",
          price: 79,
          category: "Hospital",
          rating: 4.7,
          reviews: 65,
          downloads: 720,
          date: "2 months ago",
          tags: ["Responsive", "Professional", "Light"]
        },
        {
          id: 8,
          title: "Elementary School",
          description: "Kid-friendly design for elementary schools with colorful interface and easy navigation.",
          price: 89,
          category: "Education",
          rating: 4.8,
          reviews: 54,
          downloads: 680,
          date: "1 month ago",
          tags: ["Responsive", "Creative", "Light"]
        }
      ];
      
      setTemplates(mockTemplates);
      setLoading(false);
    }, 1000);
  }, []);
  
  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const toggleTag = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter(t => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };
  
  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };
  
  const filteredTemplates = templates.filter(template => {
    // Filter by price
    if (template.price > priceRange) return false;
    
    // Filter by category
    if (selectedCategories.length > 0 && !selectedCategories.includes(template.category)) return false;
    
    // Filter by tags
    if (activeTags.length > 0 && !activeTags.some(tag => template.tags.includes(tag))) return false;
    
    return true;
  });
  
  return (
    <>
      <GlobalStyle />
      
      {/* Navbar */}
      <NavbarWrapper>
        <NavContainer>
          <NavLogo href="#">TemplatePro</NavLogo>
          <NavLinks>
            <NavLink href="#">Home</NavLink>
            <NavLink href="#" className="active">Templates</NavLink>
            <NavLink href="#">Categories</NavLink>
            <NavLink href="#">How It Works</NavLink>
            <NavLink href="#">Pricing</NavLink>
            <NavLink href="#">Support</NavLink>
          </NavLinks>
          <NavButtons>
            <CartButton>
              <FaShoppingCart /> Cart (0)
            </CartButton>
            <PrimaryButton>Login</PrimaryButton>
          </NavButtons>
        </NavContainer>
      </NavbarWrapper>
      
      {/* Page Header */}
      <PageHeader>
        <Container>
          <PageTitle>Website Templates</PageTitle>
          <PageSubtitle>
            Browse our collection of professionally designed, ready-to-use website templates. 
            Find the perfect template for your project and launch your website in minutes.
          </PageSubtitle>
        </Container>
      </PageHeader>
      
      <Container>
        <Row>
          {/* Filter Sidebar */}
          <Col lg={3}>
            <FilterSection>
              <FilterTitle><FaFilter /> Filter Templates</FilterTitle>
              
              {/* Price Range */}
              <div>
                <h6>Price Range</h6>
                <PriceRangeWrapper>
                  <PriceSlider 
                    min={0} 
                    max={200} 
                    value={priceRange} 
                    onChange={e => setPriceRange(e.target.value)} 
                  />
                  <PriceDisplay>
                    <span>$0</span>
                    <span>Up to ${priceRange}</span>
                  </PriceDisplay>
                </PriceRangeWrapper>
              </div>
              
              {/* Categories */}
              <div className="mb-4">
                <h6>Categories</h6>
                {categories.map(category => (
                  <CheckboxWrapper key={category.name}>
                    <StyledCheckbox 
                      type="checkbox" 
                      id={`category-${category.name}`}
                      label={`${category.name} (${category.count})`}
                      checked={selectedCategories.includes(category.name)}
                      onChange={() => toggleCategory(category.name)}
                    />
                  </CheckboxWrapper>
                ))}
              </div>
              
              {/* Tags */}
              <div>
                <h6>Tags</h6>
                <div>
                  {tags.map(tag => (
                    <TagBadge 
                      key={tag} 
                      className={activeTags.includes(tag) ? 'active' : ''}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </TagBadge>
                  ))}
                </div>
              </div>
            </FilterSection>
            
            {/* Additional Filter Section */}
            <FilterSection>
              <FilterTitle>Features</FilterTitle>
              <CheckboxWrapper>
                <StyledCheckbox 
                  type="checkbox" 
                  id="feature-responsive"
                  label="Responsive Design"
                />
              </CheckboxWrapper>
              <CheckboxWrapper>
                <StyledCheckbox 
                  type="checkbox" 
                  id="feature-bootstrap"
                  label="Built with Bootstrap"
                />
              </CheckboxWrapper>
              <CheckboxWrapper>
                <StyledCheckbox 
                  type="checkbox" 
                  id="feature-react"
                  label="React Templates"
                />
              </CheckboxWrapper>
              <CheckboxWrapper>
                <StyledCheckbox 
                  type="checkbox" 
                  id="feature-admin"
                  label="Admin Panel Included"
                />
              </CheckboxWrapper>
              <CheckboxWrapper>
                <StyledCheckbox 
                  type="checkbox" 
                  id="feature-support"
                  label="6 Months Support"
                />
              </CheckboxWrapper>
            </FilterSection>
          </Col>
          
          {/* Templates Grid */}
          <Col lg={9}>
            {/* Sorting and Results Info */}
            <div className="d-flex align-items-center mb-4 flex-wrap">
              <ResultsInfo>
                Showing {filteredTemplates.length} templates
              </ResultsInfo>
              <SortDropdown>
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Most Popular</option>
              </SortDropdown>
            </div>
            
            {loading ? (
              <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-3">Loading templates...</p>
              </div>
            ) : filteredTemplates.length > 0 ? (
              <Row>
                {filteredTemplates.map(template => (
                  <Col md={6} lg={4} className="mb-4" key={template.id}>
                    <TemplateCard>
                      <TemplateImage style={{ backgroundColor: '#e9ecef' }}>
                        {template.badge && (
                          <TemplateBadge bg={
                            template.badge === "New" ? "success" : 
                            template.badge === "Popular" ? "primary" : 
                            "danger"
                          }>
                            {template.badge}
                          </TemplateBadge>
                        )}
                        <FavoriteButton 
                          isFavorite={favorites[template.id]} 
                          onClick={() => toggleFavorite(template.id)}
                        >
                          {favorites[template.id] ? <FaHeart /> : <FaRegHeart />}
                        </FavoriteButton>
                        <TemplateOverlay>
                          <OverlayButton>
                            <FaEye />
                            Preview
                          </OverlayButton>
                          <OverlayButton>
                            <FaShoppingCart />
                            Buy Now
                          </OverlayButton>
                        </TemplateOverlay>
                      </TemplateImage>
                      <TemplateContent>
                        <CategoryBadge>{template.category}</CategoryBadge>
                        <TemplateTitle>
                          <a href="#">{template.title}</a>
                        </TemplateTitle>
                        <TemplateDescription>
                          {template.description}
                        </TemplateDescription>
                        <TemplateStats>
                          <StatItem>
                            <FaStar style={{ color: '#FFD700' }} />
                            {template.rating}
                          </StatItem>
                          <StatItem>
                            <FaDownload />
                            {template.downloads}
                          </StatItem>
                          <StatItem>
                            <FaRegClock />
                            {template.date}
                          </StatItem>
                        </TemplateStats>
                        <TemplateFooter>
                          <TemplatePrice>${template.price}</TemplatePrice>
                          <BuyButton><FaShoppingCart /> Buy Now</BuyButton>
                        </TemplateFooter>
                      </TemplateContent>
                    </TemplateCard>
                  </Col>
                ))}
              </Row>
            ) : (
              <NoResultsWrapper>
                <NoResultsTitle>No templates found</NoResultsTitle>
                <NoResultsText>
                  Try adjusting your filters or browse our full collection.
                </NoResultsText>
                <Button variant="outline-primary">Clear All Filters</Button>
              </NoResultsWrapper>
            )}
            
            {/* Pagination */}
            {filteredTemplates.length > 0 && (
              <PaginationWrapper>
                <StyledPagination>
                  <Pagination.Prev />
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Ellipsis />
                  <Pagination.Item>{8}</Pagination.Item>
                  <Pagination.Next />
                </StyledPagination>
              </PaginationWrapper>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default TemplatesPage;