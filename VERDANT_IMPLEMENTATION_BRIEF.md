# VERDANT ENGINEERING
## Website Implementation Brief
**Technical Specification for Front-End Development**

---

## I. PROJECT OVERVIEW

**Project Name:** Verdant Engineering Premium Website
**Client:** Verdant Engineering (Oman)
**Build Type:** Responsive B2B Marketing Website
**Platforms:** Desktop, Tablet, Mobile
**CMS:** [To be specified by development team]
**Hosting:** [To be specified]
**Launch Target:** [To be specified]

---

## II. PAGE INVENTORY & HIERARCHY

### Primary Page List (7 Pages)

| Page | URL Slug | Primary Purpose | Target Users |
|------|----------|-----------------|--------------|
| Home | / | Brand presence, capability overview, qualification | All visitors |
| About Us | /about | Trust-building, team credibility, methodology | Decision-makers, evaluators |
| Engineering Services | /services | Technical depth, discipline explanation, expertise | Technical buyers, engineers |
| Sectors | /sectors | Vertical alignment, industry relevance, application | Industry-specific buyers |
| Compliance & Standards | /compliance | Regulatory credibility, safety focus, standards | Procurement, compliance teams |
| Project Portfolio | /portfolio | Social proof, case studies, proven capability | Project directors, evaluators |
| Contact & Enquiry | /contact | Lead generation, enquiry capture, qualification | All warm leads |

### Navigation Structure

```
PRIMARY NAVIGATION (Fixed Header)
├─ Home (/)
├─ About (/about)
├─ Services (/services)
├─ Sectors (/sectors)
├─ Compliance (/compliance)
├─ Portfolio (/portfolio)
└─ Contact (/contact)

FOOTER NAVIGATION
├─ Company
│  ├─ About Us
│  └─ Our Team
├─ Services
│  ├─ Process Engineering
│  ├─ Technical Safety
│  ├─ Control & Instrumentation
│  ├─ Piping & Layout
│  ├─ Mechanical Design
│  ├─ Rotating Equipment
│  └─ Pipeline
├─ Sectors
│  ├─ Oil & Gas
│  ├─ Cryogenic
│  ├─ Refining
│  ├─ Storage
│  └─ Utilities
├─ Resources
│  ├─ Case Studies
│  └─ Standards
└─ Connect
   ├─ Contact
   ├─ Email
   └─ Phone
```

---

## III. GLOBAL LAYOUT SPECIFICATIONS

### Master Layout Template

```
┌─────────────────────────────────────────────┐
│           HEADER / NAVIGATION               │ 70–80px fixed
├─────────────────────────────────────────────┤
│                                             │
│          PAGE-SPECIFIC CONTENT              │
│         (Sections defined per page)         │
│                                             │
├─────────────────────────────────────────────┤
│              FOOTER                         │
└─────────────────────────────────────────────┘
```

### Header Specifications

**Layout:**
- Fixed positioning (sticky nav)
- Full viewport width
- Height: 70px desktop, 60px mobile
- Background: Pure White (#ffffff)
- Border bottom: 1px Light Steel (#b8bcc4)
- Z-index: 100 (above all content)

**Logo Area:**
- Left-aligned
- Logo dimensions: 45px height (maintain aspect ratio)
- Logo padding: 12px (top/bottom), 20px (left)
- Brand name optional below logo (12px, Deep Navy)

**Navigation Links (Desktop):**
- Center-aligned, horizontal layout
- Link spacing: 28px between items
- Font: Inter Medium (500), 15px
- Colour: Deep Navy (#1a2d4a)
- Hover state: Teal (#1e7b7c) colour + underline (2px, 200ms transition)
- Active state: Teal with underline
- No dropdown menus (flat structure only)

**CTA Button (Desktop):**
- Right-aligned
- Text: "Contact Us"
- Style: Primary button (Teal background, white text)
- Padding: 12px 24px
- Font: Inter Medium (500), 14px
- Hover: Darker teal (#155859), shadow (0 4px 12px rgba(0,0,0,0.15))

**Mobile Navigation:**
- Logo left, hamburger icon right
- Hamburger: Deep Navy icon, 24px
- Mobile menu: Full-height vertical stack, slides from right or dropdown
- Menu items: Stack vertically, 16px padding between
- CTA button in mobile menu at bottom
- Overlay: Semi-transparent (rgba(0,0,0,0.5)) when menu open
- Animation: 300ms slide or fade

**Responsive Breakpoints:**
- Desktop: 1200px and above (full horizontal nav)
- Tablet: 768px–1199px (horizontal nav compresses or hamburger at 1024px)
- Mobile: 320px–767px (hamburger only)

---

### Footer Specifications

**Layout:**
- Full viewport width
- Background: Deep Navy (#1a2d4a)
- Padding: 60px horizontal, 60px top, 30px bottom
- Grid: 4–5 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Column width: ~200px each
- Gap between columns: 40px

**Column Structure:**

**Column 1: Company**
- Heading: "Company" (13px, Montserrat Medium, Off-White)
- Links:
  - About Us → /about
  - Our Team → /about#team
  - Methodology → /about#methodology
- Font: Inter Regular (400), 14px, Off-White
- Link hover: Teal colour
- Spacing: 12px between links

**Column 2: Services**
- Heading: "Services" (13px, Montserrat Medium, Off-White)
- Links: All 7 service disciplines
  - Each → /services#[discipline-slug]
- Font: Inter Regular (400), 14px, Off-White
- Link hover: Teal colour
- Spacing: 12px between links

**Column 3: Sectors**
- Heading: "Sectors" (13px, Montserrat Medium, Off-White)
- Links: All 5 sectors
  - Each → /sectors#[sector-slug]
- Font: Inter Regular (400), 14px, Off-White
- Spacing: 12px between links

**Column 4: Resources**
- Heading: "Resources" (13px, Montserrat Medium, Off-White)
- Links:
  - Case Studies → /portfolio
  - Compliance & Standards → /compliance
  - Contact → /contact
- Font: Inter Regular (400), 14px, Off-White

**Column 5: Contact / Social**
- Heading: "Connect" (13px, Montserrat Medium, Off-White)
- Email: info@verdanteng.om (clickable mailto link)
- Phone: +968 [number] (clickable tel link)
- WhatsApp: [link to WhatsApp chat]
- Social icons (if applicable): LinkedIn, Twitter
- Icon size: 24px
- Icon colour: Off-White
- Icon hover: Teal colour

**Bottom Footer Section:**
- Full width, top border: 1px Light Steel
- Padding: 20px horizontal, 20px vertical
- Content: Left-aligned copyright, right-aligned policy links
- Copyright: "© 2026 Verdant Engineering. All rights reserved." (12px, Light Steel)
- Policy links: Privacy Policy | Terms of Use | Cookies (12px, Light Steel, hover Teal)
- Responsive: Stack vertically on mobile (copyright top, policies bottom)

---

## IV. COMPONENT SYSTEM (REUSABLE UI BLOCKS)

### 4.1 Button Component

**Variants:**

**Primary Button (CTA)**
```
State: Default
├─ Background: Teal (#1e7b7c)
├─ Text: White (#ffffff), Medium (500), 15px
├─ Padding: 14px vertical, 32px horizontal
├─ Border radius: 4px
├─ Box shadow: None
└─ Cursor: Pointer

State: Hover
├─ Background: #155859 (darker teal)
├─ Box shadow: 0 4px 12px rgba(0,0,0,0.15)
├─ Transition: 200ms ease
└─ Cursor: Pointer

State: Active
├─ Background: #0d3d3e (darkest teal)
├─ Box shadow: 0 2px 6px rgba(0,0,0,0.2)
└─ Transition: 100ms ease

State: Disabled
├─ Background: #b8bcc4 (Light Steel)
├─ Cursor: Not-allowed
└─ Opacity: 0.6
```

**Secondary Button**
```
State: Default
├─ Background: Transparent
├─ Border: 2px Light Steel (#b8bcc4)
├─ Text: Deep Navy (#1a2d4a), Medium (500), 15px
├─ Padding: 12px vertical, 30px horizontal
└─ Border radius: 4px

State: Hover
├─ Border colour: Teal (#1e7b7c)
├─ Text colour: Teal
├─ Background: Off-White fade (rgba(30,123,124,0.05))
└─ Transition: 200ms ease

State: Active
├─ Border colour: #155859
├─ Text colour: #155859
└─ Transition: 100ms ease
```

**Tertiary Button (Text Link)**
```
State: Default
├─ Background: Transparent
├─ Text: Teal (#1e7b7c), Medium (500), 15px
├─ Text decoration: None
└─ Cursor: Pointer

State: Hover
├─ Text colour: #155859 (darker teal)
├─ Text decoration: Underline (2px)
├─ Transition: 200ms ease
└─ Cursor: Pointer

State: Active
├─ Text colour: #0d3d3e
└─ Transition: 100ms ease
```

### 4.2 Form Components

**Text Input Field**
```
Default State
├─ Background: Pure White (#ffffff)
├─ Border: 1px Light Steel (#b8bcc4)
├─ Padding: 12px
├─ Border radius: 4px
├─ Font: Inter Regular (400), 15px, Graphite
├─ Placeholder: Light Steel colour
└─ Height: 44px minimum

Focus State
├─ Border: 2px Teal (#1e7b7c)
├─ Box shadow: 0 0 0 3px rgba(30,123,124,0.1)
├─ Outline: None
└─ Transition: 200ms ease

Error State
├─ Border: 2px #d32f2f (red)
├─ Background: #fff5f5 (light red tint)
└─ Transition: 200ms ease

Disabled State
├─ Background: Off-White (#f5f5f5)
├─ Colour: Light Steel
├─ Cursor: Not-allowed
└─ Opacity: 0.6
```

**Textarea Field**
- Same styling as text input
- Min-height: 120px
- Resize: Vertical only
- Font-family: Inter (monospace optional for technical content)

**Select Dropdown**
- Same border/padding as text input
- Arrow icon: Deep Navy, right-aligned 12px padding
- Background: Pure White
- Hover: Light Steel border
- Focus: Teal border (2px)

**Checkbox / Radio Button**
```
Default
├─ Size: 18px × 18px
├─ Border: 2px Light Steel
├─ Border radius: 2px (checkbox), 50% (radio)
└─ Background: Pure White

Checked/Selected
├─ Background: Teal (#1e7b7c)
├─ Border: Teal
├─ Icon/Checkmark: White
└─ Transition: 150ms ease

Hover
├─ Border colour: Teal
└─ Cursor: Pointer

Disabled
├─ Border: Light Steel
├─ Background: Off-White
├─ Opacity: 0.5
└─ Cursor: Not-allowed
```

**Form Label**
- Font: Inter Medium (500), 14px
- Colour: Deep Navy (#1a2d4a)
- Margin bottom: 8px
- Asterisk (*) for required fields: Teal colour

**Form Helper Text / Error Message**
- Font: Inter Regular (400), 12px
- Error: #d32f2f (red)
- Helper: Light Steel colour
- Margin top: 4px

### 4.3 Card Component

**Content Card**
```
Default
├─ Background: Pure White (#ffffff)
├─ Border: 1px Light Steel (#b8bcc4) OR none
├─ Border radius: 4px
├─ Padding: 40px
├─ Box shadow: 0 2px 8px rgba(0,0,0,0.08)
└─ Overflow: Hidden

Hover (Optional)
├─ Box shadow: 0 4px 16px rgba(0,0,0,0.12)
├─ Transform: translateY(-2px) (optional, subtle lift)
└─ Transition: 200ms ease

Components Within Card
├─ Heading: Montserrat SemiBold, 20–24px, Deep Navy
├─ Subheading: Montserrat Medium, 16–18px, Graphite
├─ Body text: Inter Regular, 15px, Graphite
└─ Links: Teal, hover underline

Responsive
├─ Desktop: 40px padding
├─ Tablet: 32px padding
└─ Mobile: 24px padding
```

**Dark Card (High Contrast)**
```
Default
├─ Background: Deep Navy (#1a2d4a)
├─ Text: Off-White (#f5f5f5)
├─ Border: None
├─ Padding: 40px
├─ Box shadow: 0 4px 12px rgba(0,0,0,0.25)
└─ Border radius: 4px

Links within Dark Card
├─ Colour: Teal (#1e7b7c)
├─ Hover: Lighter teal or white
└─ Transition: 200ms ease
```

### 4.4 Image Component

**Image Container**
```
Standard Image
├─ Border radius: 4px
├─ Overflow: Hidden
├─ Max-width: 100%
├─ Height: Auto (maintain aspect ratio)
└─ Box shadow: 0 2px 8px rgba(0,0,0,0.08) (optional)

Image Srcset (Responsive)
├─ Small (320px): Optimized for mobile
├─ Medium (768px): Tablet version
├─ Large (1200px): Desktop version
├─ XL (1600px): High-resolution desktop
└─ Format: WebP with JPEG fallback

Alt Text
├─ Required on all images
├─ Descriptive (50–125 characters)
├─ Not: "Image", "Photo", "Picture"
└─ Example: "Gas processing facility with visible compression equipment and control systems"

Loading: Lazy-load all below-fold images
```

### 4.5 Typography Components

**Heading 1 (H1)**
- Font: Montserrat SemiBold (600)
- Size: 44–52px
- Line height: 1.2
- Colour: Deep Navy (#1a2d4a)
- Margin bottom: 24px
- Example: Page titles, hero headline

**Heading 2 (H2)**
- Font: Montserrat SemiBold (600)
- Size: 28–36px
- Line height: 1.2
- Colour: Deep Navy
- Margin bottom: 20px
- Example: Section heading, subpage headline

**Heading 3 (H3)**
- Font: Montserrat Medium (500)
- Size: 20–24px
- Line height: 1.3
- Colour: Deep Navy
- Margin bottom: 16px
- Example: Card title, subsection heading

**Body Text (Paragraph)**
- Font: Inter Regular (400)
- Size: 15–16px
- Line height: 1.7
- Colour: Graphite (#3d3d3d)
- Margin bottom: 16px

**Small Text / Caption**
- Font: Inter Regular (400)
- Size: 13–14px
- Line height: 1.6
- Colour: Light Steel (#b8bcc4)

**Emphasis (Bold within paragraph)**
- Font: Inter Medium (500)
- Same size and line-height as parent
- Colour: Same as parent (or Graphite if default)

### 4.6 Divider / Separator Component

**Horizontal Divider**
```
Standard Divider
├─ Height: 1px
├─ Colour: Light Steel (#b8bcc4)
├─ Margin top: 40–60px
├─ Margin bottom: 40–60px
└─ Full width OR container-width
```

### 4.7 Spacing Utilities

**Vertical Spacing (Margins/Padding)**
```
xs: 8px
sm: 16px
md: 24px
lg: 32px
xl: 40px
2xl: 48px
3xl: 60px
4xl: 80px
5xl: 96px
6xl: 120px
```

Use multiples of 8px for all spacing decisions.

### 4.8 Grid Layouts

**Two-Column Layout (Asymmetric)**
```
Desktop (1200px+)
├─ Left column: 55–65% width
├─ Right column: 35–45% width
├─ Gap: 48–64px
└─ Content: Image left, text right OR reversed

Tablet (768px–1199px)
├─ Columns: 50–50 split
└─ Gap: 32px

Mobile (320px–767px)
├─ Stacks vertically
└─ Gap: 24px between sections
```

**Three-Column Grid (Services)**
```
Desktop (1200px+)
├─ 3 equal columns
├─ Gap: 32px
└─ Card width: ~310px

Tablet (768px–1199px)
├─ 2 columns
├─ Gap: 24px
└─ Card width: ~calc(50% - 12px)

Mobile (320px–767px)
├─ 1 column (stacked)
└─ Gap: 20px
```

**Four-Column Grid (Portfolio Images)**
```
Desktop (1200px+)
├─ 4 equal columns
├─ Gap: 24px
└─ Card: Aspect ratio 1:1 or 4:3

Tablet (768px–1199px)
├─ 2 columns
├─ Gap: 20px
└─ Card: Aspect ratio maintained

Mobile (320px–767px)
├─ 1 column
└─ Gap: 16px
```

---

## V. PAGE-BY-PAGE IMPLEMENTATION SPECIFICATIONS

### PAGE 1: HOME (/)

#### Section 1.1: Hero

**Layout:** Full-width, edge-to-edge

**Structure:**
```
┌──────────────────────────────────────────────┐
│                                              │
│  [Background Image - Full Width/Height]      │
│                                              │
│     [Dark Overlay: rgba(26,45,74,0.5)]       │
│                                              │
│     [Headline Center-Top]                    │
│     [Subheading Center-Middle]               │
│     [Body Text Center]                       │
│     [CTA Button Center-Bottom]               │
│                                              │
└──────────────────────────────────────────────┘
```

**Image Specification:**
- Dimensions: Full viewport (1920×1080 hero, responsive)
- Type: Control room or industrial collaboration
- Placement: Background (fixed position preferred)
- Overlay: Dark teal/navy rgba(26,45,74,0.5) for text contrast
- Alt text: "Professional control room with engineers monitoring gas processing facility instrumentation"

**Content Hierarchy:**
```
[H1] "Integrated Engineering for Complex Industrial Infrastructure"
- Font: Montserrat SemiBold, 52px (desktop), 36px (tablet), 28px (mobile)
- Colour: Pure White
- Text align: Center
- Margin bottom: 20px
- Line height: 1.2

[Subheading] "Verdant Engineering delivers specialist design and technical advisory services to hydrocarbon, cryogenic, refining, and infrastructure sectors."
- Font: Inter Regular, 18px (desktop), 16px (tablet), 14px (mobile)
- Colour: Off-White
- Text align: Center
- Margin bottom: 24px
- Max-width: 700px
- Centered

[Body Text] "Based in Oman. Experienced across the Gulf region. Operating as your technical partner—transparent methodology, documented assumptions, collaborative delivery."
- Font: Inter Regular, 15px
- Colour: Off-White
- Text align: Center
- Margin bottom: 32px
- Max-width: 650px

[CTA Button] "Explore Our Services"
- Primary button style
- Margin top: 16px
```

**Desktop Behaviour:**
- Hero height: 600–700px
- Content vertically centered
- Parallax effect on background image (optional, 20–30% slower scroll)
- Text remains fixed relative to viewport during scroll

**Mobile Behaviour:**
- Hero height: 500px (reduced)
- Content remains centered
- Headline reduces to 28px
- Button remains full-width clickable

**CTA Logic:**
- Button links to #services or /services
- Smooth scroll on same-page anchor
- On mobile: Scroll to services section (standard navigation)

---

#### Section 1.2: Capabilities Overview

**Layout:** Full-width section with centered container

**Background:** Off-White (#f5f5f5)

**Structure:**
```
┌─ Container [Max-width 1200px, padding 0 40px] ──┐
│                                                  │
│  [H2 Centered] "Seven Integrated Disciplines"   │
│  [Subtext Centered] One line positioning        │
│  [Spacing 32px]                                 │
│                                                  │
│  [Body Text Centered, max-width 900px]          │
│  Description of integration model               │
│  [Spacing 48px]                                 │
│                                                  │
│  [Diagram or Grid Visual]                       │
│  (Discipline integration diagram or image)      │
│  [Spacing 32px]                                 │
│                                                  │
│  [CTA Secondary Button Centered]                │
│  "View Our Services"                            │
│                                                  │
└──────────────────────────────────────────────────┘

Padding: 96px top, 96px bottom
```

**Content:**

```
[H2] "Seven Integrated Disciplines. One Coordinated Delivery."
- Font: Montserrat SemiBold, 36px
- Colour: Deep Navy
- Text align: Center
- Margin bottom: 16px

[Body Text] "Industrial projects fail when engineering disciplines operate in isolation..."
- Font: Inter Regular, 15px
- Line height: 1.7
- Colour: Graphite
- Max-width: 900px
- Centered on page
- Margin bottom: 48px

[Visual Component] Diagram or composite image
- Width: 100% max-width 1000px
- Aspect ratio: 2:1
- Margin bottom: 32px

[CTA Button] "View Our Services"
- Secondary button style
```

**Desktop Behaviour:**
- Container max-width: 1200px
- Text centered
- Diagram or visual: Centered, max-width 1000px
- Spacing: Generous (96px top/bottom)

**Mobile Behaviour:**
- Container padding: 0 20px
- Heading: 28px
- Body text: 15px (unchanged)
- Spacing: 60px top/bottom
- Visual: Full width with 20px padding

**Image Specification:**
- File: Process flow diagram or facility composite
- Dimensions: 1000×500px (2:1 ratio)
- Format: SVG (if diagram) or high-res JPG/WebP
- Alt text: "Diagram showing integration of seven engineering disciplines"

---

#### Section 1.3: Regional Market Position

**Layout:** Two-column asymmetric (image left, text right)

**Background:** Pure White

**Structure:**
```
┌─ Container [Max-width 1200px, padding 0 40px] ──────┐
│                                                      │
│  [Left 55%]                [Right 45%]              │
│  ┌──────────────┐         ┌──────────────┐          │
│  │              │  Gap    │              │          │
│  │   [Image]    │ 48px    │  [H2]        │          │
│  │              │         │  [P1]        │          │
│  │              │         │  [P2]        │          │
│  │              │         │              │          │
│  │              │         │              │          │
│  └──────────────┘         └──────────────┘          │
│                                                      │
└──────────────────────────────────────────────────────┘

Padding: 96px top, 96px bottom, 40px sides
```

**Image:**
- Dimensions: 100% of left column (responsive)
- Aspect ratio: 4:3 or 16:9 (maintain original)
- Type: Oman/Gulf industrial facility
- Border radius: 4px
- Box shadow: 0 2px 8px rgba(0,0,0,0.08)
- Alt text: "Oman industrial facility showing modern petrochemical infrastructure"

**Content (Right Column):**

```
[H2] "Engineering Momentum in Oman and the Gulf"
- Font: Montserrat SemiBold, 36px
- Colour: Deep Navy
- Margin bottom: 24px

[P1] "The Gulf region is advancing significant industrial investment..."
- Font: Inter Regular, 15px
- Line height: 1.7
- Colour: Graphite
- Margin bottom: 16px

[P2] "Based in Oman, Verdant understands Oman's regulatory framework..."
- Font: Inter Regular, 15px
- Line height: 1.7
- Colour: Graphite
- Margin bottom: 0
```

**Desktop Behaviour:**
- Two-column layout maintained
- Image left (55%), text right (45%)
- Gap: 48px
- Content vertically aligned to image center

**Tablet Behaviour (768px–1199px):**
- Columns: 50–50 split
- Gap: 32px
- Image aspect ratio maintained

**Mobile Behaviour (320px–767px):**
- Stacks vertically (image on top, text below)
- Gap: 24px
- Image: Full width
- Text: Full width

---

#### Section 1.4: Capability Snapshot (Recent Work)

**Layout:** Full-width container, centered, with grid of case vignettes

**Background:** Deep Navy (#1a2d4a)

**Structure:**
```
┌─ Container [Max-width 1200px, padding 0 40px] ──┐
│                                                  │
│  [H2 Centered, Light Text]                      │
│  "Proven Capability in Complex Projects"        │
│  [Spacing 32px]                                 │
│                                                  │
│  [Grid of 4 Case Vignettes - 2×2 or 1×4]       │
│  ┌─────────────────────────────────────────┐   │
│  │ Card | Card | Card | Card              │   │
│  │ ...  | ...  | ...  | ...               │   │
│  │ ...  | ...  | ...  | ...               │   │
│  └─────────────────────────────────────────┘   │
│  [Spacing 32px]                                 │
│                                                  │
│  [CTA Button Centered]                          │
│  "View Case Studies"                            │
│                                                  │
└──────────────────────────────────────────────────┘

Padding: 80px top, 80px bottom
```

**Content:**

```
[H2] "Recent Project Experience"
- Font: Montserrat SemiBold, 36px
- Colour: Off-White
- Text align: Center
- Margin bottom: 32px

[Case Vignette Card - Repeated 4 times]
- Background: rgba(255,255,255,0.05) (slight white overlay)
- Border: 1px Light Steel (subtle)
- Padding: 24px
- Border radius: 4px
- Margin bottom: 20px (between cards)

  [Card Content]
  - Title (case study name): Inter Regular, 14px, Off-White
  - Outcome: Inter Medium, 16px, Teal, bold
  - Example: "Gas processing facility optimization: 22% throughput increase, 15% capital reduction"
  - Max lines: 3
  - Line height: 1.6
```

**Grid Specifications:**

**Desktop (1200px+):**
- 4 columns (1×4 layout, horizontal)
- OR 2×2 grid
- Gap: 24px
- Card width: calc(25% - 18px) OR calc(50% - 12px)

**Tablet (768px–1199px):**
- 2 columns
- Gap: 20px
- Card width: calc(50% - 10px)

**Mobile (320px–767px):**
- 1 column (stacked)
- Gap: 16px
- Card width: 100%

**CTA Button:**
- Secondary button style
- Text: "View Case Studies"
- Link destination: /portfolio

**Image Specification:**
- Grid composite showing 4 different industrial facilities
- Total dimensions: 1200×400px (4 tiles)
- Individual tile: 300×400px or maintain 1:1 aspect if square
- Format: High-quality JPG/WebP
- Alt text: "Composite showing diverse industrial facilities: gas processing, LNG, refinery, storage"

---

#### Section 1.5: Why Choose Verdant (Differentiation)

**Layout:** Full-width, centered container with 4-column grid

**Background:** Pure White

**Structure:**
```
┌─ Container [Max-width 1200px, padding 0 40px] ──┐
│                                                  │
│  [H2 Centered]                                  │
│  "Why Engineering Teams Choose Verdant"         │
│  [Spacing 48px]                                 │
│                                                  │
│  [4-Column Grid]                                │
│  ┌─────┬─────┬─────┬─────┐                      │
│  │ [1] │ [2] │ [3] │ [4] │                      │
│  │     │     │     │     │                      │
│  │     │     │     │     │                      │
│  └─────┴─────┴─────┴─────┘                      │
│                                                  │
└──────────────────────────────────────────────────┘

Padding: 80px top, 80px bottom
```

**Card Content (Repeated 4 times):**

```
[Icon or Number] 1, 2, 3, 4 (or small icon)
- Size: 40px or icon 48px
- Colour: Teal
- Margin bottom: 16px

[H3] Value statement heading
- Font: Montserrat Medium, 20px
- Colour: Deep Navy
- Margin bottom: 12px

[Body Text] Explanation paragraph
- Font: Inter Regular, 15px
- Colour: Graphite
- Line height: 1.6
- Margin bottom: 0
- Max-width: 250px
```

**Grid Specifications:**

**Desktop (1200px+):**
- 4 equal columns
- Gap: 32px
- Card width: calc(25% - 24px)

**Tablet (768px–1199px):**
- 2 columns
- Gap: 28px
- Card width: calc(50% - 14px)

**Mobile (320px–767px):**
- 1 column (stacked)
- Gap: 24px
- Card width: 100%

**Background:** Each card has light background (Off-White) with subtle border

**Image:** None (text-only section)

---

#### Section 1.6: QHSE Commitment

**Layout:** Two-column (text left, image right)

**Background:** Off-White (#f5f5f5)

**Structure:**
```
┌─ Container [Max-width 1200px, padding 0 40px] ──────┐
│                                                      │
│  [Left 45%]                [Right 55%]              │
│  ┌──────────────┐         ┌──────────────┐          │
│  │   [H2]       │  Gap    │              │          │
│  │   [P1]       │ 48px    │   [Image]    │          │
│  │              │         │              │          │
│  │   [P2]       │         │              │          │
│  │              │         │              │          │
│  │   [CTA]      │         │              │          │
│  │              │         │              │          │
│  └──────────────┘         └──────────────┘          │
│                                                      │
└──────────────────────────────────────────────────────┘

Padding: 80px top, 80px bottom
```

**Content (Left Column):**

```
[H2] "Safety, Quality, and Compliance Excellence"
- Font: Montserrat SemiBold, 36px
- Colour: Deep Navy
- Margin bottom: 24px

[Body Text] "We maintain uncompromising standards..."
- Font: Inter Regular, 15px
- Line height: 1.7
- Colour: Graphite
- Margin bottom: 24px

[CTA Button] "Our Standards & Compliance"
- Secondary button style
```

**Image (Right Column):**
- Dimensions: 100% of right column (responsive)
- Aspect ratio: 4:3
- Type: Safety/inspection photograph
- Border radius: 4px
- Box shadow: 0 2px 8px rgba(0,0,0,0.08)
- Alt text: "Safety inspection and compliance documentation at industrial facility"

**Desktop Behaviour:**
- Two-column layout (45/55 split)
- Gap: 48px
- Text left, image right
- Content vertically center-aligned

**Tablet Behaviour:**
- Two-column (50/50)
- Gap: 32px

**Mobile Behaviour:**
- Stacks vertically (text on top, image below)
- Full width
- Gap: 24px

---

#### Section 1.7: Call to Action (Hero CTA Section)

**Layout:** Full-width, centered, minimal

**Background:** Deep Navy (#1a2d4a)

**Structure:**
```
┌──────────────────────────────────────┐
│                                      │
│  [H2 Centered, Light Text]           │
│  "Ready to discuss your project?"    │
│                                      │
│  [Body Text Centered, Light]         │
│  Invitation + response time          │
│                                      │
│  [CTA Button - Primary - Centered]   │
│  "Start an Enquiry"                  │
│                                      │
└──────────────────────────────────────┘

Padding: 60px top, 60px bottom, 40px sides
```

**Content:**

```
[H2] "Ready to discuss your project?"
- Font: Montserrat SemiBold, 36px
- Colour: Pure White
- Text align: Center
- Margin bottom: 16px

[Body Text] "Contact us to explore feasibility studies, FEED design, detailed engineering, procurement support, or commissioning advisory. We typically respond to all enquiries within 24 business hours."
- Font: Inter Regular, 15px
- Line height: 1.7
- Colour: Off-White
- Max-width: 700px
- Centered
- Margin bottom: 32px

[CTA Button] "Start an Enquiry"
- Primary button style
- Link destination: /contact
```

**Desktop Behaviour:**
- All content centered
- Max-width: 900px container

**Mobile Behaviour:**
- Content remains centered
- Heading: 28px
- Body text: 14px
- Button: Full width or standard width

---

### PAGE 2: ABOUT US (/about)

#### Section 2.1: Page Header

**Layout:** Hero-style header (reduced height)

**Background:** Deep Navy (#1a2d4a)

**Structure:**
```
┌──────────────────────────────────────┐
│                                      │
│  [H1 Centered, Light Text]           │
│  "About Verdant Engineering"         │
│                                      │
│  [Breadcrumb Navigation]             │
│  Home > About                        │
│                                      │
└──────────────────────────────────────┘

Padding: 60px top, 60px bottom
```

**Content:**

```
[H1] "About Verdant Engineering"
- Font: Montserrat SemiBold, 48px
- Colour: Pure White
- Text align: Center
- Margin bottom: 20px

[Breadcrumb]
- Font: Inter Regular, 12px
- Colour: Light Steel
- Format: Home > About
- Links: Clickable except current page
```

---

#### Section 2.2: Company Foundation

**Layout:** Two-column (text left, image right)

**Background:** Pure White

**Content:**

```
[Left Column 45%]
[H2] "Established on Discipline and Technical Excellence"
- Font: Montserrat SemiBold, 36px
- Colour: Deep Navy
- Margin bottom: 24px

[Body Text - 3 paragraphs]
- Font: Inter Regular, 15px
- Line height: 1.7
- Colour: Graphite
- Margin bottom: 16px between paragraphs

[Right Column 55%]
[Image] Modern office or Gulf landscape
- Aspect ratio: 4:3 or 16:9
- Border radius: 4px
- Box shadow: 0 2px 8px rgba(0,0,0,0.08)
```

**Image Specification:**
- Type: Modern office in Oman or Gulf industrial landscape
- Dimensions: 100% of column, responsive
- Alt text: "Modern office workspace or Oman industrial facility"

**Responsive:**
- Desktop: 45/55 split, 48px gap
- Tablet: 50/50 split, 32px gap
- Mobile: Stacked, image on top

---

#### Section 2.3: Team Structure & Expertise

**Layout:** Full-width, centered container with 7-column grid

**Background:** Off-White (#f5f5f5)

**Content:**

```
[H2 Centered]
"Senior Engineering Leadership Across Seven Disciplines"
- Font: Montserrat SemiBold, 36px
- Colour: Deep Navy
- Margin bottom: 16px

[Body Text Centered]
Introduction to team structure
- Font: Inter Regular, 15px
- Max-width: 900px
- Margin bottom: 48px

[7-Column Grid of Discipline Cards]
- Each card: White background, subtle border
- Padding: 24px
- Border radius: 4px
- Box shadow: 0 2px 8px rgba(0,0,0,0.08)

  [Card Content]
  - Icon or number: 40px, Teal
  - Title: Montserrat Medium, 18px, Deep Navy
  - Description: Inter Regular, 14px, Graphite
  - Max-width per card: 180px
```

**Grid Specifications:**

**Desktop (1200px+):**
- 7 columns (if space allows) OR 3–4 columns
- Gap: 24px
- Card width: calc(14.28% - 20px) or flexible

**Tablet (768px–1199px):**
- 3 columns
- Gap: 20px
- Card width: calc(33.33% - 13px)

**Mobile (320px–767px):**
- 1 column (stacked)
- Gap: 16px
- Card width: 100%

---

#### Section 2.4: Our Methodology

**Layout:** Full-width, centered

**Background:** Pure White

**Content:**

```
[H2 Centered]
"How We Approach Projects"
- Font: Montserrat SemiBold, 36px
- Colour: Deep Navy
- Margin bottom: 16px

[Body Text - 2 paragraphs]
- Font: Inter Regular, 15px
- Max-width: 900px
- Centered
- Margin bottom: 32px

[H3 Centered]
"Project Delivery Framework"
- Font: Montserrat Medium, 24px
- Colour: Deep Navy
- Margin bottom: 24px

[Framework - 6 Items Grid]
Bulleted list or stacked cards:
- Feasibility Study & Concept Selection
- FEED (Front-End Engineering Design)
- Detailed Engineering Design
- Procurement & Vendor Coordination
- Commissioning & Startup Support
- Performance Testing & Optimization

Items displayed as:
- Numbers 1–6 (or circles)
- Title: Inter Medium, 15px, Deep Navy
- Optional brief description: Inter Regular, 14px, Graphite
```

**Grid for Framework:**

**Desktop:**
- 3 columns
- Gap: 32px
- Card width: calc(33.33% - 21px)

**Tablet:**
- 2 columns
- Gap: 24px

**Mobile:**
- 1 column
- Gap: 20px

---

#### Section 2.5: Sectoral Experience

**Layout:** Full-width, 5-column grid of sector cards

**Background:** Off-White (#f5f5f5)

**Content:**

```
[H2 Centered]
"Proven Expertise Across Core Industrial Sectors"
- Font: Montserrat SemiBold, 36px
- Colour: Deep Navy
- Margin bottom: 48px

[5-Column Grid - Sector Cards]
Each card contains:
- [Image] Sector-specific facility photo
  - Dimensions: 100% of card width, aspect ratio 4:3
  - Border radius: 4px (top only, no bottom radius)
  - Height: 200px
  - Object-fit: Cover

- [Card Body] White background
  - Padding: 24px
  - Border bottom: 4px Teal

  [Sector Title]
  - Font: Montserrat SemiBold, 18px
  - Colour: Deep Navy
  - Margin bottom: 12px

  [Description - 3–4 sentences]
  - Font: Inter Regular, 14px
  - Colour: Graphite
  - Line height: 1.6
  - Margin bottom: 0

Hover state: Slight shadow increase, subtle lift
```

**Grid Specifications:**

**Desktop (1200px+):**
- 5 columns (if space allows) OR flex wrapping
- Gap: 24px
- Card width: calc(20% - 19.2px)

**Tablet (768px–1199px):**
- 3 columns
- Gap: 20px
- Card width: calc(33.33% - 13px)

**Mobile (320px–767px):**
- 1 column
- Gap: 16px
- Card width: 100%

**Image Specifications (One per sector):**
- Oil & Gas: Gas processing facility
- Cryogenic: LNG plant
- Refining: Refinery facility
- Storage: Tank farm
- Utilities: Power plant

---

#### Section 2.6: Geographic Reach

**Layout:** Full-width, two-column (text left, map/visual right)

**Background:** Pure White

**Content:**

```
[Left Column 45%]
[H2] "Regional Base, International Standards"
- Font: Montserrat SemiBold, 36px
- Colour: Deep Navy
- Margin bottom: 24px

[Body Text]
- Font: Inter Regular, 15px
- Line height: 1.7
- Colour: Graphite

[Right Column 55%]
[Visual] Regional map or location graphic
- Aspect ratio: 16:9 or 4:3
- Border radius: 4px
- Box shadow: 0 2px 8px rgba(0,0,0,0.08)
```

---

### PAGE 3: ENGINEERING SERVICES (/services)

#### Section 3.1: Services Overview

**Layout:** Full-width, centered

**Background:** Pure White

**Content:**

```
[H2 Centered]
"Seven Disciplines. One Unified Delivery Model."
- Font: Montserrat SemiBold, 36px
- Colour: Deep Navy
- Margin bottom: 24px

[Body Text - 2 paragraphs]
- Font: Inter Regular, 15px
- Max-width: 900px
- Centered
- Margin bottom: 48px

[Visual] Integration diagram
- Dimensions: 100% width, max-width 1000px
- Aspect ratio: 2:1
- Border radius: 4px
```

---

#### Section 3.2–3.8: Service Discipline Cards (7 total - Repeating Template)

**Layout:** Full-width sections, alternating background colours

**Pattern:** 
- Service 1: White background
- Service 2: Off-White background
- Service 3: White background
- etc. (alternating)

**Structure (Two-column layout):**

```
┌─ Container [Max-width 1200px] ─────────────┐
│                                            │
│ [Left 45%]           [Right 55%]          │
│ ┌──────────────┐    ┌──────────────┐     │
│ │  [Content]   │    │   [Image]    │     │
│ │              │    │              │     │
│ │              │    │              │     │
│ │              │    │              │     │
│ └──────────────┘    └──────────────┘     │
│        Gap: 48px                          │
│                                            │
└────────────────────────────────────────────┘

Padding: 80px top/bottom, 40px sides
```

**Content (Left Column):**

```
[H2] [Discipline Name]: [Value Proposition]
- Font: Montserrat SemiBold, 32px
- Colour: Deep Navy
- Margin bottom: 16px

[Bulleted List - "What We Do"]
- Font: Inter Regular, 15px
- Colour: Graphite
- Line height: 1.6
- 6–8 bullets
- Bullet marker: Teal circle or dash
- Margin between bullets: 8px

[Spacing 24px]

[Body Text - "Why It Matters"]
- Font: Inter Regular, 15px
- Line height: 1.7
- Colour: Graphite
- Margin bottom: 24px

[CTA Button] "Discuss This Discipline"
- Secondary button style
```

**Image (Right Column):**
- Dimensions: 100% of column width, responsive
- Aspect ratio: 4:3
- Border radius: 4px
- Box shadow: 0 2px 8px rgba(0,0,0,0.08)
- Type: Discipline-specific photograph (see previous image specification)
- Alt text: [Specific to discipline]

**Desktop Behaviour:**
- 45/55 split
- Gap: 48px
- Text left, image right (OR alternate per section)

**Tablet Behaviour:**
- 50/50 split
- Gap: 32px

**Mobile Behaviour:**
- Stacked vertically
- Image on top, text below (OR text first alternating)
- Gap: 24px
- Full width

**Service Disciplines (Sections 3.2–3.8):**
1. Process Engineering
2. Technical Safety & Risk
3. Process Control & Instrumentation
4. Piping & Plant Layout
5. Mechanical Design (Static)
6. Rotating Equipment
7. Pipeline Engineering

---

#### Section 3.9: Project Delivery Services

**Layout:** Full-width, centered, card-based grid

**Background:** Deep Navy (#1a2d4a)

**Content:**

```
[H2 Centered, Light Text]
"Complete Support Across Project Lifecycle"
- Font: Montserrat SemiBold, 36px
- Colour: Pure White
- Margin bottom: 48px

[6-Column Grid of Phase Cards]
Each card:
- Background: rgba(255,255,255,0.05)
- Border: 1px Light Steel
- Padding: 24px
- Border radius: 4px

  [Phase Number/Icon]
  - Size: 48px
  - Colour: Teal
  - Margin bottom: 16px

  [Phase Title]
  - Font: Montserrat Medium, 18px
  - Colour: Pure White
  - Margin bottom: 12px

  [Phase Description]
  - Font: Inter Regular, 14px
  - Colour: Off-White
  - Line height: 1.6
```

**Grid Specifications:**

**Desktop (1200px+):**
- 6 columns (or 3×2 grid)
- Gap: 24px
- Card width: calc(16.66% - 20px)

**Tablet (768px–1199px):**
- 3 columns
- Gap: 20px
- Card width: calc(33.33% - 13px)

**Mobile (320px–767px):**
- 1 column (stacked)
- Gap: 16px

---

### PAGE 4: SECTORS (/sectors)

#### Section 4.1: Sector Overview

**Layout:** Full-width, centered

**Background:** Pure White

**Content:**

```
[H2 Centered]
"Engineering Specialization by Industrial Sector"
- Font: Montserrat SemiBold, 36px
- Colour: Deep Navy
- Margin bottom: 24px

[Body Text Centered]
Sector introduction text
- Font: Inter Regular, 15px
- Max-width: 900px
- Margin bottom: 0
```

---

#### Section 4.2–4.6: Sector Detail Pages (5 total - Repeating Template)

**Layout:** Full-width sections with alternating content arrangement

**Background:** Alternating (White, Off-White, White, Off-White, White)

**Structure (Asymmetric Two-Column + Image):**

```
┌─ Container [Max-width 1200px] ─────────────┐
│                                            │
│ [Left 45%]           [Right 55%]          │
│ ┌──────────────┐    ┌──────────────┐     │
│ │  [Content]   │    │   [Image]    │     │
│ │              │    │              │     │
│ │              │    │              │     │
│ │              │    │              │     │
│ └──────────────┘    └──────────────┘     │
│        Gap: 48px                          │
│                                            │
└────────────────────────────────────────────┘

Padding: 80px top/bottom, 40px sides
```

**Content (Left Column):**

```
[H2] [Sector Name]
- Font: Montserrat SemiBold, 32px
- Colour: Deep Navy
- Margin bottom: 16px

[Section: Market Context]
[H3] "Market Context"
- Font: Montserrat Medium, 18px
- Colour: Deep Navy
- Margin bottom: 12px

[Body Text]
- Font: Inter Regular, 14px
- Line height: 1.6
- Colour: Graphite
- Margin bottom: 20px

[Section: Typical Projects]
[H3] "Typical Project Types"
- Font: Montserrat Medium, 18px
- Colour: Deep Navy
- Margin bottom: 12px

[Bulleted List - 5–6 items]
- Font: Inter Regular, 14px
- Colour: Graphite
- Line height: 1.6
- Margin bottom: 20px

[Section: Our Expertise]
[H3] "Our Sector Expertise"
- Font: Montserrat Medium, 18px
- Colour: Deep Navy
- Margin bottom: 12px

[Body Text]
- Font: Inter Regular, 14px
- Line height: 1.6
- Colour: Graphite
- Margin bottom: 20px

[Section: Why Verdant]
[H3] "Why Verdant"
- Font: Montserrat Medium, 16px
- Colour: Teal
- Margin bottom: 12px

[Body Text - 1 sentence]
- Font: Inter Regular, 14px
- Colour: Graphite
- Margin bottom: 24px

[CTA Button]
"Discuss Your Project"
- Secondary button style
```

**Image (Right Column):**
- Dimensions: 100% of column width, responsive
- Aspect ratio: 4:3
- Border radius: 4px
- Box shadow: 0 2px 8px rgba(0,0,0,0.08)
- Type: Sector-specific facility

**Sectors (Sections 4.2–4.6):**
1. Oil & Gas Processing
2. Cryogenic Facilities
3. Refining & Petrochemicals
4. Storage & Bulk Infrastructure
5. Utilities & Industrial Systems

---

### PAGE 5: COMPLIANCE & STANDARDS (/compliance)

#### Section 5.1: QHSE Framework Header

**Layout:** Full-width hero-style header

**Background:** Deep Navy (#1a2d4a)

**Content:**

```
[H1 Centered, Light Text]
"Compliance & Standards Excellence"
- Font: Montserrat SemiBold, 48px
- Colour: Pure White
- Margin bottom: 16px

[Body Text Centered, Light]
Introduction to QHSE commitment
- Font: Inter Regular, 15px
- Colour: Off-White
- Max-width: 700px
- Margin bottom: 0
```

---

#### Section 5.2: Four QHSE Pillars (Card Grid)

**Layout:** Full-width, 4-column grid

**Background:** Pure White

**Content:**

```
[4-Column Grid]
Each card:
- Background: Pure White
- Border: 1px Light Steel
- Padding: 32px
- Border radius: 4px
- Box shadow: 0 2px 8px rgba(0,0,0,0.08)

  [Icon or Number]
  - Size: 48px
  - Colour: Teal
  - Margin bottom: 16px

  [H3] Pillar Title
  - Font: Montserrat SemiBold, 22px
  - Colour: Deep Navy
  - Margin bottom: 16px

  [Body Text]
  - Font: Inter Regular, 14px
  - Line height: 1.6
  - Colour: Graphite

Pillars:
1. QHSE Framework
2. Safety & Risk Management
3. Quality Assurance
4. Environmental & Regulatory Compliance
```

**Grid Specifications:**

**Desktop (1200px+):**
- 4 columns
- Gap: 32px
- Card width: calc(25% - 24px)

**Tablet (768px–1199px):**
- 2 columns
- Gap: 24px
- Card width: calc(50% - 12px)

**Mobile (320px–767px):**
- 1 column
- Gap: 20px

---

### PAGE 6: PROJECT PORTFOLIO (/portfolio)

#### Section 6.1: Portfolio Introduction

**Layout:** Full-width, centered

**Background:** Pure White

**Content:**

```
[H2 Centered]
"Project Experience: Complexity, Breadth, and Technical Depth"
- Font: Montserrat SemiBold, 36px
- Colour: Deep Navy
- Margin bottom: 24px

[Body Text Centered]
Portfolio introduction
- Font: Inter Regular, 15px
- Max-width: 900px
- Margin bottom: 0
```

---

#### Section 6.2–6.7: Case Study Cards (6 total - Repeating Template)

**Layout:** Full-width sections, alternating background

**Background:** Alternating (White, Off-White)

**Structure (Two-Column Layout):**

```
┌─ Container [Max-width 1200px] ─────────────┐
│                                            │
│ [Left 55%]           [Right 45%]          │
│ ┌──────────────┐    ┌──────────────┐     │
│ │   [Image]    │    │  [Content]   │     │
│ │              │    │              │     │
│ │              │    │              │     │
│ │              │    │              │     │
│ └──────────────┘    └──────────────┘     │
│        Gap: 48px                          │
│                                            │
└────────────────────────────────────────────┘

Note: Alternate image/text position per case study
Padding: 80px top/bottom, 40px sides
```

**Image (Left or Right, alternating):**
- Dimensions: 100% of column width
- Aspect ratio: 4:3
- Border radius: 4px
- Box shadow: 0 2px 8px rgba(0,0,0,0.08)
- Type: Project-specific facility photograph

**Content (Right or Left, alternating):**

```
[H3] [Project Title]
- Font: Montserrat SemiBold, 24px
- Colour: Deep Navy
- Margin bottom: 12px

[Meta Information]
Sector: [Name]
Disciplines: [Comma-separated list]
- Font: Inter Medium (500), 13px
- Colour: Light Steel
- Margin bottom: 16px

[H4] "The Challenge"
- Font: Montserrat Medium, 16px
- Colour: Deep Navy
- Margin bottom: 8px

[Body Text]
- Font: Inter Regular, 14px
- Line height: 1.6
- Colour: Graphite
- Margin bottom: 16px

[H4] "Our Solution"
- Font: Montserrat Medium, 16px
- Colour: Deep Navy
- Margin bottom: 8px

[Body Text]
- Font: Inter Regular, 14px
- Line height: 1.6
- Colour: Graphite
- Margin bottom: 16px

[H4] "The Outcome"
- Font: Montserrat Medium, 16px
- Colour: Teal (highlight)
- Margin bottom: 8px

[Body Text + Metrics]
- Font: Inter Regular, 14px
- Line height: 1.6
- Colour: Graphite
- Bold keywords (e.g., "22% increase", "$4.2M")
```

**Responsive:**
- Desktop: 55/45 split, 48px gap
- Tablet: 50/50 split, 32px gap
- Mobile: Stacked (image top, content below), 24px gap

---

### PAGE 7: CONTACT & ENQUIRY (/contact)

#### Section 7.1: Contact Header

**Layout:** Full-width hero-style header

**Background:** Deep Navy (#1a2d4a)

**Content:**

```
[H1 Centered, Light Text]
"Get in Touch"
- Font: Montserrat SemiBold, 48px
- Colour: Pure White
- Margin bottom: 16px

[Body Text Centered, Light]
Invitation text
- Font: Inter Regular, 15px
- Colour: Off-White
```

---

#### Section 7.2: Two-Column Contact Layout

**Layout:** Two-column (contact info left, form right)

**Background:** Pure White

**Structure:**

```
┌─ Container [Max-width 1200px] ─────────────┐
│                                            │
│ [Left 35%]           [Right 65%]          │
│ ┌──────────────┐    ┌──────────────┐     │
│ │ Contact Info │    │   [Form]     │     │
│ │              │    │              │     │
│ │              │    │              │     │
│ └──────────────┘    └──────────────┘     │
│        Gap: 48px                          │
│                                            │
└────────────────────────────────────────────┘

Padding: 80px top/bottom, 40px sides
```

**Contact Info (Left Column):**

```
[H3] "Contact Information"
- Font: Montserrat SemiBold, 22px
- Colour: Deep Navy
- Margin bottom: 24px

[Contact Item 1]
[H4] "Address"
- Font: Montserrat Medium, 14px
- Colour: Deep Navy
- Margin bottom: 8px

[Text] Office address
- Font: Inter Regular, 14px
- Colour: Graphite
- Margin bottom: 24px

[Contact Item 2]
[H4] "Email"
- Font: Montserrat Medium, 14px
- Colour: Deep Navy
- Margin bottom: 8px

[Link] info@verdanteng.om
- Font: Inter Regular, 14px
- Colour: Teal
- Hover: Underline
- Margin bottom: 24px

[Contact Item 3]
[H4] "Telephone"
- Font: Montserrat Medium, 14px
- Colour: Deep Navy
- Margin bottom: 8px

[Link] +968 [number]
- Font: Inter Regular, 14px
- Colour: Teal
- Margin bottom: 24px

[Contact Item 4]
[H4] "WhatsApp"
- Font: Montserrat Medium, 14px
- Colour: Deep Navy
- Margin bottom: 8px

[Link] Send message
- Font: Inter Regular, 14px
- Colour: Teal

[Office Hours]
- Font: Inter Regular, 13px
- Colour: Light Steel
- Margin top: 24px
- Format: "Sunday–Thursday: 08:00–17:00 GST"
```

**Form (Right Column):**

**Form Title:**
```
[H3] "Send us an Enquiry"
- Font: Montserrat SemiBold, 22px
- Colour: Deep Navy
- Margin bottom: 24px
```

**Form Fields (Stacked Vertically):**

```
1. Your Name
   - Label: "Your Name *"
   - Input: Text field
   - Placeholder: "John Smith"
   - Required: Yes
   - Margin bottom: 20px

2. Organization
   - Label: "Organization *"
   - Input: Text field
   - Placeholder: "Acme Oil & Gas"
   - Required: Yes
   - Margin bottom: 20px

3. Email Address
   - Label: "Email Address *"
   - Input: Email field
   - Placeholder: "john@acmeoil.com"
   - Required: Yes
   - Margin bottom: 20px

4. Telephone Number
   - Label: "Telephone Number *"
   - Input: Tel field
   - Placeholder: "+968 xx xxx xxxx"
   - Required: Yes
   - Margin bottom: 20px

5. Project Type
   - Label: "Project Type *"
   - Input: Select dropdown
   - Options:
     -- Select project type
     -- Feasibility Study
     -- FEED (Front-End Engineering Design)
     -- Detailed Engineering
     -- Procurement Support
     -- Commissioning & Startup
     -- Other
   - Required: Yes
   - Margin bottom: 20px

6. Primary Sector
   - Label: "Primary Sector *"
   - Input: Select dropdown
   - Options:
     -- Select a sector
     -- Oil & Gas Processing
     -- Cryogenic (LNG/LPG/NGL)
     -- Refining & Petrochemicals
     -- Storage & Infrastructure
     -- Utilities & Industrial Systems
     -- Other
   - Required: Yes
   - Margin bottom: 20px

7. Service Disciplines
   - Label: "Service Disciplines (select all that apply)"
   - Input: Checkboxes (multiple select)
   - Options:
     ☐ Process Engineering
     ☐ Technical Safety & Risk
     ☐ Control & Instrumentation
     ☐ Piping & Plant Layout
     ☐ Mechanical Design
     ☐ Rotating Equipment
     ☐ Pipeline Engineering
   - Required: No
   - Margin bottom: 20px

8. Project Timeline
   - Label: "Project Timeline"
   - Input: Select dropdown
   - Options:
     -- Select timeline
     -- 0–3 Months
     -- 3–6 Months
     -- 6–12 Months
     -- 12+ Months
     -- Not Yet Determined
   - Required: No
   - Margin bottom: 20px

9. Project Budget Range
   - Label: "Project Budget Range"
   - Input: Select dropdown
   - Options:
     -- Select budget
     -- Less than $100K
     -- $100K–$500K
     -- $500K–$1M
     -- $1M–$5M
     -- More than $5M
     -- Not Yet Determined
   - Required: No
   - Margin bottom: 20px

10. Project Description
    - Label: "Project Description / Message *"
    - Input: Textarea
    - Placeholder: "Please describe your project requirements, challenges, or timeline..."
    - Required: Yes
    - Min-height: 120px
    - Margin bottom: 20px

11. Preferred Contact Method
    - Label: "Preferred Contact Method"
    - Input: Radio buttons
    - Options:
      ◉ Email
      ○ Telephone
      ○ WhatsApp
    - Required: No (defaults to email)
    - Margin bottom: 24px

12. Privacy Consent
    - Label: "I agree to the Privacy Policy and Terms of Use *"
    - Input: Checkbox
    - Required: Yes
    - Font: Inter Regular, 13px
    - Link styling: Teal, underline on hover
    - Margin bottom: 24px

13. Submit Button
    - Text: "Send Enquiry"
    - Style: Primary button (full-width on mobile, standard on desktop)
    - Margin bottom: 0
```

**Form Styling:**
- All input fields: Consistent styling per component system
- Labels: Inter Medium (500), 14px, Deep Navy
- Helper text: Inter Regular (400), 12px, Light Steel
- Error messages: Inter Regular (400), 12px, red (#d32f2f)
- Focus states: 2px Teal border, subtle shadow
- Responsive: Full-width on mobile

**Desktop Behaviour:**
- Two-column layout (35/65 split)
- Gap: 48px
- Contact info left, form right
- Form fields: 2 columns if space allows (e.g., name & org side-by-side)

**Tablet Behaviour:**
- Two-column layout (40/60 split)
- Gap: 32px
- Form fields: 1 column (stacked)

**Mobile Behaviour:**
- Single column (stacked)
- Contact info on top, form below
- Gap: 32px
- Form fields: Full width

---

#### Section 7.3: Response Commitment

**Layout:** Full-width, centered

**Background:** Off-White (#f5f5f5)

**Content:**

```
[H3 Centered]
"Your Enquiry Matters"
- Font: Montserrat SemiBold, 24px
- Colour: Deep Navy
- Margin bottom: 12px

[Body Text Centered]
"We aim to acknowledge all enquiries within 24 business hours. For time-sensitive matters, please call directly. We take all project discussions seriously and commit senior technical staff to initial consultation."
- Font: Inter Regular, 14px
- Max-width: 700px
- Colour: Graphite
- Line height: 1.6

Padding: 48px top/bottom, 40px sides
```

---

## VI. RESPONSIVE BREAKPOINTS & MOBILE BEHAVIOUR

### Breakpoint Strategy

```
Mobile:      320px–767px (Portrait & Landscape)
Tablet:      768px–1199px (Portrait & Landscape)
Desktop:     1200px+ (All sizes)
```

### Mobile-Specific Behaviors

**Header Navigation:**
- Logo: Smaller (40px height)
- Hamburger menu: Visible at 1024px or below
- Menu items: Stack vertically, 16px padding
- Full-height overlay menu OR slide-out drawer
- Animation: 300ms slide or fade

**Form Fields:**
- Input height: 48px minimum (touch-friendly)
- Font size: 16px (prevents zoom on focus)
- Label: Above field, not inside
- Spacing: 20px between fields

**Images:**
- Max-width: 100% with padding 0 20px
- Aspect ratio: Maintained
- No excessive white space

**Buttons:**
- Touch target: Minimum 48×48px
- Full-width on mobile: Padding 0 20px, width calc(100% - 40px)
- OR standard width centered

**Typography:**
- H1: 28–32px (reduced from 44–52px)
- H2: 22–28px (reduced from 28–36px)
- Body: 15px (maintained for readability)
- Line height: Maintained (1.6–1.8)

**Spacing:**
- Section padding: 60px top/bottom (reduced from 80–120px)
- Component padding: Slightly reduced
- Gaps: Reduced by 20–30% vs. desktop

**Navigation:**
- Two-column layout → Single column
- Grids stack to 1 column
- Images full-width
- Cards full-width with padding

---

## VII. CTA LOGIC & USER FLOW

### Primary Call-to-Action (Hero)

**Button Text:** "Explore Our Services"
**Destination:** /services (smooth scroll to services section on home, OR navigate to services page)
**Behavior:**
- Desktop: Smooth scroll if on same page (anchor #services)
- Mobile: Navigate to /services page (or smooth scroll)
- Tracking: Event "Click - Hero CTA"

### Secondary CTAs (Throughout Pages)

**Service Pages:**
- Button Text: "Discuss This Discipline"
- Destination: /contact?discipline=[slug]
- Behavior: Pre-populate form field if possible
- Tracking: Event "Click - Service CTA"

**Sector Pages:**
- Button Text: "Discuss Your Project"
- Destination: /contact?sector=[slug]
- Behavior: Pre-populate form field
- Tracking: Event "Click - Sector CTA"

**Case Studies:**
- Button Text: "View Case Studies"
- Destination: /portfolio
- Behavior: Standard navigation
- Tracking: Event "Click - Portfolio CTA"

**Contact Page:**
- Button Text: "Send Enquiry"
- Form submission
- POST to backend
- Tracking: Event "Form Submit - Enquiry"

### Secondary CTAs (Tertiary/Text Links)

**Footer Links:**
- All navigation items
- Destination: Respective pages
- Behavior: Standard navigation
- Tracking: Event "Click - Footer Link"

**Breadcrumb Navigation:**
- Clickable items (except current page)
- Destination: Previous pages
- Behavior: Standard navigation
- Tracking: Event "Click - Breadcrumb"

---

## VIII. FOOTER STRUCTURE (DETAILED)

### Footer Layout Specifications

**Overall Container:**
- Background: Deep Navy (#1a2d4a)
- Padding: 60px horizontal, 60px top, 30px bottom
- Full viewport width
- No max-width constraint (edge to edge)

### Footer Grid Layout

**Desktop (1200px+):**
- 5-column grid
- Column width: ~200px each
- Gap: 40px
- Padding: 0 60px
- Max-width content: 1200px (centered container)

**Tablet (768px–1199px):**
- 3-column grid
- Column width: Flex equal
- Gap: 32px
- Padding: 0 40px

**Mobile (320px–767px):**
- 1-column (stacked)
- Full width
- Gap: 32px
- Padding: 0 20px

### Footer Columns (5 Total)

#### Column 1: Company

```
[Header]
"Company"
- Font: Montserrat Medium (500), 13px
- Colour: Off-White (#f5f5f5)
- Margin bottom: 16px

[Link Items - Stacked]
"About Us" → /about
"Our Team" → /about#team
"Methodology" → /about#methodology

- Font: Inter Regular (400), 14px
- Colour: Off-White
- Link hover: Teal (#1e7b7c) colour
- Spacing between items: 12px
```

#### Column 2: Services

```
[Header]
"Services"
- Font: Montserrat Medium (500), 13px
- Colour: Off-White
- Margin bottom: 16px

[Link Items - Stacked]
All 7 service disciplines:
- Process Engineering → /services#process
- Technical Safety → /services#safety
- Control & Instrumentation → /services#control
- Piping & Layout → /services#piping
- Mechanical Design → /services#mechanical
- Rotating Equipment → /services#rotating
- Pipeline Engineering → /services#pipeline

- Font: Inter Regular (400), 14px
- Colour: Off-White
- Link hover: Teal colour
- Spacing: 12px
```

#### Column 3: Sectors

```
[Header]
"Sectors"
- Font: Montserrat Medium (500), 13px
- Colour: Off-White
- Margin bottom: 16px

[Link Items - Stacked]
All 5 sectors:
- Oil & Gas → /sectors#oilgas
- Cryogenic → /sectors#cryogenic
- Refining → /sectors#refining
- Storage → /sectors#storage
- Utilities → /sectors#utilities

- Font: Inter Regular (400), 14px
- Colour: Off-White
- Link hover: Teal colour
- Spacing: 12px
```

#### Column 4: Resources

```
[Header]
"Resources"
- Font: Montserrat Medium (500), 13px
- Colour: Off-White
- Margin bottom: 16px

[Link Items - Stacked]
"Case Studies" → /portfolio
"Compliance & Standards" → /compliance
"Project Delivery" → /services (anchor to delivery section)

- Font: Inter Regular (400), 14px
- Colour: Off-White
- Link hover: Teal colour
- Spacing: 12px
```

#### Column 5: Connect

```
[Header]
"Connect"
- Font: Montserrat Medium (500), 13px
- Colour: Off-White
- Margin bottom: 16px

[Contact Methods]
[H4] "Email"
- Font: Inter Medium (500), 12px
- Colour: Light Steel (#b8bcc4)
- Margin bottom: 4px

[Link] info@verdanteng.om
- Font: Inter Regular (400), 14px
- Colour: Off-White
- Link hover: Teal colour
- Margin bottom: 16px

[H4] "Telephone"
- Font: Inter Medium (500), 12px
- Colour: Light Steel
- Margin bottom: 4px

[Link] +968 xx xxx xxxx (clickable tel:)
- Font: Inter Regular (400), 14px
- Colour: Off-White
- Margin bottom: 16px

[H4] "WhatsApp"
- Font: Inter Medium (500), 12px
- Colour: Light Steel
- Margin bottom: 4px

[Link] Chat with us
- Font: Inter Regular (400), 14px
- Colour: Off-White
- Link hover: Teal colour

[Social Icons - Optional]
- LinkedIn icon (link)
- Twitter icon (link)
- Icon size: 24px
- Icon colour: Off-White
- Icon hover: Teal colour
- Margin top: 20px
- Spacing between icons: 16px
```

### Footer Bottom Section

**Layout:** Full-width bar below main footer columns

**Structure:**
```
┌─ Footer Bottom Bar ──────────────────────┐
│                                          │
│ [Left: Copyright] [Gap] [Right: Policies]│
│                                          │
└──────────────────────────────────────────┘
```

**Desktop Layout:**
- Copyright: Left-aligned
- Policies: Right-aligned
- Spacing: Justify-between
- Border top: 1px Light Steel (#b8bcc4)
- Padding: 20px horizontal, 20px vertical
- Margin top: 40px

**Mobile Layout:**
- Stack vertically
- Copyright: Top-aligned
- Policies: Bottom-aligned
- Border top: 1px Light Steel
- Padding: 20px horizontal, 20px vertical

**Copyright Text:**
```
"© 2026 Verdant Engineering. All rights reserved."
- Font: Inter Regular (400), 12px
- Colour: Light Steel (#b8bcc4)
```

**Policy Links:**
```
"Privacy Policy" | "Terms of Use" | "Cookies"
- Font: Inter Regular (400), 12px
- Colour: Light Steel
- Links hover: Teal colour
- Link separator: " | " (pipe character, Light Steel)
```

---

## IX. NAVIGATION STRUCTURE (DETAILED)

### Main Header Navigation

**Container Specifications:**
- Fixed position (sticky recommended)
- Full viewport width
- Height: 70px
- Background: Pure White (#ffffff)
- Border bottom: 1px Light Steel (#b8bcc4)
- Z-index: 100
- Box shadow (optional): 0 2px 8px rgba(0,0,0,0.05)

**Logo Area:**
- Position: Left-aligned
- Dimensions: 45px height (maintain aspect ratio)
- Padding: 12px (vertical), 20px (left)
- Logo image: SVG or high-res PNG
- Click behavior: Navigate to home (/)

**Navigation Items (Desktop):**
- Position: Center-aligned
- Display: Horizontal flex
- Items:
  1. Home (/)
  2. About (/about)
  3. Services (/services)
  4. Sectors (/sectors)
  5. Compliance (/compliance)
  6. Portfolio (/portfolio)
  7. Contact (/contact)

**Navigation Item Styling:**
```
[Default State]
- Font: Inter Medium (500), 15px
- Colour: Deep Navy (#1a2d4a)
- Padding: 0 (text only, no box)
- Margin: 0 14px (spacing between items)

[Hover State]
- Colour: Teal (#1e7b7c)
- Text-decoration: Underline (2px, Teal)
- Transition: 200ms ease
- Cursor: Pointer

[Active State - Current Page]
- Colour: Teal
- Text-decoration: Underline (2px, Teal)
- Persistent (not just on hover)

[Focus State - Keyboard Navigation]
- Outline: 2px Teal
- Outline-offset: 4px
```

**CTA Button (Desktop):**
- Position: Right-aligned
- Text: "Contact Us"
- Style: Primary button
- Padding: 12px 24px
- Font: Inter Medium (500), 14px
- Background: Teal (#1e7b7c)
- Text colour: Pure White
- Border radius: 4px
- Margin right: 20px

**CTA Button Hover:**
- Background: #155859 (darker teal)
- Box shadow: 0 4px 12px rgba(0,0,0,0.15)
- Transition: 200ms ease

---

### Mobile Navigation (320px–767px)

**Layout:**
- Logo: Left-aligned, 40px height
- Hamburger Menu: Right-aligned, 24px × 24px icon
- CTA Button: Removed from header (placed in menu)

**Hamburger Menu:**
- Icon: Three horizontal lines (Deep Navy colour)
- Background: Transparent
- Padding: 12px
- Cursor: Pointer
- Animation: 300ms fade on click

**Mobile Menu (When Open):**
- Position: Fixed or absolutely positioned
- Full height: 100vh
- Width: 100% or 300px (sliding drawer)
- Background: Deep Navy (#1a2d4a)
- Z-index: 101 (above all content)
- Overlay: Semi-transparent dark overlay (rgba(0,0,0,0.5)) behind menu

**Mobile Menu Items:**
- Stack vertically
- Full width or 100% padding
- Padding: 20px left, 16px vertical per item
- Font: Inter Medium (500), 16px
- Colour: Off-White (#f5f5f5)

**Mobile Menu Item Interaction:**
- Tap: Navigate to page
- Active page: Teal text + left border (4px Teal)
- Hover: Background fade to rgba(255,255,255,0.1)

**Mobile Menu Close:**
- Button: Top-right corner, X icon
- Padding: 12px
- Font: Off-White
- Tap: Close menu

**Mobile Menu CTA:**
- "Contact Us" button at bottom of menu
- Primary button style
- Full width (minus padding)
- Padding: 0 16px
- Margin top: 24px

---

### Breadcrumb Navigation (Sub-pages)

**Display Location:**
- Appears on all pages except home
- Position: Below header, above main content
- Background: Off-White (#f5f5f5)
- Padding: 12px 40px

**Breadcrumb Format:**
```
Home > About > [Current Page]
Home > Services > Process Engineering
Home > Sectors > Oil & Gas Processing
etc.
```

**Styling:**
- Font: Inter Regular (400), 12px
- Colour: Light Steel (#b8bcc4)
- Separator: " > " (greater-than symbol)
- Link hover: Teal colour
- Current page: Not linked (Deep Navy colour)

**Responsive:**
- Desktop: Full breadcrumb displayed
- Mobile: Shortened or hidden (optional)

---

## X. COMPONENT SYSTEM (IMPLEMENTATION GUIDE)

### Recommended Component Library

**Use a modern component system for consistency:**

#### Suggested Approach:
- **Framework:** React, Vue, or vanilla JavaScript (depending on CMS choice)
- **Component Structure:** Modular, reusable components

#### Core Components to Create:

1. **Layout Components:**
   - Header
   - Footer
   - Container (max-width wrapper)
   - Section (with alternating backgrounds)
   - Grid (responsive flex/css-grid)

2. **Typography Components:**
   - Heading (H1–H6 with sizing variants)
   - Paragraph
   - Small text/caption
   - Code block

3. **Form Components:**
   - Input (text, email, tel, etc.)
   - Select dropdown
   - Checkbox
   - Radio button
   - Textarea
   - Label
   - Form group
   - Error message
   - Helper text

4. **Interactive Components:**
   - Button (Primary, Secondary, Tertiary variants)
   - Link
   - Navigation menu
   - Mobile hamburger menu

5. **Content Components:**
   - Card (with hover states)
   - Image
   - Image with text overlay
   - Image grid
   - Testimonial/quote card

6. **Layout Patterns:**
   - Hero section
   - Two-column section
   - Grid section (3-col, 4-col, etc.)
   - Full-width section
   - Sidebar + content

### Component Naming Convention

```
Component.vue or Component.jsx:
- ButtonPrimary
- ButtonSecondary
- ButtonTertiary
- InputField
- SelectDropdown
- CardContent
- CardDark
- GridResponsive
- SectionHero
- SectionTwoColumn
- NavigationHeader
- FooterMain
```

### Styling Approach

**Recommended:** CSS-in-JS or utility-first CSS (Tailwind-style)

**Advantages:**
- Consistency across components
- Easy theming (colour swaps)
- Responsive design with utilities
- No style duplication
- Simple maintenance

**Colour Tokens (CSS Variables or Theme File):**
```
--colour-navy: #1a2d4a
--colour-graphite: #3d3d3d
--colour-charcoal: #2b2b2b
--colour-light-steel: #b8bcc4
--colour-warm-sand: #d4c5a9
--colour-teal: #1e7b7c
--colour-teal-dark: #155859
--colour-teal-darkest: #0d3d3e
--colour-off-white: #f5f5f5
--colour-white: #ffffff

--spacing-xs: 8px
--spacing-sm: 16px
--spacing-md: 24px
--spacing-lg: 32px
--spacing-xl: 40px
--spacing-2xl: 48px
--spacing-3xl: 60px
--spacing-4xl: 80px
--spacing-5xl: 96px
--spacing-6xl: 120px
```

---

## XI. IMPLEMENTATION NOTES FOR DEVELOPERS

### Performance Optimization

**Image Optimization:**
- Use WebP format with JPEG fallback
- Implement responsive images (srcset)
- Lazy-load images below fold
- Compress all images (target <80KB per image)
- Use aspect ratio containers to prevent layout shift

**Code Splitting:**
- Split pages into separate bundles
- Lazy-load less critical sections
- Minimize JavaScript bundle size

**Caching:**
- Set cache headers for static assets
- Use CDN for image delivery
- Cache API responses where applicable

### SEO Optimization

**Meta Tags:**
- Unique meta descriptions per page (150–160 chars)
- Open Graph tags for social sharing
- Twitter Card tags
- Canonical tags (if applicable)

**Schema Markup:**
- Organization schema on home page
- Service schema on services page
- LocalBusiness schema on contact page
- Article schema on case studies

**URL Structure:**
- Semantic URLs (e.g., /services/process-engineering)
- No query parameters for navigation
- Consistent URL format across pages

### Accessibility (WCAG 2.1 AA)

**Colour Contrast:**
- Body text vs. background: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- Interactive elements: 3:1 minimum

**Focus States:**
- All interactive elements: Clear focus indicator
- Focus outline: 2px minimum width
- Focus outline colour: High contrast (Teal on light backgrounds)

**Keyboard Navigation:**
- Tab order: Logical and intuitive
- Form fields: Clearly labeled
- Skip-to-content link (optional)

**Alt Text:**
- All images: Descriptive alt text
- Decorative images: Empty alt attribute (alt="")
- Complex images: Detailed description

**Form Accessibility:**
- Labels associated with inputs (for attribute)
- Error messages linked to inputs (aria-describedby)
- Required fields marked with asterisk + aria-required
- Form validation: Clear error messages

### Testing Checklist

- [ ] Responsive design (320px, 768px, 1200px, 1600px breakpoints)
- [ ] Form validation and submission
- [ ] CTA link destinations
- [ ] Navigation menu (desktop and mobile)
- [ ] Image loading and lazy loading
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Mobile touch interactions
- [ ] Keyboard navigation
- [ ] Colour contrast
- [ ] Page load performance (<2s target)
- [ ] SEO meta tags and schema
- [ ] Form submission tracking/analytics

### Browser Support

**Minimum Requirements:**
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

### Analytics & Tracking

**Recommended Events to Track:**
- Page views
- Hero CTA clicks
- Service CTA clicks
- Sector CTA clicks
- Navigation link clicks
- Form opens
- Form submissions
- PDF downloads (if applicable)
- Social link clicks

**Implementation:**
- Google Analytics 4
- Tag Manager for event tracking
- Custom event parameters (e.g., cta_section, discipline_name)

---

## XII. DEPLOYMENT & LAUNCH GUIDELINES

### Pre-Launch Checklist

- [ ] All pages fully responsive (tested on real devices)
- [ ] All forms functional and tested
- [ ] All links working (internal and external)
- [ ] Images optimized and loading correctly
- [ ] SEO meta tags implemented
- [ ] Analytics tracking implemented
- [ ] 404 page created
- [ ] SSL certificate installed (HTTPS)
- [ ] Error pages (500, etc.) created
- [ ] Sitemap.xml generated
- [ ] robots.txt configured
- [ ] Performance audit (Lighthouse >90)
- [ ] Accessibility audit (WCAG AA)
- [ ] Cross-browser testing completed
- [ ] Mobile testing completed
- [ ] Security audit completed

### Post-Launch Tasks

- [ ] Monitor Analytics for traffic
- [ ] Monitor form submissions
- [ ] Monitor error rates and logs
- [ ] Monitor page performance
- [ ] Respond to enquiries within 24 hours
- [ ] Track CTA performance by section
- [ ] Collect user feedback
- [ ] Plan for future optimizations

---

## XIII. DESIGN SYSTEM HANDOFF DOCUMENT

When handing off to development team, provide:

1. **Design Files**
   - Figma or Adobe XD file with all pages
   - Component library defined
   - Responsive breakpoints shown
   - Interactive states documented

2. **Design Specs**
   - Colour palette (hex codes)
   - Typography guidelines (font stacks, sizes, weights)
   - Spacing system (8px grid)
   - Component specifications (dimensions, padding, etc.)
   - Interactive state specifications

3. **Asset Package**
   - All images (optimized, multiple resolutions)
   - Logo files (SVG + raster)
   - Icons (if used)
   - Favicons

4. **Documentation**
   - Brand guidelines
   - Component usage guide
   - Copy/content document
   - Form specifications
   - CMS field structure
   - API requirements (if applicable)

5. **Quality Assurance**
   - Test cases for all pages
   - Form validation rules
   - Responsive design breakpoints
   - Performance targets
   - Accessibility checklist

---

## XIV. RESPONSIVE DESIGN PATTERNS (QUICK REFERENCE)

### Hero Section (Mobile)
```
Height: 500px (reduced from 600–700px)
Content: Center-aligned
Headline: 28px (reduced from 52px)
Button: Full width or standard width
Overlay: Maintained
```

### Two-Column Layout (Mobile)
```
Desktop: Image 55% | Text 45%, 48px gap
Tablet: 50/50, 32px gap
Mobile: Stack vertically, image first, 24px gap
```

### Three-Column Grid (Mobile)
```
Desktop: 3 columns, 32px gap
Tablet: 2 columns, 24px gap
Mobile: 1 column (stacked), 16px gap
```

### Form Layout (Mobile)
```
Desktop: Two-column (info + form), 48px gap
Tablet: 2-column, 32px gap OR single column
Mobile: Single column stacked, 32px gap between sections
Form fields: Full width, 48px min-height
```

---

## XV. FINAL RECOMMENDATIONS FOR PREMIUM INDUSTRIAL WEBSITE

### Design Excellence
- Maintain generous whitespace (luxury feel)
- Use professional photography only (no generic stock)
- Consistent typography hierarchy (clarity, authority)
- Subtle animations (sophistication, not distraction)
- Disciplined colour usage (navy, graphite primary; teal accent)

### User Experience
- Clear, scannable content (H2 → body + bullets)
- Intuitive navigation (6 main pages, flat structure)
- Fast loading (optimize images, minimize scripts)
- Mobile-first responsive design (start with mobile, enhance for desktop)
- Easy form completion (only essential fields required)

### Technical Quality
- Semantic HTML (accessibility + SEO)
- CSS Grid/Flexbox (responsive, modern)
- JavaScript for interactivity (minimal, essential only)
- No page refresh on form submission (AJAX)
- No auto-playing media (respect user preference)

### Brand Positioning
- Every element reinforces "premium," "expert," "regional"
- Copy reflects technical credibility (not marketing hype)
- Imagery matches discipline/sector (context-appropriate)
- Navigation supports B2B decision-making journey
- CTAs qualify leads (not desperate for traffic)

### Maintenance & Scalability
- Component-based architecture (easy to extend)
- Reusable patterns (service cards, sector cards, case study layouts)
- Clean code structure (easy for future developers)
- CMS integration (non-technical content updates)
- Analytics integration (measure performance)

---

**END OF IMPLEMENTATION BRIEF**

---

### How to Use This Document

1. **Front-End Developer:** Start with Sections III (Global Layout), IV (Component System), and V (Page Specifications). All technical details are there.

2. **Designer:** Reference Section IV (Components), VI (Responsive Breakpoints), and provide Figma file with all specifications from this brief.

3. **QA Tester:** Use Section XI (Accessibility), XII (Testing Checklist), and XIV (Responsive Patterns) to verify implementation.

4. **Project Manager:** Use Section X (Pre-Launch Checklist) and Section XII (Deployment) to track progress.

5. **Content Manager:** Extract content specifications from Section V (Page Specifications) for CMS implementation.

---

**This brief is complete and ready for implementation. All technical details, component specifications, and responsive behaviour have been defined. No additional specification documents should be necessary.**
