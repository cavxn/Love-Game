// Character-Specific Story Engine for Cavin & Shivani

class CharacterStoryEngine {
    constructor() {
        this.currentChapter = null;
        this.currentScene = null;
        this.currentChapterIndex = 0;
        this.heartPoints = 0;
        this.memories = [];
        this.selectedCharacter = null;
        this.storyData = null;
        this.init();
    }

    init() {
        this.loadCharacterSelection();
        this.setupEventListeners();
        this.initStars();
    }

    loadCharacterSelection() {
        // Check if biodata parameter is in URL
        const urlParams = new URLSearchParams(window.location.search);
        const biodataParam = urlParams.get('biodata');
        const showBiodata = biodataParam === 'true' || biodataParam === 'cavin' || biodataParam === 'shivani';
        
        if (showBiodata) {
            console.log('Biodata parameter detected:', biodataParam, '- skipping character selection');
            return;
        }
        
        // Get selected character from localStorage
        this.selectedCharacter = localStorage.getItem('selectedCharacter');
        console.log('Selected character:', this.selectedCharacter);
        
        if (!this.selectedCharacter) {
            // Redirect to character selection if no character selected
            window.location.href = 'pages/character-selection.html';
            return;
        }

        // Load character-specific story data
        if (window.characterStoryData && window.characterStoryData[this.selectedCharacter]) {
            this.storyData = window.characterStoryData[this.selectedCharacter];
            console.log('Story data loaded for:', this.selectedCharacter);
            this.startStory();
        } else {
            console.error('Character story data not found for:', this.selectedCharacter);
            console.log('Available data:', window.characterStoryData);
        }
    }

    setupEventListeners() {
        // Next dialog button
        const nextBtn = document.getElementById('next-dialog-btn');
        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                this.nextScene();
            });
        }

        // Choice buttons (dynamically created)
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('choice-btn')) {
                const sceneId = e.target.getAttribute('data-scene');
                const hearts = parseInt(e.target.getAttribute('data-hearts'));
                this.makeChoice(sceneId, hearts);
            }
        });

        // Gallery button
        const galleryBtn = document.getElementById('gallery-btn');
        if (galleryBtn) {
            galleryBtn.addEventListener('click', () => {
                this.showGallery();
            });
        }

        // Back from gallery button
        const backFromGalleryBtn = document.getElementById('back-from-gallery-btn');
        if (backFromGalleryBtn) {
            backFromGalleryBtn.addEventListener('click', () => {
                this.hideGallery();
            });
        }

        // Play again button
        const playAgainBtn = document.getElementById('play-again-btn');
        if (playAgainBtn) {
            playAgainBtn.addEventListener('click', () => {
                this.playAgain();
            });
        }

        // Volume control
        const volumeBtn = document.getElementById('volume-btn');
        if (volumeBtn) {
            volumeBtn.addEventListener('click', () => {
                this.toggleVolume();
            });
        }
    }

    startStory() {
        console.log('Starting story for character:', this.selectedCharacter);
        this.showScreen('story-screen');
        this.currentChapterIndex = 0;
        console.log('Loading first chapter:', this.storyData.chapters[0]);
        this.loadChapter(this.storyData.chapters[0]);
        
        // Hide any other screens that might be showing
        document.querySelectorAll('.screen').forEach(screen => {
            if (screen.id !== 'story-screen') {
                screen.classList.remove('active');
            }
        });
    }

    loadChapter(chapter) {
        this.currentChapter = chapter;
        this.updateChapterTitle();
        this.loadScene(chapter.scenes[0]);
    }

    updateChapterTitle() {
        const chapterTitle = document.getElementById('chapter-title');
        const chapterName = document.getElementById('chapter-name');
        const chapterSubtitle = document.getElementById('chapter-subtitle');

        if (chapterTitle && chapterName && chapterSubtitle) {
            chapterName.textContent = this.currentChapter.name;
            chapterSubtitle.textContent = this.currentChapter.subtitle;
            chapterTitle.classList.remove('hidden');
        }
    }

    loadScene(scene) {
        console.log('Loading scene:', scene);
        this.currentScene = scene;
        this.updateDialog();
        this.updateBackground();
        this.updateCharacters();
    }

    updateDialog() {
        console.log('Updating dialog with scene:', this.currentScene);
        const speakerName = document.getElementById('speaker-name');
        const dialogText = document.getElementById('dialog-text');
        const dialogEmoji = document.getElementById('dialog-emoji');
        const nextBtn = document.getElementById('next-dialog-btn');

        console.log('Dialog elements found:', { speakerName, dialogText, dialogEmoji, nextBtn });

        if (speakerName) speakerName.textContent = this.currentScene.speaker;
        if (dialogText) dialogText.textContent = this.currentScene.text;
        if (dialogEmoji) dialogEmoji.textContent = this.currentScene.emoji;

        // Show/hide next button
        if (nextBtn) {
            if (this.currentScene.nextBtn) {
                nextBtn.classList.remove('hidden');
            } else {
                nextBtn.classList.add('hidden');
            }
        }

        // Handle choices
        this.updateChoices();
    }

    updateChoices() {
        const choicesContainer = document.getElementById('choices-container');
        if (!choicesContainer) return;

        choicesContainer.innerHTML = '';

        if (this.currentScene.choices) {
            this.currentScene.choices.forEach((choice, index) => {
                const choiceBtn = document.createElement('button');
                choiceBtn.className = 'choice-btn';
                choiceBtn.textContent = choice.text;
                choiceBtn.setAttribute('data-scene', choice.scene);
                choiceBtn.setAttribute('data-hearts', choice.hearts);
                choicesContainer.appendChild(choiceBtn);
            });
        }
    }

    nextScene() {
        if (this.currentScene.nextScene) {
            this.showSceneById(this.currentScene.nextScene);
        } else if (this.currentScene.nextChapter) {
            this.nextChapter();
        }
    }

    showSceneById(sceneId) {
        const scene = this.findSceneById(sceneId);
        if (scene) {
            this.loadScene(scene);
        }
    }

    findSceneById(sceneId) {
        for (const chapter of this.storyData.chapters) {
            for (const scene of chapter.scenes) {
                if (scene.id === sceneId || scene.scene === sceneId) {
                    return scene;
                }
            }
        }
        return null;
    }

    makeChoice(sceneId, hearts) {
        this.addHearts(hearts);
        this.showSceneById(sceneId);
    }

    addHearts(amount) {
        this.heartPoints += amount;
        this.updateHeartDisplay();
    }

    updateHeartDisplay() {
        const heartCount = document.getElementById('heart-count');
        if (heartCount) {
            heartCount.textContent = `💖 ${this.heartPoints}`;
        }
    }

    updateBackground() {
        if (this.currentChapter.background) {
            const body = document.body;
            if (this.currentChapter.background.type === 'gradient') {
                const colors = this.currentChapter.background.colors;
                body.style.background = `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`;
            }
        }
    }

    updateCharacters() {
        const cavinCharacter = document.getElementById('cavin-character');
        const shivaniCharacter = document.getElementById('shivani-character');

        if (cavinCharacter && shivaniCharacter) {
            // Show/hide characters based on current scene
            if (this.currentScene.character === 'left') {
                cavinCharacter.style.display = 'block';
                shivaniCharacter.style.display = 'none';
            } else if (this.currentScene.character === 'right') {
                cavinCharacter.style.display = 'none';
                shivaniCharacter.style.display = 'block';
            } else {
                cavinCharacter.style.display = 'block';
                shivaniCharacter.style.display = 'block';
            }
        }
    }

    showScreen(screenId) {
        console.log('Showing screen:', screenId);
        // Hide all screens
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Show target screen
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            console.log('Screen activated:', screenId);
        } else {
            console.error('Screen not found:', screenId);
        }
    }

    showGallery() {
        this.showScreen('gallery-screen');
        this.loadMemoryGallery();
    }

    hideGallery() {
        this.showScreen('story-screen');
    }

    loadMemoryGallery() {
        const galleryGrid = document.getElementById('memory-gallery-grid');
        if (!galleryGrid) return;

        galleryGrid.innerHTML = '';

        this.memories.forEach(memory => {
            const memoryCard = document.createElement('div');
            memoryCard.className = 'memory-card';
            memoryCard.innerHTML = `
                <div class="memory-icon">${memory.icon}</div>
                <div class="memory-label">${memory.label}</div>
                <div class="memory-desc">${memory.desc}</div>
            `;
            galleryGrid.appendChild(memoryCard);
        });
    }

    playAgain() {
        // Reset story
        this.currentChapterIndex = 0;
        this.heartPoints = 0;
        this.memories = [];
        this.startStory();
    }

    toggleVolume() {
        // Volume control logic
        const volumeBtn = document.getElementById('volume-btn');
        if (volumeBtn) {
            const isMuted = volumeBtn.textContent === '🔇';
            volumeBtn.textContent = isMuted ? '🔊' : '🔇';
        }
    }

    initStars() {
        // Initialize background stars animation
        const canvas = document.getElementById('backgroundCanvas');
        if (canvas) {
            this.createStarField(canvas);
        }
    }

    createStarField(canvas) {
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const stars = [];
        for (let i = 0; i < 100; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2,
                speed: Math.random() * 0.5
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            stars.forEach(star => {
                star.y += star.speed;
                if (star.y > canvas.height) {
                    star.y = 0;
                    star.x = Math.random() * canvas.width;
                }
                
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();
            });
            
            requestAnimationFrame(animate);
        };
        
        animate();
    }
}

// Initialize the story engine when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, initializing character story engine');
    console.log('Character story data available:', !!window.characterStoryData);
    new CharacterStoryEngine();
});
