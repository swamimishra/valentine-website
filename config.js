// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Mona",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['\u{1F9F6}', '\u{1F496}', '\u{1F49D}', '\u{1F497}', '\u{1F493}', '\u{1F98B}', '\u{1F9E3}', '\u{1F48E}'],  // Heart Hands + Lover Butterflies + Red Scarf + Bejeweled
        bears: ['\u{1F431}', '\u{1F43B}']                       // Cats (Meredith/Olivia/Benji)
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "It's a love story, baby... just say yes?",           // Love Story lyrics
            yesBtn: "Yes!",                                            // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't wanna live forever without you! \u{1F494}" // I Don't Wanna Live Forever
        },
        second: {
            text: "Do you love me to the Moon and to Saturn?",         // Seven lyrics
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next \u{2764}\u{FE00}"                           // Text for the next button
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? \u{1F339}", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "I'm enchanted to meet you! \u{2728}\u{1F98B}",        // Enchanted
        high: "Wildest dreams! \u{1F9E3}\u{1F431}",                      // Wildest Dreams
        normal: "You're a mastermind! \u{1F48E}"                  // Mastermind
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "You belong with me! \u{1F496}\u{1F389}\u{1F98B}",
        message: "And I know I place it then you took it with you... (My Heart)!",
        emojis: "\u{1F98B}\u{1F9E3}\u{1F431}\u{1F9F6}\u{1F48E}\u{1F496}"  // Taylor Swift symbols
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffb6c1",      // Pastel Pink (Lover)
        backgroundEnd: "#87ceeb",        // Sky Blue (Lover)
        buttonBackground: "#ff69b4",     // Hot Pink
        buttonHover: "#ff1493",          // Deep Pink
        textColor: "#4b0082"             // Indigo/Deep Purple
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "./music/background_music.mp3", // Local music file
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 