// Cavin & Shivani: Story Engine

class StoryEngine {
    constructor() {
        this.currentChapter = null;
        this.currentScene = null;
        this.currentChapterIndex = 0;
        this.heartPoints = 0;
        this.memories = [];
        this.selectedCharacter = 'cavin'; // Track selected character
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initStars();
    }

    setupEventListeners() {
        // Intro button - go to character selection
        const startBtn = document.getElementById('start-intro-btn');
        if (startBtn) {
            startBtn.addEventListener('click', () => {
                this.showScreen('character-selection-screen');
            });
        }
        
        // Character selection cards
        document.querySelectorAll('.character-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const character = card.getAttribute('data-character');
                this.selectCharacter(character);
            });
        });
        
        // Continue button after character selection
        const characterContinueBtn = document.getElementById('character-continue-btn');
        if (characterContinueBtn) {
            characterContinueBtn.addEventListener('click', () => {
                this.animateBookOpening();
            });
        }

        // Next dialog button
        document.getElementById('next-dialog-btn').addEventListener('click', () => {
            if (this.currentScene && this.currentScene.nextScene) {
                this.showSceneById(this.currentScene.nextScene);
            }
        });

        // Gallery
        document.getElementById('back-from-gallery-btn').addEventListener('click', () => {
            this.showScreen('story-screen');
        });

        // Play again
        document.getElementById('play-again-btn').addEventListener('click', () => {
            this.restart();
        });

        // Volume toggle
        document.getElementById('volume-btn').addEventListener('click', () => {
            const btn = document.getElementById('volume-btn');
            btn.textContent = btn.textContent === '🔊' ? '🔇' : '🔊';
        });
    }

    initStars() {
        // Create magical particles in background
        this.createMagicalParticles();
    }
    
    createMagicalParticles() {
        const particlesContainer = document.querySelector('.page-turn-particles');
        
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.textContent = ['✨', '💫', '⭐', '❦'][Math.floor(Math.random() * 4)];
            particle.style.cssText = `
                position: absolute;
                font-size: ${20 + Math.random() * 20}px;
                left: ${Math.random() * 100}%;
                animation: floatParticle ${3 + Math.random() * 3}s ease-in-out infinite;
                animation-delay: ${Math.random() * 3}s;
                pointer-events: none;
            `;
            particlesContainer.appendChild(particle);
        }
    }

    selectCharacter(character) {
        // Store selected character
        this.selectedCharacter = character;
        
        // Update UI
        document.querySelectorAll('.character-card').forEach(card => {
            card.classList.remove('selected');
        });
        document.querySelector(`[data-character="${character}"]`).classList.add('selected');
        
        // Update continue button
        const continueBtn = document.getElementById('character-continue-btn');
        const selectedCharSpan = document.getElementById('selected-character');
        if (continueBtn && selectedCharSpan) {
            selectedCharSpan.textContent = character.charAt(0).toUpperCase() + character.slice(1);
            continueBtn.classList.remove('hidden');
        }
    }
    
    animateBookOpening() {
        // Go directly to story screen
        this.showScreen('story-screen');
        this.startStory();
    }
    
    startStory() {
        this.showScreen('story-screen');
        this.loadChapter(0);
        this.showChapterIntro(0);
        setTimeout(() => this.startChapter(), 2500);
    }

    showChapterIntro(chapterIndex) {
        this.currentChapterIndex = chapterIndex;
        this.currentChapter = storyData.chapters[chapterIndex];
        
        document.getElementById('chapter-name').textContent = this.currentChapter.name;
        document.getElementById('chapter-subtitle').textContent = this.currentChapter.subtitle;
        document.getElementById('chapter-title').classList.remove('hidden');
        
        setTimeout(() => {
            document.getElementById('chapter-title').classList.add('hidden');
        }, 2500);
    }

    startChapter() {
        // Set background
        const bg = this.currentChapter.background;
        if (bg.type === 'gradient') {
            document.getElementById('story-screen').style.background = 
                `linear-gradient(135deg, ${bg.colors[0]} 0%, ${bg.colors[1]} 100%)`;
        }
        
        // Show first scene
        this.showScene(this.currentChapter.scenes[0]);
    }

    showScene(scene) {
        this.currentScene = scene;
        
        // Update dialog
        document.getElementById('speaker-name').textContent = scene.speaker || '';
        document.getElementById('dialog-text').textContent = scene.text || '';
        document.getElementById('dialog-emoji').textContent = scene.emoji || '';
        
        // Show/hide next button
        if (scene.nextBtn) {
            document.getElementById('next-dialog-btn').classList.remove('hidden');
        } else {
            document.getElementById('next-dialog-btn').classList.add('hidden');
        }
        
        // Update characters
        this.updateCharacters(scene.character);
        
        // Clear and show choices
        document.getElementById('choices-container').innerHTML = '';
        
        if (scene.choices && scene.choices.length > 0) {
            this.showChoices(scene.choices);
        }
        
        // Handle heart points
        if (scene.hearts) {
            this.addHeartPoints(scene.hearts);
        }
        
        // Handle memory
        if (scene.memory) {
            this.unlockMemory(scene.memory);
        }
    }

    updateCharacters(character) {
        const cavinChar = document.getElementById('cavin-character');
        const shivaniChar = document.getElementById('shivani-character');
        
        // Reset both
        cavinChar.classList.remove('active');
        shivaniChar.classList.remove('active');
        
        // Activate based on character
        if (character === 'left' || this.currentScene.speaker === 'Cavin') {
            cavinChar.classList.add('active');
        } else if (character === 'right' || this.currentScene.speaker === 'Shivani') {
            shivaniChar.classList.add('active');
        } else if (character === 'both') {
            cavinChar.classList.add('active');
            shivaniChar.classList.add('active');
        }
    }

    showChoices(choices) {
        const container = document.getElementById('choices-container');
        
        choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.addEventListener('click', () => this.makeChoice(choice));
            
            setTimeout(() => {
                btn.style.animationDelay = `${index * 0.1}s`;
            }, 10);
            
            container.appendChild(btn);
        });
    }

    makeChoice(choice) {
        // Add heart points
        if (choice.hearts) {
            this.addHeartPoints(choice.hearts);
        }
        
        // Find and show next scene
        const nextScene = this.findScene(this.currentChapter, choice.scene);
        
        if (nextScene) {
            this.showScene(nextScene);
        } else if (choice.scene && choice.scene.startsWith('chapter')) {
            // Move to next chapter
            const nextChapterIndex = parseInt(choice.scene.replace('chapter', '')) - 1;
            this.loadNextChapter(nextChapterIndex);
        }
    }

    findScene(chapter, sceneId) {
        return chapter.scenes.find(s => s.scene === sceneId);
    }

    loadNextChapter(chapterIndex) {
        if (chapterIndex >= storyData.chapters.length) {
            this.showFinalScene();
            return;
        }
        
        this.showChapterIntro(chapterIndex);
        setTimeout(() => this.startChapter(), 2500);
    }

    showSceneById(sceneId) {
        if (sceneId === 'chapter2' || sceneId === 'chapter3' || sceneId === 'chapter4' || 
            sceneId === 'chapter5' || sceneId === 'chapter6' || sceneId === 'chapter7' || sceneId === 'finale') {
            
            const chapterNum = parseInt(sceneId.replace('chapter', '')) || 7;
            
            if (sceneId === 'finale') {
                this.showFinalScene();
            } else {
                this.loadNextChapter(chapterNum);
            }
            return;
        }
        
        const scene = this.findScene(this.currentChapter, sceneId);
        if (scene) {
            this.showScene(scene);
        }
    }

    addHeartPoints(points) {
        this.heartPoints += points;
        document.getElementById('heart-count').textContent = `💖 ${this.heartPoints}`;
    }

    unlockMemory(memory) {
        if (!this.memories.find(m => m.label === memory.label)) {
            this.memories.push(memory);
            
            // Show notification
            const notification = document.getElementById('memory-notification');
            document.getElementById('memory-icon').textContent = memory.icon;
            document.getElementById('memory-text').textContent = `${memory.label} Unlocked!`;
            notification.classList.remove('hidden');
            
            setTimeout(() => {
                notification.classList.add('hidden');
            }, 2000);
        }
    }

    showFinalScene() {
        this.showScreen('final-screen');
        
        // Determine message based on heart points
        let message = finalMessages.low;
        if (this.heartPoints >= 30) {
            message = finalMessages.high;
        } else if (this.heartPoints >= 20) {
            message = finalMessages.medium;
        }
        
        document.getElementById('final-message').innerHTML = `
            <div style="font-size: 56px; margin-bottom: 30px;">💕</div>
            <div>${message}</div>
            <div style="font-size: 36px; margin-top: 30px;">💖 Forever Yours 💖</div>
        `;
        
        // Animate stars
        this.animateFinalStars();
    }

    animateFinalStars() {
        const canvas = document.getElementById('final-canvas');
        const ctx = canvas.getContext('2d');
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const hearts = [];
        for (let i = 0; i < 50; i++) {
            hearts.push({
                x: Math.random() * canvas.width,
                y: canvas.height + 50,
                size: 10 + Math.random() * 20,
                speed: 0.5 + Math.random() * 2,
                emoji: ['💕', '💖', '💗', '💓', '💝', '💘'][Math.floor(Math.random() * 6)]
            });
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            hearts.forEach(heart => {
                heart.y -= heart.speed;
                if (heart.y < -50) {
                    heart.y = canvas.height + 50;
                    heart.x = Math.random() * canvas.width;
                }
                
                ctx.save();
                ctx.font = `${heart.size}px Arial`;
                ctx.fillText(heart.emoji, heart.x, heart.y);
                ctx.restore();
            });
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }

    restart() {
        this.heartPoints = 0;
        this.memories = [];
        this.currentChapterIndex = 0;
        this.showScreen('intro-screen');
    }

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.remove('active');
        });
        document.getElementById(screenId).classList.add('active');
    }

    updateGallery() {
        const grid = document.getElementById('memory-gallery-grid');
        grid.innerHTML = '';
        
        const allMemories = [
            { icon: '💌', label: 'First Conversation', locked: this.memories.length < 1 },
            { icon: '🌙', label: 'Late Night Talks', locked: this.memories.length < 2 },
            { icon: '🌅', label: 'Sunset Dreams', locked: this.memories.length < 3 },
            { icon: '😂', label: 'Laughter Days', locked: this.memories.length < 4 },
            { icon: '💖', label: "First 'I Love You'", locked: this.memories.length < 5 },
            { icon: '✈️', label: 'Dreams Together', locked: this.memories.length < 6 },
            { icon: '💕', label: '7 Months Strong', locked: this.memories.length < 7 }
        ];
        
        allMemories.forEach(mem => {
            const card = document.createElement('div');
            card.className = `memory-card ${mem.locked ? 'locked' : ''}`;
            
            if (mem.locked) {
                card.innerHTML = `
                    <div class="memory-icon">🔒</div>
                    <div class="memory-label">Locked</div>
                `;
            } else {
                card.innerHTML = `
                    <div class="memory-icon">${mem.icon}</div>
                    <div class="memory-label">${mem.label}</div>
                `;
            }
            
            grid.appendChild(card);
        });
    }
}

// Initialize when DOM is loaded
let storyEngine;
document.addEventListener('DOMContentLoaded', () => {
    storyEngine = new StoryEngine();
    
    // Add gallery button listener
    document.getElementById('gallery-btn')?.addEventListener('click', () => {
        storyEngine.updateGallery();
        storyEngine.showScreen('gallery-screen');
    });
});

