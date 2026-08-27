import ImpactSwitcher from './impact-switcher';

const experience = [
  { period: "Dec 2025 - Present", company: "Netcraft", role: "Senior Platform Engineer", title: "Distributed Crawling & Social Processing", detail: "Building TypeScript and Go services for large-scale cybersecurity intelligence pipelines, with Kubernetes environments and Protobuf integrations.", tag: "Cybersecurity" },
  { period: "Aug 2025 - Jan 2026", company: "AI71", role: "Senior Platform Engineer", title: "AI Data Generation & Evaluation", detail: "Built asynchronous processing workflows, introduced MLflow observability on Azure, and cut incremental Docker rebuilds from ~40 to under 10 minutes.", tag: "AI Systems" },
  { period: "Jan 2025 - Jul 2025", company: "NTT DATA", role: "Senior Engineer", title: "Fintech Planning Platform", detail: "Modernized Go, Node.js and FastAPI services; improved API response times by ~40% and CI/CD reliability by ~50% across 15+ cloud services.", tag: "Fintech" },
  { period: "Apr 2024 - Dec 2024", company: "NTT DATA · Blueprint Genetics · Quest Diagnostics", role: "Senior Software Engineer", title: "Diagnostics Operations & Processing", detail: "Improved operational efficiency 5x with actionable analytics, cut recurring operational workload by 80%, and improved system performance by 50% through workflow and query optimization.", tag: "Healthtech" },
  { period: "Apr 2023 - Mar 2024", company: "NTT DATA · WHO", role: "Senior Solution Architect / Lead", title: "Health Resource Monitoring", detail: "Led the modernization of a crisis-region platform, improving performance 10× and reducing dashboard load time from 20 to 2 seconds.", tag: "Architecture" },
];
const skills = [
  ["Languages", "Go · Python · TypeScript · JavaScript"],
  ["Backend", "Node.js · FastAPI · NestJS · REST · Protobuf"],
  ["Frontend", "React · Next.js · Vue · Angular"],
  ["Cloud & Platform", "Kubernetes · Docker · AWS EKS · Azure AKS"],
  ["Delivery", "GitHub Actions · Jenkins · IaC · CI/CD"],
  ["Observability", "OpenTelemetry · Prometheus · Grafana · Sentry"],
  ["Data & Messaging", "PostgreSQL · MySQL · MongoDB · Redis · Kafka · RabbitMQ"],
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Cristian Gîrlea, home">CG<span>.</span></a>
      <div className="navLinks"><a href="#about">About</a><a href="#experience">Experience</a><a href="#expertise">Expertise</a></div>
      <a className="navCta" href="#contact">Let’s talk <span>↗</span></a>
    </nav>
    <section className="hero shell" id="top">
      <div className="eyebrow"><i /> Available for ambitious engineering work</div>
      <h1>Engineering resilient<br/><em>platforms at scale.</em></h1>
      <div className="heroFoot">
        <p>Senior Platform & Backend Engineer translating complex systems into reliable products, from cloud-native infrastructure to distributed services.</p>
        <div className="heroActions"><a className="primary" href="#experience">Explore my work <span>↓</span></a><a className="textLink" href="#contact">Get in touch <span>↗</span></a></div>
      </div>
      <ImpactSwitcher />
      <div className="signal" aria-hidden="true"><div className="orbit"/><div className="orbit orbitTwo"/><div className="signalCore"><span>13+</span><small>years<br/>engineering</small></div><b className="labelOne">PLATFORM</b><b className="labelTwo">BACKEND</b><b className="labelThree">CLOUD</b></div>
    </section>
    <section className="intro shell" id="about">
      <div className="sectionLabel">01 / Profile</div>
      <div className="introCopy"><h2>I build the systems<br/>behind the experience.</h2><p>I’m Cristian Gîrlea, an engineer and technical lead with 13+ years across fintech, AI, cybersecurity, healthtech and enterprise platforms. My focus is clear: production-grade services, calm incident response, and teams that understand the systems they operate.</p>
        <div className="stats"><div><strong>10×</strong><span>Performance uplift</span></div><div><strong>15+</strong><span>Services deployed</span></div><div><strong>8 yrs</strong><span>CI/CD delivery</span></div></div>
      </div>
    </section>
    <section className="work" id="experience"><div className="shell">
      <div className="sectionHead"><div className="sectionLabel light">02 / Selected experience</div><h2>Recent work</h2></div>
      <div className="projects">{experience.map((item,index)=><article className="project" key={item.title}><div className="projectNum">0{index+1}</div><div className="projectMain"><div className="meta"><span>{item.company}</span><span>{item.period}</span></div><h3>{item.title}</h3><p>{item.detail}</p></div><div className="projectSide"><span>{item.tag}</span><small>{item.role}</small></div></article>)}</div>
    </div></section>
    <section className="expertise shell" id="expertise"><div className="sectionLabel">03 / Capabilities</div><div className="expertiseGrid"><div><h2>Depth where<br/>it matters.</h2><p>Hands-on engineering backed by structured troubleshooting, customer communication, documentation and knowledge sharing.</p></div><div className="skillList">{skills.map(([title,items],index)=><div className="skill" key={title}><span>0{index+1}</span><h3>{title}</h3><p>{items}</p></div>)}</div></div></section>
    <section className="education shell"><div className="sectionLabel">04 / Education</div><div className="degree"><span>2017 - 2020</span><h2>M.A. Artificial Intelligence</h2><p>University of Craiova</p></div></section>
    <footer id="contact"><div className="shell footerInner"><div className="sectionLabel light">05 / Contact</div><h2>Let’s build something<br/><em>that holds up.</em></h2><p>Open to senior platform, backend and technical leadership opportunities.</p><div className="contactDetails"><a href="mailto:contact@cristiangirlea.ro" className="contactLink">contact@cristiangirlea.ro <span>↗</span></a><a href="tel:+40724982214" className="contactLink">+40 724 982 214 <span>↗</span></a><a href="https://wa.me/40724982214" className="contactLink" target="_blank" rel="noreferrer">WhatsApp <span>↗</span></a><a href="https://www.linkedin.com/in/cristian-girlea/" className="contactLink" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div><div className="footerBottom"><span>CRISTIAN GÎRLEA</span><span>© 2026</span></div></div></footer>
  </main>;
}
