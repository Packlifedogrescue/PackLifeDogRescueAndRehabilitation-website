import { useEffect, useMemo, useState } from "react";
import {
  ChevronDown,
  ArrowUpRight,
  Shield,
  HeartHandshake,
  PawPrint,
  Phone,
  Mail,
  Compass,
  Heart,
  HandCoins,
  Menu,
  X,
  Sparkles,
  HandHeart,
  Megaphone,
} from "lucide-react";

export default function PackLifeWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [openPhilosophy, setOpenPhilosophy] = useState(null);
  const [page, setPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [contactStatus, setContactStatus] = useState("idle");
  const [showContactThankYou, setShowContactThankYou] = useState(false);
  const [selectedInquiryType, setSelectedInquiryType] = useState("");

  const [showDonateModal, setShowDonateModal] = useState(false);
  const [notifyEmail, setNotifyEmail] = useState("");
  const [notifyStatus, setNotifyStatus] = useState("idle");

  const [pageNotifyEmail, setPageNotifyEmail] = useState("");
  const [pageNotifyStatus, setPageNotifyStatus] = useState("idle");

  const navItems = useMemo(
    () => [
      ["about", "About"],
      ["dogs", "Available Dogs"],
      ["philosophy", "Philosophy"],
      ["support", "Support"],
      ["donate", "Donate"],
      ["contact", "Contact"],
    ],
    []
  );

  const philosophyItems = [
    {
      title: "Clarity",
      short: "Clear rules. Clear communication. No confusion.",
      detail:
        "We remove noise and guesswork. Dogs get consistent communication, clear expectations, and calm direction so they can regulate faster and build trust in the handler, the environment, and the routine around them.",
    },
    {
      title: "Structure",
      short: "Structure comes first. Freedom comes after.",
      detail:
        "We lead with thresholds, crate decompression, leash neutrality, and calm routines. Structure creates predictability, lowers stress, and sets the foundation for everything that follows.",
    },
    {
      title: "Stability",
      short: "We build outcomes that hold, not quick fixes.",
      detail:
        "We do not rush placement. Dogs move forward when they are ready for real life. Stability matters more than speed because rushed rescue creates setbacks for both dog and adopter.",
    },
    {
      title: "Observation",
      short: "Watch first. Label later.",
      detail:
        "We assess health, stress, arousal, environment, and recovery before deciding what a dog needs. Many dogs are mislabeled when what they actually need is decompression, clarity, and the right environment.",
    },
  ];

  const standards = [
    {
      icon: Shield,
      title: "Structured Intake",
      text: "We slow everything down and read the dog first. No assumptions. No pressure. Just clarity before action.",
    },
    {
      icon: PawPrint,
      title: "Behavioral Rehab",
      text: "We build calm, neutral, functional dogs. Not tricks. Not temporary fixes. Behavior that actually holds.",
    },
    {
      icon: HeartHandshake,
      title: "Right Placement",
      text: "We match dogs with intention. No rushing. No guessing. Just long-term success done the right way.",
    },
  ];

  const founderCards = [
    {
      name: "KayLee Conkling",
      role: "President / Co-Founder",
      initials: "KC",
      bio: "Oversees mission direction, rescue operations, placement standards, and organizational leadership.",
    },
    {
      name: "Brett Miller",
      role: "Vice President / Co-Founder",
      initials: "BM",
      bio: "Supports operations, structure-based rehabilitation, strategic growth, and long-term rescue planning.",
    },
    {
      name: "Cameron Carroll",
      role: "Treasurer & Secretary",
      initials: "C",
      bio: "Supports financial oversight, records, documentation, board coordination, and organizational administration.",
    },
  ];

  useEffect(() => {
    const applyHashRoute = () => {
      const hash = window.location.hash.replace("#", "");
      if (
        [
          "founders",
          "apply",
          "contact",
          "donate",
          "philosophy",
          "about",
          "dogs",
          "support",
        ].includes(hash)
      ) {
        setPage(hash);
        return;
      }
      setPage("home");
    };

    applyHashRoute();
    window.addEventListener("hashchange", applyHashRoute);

    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", applyHashRoute);
    };
  }, []);

  useEffect(() => {
    const pageTitles = {
      home: "Pack Life Dog Rescue And Rehabilitation",
      about: "About | Pack Life Dog Rescue And Rehabilitation",
      dogs: "Available Dogs | Pack Life Dog Rescue And Rehabilitation",
      philosophy: "Philosophy | Pack Life Dog Rescue And Rehabilitation",
      support: "Support | Pack Life Dog Rescue And Rehabilitation",
      donate: "Donate | Pack Life Dog Rescue And Rehabilitation",
      contact: "Contact | Pack Life Dog Rescue And Rehabilitation",
      apply: "Applications | Pack Life Dog Rescue And Rehabilitation",
      founders: "Founders | Pack Life Dog Rescue And Rehabilitation",
    };

    const pageDescriptions = {
      home: "Pack Life Dog Rescue And Rehabilitation is built on structure, decompression, behavioral rehab, and long-term placement success.",
      about:
        "Learn how Pack Life Dog Rescue And Rehabilitation approaches structure, stability, and honest rehabilitation.",
      dogs: "View current dog availability and apply for future placement opportunities.",
      philosophy:
        "Explore the Pack Life Dog Rescue And Rehabilitation philosophy: clarity, structure, stability, and observation.",
      support:
        "Support Pack Life Dog Rescue And Rehabilitation through donations, monthly giving, partnerships, and launch list updates.",
      donate:
        "Help fund structure-based rehabilitation, veterinary care, and long-term placement success at Pack Life Dog Rescue And Rehabilitation.",
      contact:
        "Contact Pack Life Dog Rescue And Rehabilitation for adoption, foster, intake, and partnership inquiries.",
      apply:
        "Submit adoption or foster applications with Pack Life Dog Rescue And Rehabilitation.",
      founders:
        "Meet the leadership behind Pack Life Dog Rescue And Rehabilitation.",
    };

    document.title = pageTitles[page] || pageTitles.home;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", pageDescriptions[page] || pageDescriptions.home);

    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute("content", pageTitles[page] || pageTitles.home);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute(
      "content",
      pageDescriptions[page] || pageDescriptions.home
    );

    let themeColor = document.querySelector('meta[name="theme-color"]');
    if (!themeColor) {
      themeColor = document.createElement("meta");
      themeColor.setAttribute("name", "theme-color");
      document.head.appendChild(themeColor);
    }
    themeColor.setAttribute("content", "#122E4A");
  }, [page]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen || showDonateModal ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, showDonateModal]);

  const inquiryGuidance =
    selectedInquiryType === "Adoption"
      ? "Adoption inquiries are best supported when an application is completed fully and honestly. Clear details help us review fit the right way."
      : selectedInquiryType === "Foster"
      ? "Foster inquiries should reflect the environment, structure, and availability you can realistically provide. Stability matters."
      : selectedInquiryType === "Surrender / Intake"
      ? "Please understand Pack Life Dog Rescue And Rehabilitation operates on a structured intake basis and may not always have immediate availability. Include the dog’s age, breed, behavior, medical needs, and urgency."
      : selectedInquiryType === "Partnership / Collaboration"
      ? "Use this option for trainers, veterinarians, donors, sponsors, businesses, or collaboration opportunities that align with the Pack Life Dog Rescue And Rehabilitation mission."
      : "";

  const goToPage = (nextPage) => {
    setPage(nextPage);
    setMobileMenuOpen(false);
    window.location.hash = nextPage === "home" ? "" : nextPage;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    setContactStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const inquiryType = formData.get("Inquiry Type") || "General";

    let subject = "New Pack Life Dog Rescue And Rehabilitation Inquiry";
    let endpoint = "https://formsubmit.co/ajax/info@packlifedogrescue.org";

    if (inquiryType === "Adoption") {
      subject = "New Adoption Inquiry - Pack Life Dog Rescue And Rehabilitation";
      endpoint = "https://formsubmit.co/ajax/adopt@packlifedogrescue.org";
    } else if (inquiryType === "Foster") {
      subject = "New Foster Inquiry - Pack Life Dog Rescue And Rehabilitation";
      endpoint = "https://formsubmit.co/ajax/foster@packlifedogrescue.org";
    } else if (inquiryType === "Surrender / Intake") {
      subject =
        "New Surrender / Intake Inquiry - Pack Life Dog Rescue And Rehabilitation";
      endpoint = "https://formsubmit.co/ajax/intake@packlifedogrescue.org";
    } else if (inquiryType === "Partnership / Collaboration") {
      subject =
        "New Partnership / Collaboration Inquiry - Pack Life Dog Rescue And Rehabilitation";
    }

    formData.set("_subject", subject);
    formData.set("_captcha", "false");
    formData.set("_template", "table");

    const email = formData.get("Email");
    if (email) formData.set("_replyto", String(email));

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      setContactStatus("success");
      setShowContactThankYou(true);
      form.reset();
      setSelectedInquiryType("");
    } catch {
      setContactStatus("error");
    }
  };

  const sendLaunchWaitlist = async (email) => {
    const formData = new FormData();
    formData.set("Email", email);
    formData.set("Interest", "Donation Launch Waitlist");
    formData.set(
      "Message",
      "This supporter wants to be notified when Pack Life Dog Rescue And Rehabilitation donations go live."
    );
    formData.set(
      "_subject",
      "New Donation Launch Waitlist Signup - Pack Life Dog Rescue And Rehabilitation"
    );
    formData.set("_captcha", "false");
    formData.set("_template", "table");
    formData.set("_replyto", email);

    const response = await fetch(
      "https://formsubmit.co/ajax/info@packlifedogrescue.org",
      {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      }
    );

    if (!response.ok) throw new Error("Waitlist submission failed");
  };

  const handleNotifySubmit = async (event) => {
    event.preventDefault();
    setNotifyStatus("sending");
    try {
      await sendLaunchWaitlist(notifyEmail);
      setNotifyStatus("success");
      setNotifyEmail("");
    } catch {
      setNotifyStatus("error");
    }
  };

  const handlePageNotifySubmit = async (event) => {
    event.preventDefault();
    setPageNotifyStatus("sending");
    try {
      await sendLaunchWaitlist(pageNotifyEmail);
      setPageNotifyStatus("success");
      setPageNotifyEmail("");
    } catch {
      setPageNotifyStatus("error");
    }
  };

  const openDonateModal = () => {
    setNotifyStatus("idle");
    setShowDonateModal(true);
  };

  const closeDonateModal = () => {
    setShowDonateModal(false);
    setNotifyStatus("idle");
  };

  const CardGradient =
    "bg-[linear-gradient(180deg,rgba(24,58,91,0.92)_0%,rgba(16,41,68,0.98)_100%)]";
  const DarkGradient =
    "bg-[linear-gradient(180deg,rgba(18,46,74,0.96)_0%,rgba(14,35,56,0.98)_100%)]";

  const SectionIntro = ({ eyebrow, title, text }) => (
    <div className="mx-auto max-w-3xl text-center animate-[fadeIn_0.45s_ease]">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
        {eyebrow}
      </p>
      <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
        {title}
      </h1>
      <p className="mt-5 text-lg leading-8 text-[#DCE7F2]">{text}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(224,193,90,0.10),transparent_18%),linear-gradient(180deg,#122E4A_0%,#102944_45%,#0E2338_100%)] text-[#F4F8FC] selection:bg-[#D4AF37]/30 [@keyframes_fadeIn]:from{opacity:0;transform:translateY(12px)} [@keyframes_fadeIn]:to{opacity:1;transform:translateY(0)}">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(224,193,90,0.10),transparent_18%),radial-gradient(circle_at_bottom_left,rgba(59,108,153,0.14),transparent_22%)]" />

      <header className="sticky top-0 z-50 px-4 pt-4">
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 lg:px-6 ${
            scrolled
              ? "border-[#D4AF37]/20 bg-[#102944]/88 shadow-[0_18px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl"
              : "border-[#2E5B86]/70 bg-[#122E4A]/72 shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur-lg"
          }`}
        >
          <button
            onClick={() => goToPage("home")}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#E0C15A_0%,#D4AF37_100%)] text-sm font-black tracking-[0.2em] text-[#102944] shadow-[0_10px_20px_rgba(212,175,55,0.18)]">
              PL
            </div>
            <div>
              <p className="text-[11px] tracking-[0.32em] text-[#E0C15A]">
                PACK LIFE
              </p>
              <p className="text-sm font-bold text-white">
                Dog Rescue And Rehabilitation
              </p>
            </div>
          </button>

          <nav className="hidden items-center gap-2 rounded-full border border-white/8 bg-white/[0.03] p-2 lg:flex">
            {navItems.map(([id, label]) => (
              <button
                key={id}
                onClick={() => goToPage(id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  page === id
                    ? "bg-white/10 text-[#E0C15A] shadow-[inset_0_0_0_1px_rgba(224,193,90,0.18)]"
                    : "text-[#DCE7F2] hover:bg-white/5 hover:text-[#E0C15A]"
                }`}
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => goToPage("apply")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                page === "apply"
                  ? "bg-white/10 text-[#E0C15A] shadow-[inset_0_0_0_1px_rgba(224,193,90,0.18)]"
                  : "text-[#DCE7F2] hover:bg-white/5 hover:text-[#E0C15A]"
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => goToPage("founders")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                page === "founders"
                  ? "bg-white/10 text-[#E0C15A] shadow-[inset_0_0_0_1px_rgba(224,193,90,0.18)]"
                  : "text-[#DCE7F2] hover:bg-white/5 hover:text-[#E0C15A]"
              }`}
            >
              Founders
            </button>
          </nav>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#2E5B86]/80 bg-white/[0.03] text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm lg:hidden">
          <div className="absolute right-0 top-0 h-full w-[88%] max-w-sm border-l border-[#2E5B86]/80 bg-[linear-gradient(180deg,#122E4A_0%,#0E2338_100%)] p-6 shadow-[0_24px_50px_rgba(0,0,0,0.3)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] tracking-[0.32em] text-[#E0C15A]">
                  PACK LIFE
                </p>
                <p className="mt-1 text-sm font-bold text-white">Navigation</p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] text-white"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 space-y-3">
              {[
                ["home", "Home"],
                ["about", "About"],
                ["dogs", "Available Dogs"],
                ["philosophy", "Philosophy"],
                ["support", "Support"],
                ["donate", "Donate"],
                ["contact", "Contact"],
                ["apply", "Applications"],
                ["founders", "Founders"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => goToPage(id)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition ${
                    page === id
                      ? "border-[#D4AF37]/30 bg-[#D4AF37]/10 text-[#E0C15A]"
                      : "border-[#2E5B86]/70 bg-white/[0.03] text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <span className="font-medium">{label}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E0C15A]">
                Support Opening Soon
              </p>
              <p className="mt-3 text-sm leading-7 text-[#DCE7F2]">
                Join the launch list and we’ll let you know when support and
                donation options go live for Pack Life Dog Rescue And Rehabilitation.
              </p>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDonateModal();
                }}
                className="mt-4 w-full rounded-2xl bg-[#D4AF37] px-5 py-3 font-bold text-[#102944]"
              >
                Join Launch List
              </button>
            </div>
          </div>
        </div>
      )}

      <main id="top" className="relative">
        {page === "founders" ? (
          <section className="px-6 pb-24 pt-20 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-7xl">
              <SectionIntro
                eyebrow="Meet the Staff"
                title="Leadership behind Pack Life Dog Rescue And Rehabilitation."
                text="Meet the people responsible for protecting the mission, guiding operations, and building Pack Life Dog Rescue And Rehabilitation the right way."
              />

              <div className="mt-14 grid gap-6 md:grid-cols-3">
                {founderCards.map((person) => (
                  <div
                    key={person.name}
                    className={`${CardGradient} rounded-[1.9rem] border border-[#2E5B86]/80 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_rgba(0,0,0,0.22)]`}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#E0C15A_0%,#D4AF37_100%)] text-lg font-black text-[#102944] shadow-[0_10px_20px_rgba(212,175,55,0.18)]">
                      {person.initials}
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {person.name}
                    </h3>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#E0C15A]">
                      {person.role}
                    </p>
                    <p className="mt-5 text-sm leading-8 text-[#B8C9DB]">
                      {person.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : page === "apply" ? (
          <section className="px-6 pb-24 pt-20 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-6xl">
              <SectionIntro
                eyebrow="Applications"
                title="Apply with clarity."
                text="Start with the path that fits you best. Pack Life Dog Rescue And Rehabilitation reviews every application with structure, honesty, and long-term placement success in mind."
              />

              <div className="mt-14 grid gap-6 lg:grid-cols-2">
                <div className={`${CardGradient} rounded-[2rem] border border-[#2E5B86]/80 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
                    Adoption Application
                  </p>
                  <h2 className="mt-4 text-3xl font-black text-white">
                    Find the right fit, not the fastest.
                  </h2>
                  <p className="mt-5 text-[#DCE7F2] leading-8">
                    Our adoption process is built around structure, leadership,
                    environment, and long-term success. Start here if you want
                    to be considered for future placement opportunities.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-4">
                    <a
                      href="/PackLife_Adoption_Application.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0C15A]"
                    >
                      Open Adoption Application
                    </a>
                  </div>
                </div>

                <div className={`${DarkGradient} rounded-[2rem] border border-[#2E5B86]/80 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
                    Foster Application
                  </p>
                  <h2 className="mt-4 text-3xl font-black text-white">
                    Step in and help build stability.
                  </h2>
                  <p className="mt-5 text-[#DCE7F2] leading-8">
                    Fosters are a major part of the Pack Life Dog Rescue And
                    Rehabilitation process. Start here if you want to help
                    provide structure, decompression, and a stable bridge toward
                    the right long-term placement.
                  </p>
                  <div className="mt-7 flex flex-wrap gap-4">
                    <a
                      href="/PackLife_Foster_Application.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0C15A]"
                    >
                      Open Foster Application
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : page === "contact" ? (
          <section className="px-6 pb-24 pt-20 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-5xl">
              <SectionIntro
                eyebrow="Contact Us"
                title="Get in touch with Pack Life Dog Rescue And Rehabilitation."
                text="Reach out for rescue inquiries, adoption questions, partnerships, or support. We respond with clarity and purpose."
              />

              <div className="mt-14 grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className={`${CardGradient} self-start rounded-[2rem] border border-[#2E5B86]/80 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}>
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div className="min-w-0">
                      <h2 className="text-2xl font-bold text-white">
                        Direct Contact
                      </h2>
                      <p className="mt-3 max-w-[30rem] text-[#DCE7F2] leading-7">
                        Send a message below or use the direct contact details
                        for questions, support, or partnership inquiries.
                      </p>
                    </div>

                    <div className="w-fit rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-3 text-right">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E0C15A]">
                        Response Time
                      </p>
                      <p className="mt-2 text-sm font-bold text-white">
                        24–48 hours
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-4 xl:grid-cols-2">
                    <div className="min-w-0 rounded-2xl border border-[#2E5B86]/70 bg-[rgba(255,255,255,0.03)] p-5">
                      <div className="flex items-start gap-3">
                        <Mail className="mt-0.5 shrink-0 text-[#E0C15A]" />
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-[0.26em] text-[#8FA6BE]">
                            Email
                          </p>
                          <p className="mt-2 break-words text-[0.95rem] font-semibold leading-7 text-white">
                            info@packlifedogrescue.org
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="min-w-0 rounded-2xl border border-[#2E5B86]/70 bg-[rgba(255,255,255,0.03)] p-5">
                      <div className="flex items-center gap-3">
                        <Phone className="shrink-0 text-[#E0C15A]" />
                        <div className="min-w-0">
                          <p className="text-xs uppercase tracking-[0.26em] text-[#8FA6BE]">
                            Phone
                          </p>
                          <p className="mt-2 text-[0.95rem] font-semibold leading-7 text-white">
                            717-706-4748
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${DarkGradient} rounded-[2rem] border border-[#2E5B86]/80 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}>
                  <h2 className="text-2xl font-bold text-white">
                    Send a Message
                  </h2>
                  <p className="mt-3 text-[#DCE7F2] leading-8">
                    Use this form to reach Pack Life Dog Rescue And Rehabilitation directly.
                  </p>

                  {showContactThankYou ? (
                    <div className="mt-6 rounded-[1.6rem] border border-[#D4AF37]/20 bg-[linear-gradient(180deg,rgba(212,175,55,0.10)_0%,rgba(212,175,55,0.05)_100%)] p-6 shadow-[0_18px_34px_rgba(0,0,0,0.10)]">
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
                        Message Sent
                      </p>
                      <h3 className="mt-3 text-2xl font-black text-white">
                        Thank you for reaching out.
                      </h3>
                      <p className="mt-4 text-[#DCE7F2] leading-8">
                        Your message has been submitted to Pack Life Dog Rescue
                        And Rehabilitation. We typically respond within 24–48
                        hours.
                      </p>

                      <div className="mt-6 flex flex-wrap gap-4">
                        <button
                          type="button"
                          onClick={() => {
                            setShowContactThankYou(false);
                            setContactStatus("idle");
                          }}
                          className="rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0C15A]"
                        >
                          Send Another Message
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form className="mt-6 space-y-4" onSubmit={handleContactSubmit}>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="block">
                          <span className="mb-2 block text-sm font-medium text-[#DCE7F2]">
                            First Name
                          </span>
                          <input
                            type="text"
                            name="First Name"
                            required
                            className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-white/[0.05]"
                          />
                        </label>
                        <label className="block">
                          <span className="mb-2 block text-sm font-medium text-[#DCE7F2]">
                            Last Name
                          </span>
                          <input
                            type="text"
                            name="Last Name"
                            required
                            className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-white/[0.05]"
                          />
                        </label>
                      </div>

                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[#DCE7F2]">
                          Email
                        </span>
                        <input
                          type="email"
                          name="Email"
                          required
                          className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-white/[0.05]"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[#DCE7F2]">
                          Inquiry Type
                        </span>
                        <select
                          value={selectedInquiryType}
                          onChange={(e) => setSelectedInquiryType(e.target.value)}
                          name="Inquiry Type"
                          required
                          className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-white/[0.05]"
                        >
                          <option value="">Select inquiry type</option>
                          <option value="Adoption">Adoption</option>
                          <option value="Foster">Foster</option>
                          <option value="Surrender / Intake">
                            Surrender / Intake
                          </option>
                          <option value="Partnership / Collaboration">
                            Partnership / Collaboration
                          </option>
                          <option value="General">General</option>
                        </select>
                      </label>

                      {inquiryGuidance && (
                        <div className="rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 px-4 py-4 text-sm leading-7 text-[#DCE7F2]">
                          {inquiryGuidance}
                        </div>
                      )}

                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[#DCE7F2]">
                          Subject
                        </span>
                        <input
                          type="text"
                          name="Subject"
                          className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-white/[0.05]"
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[#DCE7F2]">
                          Message
                        </span>
                        <textarea
                          rows={6}
                          name="Message"
                          required
                          className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition focus:border-[#D4AF37]/40 focus:bg-white/[0.05]"
                        />
                      </label>

                      <div className="flex items-center justify-between gap-4 pt-2">
                        <div>
                          <p className="text-sm leading-7 text-[#8FA6BE]">
                            We typically respond within 24–48 hours.
                          </p>
                          {contactStatus === "error" && (
                            <p className="text-sm font-medium text-red-300">
                              Something went wrong while sending. Please try again.
                            </p>
                          )}
                        </div>

                        <button
                          type="submit"
                          disabled={contactStatus === "sending"}
                          className="rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0C15A] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {contactStatus === "sending" ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        ) : page === "donate" ? (
          <section className="px-6 pb-24 pt-20 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-6xl">
              <SectionIntro
                eyebrow="Donate"
                title="Support Pack Life Dog Rescue And Rehabilitation."
                text="Help fund structure-based rehabilitation, veterinary care, and long-term placement success. Donations are opening soon."
              />

              <div className="mt-14 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <div className={`${CardGradient} rounded-[2rem] border border-[#2E5B86]/80 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
                    Why Support Pack Life Dog Rescue And Rehabilitation
                  </p>
                  <h2 className="mt-4 text-3xl font-black text-white">
                    Your support helps fund real rehabilitation.
                  </h2>
                  <p className="mt-5 text-[#DCE7F2] leading-8">
                    Pack Life Dog Rescue And Rehabilitation is built around calm
                    structure, observation, behavioral rehabilitation, and
                    responsible placement. Your support helps cover the work
                    that happens before a dog is ever considered ready for
                    placement.
                  </p>

                  <div className="mt-8 grid gap-4">
                    {[
                      [
                        "Food and daily care",
                        "Consistent daily support, kennel supplies, and routine care that keep dogs stable and moving forward.",
                      ],
                      [
                        "Veterinary support",
                        "Health evaluations, treatment needs, medication support, and essential care before placement.",
                      ],
                      [
                        "Training and rehabilitation",
                        "Structure, decompression, leash work, behavior support, and long-term rehabilitation that holds.",
                      ],
                    ].map(([title, text]) => (
                      <div
                        key={title}
                        className="rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] p-5"
                      >
                        <p className="text-sm font-bold text-white">{title}</p>
                        <p className="mt-2 text-sm leading-7 text-[#B8C9DB]">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-[1.5rem] border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E0C15A]">
                      Important Notice
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#DCE7F2]">
                      Pack Life Dog Rescue And Rehabilitation is an approved
                      501(c)(3) nonprofit organization. Donations are
                      tax-deductible to the extent allowed by law.
                    </p>
                  </div>
                </div>

                <div className="grid gap-6">
                  <div className={`${DarkGradient} rounded-[2rem] border border-[#2E5B86]/80 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/18 bg-[#D4AF37]/10 text-[#E0C15A]">
                        <HandCoins className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E0C15A]">
                          One-Time Support
                        </p>
                        <h2 className="mt-1 text-2xl font-black text-white">
                          Donate now
                        </h2>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {[
                        "$25 — Daily care support",
                        "$50 — Training and structure support",
                        "$100 — Rehabilitation support",
                      ].map((text) => (
                        <div
                          key={text}
                          className="rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DCE7F2]"
                        >
                          {text}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={openDonateModal}
                      className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0C15A]"
                    >
                      Donate Now <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>

                  <div className={`${CardGradient} rounded-[2rem] border border-[#2E5B86]/80 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}>
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/18 bg-[#D4AF37]/10 text-[#E0C15A]">
                        <Heart className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E0C15A]">
                          Monthly Giving
                        </p>
                        <h2 className="mt-1 text-2xl font-black text-white">
                          Join the Pack
                        </h2>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-3">
                      {[
                        "$10/month — Basic mission support",
                        "$25/month — Training support",
                        "$50/month — Sponsor a dog’s rehabilitation",
                      ].map((text) => (
                        <div
                          key={text}
                          className="rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-sm font-medium text-[#DCE7F2]"
                        >
                          {text}
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={openDonateModal}
                      className="mt-7 inline-flex items-center gap-2 rounded-2xl border border-[#D4AF37]/30 bg-white/[0.03] px-6 py-3 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#E0C15A]"
                    >
                      Join the Pack <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ) : page === "philosophy" ? (
          <section className="px-6 pb-24 pt-20 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-5xl">
              <SectionIntro
                eyebrow="Philosophy"
                title="Principles that drive every decision."
                text="Pack Life Dog Rescue And Rehabilitation is built around calm leadership, honest observation, structured rehabilitation, and placements made for long-term success."
              />

              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {philosophyItems.map((item) => {
                  const isOpen = openPhilosophy === item.title;
                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() =>
                        setOpenPhilosophy(isOpen ? null : item.title)
                      }
                      className={`group text-left rounded-[1.6rem] border p-6 transition-all duration-300 hover:-translate-y-1 ${
                        isOpen
                          ? "border-[#D4AF37] bg-[linear-gradient(180deg,rgba(24,58,91,0.97)_0%,rgba(16,41,68,1)_100%)] shadow-[0_0_0_1px_rgba(212,175,55,0.35),0_22px_55px_rgba(212,175,55,0.16)]"
                          : "border-[#2E5B86]/80 bg-[linear-gradient(180deg,rgba(18,46,74,0.96)_0%,rgba(14,35,56,0.98)_100%)] hover:bg-white/5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {item.title}
                          </h3>
                          <p
                            className={`mt-2 text-sm transition-colors duration-300 ${
                              isOpen ? "text-[#DCE7F2]" : "text-[#B8C9DB]"
                            }`}
                          >
                            {item.short}
                          </p>
                        </div>
                        <div
                          className={`mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                            isOpen
                              ? "border-[#D4AF37]/40 bg-[#D4AF37]/10 shadow-[0_0_18px_rgba(212,175,55,0.18)]"
                              : "border-[#2E5B86]/70 bg-white/[0.03]"
                          }`}
                        >
                          <ChevronDown
                            className={`h-4 w-4 text-[#E0C15A] transition-transform duration-300 ${
                              isOpen ? "rotate-180" : "rotate-0"
                            }`}
                          />
                        </div>
                      </div>
                      {isOpen && (
                        <div className="mt-5 border-t border-[#2E5B86] pt-5">
                          <p className="leading-7 text-[#DCE7F2]">
                            {item.detail}
                          </p>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        ) : page === "about" ? (
          <section className="px-6 pb-24 pt-20 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-7xl">
              <SectionIntro
                eyebrow="About Pack Life Dog Rescue And Rehabilitation"
                title="This is not a flip and place rescue model."
                text="Pack Life Dog Rescue And Rehabilitation is built around decompression, observation, structure, and honest rehabilitation. We slow the process down so stability comes first and placement actually lasts."
              />

              <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {[
                  [
                    "Observation First",
                    "Health, body language, stress level, arousal, and recovery are evaluated before pressure is added.",
                  ],
                  [
                    "Foundation Work",
                    "Dogs begin with calm routines, thresholds, crate decompression, leash neutrality, and structure.",
                  ],
                  [
                    "Behavior Matters",
                    "We focus on regulation, neutrality, and functional behavior, not surface obedience alone.",
                  ],
                  [
                    "Fit Over Speed",
                    "Every placement is approached with long-term success in mind, not urgency.",
                  ],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className={`${DarkGradient} rounded-[1.8rem] border border-[#2E5B86]/80 p-6 shadow-[0_16px_34px_rgba(0,0,0,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.18)]`}
                  >
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#B8C9DB]">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              <div
                className={`${CardGradient} mt-8 rounded-[2rem] border border-[#2E5B86]/80 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
                  Our Standard
                </p>
                <h2 className="mt-4 text-3xl font-black text-white">
                  Stability first. Placement second.
                </h2>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-[#DCE7F2]">
                  Many dogs enter rescue overstimulated, misunderstood, or never
                  given a fair chance. Pack Life Dog Rescue And Rehabilitation
                  is built to slow everything down, read the dog honestly, apply
                  structure the right way, and protect long-term outcomes instead
                  of rushed decisions.
                </p>
              </div>
            </div>
          </section>
        ) : page === "dogs" ? (
          <section className="px-6 pb-24 pt-20 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-5xl">
              <div
                className={`${CardGradient} rounded-[2.25rem] border border-[#2E5B86]/80 p-10 text-center shadow-[0_22px_46px_rgba(0,0,0,0.16)]`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
                  Available Dogs
                </p>
                <h1 className="mt-4 text-4xl font-black text-white sm:text-5xl">
                  No dogs available at this time.
                </h1>
                <p className="mt-5 mx-auto max-w-2xl text-lg leading-8 text-[#B8C9DB]">
                  Pack Life Dog Rescue And Rehabilitation is currently preparing
                  and evaluating dogs for placement. Submit an application now
                  to be considered when the right dog becomes available.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                  <a
                    href="/PackLife_Adoption_Application.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-[#D4AF37] px-5 py-3 font-bold text-[#102944] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0C15A]"
                  >
                    Adoption Application
                  </a>
                </div>
              </div>
            </div>
          </section>
        ) : page === "support" ? (
          <section className="px-6 pb-24 pt-20 lg:px-8 lg:pt-24">
            <div className="mx-auto max-w-7xl">
              <SectionIntro
                eyebrow="Support"
                title="Support Pack Life Dog Rescue And Rehabilitation."
                text="There is more than one way to help build structure, stability, and long-term outcomes."
              />

              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {[
                  {
                    icon: HandCoins,
                    title: "Future Donations",
                    text: "Financial support will help cover food, veterinary care, equipment, and structured rehabilitation as Pack Life Dog Rescue And Rehabilitation continues to grow.",
                  },
                  {
                    icon: HeartHandshake,
                    title: "Foster Support",
                    text: "Stable foster environments are a major part of the Pack Life Dog Rescue And Rehabilitation process and long-term placement pipeline.",
                  },
                  {
                    icon: Megaphone,
                    title: "Partnerships",
                    text: "Trainers, veterinarians, local businesses, donors, and aligned supporters can all help strengthen the mission.",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className={`${DarkGradient} rounded-[2rem] border border-[#2E5B86]/80 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1`}
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D4AF37]/18 bg-[#D4AF37]/10 text-[#E0C15A]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-5 text-2xl font-black text-white">
                        {item.title}
                      </h2>
                      <p className="mt-4 text-[#DCE7F2] leading-8">{item.text}</p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                <div
                  className={`${CardGradient} rounded-[2rem] border border-[#2E5B86]/80 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-[#E0C15A]" />
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
                      Launch List
                    </p>
                  </div>
                  <h2 className="mt-4 text-3xl font-black text-white">
                    Be first to know when support opens.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#DCE7F2]">
                    Join the Pack Life Dog Rescue And Rehabilitation launch list
                    to be notified when donations officially go live and new
                    support opportunities open.
                  </p>

                  {pageNotifyStatus === "success" ? (
                    <div className="mt-6 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-5 text-[#DCE7F2]">
                      You’re on the list. We’ll let you know when support opens.
                    </div>
                  ) : (
                    <form className="mt-6 space-y-4" onSubmit={handlePageNotifySubmit}>
                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-[#DCE7F2]">
                          Email Address
                        </span>
                        <input
                          type="email"
                          value={pageNotifyEmail}
                          onChange={(e) => setPageNotifyEmail(e.target.value)}
                          required
                          placeholder="you@example.com"
                          className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#D4AF37]/40 focus:bg-white/[0.05]"
                        />
                      </label>

                      {pageNotifyStatus === "error" && (
                        <p className="text-sm font-medium text-red-300">
                          Something went wrong. Please try again.
                        </p>
                      )}

                      <div className="flex flex-wrap gap-4">
                        <button
                          type="submit"
                          disabled={pageNotifyStatus === "sending"}
                          className="rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] disabled:cursor-not-allowed disabled:opacity-70"
                        >
                          {pageNotifyStatus === "sending"
                            ? "Joining..."
                            : "Join the Launch List"}
                        </button>
                        <button
                          type="button"
                          onClick={() => goToPage("contact")}
                          className="rounded-2xl border border-[#2E5B86]/70 px-6 py-3 text-white hover:bg-white/5"
                        >
                          Contact Us
                        </button>
                      </div>
                    </form>
                  )}
                </div>

                <div
                  className={`${DarkGradient} rounded-[2rem] border border-[#2E5B86]/80 p-8 shadow-[0_24px_48px_rgba(0,0,0,0.18)]`}
                >
                  <div className="flex items-center gap-3">
                    <HandHeart className="h-5 w-5 text-[#E0C15A]" />
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
                      Other Ways To Help
                    </p>
                  </div>

                  <div className="mt-6 grid gap-4">
                    {[
                      "Apply to foster",
                      "Share Pack Life Dog Rescue And Rehabilitation with aligned supporters",
                      "Connect trainers, veterinarians, or local businesses",
                      "Reach out about sponsorship or partnership opportunities",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-[#DCE7F2]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={openDonateModal}
                    className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944]"
                  >
                    Open Support Modal <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        ) : (
          <>
            <section className="px-6 pb-24 pt-16 lg:px-8 lg:pt-20">
              <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div className="animate-[fadeIn_0.5s_ease]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
                    Built on Structure. Driven by Purpose. Committed for Life.
                  </div>

                  <h1 className="mt-7 max-w-4xl text-4xl font-black leading-[0.98] text-white sm:text-5xl lg:text-[5rem]">
                    Rescue done the right way.
                  </h1>

                  <p className="mt-4 max-w-2xl text-xl font-semibold leading-8 text-white">
                    We don’t just rescue dogs — we rebuild them.
                  </p>

                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[#DCE7F2]">
                    Structure. Decompression. Real rehabilitation. Built for
                    long-term outcomes, not rushed placements.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      onClick={openDonateModal}
                      className="inline-flex items-center gap-2 rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] shadow-[0_10px_28px_rgba(212,175,55,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0C15A] hover:shadow-[0_14px_34px_rgba(212,175,55,0.28)]"
                    >
                      Donate Now <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <button
                      onClick={openDonateModal}
                      className="rounded-2xl border border-[#D4AF37]/30 bg-white/[0.03] px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#E0C15A]"
                    >
                      Join the Pack
                    </button>
                    <button
                      onClick={() => goToPage("apply")}
                      className="rounded-2xl border border-[#3B6C99] px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/5 hover:text-[#E0C15A]"
                    >
                      Applications
                    </button>
                  </div>

                  <div className="mt-10 grid gap-4 sm:grid-cols-3">
                    {standards.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.title}
                          className="rounded-[1.5rem] border border-[#2E5B86]/80 bg-[linear-gradient(180deg,rgba(24,58,91,0.76)_0%,rgba(16,41,68,0.88)_100%)] p-5 shadow-[0_16px_30px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_40px_rgba(0,0,0,0.16)]"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D4AF37]/18 bg-[#D4AF37]/10 text-[#E0C15A] shadow-[0_0_18px_rgba(212,175,55,0.12)]">
                            <Icon className="h-4 w-4" />
                          </div>
                          <h3 className="mt-4 font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-[#B8C9DB]">
                            {item.text}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="relative animate-[fadeIn_0.65s_ease]">
                  <div className="absolute inset-0 rounded-[2.25rem] bg-[radial-gradient(circle_at_top_right,rgba(224,193,90,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(59,108,153,0.20),transparent_30%)] blur-2xl" />
                  <div className="relative overflow-hidden rounded-[2.25rem] border border-[#2E5B86]/80 bg-[linear-gradient(180deg,rgba(24,58,91,0.82)_0%,rgba(16,41,68,0.96)_100%)] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.22)]">
                    <div className="rounded-[1.75rem] border border-[#D4AF37]/18 bg-[linear-gradient(180deg,rgba(18,46,74,0.98)_0%,rgba(14,35,56,0.98)_100%)] p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#E0C15A]">
                            Pack Life Dog Rescue And Rehabilitation Standard
                          </p>
                          <h2 className="mt-3 text-2xl font-black text-white">
                            We do not place dogs. We build them first.
                          </h2>
                        </div>

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/10 text-[#E0C15A] shadow-[0_0_18px_rgba(212,175,55,0.15)]">
                          <Compass className="h-4 w-4" />
                        </div>
                      </div>

                      <div className="mt-8 grid gap-4">
                        {[
                          [
                            "Decompression",
                            "Lower stimulation. Let the dog reset. Trust is built before expectations are applied.",
                          ],
                          [
                            "Structure",
                            "Clear rules. Calm leadership. Predictability that removes stress and confusion.",
                          ],
                          [
                            "Placement",
                            "Placed when ready, not when convenient. The outcome matters more than speed.",
                          ],
                        ].map(([title, text]) => (
                          <div
                            key={title}
                            className="rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] p-5 transition duration-300 hover:bg-white/[0.045]"
                          >
                            <p className="text-sm font-bold text-white">
                              {title}
                            </p>
                            <p className="mt-2 text-sm leading-7 text-[#B8C9DB]">
                              {text}
                            </p>
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
                        <div
                          key={label}
                          className="rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] p-4 text-center"
                        >
                          <p className="text-[11px] uppercase tracking-[0.24em] text-[#8FA6BE]">
                            {label}
                          </p>
                          <p className="mt-2 text-sm font-bold text-white">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="px-6 py-2 lg:px-8">
              <div
                className={`${CardGradient} mx-auto max-w-7xl rounded-[2.25rem] border border-[#2E5B86]/80 p-8 shadow-[0_22px_46px_rgba(0,0,0,0.16)] lg:p-10`}
              >
                <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
                      Support the Mission
                    </p>
                    <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                      Help fund structure, rehabilitation, and real second chances.
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-[#DCE7F2]">
                      Every dog we take in is built the right way before
                      placement. Your support helps cover daily care,
                      veterinary needs, behavior work, and the structured
                      rehabilitation process behind every outcome.
                    </p>

                    <div className="mt-7 flex flex-wrap gap-4">
                      <button
                        onClick={openDonateModal}
                        className="inline-flex items-center gap-2 rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] shadow-[0_10px_28px_rgba(212,175,55,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0C15A]"
                      >
                        Donate Now <ArrowUpRight className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => goToPage("support")}
                        className="rounded-2xl border border-[#D4AF37]/30 bg-white/[0.03] px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#D4AF37] hover:text-[#E0C15A]"
                      >
                        View Support Page
                      </button>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {[
                      "$25 → Daily care",
                      "$50 → Training and structure",
                      "$100 → Rehabilitation support",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-5 py-4 text-base font-semibold text-white shadow-[0_12px_28px_rgba(0,0,0,0.10)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="px-6 py-8 lg:px-8">
              <div
                className={`${DarkGradient} mx-auto max-w-7xl rounded-[2.25rem] border border-[#2E5B86]/80 p-8 shadow-[0_22px_46px_rgba(0,0,0,0.16)] lg:p-10`}
              >
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
                      Launch List
                    </p>
                    <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl">
                      Get notified when support opens.
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-[#DCE7F2]">
                      Join the Pack Life Dog Rescue And Rehabilitation launch
                      list and be first to know when donations and support
                      options go live.
                    </p>

                    {pageNotifyStatus === "success" ? (
                      <div className="mt-6 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 p-5 text-[#DCE7F2]">
                        You’re on the list. We’ll let you know when support opens.
                      </div>
                    ) : (
                      <form className="mt-6 space-y-4" onSubmit={handlePageNotifySubmit}>
                        <input
                          type="email"
                          value={pageNotifyEmail}
                          onChange={(e) => setPageNotifyEmail(e.target.value)}
                          required
                          placeholder="Enter your email address"
                          className="w-full max-w-xl rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#D4AF37]/40 focus:bg-white/[0.05]"
                        />

                        {pageNotifyStatus === "error" && (
                          <p className="text-sm font-medium text-red-300">
                            Something went wrong. Please try again.
                          </p>
                        )}

                        <div className="flex flex-wrap gap-4">
                          <button
                            type="submit"
                            disabled={pageNotifyStatus === "sending"}
                            className="rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] disabled:cursor-not-allowed disabled:opacity-70"
                          >
                            {pageNotifyStatus === "sending"
                              ? "Joining..."
                              : "Join the Launch List"}
                          </button>
                          <button
                            type="button"
                            onClick={openDonateModal}
                            className="rounded-2xl border border-[#2E5B86]/70 px-6 py-3 text-white hover:bg-white/5"
                          >
                            Open Support Modal
                          </button>
                        </div>
                      </form>
                    )}
                  </div>

                  <div className="grid gap-4">
                    {[
                      "Be first to know when donations open",
                      "Get updates on support opportunities",
                      "Stay connected as Pack Life Dog Rescue And Rehabilitation grows",
                    ].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] p-5 text-[#DCE7F2]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 px-5 py-4 text-sm leading-7 text-[#DCE7F2]">
                  Pack Life Dog Rescue And Rehabilitation is an approved 501(c)(3) nonprofit organization. Donations are tax-deductible to the extent allowed by law.
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      <footer className="mt-24 border-t border-[#2E5B86]/60 bg-[linear-gradient(180deg,#0E2338_0%,#0B1C2C_100%)] px-6 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#E0C15A_0%,#D4AF37_100%)] text-sm font-black tracking-[0.2em] text-[#102944] shadow-[0_10px_20px_rgba(212,175,55,0.18)]">
                PL
              </div>
              <div>
                <p className="text-[11px] tracking-[0.32em] text-[#E0C15A]">
                  PACK LIFE
                </p>
                <p className="text-sm font-bold text-white">
                  Dog Rescue And Rehabilitation
                </p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-[#B8C9DB]">
              Pack Life Dog Rescue And Rehabilitation is built on structure,
              decompression, behavioral rehabilitation, and long-term placement
              success. We focus on real rehabilitation, not rushed outcomes.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E0C15A]">
              Navigation
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {[
                ["home", "Home"],
                ["about", "About"],
                ["dogs", "Available Dogs"],
                ["philosophy", "Philosophy"],
                ["support", "Support"],
                ["donate", "Donate"],
                ["contact", "Contact"],
              ].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => goToPage(id)}
                  className="text-left text-[#DCE7F2] transition hover:text-[#E0C15A]"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E0C15A]">
              Contact
            </p>

            <div className="mt-4 space-y-4 text-sm text-[#DCE7F2]">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#E0C15A]" />
                <span>info@packlifedogrescue.org</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#E0C15A]" />
                <span>717-706-4748</span>
              </div>

              <button
                onClick={() => goToPage("contact")}
                className="rounded-2xl border border-[#2E5B86]/70 px-4 py-3 text-left text-white transition hover:bg-white/5 hover:text-[#E0C15A]"
              >
                Contact Pack Life Dog Rescue And Rehabilitation
              </button>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#E0C15A]">
              Support
            </p>

            <p className="mt-4 text-sm leading-7 text-[#B8C9DB]">
              Support options are opening soon. Join the launch list or contact
              Pack Life Dog Rescue And Rehabilitation directly to stay connected.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <button
                onClick={openDonateModal}
                className="rounded-2xl bg-[#D4AF37] px-5 py-3 font-bold text-[#102944] transition hover:bg-[#E0C15A]"
              >
                Join Launch List
              </button>
              <button
                onClick={() => goToPage("support")}
                className="rounded-2xl border border-[#2E5B86]/70 px-5 py-3 text-white transition hover:bg-white/5 hover:text-[#E0C15A]"
              >
                View Support Page
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-[#2E5B86]/50 pt-6">
          <div className="flex flex-col gap-3 text-sm text-[#8FA6BE] lg:flex-row lg:items-center lg:justify-between">
            <p>© 2026 Pack Life Dog Rescue And Rehabilitation. All rights reserved.</p>
            <p>Pack Life Dog Rescue And Rehabilitation is a 501(c)(3) nonprofit organization. EIN 41-4616591. Donations are tax-deductible to the extent allowed by law.</p>
          </div>
        </div>
      </footer>

      {showDonateModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-xl rounded-[2rem] border border-[#2E5B86]/80 bg-[linear-gradient(180deg,#122E4A_0%,#0E2338_100%)] p-8 shadow-[0_30px_80px_rgba(0,0,0,0.4)]">
            <button
              onClick={closeDonateModal}
              className="absolute right-4 top-4 text-lg text-white/60 transition hover:text-white"
              aria-label="Close"
            >
              ✕
            </button>

            {notifyStatus === "success" ? (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
                  You’re In
                </p>
                <h2 className="mt-4 text-3xl font-black text-white">
                  We’ll let you know when donations go live.
                </h2>
                <p className="mt-5 text-[#DCE7F2] leading-8">
                  Thank you for joining the Pack Life Dog Rescue And Rehabilitation
                  launch list. You’ll be one of the first people notified when
                  support options open.
                </p>

                <div className="mt-6 rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 px-4 py-4 text-sm leading-7 text-[#DCE7F2]">
                  We’re building this the right way — with the same structure,
                  clarity, and long-term mindset behind the rescue itself.
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => {
                      closeDonateModal();
                      goToPage("contact");
                    }}
                    className="rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] hover:bg-[#E0C15A]"
                  >
                    Contact Us Now
                  </button>
                  <button
                    onClick={closeDonateModal}
                    className="rounded-2xl border border-[#2E5B86]/70 px-6 py-3 text-white hover:bg-white/5"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#E0C15A]">
                  Donations Opening Soon
                </p>

                <h2 className="mt-4 text-3xl font-black text-white">
                  We’re almost ready.
                </h2>

                <p className="mt-5 text-[#DCE7F2] leading-8">
                  Pack Life Dog Rescue And Rehabilitation is an approved
                  501(c)(3) nonprofit. We’re currently finalizing donation
                  processing.
                </p>

                <p className="mt-4 text-[#DCE7F2] leading-8">
                  Your support will directly fund structure-based rehabilitation,
                  veterinary care, and long-term placement success.
                </p>

                <div className="mt-6 rounded-2xl border border-[#D4AF37]/15 bg-[#D4AF37]/10 px-4 py-4 text-sm leading-7 text-[#DCE7F2]">
                  Donations will be live very soon. Join the launch list below
                  and we’ll notify you as soon as support opens.
                </div>

                <form className="mt-6 space-y-4" onSubmit={handleNotifySubmit}>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-[#DCE7F2]">
                      Email Address
                    </span>
                    <input
                      type="email"
                      value={notifyEmail}
                      onChange={(e) => setNotifyEmail(e.target.value)}
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-[#2E5B86]/70 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-white/40 focus:border-[#D4AF37]/40 focus:bg-white/[0.05]"
                    />
                  </label>

                  {notifyStatus === "error" && (
                    <p className="text-sm font-medium text-red-300">
                      Something went wrong. Please try again.
                    </p>
                  )}

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      disabled={notifyStatus === "sending"}
                      className="rounded-2xl bg-[#D4AF37] px-6 py-3 font-bold text-[#102944] hover:bg-[#E0C15A] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {notifyStatus === "sending"
                        ? "Joining..."
                        : "Notify Me When Donations Open"}
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        closeDonateModal();
                        goToPage("contact");
                      }}
                      className="rounded-2xl border border-[#2E5B86]/70 px-6 py-3 text-white hover:bg-white/5"
                    >
                      Contact Us to Support Now
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
