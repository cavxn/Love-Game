# Our Love Story - Cavin & Shivani 💕

A beautiful interactive love story experience with separate pages for better navigation.

## Page Structure

### 1. Landing Page (`landing.html`)
- Entry point to the experience
- Simple welcome screen
- Redirects to intro page

### 2. Intro Page (`pages/intro.html`)
- Beautiful hero section with "Our Love Story"
- Features the main couple photo
- "Begin Our Story" button leads to character selection

### 3. Character Selection (`pages/character-selection.html`)
- Choose between playing as Cavin or Shivani
- Character cards with photos and descriptions
- Stores selection in localStorage
- Redirects to main story

### 4. Main Story (`index.html`)
- The main interactive story experience
- Checks for character selection, redirects if none found
- Contains all the story content, mini-games, and gallery

## Navigation Flow

```
index.html (intro) → pages/character-selection.html → story.html
```

## Features

- **Separate Pages**: Each major section is now its own HTML page
- **Character-Specific Stories**: Two completely different story flows based on character selection
- **7 Chapters for 7 Months**: Each character has 7 unique chapters representing your 7 months together
- **Cavin's Perspective**: Experience the story from Cavin's point of view
- **Shivani's Perspective**: Experience the story from Shivani's point of view
- **Responsive Design**: Works on all devices
- **Beautiful Animations**: Smooth transitions and effects
- **Memory Gallery**: Unlock and view special memories
- **Interactive Story**: Make choices that affect the narrative

## Getting Started

1. Open `index.html` in your browser (beautiful intro page)
2. Click "Begin Our Story" to go to character selection
3. Choose between Cavin or Shivani for different story perspectives
4. Experience 7 unique chapters representing your 7 months together
5. Enjoy the love story experience!

## Files Structure

```
lovegame/
├── index.html                    # Intro page (entry point)
├── story.html                   # Main story page
├── pages/
│   ├── intro.html              # Hero/intro page (backup)
│   └── character-selection.html # Character selection
├── images/                      # All images
├── styles.css                   # Main stylesheet
├── character-story-data.js      # Character-specific story content
├── character-story.js           # Character-specific story logic
└── scroll-effect.js            # Scroll animations
```
