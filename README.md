# Suryatantra Enterprises LLP

Static marketing site for the PCB tooling supplier in Dhayari, Pune. Public pages are `index.html`, `about.html`, `product.html`, `blog.html`, and `contact.html`. Shared layout styles live in `styles.css`. Shared spacing and colour utilities live in `assets/css/tailwind.css`.

## Uploading to Hostinger or GoDaddy

Upload the contents of this folder into `public_html`. `index.html` has to sit directly in `public_html`, not inside another `suryatantra-web-main` folder. Include `assets/css/tailwind.css`, `data/config.php`, `data/leads.json`, `data/stats.json`, and `data/.htaccess`.

`.htaccess` tells the host to open `index.html` first. Hostinger and GoDaddy otherwise keep showing their own default page.

The enquiry files stay in `data/`, which Apache blocks from the browser. On this computer they are also read from `suryatantra-private` when that folder is present. Do not rely on a folder above `public_html`; shared hosting often cannot create it.

Quote mail is still sent from suryatantraa@gmail.com. The enquiry is still saved if the email itself is refused.

## Publishing on GitHub

Uploading the files to GitHub does not change [suryatantra.in](https://suryatantra.in/). That address is still serving the older site.

The repository root has to be this folder, the one that contains `index.html`. If GitHub shows another `suryatantra-web-main` folder inside the repository, Pages will not find the homepage.

Turn on GitHub Pages from the repository settings, branch `main`, folder `/` (root). The site address is then `https://YOUR-USERNAME.github.io/YOUR-REPO/`. `.nojekyll` is included so Pages publishes the CSS, JavaScript, and images as they are.

`assets/css/tailwind.css` has to be in that upload. Without it, spacing and dialogs fall apart. If that file is missing, the page loads the Tailwind script from the internet as a backup.

GitHub Pages cannot run PHP. The quote form, question form, and saved enquiries work only on a host that runs PHP, with `suryatantra-private` kept outside the public folder. WhatsApp still opens on GitHub Pages.

## Changes

### Layout and colour

- Footer on a phone is a two-column grid. The brand and the enquire block span both columns. Company and Products sit side by side. Desktop stays four columns.
- Footer background is light (`#f8fafc`) with slate text. Orange is kept for icons, the kicker underline, and hovers.
- Product category tabs and View details use the same light orange and white treatment.
- Catalogue, blog, and footer rules are in one `styles.css`. The old `assets/css/blog.css` file is no longer used.
- The homepage hero image fills the headline column. The about photo matches the copy beside it on a wide screen and is taller when the page stacks. The contact map grows with the form. Product card height and the product scroller were left as they were.

### Tailwind

Pages no longer load `https://cdn.tailwindcss.com`. That script built the layout in the browser, so a blocked script removed grids, spacing, and the `hidden` class on dialogs.

Each public page now loads `styles.css`, then `assets/css/tailwind.css`. Custom rules stay first. Utilities stay second, so classes such as `flex`, `grid`, and `hidden` still win. Fonts and icons still come from their own addresses.

The theme source is `tailwind.config.js`. The compiler input is `assets/css/tailwind.src.css`. After adding a new utility class, rebuild `assets/css/tailwind.css` from the site folder:

```text
tailwindcss.exe -c tailwind.config.js -i assets/css/tailwind.src.css -o assets/css/tailwind.css --minify
```

The browser will not invent a class that is not in the compiled file.

### WhatsApp quote popup

WhatsApp links on the home, about, product, and blog pages open a requirement popup. It asks for name, phone, company, city, tool or part, and quantity. On a product card, the tool field is filled with that product’s name. Continue on WhatsApp saves the enquiry and opens a chat with those details.

The contact page is unchanged. Its quote button and question button still send what is already on that page and do not open this popup.

### Footer actions

The floating WhatsApp button is no longer a separate control under the page. It sits on the footer at its 56px size on a wide screen, without extra footer padding. On a narrower screen it matches the copyright line so the footer does not grow. A go-to-top button sits beside it and scrolls to the top of the page.

### Enquiry files

The enquiry password and saved enquiries are not in the public `data/` folder. They live in `suryatantra-private`, one folder above this site. `lead.php` and `sendmail.php` read that folder through `private.php`.

`data/.htaccess` still denies the folder on Apache. `data/web.config` hides it on IIS, so a copy dropped back into `data/` stays blocked on those servers. On the host, keep `suryatantra-private` outside the public directory.

### Other fixes

- An unknown product link shows the PCB drill catalogue instead of an empty page.
- The product dialog backdrop closes from one handler.
- Pincode is a text field, so the scroll wheel does not change it.
- A sent quote and a sent question both confirm in green. An error confirms in red.
