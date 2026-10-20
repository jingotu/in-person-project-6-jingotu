// Week 7: Migrating Your Interactive Portfolio to React
// This starter file guides you through migrating your Week 6 vanilla JavaScript portfolio to React

import './App.css'
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  // ============================================
  // PART 1: EVENT HANDLER FUNCTIONS
  // ============================================
  // TODO: Move your Week 6 event handler functions here
  // In Week 6, you had functions like:
  // - handleNavClick (for smooth scroll)
  // - filterProjects (for project filtering)
  // - handleFormSubmit (for form validation)
  //
  // HINT: These will be regular JavaScript functions defined inside App component
  // Example from Week 6:
  //   const filterProjects = (category) => {
  //     // Your filtering logic here
  //   }

  // TODO: Add smooth scroll handler
  // Replace: navLinks.forEach(link => link.addEventListener('click', ...))
  // With: const handleNavClick = (e) => { ... }
  function handleNavClick(event) {
    console.log('Navigation clicked');
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  // TODO: Add filter handler
  // Replace: filterButtons.forEach(button => button.addEventListener('click', ...))
  // With: const handleFilterClick = (category) => { ... }

  // TODO: Add form validation functions
  // You'll need: isValidEmail, showError, clearError, showSuccess
  // These can stay mostly the same!
  // Validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Display an error message
  function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);

    if (input && error) {
      input.classList.add('error');
      error.textContent = message;
    }
  }

  // Clear an error message
  function clearError(fieldId) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);

    if (input && error) {
      input.classList.remove('error');
      error.textContent = '';
    }
  }

  // Display a success message
  function showSuccess(message) {
    const success = document.getElementById('success-message');

    if (success) {
      success.textContent = message;
    }
  }
  // TODO: Add form submit handler
  // Replace: contactForm.addEventListener('submit', ...)
  // With: const handleFormSubmit = (e) => { ... }
  // Handle contact form submission
  function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;

    const name = form.elements.namedItem('name').value.trim();
    const email = form.elements.namedItem('email').value.trim();
    const message = form.elements.namedItem('message').value.trim();

    let isValid = true;

    // Clear previous messages
    clearError('name');
    clearError('email');
    clearError('message');

    const successMessage = document.getElementById('success-message');
    if (successMessage) {
      successMessage.textContent = '';
    }

    // Validate name
    if (name === '') {
      showError('name', 'Name is required');
      isValid = false;
    }

    // Validate email
    if (email === '') {
      showError('email', 'Email is required');
      isValid = false;
    } else if (!isValidEmail(email)) {
      showError('email', 'Please enter a valid email address');
      isValid = false;
    }

    // Validate message
    if (message === '') {
      showError('message', 'Message is required');
      isValid = false;
    }

    // Show success message
    if (isValid) {
      showSuccess('Message submitted successfully!');
      form.reset();
    }
  }

  // ============================================
  // PART 2: JSX RETURN STATEMENT
  // ============================================
  // TODO: Copy your Week 6 HTML structure here
  // Remember to convert HTML to JSX:
  // - class → className
  // - onclick → onClick
  // - onsubmit → onSubmit
  // - for → htmlFor
  // - All event attributes use camelCase
  //
  // IMPORTANT: Put EVERYTHING in this one return statement!
  // This week we're building a MONOLITHIC component (one big component)
  // Week 8 will teach you how to break this into smaller pieces

  return (
    <div className="portfolio">

      {/* TODO: Add your navigation here */}
      {/* HINT: Replace <a href="#home" class="nav-link"> with <a href="#home" className="nav-link"> */}
      {/* HINT: Replace onclick with onClick={handleNavClick} */}
      {/* Navigation Bar */}
      <Navbar />

      {/* TODO: Add your hero section here */}
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Jingo (Chun-Hao) Tu</h1>

          <p className="hero-subtitle">
            Bioengineering MEng Student at UC Berkeley
          </p>

          <p className="hero-tagline">
            Exploring computational approaches to solve real-world healthcare problem
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </section>
      {/* TODO: Add your about section here */}
      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Me</h2>

          <div className="about-grid">
            <div className="about-text">
              <p>
                I'm a Bioengineering master's student at UC Berkeley with a focus on
                computational biology and bioinformatics. My background spans
                chemistry, wet-lab research, structural biology, and statistical genomics.
              </p>

              <div className="about-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <span>Berkeley, CA</span>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">✉️</span>
                  <a href="mailto:chun-hao_tu@berkeley.edu">
                    chun-hao_tu@berkeley.edu
                  </a>
                </div>

                <div className="detail-item">
                  <span className="detail-icon">📱</span>
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>

            <div className="about-availability">
              <h3>Currently Available For:</h3>

              <div className="availability-tags">
                <span className="tag tag-available">Freelance</span>
                <span className="tag tag-available">Full-Time</span>
                <span className="tag tag-available">Remote</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* TODO: Add your skills section here */}
      {/* Skills Section */}
      <section id="skills" className="section section-alt">
        <div className="container">
          <h2>Skills & Technologies</h2>

          <div className="skills-grid">

            {/* Python */}
            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">⚛️</span>
                <h3 className="skill-name">Python</h3>
              </div>
              <div className="skill-category">Programming</div>
              <div className="skill-level">
                <div className="skill-progress" style={{ '--skill-level': '90%' }}></div>
              </div>
              <span className="skill-percentage">90%</span>
            </div>

            {/* R */}
            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🎨</span>
                <h3 className="skill-name">R</h3>
              </div>
              <div className="skill-category">Data Analysis</div>
              <div className="skill-level">
                <div className="skill-progress" style={{ '--skill-level': '95%' }}></div>
              </div>
              <span className="skill-percentage">95%</span>
            </div>

            {/* Molecular Modeling */}
            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">📱</span>
                <h3 className="skill-name">Molecular Modeling</h3>
              </div>
              <div className="skill-category">Structural Biology</div>
              <div className="skill-level">
                <div className="skill-progress" style={{ '--skill-level': '88%' }}></div>
              </div>
              <span className="skill-percentage">88%</span>
            </div>

            {/* Protein Production and Purification */}
            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🚀</span>
                <h3 className="skill-name">Protein Production and Purification</h3>
              </div>
              <div className="skill-category">Wet Lab</div>
              <div className="skill-level">
                <div className="skill-progress" style={{ '--skill-level': '85%' }}></div>
              </div>
              <span className="skill-percentage">85%</span>
            </div>

            {/* HTML & CSS */}
            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🎯</span>
                <h3 className="skill-name">HTML & CSS</h3>
              </div>
              <div className="skill-category">Web Development</div>
              <div className="skill-level">
                <div className="skill-progress" style={{ '--skill-level': '80%' }}></div>
              </div>
              <span className="skill-percentage">80%</span>
            </div>

            {/* In vitro assays */}
            <div className="skill-card">
              <div className="skill-header">
                <span className="skill-icon">🌐</span>
                <h3 className="skill-name">In vitro assays</h3>
              </div>
              <div className="skill-category">Chemistry</div>
              <div className="skill-level">
                <div className="skill-progress" style={{ '--skill-level': '75%' }}></div>
              </div>
              <span className="skill-percentage">75%</span>
            </div>

          </div>
        </div>
      </section>
      {/* TODO: Add your projects section here */}
      {/* HINT: For filter buttons, use onClick={() => handleFilterClick('category')} */}

      {/* Projects Section */}
      <Projects />

      {/* TODO: Add your contact form here */}
      {/* HINT: Form will use onSubmit={handleFormSubmit} */}
      {/* HINT: Inputs will use onChange for real-time validation */}

      {/* Contact Section */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <h2>Get In Touch</h2>

          <div className="contact-content">
            <p>
              I'm always interested in hearing about new opportunities and projects.
              Feel free to reach out!
            </p>

            <form
              id="contact-form"
              className="contact-form"
              onSubmit={handleFormSubmit}
              noValidate
            >
              <div className="form-grid">

                {/* Name */}
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                  />
                  <span className="error-message" id="name-error"></span>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                  <span className="error-message" id="email-error"></span>
                </div>

                {/* Subject */}
                <div className="form-group form-group-full">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                  />
                  <span className="error-message" id="subject-error"></span>
                </div>

                {/* Message */}
                <div className="form-group form-group-full">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                  ></textarea>
                  <span className="error-message" id="message-error"></span>
                </div>

                {/* Submit Button */}
                <div className="form-group form-group-full">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                  <span className="success-message" id="success-message"></span>
                </div>

              </div>
            </form>
          </div>
        </div>
      </section>
      {/* TODO: Add your footer here */}
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2026 Jingo Tu. All rights reserved.</p>

            <div className="social-links">
              <a href="#" className="social-link">GitHub</a>
              <a href="#" className="social-link">LinkedIn</a>
              <a href="#" className="social-link">Twitter</a>
              <a href="#" className="social-link">Dribbble</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
