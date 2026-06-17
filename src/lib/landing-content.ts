/**
 * Static content for the marketing landing page.
 * Replace these with API-driven data (e.g. /api/v1/jobs/highlights) when the
 * backend is wired up. UI components import from here so copy/data live in one
 * place.
 */

export type NavLink = { label: string; href: string; active?: boolean };

export const navLinks: NavLink[] = [
  { label: "Jobs", href: "#", active: true },
  { label: "Eligibility", href: "#" },
  { label: "Success Stories", href: "#" },
  { label: "About", href: "#" },
];

export type HeroTile = {
  category: string;
  title: string;
  subtitle: string;
  badge: { label: string; tone: "primary" | "error" | "secondary" };
  position: string;
};

export const heroTiles: HeroTile[] = [
  {
    category: "Civil Services",
    title: "UPSC 2024",
    subtitle: "Application Open",
    badge: { label: "88% Match", tone: "primary" },
    position: "top-0 left-10",
  },
  {
    category: "Banking",
    title: "SBI PO 2024",
    subtitle: "750 Vacancies",
    badge: { label: "2 days left", tone: "error" },
    position: "top-20 right-10",
  },
  {
    category: "Central Govt",
    title: "SSC CGL Prelims",
    subtitle: "Check Results",
    badge: { label: "Tier-1 Qualified", tone: "secondary" },
    position: "bottom-0 left-20",
  },
];

export const trustBadges = ["UPSC", "SBI", "RAILWAYS", "SSC", "DEFENCE"];

export type Step = {
  icon: string;
  title: string;
  description: string;
  tone: "primary" | "secondary";
};

export const steps: Step[] = [
  {
    icon: "person_add",
    title: "Build Profile",
    description:
      "Input your qualifications once. Our AI creates a master profile compatible with 5,000+ govt. portals.",
    tone: "primary",
  },
  {
    icon: "auto_awesome",
    title: "Get Matched",
    description:
      "Instant eligibility checks. We only show you jobs you can actually apply for, saving weeks of research.",
    tone: "secondary",
  },
  {
    icon: "verified",
    title: "Apply with Confidence",
    description:
      "One-click applications for supported departments. Never miss a deadline with automated SMS alerts.",
    tone: "primary",
  },
];

export type EligibilityCriterion = { label: string; status: string };

export const eligibilityCriteria: EligibilityCriterion[] = [
  { label: "Age Criteria", status: "Passed" },
  { label: "Education (Graduation)", status: "Passed" },
];

export const aiStats = [
  { value: "5K+", label: "Live Notifications" },
  { value: "0.2s", label: "Match Processing" },
];

export const successAvatars = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAXSjdcuqSGu4I2wFFYGTrB9RWlw84DJkWLEonQLcRmmhpqCbjFYNuHSq6VNcuQ03zZHyO71tlGGwScgbwSUvRHcmbOXmmqSd1RkAuJgyQbJ-ga9RbRjPcLzoErBD98t4A-rnzX0OM76V7C9e0BMxVSfuQBiqw3Yf1DAY5f1qrP6n2ve8ZVmFsmqs-jTCG9815WGI4_ZApDDjqeB-gJ06tP3DNN5EFB2M5O-uwYnxaFSW7dV_al7kXjYSOQhWHrAe8BKIJIm12e92o",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCEK3wkzo_1as5Hn9wYB-rZuQxQxGMOT8QIFvCyiCXHnzngHc8ltFfCmZlmMFnIQyzXk1tU09Z6B7bqbuI66qk-VjzR0DBpM3-HnQ-rsSgwIv7b-pq-RY7sLCIbAKNsgOuJSBExeYE2OsS9IZtSPJQ-5G1AbCbsrywyx296TwcOTdBuI7RqwuLWSbPd6RUwIp9NgW5KOloLLt8gzs1BgnCjCr8Ly-DCaPEClXmB1ZudMlT_cB8E9rfAUPLrTdM4IjCfkV-sGOMt2rc",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDxRhZXpjor1jygcEQ6EVBmxPfcrxIA49A-t67TAqey6IKSOr0BEbQe6XfF4szUejR_LnKGmHwCLgi58h5jD1fJJoED9lFDlZMd4jdIxbDOPt1nLlk3w4Of6NG74rXUM8siBDKk5CIUMDi7Bq-UjDyiC-rQJt6pASGz8n3gC7Dtpi8ZXKzhR_LSChIQhSPZZrtfOZj7iDhDwQjIPLHBCogGkItVPG4BKPmiuK9za76jZD4Y_rwga7su5vJs3L6aiOoglOPV6kjasss",
];

export const candidateAvatar =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAPVZ8w9ikO0eeBDPas84c_TC0qZdz5fIfq3zYoeyhPO79zYFf5ZlmAV4zMOaZP9wzc4zomb3OPzVBWV0oom4pxc5LPXjvhdX_mQI5EC4PM-7O7NZvBjYw-YywNxEsktE8ifNL9rpLqdb-dS4GPKteAVFUPIZIiaFmgGGM_HAi4DxzA8sdmUCBx8ECm4QcByEKElO38t-XEzGdM_cjJjNAcpUwo-XSu77COX-rk1mbiULRTIuhUGRyXwpjIq8fCGsuEl0IHiZKK1Mc";

export type FooterColumn = { title: string; links: string[] };

export const footerColumns: FooterColumn[] = [
  {
    title: "For Candidates",
    links: ["UPSC Jobs", "Banking Exams", "SSC CGL", "AI Score Help"],
  },
  {
    title: "Resources",
    links: ["Exam Calendar", "Salary Calculator", "Previous Papers", "Blog"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "About Us", "Contact"],
  },
];
