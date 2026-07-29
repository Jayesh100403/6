# Jayesh Jadhav – Multipage Research Portfolio

This GitHub Pages package contains four pages:

- `index.html` — Home, about, education, awards and current transition
- `research.html` — Thesis, experimental exposure, professional development, projects and technical skills
- `hobbies.html` — Photography gallery, sketching, trekking and swimming
- `contact.html` — Contact information and research interests

## Included downloads

- `downloads/Jayesh_Jadhav_CV.pdf`
- `downloads/Jayesh_Jadhav_MSc_Thesis.pdf`

Both are available through the navigation and the download buttons at the top of the Research page.

## Replace the portrait

1. Add your image to `assets/`, for example `profile.jpg`.
2. In `index.html`, find:

```html
<img src="assets/profile-placeholder.svg" alt="Portrait placeholder for Jayesh Jadhav">
```

3. Replace it with:

```html
<img src="assets/profile.jpg" alt="Jayesh Janardan Jadhav">
```

A vertical or square photograph works best.

## Add photography images

The six placeholders are in `assets/gallery/`:

- `photo-1.svg`
- `photo-2.svg`
- `photo-3.svg`
- `photo-4.svg`
- `photo-5.svg`
- `photo-6.svg`

The easiest method is to replace them with your own images and update the paths in `hobbies.html`. Example:

```html
<img src="assets/gallery/my-photo-1.jpg" alt="Monsoon clouds over IIT Bombay">
```

Also edit the title inside `.gallery-caption` and the `data-caption` text on the same gallery card.

## About the new role title

The website uses **Incoming Quantum Nanofabrication Researcher** as a descriptive portfolio title. It communicates the area of work more clearly than “Research Assistant” while staying honest because the detailed project scope is still being finalised. Use the formal appointment title in official documents if the appointment letter specifies a different designation.

## Publish on GitHub Pages

1. Extract the ZIP.
2. Upload the extracted files and folders directly to the root of a public GitHub repository.
3. Go to **Settings → Pages**.
4. Select **Deploy from a branch**.
5. Select `main` and `/ (root)`.
6. Save and wait for the deployment URL.

Do not upload only the ZIP file. GitHub Pages needs the extracted `index.html` at the repository root.


## Research page structure

The Research page is intentionally limited to three numbered sections:

1. Experimental exposure — including an expandable M.Sc. thesis feature
2. Technical toolkit
3. Selected projects — with compact workshop and leadership dropdowns

Coursework remains on the Home page. CV and thesis downloads are available in the header and Research hero, so no separate documents section is used.
