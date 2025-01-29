const serviceContent = {
  "tour-and-travel-website": {
    title: "Tour & Travel Website",
    subtitle: "Expand your travel business with our professional websites.",
    thumbnail: "assets/img/video/pic1.jpg",
    description: `
      Our Tour and Travel Website services provide tailored solutions to create engaging and user-friendly websites. From showcasing your travel packages to integrating booking systems, we help you connect with your customers seamlessly. With our expertise, your online presence will stand out, attracting more travelers to your services.
    `,
    outcomes: [
      "Boost your online visibility.",
      "Seamless booking integrations.",
      "Enhanced user experience."
    ]
  },
  "competitor-analysis": {
    title: "Competitor Analysis",
    subtitle: "Stay ahead in your industry with our competitor insights.",
    thumbnail: "assets/img/video/competitor.png",
    description: `
      Our Competitor Analysis service helps you understand your market better by identifying strengths, weaknesses, and opportunities. Leverage our data-driven approach to refine your strategies and outperform competitors.
    `,
    outcomes: [
      "Identify market opportunities.",
      "Understand competitor strategies.",
      "Make data-driven decisions."
    ]
  },
  "free-consultation": {
    title: "Free Consultation",
    subtitle: "Get expert advice for your business without any cost.",
    thumbnail: "assets/img/video/consultation.png",
    description: `
      Schedule a free consultation with our experts to identify areas of improvement and growth opportunities for your business. Let us guide you through a roadmap to success.
    `,
    outcomes: [
      "Personalized recommendations.",
      "Expert advice at no cost.",
      "Clear strategy for growth."
    ]
  },
  "market-automation": {
    title: "Market Automation",
    subtitle: "Streamline your marketing efforts with automation.",
    thumbnail: "assets/img/video/automation.png",
    description: `
      Automate repetitive marketing tasks and focus on what matters. Our Market Automation services allow you to manage campaigns, track customer interactions, and optimize engagement effortlessly.
    `,
    outcomes: [
      "Save time and resources.",
      "Improve customer engagement.",
      "Data-driven marketing decisions."
    ]
  },
  "search-engine-optimization": {
    title: "Search Engine Optimization",
    subtitle: "Increase your website’s visibility with SEO.",
    thumbnail: "assets/img/video/seo.png",
    description: `
      Our SEO services boost your search engine rankings, enhance domain authority, and drive organic traffic. Stay visible and relevant in today’s competitive digital landscape.
    `,
    outcomes: [
      "Improve search rankings.",
      "Drive organic traffic.",
      "Enhance website credibility."
    ]
  },
  "social-media-management": {
    title: "Social Media Management",
    subtitle: "Build a strong presence on social media platforms.",
    thumbnail: "assets/img/video/social-media.png",
    description: `
      Let us manage your social media accounts, creating engaging content and building meaningful interactions with your audience to grow your brand online.
    `,
    outcomes: [
      "Increase social engagement.",
      "Build a loyal audience.",
      "Consistent branding."
    ]
  },
  "paid-advertisement": {
    title: "Paid Advertisement",
    subtitle: "Maximize ROI with targeted paid campaigns.",
    thumbnail: "assets/img/video/advertisement.png",
    description: `
      Our Paid Advertisement service ensures your marketing budget is used efficiently by targeting the right audience with impactful ad campaigns.
    `,
    outcomes: [
      "High ROI campaigns.",
      "Precise audience targeting.",
      "Trackable ad performance."
    ]
  },
  "brand-development-and-logo-design": {
    title: "Brand Development & Logo Design",
    subtitle: "Create a lasting impression with a strong brand identity.",
    thumbnail: "assets/img/video/brand.png",
    description: `
      Our Brand Development & Logo Design services help you establish a unique and memorable brand identity that resonates with your audience.
    `,
    outcomes: [
      "Strong brand identity.",
      "Professional logo designs.",
      "Increased brand recognition."
    ]
  }
};


document.addEventListener("DOMContentLoaded", () => {
  // Get the service parameter from the URL
  const params = new URLSearchParams(window.location.search);
  const serviceKey = params.get("service");

  if (serviceKey && serviceContent[serviceKey]) {
    const service = serviceContent[serviceKey];

    // Update page content
    document.querySelector(".page-title-box .title").innerHTML = service.subtitle;
    document.querySelector(".sd-ser-content h2.sd-title").textContent = service.title;
    thumbnail: "assets/img/video/pic1.jpg",
    document.querySelector(".sd-ser-content p.sd-content").innerHTML = service.description;
    document.getElementById("service-image").setAttribute("src", `${service.thumbnail}`);

    // Populate service outcomes
    const outcomesContainer = document.querySelector(".sd-ser-outcome .sd-list-item");
    outcomesContainer.innerHTML = service.outcomes.map(
      (outcome) => `<li><img src="assets/img/icon/check-icon.svg" alt="">${outcome}</li>`
    ).join("");
  } else {
    // Handle invalid or missing service
    document.querySelector("main").innerHTML = `
      <div class="error-message">
        <h2>Service not found</h2>
        <p>Please select a valid service from our offerings.</p>
      </div>
    `;
  }
});
