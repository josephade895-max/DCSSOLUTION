const siteConfig = {
  brandName: "DCS Solutions",
  tagline: "Technology-driven digital solutions, media, marketing, and consultancy support",
  nav: [
    { key: "home", label: "Home", href: "index.html" },
    { key: "about", label: "About", href: "about.html" },
    { key: "tech", label: "Tech", href: "tech.html" },
    { key: "media", label: "Media", href: "media.html" },
    { key: "marketing", label: "Marketing", href: "marketing.html" },
    { key: "travel", label: "Travel", href: "travel.html" },
    { key: "contact", label: "Contact", href: "contact.html" }
  ],
  serviceLinks: [
    { label: "Technology Solutions", href: "tech.html" },
    { label: "Media Production", href: "media.html" },
    { label: "Marketing Services", href: "marketing.html" },
    { label: "Travel Consultancy", href: "travel.html" }
  ],
  contact: {
    email: "dcsgroups01@gmail.com",
    phone: "+234 8119773741",
    location: "International consultation-based service delivery",
    whatsapp: "https://wa.me/2348119773741?text=Hello%20DCS%20Solutions,%20I%20would%20like%20to%20book%20a%20consultation."
  }
};

function buildHeader(currentPage) {
  const navMarkup = siteConfig.nav
    .map(
      (item) => `
        <a href="${item.href}" class="${item.key === currentPage ? "is-active" : ""}">
          ${item.label}
        </a>
      `
    )
    .join("");

  return `
    <div class="container">
      <div class="header-frame">
        <a class="brand" href="index.html" aria-label="DCS Solutions home">
          <img class="brand-mark" src="assets/logo/dcs-global-mark.jpeg" alt="DCS Solutions logo">
          <span class="brand-copy">
            <span class="brand-name">${siteConfig.brandName}</span>
            <span class="brand-tagline">${siteConfig.tagline}</span>
          </span>
        </a>

        <div class="nav-wrap">
          <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Toggle navigation">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
              <path d="M4 7H20"/>
              <path d="M4 12H20"/>
              <path d="M4 17H20"/>
            </svg>
          </button>

          <nav class="nav-links" aria-label="Primary navigation">
            ${navMarkup}
          </nav>
        </div>

        <a class="button button-primary header-cta" href="contact.html">Book Consultation</a>
      </div>
    </div>
  `;
}

function buildFooter() {
  const quickLinks = siteConfig.nav
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  const serviceLinks = siteConfig.serviceLinks
    .map((item) => `<li><a href="${item.href}">${item.label}</a></li>`)
    .join("");

  return `
    <div class="container">
      <div class="footer-frame">
        <div class="footer-grid">
          <div>
            <a class="brand" href="index.html" aria-label="DCS Solutions home">
              <img class="brand-mark" src="assets/logo/dcs-global-mark.jpeg" alt="DCS Solutions logo">
              <span class="brand-copy">
                <span class="brand-name">${siteConfig.brandName}</span>
                <span class="brand-tagline">Technology-driven digital solutions and global support</span>
              </span>
            </a>
            <p class="footer-copy">
              DCS Solutions is a technology-driven brand providing digital solutions, media production, marketing services, and structured travel consultancy support for modern brands, individuals, and organizations.
            </p>
            <div class="social-links" aria-label="Social media links">
              <a class="social-link" href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.6 9.88h2.67V18H5.6V9.88Zm4.3 0h2.56v1.1h.04c.36-.67 1.23-1.37 2.54-1.37 2.72 0 3.22 1.79 3.22 4.11V18H15.6v-3.79c0-.9-.02-2.06-1.26-2.06-1.26 0-1.46.98-1.46 1.99V18H9.9V9.88Z"/>
                </svg>
              </a>
              <a class="social-link" href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.7A3.05 3.05 0 0 0 4.7 7.75v8.5a3.05 3.05 0 0 0 3.05 3.05h8.5a3.05 3.05 0 0 0 3.05-3.05v-8.5a3.05 3.05 0 0 0-3.05-3.05h-8.5Zm8.95 1.27a1.03 1.03 0 1 1 0 2.06 1.03 1.03 0 0 1 0-2.06ZM12 7.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.7a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4Z"/>
                </svg>
              </a>
              <a class="social-link" href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M21.58 7.19a2.96 2.96 0 0 0-2.08-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.49a2.96 2.96 0 0 0-2.08 2.1A31.3 31.3 0 0 0 2 12a31.3 31.3 0 0 0 .42 4.81 2.96 2.96 0 0 0 2.08 2.1C6.3 19.4 12 19.4 12 19.4s5.7 0 7.5-.49a2.96 2.96 0 0 0 2.08-2.1A31.3 31.3 0 0 0 22 12a31.3 31.3 0 0 0-.42-4.81ZM10.2 15.2V8.8l5.3 3.2-5.3 3.2Z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 class="footer-title">Quick Links</h3>
            <ul class="footer-list">${quickLinks}</ul>
          </div>

          <div>
            <h3 class="footer-title">Services</h3>
            <ul class="footer-list">${serviceLinks}</ul>
          </div>

          <div>
            <h3 class="footer-title">Contact</h3>
            <ul class="footer-list">
              <li><a href="mailto:${siteConfig.contact.email}">${siteConfig.contact.email}</a></li>
              <li><a href="tel:${siteConfig.contact.phone.replace(/[^+\d]/g, "")}">${siteConfig.contact.phone}</a></li>
              <li>${siteConfig.contact.location}</li>
              <li><a href="${siteConfig.contact.whatsapp}" target="_blank" rel="noreferrer">Chat With Us on WhatsApp</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <span>&copy; <span data-current-year></span> DCS Solutions. All rights reserved.</span>
          <span>Technology-driven systems, premium media, growth marketing, and structured consultancy support under one professional brand.</span>
        </div>
      </div>
    </div>
  `;
}

function includeSharedBlocks() {
  const currentPage = document.body.dataset.page || "";
  const header = document.querySelector("[data-include='site-header']");
  const footer = document.querySelector("[data-include='site-footer']");

  if (header) {
    header.innerHTML = buildHeader(currentPage);
  }

  if (footer) {
    footer.innerHTML = buildFooter();
  }
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const navWrap = document.querySelector(".nav-wrap");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (!toggle) {
    return;
  }

  const closeMenu = () => {
    document.body.classList.remove("menu-open");
    toggle.setAttribute("aria-expanded", "false");
  };

  toggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth > 920 || !document.body.classList.contains("menu-open")) {
      return;
    }

    if (navWrap && !navWrap.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 920) {
      closeMenu();
    }
  });
}

function setupHeaderState() {
  const header = document.querySelector(".site-header");

  if (!header) {
    return;
  }

  const syncState = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 18);
  };

  syncState();
  window.addEventListener("scroll", syncState, { passive: true });
}

function setupReveal() {
  const revealNodes = document.querySelectorAll("[data-reveal]");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!revealNodes.length) {
    return;
  }

  revealNodes.forEach((node, index) => {
    node.classList.add("reveal");
    node.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
  });

  if (prefersReducedMotion) {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16
    }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

function setupSmoothScrolling() {
  document.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (!target) {
        return;
      }

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function setFormFeedback(feedback, status, message) {
  if (!feedback) {
    return;
  }

  feedback.classList.add("is-visible");
  feedback.classList.toggle("is-error", status === "error");
  feedback.classList.toggle("is-success", status !== "error");
  feedback.textContent = message;
}

function setupForms() {
  const forms = document.querySelectorAll("[data-contact-form]");

  forms.forEach((form) => {
    const feedback = form.querySelector(".form-feedback");
    const submitButton = form.querySelector("button[type='submit']");
    const storageKey = form.dataset.storageKey || "contact-form";
    const params = new URLSearchParams(window.location.search);
    const status = params.get("status");
    const message = params.get("message");

    const restoreDraft = () => {
      try {
        const stored = localStorage.getItem(storageKey);

        if (!stored) {
          return;
        }

        const values = JSON.parse(stored);

        Object.entries(values).forEach(([key, value]) => {
          const field = form.elements.namedItem(key);

          if (!field || typeof value !== "string") {
            return;
          }

          field.value = value;
        });
      } catch (error) {
        // Ignore draft restore issues and keep the form usable.
      }
    };

    const storeDraft = () => {
      try {
        const formData = new FormData(form);
        const values = {};

        formData.forEach((value, key) => {
          if (key === "website" || typeof value !== "string") {
            return;
          }

          values[key] = value;
        });

        localStorage.setItem(storageKey, JSON.stringify(values));
      } catch (error) {
        // Ignore storage issues silently to avoid blocking the submission.
      }
    };

    if (status === "success") {
      try {
        localStorage.removeItem(storageKey);
      } catch (error) {
        // Ignore storage issues and continue.
      }

      form.reset();
      setFormFeedback(
        feedback,
        "success",
        "Thank you. Your enquiry has been sent successfully. We will review it and get back to you soon."
      );
    } else if (status === "error") {
      restoreDraft();
      setFormFeedback(
        feedback,
        "error",
        message || "We could not send your enquiry right now. Please try again."
      );
    }

    if (status) {
      const cleanUrl = `${window.location.pathname}${window.location.hash}`;
      window.history.replaceState({}, document.title, cleanUrl);
    }

    form.addEventListener("submit", () => {
      storeDraft();

      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }
    });
  });
}

function setCurrentYear() {
  document.querySelectorAll("[data-current-year]").forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  includeSharedBlocks();
  setupMenu();
  setupHeaderState();
  setupReveal();
  setupSmoothScrolling();
  setupForms();
  setCurrentYear();
});
