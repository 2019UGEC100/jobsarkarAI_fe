---
name: Career Excellence System
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#434655'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006c49'
  on-secondary: '#ffffff'
  secondary-container: '#6cf8bb'
  on-secondary-container: '#00714d'
  tertiary: '#8e3c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#b54e00'
  on-tertiary-container: '#ffece5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#783200'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  data-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
  section-gap: 64px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system prioritizes a high-end consumer experience over traditional enterprise density. The visual direction is **Minimalist & Modern**, drawing inspiration from category leaders that balance utility with a premium, airy aesthetic. The goal is to reduce cognitive load and evoke a sense of professional optimism and clarity.

The interface should feel "understandable in 5 seconds." This is achieved through high-contrast typography, excessive whitespace, and the removal of technical clutter. By stripping away complex data visualizations in favor of clear status indicators and large, tactile surfaces, the system transforms a functional tool into a sophisticated personal companion.

Key Principles:
- **Clarity over Density:** Never crowd the screen; use space to indicate importance.
- **Human-Centric:** Use friendly, encouraging tones and approachable geometry.
- **Trustworthy Vitality:** A crisp, clean palette that feels both institutional and energetic.

## Colors

This design system utilizes a refined, high-contrast palette designed for immediate legibility and brand trust.

- **Primary (Trustworthy Blue):** Used for key brand moments and main Call-to-Actions. It represents stability and professional growth.
- **Success (Vibrant Green):** Dedicated to eligibility markers, successful matches, and progress completion.
- **Action (Urgent Orange):** Reserved strictly for deadlines, time-sensitive alerts, and critical attention points.
- **Background & Surface:** The application uses a "Layered White" approach. The base background is a cool, clean slate (#F8FAFC), while all interactive content sits on pure white (#FFFFFF) surfaces to create a distinct physical hierarchy.
- **Neutral Tones:** Grays are leaning toward cool slates to maintain a modern, "tech-forward" feel without the muddiness of warm grays.

## Typography

The system uses **Inter** exclusively to achieve a timeless, neutral, and highly legible interface. The typographic hierarchy is designed to guide the user's eye to the most important information first.

- **Headlines:** Set in **SemiBold (600)**. Tighten letter-spacing on larger sizes to maintain a premium "editorial" feel.
- **Body Text:** Set in **Regular (400)**. Use generous line heights (1.5x minimum) to ensure long-form content is digestible.
- **Data & UI Labels:** Set in **Medium (500)**. This weight is used for numbers, metrics, and secondary actions to provide a clear distinction from standard body prose without the heaviness of a headline.

## Layout & Spacing

The layout philosophy is based on a **Fixed Grid** system that prioritizes generous white space and "breathing room."

- **Grid:** A 12-column grid for desktop with a maximum container width of 1200px. This prevents line lengths from becoming too long and keeps the "consumer app" focus centered.
- **Margins:** Large 40px external margins on desktop ensure the content feels like a curated gallery rather than a full-bleed dashboard.
- **Spacing Rhythm:** Based on an 8px scale. Components should favor `stack-lg` (32px) for vertical separation between major card elements to maintain the "understandable in 5 seconds" goal.
- **Mobile Reflow:** On mobile devices, margins shrink to 16px, and all multi-column card layouts collapse into a single-column vertical stack.

## Elevation & Depth

To achieve the "premium consumer" look, the design system avoids harsh borders and heavy shadows. Instead, it uses **Ambient Shadows** and tonal layering.

- **Layer 0 (Background):** #F8FAFC. The foundation.
- **Layer 1 (Cards/Surfaces):** Pure #FFFFFF. These elements use a very soft, diffused shadow: `0px 4px 20px rgba(15, 23, 42, 0.05)`.
- **Layer 2 (Floating/Modals):** Pure #FFFFFF with a more pronounced elevation to indicate priority: `0px 12px 32px rgba(15, 23, 42, 0.12)`.
- **Interactions:** When a card is hovered, it should subtly lift (shadow deepens) or scale (1.02x) to provide tactile feedback without looking "clunky."

## Shapes

The shape language is consistently **Rounded**, reinforcing the approachable and modern brand personality.

- **Standard Elements:** Buttons, input fields, and small UI components use a 0.5rem (8px) radius.
- **Large Components:** Main cards and containers (the primary "surfaces" of the app) use `rounded-lg` (16px) or `rounded-xl` (24px) to emphasize the soft, premium aesthetic.
- **Status Indicators:** Chips and progress bars should use a fully pill-shaped (999px) radius to distinguish them from interactive containers.

## Components

### Buttons
- **Primary:** Pill-shaped or 8px rounded. Solid #2563EB background with white text. No gradients.
- **Secondary:** Transparent background with a subtle slate border. Use for less critical actions.

### Cards
- Pure white background, 16px–24px rounded corners, and 32px internal padding. 
- Avoid dividing lines; use spacing to separate content groups within the card.

### Chips & Status
- **Success:** Soft green background (10% opacity of #10B981) with #10B981 text. Pill-shaped.
- **Deadline/Urgent:** Soft orange background (10% opacity of #F97316) with #F97316 text.

### Input Fields
- Subtle #E2E8F0 borders. On focus, the border transitions to Primary Blue with a soft blue outer glow (shadow).
- Labels are always `label-md` in Slate-600, positioned above the field.

### Progress Indicators
- Smooth, thick bars (8px height) with rounded caps. Use Primary Blue for standard progress and Success Green for completion milestones.