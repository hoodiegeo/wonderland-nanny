# The Wonderland Nanny — Website

A simple 5-page static website for a nanny service, styled to match the logo
(hot pink + lavender). Modeled on the structure of the napabach.com reference.

## Pages
| File | Purpose |
|------|---------|
| `index.html` | Home + About |
| `services.html` | Services offered |
| `pricing.html` | Pricing tiers |
| `reviews.html` | Client reviews / testimonials |
| `contact.html` | Contact info + inquiry form |

## How to view
It's plain HTML/CSS/JS — just open `index.html` in a browser. No build step.

## Placeholders to replace with real info
Search the project for these and swap in the client's real details:

- **Email:** `hello@thewonderlandnanny.com`
- **Phone:** `(000) 000-0000` / `tel:+10000000000`
- **Social links:** the `href="#"` links in every footer (Instagram, Facebook, Email)
- **Service area:** "Serving your local area"
- **Stats** on the home/reviews pages (years, families, ratings) — currently sample numbers
- **Reviews** on `reviews.html` — currently sample testimonials
- **Pricing** on `pricing.html` — currently sample rates
- **About text** on `index.html` — written generically; personalize as desired

## Structure
```
/assets   logo.png
/css      styles.css   (all styling + color variables at the top)
/js       main.js      (mobile menu + demo contact form)
```

## Notes
- The contact form currently shows a thank-you message but does **not** send
  anywhere. To make it functional, connect it to a form service (Formspree,
  Netlify Forms, etc.) or a backend.
- Colors live as CSS variables at the top of `css/styles.css` (`--pink`,
  `--purple`, etc.) — change them in one place to retune the whole site.
