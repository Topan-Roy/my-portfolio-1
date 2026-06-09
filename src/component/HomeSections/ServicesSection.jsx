import {
  FaArrowRight,
  FaCode,
  FaDatabase,
  FaLayerGroup,
  FaMobileScreenButton,
  FaShieldHalved,
} from "react-icons/fa6";

const services = [
  {
    icon: FaCode,
    title: "Full Stack Web Apps",
    summary:
      "I build complete web applications where the interface, API, database, and deployment work together smoothly.",
    deliverables: [
      "Responsive React UI",
      "Protected routes and auth flow",
      "CRUD dashboards",
      "API-connected data views",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "Firebase"],
    accent: "Web",
  },
  {
    icon: FaMobileScreenButton,
    title: "React Native Apps",
    summary:
      "I create mobile app screens and flows that feel clean, practical, and ready to connect with real backends.",
    deliverables: [
      "Reusable app components",
      "Navigation and screen flow",
      "Firebase/API integration",
      "Mobile-first UI polish",
    ],
    stack: ["React Native", "JavaScript", "Firebase", "REST API"],
    accent: "Mobile",
  },
  {
    icon: FaLayerGroup,
    title: "MERN Product Flow",
    summary:
      "I structure MERN products from idea to launch with clear feature flow, maintainable code, and deployment-ready setup.",
    deliverables: [
      "Feature planning",
      "Role-based dashboard",
      "Server and database logic",
      "Deployment support",
    ],
    stack: ["MERN", "JWT", "Vercel", "Firebase Hosting"],
    accent: "Product",
  },
];

const workflow = [
  {
    icon: FaShieldHalved,
    title: "Reliable flow",
    text: "Clear auth, validation, and predictable user journeys.",
  },
  {
    icon: FaDatabase,
    title: "Data-backed",
    text: "MongoDB/Firebase data structures connected with practical UI.",
  },
  {
    icon: FaArrowRight,
    title: "Launch ready",
    text: "Responsive polish, deployment checks, and live project handoff.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="portfolio-section px-5 py-24 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="section-heading">
          <p className="section-kicker">What I do</p>
          <h2 className="section-title">I build useful products from screen to server.</h2>
        </div>

        <div className="services-showcase mt-12">
          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <article className="service-detail-card" key={service.title}>
                  <div className="service-card-top">
                    <span className="service-index">0{index + 1}</span>
                    <span className="service-accent">{service.accent}</span>
                  </div>
                  <div className="service-icon">
                    <Icon />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.summary}</p>
                  <ul>
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="service-stack">
                    {service.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="service-workflow">
            {workflow.map((item) => {
              const Icon = item.icon;

              return (
                <div className="workflow-step" key={item.title}>
                  <Icon />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
