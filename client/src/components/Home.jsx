import React from "react";

const frontendSkills = ["React.js", "Tailwind CSS", "Framer Motion", "Gsap", "HTML", "CSS"];
const backendSkills = ["Node.js", "Express.js", "JWT & Authentication"];
const databaseSkills = ["MongoDB", "Prisma", "SQL"];
const programming = ["C", "C++", "Python", "Java", "Javascript"];
const others = ["AWS", "Git", "Github", "Figma"];

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#1E293B] flex flex-col items-center justify-center px-6 py-10">
      {/* Header Section */}
      <header className="text-center mb-12">
        <img
          src="/abc.jpg"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-6 border-4 border-[#4F46E5] object-cover shadow-lg"
        />
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Hey there, I'm Kausiki 👋
        </h1>
        <p className="text-xl text-[#2563EB] font-medium">
          Full-Stack Developer | Problem Solver
        </p>
        <h5 className="text-2xl font-bold text-[#4F46E5] mt-4">About Me</h5>
        <p className="text-md text-[#475569] mt-2">
          I’m Sai Kausiki Maddula, currently pursuing my B.Tech in Computer Science and Engineering at Kalasalingam Academy of Research and Education under the Kalvium Program — a unique, work-integrated, and industry-oriented curriculum focused on software product engineering. I’m passionate about building impactful web applications, blending strong frontend design, backend architecture, and database management skills. Through the Kalvium program, I’ve gained hands-on experience in full-stack development, and real-world software projects from the first year itself.
        </p>
        <br />
        <p className="text-md text-[#475569]">
          Web Developer @ Coding Blocks KARE | Technical Member @ Vishaka KARE
        </p>
        <br />
        <p className="text-md text-[#475569]">
          I’m always eager to learn new technologies, solve real-world problems, and grow as a developer. My goal is to build scalable, meaningful software that improves people's lives.
        </p>
      </header>

      {/* Projects Section */}
      <section className="w-full max-w-5xl bg-[#E2E8F0] px-8 py-6 rounded-2xl shadow-lg mb-8">
        <h2 className="text-3xl font-bold text-[#4F46E5] mb-6 border-b border-[#CBD5E1] pb-2">
          Projects
        </h2>
        <div className="space-y-4">
          <div className="bg-[#CBD5E1] p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold">E-commerce</h3>
            <p className="text-sm text-[#334155]">
              A full-stack system to manage products, categories, and stock levels using MongoDB, Express.js, and React.
            </p>
            <a
              href="https://github.com/kausikimaddula/Follow-Along-ECOM.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline text-sm"
            >
              🚀 GitHub
            </a>{" "}
            |{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline text-sm"
            >
              🚀 Live
            </a>
          </div>
          <div className="bg-[#CBD5E1] p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold">Crave Cart</h3>
            <p className="text-sm text-[#334155]">
              A visually appealing food delivery UI made with responsive layouts and animated transitions.
            </p>
            <a
              href="https://github.com/kalviumcommunity/s81_Kausiki_CraveCart.git"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline text-sm"
            >
              🚀 GitHub
            </a>{" "}
            |{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2563EB] underline text-sm"
            >
              🚀 Live
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="w-full max-w-5xl bg-[#E2E8F0] px-8 py-6 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-[#4F46E5] mb-6 border-b border-[#CBD5E1] pb-2">
          Skills
        </h2>

        {/* Frontend */}
        <div className="mb-6">
          <h3 className="text-xl text-[#2563EB] font-semibold mb-2">Frontend</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {frontendSkills.map((skill, index) => (
              <li key={index} className="bg-[#CBD5E1] text-center p-4 rounded-xl">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Backend */}
        <div className="mb-6">
          <h3 className="text-xl text-[#2563EB] font-semibold mb-2">Backend</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {backendSkills.map((skill, index) => (
              <li key={index} className="bg-[#CBD5E1] text-center p-4 rounded-xl">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Programming */}
        <div className="mb-6">
          <h3 className="text-xl text-[#2563EB] font-semibold mb-2">Programming</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {programming.map((skill, index) => (
              <li key={index} className="bg-[#CBD5E1] text-center p-4 rounded-xl">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Database */}
        <div className="mb-6">
          <h3 className="text-xl text-[#2563EB] font-semibold mb-2">Database</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {databaseSkills.map((skill, index) => (
              <li key={index} className="bg-[#CBD5E1] text-center p-4 rounded-xl">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Others */}
        <div className="mb-6">
          <h3 className="text-xl text-[#2563EB] font-semibold mb-2">Others</h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {others.map((skill, index) => (
              <li key={index} className="bg-[#CBD5E1] text-center p-4 rounded-xl">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full max-w-3xl bg-[#E2E8F0] mt-12 px-8 py-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-[#4F46E5] mb-4">Contact Me</h2>
        <p className="text-[#475569] mb-2">
          📧 Email:{" "}
          <a
            href="mailto:saikausikimaddula80@gmail.com"
            className="text-[#2563EB] hover:underline"
          >
            saikausikimaddula80@gmail.com
          </a>
        </p>
        <p className="text-[#475569] mb-2">
          📱 Phone: <span className="text-[#1E293B]">+91 8374695895</span>
        </p>
        <p className="text-[#475569]">
          🌐 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/kausiki-maddula-5121a9371"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2563EB] hover:underline"
          >
            linkedin.com/in/kausiki
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-sm text-[#64748B]">
        Crafted with ❤ in React & Tailwind • © 2025 Kausiki
      </footer>
    </main>
  );
}