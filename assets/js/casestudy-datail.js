const casestudyContent = {
  "glory-o-tour-and-travel": {
    title: "Glory O Tour and Travel: A Journey Towards a Stronger Brand & Digital Presence",
    thumbnail: "assets/img/casestudy/img1.png",
    clientOverview: "Glory-O-Tour-and-Travel is a Nigeria-based travel company offering unique tour experiences and travel services. They aim to provide seamless travel experiences with a focus on customer satisfaction and local expertise.",
    background: "When Glory-O-Tour-and-Travel approached us, they had no established brand identity, logo, or website. Without a clear visual identity, it was difficult for them to stand out in the competitive travel industry. Additionally, they lacked a digital platform to showcase their services, making it challenging to attract and retain customers.",
    thumbnail: "assets/img/casestudy/img1.png",
    challenge: `
      The primary challenge was to create a brand identity that truly reflected the essence of Glory-O-Tour-and-Travel. Without a logo, their brand lacked a visual representation, and without a website, they were missing out on direct customer engagement. We needed to ensure that the branding was not only visually appealing but also aligned with their mission of delivering exceptional travel experiences.
    `,
    solution: [
      "Our approach began with an in-depth understanding of Glory-O-Tour-and-Travel' vision and values. We designed a professional and visually striking logo that encapsulated their brand’s essence. With the logo finalized, we moved on to developing a fully functional, user-friendly website that allowed their clients to explore travel packages, make inquiries, and engage with the company effortlessly.",
      "The website was designed with a modern interface, seamless navigation, and a strong call to action, ensuring that users could easily book travel services. The responsive design made it accessible across all devices, improving customer experience and engagement.",
    ],
    result: `
      The transformation was remarkable. Glory-O-Tour-and-Travel now has a distinct and professional brand identity, along with a digital presence that enables them to connect with potential travelers effectively.
      With a strong foundation now in place, Glory-O-Tour-and-Travel is well-positioned for growth, attracting new customers and building trust in the travel industry. Their journey towards digital transformation has only just begun, and we are proud to have been a part of it.
    `,
    feedback: [
      "Frencis (CEO & Founder of Glory-O-tour-and-travels) was highly satisfied with the outcome and shared their appreciation:",
      "The logo is great! I don’t know how to appreciate you enough—I love it, it’s amazing. The website is really user-friendly and beautifully designed. I am very happy to connect with you!"
    ],
  },

"pirates-tours-tom": {
    title: "Pirates Tours Tom: Transforming a Thriving Business into a Digital Powerhouse",
    thumbnail: "assets/img/casestudy/img2.png",
    clientOverview: "Pirates Tours Tom is a well-known tour and travel agency based in Egypt, offering a variety of travel services. With an outstanding reputation and numerous positive reviews, the company has built a strong customer base through exceptional service and memorable travel experiences.",
    background: "Despite their success, Pirates Tours Tom lacked a strong digital presence. They did not have their own branding, a professional website, or an effective social media strategy. In today’s digital era, where customers search for and book travel services online, their absence from the digital space was limiting their growth potential.",
    challenge: `
      The primary challenge was to create a professional brand identity that matched the quality of their services. Without a logo, a website, or a structured social media presence, Pirates Tours Tom was missing opportunities to reach a broader audience and maximize their business potential.
    `,
    solution: [
      "Understanding the significance of branding and digital visibility, we approached the founder, Tom, with a proposal to redesign and elevate the business. He was excited about the opportunity, and together we embarked on a transformation journey.",
      "Our first step was to create a strong, visually appealing logo that truly represented Pirates Tours Tom’s adventurous and customer-focused spirit. Tom was thrilled with the result, stating that it perfectly captured the essence of his business.",
      "With the branding in place, we are now actively working on developing a professional, user-friendly website that will allow customers to explore services, make inquiries, and book tours seamlessly. In parallel, we are building a compelling social media presence to enhance their visibility, engage with travelers, and showcase the incredible experiences Pirates Tours Tom offers."
    ],
    result: `
      While the website and social media strategies are still in progress, the transformation is already taking shape. With a brand identity now established, Pirates Tours Tom is on its way to becoming a fully digital and customer-friendly travel agency.
      We are proud to be part of Pirates Tours Tom’s journey and are committed to delivering a complete digital transformation that will elevate their business to new heights.
    `,
    feedback: [
      `Tom(Founder & CEO of Pirates tour tom) is highly optimistic about this new phase and has expressed his excitement:`,
      `The logo is absolutely fantastic! I couldn’t have asked for a better representation of my business. I’m looking forward to seeing the website and social media come to life.
      `
    ]
  },
};


document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const casestudyKey = params.get("id");

  if (casestudyKey && casestudyContent[casestudyKey]) {
    const casestudy = casestudyContent[casestudyKey];

    document.getElementById("casestudy-title").innerHTML = casestudy.title;
    document.getElementById("casestudy-thumbnail").setAttribute("src", casestudy.thumbnail);
    document.getElementById("client-overview").textContent = casestudy.clientOverview;
    document.getElementById("client-background").textContent = casestudy.background;
    document.getElementById("challenge").textContent = casestudy.challenge;
    document.getElementById("feedback-desc").textContent = casestudy.feedback[0];
    document.getElementById("feedback").textContent = casestudy.feedback[1];

    const solutionsContainer = document.getElementById("solutions");
    solutionsContainer.innerHTML += casestudy.solution.map(
      (solution) => `<p class="sd-content">${solution}</p></br>`
    ).join("");
  } else {
    document.querySelector("main").innerHTML = `
      <div class="error-message">
        <h2>Service not found</h2>
        <p>Please select a valid casestudy from our offerings.</p>
      </div>
    `;
  }
});
