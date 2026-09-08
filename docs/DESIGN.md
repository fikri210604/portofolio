# DESIGN.md — Portfolio Website Design Specification

## 1. Design Reference

Primary visual/interaction reference:
- https://syedmoinuddin.vercel.app/

The reference portfolio is a single-page personal portfolio focused on:
- strong personal branding
- oversized typography
- editorial/minimal layout
- progressive reveal and motion
- project-first presentation
- technology/tool stack visibility
- social proof
- a strong closing CTA

The implementation should be **inspired by the structure and interaction principles**, not copied pixel-for-pixel or copied in wording/assets.

## 2. Design Direction

### Design keywords
`minimal` · `editorial` · `premium` · `developer-centric` · `high-contrast` · `motion-driven` · `spacious`

### Visual goal
The website should feel like a premium personal engineering portfolio rather than a generic template.

Avoid:
- excessive gradients
- generic glassmorphism
- dashboard-like layouts
- too many cards
- excessive rounded containers
- stock illustrations
- skill bars/progress percentages
- unnecessary decorative UI

## 3. Information Architecture

Recommended page structure:

1. Header / Navigation
2. Hero
3. About / Introduction
4. Tech Stack
5. Selected Projects
6. Optional Current Focus / Now
7. Experience / Education
8. Optional Testimonials
9. Contact CTA
10. Footer

The reference site is primarily a single scrolling experience with Hero → intro → tools → projects → CTA/testimonials → contact. citeturn0view0

## 4. Header

### Behavior
- Sticky or fixed navigation.
- Transparent/minimal state at the top.
- Subtle background/border after scrolling.
- Desktop navigation should remain visually lightweight.
- Mobile navigation becomes a compact menu.

### Navigation
Use anchor navigation:
- About
- Stack
- Projects
- Experience
- Contact

Primary CTA:
- `Let's Talk`

Do not create a complex mega-menu.

## 5. Hero

### Composition

Left/main content:
- small availability/status line
- very large name
- concise role statement
- short positioning statement
- primary CTA
- secondary social link

Example hierarchy:

```text
AVAILABLE FOR OPPORTUNITIES

AHMAD
FIKRI HANIF

Computer Science Student · Software Engineer

I build practical web systems, APIs, and intelligent
data-driven applications.

[View Projects] [GitHub]
```

### Typography
- Name should dominate the first viewport.
- Use a large display type scale.
- Tight line-height for the name.
- Body copy should be significantly smaller.
- Use letter spacing selectively for labels and section headings.

### Motion
On initial load:
1. page background appears
2. status line fades/slides in
3. name reveals line-by-line
4. description appears
5. CTAs appear last

Motion must remain fast and subtle.

## 6. About Section

Do not write a generic biography.

Use 1–3 concise paragraphs explaining:
- who Ahmad is
- what he builds
- engineering interests
- how he approaches problems
- what type of opportunity/collaboration he wants

Recommended positioning:
- Computer Science student at Universitas Lampung
- backend/web engineering
- data science and machine learning
- practical systems and APIs
- interest in AI-powered products

Use editorial typography instead of a conventional profile card.

## 7. Tech Stack Section

The reference separates tools into Frontend, Backend, and UI Libraries. citeturn0view0

For this portfolio, use categories relevant to the actual skill set.

### Categories

#### Languages
- PHP
- Python
- JavaScript
- TypeScript
- Java
- C++

#### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS

#### Backend
- Laravel
- REST API
- FastAPI
- MySQL
- PostgreSQL
- Redis

#### Data / AI
- Pandas
- Scikit-learn
- XGBoost
- SBERT
- MLflow

#### Tools
- Git/GitHub
- Postman
- Figma
- Canva
- Docker (only if genuinely used)

Only show technologies that can be defended through actual projects/experience.

### Interaction
Use:
- horizontally scrolling/marquee rows where appropriate
- hover emphasis
- subtle icon movement
- no percentage skill meters

## 8. Projects

This is the most important section.

### Project card anatomy

Each project should contain:
1. project image/mockup
2. project title
3. one-sentence problem/solution
4. role
5. technology tags
6. links:
   - Live Demo
   - GitHub
   - Case Study (optional)

### Recommended projects

Prioritize projects that demonstrate engineering depth:

1. Sistem Informasi KKN Universitas Lampung
   - Laravel
   - REST API
   - MySQL/PostgreSQL if applicable
   - Backend Developer

2. SkillBridge AI
   - Next.js
   - FastAPI
   - Supabase
   - NLP/NER
   - SBERT

3. IHSG / Stock Prediction project
   - Python
   - Pandas
   - XGBoost
   - MLflow/DagsHub

4. Sentiment Analysis
   - Python
   - IndoBERT or actual model used
   - NLP

5. TerraGuard AI
   - machine learning / data science
   - include only verified stack

6. Other strongest production/web project

Do not show every project. Six strong projects are better than fifteen weak ones.

### Project interaction

Desktop:
- project image dominates
- metadata is visually secondary
- hover reveals additional action or movement

Mobile:
- cards become stacked
- no hover-dependent information
- actions remain visible

## 9. Project Detail Interaction

Optional enhancement:
- clicking a project opens a dedicated route `/projects/[slug]`
- include problem
- solution
- architecture
- key features
- technical decisions
- challenges
- result
- screenshots
- repository/demo

This turns the portfolio from a gallery into evidence of engineering ability.

## 10. Experience

Use a clean timeline or editorial list.

Each entry:
- organization
- role
- date
- 2–4 impact-oriented bullets

Examples:
- Backend Developer — Sistem Informasi KKN Unila
- Asisten Dosen
- DPM FMIPA Unila
- Rois FMIPA Unila

Avoid turning organizational activities into long paragraphs.

## 11. Testimonials

Testimonials are optional.

**Critical rule:** never fabricate testimonials.

If genuine testimonials exist:
- person name
- role/organization
- short quote
- optional avatar

If there are no genuine testimonials, remove this section and replace it with:
- achievements
- selected writing
- GitHub activity
- project outcomes

The reference uses a testimonial section as social proof. citeturn0view0

## 12. Contact CTA

The reference closes with a large "Let's Talk" style CTA. citeturn0view0

Recommended:

```text
LET'S
BUILD SOMETHING.

Have a project, internship opportunity,
research idea, or collaboration?

[Email Me] [LinkedIn] [GitHub]
```

The CTA should occupy substantial vertical space.

## 13. Footer

Include:
- Ahmad Fikri Hanif
- short role descriptor
- GitHub
- LinkedIn
- email
- copyright
- optional "Back to top"

Keep it minimal.

## 14. Color System

Prefer a monochrome foundation.

### Light mode
- background: near-white
- foreground: near-black
- muted text: neutral gray
- border: subtle neutral
- accent: one restrained brand color

### Dark mode
Optional, but if implemented it must be designed intentionally rather than simply inverted.

Do not use more than one dominant accent color.

## 15. Typography

Recommended pairing:
- Display: Geist / Inter / Space Grotesk
- Body: Geist / Inter
- Mono labels: Geist Mono / JetBrains Mono

Use one display family + one body family maximum.

Suggested scale:
- Hero: `clamp(4rem, 11vw, 10rem)`
- Section heading: `clamp(3rem, 7vw, 7rem)`
- Project title: `clamp(2rem, 4vw, 4rem)`
- Body: `1rem–1.25rem`
- Labels: `0.7rem–0.85rem`

## 16. Spacing

Use generous whitespace.

Suggested container:
- max-width: `1400px`
- horizontal padding: `24px` mobile, `48px` tablet, `64px+` desktop

Section vertical spacing:
- mobile: `96px–128px`
- desktop: `160px–220px`

Avoid cramming sections together.

## 17. Motion System

The reference explicitly presents Framer Motion and GSAP among its UI technologies/projects. citeturn0view0

Recommended implementation:
- **Framer Motion** for React component entrance/exit/layout animation.
- **GSAP** only for complex timeline/scroll choreography.
- Do not use both for the same simple animation.

### Motion principles
- duration: roughly `0.3–0.8s` for UI transitions
- stagger content
- use transform/opacity instead of expensive layout animation
- respect `prefers-reduced-motion`

### Good animations
- text reveal
- section reveal
- image scale on hover
- project card movement
- marquee
- subtle cursor/interaction effects

### Bad animations
- constant floating elements
- excessive parallax
- long page transitions
- animation on every DOM node
- motion that blocks reading

## 18. Responsive Design

Breakpoints:
- mobile: `< 640px`
- tablet: `640–1023px`
- desktop: `>= 1024px`

Mobile must be designed, not merely shrunk.

Important:
- hero typography must wrap intentionally
- project cards stack
- horizontal tech lists can scroll
- navigation collapses
- all hover information must have a touch equivalent

## 19. Accessibility

Required:
- semantic HTML
- visible keyboard focus
- sufficient color contrast
- alt text for meaningful images
- decorative images marked appropriately
- reduced-motion support
- accessible mobile menu
- accessible links/buttons
- no information conveyed only through color

## 20. Performance

Required:
- Next.js Image
- lazy-load below-the-fold images
- optimize project screenshots
- avoid unnecessary client components
- use server components by default
- animate only necessary elements
- minimize third-party scripts

Target:
- Lighthouse Performance >= 90
- Accessibility >= 90
- SEO >= 90

## 21. Component Architecture

Recommended:

```text
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Container.tsx
├── sections/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── TechStack.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Testimonials.tsx
│   └── ContactCTA.tsx
├── project/
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   └── ProjectMeta.tsx
├── ui/
│   ├── Button.tsx
│   ├── Badge.tsx
│   ├── SectionHeading.tsx
│   └── Marquee.tsx
└── motion/
    ├── FadeIn.tsx
    ├── TextReveal.tsx
    └── Stagger.tsx
```

Use shadcn/ui only for genuinely useful primitives; do not turn the portfolio into a component-library showcase.

## 22. Reference vs Implementation

### Confirmed from the reference website
- Next.js and React are listed.
- TypeScript is listed.
- Tailwind CSS is listed.
- Framer Motion is listed.
- GSAP is listed for some projects.
- Project cards contain title, description, image, and stack labels.
- There are Frontend, Backend, and UI Libraries categories.
- The page contains a large closing CTA.
- The page contains testimonials.
- The page links to GitHub and LinkedIn. citeturn0view0

### Not safe to claim from the public page alone
- exact Next.js version
- exact Tailwind version
- exact font files
- exact component library used on the Vercel deployment
- exact animation implementation
- exact folder structure
- exact dependency versions

Therefore, treat the implementation stack below as a recommended reproduction stack, not a forensic claim.

## 23. Actual Implementation Stack

- **Framework:** Astro 5 (Static Site Generator & Islands Architecture)
- **UI Components:** React 19 + TypeScript
- **Styling:** Tailwind CSS v4 + Clean Monochrome CSS Tokens
- **Animation:** Framer Motion (for subtle reveals, transforms, and layout transitions)
- **Component Primitives:** React Bits (`LogoLoop`, `BlurText`, `SpotlightCard`) & 21st.dev patterns
- **Asset Optimization:** `astro:assets` with webp images
- **Icons:** `react-icons` (SimpleIcons for tech, Feather/Heroicons for UI)
- **Deployment:** Vercel / Netlify / Cloudflare Pages

# 31. Visual Fidelity Addendum — Based on Supplied Screenshot

The supplied screenshot changes several priorities from the earlier generic specification. Treat this section as an override where it conflicts with earlier wording.

## Hero
- Use a nearly full-viewport dark hero.
- The name is centered and extremely large, with very tight line-height.
- The portrait/avatar overlaps the name rather than sitting in a conventional profile column.
- Use a soft blurred monochrome photographic atmosphere behind the hero.
- Keep supporting copy tiny and positioned low/around the hero rather than using a conventional centered paragraph.

## Intro
- Use a large amount of vertical whitespace after the hero.
- Place the main statement toward the left and compact metadata toward the right.
- Use very small uppercase/mono metadata labels.
- Avoid a conventional About card.

## Projects
- Do not use a grid of equal cards.
- Use large stacked cards with a muted dark-slate surface.
- Alternate text/image orientation from card to card.
- Put project screenshots inside realistic browser/laptop mockups where useful.
- Place small circular GitHub/live buttons near the card's upper corners.
- Keep card typography relatively small compared with the hero/CTA.

## Social proof
- The reference has a partner/collaboration block followed by testimonials.
- For Ahmad, replace any implied client roster with an honest collaboration statement unless real clients exist.
- Testimonials are optional and must be real.

## Ending
- The final CTA must be visually oversized and occupy substantial vertical space.
- Prefer `LET'S BUILD TOGETHER.` or `LET'S TALK.` over a conventional contact form.
- The footer should be visually quiet.

## Important correction
The screenshot demonstrates that the portfolio is primarily a **typographic/editorial art direction piece with projects embedded inside it**, not a conventional information-dense portfolio. Therefore, visual hierarchy must not be driven by cards, badges, or skill grids.

# 32. Anti-AI Slop & 21st.dev Component Integration Blueprint

To ensure the portfolio looks like a high-end designer-engineer portfolio and avoids looking like generic "AI Slop":

1. **Decommission Cosmic Gimmicks:** All canvas particle loops (`StarField`, `SpaceParticles`), `ScrollRocket`, floating rocket emojis, and background music players are turned off.
2. **Monochrome Palette:** Replace multi-colored gradients (`#5227FF`, `#00d4ff`, `#FF9FFC`) with neutral zinc/slate tones (`#09090b`, `#18181b`, `#27272a`, `#f4f4f5`).
3. **Hero Component (21st.dev pattern):**
   - Centered giant typography (`text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter`).
   - Overlapping grayscale portrait (`src/assets/profile.webp`).
   - Monospace micro-copy with active radar dot.
4. **Tech Ticker Component (`LogoLoop.tsx` - React Bits):**
   - Use the pre-installed `LogoLoop.tsx` with grayscale logos that illuminate subtly on hover.
5. **Projects Component (21st.dev Minimal Browser Frame):**
   - Stacked cards with alternating 50/50 split (Screenshot on one side, architecture details on the other).
   - Minimal window header with 3 window action dots (`bg-zinc-700`).
   - Clean circular action buttons for GitHub/Live Demo.
6. **Closing CTA:**
   - Giant typography (`LET'S TALK.` or `LET'S BUILD SOMETHING.`) with high-contrast direct links.
