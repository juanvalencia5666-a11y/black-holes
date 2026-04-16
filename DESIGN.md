# Design Brief — Agujeros Negros (Black Holes Showcase)

## Tone & Aesthetic
Professional scientific authority paired with futuristic cosmic wonder. Minimalist geometric precision meets immersive space imagery. Premium tech aesthetic inspired by NASA documentation and scientific discovery.

## Color Palette

| Token | OKLCH | Purpose |
|-------|-------|---------|
| background | 0.06 0 0 | Deep space black foundation |
| foreground | 0.95 0 0 | High-contrast white text |
| primary | 0.62 0.22 280 | Electric purple—science, energy |
| accent | 0.72 0.26 43 | Cosmic gold—highlights, data points |
| secondary | 0.58 0.25 250 | Deep purple—layered emphasis |
| muted | 0.22 0 0 | Subtle backgrounds, dividers |
| border | 0.16 0 0 | Glowing edge definition |

## Typography

| Category | Font | Usage |
|----------|------|-------|
| Display | Space Grotesk | Headlines, hero callouts (bold, futuristic) |
| Body | Inter | Body text, descriptions, interface labels |
| Mono | JetBrains Mono | Data blocks, numerical facts, code |

**Scale**: 12–14 (body), 16–18 (lead), 24–32 (section headers), 48–64 (hero title).

## Structural Zones

| Zone | Background | Border | Purpose |
|------|------------|--------|---------|
| Header | cosmicbackdrop | glow-border | Navigation, sticky top |
| Hero | gradient-cosmic | none | Full-width cinematic impact |
| Sections | card | glow-border | Content cards with purple glow |
| Data Grid | muted/20 | glow-accent | Facts, timelines, metrics |
| Footer | muted/30 | border-top | Credits, copyright, minimal |

## Elevation & Depth
- **Card elevation**: `glow-border` + `cosmic-backdrop` blur
- **Accent elements**: `glow-accent` gold highlight + text shadow
- **Layers**: Stacked depth via semi-transparent overlays and border glows, not box-shadow stacking

## Component Patterns
- Buttons: gradient-accent, no shadow, 4px radius
- Cards: glow-border, cosmic-backdrop, minimal padding
- Text emphasis: text-glow-primary for headings, text-glow-accent for metrics
- Links: accent color with underline on hover
- Images: slight border glow, rounded corners 0–2px

## Motion & Animation
- **Entrance**: `animate-slide-up` on sections (0.5s)
- **Continuous**: `floating` animation on hero imagery (3s loop)
- **Interaction**: `transition-smooth` (0.3s cubic-bezier) on all interactive elements
- **Parallax**: Hero background moves at 0.5x scroll speed

## Signature Details
- Glowing borders using `oklch(0.62 0.22 280 / 0.4)` with inner shadow depth
- Purple-to-dark gradient overlays on images for text readability
- Minimal use of gold accents—reserved for key data, discovery moments
- Cosmic backdrop blur effect creates depth without visual clutter
- Geometric precision in card alignment—no organic shapes

## Spacing & Rhythm
- **Vertical rhythm**: 16px base unit. Section gaps: 48–64px. Card padding: 24–32px.
- **Horizontal density**: 2rem container padding, max-width 1200px for readability
- **Grid**: Alternating card layouts (left/right) create visual rhythm on desktop

## Constraints & Antipatterns
- No warm colors except cosmic gold (reserved use)
- No rounded corners beyond 4px (preserve geometric sharpness)
- No full-page gradients (use subtle layering instead)
- No animations faster than 0.3s on interactions (preserve elegance)
- No neon/bright colors—all colors tuned for sustained viewing
