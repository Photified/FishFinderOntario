// This file is loaded by BOTH index.html and mytacklebox.html

/**
 * The "master" list of all colors and their reasons.
 * This remains unchanged.
 */
const colorMap = {
    'Green Pumpkin': { hex: '#4B5320', reason: 'The most versatile bass color. Perfectly mimics crawfish, gobies, and bluegill in most water clarities.' },
    'Watermelon': { hex: '#75A850', reason: 'A translucent, natural green that excels in clear water, mimicking small fish and other forage.' },
    'Bone White': { hex: '#F9F6EE', reason: 'A solid, highly visible color for topwater lures that provides a strong silhouette against the sky.' },
    'Crawfish': { hex: '#C84A33', reason: 'Directly imitates crawfish, a primary food source for bass in rocky environments, especially in spring.' },
    'Goby': { hex: '#967969', reason: 'Crucial in the Great Lakes region. It specifically imitates the round goby, a key forage species.' },
    'Sucker': { hex: '#BC8F8F', reason: 'Imitates suckers, a large, high-protein forage fish targeted by apex predators like pike and muskie.' },
    'Loon': { hex: '#333333', reason: 'A dark, solid color for large topwater lures that provides a strong silhouette against the sky, mimicking birds or small mammals.' },
    'Walleye': { hex: '#D4AF37', reason: 'In many northern lakes, walleye are a primary food source for giant muskie. This pattern imitates that forage.' },
    'Rainbow Trout': { hex: '#B5E6B5', reason: 'Mimics rainbow trout, a common food source for larger predators like lake trout and brown trout in stocked waters.' },
    'Smelt': { hex: '#A7B4B5', reason: 'A silvery, almost translucent pattern that imitates smelt, a key open-water baitfish for salmon and trout.' },
    'Hot Pink': { hex: '#FF69B4', reason: 'A bright, high-visibility color used in stained water for salmon and trout, thought to imitate the color of eggs or trigger an aggressive response.' },
    'Shock Pink': { hex: '#FC0FC0', reason: 'A bright, shocking color that stands out and is highly effective for crappie and other panfish, especially in stained water.' },
    'Carp Yellow': { hex: '#FFD700', reason: 'A classic carp color that perfectly mimics corn, one of their absolute favorite foods.' },
    'Hi-Vis Orange': { hex: '#FFA500', reason: 'A high-visibility color that stands out well against a variety of dark lake bottoms, making it easy for carp to find.' },
    'White': { hex: '#FFFFFF', reason: 'A highly visible color that effectively mimics the flash and profile of baitfish like shad, shiners, and ciscoes.' },
    'Chartreuse': { hex: '#DFFF00', reason: 'An extremely bright, high-visibility color that excels in stained, muddy, or deep water for nearly all species.' },
    'Black': { hex: '#000000', reason: 'Provides the strongest possible silhouette, making it effective in very muddy water and at night for all predators.' },
    'Blue': { hex: '#0000FF', reason: 'Often combined with black for jigs and spinnerbaits, it provides a subtle contrast that is highly effective in both clear and stained water.' },
    'Silver': { hex: '#C0C0C0', reason: 'Provides a realistic flash that mimics the scales of many common baitfish species like shiners and alewife.' },
    'Gold': { hex: '#FFD700', reason: 'Effective in stained or tannic water, imitating the flash of species like perch or golden shiners.' },
    'Perch': { hex: '#E8A317', reason: 'Directly imitates yellow perch, one of the most common and important forage fish in all of Ontario.' },
    'Firetiger': { hex: '#F3B700', reason: 'A classic, aggressive pattern with bright green, chartreuse, and orange that is highly effective in stained water for all predator species.' },
    'Natural Shad': { hex: '#B6C0C3', reason: 'A realistic color pattern that imitates common open-water baitfish like shad and shiners.' },
    'Chrome': { hex: '#E8E8E8', reason: 'Provides the maximum possible flash, making it excellent on sunny days for triggering reaction strikes from aggressive predators.' },
    'Red': { hex: '#FF0000', reason: 'Can trigger reaction strikes, imitate the color of gills on injured baitfish, or mimic the color of crawfish.' },
    'Orange': { hex: '#FFA500', reason: 'A high-visibility color that works well in stained water, particularly effective for salmon, trout, and walleye.' },
    'Yellow': { hex: '#FFFF00', reason: 'A bright, simple color that can be effective for panfish, walleye, and pike in stained water conditions.' },
    'Purple': { hex: '#800080', reason: 'A dark, subtle color that works well in low light and clear water as an alternative to black, especially for walleye and smallmouth.' },
    'Smoke': { hex: '#848884', reason: 'A subtle, translucent color that is very effective in ultra-clear water for wary smallmouth and lake trout.' },
    'Glow': { hex: '#E0FFD6', reason: 'Essential for deep water species like lake trout and salmon, as it remains visible where other colors fade to gray.' }
};


/**
 * Your 12 Base Categories to be shown in the mytacklebox.html modal.
 * This remains unchanged.
 */
const baseColorCategories = {
    'Black': { description: 'For max contrast, night fishing, or muddy water. (e.g., Black, Black/Blue, Loon)' },
    'White': { description: 'Mimics baitfish bellies. High visibility. (e.g., White, Bone White, Glow)' },
    'Green': { description: 'Mimics vegetation, bluegill, or perch. (e.g., Green Pumpkin, Watermelon)' },
    'Brown': { description: 'The most natural color, mimics crawfish, gobies, or the bottom. (e.g., Sucker, Goby)' },
    'Blue': { description: 'Often part of a dark pattern (like Black/Blue) or an open-water baitfish flash.' },
    'Red': { description: 'Imitates crawfish, injured bait (gills), or a hot trigger color. (e.g., Crawfish)' },
    'Yellow': { description: 'Hi-vis trigger or perch pattern. (e.g., Yellow, Chartreuse, Firetiger, Carp Yellow)' },
    'Orange': { description: 'A bright trigger color for stained water, salmon, or craw patterns. (e.g., Orange)' },
    'Pink': { description: 'A key trigger color for trout, salmon, and panfish. (e.g., Hot Pink, Shock Pink)' },
    'Purple': { description: 'A subtle dark color for clear or dark water, often used as an alternative to black.' },
    'Silver': { description: 'Provides bright flash, mimicking scales of most baitfish. (e.g., Silver, Chrome, Smelt, Shad, Smoke)' },
    'Gold': { description: 'Provides a warmer flash, great for stained water or imitating perch/shiners. (e.g., Gold, Perch pattern)' }
};

/**
 * NEW: Representative HEX codes for your 12 Base Categories.
 * This map provides ONE color to display for each category swatch.
 */
const baseColorHexMap = {
    'Black': '#000000',
    'White': '#FFFFFF',
    'Green': '#4B5320',       // Using Green Pumpkin hex
    'Brown': '#967969',       // Using Goby hex
    'Blue': '#0000FF',
    'Red': '#FF0000',
    'Yellow': '#DFFF00',      // Using Chartreuse hex
    'Orange': '#FFA500',
    'Pink': '#FF69B4',        // Using Hot Pink hex
    'Purple': '#800080',
    'Silver': '#C0C0C0',
    'Gold': '#FFD700'
};


/**
 * The Color Translation "Brain".
 * This maps specific colors to your 12 base categories. Unchanged.
 */
const colorBaseMap = {
    // Green Bucket
    'Green Pumpkin': 'Green',
    'Watermelon': 'Green',

    // Brown Bucket
    'Goby': 'Brown',
    'Sucker': 'Brown',
    
    // White Bucket
    'Bone White': 'White',
    'White': 'White',
    'Glow': 'White',

    // Black Bucket
    'Black': 'Black',
    'Loon': 'Black',

    // Blue Bucket
    'Blue': 'Blue',

    // Red Bucket
    'Crawfish': 'Red',
    'Red': 'Red',

    // Yellow Bucket
    'Chartreuse': 'Yellow', 
    'Firetiger': 'Yellow', 
    'Yellow': 'Yellow',
    'Carp Yellow': 'Yellow',

    // Orange Bucket
    'Orange': 'Orange',
    'Hi-Vis Orange': 'Orange',

    // Pink Bucket
    'Hot Pink': 'Pink',
    'Shock Pink': 'Pink',

    // Purple Bucket
    'Purple': 'Purple',

    // Silver Bucket
    'Silver': 'Silver',
    'Chrome': 'Silver',
    'Natural Shad': 'Silver',
    'Smelt': 'Silver',
    'Rainbow Trout': 'Silver', 
    'Smoke': 'Silver', 

    // Gold Bucket
    'Gold': 'Gold',
    'Perch': 'Gold', 
    'Walleye': 'Gold' 
};


/**
 * The CANONICAL "master" list of all lures.
 * This remains unchanged.
 */
const canonicalLureMap = {
    'Drop Shot': { image: 'images/lures/dropshot.png' },
    'Topwater Popper': { image: 'images/lures/popper.png' },
    'Jerkbait': { image: 'images/lures/jerkbait.png' },
    'Ned Rig': { image: 'images/lures/nedrig.png' },
    'Jig': { image: 'images/lures/jig.png' },
    'Spinnerbait': { image: 'images/lures/spinnerbait.png' },
    'Inline Spinner': { image: 'images/lures/inlinespinner.png' },
    'Chatterbait': { image: 'images/lures/chatterbait.png' },
    'Lipless Crankbait': { image: 'images/lures/liplesscrank.png' },
    'Swimbait': { image: 'images/lures/swimbait.png' },
    'Senko Worm': { image: 'images/lures/senko.png' },
    'Spoon': { image: 'images/lures/spoon.png' },
    'Flutter Spoon': { image: 'images/lures/flutterspoon.png' },
    'Tube Jig': { image: 'images/lures/tube.png' },
    'Crankbait': { image: 'images/lures/crankbait.png' },
    'Blade Bait': { image: 'images/lures/bladebait.png' },
    'A-Rig': { image: 'images/lures/arig.png' },
    'Topwater Spook': { image: 'images/lures/spook.png' },
    'Fluke': { image: 'images/lures/fluke.png' },
    'Creature Bait': { image: 'images/lures/creaturebait.png' },
    'Topwater Plopper': { image: 'images/lures/plopper.png' },
    'Bucktail': { image: 'images/lures/bucktail.png' },
    'Glide Bait': { image: 'images/lures/glidebait.png' },
    'Bulldawg': { image: 'images/lures/bulldawg.png' },
    'Live Worm': { image: 'images/lures/worm.png' },
    'Scented Dough Bait': { image: 'images/lures/powerbait.png' },
    'Live Minnow': { image: 'images/lures/minnow.png' },
    'Slip Bobber Rig': { image: 'images/lures/slipbobber.png' },
    'Dodger/Flasher Rig': { image: 'images/lures/dodgerfly.png' },
    'Bondy Bait': { image: 'images/lures/bondybait.png' },
    'Jigging Rap': { image: 'images/lures/jiggingrap.png' },
    'Bottom Bouncer': { image: 'images/lures/bottombouncer.png' },
    'Lindy Rig': { image: 'images/lures/lindyrig.png' },
    'Topwater Creeper': { image: 'images/lures/creeper.png' },
    'Beetle Spin': { image: 'images/lures/beetlespin.png' },
    'Cut Bait': { image: 'images/lures/cutbait.png' },
    'Chicken Livers': { image: 'images/lures/chickenliver.png' },
    'Stink Bait': { image: 'images/lures/stinkbait.png' },
    'Boilies': { image: 'images/lures/boilies.png' },
    'Pack Bait': { image: 'images/lures/packbait.png' },
    'Method Feeder': { image: 'images/lures/methodfeeder.png' },
    'Dough Ball': { image: 'images/lures/doughball.png' },
    'Zig Rig': { image: 'images/lures/zigrig.png' },
    'Bread': { image: 'images/lures/bread.png' },
    'Pop-up Corn': { image: 'images/lures/popupcorn.png' },
    'Frog': { image: 'images/lures/frog.png' },
    'Jigging Spoon': { image: 'images/lures/jiggingspoon.png' },
    'Squarebill Crankbait': { image: 'images/lures/squarebillcrankbait.png' }
};

/**
 * The category list for the tacklebox modal.
 * This remains unchanged.
 */
const displayLures = {
    "Hard Baits": ["Jerkbait", "Crankbait", "Squarebill Crankbait", "Lipless Crankbait", "Glide Bait"],
    "Topwater": ["Topwater Popper", "Topwater Spook", "Topwater Plopper", "Topwater Creeper", "Frog"],
    "Soft Baits": ["Swimbait", "Senko Worm", "Fluke", "Creature Bait", "Bulldawg"],
    "Jigs & Rigs": ["Jig", "Drop Shot", "Ned Rig", "Tube Jig", "A-Rig", "Jigging Rap", "Bondy Bait"],
    "Spoons & Spinners": ["Spoon", "Flutter Spoon", "Jigging Spoon", "Inline Spinner", "Spinnerbait", "Bucktail", "Beetle Spin"],
    "Bladed & Vibrating": ["Chatterbait", "Blade Bait"],
    "Terminal Rigs": ["Slip Bobber Rig", "Bottom Bouncer", "Lindy Rig", "Dodger/Flasher Rig"],
    "Live & Scented Bait": ["Live Minnow", "Live Worm", "Cut Bait", "Chicken Livers", "Stink Bait", "Scented Dough Bait"],
    "Carp Baits": ["Boilies", "Pack Bait", "Method Feeder", "Dough Ball", "Zig Rig", "Bread", "Pop-up Corn"]
};