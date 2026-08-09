const employee = {
  name: "RETHISH SUKUMAR",
  shortName: "RETHISH",
  role: "CHIEF TECHNOLOGY OFFICER",
  bio: "**Rethish, Chief Technology Officer,** is passionate about building innovative technologies that solve real-world challenges. With a strong focus on cybersecurity, software development, and emerging technologies, he leads the organization's technical vision while fostering a culture of continuous learning and innovation. His commitment to excellence, problem-solving, and creating scalable digital solutions plays a key role in driving the company's technological growth and long-term success.",
  image: "./hero-profile-v1.png",
  quote: "Technology has the power to transform the future—but only when driven by purpose, curiosity, and innovation.",
  details: {
    department: "CHIEF TECHNOLOGY OFFICER",
    email: "rethishsugu28@gmail.com",
    phone: "9442883003"
  },
  socials: [
    { name: "Twitter", url: "https://x.com/rethishsugu28" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/rethish-s-25a377372?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
    { name: "Instagram", url: "https://www.instagram.com/rxthisx_2828?igsh=aXc1bHA1OTRneDlk" }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  // Populate hero section
  document.getElementById('hero-img').src = employee.image;
  document.getElementById('hero-img').alt = employee.name;
  document.getElementById('hero-name').textContent = employee.name;
  document.getElementById('hero-role').textContent = employee.role;
  document.getElementById('hero-quote').textContent = `"${employee.quote}"`;

  // Populate bio section
  document.getElementById('bio-title').textContent = `About ${employee.shortName}`;
  
  // Parse simple markdown-like bold text for bio
  const bioContainer = document.getElementById('bio-text');
  const parts = employee.bio.split('**');
  parts.forEach((part, index) => {
    if (index % 2 === 1) {
      const strong = document.createElement('strong');
      strong.style.color = 'var(--color-text)';
      strong.textContent = part;
      bioContainer.appendChild(strong);
    } else {
      bioContainer.appendChild(document.createTextNode(part));
    }
  });

  // Populate details
  document.getElementById('detail-dept').textContent = employee.details.department;
  
  const emailLink = document.getElementById('detail-email');
  emailLink.href = `mailto:${employee.details.email}`;
  emailLink.textContent = employee.details.email;

  const phoneLink = document.getElementById('detail-phone');
  phoneLink.href = `tel:${employee.details.phone}`;
  phoneLink.textContent = employee.details.phone;

  // Populate social links
  const socialLinksContainer = document.getElementById('social-links');
  employee.socials.forEach(social => {
    const a = document.createElement('a');
    a.href = social.url;
    a.className = 'social-link';
    a.textContent = social.name;
    socialLinksContainer.appendChild(a);
  });
});
