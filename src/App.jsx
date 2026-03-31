import { useEffect, useMemo, useState } from "react";
import { ChevronDown, ArrowUpRight, Shield, HeartHandshake, PawPrint, Phone, Mail, Compass } from "lucide-react";

export default function PackLifeWebsite() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);
  const [openPhilosophy, setOpenPhilosophy] = useState(null);
  const [page, setPage] = useState("home");
  const [contactStatus, setContactStatus] = useState("idle");
  const [showContactThankYou, setShowContactThankYou] = useState(false);
  const [selectedInquiryType, setSelectedInquiryType] = useState("");
  const [intakeScore, setIntakeScore] = useState(0);
  const [housing, setHousing] = useState("");
  const [experience, setExperience] = useState("");

  const navItems = useMemo(() => [
    ["about", "About"],
    ["dogs", "Available Dogs"],
    ["philosophy", "Philosophy"],
    ["contact", "Contact"],
  ], []);

  const philosophyItems = [
    { title: "Clarity", short: "Clear rules. Clear communication. No confusion.", detail: "We remove noise and guesswork. Dogs get consistent communication, clear expectations, and calm direction so they can regulate faster and build trust in the handler, the environment, and the routine around them." },
    { title: "Structure", short: "Structure comes first. Freedom comes after.", detail: "We lead with thresholds, crate decompression, leash neutrality, and calm routines. Structure creates predictability, lowers stress, and sets the foundation for everything that follows." },
    { title: "Stability", short: "We build outcomes that hold, not quick fixes.", detail: "We do not rush placement. Dogs move forward when they are ready for real life. Stability matters more than speed because rushed rescue creates setbacks for both dog and adopter." },
    { title: "Observation", short: "Watch first. Label later.", detail: "We assess health, stress, arousal, environment, and recovery before deciding what a dog needs. Many dogs are mislabeled when what they actually need is decompression, clarity, and the right environment." },
  ];

  const standards = [
    { icon: Shield, title: "Structured Intake", text: "We slow everything down and read the dog first. No assumptions. No pressure. Just clarity before action." },
    { icon: PawPrint, title: "Behavioral Rehab", text: "We build calm, neutral, functional dogs. Not tricks. Not temporary fixes. Behavior that actually holds." },
    { icon: HeartHandshake, title: "Right Placement", text: "We match dogs with intention. No rushing. No guessing. Just long-term success done the right way." },
  ];

  const founderCards = [
    { name: "KayLee Conkling", role: "President / Co-Founder", initials: "KC", bio: "Oversees mission direction, rescue operations, placement standards, and organizational leadership." },
    { name: "Brett Miller", role: "Vice President / Co-Founder", initials: "BM", bio: "Supports operations, structure-based rehabilitation, strategic growth, and long-term rescue planning." },
    { name: "Cameron", role: "Treasurer & Secretary", initials: "C", bio: "Supports financial oversight, records, documentation, board coordination, and organizational administration." },
  ];

  useEffect(() => {
    const score = (housing === "House" ? 2 : housing === "Apartment" ? 1 : 0) + (experience === "Experienced" ? 2 : experience === "Some" ? 1 : 0);
    setIntakeScore(score);
  }, [housing, experience]);

  useEffect(() => {
    const applyHashRoute = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash === "founders") return setPage("founders");
      if (hash === "apply") return setPage("apply");
      if (hash === "contact") return setPage("contact");
      setPage("home");
    };
    applyHashRoute();
    window.addEventListener("hashchange", applyHashRoute);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (page === "home" && entry.isIntersecting) setActive(entry.target.id);
      });
    }, { threshold: 0.55 });
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", applyHashRoute);
    };
  }, [page]);

  const inquiryGuidance =
    selectedInquiryType === "Adoption"
      ? "Adoption inquiries are best supported when an application is completed fully and honestly. Clear details help us review fit the right way."
      : selectedInquiryType === "Foster"
      ? "Foster inquiries should reflect the environment, structure, and availability you can realistically provide. Stability matters."
      : selectedInquiryType === "Surrender / Intake"
      ? "Please understand Pack Life operates on a structured intake basis and may not always have immediate availability. Include the dog’s age, breed, behavior, medical needs, and urgency."
      : selectedInquiryType === "Partnership / Collaboration"
      ? "Use this option for trainers, veterinarians, donors, sponsors, businesses, or collaboration opportunities that align with the Pack Life mission."
      : "";

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setContactStatus("sending");
    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("Intake Score", String(intakeScore));
    const inquiryType = formData.get("Inquiry Type") || "General";

    let subject = "New Pack Life Inquiry";
    let endpoint = "https://formsubmit.co/ajax/info@packlifedogrescue.org";
    if (inquiryType === "Adoption") {
      subject = "New Adoption Inquiry - Pack Life";
      endpoint = "https://formsubmit.co/ajax/adopt@packlifedogrescue.org";
    } else if (inquiryType === "Foster") {
      subject = "New Foster Inquiry - Pack Life";
      endpoint = "https://formsubmit.co/ajax/foster@packlifedogrescue.org";
    } else if (inquiryType === "Surrender / Intake") {
      subject = "New Surrender / Intake Inquiry - Pack Life";
      endpoint = "https://formsubmit.co/ajax/intake@packlifedogrescue.org";
    } else if (inquiryType === "Partnership / Collaboration") {
      subject = "New Partnership / Collaboration Inquiry - Pack Life";
    }
    formData.set("_subject", subject);
    formData.set("_captcha", "false");
    formData.set("_template", "table");
    const email = formData.get("Email");
    if (email) formData.set("_replyto", String(email));

    try {
      const response = await fetch(endpoint, { method: "POST", body: formData, headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error("Form submission failed");
      setContactStatus("success");
      setShowContactThankYou(true);
      form.reset();
      setSelectedInquiryType("");
      setHousing("");
      setExperience("");
      setIntakeScore(0);
    } catch {
      setContactStatus("error");
    }
  };

  const CardGradient = "bg-[linear-gradient(180deg,rgba(24,58,91,0.92)_0%,rgba(16,41,68,0.98)_100%)]";
  const DarkGradient = "bg-[linear-gradient(180deg,rgba(18,46,74,0.96)_0%,rgba(14,35,56,0.98)_100%)]";

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(224,193,90,0.10),transparent_18%),linear-gradient(180deg,#122E4A_0%,#102944_45%,#0E2338_100%)] text-[#F4F8FC] selection:bg-[#D4AF37]/30">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,193,90,0.10),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(59,108,153,0.14),transparent_22%)]" />
      <header className="sticky top-0 z-50 px-4 pt-4">
        <div className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 lg:px-6 ${scrolled ? "border-[#D4AF37]/20 bg-[#102944]/88 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl" : "border-[#2E5B86]/70 bg-[#122E4A]/72 shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-lg"}`}>
          <a href="#top" onClick={() => setPage("home")} className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#E0C15A_0%,#D4AF37_100%)] text-sm font-black tracking-[0.2em] text-[#102944] shadow-[0_10px_20px_rgba(212,175,55,0.18)]">PL</div>
            <div>
              <p className="text-[11px] tracking-[0.32em] text-[#E0C15A]">PACK LIFE</p>
              <p className="text-sm font-bold text-white">Dog Rescue And Rehabilitation</p>
            </div>
          </a>
          <nav className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] p-2 lg:flex">
            {navItems.map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setPage(id === "contact" ? "contact" : "home")} className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${((page === "home" && active === id) || (page === "contact" && id === "contact")) ? "bg-white/10 text-[#E0C15A] shadow-[inset_0_0_0_1px_rgba(224,193,90,0.18)]" : "text-[#DCE7F2] hover:bg-white/5 hover:text-[#E0C15A]"}`}>{label}</a>
            ))}
            <a href="#apply" onClick={() => setPage("apply")} className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${page === "apply" ? "bg-white/10 text-[#E0C15A] shadow-[inset_0_0_0_1px_rgba(224,193,90,0.18)]" : "text-[#DCE7F2] hover:bg-white/5 hover:text-[#E0C15A]"}`}>Applications</a>
            <a href="#founders" onClick={() => setPage("founders")} className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${page === "founders" ? "bg-white/10 text-[#E0C15A] shadow-[inset_0_0_0_1px_rgba(224,193,90,0.18)]" : "text-[#DCE7F2] hover:bg-white/5 hover:text-[#E0C15A]"}`}>Founders</a>
          </nav>
        </div>
      </header>

      <main id="top" className="relative">
        {page === "founders" ? (
          <section className="px-6 pb-24 pt-20 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">Meet the Staff</p>
                <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl lg:text-6xl">Leadership behind Pack Life.</h1>
                <p className="mt-5 text-lg leading-8 text-[#DCE7F2]">Meet the people responsible for protecting the mission, guiding operations, and building Pack Life the right way.</p>
              </div>
              <div className="mt-14 grid gap-6 md:grid-cols-3">
                {founderCards.map((person) => (
                  <div key={person.name} className={`rounded-[1.9rem] border border-[#2E5B86]/80 ${CardGradient} p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_28px_56px_rgba(0,0,0,0.22)]`}>
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#E0C15A_0%,#D4AF37_100%)] text-lg font-black text-[#102944] shadow-[0_10px_20px_rgba(212,175,55,0.18)]">{person.initials}</div>
                    <h3 className="mt-6 text-2xl font-bold text-white">{person.name}</h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#E0C15A]">{person.role}</p>
                    <p className="mt-5 text-sm leading-8 text-[#B8C9DB]">{person.bio}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : page === "apply" ? (
          <section className="px-6 pb-24 pt-20 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-6xl">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">Applications</p>
                <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl lg:text-6xl">Apply with clarity.</h1>
                <p className="mt-5 text-lg leading-8 text-[#DCE7F2]">Start with the path that fits you best. Pack Life reviews every application with structure, honesty, and long-term placement success in mind.</p>
              </div>
              <div className="mt-14 grid gap-6 lg:grid-cols-2">
                <div className={`rounded-[2rem] border border-[#2E5B86]/80 ${CardGradient} p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">Adoption Application</p>
                  <h2 className="mt-4 text-3xl font-black text-white">Find the right fit, not the fastest.</h2>
                  <p className="mt-5 text-[#DCE7F2] leading-8">Our adoption process is built around structure, leadership, environment, and long-term success. Start here if you want to be considered for future placement opportunities.</p>
                  <div className="mt-7 flex flex-wrap gap-4">
                    <a href="/PackLife_Adoption_Application.pdf" target="_blank" className="rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] transition duration-200 hover:-translate-y-0.5 hover:bg-[#E0C15A]">Open Adoption Application</a>
                  </div>
                </div>
                <div className={`rounded-[2rem] border border-[#2E5B86]/80 ${DarkGradient} p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">Foster Application</p>
                  <h2 className="mt-4 text-3xl font-black text-white">Step in and help build stability.</h2>
                  <p className="mt-5 text-[#DCE7F2] leading-8">Fosters are a major part of the Pack Life process. Start here if you want to help provide structure, decompression, and a stable bridge toward the right long-term placement.</p>
                  <div className="mt-7 flex flex-wrap gap-4">
                    <a href="/PackLife_Foster_Application.pdf" target="_blank" className="rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] transition duration-200 hover:-translate-y-0.5 hover:bg-[#E0C15A]">Open Foster Application</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : page === "contact" ? (
          <section className="px-6 pb-24 pt-20 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">Contact Us</p>
                <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl lg:text-6xl">Get in touch with Pack Life.</h1>
                <p className="mt-5 text-lg leading-8 text-[#DCE7F2]">Reach out for rescue inquiries, adoption questions, partnerships, or support. We respond with clarity and purpose.</p>
              </div>

              <div className="mt-14 grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className={`self-start rounded-[2rem] border border-[#2E5B86]/80 ${CardGradient} p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-2xl font-bold text-white">Direct Contact</h2>
                      <p className="mt-3 max-w-[30rem] text-[#DCE7F2] leading-7">
                        Send a message below or use the direct contact details for questions, support, or partnership inquiries.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-3 text-right">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E0C15A]">Response Time</p>
                      <p className="mt-2 text-sm font-bold text-white">24–48 hours</p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-[#2E5B86]/70 bg-[rgba(255,255,255,0.03)] p-5">
                      <div className="flex items-center gap-3">
                        <Mail className="text-[#E0C15A]" />
                        <div>
                          <p className="text-xs uppercase tracking-[0.26em] text-[#8FA6BE]">Email</p>
                          <p className="mt-2 font-semibold text-white">info@packlifedogrescue.org</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#2E5B86]/70 bg-[rgba(255,255,255,0.03)] p-5">
                      <div className="flex items-center gap-3">
                        <Phone className="text-[#E0C15A]" />
                        <div>
                          <p className="text-xs uppercase tracking-[0.26em] text-[#8FA6BE]">Phone</p>
                          <p className="mt-2 font-semibold text-white">717-706-4748</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`rounded-[2rem] border border-[#2E5B86]/80 ${DarkGradient} p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}>
                  <h2 className="text-2xl font-bold text-white">Send a Message</h2>
                  <p className="mt-3 text-[#DCE7F2] leading-8">Use this form to reach Pack Life directly.</p>
                  {showContactThankYou ? (
                    <div className="mt-6 rounded-[1.6rem] border border-[#D4AF37]/20 bg-[linear-gradient(180deg,rgba(212,175,55,0.10)_0%,rgba(212,175,55,0.05)_100%)] p-6 shadow-[0_18px_34px_rgba(0,0,0,0.10)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">Message Sent</p>
                      <h3 className="mt-3 text-2xl font-black text-white">Thank you for reaching out.</h3>
                    </div>
                  ) : (
                    <form className="mt-6 space-y-4" onSubmit={handleContactSubmit}>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block"><span className="mb-2 block text-sm font-medium text-[#DCE7F2]">First Name</span><input type="text" name="First Name" required className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-white/[0.05]" /></label>
                        <label className="block"><span className="mb-2 block text-sm font-medium text-[#DCE7F2]">Last Name</span><input type="text" name="Last Name" required className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-white/[0.05]" /></label>
                      </div>
                      <label className="block"><span className="mb-2 block text-sm font-medium text-[#DCE7F2]">Email</span><input type="email" name="Email" required className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-white/[0.05]" /></label>
                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[#DCE7F2]">Inquiry Type</span>
                        <select value={selectedInquiryType} onChange={(e) => setSelectedInquiryType(e.target.value)} name="Inquiry Type" required className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-white/[0.05]">
                          <option value="">Select inquiry type</option>
                          <option value="Adoption">Adoption</option>
                          <option value="Foster">Foster</option>
                          <option value="Surrender / Intake">Surrender / Intake</option>
                          <option value="Partnership / Collaboration">Partnership / Collaboration</option>
                          <option value="General">General</option>
                        </select>
                      </label>
                      {inquiryGuidance && <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 px-4 py-4 text-sm leading-7 text-[#DCE7F2]">{inquiryGuidance}</div>}
                      {selectedInquiryType === "Adoption" && (
                        <>
                          <label className="block"><span className="mb-2 block text-sm font-medium text-[#DCE7F2]">Housing Type</span><select value={housing} onChange={(e) => setHousing(e.target.value)} name="Housing" className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white"><option value="">Select</option><option value="House">House</option><option value="Apartment">Apartment</option></select></label>
                          <label className="block"><span className="mb-2 block text-sm font-medium text-[#DCE7F2]">Dog Experience</span><select value={experience} onChange={(e) => setExperience(e.target.value)} name="Experience" className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white"><option value="">Select</option><option value="Experienced">Experienced</option><option value="Some">Some Experience</option><option value="None">No Experience</option></select></label>
                          <div className="text-sm text-[#E0C15A]">Intake Score: {intakeScore}</div>
                        </>
                      )}
                      <label className="block"><span className="mb-2 block text-sm font-medium text-[#DCE7F2]">Subject</span><input type="text" name="Subject" className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-white/[0.05]" /></label>
                      <label className="block"><span className="mb-2 block text-sm font-medium text-[#DCE7F2]">Message</span><textarea rows={6} name="Message" required className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-white/[0.05]" /></label>
                      <div className="flex items-center justify-between gap-4 pt-2">
                        <div><p className="text-sm leading-7 text-[#8FA6BE]">We typically respond within 24–48 hours.</p>{contactStatus === "error" && <p className="text-sm font-medium text-red-300">Something went wrong while sending. Please try again.</p>}</div>
                        <button type="submit" disabled={contactStatus === "sending"} className="rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] transition duration-200 hover:-translate-y-0.5 hover:bg-[#E0C15A] disabled:cursor-not-allowed disabled:opacity-70">{contactStatus === "sending" ? "Sending..." : "Send Message"}</button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : (
          <>
            <section className="px-6 pb-24 pt-16 lg:px-8 lg:pt-20">
              <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">Built on Structure. Driven by Purpose. Committed for Life.</div>
                  <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[0.98] text-white sm:text-5xl lg:text-[5rem]">Rescue done the right way.</h1>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#DCE7F2]">Structure. Decompression. Real rehabilitation. Built for long-term outcomes, not rushed placements.</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a href="#contact" onClick={() => setPage("contact")} className="inline-flex items-center gap-2 rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] transition duration-200 hover:-translate-y-0.5 hover:bg-[#E0C15A]">Donate <ArrowUpRight className="h-4 w-4" /></a>
                    <a href="/PackLife_Adoption_Application.pdf" target="_blank" className="rounded-2xl border border-[#3B6C99] px-6 py-3 font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/5 hover:text-[#E0C15A]">Adoption Application</a>
                    <a href="/PackLife_Foster_Application.pdf" target="_blank" className="rounded-2xl border border-[#3B6C99] px-6 py-3 font-medium text-white transition duration-200 hover:-translate-y-0.5 hover:bg-white/5 hover:text-[#E0C15A]">Foster Application</a>
                  </div>
                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {standards.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.title} className="rounded-[1.5rem] border border-[#2E5B86]/80 bg-[linear-gradient(180deg,rgba(24,58,91,0.76)_0%,rgba(16,41,68,0.88)_100%)] p-5 shadow-[0_16px_30px_rgba(0,0,0,0.12)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(0,0,0,0.16)]">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/18 bg-[#D4AF37]/10 text-[#E0C15A]"><Icon className="h-4 w-4" /></div>
                          <h3 className="mt-4 font-bold text-white">{item.title}</h3>
                          <p className="mt-2 text-sm leading-7 text-[#B8C9DB]">{item.text}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_top_right,rgba(224,193,90,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(59,108,153,0.20),transparent_30%)] blur-2xl" />
                  <div className="relative overflow-hidden rounded-[2.25rem] border border-[#2E5B86]/80 bg-[linear-gradient(180deg,rgba(24,58,91,0.82)_0%,rgba(16,41,68,0.96)_100%)] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.22)]">
                    <div className="rounded-[1.75rem] border border-[#D4AF37]/18 bg-[linear-gradient(180deg,rgba(18,46,74,0.98)_0%,rgba(14,35,56,0.98)_100%)] p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#E0C15A]">Pack Life Standard</p>
                          <h2 className="mt-3 text-2xl font-black text-white">We do not place dogs. We build them first.</h2>
                        </div>
                        <div className="rounded-2xl border border-[#D4AF37]/18 bg-[#D4AF37]/10 p-3 text-[#E0C15A]"><Compass className="h-5 w-5" /></div>
                      </div>
                      <div className="mt-8 grid gap-4">
                        {[
                          ["Decompression", "Lower stimulation. Let the dog reset. Trust is built before expectations are applied."],
                          ["Structure", "Clear rules. Calm leadership. Predictability that removes stress and confusion."],
                          ["Placement", "Placed when ready, not when convenient. The outcome matters more than speed."],
                        ].map(([title, text]) => (
                          <div key={title} className="rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] p-5 transition duration-200 hover:bg-white/[0.045]">
                            <p className="text-sm font-bold text-white">{title}</p>
                            <p className="mt-2 text-sm leading-7 text-[#B8C9DB]">{text}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      {[
                        ["Approach", "Intentional"],
                        ["Focus", "Working breeds"],
                        ["Outcome", "Long-term"],
                      ].map(([label, value]) => (
                        <div key={label} className="rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] p-4 text-center">
                          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8FA6BE]">{label}</p>
                          <p className="mt-2 text-sm font-bold text-white">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="about" className="px-6 py-24 lg:px-8">
              <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
                <div className={`rounded-[2.25rem] border border-[#2E5B86]/80 ${CardGradient} p-8 shadow-[0_24px_50px_rgba(0,0,0,0.18)] lg:p-10`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">About Pack Life Dog Rescue And Rehabilitation</p>
                  <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-[2.9rem]">This is not a flip and place rescue model.</h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#DCE7F2]">Pack Life Dog Rescue And Rehabilitation is built around decompression, observation, structure, and honest rehabilitation. Many dogs enter rescue overstimulated, misunderstood, or never given a fair chance. We slow the process down so stability comes first and placement actually lasts.</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    ["Observation First", "Health, body language, stress level, arousal, and recovery are evaluated before pressure is added."],
                    ["Foundation Work", "Dogs begin with calm routines, thresholds, crate decompression, leash neutrality, and structure."],
                    ["Behavior Matters", "We focus on regulation, neutrality, and functional behavior, not surface obedience alone."],
                    ["Fit Over Speed", "Every placement is approached with long-term success in mind, not urgency."],
                  ].map(([title, text]) => (
                    <div key={title} className={`rounded-[1.6rem] border border-[#2E5B86]/80 ${DarkGradient} p-6 shadow-[0_16px_34px_rgba(0,0,0,0.14)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]`}>
                      <h3 className="text-lg font-bold text-white">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#B8C9DB]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section id="dogs" className="px-6 py-8 lg:px-8">
              <div className={`mx-auto max-w-5xl rounded-[2.25rem] border border-[#2E5B86]/80 ${CardGradient} p-10 text-center shadow-[0_22px_46px_rgba(0,0,0,0.16)]`}>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">Available Dogs</p>
                <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">No dogs available at this time.</h2>
                <p className="mt-4 mx-auto max-w-2xl text-lg leading-8 text-[#B8C9DB]">We are currently preparing and evaluating dogs for placement. Submit an application now to be considered when the right dog becomes available.</p>
                <div className="mt-6 flex justify-center gap-4">
                  <a href="/PackLife_Adoption_Application.pdf" target="_blank" className="rounded-2xl bg-[#D4AF37] px-5 py-3 font-bold text-[#102944] transition duration-200 hover:-translate-y-0.5 hover:bg-[#E0C15A]">Adoption Application</a>
                </div>
              </div>
            </section>

            <section id="philosophy" className="px-6 py-24 lg:px-8">
              <div className="mx-auto max-w-5xl">
                <div className="text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">Philosophy</p>
                  <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">Principles that drive every decision.</h2>
                  <p className="mt-4 mx-auto max-w-2xl text-[#DCE7F2] leading-8">Click each principle below to learn how Pack Life approaches rehabilitation, structure, and placement.</p>
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-2">
                  {philosophyItems.map((item) => {
                    const isOpen = openPhilosophy === item.title;
                    return (
                      <button key={item.title} type="button" onClick={() => setOpenPhilosophy(isOpen ? null : item.title)} className={`group text-left rounded-[1.6rem] border p-6 transition-all duration-300 hover:-translate-y-1 ${isOpen ? "border-[#D4AF37] bg-[linear-gradient(180deg,rgba(24,58,91,0.97)_0%,rgba(16,41,68,1)_100%)] shadow-[0_0_0_1px_rgba(212,175,55,0.35),0_22px_55px_rgba(212,175,55,0.16)]" : "border-[#2E5B86]/80 bg-[linear-gradient(180deg,rgba(18,46,74,0.96)_0%,rgba(14,35,56,0.98)_100%)] hover:bg-white/5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]"}`}>
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-bold text-white">{item.title}</h3>
                            <p className={`mt-2 text-sm transition-colors duration-300 ${isOpen ? "text-[#DCE7F2]" : "text-[#B8C9DB]"}`}>{item.short}</p>
                          </div>
                          <div className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? "border-[#D4AF37]/40 bg-[#D4AF37]/10 shadow-[0_0_18px_rgba(212,175,55,0.18)]" : "border-[#2E5B86]/70 bg-white/[0.03]"}`}>
                            <ChevronDown className={`h-4 w-4 text-[#E0C15A] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`} />
                          </div>
                        </div>
                        {isOpen && (
                          <div className="mt-5 border-t border-[#2E5B86] pt-5">
                            <p className="leading-7 text-[#DCE7F2]">{item.detail}</p>
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
