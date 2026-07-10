import type { Locale } from "@/content/site";

export type ArticleSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type ServiceArticle = {
  lead: string;
  idealFor: string[];
  deliverables: string[];
  sections: ArticleSection[];
  process: string[];
  outcome: string;
};

type BilingualArticle = Record<Locale, ServiceArticle>;

export const serviceArticles: Record<string, BilingualArticle> = {
  "business-website": {
    bn: {
      lead: "একটি বিজনেস ওয়েবসাইট আপনার প্রতিষ্ঠানের ডিজিটাল অফিসের মতো। কেউ Google, Facebook, referral বা বিজ্ঞাপন থেকে আসার পর কয়েক সেকেন্ডের মধ্যে যেন বুঝতে পারে আপনি কী করেন, কার জন্য করেন এবং কেন আপনাকেই বেছে নেবে—সেটাই এই ওয়েবসাইটের মূল কাজ।",
      idealFor: ["কর্পোরেট কোম্পানি ও স্টার্টআপ", "সার্ভিস-ভিত্তিক ব্যবসা", "এজেন্সি, কনসালট্যান্ট ও ব্যক্তিগত ব্র্যান্ড", "পোর্টফোলিও বা প্রফেশনাল প্রোফাইল"],
      deliverables: ["কাস্টম হোমপেজ ও সার্ভিস পেজ", "মোবাইল, ট্যাব ও ডেস্কটপ responsive layout", "কনট্যাক্ট ফর্ম, WhatsApp ও call CTA", "SEO metadata, sitemap ও robots setup", "Portfolio, testimonial ও FAQ section", "পরিষ্কার code structure ও deployment support"],
      sections: [
        { title: "শুধু সুন্দর দেখালেই কেন যথেষ্ট নয়", paragraphs: ["বিজনেস ওয়েবসাইটের কাজ শুধু ব্র্যান্ডকে সুন্দর দেখানো নয়। এটি visitor-কে সঠিক তথ্যের দিকে নিয়ে যায়, বিশ্বাস তৈরি করে এবং যোগাযোগের জন্য একটি সহজ পথ দেয়। তাই design করার আগে আমরা প্রথমে বুঝি আপনার customer কে, তারা কী প্রশ্ন করে এবং কোন action নেওয়াটা আপনার জন্য সবচেয়ে গুরুত্বপূর্ণ।", "এরপর page-এর ভেতরে এমন একটি information flow তৈরি করা হয় যাতে visitor অপ্রয়োজনীয় ঘুরপাক না খেয়ে আপনার service, proof, process এবং contact option দেখতে পায়।"] },
        { title: "কনটেন্ট ও page structure", paragraphs: ["অনেক business website-এ service আছে, কিন্তু visitor বুঝতে পারে না কোন service তার জন্য প্রযোজ্য। এই সমস্যা এড়াতে প্রতিটি page-এর জন্য পরিষ্কার heading, short explanation, benefit, proof এবং call-to-action রাখা হয়।", "Home page attention তৈরি করে, service page সিদ্ধান্ত নিতে সাহায্য করে এবং contact page inquiry নেওয়ার কাজ করে। প্রয়োজন হলে About, Team, Case Study, Blog এবং FAQ page যুক্ত করা যায়।"], bullets: ["প্রতিটি service-এর আলাদা detail page", "Trust signal: phone, email, address, testimonial ও policy", "ক্যাম্পেইন অনুযায়ী landing page যুক্ত করার সুযোগ", "ভবিষ্যতে নতুন service বা portfolio যুক্ত করার মতো structure"] },
        { title: "Performance, SEO ও future update", paragraphs: ["একটি international-standard feel মানে heavy animation বা বড় image নয়। Real quality আসে দ্রুত loading, সহজ navigation, readable typography এবং clean responsive behaviour থেকে। তাই image optimization, semantic heading, metadata এবং sitemap শুরু থেকেই রাখা হয়।", "ওয়েবসাইট এমনভাবে তৈরি করা হয় যাতে পরে নতুন page, project, blog বা feature যোগ করতে হলে পুরো system নতুন করে বানাতে না হয়।"] },
        { title: "প্রজেক্ট শুরু করার আগে কী লাগবে", paragraphs: ["আপনার logo, company introduction, service list, contact information, social link এবং কয়েকটি reference website থাকলে কাজ দ্রুত শুরু করা যায়। Content পুরো প্রস্তুত না থাকলেও সমস্যা নেই; DreamSpace IT আপনার তথ্যের ভিত্তিতে professional page copy সাজিয়ে দিতে পারে।"] }
      ],
      process: ["Brand, audience ও business goal বোঝা", "Page map ও content direction তৈরি", "Custom UI design ও responsive development", "Testing, SEO setup এবং launch support"],
      outcome: "শেষে আপনি পাবেন এমন একটি professional website যা mobile-এ সুন্দর, দ্রুত, সহজে update করা যায় এবং নতুন customer-এর কাছে আপনার business-কে বেশি বিশ্বাসযোগ্য করে তোলে।"
    },
    en: {
      lead: "A business website works like your digital office. When someone arrives from Google, Facebook, a referral or an advertisement, it should quickly explain what you do, who you help and why they should choose you.",
      idealFor: ["Corporate companies and startups", "Service-based businesses", "Agencies, consultants and personal brands", "Portfolio and professional profile websites"],
      deliverables: ["Custom homepage and service pages", "Responsive layouts for mobile, tablet and desktop", "Contact forms, WhatsApp and call CTAs", "SEO metadata, sitemap and robots setup", "Portfolio, testimonials and FAQ sections", "Clean code structure and deployment support"],
      sections: [
        { title: "Why looking polished is not enough", paragraphs: ["A business website should do more than make a brand look good. It needs to guide visitors to the right information, build trust and make contacting you easy. Before design begins, we look at your audience, their questions and the action that matters most to your business.", "That becomes a clear information flow so visitors can understand your services, proof, process and contact options without unnecessary searching."] },
        { title: "Content and page structure", paragraphs: ["Many business websites list services without helping visitors understand which service is right for them. We avoid that with clear headings, short explanations, benefits, proof and focused calls to action on every page.", "The homepage earns attention, service pages support a decision and the contact page captures the inquiry. About, team, case study, blog and FAQ pages can be added as the business grows."], bullets: ["A detailed page for every service", "Trust signals: phone, email, address, testimonials and policies", "Campaign landing pages when needed", "A structure ready for new services and portfolio work"] },
        { title: "Performance, SEO and future updates", paragraphs: ["An international-standard feel is not about heavy animation or oversized images. Real quality comes from fast loading, simple navigation, readable typography and reliable responsive behaviour. Image optimization, semantic headings, metadata and a sitemap are part of the build from the start.", "The site is structured so that future pages, projects, blog posts or features do not require rebuilding everything from scratch."] },
        { title: "What helps us start", paragraphs: ["A logo, company introduction, service list, contact information, social links and a few reference websites are enough to begin quickly. If your content is not ready yet, DreamSpace IT can shape professional page copy from your information."] }
      ],
      process: ["Understand the brand, audience and business goal", "Create page map and content direction", "Design custom UI and develop responsively", "Test, set up SEO essentials and support launch"],
      outcome: "You receive a professional website that looks excellent on mobile, loads quickly, stays easy to update and makes your business more credible to new customers."
    }
  },
  ecommerce: {
    bn: {
      lead: "ই-কমার্স ওয়েবসাইট শুধু পণ্য সাজানোর জায়গা নয়; এটি আপনার sales process-এর একটি গুরুত্বপূর্ণ অংশ। Customer যেন পণ্য খুঁজে পায়, দাম ও তথ্য বুঝতে পারে, ভরসা নিয়ে order করে এবং পরে update পায়—সেই পুরো journey মাথায় রেখেই store তৈরি করা হয়।",
      idealFor: ["ফ্যাশন, beauty ও lifestyle brand", "গ্রোসারি ও daily essentials store", "ইলেকট্রনিক্স ও gadget seller", "Facebook/Instagram seller যারা নিজস্ব website চান"],
      deliverables: ["Category, product ও filter structure", "Mobile-first storefront design", "Cart, checkout ও order workflow", "Payment এবং courier integration-ready architecture", "Product/order management admin foundation", "Campaign banner, coupon ও promotional section"],
      sections: [
        { title: "শপিং experience কোথা থেকে শুরু হয়", paragraphs: ["Customer প্রথমে product page-এ আসে না; অনেক সময় সে category, Facebook ad, Google search বা একটি shared link থেকে আসে। তাই storefront-এর প্রথম impression, menu, search, category এবং product card একসাথে সহজ হতে হয়।", "আমরা এমন UI তৈরি করি যাতে ছোট screen-এ product image, price, offer, variant, stock এবং add-to-cart button চোখে পড়ে।"] },
        { title: "Order flow যেন আপনার team-এর জন্যও সহজ হয়", paragraphs: ["Order পাওয়া শুধু শুরু। এরপর confirmation, payment status, delivery address, courier booking এবং customer update সামলাতে হয়। তাই back-office workflow design করার সময় business owner বা team কীভাবে কাজ করবে সেটিও দেখা হয়।", "Project scope অনুযায়ী admin panel, order status, product stock, coupon, banner এবং content management-এর ব্যবস্থা রাখা যায়।"], bullets: ["Cash on delivery ও online payment-ready flow", "Courier integration-এর জন্য future-ready setup", "Order status: pending, confirmed, shipped, delivered", "Product variant, size, colour ও stock information"] },
        { title: "বিশ্বাস তৈরি করে যে বিষয়গুলো", paragraphs: ["Online buyer product হাতে নিয়ে দেখতে পারে না। তাই clear photo, price, delivery charge, return policy, contact number এবং payment information খুব গুরুত্বপূর্ণ। একটি পরিষ্কার policy এবং visible support option buyer-এর hesitation কমায়।", "Website-এর প্রতিটি CTA এমনভাবে রাখা হয় যাতে customer পরের step নিয়ে confused না হয়।"] },
        { title: "Growth-এর জন্য প্রস্তুত store", paragraphs: ["Launch-এর পরেও store-এ নতুন product, campaign, seasonal offer এবং content যোগ হবে। সেই বাস্তবতা মাথায় রেখেই reusable component ও scalable structure তৈরি করা হয়। Google-friendly product URL, structured content এবং image optimization long-term growth-এ সাহায্য করে।"] }
      ],
      process: ["পণ্য, category ও operations mapping", "Storefront ও checkout UX plan", "Development, data setup ও admin flow", "Mobile checkout test, launch এবং handover"],
      outcome: "আপনি পাবেন এমন একটি online store যা দেখতে premium, mobile-এ দ্রুত এবং আপনার order operation চালানোর জন্য practical।"
    },
    en: {
      lead: "An ecommerce website is not only a place to display products. It is a critical part of your sales process, built around helping customers find items, understand the offer, order with confidence and receive updates afterwards.",
      idealFor: ["Fashion, beauty and lifestyle brands", "Grocery and daily essentials stores", "Electronics and gadget sellers", "Facebook and Instagram sellers who need their own website"],
      deliverables: ["Category, product and filter structure", "Mobile-first storefront design", "Cart, checkout and order workflow", "Payment and courier integration-ready architecture", "Admin foundation for products and orders", "Campaign banners, coupons and promotional sections"],
      sections: [
        { title: "Where the shopping experience begins", paragraphs: ["Customers do not always arrive on a product page. They may come from a category, a Facebook ad, a Google result or a shared link. The storefront’s first impression, menu, search, categories and product cards all need to feel effortless together.", "We design the mobile UI so images, prices, offers, variants, stock information and add-to-cart actions are immediately visible."] },
        { title: "An order flow that helps your team too", paragraphs: ["Receiving the order is only the start. Your team needs to confirm it, manage payment status, verify addresses, book couriers and update customers. The operational workflow matters as much as the storefront.", "Depending on scope, the build can include an admin foundation for order status, stock, coupons, banners and content updates."], bullets: ["Cash-on-delivery and online-payment-ready flows", "Courier integration-ready structure", "Order statuses: pending, confirmed, shipped and delivered", "Product variants, sizes, colours and stock information"] },
        { title: "What creates buyer trust", paragraphs: ["Online buyers cannot hold the product first. Clear photos, pricing, delivery charges, return policies, contact details and payment information reduce hesitation. A visible support option and clear policies make a store feel safer.", "Every call to action is placed so that customers know the next step without confusion."] },
        { title: "A store ready to grow", paragraphs: ["After launch, your store will need new products, campaigns, seasonal offers and content. Reusable components and scalable structure make those updates easier. Search-friendly product URLs, structured content and image optimization support long-term growth too."] }
      ],
      process: ["Map products, categories and operations", "Plan storefront and checkout UX", "Develop the store, data setup and admin flow", "Test mobile checkout, launch and hand over"],
      outcome: "You get an online store that feels premium, moves quickly on mobile and supports practical order operations behind the scenes."
    }
  },
  "landing-page": {
    bn: {
      lead: "একটি landing page-এর একটিই কাজ: visitor-কে একটি নির্দিষ্ট action নিতে সাহায্য করা। সেটা হতে পারে WhatsApp message, booking, quote request, registration বা order। তাই landing page-এ অপ্রয়োজনীয় menu ও distraction কমিয়ে offer-এর ওপর ফোকাস রাখা হয়।",
      idealFor: ["Facebook ও Google ads campaign", "নতুন product বা service launch", "Lead generation ও appointment booking", "Event registration, course বা offer promotion"],
      deliverables: ["Offer-focused copy and page flow", "Responsive design with a clear CTA", "Lead form, WhatsApp or booking integration", "Social proof, FAQ and urgency sections", "Pixel/analytics-ready placement", "Fast-loading campaign-ready setup"],
      sections: [
        { title: "সব visitor একই কথা শুনতে চায় না", paragraphs: ["যে visitor ad থেকে আসে, সে সাধারণত একটি নির্দিষ্ট problem বা offer নিয়ে আসে। তাকে broad company information দিলে সে আগ্রহ হারাতে পারে। Landing page সেই নির্দিষ্ট message-কে clear করে এবং visitor-এর প্রশ্নের উত্তর দ্রুত দেয়।", "Headline, benefit, proof, price বা offer, FAQ এবং CTA—এই flow একসাথে visitor-কে decision নিতে সাহায্য করে।"] },
        { title: "High-converting structure", paragraphs: ["প্রথম screen-এ offer কী, কার জন্য এবং কেন গুরুত্বপূর্ণ—এটি বোঝা জরুরি। এরপর benefit, feature, process, result, social proof এবং common objection-এর উত্তর রাখা হয়।", "Button শুধু সুন্দর হলেই হবে না; button-এর ভাষা এবং placement-ও গুরুত্বপূর্ণ। ‘ফ্রি কনসাল্টেশন নিন’, ‘WhatsApp-এ অর্ডার করুন’ বা ‘সিট বুক করুন’—যেটা goal-এর সঙ্গে মেলে সেটিই ব্যবহার করা হয়।"], bullets: ["একটি clear primary action", "Ad message-এর সঙ্গে একই copy ও visual direction", "Mobile thumb-friendly CTA", "বিশ্বাস তৈরির জন্য testimonial, review বা guarantee"] },
        { title: "Speed এবং tracking", paragraphs: ["Paid ad থেকে traffic আনলে page loading speed সরাসরি budget-এর সঙ্গে যুক্ত হয়ে যায়। তাই landing page-এ unnecessary asset কমিয়ে performance-first build করা হয়।", "Pixel, analytics এবং form event tracking-এর জায়গা আগে থেকে রাখা যায়, যাতে campaign শুরু হলে কোন ad বা audience ভালো কাজ করছে তা বোঝা সহজ হয়।"] },
        { title: "Campaign launch-এর আগে প্রয়োজনীয় তথ্য", paragraphs: ["Offer, target audience, price, deadline, primary CTA, ad copy এবং ব্যবহারযোগ্য photo বা video থাকলে landing page দ্রুত তৈরি করা যায়। আপনার কাছে সব content না থাকলে DreamSpace IT conversion-focused content structure সাজিয়ে দেয়।"] }
      ],
      process: ["Offer ও audience review", "Copy, visual direction ও conversion flow", "Fast responsive implementation", "Tracking setup, mobile QA ও campaign launch"],
      outcome: "আপনি পাবেন এমন একটি focused page যা বিজ্ঞাপনের traffic-কে পরিষ্কারভাবে lead, booking বা order-এর দিকে নিয়ে যায়।"
    },
    en: {
      lead: "A landing page has one job: help a visitor take one specific action. That can be a WhatsApp message, booking, quote request, registration or order. The page reduces distractions and keeps the offer at the centre.",
      idealFor: ["Facebook and Google ad campaigns", "New product or service launches", "Lead generation and appointment booking", "Event registrations, courses and promotional offers"],
      deliverables: ["Offer-focused copy and page flow", "Responsive design with a clear CTA", "Lead form, WhatsApp or booking integration", "Social proof, FAQ and urgency sections", "Pixel and analytics-ready placement", "Fast-loading campaign-ready setup"],
      sections: [
        { title: "Not every visitor needs the same message", paragraphs: ["Visitors from an ad often arrive with one particular problem or offer in mind. Sending them into broad company information can lose attention. A landing page makes the relevant message clear and answers their immediate questions quickly.", "Headline, benefits, proof, price or offer, FAQ and CTA work together to make a decision easier."] },
        { title: "A high-converting structure", paragraphs: ["The first screen needs to explain the offer, who it is for and why it matters. Then the page can present benefits, features, process, results, social proof and answers to common objections.", "A button is not effective just because it looks good. Its label and placement matter. ‘Get a free consultation’, ‘Order on WhatsApp’ or ‘Book your seat’ should match the actual campaign goal."], bullets: ["One clear primary action", "Ad message matched to page copy and visual direction", "Mobile thumb-friendly CTA", "Testimonials, reviews or guarantees that build trust"] },
        { title: "Speed and tracking", paragraphs: ["When paid ads drive traffic, loading speed becomes part of the budget. We keep campaign pages performance-first by avoiding unnecessary assets and weight.", "Pixel, analytics and form-event tracking can be planned in advance so it is easier to see which ads and audiences are producing results."] },
        { title: "What helps launch a campaign quickly", paragraphs: ["An offer, target audience, price, deadline, primary CTA, ad copy and usable imagery are enough to begin. If all content is not ready, DreamSpace IT can shape the conversion-focused content structure with you."] }
      ],
      process: ["Review the offer and audience", "Set copy, visual direction and conversion flow", "Build rapidly and responsively", "Set up tracking, perform mobile QA and launch"],
      outcome: "You get a focused page that guides campaign traffic clearly toward a lead, booking or order."
    }
  },
  "web-app": {
    bn: {
      lead: "যখন spreadsheet, Messenger বা manual follow-up দিয়ে কাজ সামলানো কঠিন হয়ে যায়, তখন একটি custom web application আপনার team-এর কাজকে একটি জায়গায় আনতে পারে। Dashboard, booking system, client portal বা internal workflow—প্রতিটি solution আপনার বাস্তব process বুঝে তৈরি করা হয়।",
      idealFor: ["Booking, appointment ও service workflow", "Client portal ও file/request management", "Internal operations dashboard", "Custom data entry, reporting ও approval process"],
      deliverables: ["Workflow discovery and feature mapping", "Role-based dashboard structure", "Database and API design", "Secure forms and validation", "Responsive interface for daily use", "Testing, handover and future expansion plan"],
      sections: [
        { title: "Problem আগে, feature পরে", paragraphs: ["একটি web app শুরু হয় feature list দিয়ে নয়; শুরু হয় কাজের flow বোঝা দিয়ে। কে কী তথ্য দিচ্ছে, কে approve করছে, কোথায় delay হচ্ছে এবং কোন report দরকার—এই প্রশ্নগুলোর উত্তর থেকেই system scope তৈরি হয়।", "এই discovery phase যত পরিষ্কার হয়, development তত কম revision-এ এবং বেশি বাস্তবসম্মত হয়।"] },
        { title: "User role ও data structure", paragraphs: ["সব user একই কাজ করে না। Admin, manager, staff, client বা customer-এর জন্য আলাদা access এবং আলাদা screen দরকার হতে পারে। আমরা role-based design করি যাতে প্রত্যেকে নিজের প্রয়োজনীয় কাজটিই সহজে দেখতে পায়।", "Database structure এমনভাবে ভাবা হয় যাতে data duplicate না হয়, search/report করা যায় এবং ভবিষ্যতে নতুন module যোগ করা সহজ থাকে।"], bullets: ["Login, role ও permission planning", "Form validation ও useful error message", "Search, filter, status ও activity flow", "Environment-based configuration এবং secure secret handling"] },
        { title: "Build, test এবং handover", paragraphs: ["Web app-এর ক্ষেত্রে small iteration গুরুত্বপূর্ণ। প্রথমে core workflow তৈরি করে test করা হয়, তারপর feedback অনুযায়ী supporting feature যোগ করা হয়। এতে এমন feature-এ সময় নষ্ট হয় না যা team আসলে ব্যবহার করবে না।", "Launch-এর আগে responsive behaviour, edge case, form validation এবং user experience পরীক্ষা করা হয়। প্রয়োজন হলে admin training বা handover document দেওয়া হয়।"] },
        { title: "Scalability এবং support", paragraphs: ["ভালো web app একদিনে শেষ হয়ে যায় না। Business বাড়লে user, report, integration বা automation-এর প্রয়োজন বদলাতে পারে। তাই clean component structure, documentation এবং maintainable code রাখা হয় যাতে পরের version তৈরি করা সহজ হয়।"] }
      ],
      process: ["Workflow discovery ও requirement workshop", "Scope, user role ও data model design", "Iterative development ও review", "Testing, training, launch ও support plan"],
      outcome: "আপনি পাবেন এমন একটি practical web system যা manual কাজ কমায়, information গুছিয়ে রাখে এবং team-এর কাজের গতি বাড়ায়।"
    },
    en: {
      lead: "When spreadsheets, Messenger and manual follow-ups are no longer enough, a custom web application can bring your team’s work into one place. Dashboards, booking systems, client portals and internal workflows are shaped around your real process.",
      idealFor: ["Booking, appointment and service workflows", "Client portals and file or request management", "Internal operations dashboards", "Custom data entry, reporting and approval processes"],
      deliverables: ["Workflow discovery and feature mapping", "Role-based dashboard structure", "Database and API design", "Secure forms and validation", "Responsive interface for daily use", "Testing, handover and future expansion plan"],
      sections: [
        { title: "Problem first, feature second", paragraphs: ["A web app should not begin with a feature list. It begins with understanding how work moves: who submits information, who approves it, where delays happen and which reports matter. Those answers define the right system scope.", "The clearer the discovery phase, the fewer unnecessary revisions the project needs later."] },
        { title: "User roles and data structure", paragraphs: ["Not every user does the same job. Admins, managers, staff, clients and customers may need different access and screens. We use role-aware design so people can focus on what they actually need to do.", "The database is planned to avoid duplicates, support search and reporting, and make future modules easier to add."], bullets: ["Login, role and permission planning", "Form validation with useful error messages", "Search, filters, status and activity flows", "Environment-based configuration and responsible secret handling"] },
        { title: "Build, test and handover", paragraphs: ["Small iterations are valuable for web apps. We build the core workflow first, test it and then add supporting features based on real feedback. That avoids spending time on features that the team will not use.", "Before launch, responsive behaviour, edge cases, form validation and user experience are tested. Admin training or a handover document can be included when useful."] },
        { title: "Scalability and support", paragraphs: ["A useful web app is not frozen on day one. As the business grows, users, reports, integrations and automation needs can change. Clean components, documentation and maintainable code make the next version easier to build."] }
      ],
      process: ["Run a workflow discovery and requirement workshop", "Design scope, user roles and data model", "Develop iteratively and review regularly", "Test, train, launch and define a support plan"],
      outcome: "You receive a practical web system that reduces manual work, keeps information organized and helps the team move faster."
    }
  },
  "ui-ux": {
    bn: {
      lead: "ভালো UI/UX মানে শুধু সুন্দর screen নয়। এটি এমন একটি experience যেখানে user খুব কম চিন্তা করে নিজের কাজটি শেষ করতে পারে। Brand-এর personality, content hierarchy এবং user goal-এর মধ্যে একটি পরিষ্কার ও consistent system তৈরি করাই এই service-এর লক্ষ্য।",
      idealFor: ["নতুন website বা app তৈরি করার আগে", "পুরোনো website redesign", "SaaS dashboard ও internal tool", "Ecommerce checkout বা complex user flow"],
      deliverables: ["User journey and information hierarchy", "Wireframe and responsive screen direction", "Visual UI system and component rules", "Button, form and state planning", "Developer-ready handoff guidance", "Usability-focused review"],
      sections: [
        { title: "User কী করতে চায়, সেখান থেকেই design", paragraphs: ["Design শুরু করার আগে আমরা দেখি user কোন screen থেকে আসছে, সে কী জানতে চায় এবং তার সফল outcome কী। সেই অনুযায়ী information priority ঠিক হয়। এতে page সুন্দর হওয়ার পাশাপাশি ব্যবহারযোগ্যও হয়।", "যে তথ্যটি প্রথমে দরকার, সেটি আগে দেখা যায়; যে action সবচেয়ে জরুরি, সেটি visually clear থাকে।"] },
        { title: "Wireframe থেকে visual system", paragraphs: ["Wireframe মূলত layout-এর চিন্তা পরিষ্কার করে—কোন section আগে আসবে, কোথায় button থাকবে, কোন content ছোট বা বড় হবে। এরপর brand colour, typography, spacing, illustration এবং component behaviour দিয়ে visual direction তৈরি হয়।", "একটি ভালো system একই ধরনের card, button, input এবং message বারবার ব্যবহার করতে সাহায্য করে। এতে design consistent থাকে এবং development দ্রুত হয়।"], bullets: ["Desktop, tablet ও mobile screen consideration", "Empty, loading, error ও success state planning", "Accessible contrast ও readable typography", "Reusable component and design-token mindset"] },
        { title: "Conversion এবং usability", paragraphs: ["User experience-এর লক্ষ্য সবসময় একই নয়। E-commerce-এ goal হতে পারে checkout, service website-এ inquiry, আর dashboard-এ হতে পারে দ্রুত কাজ শেষ করা। Design decision সেই goal অনুযায়ী নেওয়া হয়।", "আমরা visual hierarchy, spacing, button label এবং form friction কমিয়ে এমন journey তৈরি করি যাতে user-এর পরের step অনুমান করতে না হয়।"] },
        { title: "Developer handoff", paragraphs: ["UI design শুধু image file হয়ে থাকলে কাজের সুবিধা হয় না। Developer যেন responsive rules, interaction, component states এবং asset requirement বুঝতে পারে—সেইভাবে handoff note ও implementation direction দেওয়া হয়।"] }
      ],
      process: ["Brand and user context বোঝা", "Flow, wireframe ও information hierarchy", "Visual UI system এবং responsive screens", "Review, refinement ও developer handoff"],
      outcome: "আপনি পাবেন একটি clear interface direction যা user-এর জন্য সহজ, brand-এর জন্য আলাদা এবং development-এর জন্য বাস্তবসম্মত।"
    },
    en: {
      lead: "Good UI/UX is not only a beautiful screen. It is an experience that lets users complete their task with very little effort. This service creates a clear, consistent system between brand personality, content hierarchy and user goals.",
      idealFor: ["Before building a new website or app", "Redesigning an existing website", "SaaS dashboards and internal tools", "Ecommerce checkout or complex user flows"],
      deliverables: ["User journeys and information hierarchy", "Wireframes and responsive screen direction", "Visual UI system and component rules", "Button, form and state planning", "Developer-ready handoff guidance", "Usability-focused review"],
      sections: [
        { title: "Design begins with the user’s job", paragraphs: ["Before designing, we look at where users arrive from, what they need to understand and what a successful outcome looks like. That sets the priority for information and interaction, so the page becomes useful as well as attractive.", "The information needed first appears first, while the action that matters most stays visually clear."] },
        { title: "From wireframe to visual system", paragraphs: ["Wireframes clarify the layout: which section comes first, where actions belong and what content deserves more attention. Then brand colour, typography, spacing, illustration and component behaviour create a full visual direction.", "A strong system makes cards, buttons, inputs and messages reusable. That keeps the experience consistent and makes development faster."], bullets: ["Consideration for desktop, tablet and mobile", "Planning for empty, loading, error and success states", "Accessible contrast and readable typography", "Reusable components and design-token thinking"] },
        { title: "Conversion and usability", paragraphs: ["The goal of user experience is not always the same. Ecommerce may target checkout, a service website may target inquiries and a dashboard may target task completion. Design decisions should follow that goal.", "We reduce form friction and clarify hierarchy, spacing and button labels so users do not have to guess the next step."] },
        { title: "Developer handoff", paragraphs: ["A UI should not remain a static image. Developers need to understand responsive rules, interactions, component states and asset requirements. We provide implementation-focused guidance so the design can become a reliable product."] }
      ],
      process: ["Understand brand and user context", "Create flows, wireframes and hierarchy", "Build the visual UI system and responsive screens", "Review, refine and hand off for development"],
      outcome: "You receive a clear interface direction that feels easy for users, distinctive for the brand and practical for development."
    }
  },
  "seo-growth": {
    bn: {
      lead: "SEO মানে শুধু কিছু keyword যোগ করা নয়। Search engine যেন আপনার page-এর বিষয় বুঝতে পারে এবং visitor যেন দ্রুত তার প্রয়োজনীয় উত্তর পায়—এই দুইটি লক্ষ্যকে একসাথে ধরে technical foundation, content structure এবং measurement setup করা হয়।",
      idealFor: ["নতুন website launch করার আগে", "যে site Google-এ খুঁজে পাওয়া কঠিন", "Service business ও local brand", "Blog ও content-led growth plan"],
      deliverables: ["Technical SEO health checklist", "Metadata, sitemap, robots and schema-ready setup", "Page heading and internal-link review", "Image alt text and URL structure guidance", "Analytics and Search Console-ready placement", "Practical content roadmap"],
      sections: [
        { title: "SEO foundation কেন শুরু থেকেই দরকার", paragraphs: ["Website launch-এর পর অনেক কিছু বদলানো যায়, কিন্তু messy structure, duplicate content বা unclear page hierarchy পরে ঠিক করতে বেশি সময় লাগে। তাই URL, title, heading, internal link এবং speed-এর মতো বিষয় শুরু থেকেই পরিকল্পনায় রাখা ভালো।", "এতে Google-এর জন্য page বুঝতে সহজ হয়, আবার user-এর জন্যও navigation ও information খুঁজে পাওয়া সহজ হয়।"] },
        { title: "On-page content কীভাবে কাজ করে", paragraphs: ["প্রতিটি page একটি নির্দিষ্ট প্রশ্নের উত্তর দেবে। একটি ecommerce page shopping process ব্যাখ্যা করবে, একটি business website page service-এর benefit এবং process বুঝাবে। শুধু keyword repeat না করে user-এর আসল প্রশ্নের উত্তর দিতে হয়।", "Title, meta description, H1, supporting heading, image alt text এবং internal link একসাথে একটি page-এর context তৈরি করে।"], bullets: ["Meaningful page title ও meta description", "একটি clear H1 এবং logical H2/H3", "Readable URL slug", "Related service, blog এবং contact page-এর internal link"] },
        { title: "Technical performance এবং measurement", paragraphs: ["Slow page, broken link, non-responsive layout বা confusing navigation SEO এবং conversion—দুটোকেই প্রভাবিত করতে পারে। তাই performance, mobile usability এবং crawlability নিয়মিত দেখা জরুরি।", "Analytics ও Search Console setup থাকলে কোন page-এ traffic আসছে, কোন query-তে দেখা যাচ্ছে এবং কোন content উন্নত করা দরকার তা বোঝা যায়।"] },
        { title: "Long-term growth plan", paragraphs: ["SEO একটি চলমান কাজ। প্রথমে foundation ঠিক করা হয়, তারপর high-intent service page, helpful blog, portfolio/case study এবং internal linking-এর মাধ্যমে authority বাড়ানো হয়। আপনার business goal অনুযায়ী practical content roadmap তৈরি করা যায়।"] }
      ],
      process: ["Current website বা planned pages audit", "Priority roadmap ও technical foundation", "Content hierarchy ও on-page implementation", "Measurement review এবং ongoing improvement plan"],
      outcome: "আপনি পাবেন এমন একটি SEO-ready foundation যা search visibility, user experience এবং future content growth-এর জন্য শক্ত ভিত্তি তৈরি করে।"
    },
    en: {
      lead: "SEO is not simply adding a few keywords. It is the combined work of helping search engines understand your pages and helping visitors find useful answers quickly through technical foundations, content structure and measurement.",
      idealFor: ["Before launching a new website", "Websites that are hard to find on Google", "Service businesses and local brands", "Blog and content-led growth plans"],
      deliverables: ["Technical SEO health checklist", "Metadata, sitemap, robots and schema-ready setup", "Heading and internal-link review", "Image alt-text and URL structure guidance", "Analytics and Search Console-ready placement", "A practical content roadmap"],
      sections: [
        { title: "Why SEO foundations matter from the start", paragraphs: ["Many things can change after launch, but messy structure, duplicate content and unclear page hierarchy take more work to fix later. URLs, titles, headings, internal links and speed deserve attention from the beginning.", "This helps search engines understand a page and helps visitors find information through clearer navigation too."] },
        { title: "How on-page content works", paragraphs: ["Each page should answer a particular question. An ecommerce page can explain shopping flow, while a business website page can explain a service’s benefits and process. Repeating keywords is not enough; the content must answer real user needs.", "Titles, meta descriptions, H1, supporting headings, image alt text and internal links work together to establish a page’s context."], bullets: ["Meaningful page titles and meta descriptions", "One clear H1 with logical H2 and H3 structure", "Readable URL slugs", "Internal links to relevant services, blog posts and contact paths"] },
        { title: "Technical performance and measurement", paragraphs: ["Slow pages, broken links, non-responsive layouts and confusing navigation can affect both SEO and conversion. Performance, mobile usability and crawlability need regular attention.", "With Analytics and Search Console in place, it becomes easier to understand which pages attract traffic, which queries surface the site and which content should improve."] },
        { title: "A long-term growth plan", paragraphs: ["SEO is ongoing work. The foundation comes first, followed by high-intent service pages, helpful blog posts, portfolio or case studies and stronger internal linking. A practical content roadmap can be shaped around your actual business goals."] }
      ],
      process: ["Audit the existing site or planned pages", "Set a priority roadmap and technical foundation", "Implement content hierarchy and on-page essentials", "Review measurement and define ongoing improvements"],
      outcome: "You receive an SEO-ready foundation that supports search visibility, user experience and future content growth."
    }
  }
};
