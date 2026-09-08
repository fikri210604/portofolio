# PRD.md — Personal Portfolio Website

## 1. Product Overview

### Product name
Ahmad Fikri Hanif — Portfolio

### Product type
Personal developer portfolio / professional profile

### Primary objective
Create a premium, credible portfolio that communicates Ahmad Fikri Hanif's engineering capability through evidence: projects, technical stack, experience, and contact opportunities.

### Design reference
The primary visual reference is:
https://syedmoinuddin.vercel.app/

The reference emphasizes a large personal hero, concise positioning, categorized technical skills, project cards, social proof, and a strong contact CTA. citeturn0view0

## 2. Problem

A conventional student portfolio often becomes a list of:
- technologies
- certificates
- generic descriptions
- project screenshots

That does not adequately demonstrate engineering ability.

The portfolio should instead answer:

1. Who is Ahmad?
2. What does he build?
3. What technologies does he actually use?
4. Can he build real systems?
5. What evidence supports his claims?
6. How can a recruiter/client/collaborator contact him?

## 3. Target Users

### Primary
- recruiters
- software engineering hiring managers
- internship coordinators
- potential project collaborators
- lecturers/research collaborators

### Secondary
- other developers
- students
- potential freelance clients

## 4. User Goals

### Recruiter
"I want to understand his technical profile in under two minutes."

### Engineering reviewer
"I want to inspect projects and determine whether he understands engineering beyond UI."

### Client
"I want to know whether he can build a real web/API/data solution."

### Collaborator
"I want a clear way to contact him."

## 5. Success Metrics

### Qualitative
The visitor should be able to identify:
- role
- main technical strengths
- 3 strongest projects
- GitHub/LinkedIn
- contact method

within approximately 60–90 seconds.

### Technical
- Lighthouse Performance >= 90
- Accessibility >= 90
- SEO >= 90
- mobile responsive
- no critical console errors
- no broken links
- Core Web Vitals in a healthy range

## 6. Scope

### MVP

#### Header
- logo/name
- navigation
- contact CTA

#### Hero
- name
- role
- short positioning statement
- availability/status
- project CTA
- social links

#### About
- concise professional introduction

#### Tech Stack
- categorized technologies

#### Projects
- 4–6 featured projects
- project image
- description
- stack
- role
- links

#### Experience
- education
- selected roles/activities

#### Contact
- email
- LinkedIn
- GitHub

#### Footer
- basic metadata and links

### Phase 2
- project detail pages
- case studies
- MDX content
- GitHub activity
- blog/articles
- dark mode
- advanced scroll choreography

## 7. Content Model

### Person

```ts
type Person = {
  name: string
  role: string
  location?: string
  availability?: string
  bio: string
  email: string
  github: string
  linkedin: string
}
```

### Project

```ts
type Project = {
  slug: string
  title: string
  description: string
  role: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  year: number
}
```

### Experience

```ts
type Experience = {
  organization: string
  role: string
  period: string
  description: string[]
}
```

## 8. Initial Content

### Identity

Name:
Ahmad Fikri Hanif

Role:
Computer Science Student · Software Engineer

Primary positioning:
Building practical web systems, REST APIs, data-driven applications, and AI-powered solutions.

Academic:
S1 Ilmu Komputer — Universitas Lampung

### Core technical positioning

Frontend:
- Next.js
- React
- TypeScript
- Tailwind CSS

Backend:
- Laravel
- PHP
- REST API
- FastAPI
- MySQL
- PostgreSQL
- Redis

Data / ML:
- Python
- Pandas
- Scikit-learn
- XGBoost
- SBERT
- MLflow

Do not display every technology merely because it has been used once. Prioritize technologies supported by meaningful projects.

## 9. Featured Projects

### 1. Sistem Informasi Kuliah Kerja Nyata Universitas Lampung
Role:
Backend Developer

Stack:
Laravel, REST API, database technology actually used

Positioning:
Backend system for managing KKN-related information and workflows.

Important:
This project should communicate backend architecture, API design, data modeling, authentication/authorization where applicable, and real-world constraints.

### 2. SkillBridge AI
Positioning:
AI-powered job recommendation system.

Potential evidence:
- Next.js
- FastAPI
- Supabase
- NER
- SBERT
- NLP

### 3. IHSG Machine Learning
Positioning:
Data-driven stock/index analysis or prediction project.

Stack:
Python, Pandas, XGBoost, MLflow/DagsHub

### 4. Sentiment Analysis
Positioning:
Indonesian-language NLP/sentiment analysis project.

Use the exact model and evaluation metrics from the actual implementation.

### 5. TerraGuard AI
Positioning:
AI/data project with environmental or regional application.

Only include claims that can be supported by the project.

### 6. Strongest web application
Select the most technically substantial additional project.

## 10. Functional Requirements

### FR-01 Navigation
Users can navigate to major sections through anchor links.

### FR-02 Responsive navigation
On mobile, navigation transforms into an accessible menu.

### FR-03 Hero CTA
Users can jump directly to Projects and Contact.

### FR-04 Social links
GitHub and LinkedIn open in new tabs with secure link attributes.

### FR-05 Project browsing
Users can inspect project summaries without opening another page.

### FR-06 Project links
If available, users can open live deployment and source repository.

### FR-07 Contact
A visible email CTA opens the user's email client.

### FR-08 Motion
Sections animate into view without blocking content.

### FR-09 Reduced motion
Users with `prefers-reduced-motion` receive reduced/no nonessential animation.

### FR-10 SEO
Page has:
- title
- description
- Open Graph metadata
- Twitter/X metadata where appropriate
- canonical URL
- structured metadata if useful

## 11. Non-Functional Requirements

### Performance
- server components by default
- minimal JavaScript
- optimized images
- no unnecessary animation libraries/components
- no autoplay heavy video

### Accessibility
- WCAG-conscious contrast
- semantic landmarks
- keyboard navigation
- screen-reader labels
- reduced motion

### Security
- no secrets in client code
- external links use safe attributes
- contact forms, if added, require server-side validation and rate limiting

## 12. SEO

Suggested metadata:

Title:
`Ahmad Fikri Hanif — Computer Science Student & Software Engineer`

Description:
`Portfolio of Ahmad Fikri Hanif, a Computer Science student at Universitas Lampung focused on web engineering, backend development, data science, and AI-powered applications.`

Keywords should be natural and limited. Do not keyword-stuff.

## 13. UX Principles

1. Show evidence before claims.
2. Reduce cognitive load.
3. Make projects the center of the portfolio.
4. Use animation to establish hierarchy, not decoration.
5. Avoid generic template language.
6. Make every CTA obvious.
7. Preserve fast page load.
8. Mobile experience is first-class.

## 14. Out of Scope

- authentication
- admin dashboard
- CMS backend
- database
- complex contact management
- analytics requiring invasive tracking
- fake GitHub statistics
- fake testimonials
- fabricated project metrics

## 15. Acceptance Criteria

The MVP is complete when:

- [ ] page loads without critical errors
- [ ] responsive from 320px upward
- [ ] header works on desktop/mobile
- [ ] hero communicates identity and role immediately
- [ ] projects display real content
- [ ] every project has technologies
- [ ] external links work
- [ ] contact CTA works
- [ ] animations respect reduced-motion
- [ ] images have appropriate alt text
- [ ] no fake claims/testimonials
- [ ] Lighthouse targets are reasonably achieved
- [ ] metadata is configured
- [ ] code is componentized
- [ ] no unnecessary dependency bloat

# 25. Visual Experience Override & Anti-AI Slop Mandate

Based on the visual reference (https://syedmoinuddin.vercel.app/) and component patterns from **21st.dev** and **React Bits**, the MVP must strictly follow the editorial aesthetic and reject "AI slop":

### 1. Architecture & Engine
- **Framework:** Astro 5 with React 19 Islands (`client:visible`, `client:load`).
- **Styling:** Tailwind CSS v4 with clean monochrome CSS variables (neutral/zinc tones).
- **Component Sources:** Curated components from **21st.dev** and **React Bits** (e.g., `LogoLoop`, `BlurText`, `SpotlightCard`).

### 2. Anti-AI Slop Directives (Strictly Enforced)
- **NO Cosmic/Space Gimmicks:** Turn off `StarField` canvas, `SpaceParticles`, and `ScrollRocket`.
- **NO Multi-color Neon Gradients:** Do not use rainbow text gradients (`#5227FF`, `#FF9FFC`, `#00d4ff`) on headings. Use clean white-to-zinc gradients (`from-white to-zinc-400`).
- **NO Thick Glowing Glass Cards:** Do not use heavy colored box-shadows or purple-glow borders. Use 1px subtle borders (`border-zinc-800`).
- **NO Floating Emojis / Rockets:** Remove floating rockets, orbiting planets, and smoke emojis.
- **NO Skill Meters / Percentage Bars:** Avoid arbitrary progress bars (e.g., "Laravel 90%").

### 3. Core Visual Traits (Syed Moinuddin Inspiration)
1. Full-viewport dark editorial hero with oversized centered name typography.
2. Portrait/avatar overlapping the hero typography in clean grayscale.
3. Dark monochrome matte atmospheric background (no neon nebulae).
4. Tiny mono/uppercase supporting copy around the lower hero area.
5. Large whitespace and editorial intro layout.
6. Technology presented as a compact moving strip (`LogoLoop`), not a dashboard.
7. Large vertically stacked project cards with alternating composition.
8. Project screenshots presented as major visual assets inside minimal browser frames.
9. Small circular repository/live-action buttons.
10. Collaboration statement before social proof.
11. Sparse testimonials only when authentic.
12. Giant typographic closing CTA (`LET'S BUILD SOMETHING.` or `LET'S TALK.`).

The visual flow:
```text
ATMOSPHERIC HERO (OVERSIZED NAME + OVERLAPPING AVATAR)
        ↓
EDITORIAL INTRO & POSITIONING
        ↓
TECHNOLOGY STRIP (MARQUEE / LOGOLOOP)
        ↓
LARGE STACKED PROJECT CARDS (ALTERNATING MOCKUPS)
        ↓
EXPERIENCE TIMELINE (MINIMAL EDITORIAL)
        ↓
GIANT TYPOGRAPHIC CTA ("LET'S BUILD TOGETHER")
        ↓
QUIET FOOTER
```
