export type Locale = "bn" | "en";

export const site = {
  name: "DreamSpace IT",
  domain: "dreamspaceit.com",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dreamspaceit.com",
  email: "dreamspaceit.official@gmail.com",
  phone: "01317768213",
  whatsapp: "8801317768213",
  facebook: "https://www.facebook.com/dreamspaceit",
  address: "Dhaka, Bangladesh",
  founder: "Rasel Ahmed",
  colors: { primary: "#FDDFD3", ink: "#172033", coral: "#D9735D" }
} as const;

export const copy = {
  bn: {
    nav: { home: "হোম", services: "সার্ভিস", portfolio: "প্রজেক্ট", pricing: "প্যাকেজ", blog: "ব্লগ", about: "আমাদের সম্পর্কে", contact: "যোগাযোগ", getQuote: "ফ্রি কনসাল্টেশন" },
    hero: {
      eyebrow: "NEXT.JS • NODE.JS • MONGODB",
      title: "আপনার আইডিয়াকে রূপ দিই দ্রুত, সুন্দর ও স্কেলেবল ডিজিটাল প্রোডাক্টে।",
      description: "DreamSpace IT তৈরি করে conversion-focused ওয়েবসাইট, ই-কমার্স স্টোর এবং কাস্টম ওয়েব অ্যাপ—যা দ্রুত লোড হয়, সব ডিভাইসে নিখুঁত দেখায় এবং Google-এ খুঁজে পাওয়া সহজ।",
      primary: "প্রজেক্ট নিয়ে কথা বলুন",
      secondary: "আমাদের সার্ভিস দেখুন",
      trust: ["মোবাইল-ফার্স্ট", "SEO রেডি", "ফাস্ট লোডিং", "স্কেলেবল কোড"]
    },
    proof: ["কৌশলগত ডিজাইন", "পরিষ্কার কোড", "দ্রুত লোডিং", "মানবিক সাপোর্ট"],
    services: {
      eyebrow: "WHAT WE BUILD",
      title: "বিজনেসের জন্য প্রয়োজনীয় প্রতিটি ডিজিটাল অভিজ্ঞতা",
      description: "শুধু সুন্দর interface নয়—প্রতিটি পেজে থাকে স্পষ্ট লক্ষ্য, প্রযুক্তিগত মান এবং ভবিষ্যতে বড় হওয়ার প্রস্তুতি।",
      viewAll: "সব সার্ভিস দেখুন"
    },
    commerce: {
      eyebrow: "E-COMMERCE THAT WORKS",
      title: "স্টোরফ্রন্ট থেকে অর্ডার ম্যানেজমেন্ট—সবকিছু এক জায়গায়",
      description: "আপনার পণ্যের জন্য দ্রুত, সহজ এবং বিশ্বাসযোগ্য online shopping experience তৈরি করি। প্রয়োজন হলে custom dashboard, inventory flow, payment integration এবং campaign landing page যোগ করি।",
      points: ["Core Web Vitals সচেতন build", "Mobile checkout-focused UI", "Payment ও courier-ready architecture", "SEO-friendly product structure"],
      cta: "ই-কমার্স নিয়ে কথা বলুন"
    },
    process: { eyebrow: "HOW WE WORK", title: "আইডিয়া থেকে launch—একটি পরিষ্কার প্রক্রিয়া", description: "প্রজেক্টের প্রতিটি ধাপে আপনি জানবেন কী হচ্ছে, কেন হচ্ছে এবং এরপর কী হবে।" },
    growth: { eyebrow: "BUILT FOR GROWTH", title: "আজকের জন্য দ্রুত। আগামীকালের জন্য প্রস্তুত।", description: "উন্নত code structure, reusable components এবং scalable data model ব্যবহার করে কাজ করি—যাতে আপনার ওয়েবসাইট শুধু launch না হয়, সময়ের সঙ্গে আরও ভালো হতে পারে।" },
    portfolio: { eyebrow: "SELECTED WORK", title: "যে কাজগুলো ব্যবহারকারীর জন্য সহজ, ব্র্যান্ডের জন্য শক্তিশালী", description: "লাইভ হওয়ার আগে প্রতিটি ডিজাইন mobile, tablet এবং desktop view মাথায় রেখে তৈরি করা হয়।", viewAll: "সব প্রজেক্ট দেখুন" },
    pricing: { eyebrow: "START WITH CLARITY", title: "আপনার লক্ষ্য অনুযায়ী একটি বাস্তবসম্মত প্ল্যান", description: "নিচের packageগুলো starter guideline। আপনার প্রয়োজন বুঝে scope ও quotation চূড়ান্ত করা হবে।", note: "প্রতিটি প্রজেক্টে scope, timeline এবং support plan পরিষ্কারভাবে আলোচনা করা হয়।" },
    ceo: { eyebrow: "FROM THE FOUNDER", title: "প্রযুক্তি হোক আপনার ব্যবসার এগিয়ে যাওয়ার জায়গা", quote: "আমি বিশ্বাস করি, একটি ভালো ওয়েবসাইট শুধু সুন্দর দেখায় না—এটি আপনার ব্র্যান্ডকে বিশ্বাসযোগ্য করে, কাজকে সহজ করে এবং নতুন সুযোগ তৈরি করে।", role: "Founder & Lead Developer" },
    faq: { eyebrow: "FAQ", title: "শুরুর আগে যেগুলো জানা দরকার" },
    cta: { title: "আপনার পরের ওয়েবসাইটটি যেন শুধু দেখা না হয়—মনে থাকে।", description: "একটি ছোট মেসেজ দিয়েই শুরু করুন। আপনার idea, budget বা প্রশ্ন যাই হোক, আমরা শুনতে প্রস্তুত।", button: "WhatsApp-এ মেসেজ দিন" },
    footer: { tagline: "ব্র্যান্ড, ব্যবসা ও মানুষের জন্য thoughtful digital experience তৈরি করি।", quickLinks: "দ্রুত লিংক", services: "সার্ভিস", contact: "যোগাযোগ", rights: "সব অধিকার সংরক্ষিত।" },
    common: { learnMore: "বিস্তারিত দেখুন", from: "থেকে", starting: "শুরু", contactUs: "যোগাযোগ করুন", send: "মেসেজ পাঠান", sending: "পাঠানো হচ্ছে...", readMore: "আরও পড়ুন", comingSoon: "শীঘ্রই আসছে", all: "সব", noData: "এখনও কোনো তথ্য যোগ করা হয়নি।" },
    contact: { eyebrow: "LET'S TALK", title: "আপনার আইডিয়াটা আমাদের বলুন", description: "প্রজেক্টের ধরন, লক্ষ্য বা আনুমানিক বাজেট জানালে আমরা দ্রুত উত্তর দিতে পারব।", form: { name: "আপনার নাম", email: "ইমেইল", phone: "ফোন / WhatsApp", service: "কোন সার্ভিস লাগবে?", message: "প্রজেক্ট সম্পর্কে লিখুন", button: "ইনকোয়ারি পাঠান", success: "ধন্যবাদ! আপনার মেসেজটি পৌঁছেছে। আমরা দ্রুত যোগাযোগ করব।" } },
    admin: { dashboard: "ড্যাশবোর্ড", projects: "প্রজেক্ট", posts: "ব্লগ পোস্ট", inquiries: "ইনকোয়ারি", signOut: "সাইন আউট", signIn: "সাইন ইন", email: "ইমেইল", password: "পাসওয়ার্ড", loginTitle: "DreamSpace IT Admin", loginSubtitle: "আপনার কনটেন্ট এবং inquiry এক জায়গা থেকে পরিচালনা করুন।" }
  },
  en: {
    nav: { home: "Home", services: "Services", portfolio: "Projects", pricing: "Pricing", blog: "Blog", about: "About", contact: "Contact", getQuote: "Free consultation" },
    hero: {
      eyebrow: "NEXT.JS • NODE.JS • MONGODB",
      title: "We turn your ideas into fast, elegant and scalable digital products.",
      description: "DreamSpace IT builds conversion-focused websites, ecommerce stores and custom web applications that load quickly, feel natural on every device and are easier for search engines to understand.",
      primary: "Talk about your project",
      secondary: "Explore our services",
      trust: ["Mobile-first", "SEO-ready", "Fast loading", "Scalable code"]
    },
    proof: ["Strategic design", "Clean code", "Fast loading", "Human support"],
    services: {
      eyebrow: "WHAT WE BUILD",
      title: "Digital experiences that move your business forward",
      description: "Not only polished interfaces—every page is planned around a clear goal, solid engineering and room to grow.",
      viewAll: "View all services"
    },
    commerce: {
      eyebrow: "E-COMMERCE THAT WORKS",
      title: "From storefront to order management—built as one connected experience",
      description: "We create quick, easy and trustworthy shopping journeys for your products. Add custom dashboards, inventory flows, payment integrations and campaign landing pages whenever your business needs them.",
      points: ["Core Web Vitals-aware builds", "Mobile checkout-focused UI", "Payment and courier-ready architecture", "SEO-friendly product structure"],
      cta: "Discuss ecommerce"
    },
    process: { eyebrow: "HOW WE WORK", title: "A clear process from idea to launch", description: "At every stage, you will know what is happening, why it matters and what comes next." },
    growth: { eyebrow: "BUILT FOR GROWTH", title: "Fast for today. Ready for tomorrow.", description: "We use clean code structure, reusable components and scalable data models so your site can improve alongside your business—not just launch once." },
    portfolio: { eyebrow: "SELECTED WORK", title: "Work that feels easy for users and strong for brands", description: "Every design is considered across mobile, tablet and desktop before it goes live.", viewAll: "View all projects" },
    pricing: { eyebrow: "START WITH CLARITY", title: "A practical plan around your goals", description: "These packages are a starting point. Scope and quotation are finalized after understanding your needs.", note: "Every project begins with a clear scope, timeline and support plan." },
    ceo: { eyebrow: "FROM THE FOUNDER", title: "Technology should give your business more room to grow", quote: "A good website does more than look polished. It makes your brand more trustworthy, makes work easier and opens room for new opportunities.", role: "Founder & Lead Developer" },
    faq: { eyebrow: "FAQ", title: "Good questions to answer before we begin" },
    cta: { title: "Make your next website more than something people see—make it memorable.", description: "Start with a short message. Whether you have an idea, a budget or a question, we are ready to listen.", button: "Message on WhatsApp" },
    footer: { tagline: "Thoughtful digital experiences for brands, businesses and people.", quickLinks: "Quick links", services: "Services", contact: "Contact", rights: "All rights reserved." },
    common: { learnMore: "Learn more", from: "From", starting: "Starting", contactUs: "Contact us", send: "Send message", sending: "Sending...", readMore: "Read more", comingSoon: "Coming soon", all: "All", noData: "No data has been added yet." },
    contact: { eyebrow: "LET'S TALK", title: "Tell us about your idea", description: "Share the project type, goal or an approximate budget, and we can reply with more useful guidance.", form: { name: "Your name", email: "Email", phone: "Phone / WhatsApp", service: "What service do you need?", message: "Tell us about the project", button: "Send inquiry", success: "Thank you! Your message has arrived. We will get back to you shortly." } },
    admin: { dashboard: "Dashboard", projects: "Projects", posts: "Blog posts", inquiries: "Inquiries", signOut: "Sign out", signIn: "Sign in", email: "Email", password: "Password", loginTitle: "DreamSpace IT Admin", loginSubtitle: "Manage your content and inquiries in one focused space." }
  }
} as const;

export type Copy = (typeof copy)[Locale];

export const serviceItems = [
  { slug: "business-website", icon: "LayoutPanelTop", bn: { title: "বিজনেস ওয়েবসাইট", description: "বিশ্বাস তৈরি করে এমন corporate, portfolio ও service website।" }, en: { title: "Business websites", description: "Corporate, portfolio and service websites that help people trust your brand." } },
  { slug: "ecommerce", icon: "ShoppingBag", bn: { title: "ই-কমার্স সল্যুশন", description: "দ্রুত shopping experience, order flow এবং business-ready features।" }, en: { title: "Ecommerce solutions", description: "Fast shopping experiences, clearer order flows and business-ready features." } },
  { slug: "landing-page", icon: "PanelsTopLeft", bn: { title: "ল্যান্ডিং পেজ", description: "Campaign, ad এবং lead generation-এর জন্য conversion-first page।" }, en: { title: "Landing pages", description: "Conversion-first pages for campaigns, ads and lead generation." } },
  { slug: "web-app", icon: "Boxes", bn: { title: "কাস্টম ওয়েব অ্যাপ", description: "Dashboard, booking system, portal ও automation solution।" }, en: { title: "Custom web apps", description: "Dashboards, booking systems, portals and workflow automation." } },
  { slug: "ui-ux", icon: "PenTool", bn: { title: "UI/UX ডিজাইন", description: "ব্যবহারকারীর জন্য সহজ, brand-এর জন্য আলাদা interface design।" }, en: { title: "UI/UX design", description: "Interfaces that feel clear to users and distinct to your brand." } },
  { slug: "seo-growth", icon: "ChartNoAxesCombined", bn: { title: "SEO ও গ্রোথ", description: "Technical SEO foundation, content structure ও analytics setup।" }, en: { title: "SEO and growth", description: "Technical SEO foundations, content structure and analytics readiness." } }
] as const;

export const processSteps = [
  { no: "01", bn: { title: "শুনে বুঝি", text: "আপনার লক্ষ্য, audience এবং success measurement পরিষ্কার করি।" }, en: { title: "Listen & understand", text: "We clarify your goal, audience and what success should look like." } },
  { no: "02", bn: { title: "পরিকল্পনা করি", text: "Page structure, content direction, feature scope এবং timeline নির্ধারণ করি।" }, en: { title: "Plan with purpose", text: "We define page structure, content direction, feature scope and timeline." } },
  { no: "03", bn: { title: "ডিজাইন ও ডেভেলপ", text: "Responsive interface এবং production-ready code একসাথে তৈরি করি।" }, en: { title: "Design & develop", text: "We build the responsive interface and production-ready code together." } },
  { no: "04", bn: { title: "টেস্ট করে launch", text: "Speed, mobile usability, SEO essentials এবং core user flow যাচাই করি।" }, en: { title: "Test & launch", text: "We check speed, mobile usability, SEO essentials and core user flows." } }
] as const;

export const plans = [
  { featured: false, name: { bn: "Launch", en: "Launch" }, price: { bn: "৳ 12,000", en: "৳ 12,000" }, description: { bn: "ছোট ব্যবসা বা personal brand-এর জন্য", en: "For a small business or personal brand" }, features: { bn: ["Up to 5 responsive pages", "Contact / WhatsApp integration", "Basic on-page SEO", "Speed optimization"], en: ["Up to 5 responsive pages", "Contact / WhatsApp integration", "Basic on-page SEO", "Speed optimization"] } },
  { featured: true, name: { bn: "Growth", en: "Growth" }, price: { bn: "কাস্টম কোট", en: "Custom quote" }, description: { bn: "যেসব ব্র্যান্ডের দরকার polished, strategic web presence", en: "For brands that need a polished, strategic web presence" }, features: { bn: ["Custom UI/UX design", "CMS-ready content structure", "Advanced SEO architecture", "Analytics-ready setup", "Priority support"], en: ["Custom UI/UX design", "CMS-ready content structure", "Advanced SEO architecture", "Analytics-ready setup", "Priority support"] } },
  { featured: false, name: { bn: "Commerce", en: "Commerce" }, price: { bn: "কাস্টম কোট", en: "Custom quote" }, description: { bn: "পণ্য, order ও operations-এর জন্য full ecommerce setup", en: "For products, orders and full ecommerce operations" }, features: { bn: ["Product & category system", "Order management foundation", "Payment integration-ready", "Admin dashboard", "Scalable backend"], en: ["Product & category system", "Order management foundation", "Payment integration-ready", "Admin dashboard", "Scalable backend"] } }
] as const;

export const faqs = [
  { bn: { q: "ওয়েবসাইট তৈরি করতে কত সময় লাগে?", a: "Scope, content ও feature অনুযায়ী সময় নির্ভর করে। একটি focused landing page সাধারণত দ্রুত হয়; custom web app বা ecommerce project-এর সময়সীমা বেশি হয়। কাজ শুরুর আগে আমরা timeline পরিষ্কার করি।" }, en: { q: "How long does a website take?", a: "Timing depends on scope, content and features. A focused landing page is usually quicker; a custom web app or ecommerce project needs more time. We confirm the timeline before work begins." } },
  { bn: { q: "আমি কি পরে নিজে content update করতে পারব?", a: "হ্যাঁ। Admin panel বা CMS scope-এ থাকলে project, blog, service content ও basic information সহজে update করার ব্যবস্থা রাখা যাবে।" }, en: { q: "Can I update content later?", a: "Yes. When an admin panel or CMS is included in scope, you can update projects, blog posts, service content and basic information more easily." } },
  { bn: { q: "আপনারা domain ও hosting setup করেন?", a: "হ্যাঁ, প্রয়োজন হলে domain, hosting, DNS, SSL এবং deployment-এর পুরো process-এ সাহায্য করা হয়।" }, en: { q: "Do you help with domain and hosting?", a: "Yes. When needed, we can guide the full process: domain, hosting, DNS, SSL and deployment." } },
  { bn: { q: "শুধু design, নাকি backend-ও করেন?", a: "দুইটিই করা হয়। Landing page থেকে শুরু করে secured API, database, admin dashboard এবং custom workflows পর্যন্ত complete solution দেওয়ার লক্ষ্য থাকে।" }, en: { q: "Do you build only design, or the backend too?", a: "Both. From landing pages to secure APIs, databases, admin dashboards and custom workflows, the aim is to deliver a complete solution." } }
] as const;

export const defaultProjects = [
  { title: "Nexa Commerce", slug: "nexa-commerce", category: "Ecommerce", tags: ["Next.js", "UX", "SEO"], excerpt: "A fast, product-focused storefront concept built around mobile shopping behavior.", year: "2026", imageUrl: "" },
  { title: "Northline Studio", slug: "northline-studio", category: "Brand Website", tags: ["Brand", "Responsive"], excerpt: "A visual-first service website with clear service pathways and lead-focused content.", year: "2026", imageUrl: "" },
  { title: "SwiftDesk Portal", slug: "swiftdesk-portal", category: "Web App", tags: ["Dashboard", "Workflow"], excerpt: "A streamlined client portal concept for managing requests, files and project updates.", year: "2026", imageUrl: "" }
];

export const defaultPosts = [
  {
    slug: "fast-website-marketing-budget",
    publishedAt: "2026-06-25",
    coverImage: "/images/dreamspace-web-development-poster.png",
    bn: {
      title: "দ্রুত ওয়েবসাইট কেন আপনার marketing budget-কে আরও কার্যকর করে",
      excerpt: "লোডিং স্পিড, প্রথম impression এবং সহজ navigation—এই তিনটি জিনিস আপনার বিজ্ঞাপনের প্রতিটি click-কে আরও মূল্যবান করে তুলতে পারে।",
      category: "Growth",
      readingTime: "৪ মিনিট",
      content: `বিজ্ঞাপন থেকে একজন visitor আপনার ওয়েবসাইটে আসার পর প্রথম কয়েক সেকেন্ডে সে সিদ্ধান্ত নিতে শুরু করে—থাকবে, নাকি চলে যাবে। তাই শুধু সুন্দর design থাকলেই যথেষ্ট নয়; website-টি দ্রুত, পরিষ্কার এবং action নেওয়ার মতো সহজ হতে হবে।

একটি ধীর website-এ visitor product, service বা offer দেখার আগেই page ছেড়ে যেতে পারে। এতে বিজ্ঞাপনের click এসেছে, কিন্তু সম্ভাব্য lead বা order তৈরি হয়নি। দ্রুত website সেই অপ্রয়োজনীয় loss কমাতে সাহায্য করে।

## যে বিষয়গুলো আগে ঠিক করা দরকার

• Mobile-first layout: বেশিরভাগ visitor ফোন থেকে আসে, তাই button, form ও navigation thumb-friendly হওয়া জরুরি।
• Optimized image: বড় image file page speed কমায়। সঠিক format, compression এবং responsive sizing রাখা দরকার।
• Clear CTA: visitor যেন বুঝতে পারে পরের কাজটি কী—WhatsApp message, quote request, order বা call।
• Trust signal: real contact number, delivery/payment information, review এবং clear policy বিশ্বাস তৈরি করে।

Marketing budget থেকে ভালো ফল পেতে landing page এবং ad message-এর মধ্যে একই কথা, একই offer এবং একই visual direction রাখা জরুরি। একটি focused page অনেক সময় generic homepage-এর চেয়ে ভালো conversion দিতে পারে।

শেষ কথা হলো: website speed শুধু technical বিষয় নয়। এটি আপনার paid marketing, brand trust এবং customer experience-এর অংশ।`
    },
    en: {
      title: "How a fast website makes your marketing budget work harder",
      excerpt: "Loading speed, first impressions and clear navigation can make every advertising click more valuable.",
      category: "Growth",
      readingTime: "4 min",
      content: `When a visitor arrives from an advertisement, they begin deciding within the first few seconds whether to stay or leave. A website needs more than a polished design: it must load quickly, feel clear and make the next action easy.

On a slow website, people may leave before they see the product, service or offer. The ad click happened, but the potential lead or order did not. A fast website helps reduce that avoidable loss.

## What to improve first

• Use a mobile-first layout, because most visitors arrive from phones.
• Optimize images with the right formats, compression and responsive sizing.
• Keep a clear call to action: message on WhatsApp, request a quote, place an order or call.
• Show trust signals such as real contact information, payment details, delivery information, reviews and clear policies.

Your landing page should match the offer and message from your advertisement. A focused page often converts better than sending every visitor to a broad homepage.

Website speed is not only a technical concern. It is part of your marketing efficiency, brand trust and customer experience.`
    }
  },
  {
    slug: "ecommerce-project-checklist",
    publishedAt: "2026-06-18",
    coverImage: "/images/dreamspace-web-development-poster.png",
    bn: {
      title: "ই-কমার্স ওয়েবসাইট শুরু করার আগে যে প্রস্তুতিগুলো জরুরি",
      excerpt: "পণ্য, ছবি, delivery policy, payment method এবং order management—শুরুতেই এই বিষয়গুলো clear হলে project দ্রুত ও সুন্দরভাবে এগোয়।",
      category: "Ecommerce",
      readingTime: "৬ মিনিট",
      content: `ই-কমার্স ওয়েবসাইটে শুধু product upload করলেই কাজ শেষ হয় না। ভালো shopping experience তৈরি করতে হলে customer কীভাবে product খুঁজবে, order করবে এবং support পাবে—সেটা আগে থেকেই পরিকল্পনা করতে হয়।

## শুরু করার checklist

• Product information: প্রতিটি পণ্যের নাম, দাম, variant, stock, size/colour, description ও clear photo প্রস্তুত রাখুন।
• Category structure: কোন পণ্য কোন category-তে যাবে, filter লাগবে কি না এবং best seller কীভাবে দেখাবেন তা ঠিক করুন।
• Delivery policy: delivery area, charge, estimated time এবং return policy স্পষ্ট করে লিখুন।
• Payment: Cash on delivery, mobile banking, card বা payment gateway—কোন options থাকবে তা নির্ধারণ করুন।
• Order workflow: নতুন order এলে কে দেখবে, confirmation কে দেবে, courier booking কীভাবে হবে—এই process আগে ঠিক করুন।

## Design-এর সময় কী দেখা হয়

Mobile screen-এ product image, price, add-to-cart এবং checkout action সহজে দেখতে পাওয়া জরুরি। একই সঙ্গে customer যেন delivery charge, product availability ও payment option নিয়ে বিভ্রান্ত না হয়।

Website-এর admin panel থেকে product, order, banner এবং blog সহজে update করা গেলে long-term operation অনেক সহজ হয়। তাই design-এর সঙ্গে backend workflow-ও সমান গুরুত্বপূর্ণ।

একটি পরিষ্কার checklist নিয়ে শুরু করলে development দ্রুত হয়, revision কমে এবং launch-এর পর customer experience ভালো থাকে।`
    },
    en: {
      title: "What to prepare before starting an ecommerce website",
      excerpt: "Products, images, delivery policy, payment methods and order management need to be clear before the project begins.",
      category: "Ecommerce",
      readingTime: "6 min",
      content: `An ecommerce website is more than uploading products. A good shopping experience needs a plan for how customers discover products, place orders and get support.

## Starting checklist

• Prepare product names, prices, variants, stock, sizes or colours, descriptions and clear images.
• Decide the category and filter structure, including how best sellers should appear.
• Clarify delivery areas, charges, estimated times and return policy.
• Choose payment options such as cash on delivery, mobile banking, cards or a payment gateway.
• Define the order workflow: who sees a new order, who confirms it and how courier booking happens.

## What good ecommerce design considers

On mobile, product image, price, add-to-cart and checkout actions must be immediately clear. Customers should never be confused about delivery charges, product availability or payment options.

An admin panel that makes products, orders, banners and blog posts easy to update also makes long-term operations smoother. Backend workflow matters as much as storefront design.

Starting with a clear checklist makes development faster, reduces revisions and improves the customer experience after launch.`
    }
  },
  {
    slug: "seo-foundations",
    publishedAt: "2026-06-10",
    bn: {
      title: "ওয়েবসাইটের শুরু থেকেই যে SEO foundation থাকা প্রয়োজন",
      excerpt: "Search engine যেন আপনার page বুঝতে পারে এবং visitor যেন দ্রুত প্রয়োজনীয় তথ্য পায়—এই দুইটি লক্ষ্য থেকেই ভালো SEO foundation শুরু হয়।",
      category: "SEO",
      readingTime: "৫ মিনিট",
      content: `SEO শুধু কয়েকটি keyword যোগ করার কাজ নয়। একটি website-এর page structure, title, description, image text, loading speed এবং internal link—সবকিছু একসাথে search visibility-তে ভূমিকা রাখে।

## শুরু থেকেই রাখুন

• প্রতিটি page-এর unique title ও meta description।
• পরিষ্কার heading hierarchy: একটি মূল H1, তারপর logical H2 ও H3।
• Meaningful URL slug যেমন /services/ecommerce বা /blog/seo-foundations।
• Image-এর alt text, যাতে image এবং content-এর সম্পর্ক বোঝা যায়।
• Sitemap এবং robots file, যাতে search crawler গুরুত্বপূর্ণ page খুঁজে পায়।
• Mobile-friendly, fast layout এবং accessible button/link।

Content লেখার সময় শুধু search engine-এর জন্য লেখা উচিত নয়। মানুষের প্রশ্নের উত্তর আগে দিতে হবে। যেমন, একটি ecommerce service page-এ service কী, কার জন্য, কী কী থাকবে, আনুমানিক process কী এবং কীভাবে contact করবে—এগুলো পরিষ্কার হওয়া দরকার।

SEO একটি চলমান কাজ। ভালো foundation দিয়ে শুরু করলে পরে blog, portfolio এবং service page যোগ করার সময় website-কে grow করা অনেক সহজ হয়।`
    },
    en: {
      title: "SEO basics that should be part of a website from day one",
      excerpt: "A strong SEO foundation begins with helping search engines understand your pages and helping visitors find what they need quickly.",
      category: "SEO",
      readingTime: "5 min",
      content: `SEO is not only about adding keywords. Page structure, titles, descriptions, image text, loading speed and internal links all contribute to search visibility.

## Include these from the start

• A unique title and meta description for every page.
• Clear heading hierarchy with one main H1 and logical H2 and H3 headings.
• Meaningful URL slugs such as /services/ecommerce or /blog/seo-foundations.
• Image alt text that explains the relationship between an image and its content.
• Sitemap and robots files so crawlers can find important pages.
• A fast mobile-friendly layout with accessible buttons and links.

Write content for people first. A service page should clearly explain what the service is, who it is for, what is included, what the process looks like and how to get in touch.

SEO is ongoing work. Starting with a solid foundation makes it much easier to grow with new blog posts, portfolio work and service pages later.`
    }
  }
];
