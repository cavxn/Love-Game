// Cavin & Shivani: Our Love Chapter - Story Data

const storyData = {
    chapters: [
        {
            id: "chapter1",
            name: "Month 1 - The Beginning",
            subtitle: "When Everything Started",
            background: { type: "gradient", colors: ["#ffeef8", "#fff0f5"] },
            scenes: [
                {
                    speaker: "Narrator",
                    text: "It all started with a simple message... a hello that would change everything. 🌟",
                    emoji: "✨",
                    nextBtn: true,
                    nextScene: "scene1_2"
                },
                {
                    speaker: "Cavin",
                    text: "Hey! I saw your profile and thought you seemed really interesting. Would you like to chat?",
                    emoji: "😊",
                    character: "left",
                    nextBtn: true,
                    nextScene: "scene1_3"
                },
                {
                    speaker: "Shivani",
                    text: "Hi! I'd love to! You seem really sweet. Tell me about yourself 😊",
                    emoji: "🌺",
                    character: "right",
                    nextBtn: true,
                    nextScene: "scene1_4"
                },
                {
                    speaker: "Narrator",
                    text: "And just like that, hours of conversation flew by. They discovered shared interests, similar dreams, and a connection that felt... special.",
                    emoji: "💫",
                    nextBtn: true,
                    nextScene: "scene1_5"
                },
                {
                    speaker: "Cavin",
                    text: "I can't believe we've been talking for 4 hours! Time flies with you 😄",
                    emoji: "⏰",
                    character: "left",
                    choices: [
                        { text: "\"I feel the same way!\"", scene: "scene1_6a", hearts: 2 },
                        { text: "\"I know right? You're amazing!\"", scene: "scene1_6b", hearts: 3 }
                    ]
                },
                {
                    scene: "scene1_6a",
                    speaker: "Shivani",
                    text: "Aww, you're so sweet! I love our conversations 💕",
                    emoji: "💌",
                    character: "right",
                    memory: { icon: "💌", label: "First Conversation", desc: "4 hours that felt like minutes" },
                    hearts: 1,
                    nextBtn: true,
                    nextScene: "chapter2"
                },
                {
                    scene: "scene1_6b",
                    speaker: "Shivani",
                    text: "Aww, you're the amazing one! I'm so glad we met 🌟",
                    emoji: "💕",
                    character: "right",
                    memory: { icon: "💌", label: "First Conversation", desc: "4 hours that felt like minutes" },
                    hearts: 2,
                    nextBtn: true,
                    nextScene: "chapter2"
                }
            ]
        },
        {
            id: "chapter2",
            name: "Month 2 - Late Night Talks",
            subtitle: "Deep Conversations Under the Stars",
            background: { type: "gradient", colors: ["#e6f3ff", "#f0f8ff"] },
            scenes: [
                {
                    speaker: "Narrator",
                    text: "Late nights became their favorite time. Conversations that started casually turned into sharing dreams, fears, and secrets under the starlight. ✨",
                    emoji: "🌙",
                    nextBtn: true,
                    nextScene: "scene2_2"
                },
                {
                    speaker: "Shivani",
                    text: "Cavin, can I tell you something? You're the first person who actually listens to me... really listens.",
                    emoji: "💫",
                    character: "right",
                    nextBtn: true,
                    nextScene: "scene2_3"
                },
                {
                    speaker: "Cavin",
                    text: "Of course, Shivani. Your thoughts, your feelings... they all matter to me.",
                    emoji: "❤️",
                    character: "left",
                    choices: [
                        { text: "Tell her she's special", scene: "scene2_4a", hearts: 3 },
                        { text: "Listen and be supportive", scene: "scene2_4b", hearts: 2 }
                    ]
                },
                {
                    scene: "scene2_4a",
                    speaker: "Shivani",
                    text: "You make me feel so special, Cavin. Thank you for being you 💕",
                    emoji: "🌟",
                    character: "right",
                    memory: { icon: "🌙", label: "Late Night Talks", desc: "When stars witnessed our hearts connect" },
                    hearts: 3,
                    nextBtn: true,
                    nextScene: "chapter3"
                },
                {
                    scene: "scene2_4b",
                    speaker: "Shivani",
                    text: "Thank you for understanding me. It means everything 🌙",
                    emoji: "💕",
                    character: "right",
                    memory: { icon: "🌙", label: "Late Night Talks", desc: "When stars witnessed our hearts connect" },
                    hearts: 2,
                    nextBtn: true,
                    nextScene: "chapter3"
                }
            ]
        },
        {
            id: "chapter3",
            name: "Month 3 - Sunsets & Dreams",
            subtitle: "When Dreams Became Shared",
            background: { type: "gradient", colors: ["#fff8e1", "#fffacd"] },
            scenes: [
                {
                    speaker: "Narrator",
                    text: "Sunsets became their favorite part of the day. They'd send each other pictures, talking about the colors, the beauty, and making plans for the future. 🌅",
                    emoji: "🌅",
                    nextBtn: true,
                    nextScene: "scene3_2"
                },
                {
                    speaker: "Cavin",
                    text: "Look at this sunset, Shivani! It's so beautiful, just like you 😊",
                    emoji: "🌅",
                    character: "left",
                    nextBtn: true,
                    nextScene: "scene3_3"
                },
                {
                    speaker: "Shivani",
                    text: "Aww! You always know how to make me smile. One day, let's watch a sunset together 🌺",
                    emoji: "😊",
                    character: "right",
                    choices: [
                        { text: "\"I'd love that!\"", scene: "scene3_4a", hearts: 2 },
                        { text: "\"That's a promise! 💫\"", scene: "scene3_4b", hearts: 3 }
                    ]
                },
                {
                    scene: "scene3_4a",
                    speaker: "Cavin",
                    text: "I can already imagine it... us, watching the sunset together, talking about everything and nothing 💕",
                    emoji: "✨",
                    character: "left",
                    memory: { icon: "🌅", label: "Sunset Dreams", desc: "Planning beautiful futures together" },
                    hearts: 2,
                    nextBtn: true,
                    nextScene: "chapter4"
                },
                {
                    scene: "scene3_4b",
                    speaker: "Cavin",
                    text: "It's a promise! And I never break my promises to you, Shivani 💫",
                    emoji: "💖",
                    character: "left",
                    memory: { icon: "🌅", label: "Sunset Dreams", desc: "Planning beautiful futures together" },
                    hearts: 3,
                    nextBtn: true,
                    nextScene: "chapter4"
                }
            ]
        },
        {
            id: "chapter4",
            name: "Month 4 - The First Laugh",
            subtitle: "When Joy Became Our Language",
            background: { type: "gradient", colors: ["#f3e5f5", "#fce4ec"] },
            scenes: [
                {
                    speaker: "Narrator",
                    text: "Laughter filled their days. Jokes, silly moments, and the kind of laughter that comes from pure happiness. 😄",
                    emoji: "😄",
                    nextBtn: true,
                    nextScene: "scene4_2"
                },
                {
                    speaker: "Cavin",
                    text: "Shivani, you have the most beautiful laugh. It's music to my ears! 😊",
                    emoji: "🎵",
                    character: "left",
                    nextBtn: true,
                    nextScene: "scene4_3"
                },
                {
                    speaker: "Shivani",
                    text: "You make me laugh every day! Your jokes and your energy... you're the best part of my day 💕",
                    emoji: "😄",
                    character: "right",
                    choices: [
                        { text: "Tell a joke", scene: "scene4_4a", hearts: 2 },
                        { text: "Be playful and silly", scene: "scene4_4b", hearts: 3 }
                    ]
                },
                {
                    scene: "scene4_4a",
                    speaker: "Cavin",
                    text: "Why don't scientists trust atoms? Because they make up everything! 😄",
                    emoji: "😆",
                    character: "left",
                    nextBtn: true,
                    nextScene: "scene4_5"
                },
                {
                    scene: "scene4_4b",
                    speaker: "Cavin",
                    text: "I'll be silly with you forever if it means seeing that smile! 😂",
                    emoji: "🤪",
                    character: "left",
                    hearts: 1,
                    nextBtn: true,
                    nextScene: "scene4_5"
                },
                {
                    scene: "scene4_5",
                    speaker: "Shivani",
                    text: "HAHAHA! You're impossible! 😂 I love it!",
                    emoji: "😂",
                    character: "right",
                    memory: { icon: "😂", label: "Laughter Days", desc: "When joy became our language" },
                    hearts: 2,
                    nextBtn: true,
                    nextScene: "chapter5"
                }
            ]
        },
        {
            id: "chapter5",
            name: "Month 5 - Deep Connection",
            subtitle: "When Hearts Became One",
            background: { type: "gradient", colors: ["#e8f5e9", "#f1f8e9"] },
            scenes: [
                {
                    speaker: "Narrator",
                    text: "Their connection deepened. They knew each other's hearts, dreams, fears... and loved everything about each other. 💚",
                    emoji: "💚",
                    nextBtn: true,
                    nextScene: "scene5_2"
                },
                {
                    speaker: "Shivani",
                    text: "Cavin, there's something I need to tell you... I think I'm falling in love with you. 💕",
                    emoji: "💕",
                    character: "right",
                    nextBtn: true,
                    nextScene: "scene5_3"
                },
                {
                    speaker: "Cavin",
                    text: "Shivani... I've been wanting to say that for so long. I love you too, with all my heart.",
                    emoji: "💖",
                    character: "left",
                    choices: [
                        { text: "\"You mean everything to me\"", scene: "scene5_4a", hearts: 3 },
                        { text: "\"You're my whole world\"", scene: "scene5_4b", hearts: 3 }
                    ]
                },
                {
                    scene: "scene5_4a",
                    speaker: "Shivani",
                    text: "You mean everything to me too, Cavin. I love you so much 💖",
                    emoji: "💕",
                    character: "right",
                    memory: { icon: "💖", label: "First 'I Love You'", desc: "When hearts spoke the truth" },
                    hearts: 3,
                    nextBtn: true,
                    nextScene: "chapter6"
                },
                {
                    scene: "scene5_4b",
                    speaker: "Shivani",
                    text: "You're my whole world too, Cavin. I love you endlessly 💫",
                    emoji: "💖",
                    character: "right",
                    memory: { icon: "💖", label: "First 'I Love You'", desc: "When hearts spoke the truth" },
                    hearts: 3,
                    nextBtn: true,
                    nextScene: "chapter6"
                }
            ]
        },
        {
            id: "chapter6",
            name: "Month 6 - Dreams Together",
            subtitle: "Building Our Future",
            background: { type: "gradient", colors: ["#e0f2f1", "#b2ebf2"] },
            scenes: [
                {
                    speaker: "Narrator",
                    text: "They started dreaming together. Late nights talking about the future, the adventures they'd have, the life they'd build. 🌟",
                    emoji: "🌟",
                    nextBtn: true,
                    nextScene: "scene6_2"
                },
                {
                    speaker: "Cavin",
                    text: "Shivani, can you imagine us in 10 years? Traveling, laughing, growing old together...",
                    emoji: "✨",
                    character: "left",
                    nextBtn: true,
                    nextScene: "scene6_3"
                },
                {
                    speaker: "Shivani",
                    text: "I can see it so clearly... us, happy, surrounded by love and beautiful memories 💕",
                    emoji: "💫",
                    character: "right",
                    choices: [
                        { text: "Plan an adventure together", scene: "scene6_4a", hearts: 2 },
                        { text: "Promise to make it reality", scene: "scene6_4b", hearts: 3 }
                    ]
                },
                {
                    scene: "scene6_4a",
                    speaker: "Cavin",
                    text: "Let's travel the world together! Paris, Tokyo, everywhere... with you by my side 🌍",
                    emoji: "✈️",
                    character: "left",
                    memory: { icon: "✈️", label: "Dreams Together", desc: "Planning beautiful futures" },
                    hearts: 2,
                    nextBtn: true,
                    nextScene: "chapter7"
                },
                {
                    scene: "scene6_4b",
                    speaker: "Cavin",
                    text: "I promise you, Shivani... we'll make every dream come true, together 💫",
                    emoji: "💕",
                    character: "left",
                    memory: { icon: "✈️", label: "Dreams Together", desc: "Planning beautiful futures" },
                    hearts: 3,
                    nextBtn: true,
                    nextScene: "chapter7"
                }
            ]
        },
        {
            id: "chapter7",
            name: "Month 7 - Our Love Story",
            subtitle: "Where We Are Today",
            background: { type: "gradient", colors: ["#fff3e0", "#ffe0b2"] },
            scenes: [
                {
                    speaker: "Narrator",
                    text: "7 months of laughter, love, deep conversations, and building something beautiful together. Your story continues to unfold... ❤️",
                    emoji: "❤️",
                    nextBtn: true,
                    nextScene: "scene7_2"
                },
                {
                    speaker: "Cavin",
                    text: "Shivani, these 7 months with you have been the best of my life. You've changed everything for the better 💕",
                    emoji: "💖",
                    character: "left",
                    nextBtn: true,
                    nextScene: "scene7_3"
                },
                {
                    speaker: "Shivani",
                    text: "Cavin, you've shown me what love really is. Thank you for being my heart's home 🌟",
                    emoji: "✨",
                    character: "right",
                    nextBtn: true,
                    nextScene: "scene7_4"
                },
                {
                    speaker: "Both",
                    text: "Here's to countless more memories, more laughter, more love, and a future filled with YOU. Our love story is just beginning... 💫",
                    emoji: "💕",
                    character: "both",
                    memory: { icon: "💕", label: "7 Months Strong", desc: "Where love found its forever home" },
                    hearts: 5,
                    nextBtn: true,
                    nextScene: "finale"
                }
            ]
        }
    ]
};

// Final message variations based on heart points
const finalMessages = {
    "high": `Cavin & Shivani, you've collected the most beautiful memories together! Your love shines through every choice, every moment. Here's to forever and always... 💫💕`,
    "medium": `What a beautiful journey, Cavin & Shivani! Your love story is filled with sweet moments and genuine connection. Here's to many more chapters together... 💖✨`,
    "low": `Cavin & Shivani, your love story is just beginning! Every moment, every choice leads to something beautiful. Here's to growing together... 💕🌟`
};

// Export for use in story.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { storyData, finalMessages };
}
