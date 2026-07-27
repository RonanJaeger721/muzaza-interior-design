"use client";

import { useEffect, useState } from "react";

const projects = [
  { title: "The Fireplace Room", type: "Media wall · Lighting · Joinery", image: "/muzaza/fireplace-room.jpeg" },
  { title: "Quiet Geometry", type: "Built-in wardrobes · Vanity", image: "/muzaza/wardrobe-grey.jpeg" },
  { title: "The Social Kitchen", type: "Kitchen cabinetry · Island", image: "/muzaza/kitchen.jpeg" },
  { title: "Light in the Wall", type: "TV wall · Display joinery", image: "/muzaza/tv-wall.jpeg" },
  { title: "White Volume", type: "Wardrobes · Integrated storage", image: "/muzaza/wardrobe-white.jpeg" },
];

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [scene, setScene] = useState(0);

  useEffect(() => {
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("seen");
    }), { threshold: 0.14 });
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

    const scenes = Array.from(document.querySelectorAll("[data-scene]"));
    const sceneObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) setScene(Number((entry.target as HTMLElement).dataset.scene));
    }), { rootMargin: "-42% 0px -42% 0px" });
    scenes.forEach((el) => sceneObserver.observe(el));
    return () => { reveal.disconnect(); sceneObserver.disconnect(); };
  }, []);

  const close = () => setMenu(false);
  return (
    <main>
      <div className="grain" />
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Muzaza Interior Design home"><span className="brandMark">M</span><span><b>MUZAZA</b><small>INTERIOR DESIGN</small></span></a>
        <div className="navLinks"><a href="#work">Work</a><a href="#expertise">Expertise</a><a href="#process">Process</a><a href="#contact">Contact</a></div>
        <a className="navCta" href="https://wa.me/263718975557">Start a project <span>↗</span></a>
        <button className="menuButton" onClick={() => setMenu(!menu)} aria-label="Toggle menu" aria-expanded={menu}><i /><i /></button>
      </nav>
      <div className={`menu ${menu ? "open" : ""}`}><a onClick={close} href="#work">Selected work</a><a onClick={close} href="#expertise">What we do</a><a onClick={close} href="#contact">Start a project</a></div>

      <section className="hero" id="top" onPointerMove={(event) => {
        const box = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty("--light-x", `${event.clientX - box.left}px`);
        event.currentTarget.style.setProperty("--light-y", `${event.clientY - box.top}px`);
      }}>
        <img className="heroImage" src="/muzaza/fireplace-room.jpeg" alt="Muzaza bespoke media wall with integrated fireplace" />
        <div className="heroShade" />
        <div className="heroLine"><span>Harare · Zimbabwe</span><span>Interiors / Joinery / Transformation</span></div>
        <div className="heroCopy">
          <p className="eyebrow">Where every space has a story to tell</p>
          <h1>Imagine.<br /><em>Then inhabit it.</em></h1>
          <p className="intro">Bespoke interiors shaped through precision joinery, considered lighting and a deep understanding of how you live.</p>
          <div className="heroActions"><a className="pill gold" href="https://wa.me/263718975557">Bring us your space <span>↗</span></a><a className="pill glass" href="#work">Explore our work <span>↓</span></a></div>
        </div>
        <div className="heroStamp"><span>MI</span><p>DESIGN<br />CREATE<br />TRANSFORM</p></div>
      </section>

      <section className="promise reveal">
        <p className="eyebrow">Our point of view / 01</p>
        <h2>A room should do more<br />than look beautiful. <em>It should<br />feel entirely yours.</em></h2>
        <div className="promiseFoot"><p>From the first sketch to the final illuminated shelf, we make every decision part of one clear story.</p><a href="#expertise">Discover the studio <span>↘</span></a></div>
      </section>

      <section className="transformation" id="work">
        <div className="mLine" aria-hidden="true"><span>M</span><i /></div>
        <div className="sceneStage">
          {projects.slice(0, 4).map((project, i) => <img key={project.title} className={scene === i ? "active" : ""} src={project.image} alt={project.title} />)}
          <div className="sceneFrame"><span>0{scene + 1}</span><div><p>Selected space</p><h3>{projects[scene].title}</h3><small>{projects[scene].type}</small></div></div>
        </div>
        <div className="sceneScript">
          <p className="eyebrow">The transformation / 02</p>
          <h2>Watch a space<br /><em>find its character.</em></h2>
          {projects.slice(0, 4).map((project, i) => <article data-scene={i} key={project.title}><span>0{i + 1}</span><div><h3>{project.title}</h3><p>{i === 0 ? "Warm light, crisp vertical rhythm and a fireplace turn the television wall into the room’s centre of gravity." : i === 1 ? "Full-height storage disappears into calm reflective planes, leaving the room quiet and generous." : i === 2 ? "Cabinetry and an island are composed around movement—cooking, gathering and conversation." : "Display, storage and entertainment are resolved as one continuous architectural gesture."}</p></div></article>)}
        </div>
      </section>

      <section className="expertise" id="expertise">
        <div className="expertiseHead reveal"><p className="eyebrow">What we shape / 03</p><h2>One studio.<br /><em>Every layer.</em></h2><p>We combine creative direction and skilled execution so the finished space feels coherent, polished and made to last.</p></div>
        <div className="serviceRail">
          {["Interior design", "Bespoke kitchens", "Fitted wardrobes", "TV & media walls", "Custom cabinetry"].map((item, i) => <a className="service reveal" href="https://wa.me/263718975557" key={item}><span>0{i + 1}</span><h3>{item}</h3><p>{["Spatial planning, material direction and complete room concepts.", "Tailored storage and workspaces built around everyday rituals.", "Full-height storage with refined finishes and precise detailing.", "Immersive entertainment walls with lighting, display and fire features.", "Purpose-built joinery for the spaces standard furniture cannot solve."][i]}</p><b>↗</b></a>)}
        </div>
      </section>

      <section className="gallery">
        <div className="galleryTitle reveal"><p className="eyebrow">Built, not rendered / 04</p><h2>Real rooms.<br /><em>Real transformation.</em></h2></div>
        {projects.map((project, i) => <figure className={`project project-${i + 1} reveal`} key={project.title}><div><img src={project.image} alt={project.title} /><a href="https://wa.me/263718975557">View detail ↗</a></div><figcaption><span>0{i + 1}</span><h3>{project.title}</h3><p>{project.type}</p></figcaption></figure>)}
      </section>

      <section className="process" id="process">
        <div className="processHeading reveal"><p className="eyebrow">Our process / 05</p><h2>From possibility<br />to <em>place.</em></h2></div>
        <div className="processSteps">
          {[['01','Imagine','Tell us what the room needs to become.'],['02','Design','We resolve layout, material, detail and atmosphere.'],['03','Create','Our team crafts every element with care and precision.'],['04','Transform','Installation brings the complete story into focus.']].map(([n,t,p]) => <div className="reveal" key={n}><span>{n}</span><div className="processDot" /><h3>{t}</h3><p>{p}</p></div>)}
        </div>
      </section>

      <section className="identity">
        <div className="identityImage reveal"><img src="/muzaza/brand.jpeg" alt="Muzaza Interior Design logo and brand statement" /></div>
        <div className="identityCopy reveal"><p className="eyebrow">Muzaza Interior Design</p><h2>Imagine.<br />Design.<br />Create.<br /><em>Transform.</em></h2><p>Where every space has a story to tell—and every detail helps tell it beautifully.</p></div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Your space is waiting / 06</p>
        <h2 className="reveal">What story should<br />your space <em>tell?</em></h2>
        <a className="contactOrb" href="https://wa.me/263718975557"><span>Let’s talk<br />on WhatsApp</span><b>↗</b></a>
        <div className="contactBar"><div><small>CALL / WHATSAPP</small><a href="tel:+263718975557">071 897 5557</a></div><div><small>SERVICES</small><span>Interiors · Kitchens · Wardrobes · Media walls</span></div><div><small>STUDIO</small><span>Zimbabwe · By consultation</span></div></div>
      </section>
      <footer><a className="brand" href="#top"><span className="brandMark">M</span><span><b>MUZAZA</b><small>INTERIOR DESIGN</small></span></a><p>Where every space has a story to tell.</p><span>© 2026 MUZAZA</span></footer>
    </main>
  );
}
