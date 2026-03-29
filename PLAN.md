# Portfolio Redesign: "Midnight Forge"

## Context

Your portfolio runs Vue 3 + Quasar v2 (webpack-based) and looks like a default Material Design dashboard — light blue backgrounds, Roboto font, generic Quasar components. The content (26 projects, CV, courses) is solid; it's the presentation that's dated. This redesign transforms it into a bold, dark-themed single-page showcase while keeping the Quasar build system (avoids a full migration) and all existing data.

---

## Aesthetic Direction

**Concept**: "Midnight Forge" — a craftsman's workshop at night. Precise, warm, quietly confident. Dark but not cold.

**Color Palette**:
- Background: `#0a0a0f` (deep navy-black, not pure black)
- Surface: `#12121a` (cards, sections)
- Elevated: `#1a1a2e` (hover states)
- Primary accent: `#f0b429` (golden amber — "forge glow")
- Secondary accent: `#6366f1` (indigo — links, secondary elements)
- Text: `#e4e4e7` (warm white), `#a1a1aa` (secondary), `#71717a` (muted)

**Typography** (all Google Fonts, no generic choices):
- **Display/Headings**: "Syne" — geometric, bold, very distinctive character shapes
- **Body**: "Manrope" — warm geometric sans with optical sizing, clean but characterful
- **Code/Badges**: "IBM Plex Mono" — signals developer identity without cliche

**Animation Philosophy**: Things are *revealed*, not performed. GSAP for the hero sequence only. CSS transitions + Intersection Observer for scroll-triggered reveals. No bouncing or elastic easing on content.

---

## Tech Stack Changes

**Keep**: Quasar CLI build system (`@quasar/app`), Vue Router, Vuex stores, GSAP, emailjs-com, markdown loader, Vercel deployment.

**Add**: Tailwind CSS v3 via PostCSS (Quasar's webpack supports this). Gives full design freedom beyond Material Design.

**Replace**: Quasar UI components (`q-card`, `q-toolbar`, `q-drawer`, etc.) with custom HTML + Tailwind. Keep Quasar `Notify` and `Meta` plugins (functional, not visual).

**Remove**: `roboto-font` from extras. Legacy deps (`vue-template-compiler`, `@vue/component-compiler-utils`).

---

## Page Structure: Single-Page Scroll

Replace the 4-page nav structure with a single scrolling page (5 sections). Modern dev portfolios tell a story — not a dashboard.

### Section 1: Hero (full viewport)
- Resurrect the orphaned Landing.vue GSAP animation (adapted)
- Animated name reveal: "Rogerio Romao" in Syne, large
- Role statement: "Senior Full-Stack Engineer" in IBM Plex Mono
- Subtle scroll-down indicator (no countdown, no auto-redirect)
- Source: adapt from `src/pages/Landing.vue`

### Section 2: Featured Work (6 projects)
- 3-column grid (desktop), stacked (mobile)
- Large project images with hover overlay (name + description + "View Details")
- No visible card borders at rest — just images. Amber glow on hover.
- Tech badges in IBM Plex Mono (monochrome, amber on hover)
- Click opens project detail overlay
- Data from: `src/store/featured/state.js`

### Section 3: All Projects (26 projects)
- Horizontal filter bar replacing the clunky sidebar drawer
- Filter chips: All | Front-End | Full-Stack | Back-End
- 4-column grid (desktop), showing image + name + type
- `<TransitionGroup>` for smooth filter animations
- Click opens same project detail overlay
- Data from: `src/store/projects/state.js`

### Section 4: About + CV (merged)
- Two-column layout: bio + photo (left), experience timeline (right)
- CV markdown rendered as styled timeline entries
- Testimonial from Vincenzo as a prominent quote block
- Courses in collapsible subsection
- Data from: `src/cv/cv.md`, `src/cv/vincenzo.md`, `src/store/courses/state.js`

### Section 5: Contact (doubles as footer)
- Different surface color (`#12121a`) to visually separate
- Contact form with Tailwind inputs (bottom-border style, amber on focus)
- Keep emailjs-com integration (reuse logic from `src/components/AboutForm.vue`)
- Social links: GitHub, CodePen, LinkedIn
- Copyright line

### Navigation
- Fixed top bar: name (left), section links (right)
- Scroll-spy highlights active section (Intersection Observer)
- `backdrop-blur` glass effect: `bg-[#0a0a0f]/80 backdrop-blur-md`
- Mobile: hamburger menu with slide-down overlay
- Old routes (`/portfolio`, `/about`, `/cv`) redirect to hash anchors

### Project Detail Overlay
- Full-screen overlay (Vue `<Teleport>`)
- Project name, tech badges, source/live links
- Image gallery, description sections
- Scale-up entrance animation (CSS)
- Replaces both Featured dialog and Portfolio inline details

---

## Implementation Phases

### Phase 0: Foundation
**Files**: `quasar.conf.js`, `.postcssrc.js`, `src/css/app.scss`, `src/css/quasar.variables.scss`, `tailwind.config.js` (new)

1. `yarn add -D tailwindcss postcss autoprefixer`
2. Create `tailwind.config.js` with custom colors, fonts, content paths
3. Update `.postcssrc.js` to include tailwindcss
4. Rewrite `src/css/app.scss`: Tailwind directives + Google Fonts imports + dark base styles
5. Remove `roboto-font` from `quasar.conf.js` extras

### Phase 1: Layout Shell + Navigation
**Files**: `src/layouts/MainLayout.vue`, `src/components/HeaderBar.vue`, `src/App.vue`, `src/router/routes.js`

1. Rewrite `MainLayout.vue`: drop `q-layout`/`q-page-container`, use simple div wrapper
2. Rebuild `HeaderBar.vue` as fixed nav with scroll-spy (all Tailwind, no Quasar components)
3. Create `src/pages/HomePage.vue` as single-page container
4. Update routes: `/` loads HomePage, old routes redirect to hash anchors

### Phase 2: Hero Section
**Files**: `src/sections/HeroSection.vue` (new)
**Reference**: `src/pages/Landing.vue` (GSAP timeline)

Adapt Landing.vue's GSAP animation with new fonts/colors. Remove countdown. Add scroll indicator.

### Phase 3: Featured Work Section
**Files**: `src/sections/FeaturedSection.vue` (new), `src/components/ProjectCard.vue` (new)

Build featured project grid with hover overlays and amber accent system.

### Phase 4: All Projects Section + Detail Overlay
**Files**: `src/sections/ProjectsSection.vue` (new), `src/components/ProjectFilter.vue` (new), `src/components/ProjectDetail.vue` (new)

Filterable grid + full-screen project detail overlay (used by both sections).

### Phase 5: About + CV Section
**Files**: `src/sections/AboutSection.vue` (new), `src/components/ExperienceTimeline.vue` (new), `src/components/Testimonial.vue` (new)

Two-column bio + timeline layout. Testimonial card. Collapsible courses.

### Phase 6: Contact Section
**Files**: `src/sections/ContactSection.vue` (new)
**Reference**: `src/components/AboutForm.vue` (emailjs logic)

Contact form + social links + footer. Reuse emailjs integration.

### Phase 7: Polish + Cleanup
- Add scroll-triggered reveal animations (Intersection Observer composable)
- Delete old page files (Featured.vue, Portfolio.vue, About.vue, CV.vue, Blog.vue, Landing.vue)
- Delete unused components (EssentialLink.vue)
- Update Error404.vue to match new design
- Update `useMeta` calls
- Test Vercel deployment

---

## Verification Plan

1. `yarn dev` — site loads with dark theme, navigation works
2. All 5 sections render and scroll correctly
3. Scroll-spy highlights correct nav item
4. Hero GSAP animation plays on load
5. Featured and Projects grids display all projects with images
6. Project filter works (All/Front-End/Full-Stack/Back-End)
7. Project detail overlay opens/closes correctly
8. Contact form sends email via emailjs (test with real submission)
9. Responsive: test at 375px, 768px, 1024px, 1440px widths
10. Old routes (`/portfolio`, `/about`, `/cv`) redirect correctly
11. `quasar build` succeeds, `public/` output works on Vercel
