# PROMPT.md — AI Agent Implementation Prompt

You are an expert frontend engineer and product designer.

Your task is to build a production-quality personal portfolio website for **Ahmad Fikri Hanif**, using the attached `PRD.md` and `DESIGN.md` as the source of truth.

The visual reference is:
https://syedmoinuddin.vercel.app/

Use the reference for:
- information hierarchy
- editorial typography
- spacing
- project-first storytelling
- restrained visual language
- motion philosophy
- section composition

Do NOT clone:
- wording
- personal information
- images
- testimonials
- branding
- proprietary assets
- source code

## 1. Tech Stack

Use:

- **Astro 5** with Islands Architecture (`src/pages/index.astro`, `src/layouts/Layout.astro`)
- **React 19** for interactive islands (`client:visible`, `client:load`, `client:idle`)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for subtle editorial entrances & transforms
- **React Bits & 21st.dev** component primitives (`LogoLoop`, `BlurText`, `SpotlightCard`)
- **react-icons** for lightweight icon rendering
- **astro:assets** for local image optimization

Do not add a dependency unless there is a clear implementation reason.
Zero tolerance for "AI slop" (no neon rainbow gradients, no cosmic particle loops, no floating rocket emojis).

## 2. Engineering Rules

### Architecture
Current project structure:

```text
src/
├── assets/          # Project images & profile (astro:assets)
├── components/
│   ├── elements/    # Reusable 21st.dev / React Bits primitives (LogoLoop, BlurText, SpotlightCard)
│   ├── projects/    # Project detail components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx   # Moving strip via LogoLoop
│   ├── Projects.tsx # Alternating large stacked cards
│   ├── Experience.tsx
│   └── Contact.tsx  # Giant typographic CTA
├── layouts/
│   └── Layout.astro # Base HTML & SEO metadata
├── pages/
│   └── index.astro  # Main single-page portfolio
└── styles/
    └── global.css   # Clean monochrome design tokens
```

Keep content separate from presentation.

### Island Hydration Boundary
- Keep static content in Astro components where possible.
- Use `client:visible` for below-the-fold interactive components.
- Use `client:load` strictly for primary viewport (Navbar, Hero).
- Avoid `client:only` unless browser API access is mandatory during initial render.

## 3. Build Order

Implement in this order:

### Step 1 — Foundation
- initialize project
- configure Tailwind
- configure fonts
- configure metadata
- create global tokens
- create container/layout primitives

### Step 2 — Header
Build responsive navigation.

### Step 3 — Hero
Create the strongest visual section first.

Requirements:
- oversized name
- concise role
- availability/status
- clear CTA
- social links
- elegant entrance animation

### Step 4 — About
Use editorial text layout.

Do not create a generic "About Me" card.

### Step 5 — Tech Stack
Create categorized skill groups.

Avoid progress bars.

### Step 6 — Projects
Build reusable `ProjectCard`.

Each card must support:
- image
- title
- description
- role
- technologies
- live link
- GitHub link

### Step 7 — Experience
Create a concise timeline/list.

### Step 8 — Contact
Create a visually dominant closing CTA.

### Step 9 — Footer
Keep it minimal.

### Step 10 — Polish
- responsive behavior
- motion
- accessibility
- performance
- SEO
- keyboard navigation
- reduced motion
- image optimization

## 4. Visual Implementation

### Overall
Aim for:
- premium
- minimal
- editorial
- high contrast
- spacious
- typography-led

Do not produce a generic "developer portfolio template."

### Containers
Use a large desktop container around 1280–1440px.

### Typography
Use a modern sans-serif such as Geist.

Use:
- huge display typography for name and major section headings
- normal readable body text
- mono/uppercase micro-labels

### Borders
Use borders sparingly.

### Cards
Avoid making every section a rounded card.

Projects may use large editorial compositions instead of standard 3-column SaaS cards.

## 5. Motion

Use Framer Motion for:
- reveal animations
- staggered content
- hover states
- layout transitions

Use GSAP only for:
- advanced scroll sequences
- complex timeline animations
- sophisticated project image movement

Never animate everything.

Implement:

```ts
const prefersReducedMotion = ...
```

or an equivalent accessible strategy so nonessential animation is disabled/reduced for users who request reduced motion.

## 6. Content Rules

Use the information in `PRD.md`.

Never invent:
- employers
- awards
- clients
- testimonials
- metrics
- project results
- GitHub stars
- users
- revenue
- performance percentages

If a field is unknown, use a placeholder such as:

`[ADD LIVE URL]`

rather than inventing a value.

## 7. Project Content Strategy

Projects should communicate engineering evidence.

For each project, prioritize:
1. problem
2. solution
3. role
4. technical implementation
5. technologies
6. result, if verified

Do not write descriptions like:
"An innovative project built with cutting-edge technology."

Prefer concrete descriptions.

## 8. Component Requirements

Create reusable components:

```text
Header
Container
SectionHeading
Button
SocialLinks
Hero
About
TechStack
TechCategory
ProjectCard
ProjectGrid
Experience
ContactCTA
Footer
```

Motion primitives:

```text
FadeIn
StaggerContainer
TextReveal
```

Do not over-abstract tiny one-use components.

## 9. Accessibility Requirements

Every interactive component must be keyboard accessible.

Required:
- semantic HTML
- `aria-label` where needed
- visible focus state
- proper heading hierarchy
- meaningful alt text
- mobile menu keyboard behavior
- reduced motion support
- sufficient contrast

Do not use clickable `<div>` elements when a button/link is appropriate.

## 10. Performance Requirements

- use `astro:assets` (Image component from Astro, not `next/image`)
- use optimized dimensions
- lazy load below-fold media
- avoid layout shift
- avoid giant image files
- keep client-side JavaScript minimal
- avoid unnecessary hydration
- avoid autoplay video
- do not import both Framer Motion and GSAP for trivial animations

## 11. SEO Requirements

Add:

- title
- description
- canonical URL
- Open Graph metadata
- favicon
- appropriate heading structure

Use JSON-LD for `Person` only if the information is accurate.

## 12. Responsive Requirements

Test at:

- 320px
- 375px
- 390px
- 768px
- 1024px
- 1280px
- 1440px
- 1920px

The mobile version must remain visually intentional.

Do not simply reduce desktop sizes.

## 13. Quality Gate

Before declaring the implementation complete, inspect:

### Content
- [ ] no placeholder text remains unintentionally
- [ ] no fabricated claims
- [ ] no copied reference-site content

### UI
- [ ] visual hierarchy is strong
- [ ] typography is consistent
- [ ] spacing is consistent
- [ ] project cards are readable
- [ ] CTA is obvious

### Motion
- [ ] animations are subtle
- [ ] no animation blocks content
- [ ] reduced motion works

### Accessibility
- [ ] keyboard navigation works
- [ ] focus states visible
- [ ] alt text exists
- [ ] semantic headings are correct

### Performance
- [ ] images optimized
- [ ] no unnecessary client components
- [ ] no obvious hydration issues
- [ ] no unnecessary dependencies

### SEO
- [ ] metadata configured
- [ ] title is correct
- [ ] description is correct
- [ ] canonical URL configured

## 14. Agent Behavior

Do not ask for confirmation for every implementation decision.

Make reasonable decisions based on `PRD.md` and `DESIGN.md`.

However, when required content is genuinely unknown, do not fabricate it. Create a clearly marked data placeholder.

When a requirement conflicts with the reference, prioritize:
1. PRD
2. DESIGN
3. accessibility/performance
4. reference website

The reference is inspiration, not the specification.

## 15. Final Deliverable

The final result should be:

- production-ready
- responsive
- accessible
- fast
- visually distinctive
- easy to maintain
- content-driven
- deployable to Vercel

The portfolio should make the visitor think:

**"This person can actually build software."**

not merely:

**"This person knows many technologies."**

# 29. Screenshot-Specific Correction

The supplied screenshot is a critical visual constraint. Before implementing, understand that the reference is **not** a conventional portfolio template.

## Mandatory visual traits

- near-black background
- blurred grayscale atmospheric shapes
- oversized condensed/heavy hero typography
- centered name
- overlapping grayscale portrait
- extremely compact header
- tiny editorial supporting text
- generous whitespace
- small mono/uppercase metadata
- horizontal technology/micro-label strip
- large dark-slate project cards
- alternating project text/image layout
- realistic project/browser mockups
- circular GitHub/external-link controls
- collaboration section
- sparse testimonial cards
- giant final `LET'S` / `LET'S BUILD TOGETHER` typography

## Do not do this

```text
[large navbar]
[gradient hero]
[rounded profile card]
[3-column skill cards]
[3-column project grid]
[generic timeline]
[small contact card]
```

That structure would miss the reference's visual language.

## Mental implementation model

Think of the page as an editorial poster that happens to be interactive:

```text
TYPOGRAPHY = primary visual system
IMAGE      = secondary visual system
CARDS      = project containers only
MOTION     = transitions between visual states
COLOR      = restrained monochrome
```

The agent should repeatedly compare the implementation against the screenshot's **composition and visual weight**, not merely whether the same sections exist.

## Priority adjustment

If there is a conflict between adding another feature and preserving the visual composition, preserve the visual composition.

Do not add:
- unnecessary dashboards
- excessive filters
- skill percentages
- colorful gradients
- excessive badges
- large forms
- fake statistics
- decorative 3D elements
