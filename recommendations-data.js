 const gearMap = { largemouth: { rod: 'Medium to Medium-Heavy Power, Fast Action', line: '10-17lb Fluorocarbon or 30-50lb Braid' }, smallmouth: { rod: 'Medium-Light to Medium Power, Fast Action', line: '6-10lb Fluorocarbon or 10-20lb Braid with leader' }, rainbowtrout: { rod: 'Ultra-Light to Light Power, Moderate Action', line: '2-6lb Monofilament or Fluorocarbon' }, laketrout: { rod: 'Medium-Heavy Power, Moderate-Fast Action', line: '20-40lb Braid with Fluorocarbon Leader' }, walleye: { rod: 'Medium-Light to Medium Power, Fast Action', line: '6-10lb Fluorocarbon or 10-20lb Braid' }, pike: { rod: 'Medium-Heavy to Heavy Power, Fast Action', line: '40-65lb Braid with a steel leader' }, muskie: { rod: 'Heavy to Extra-Heavy Power, Fast Action', line: '80-100lb Braid with a 100-150lb Fluorocarbon or Wire Leader' }, perch: { rod: 'Light to Ultra-Light Power, Fast Action', line: '4-6lb Monofilament or Fluorocarbon' }, freshwaterdrum: { rod: 'Medium-Light to Medium Power, Fast Action', line: '8-12lb Monofilament or Fluorocarbon' }, crappie: { rod: 'Ultra-Light Power, Fast Action', line: '2-4lb Monofilament' }, catfish: { rod: 'Medium-Heavy to Heavy Power, Moderate-Fast Action', line: '20-50lb Monofilament or Braid' }, brooktrout: { rod: 'Ultra-Light to Light Power, Moderate Action', line: '2-6lb Monofilament or Fluorocarbon' }, splake: { rod: 'Medium-Light to Medium Power, Fast Action', line: '6-10lb Fluorocarbon or Braid' }, browntrout: { rod: 'Light to Medium-Light Power, Fast Action', line: '4-8lb Fluorocarbon' }, chinooksalmon: { rod: 'Medium-Heavy to Heavy Power, Moderate Action', line: '20-30lb Monofilament or 30-50lb Braid' }, cohosalmon: { rod: 'Medium Power, Moderate-Fast Action', line: '10-15lb Monofilament or 20-30lb Braid' }, atlanticsalmon: { rod: 'Medium Power, Fast Action', line: '8-12lb Monofilament or 15-30lb Braid' }, bluegill: { rod: 'Ultra-Light Power, Moderate Action', line: '2-4lb Monofilament' }, lakewhitefish: { rod: 'Medium-Light Power, Fast Action', line: '4-8lb Fluorocarbon or Braid with Leader' }, carp: { rod: '10-12ft Rod with a large capacity reel (Baitrunner style recommended)', line: '15-20lb Monofilament or 30-50lb Braid' } };
           

            const recommendations = {
          largemouth: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Drop Shot',
                    technique: 'Fish vertically with subtle shakes.',
                    reason: 'Ideal for targeting deep, lethargic bass.',
                    isPrimary: true
                }, {
                    name: 'Topwater Popper',
                    technique: 'Short pops with pauses.',
                    reason: 'Best in early morning or late evening.'
                }, {
                    name: 'Frog',
                    technique: 'Work over matted grass or lily pads.',
                    reason: 'A weedless option for targeting bass in heavy cover during low-light periods.'
                }, {
                    name: 'Swimbait',
                    technique: 'Slow, steady retrieve through the middle of the water column.',
                    reason: 'A natural baitfish imitation for targeting bass suspended or cruising in clear water.'
                }],
                colors: ['Watermelon', 'Bone White'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Deep Structure & Low-Light Shallows',
                    description: 'Focus on deep points and ledges during midday. Target shallows near cover in the morning and evening.'
                },
                tips: [{
                    title: 'Fish Deep Structure',
                    description: 'In the heat of the day, bass will move to deep structure like points and ledges.'
                }, {
                    title: 'Early/Late Topwater',
                    description: 'The topwater bite will be best in the low-light hours of morning and evening.'
                }, {
                    title: 'Go Natural',
                    description: 'In clear, sunny conditions, stick to natural colors that mimic local forage.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Sharp twitches with long pauses.',
                    reason: 'Mimics a dying baitfish for sluggish bass.',
                    isPrimary: true
                }, {
                    name: 'Ned Rig',
                    technique: 'Slowly drag or hop on the bottom.',
                    reason: 'A finesse presentation for tough bites.'
                }, {
                    name: 'Tube Jig',
                    technique: 'Slowly drag or hop along rocky bottoms.',
                    reason: 'A classic cool water bait that perfectly imitates a crawfish or goby.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Use short, vertical hops off deep structure.',
                    reason: 'The tight vibration triggers reaction strikes from lethargic bass in cold, clear water.'
                }],
                colors: ['Natural Shad', 'Green Pumpkin'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Sunny Banks & Transitions',
                    description: 'Find bass warming themselves on sunny rock or wood banks. Also check transitions from deep to shallow water.'
                },
                tips: [{
                    title: 'Long Pauses',
                    description: 'Use long pauses with a jerkbait as cooler water makes bass less willing to chase.'
                }, {
                    title: 'Fish Sunny Banks',
                    description: 'Bass will seek out sunny rock or wood to warm up.'
                }, {
                    title: 'Finesse is Key',
                    description: 'Cooler, clear water demands a subtle presentation. Light line is crucial.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Flipping Jig',
                    technique: 'Pitch into the heaviest cover.',
                    reason: 'A bulky profile is easy to find.',
                    isPrimary: true
                }, {
                    name: 'Big Spinnerbait',
                    technique: 'Use large Colorado blades for vibration.',
                    reason: 'Maximum thump to call fish in.'
                }, {
                    name: 'Creature Bait',
                    technique: 'Texas-rigged and pitched into the same cover as a jig.',
                    reason: 'Provides a different profile and action for fish that have seen too many jigs.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Steady retrieve around sparse cover.',
                    reason: 'The hard, tight vibration is easy for bass to locate in muddy water.'
                }],
                colors: ['Black', 'Blue', 'Chartreuse'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Tight to Hard Cover',
                    description: 'Bass will be extremely close to any available cover like stumps, laydowns or dock pilings. Pitch your lure right into it.'
                },
                tips: [{
                    title: 'Bulky and Loud',
                    description: 'Use large, dark jigs with bulky trailers and spinnerbaits with large Colorado blades for maximum vibration.'
                }, {
                    title: 'Fish Tight to Cover',
                    description: 'In muddy water, bass will be extremely tight to any available cover.'
                }, {
                    title: 'Use Scent',
                    description: 'Add a strong scent attractant to your baits to help fish find them.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Chatterbait',
                    technique: 'Slow retrieve along the bottom.',
                    reason: 'Vibration is key in low visibility.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Yo-yo retrieve off the bottom.',
                    reason: 'Loud rattles attract attention.'
                }, {
                    name: 'Big Jig',
                    technique: 'Slowly drag or hop along hard bottom areas.',
                    reason: 'A bulky, slow-moving presentation that fish can easily find by feel.'
                }, {
                    name: 'Crawfish Crankbait',
                    technique: 'Grind and bounce off any available rock or hard bottom.',
                    reason: 'The deflection and sound mimics a fleeing crawfish, a key cool-water forage.'
                }],
                colors: ['Crawfish', 'Red', 'Black'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Hard Bottom Areas',
                    description: 'Find any areas with a harder bottom composition (rock, gravel) as they will hold slightly more heat.'
                },
                tips: [{
                    title: 'Slow Roll',
                    description: 'Retrieve your Chatterbait or lipless crankbait slowly along the bottom.'
                }, {
                    title: 'Find Hard Bottom',
                    description: 'Even in muddy water, bass will relate to harder bottom areas that hold heat.'
                }, {
                    title: 'Rattles are Essential',
                    description: 'Use the loudest rattling lures in your tackle box to call fish in.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Swimbait',
                    technique: 'Slow, steady retrieve.',
                    reason: 'Mimics cruising baitfish.',
                    isPrimary: true
                }, {
                    name: 'Senko Worm',
                    technique: 'Weightless, let it flutter down.',
                    reason: 'Subtle action for pressured fish.'
                }, {
                    name: 'Frog',
                    technique: 'Use a steady walking retrieve across weedy flats.',
                    reason: 'Covers water effectively and calls up aggressive bass under cloud cover.',
                    isPrimary: true
                }, {
                    name: 'Jerkbait',
                    technique: 'Use an erratic twitch-and-pause retrieve.',
                    reason: 'Highly effective for triggering strikes from suspended, roaming bass under cloudy skies.'
                }],
                colors: ['Natural Shad', 'Watermelon'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Roaming Large Flats',
                    description: 'Cloud cover makes bass feel secure and roam large flats and points looking for food.'
                },
                tips: [{
                    title: 'Fish are Roaming',
                    description: 'Cloud cover makes bass roam. Target large flats and points.'
                }, {
                    title: 'Weightless Presentation',
                    description: 'A weightless Senko has a subtle fall that spooky fish can\'t resist.'
                }, {
                    title: 'Match the Hatch',
                    description: 'Use realistic baitfish patterns. Hold your lure in the water to see how it looks.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            },
            cool: {
                lures: [{
                    name: 'A-Rig',
                    technique: 'Slow, steady retrieve.',
                    reason: 'Simulates a school of baitfish.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Erratic retrieve with pauses.',
                    reason: 'Triggers bites from suspended fish.'
                }, {
                    name: 'Swimbait',
                    technique: 'Use a medium-speed retrieve over deep points.',
                    reason: 'A larger profile bait to attract the biggest fish in the school.'
                }, {
                    name: 'Football Jig',
                    technique: 'Slowly drag on deep points and rock.',
                    reason: 'A bottom-contact presentation for less active, deep-holding fish.'
                }],
                colors: ['Silver', 'Perch'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Suspended Over Deep Water',
                    description: 'Bass will suspend off of points and bluffs to intercept schools of baitfish. Use your electronics to find them.'
                },
                tips: [{
                    title: 'Mimic Bait Balls',
                    description: 'An Alabama Rig excels in cool water when bass are keyed in on schools of baitfish.'
                }, {
                    title: 'Erratic Retrieve',
                    description: 'An erratic jerk-jerk-pause retrieve is key to triggering bites.'
                }, {
                    title: 'Watch for Followers',
                    description: 'Fish will often follow these baits to the boat. A figure-eight can trigger a strike.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Flipping Jig',
                    technique: 'Pitch into heavy cover.',
                    reason: 'Bulky profile for low visibility.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Slow roll with big blades.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Frog',
                    technique: 'Pop and pause over matted vegetation and slop.',
                    reason: 'The ultimate lure for pulling bass from the thickest surface cover in warm, muddy water.',
                    isPrimary: true
                }, {
                    name: 'Chatterbait',
                    technique: 'Retrieve steadily, bumping into cover.',
                    reason: 'A different vibration that can trigger bites when a spinnerbait won\'t.'
                }],
                colors: ['Black', 'Blue', 'Chartreuse'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Hard Cover',
                    description: 'Bass will hold tight to laydowns, stumps, and dock pilings. The thicker, the better.'
                },
                tips: [{
                    title: 'Big Vibration',
                    description: 'Use baits with rattles and big thumping blades to help fish find them.'
                }, {
                    title: 'Slow Down',
                    description: 'Even though it\'s warm, muddy water requires a slower retrieve so fish can track your lure.'
                }, {
                    title: 'Target Hard Cover',
                    description: 'Bass will hold tight to laydowns, stumps, and dock pilings.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Lipless Crankbait',
                    technique: 'Fast, steady retrieve to cover water.',
                    reason: 'Loud rattles are essential for calling in scattered, lethargic fish in off-color water.',
                    isPrimary: true
                }, {
                    name: 'Chatterbait',
                    technique: 'Steady retrieve, bumping off any cover.',
                    reason: 'Strong vibration helps bass locate the bait when visibility is low.'
                }, {
                    name: 'Squarebill Crankbait',
                    technique: 'Deflect off of any wood or rock cover.',
                    reason: 'The erratic action after hitting cover triggers reaction strikes.'
                }, {
                    name: 'Big Jig',
                    technique: 'Pitch to isolated cover and fish slowly.',
                    reason: 'A slow, big-profile option for less active bass.'
                }],
                colors: ['Chartreuse', 'Firetiger', 'Red'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Inflowing Creeks & Shallow Flats',
                    description: 'The lake is unstable and fish are scattered. Your best bet is to find the clearest water possible near creek mouths, or rapidly cover shallow flats to find active fish.'
                },
                tips: [{
                    title: 'Turnover is Tough',
                    description: 'Fishing is difficult during the turnover. Covering water to find the few active fish is the best strategy.'
                }, {
                    title: 'Find the Cleanest Water',
                    description: 'Any source of clearer, more stable water, like an incoming river or creek, will concentrate fish.'
                }, {
                    title: 'Don\'t Get Discouraged',
                    description: 'The bite can be slow. Stay persistent and focus on high-probability areas.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Topwater Spook',
                    technique: '"Walk the dog" action.',
                    reason: 'Rain breaks up the surface, making topwater effective.',
                    isPrimary: true
                }, {
                    name: 'Frog',
                    technique: 'Walk over lily pads and weed mats.',
                    reason: 'Weedless design is perfect for pulling bass out of thick cover.',
                    isPrimary: true
                }, {
                    name: 'Fluke',
                    technique: 'Weightless, erratic twitches.',
                    reason: 'Mimics a wounded baitfish.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Retrieve quickly just below the surface.',
                    reason: 'The flash and vibration excel when rain makes bass more aggressive.'
                }],
                colors: ['Bone White', 'White'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Run-ins and Surface Areas',
                    description: 'Find where water is running into the lake; it carries food and attracts bass. The rain breaks up the surface, making bass look up.'
                },
                tips: [{
                    title: 'Surface Disturbance',
                    description: 'The rain breaks up the surface, making topwater lures incredibly effective.'
                }, {
                    title: 'Target Run-ins',
                    description: 'Find where water is running into the lake; it carries food and attracts bass.'
                }, {
                    title: 'Wait for the Weight',
                    description: 'Don\'t set the hook on the splash of a topwater bite; wait until you feel the fish.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Blade Bait',
                    technique: 'Vertical jigging.',
                    reason: 'Compact, vibrating bait for deep fish.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Erratic retrieve.',
                    reason: 'Rain often triggers a feeding response.'
                }, {
                    name: 'Drop Shot',
                    technique: 'Fish vertically on deep structure.',
                    reason: 'A reliable producer for deep fish activated by changing weather.'
                }, {
                    name: 'Jigging Spoon',
                    technique: 'Use sharp, vertical snaps.',
                    reason: 'The flash and falling action triggers reaction strikes from deep bass.'
                }],
                colors: ['Silver', 'Natural Shad'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Deep Structure',
                    description: 'Use your electronics to find fish on deep structure and target them with vertical presentations.'
                },
                tips: [{
                    title: 'Vertical Jigging',
                    description: 'Use a blade bait to vertically jig over deep structure.'
                }, {
                    title: 'Rain Means Feeding',
                    description: 'Rain often triggers a feeding response, so fish faster than you normally would in cool water.'
                }, {
                    title: 'Sharp, Short Hops',
                    description: 'When jigging a blade bait, use sharp but short rips of the rod tip.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Big Jig',
                    technique: 'Flip into heavy cover.',
                    reason: 'Large silhouette is easy to see.'
                }, {
                    name: 'Creature Bait',
                    technique: 'Texas-rigged for flipping.',
                    reason: 'Lots of appendages create vibration.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Slow-roll with a big Colorado blade.',
                    reason: 'Maximum vibration to call fish out of cover.'
                }, {
                    name: 'Squarebill Crankbait',
                    technique: 'Crash into any available wood cover.',
                    reason: 'The loud deflection triggers an instinctual bite.'
                }],
                colors: ['Black', 'Purple'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Calm Water Pockets',
                    description: 'Look for pockets and coves that are protected from the main flow and flip any cover you see.'
                },
                tips: [{
                    title: 'Go Big and Dark',
                    description: 'A large, dark silhouette is easiest for fish to see in these conditions.'
                }, {
                    title: 'Use Scent',
                    description: 'Adding scent to your soft plastics can make a huge difference when visibility is low.'
                }, {
                    title: 'Fish the Calmest Water',
                    description: 'Look for pockets and coves that are protected from the main flow.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Chatterbait',
                    technique: 'Slow retrieve.',
                    reason: 'Heavy vibration.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Yo-yo retrieve.',
                    reason: 'Loud rattles.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Use a single Colorado blade for a slow, thumping retrieve.',
                    reason: 'A different kind of vibration that excels in cool, muddy water.'
                }, {
                    name: 'Big Jig',
                    technique: 'Drag slowly along the bottom with a bulky trailer.',
                    reason: 'A slow presentation for lethargic fish relying on feel.'
                }],
                colors: ['Black', 'Blue', 'Gold'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Shallow Banks',
                    description: 'Runoff will create a slightly warmer, food-rich zone right near the bank. Make repetitive casts to any available cover.'
                },
                tips: [{
                    title: 'Repetitive Casts',
                    description: 'Make multiple casts to the same piece of cover to give the fish a chance to find your lure.'
                }, {
                    title: 'Stay Close to the Bank',
                    description: 'Runoff will create a slightly warmer, food-rich zone right near the bank.'
                }, {
                    title: 'Heavy Vibration',
                    description: 'Choose the lure that you can feel vibrating the most through your rod.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Drop Shot',
                    technique: 'Maintain bottom contact.',
                    reason: 'Good for deep, wind-blown points.'
                }, {
                    name: 'Football Jig',
                    technique: 'Drag along the bottom.',
                    reason: 'Mimics crawfish on rocky points.'
                }, {
                    name: 'Deep Crankbait',
                    technique: 'Make long casts and grind the bottom.',
                    reason: 'An aggressive presentation for active, wind-blown fish.'
                }, {
                    name: 'Swimbait',
                    technique: 'Use a heavy jighead and count it down.',
                    reason: 'Mimics the baitfish being pushed by the wind.'
                }],
                colors: ['Green Pumpkin', 'Perch'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Windy Points',
                    description: 'Wind pushes bait onto points. Drag a jig or drop shot through these areas where bass will be waiting to feed.'
                },
                tips: [{
                    title: 'Fish the Windy Points',
                    description: 'Wind pushes bait onto points. Drag a jig or drop shot through these areas.'
                }, {
                    title: 'Maintain Bottom Contact',
                    description: 'Use a heavy enough weight to ensure you can feel the bottom at all times.'
                }, {
                    title: 'Low-Stretch Line',
                    description: 'Use fluorocarbon or braid to feel subtle bites in the wind.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Erratic retrieve.',
                    reason: 'Wind activates baitfish, jerkbaits mimic this.'
                }, {
                    name: 'A-Rig',
                    technique: 'Steady retrieve.',
                    reason: 'Simulates a school of baitfish.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Cover water by casting over windy flats.',
                    reason: 'Casts well in the wind and its sound attracts fish from a distance.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Use willow leaf blades for a fast retrieve.',
                    reason: 'Mimics a school of fleeing baitfish in the wind.'
                }],
                colors: ['Natural Shad', 'Silver'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Windy Banks & Points',
                    description: 'Use the wind to your advantage to cover water while keeping your lure in the strike zone along windy shorelines.'
                },
                tips: [{
                    title: 'Wind Activates Baitfish',
                    description: 'Wind makes baitfish active, and jerkbaits perfectly mimic this.'
                }, {
                    title: 'Let the Wind Drift You',
                    description: 'Use the wind to your advantage to cover water while keeping your lure in the strike zone.'
                }, {
                    title: 'Sharp Cadence',
                    description: 'Use sharp, aggressive twitches with your jerkbait to attract attention.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Big Spinnerbait',
                    technique: 'Slow roll with big blades.',
                    reason: 'Maximum vibration.',
                    isPrimary: true
                }, {
                    name: 'Chatterbait',
                    technique: 'Steady retrieve.',
                    reason: 'Heavy vibration.'
                }, {
                    name: 'Squarebill Crankbait',
                    technique: 'Crash and deflect off shallow cover.',
                    reason: 'An aggressive, loud presentation for active fish.'
                }, {
                    name: 'Flipping Jig',
                    technique: 'Pitch to isolated cover on the windy bank.',
                    reason: 'Targets fish holding tight to cover to escape the current.'
                }],
                colors: ['Chartreuse', 'Black', 'Blue'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Windy Banks (Shallow)',
                    description: 'This is where the warmest, most oxygenated water will be, and it concentrates the food. Focus on water less than 5 feet deep.'
                },
                tips: [{
                    title: 'Find the Windy Bank',
                    description: 'This is where the warmest, most oxygenated water will be, and it concentrates the food.'
                }, {
                    title: 'Maximum Vibration',
                    description: 'Use a big Colorado blade spinnerbait for a heavy "thump".'
                }, {
                    title: 'Stay Shallow',
                    description: 'Focus all your efforts in water less than 5 feet deep.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Lipless Crankbait',
                    technique: 'Yo-yo retrieve.',
                    reason: 'Loud and heavy to cast in wind.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Slow retrieve.',
                    reason: 'Vibration is key.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Slow roll a single Colorado blade.',
                    reason: 'A different, thumping vibration for cold, windy conditions.'
                }, {
                    name: 'Big Jig',
                    technique: 'Pitch to heavy cover in calm pockets.',
                    reason: 'A slow presentation for fish seeking refuge from the wind.'
                }],
                colors: ['Red', 'Gold'],
                gear: gearMap.largemouth,
                location: {
                    title: 'Calm Pockets',
                    description: 'Look for any small pocket or cut that is protected from the wind. Bass will stack up in these areas to get out of the churn.'
                },
                tips: [{
                    title: 'Fish the Calm Pockets',
                    description: 'Look for any small pocket or cut that is protected from the wind. Bass will stack up in these areas.'
                }, {
                    title: 'Heavy and Loud',
                    description: 'Use the heaviest, loudest lure you can to cast into the wind and call fish in.'
                }, {
                    title: 'Make Repeated Casts',
                    description: 'Cast to the same spot multiple times to get a fish\'s attention.'
                }, {
                    title: 'Powerful Hookset',
                    description: 'Largemouth have tough mouths. Set the hook hard.'
                }]
            }
        }
    }
},
               smallmouth: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Drop Shot',
                    technique: 'Fish vertically, minimal shaking.',
                    reason: 'Perfect for deep, clear water smallmouth.',
                    isPrimary: true
                }, {
                    name: 'Ned Rig',
                    technique: 'Slow drag on the bottom.',
                    reason: 'Subtle and natural for finicky fish.'
                }, {
                    name: 'Tube Jig',
                    technique: 'Drift and drag over deep rock and sand.',
                    reason: 'Perfectly mimics a goby or other bottom-dwelling forage.'
                }, {
                    name: 'Swimbait',
                    technique: 'Count down to suspended fish and retrieve steadily.',
                    reason: 'A realistic baitfish imitation for targeting fish feeding higher in the column.'
                }], //
                colors: ['Goby', 'Green Pumpkin'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Deep Offshore Structure',
                    description: 'Smallmouth will be on deep offshore structure like rock piles, humps, and points in 15-30+ feet of water.'
                }, //
                tips: [{
                    title: 'Fish Deep',
                    description: 'Smallmouth will be on deep offshore structure like rock piles and humps.'
                }, {
                    title: 'Light Line is Crucial',
                    description: 'Use a 6-8lb fluorocarbon leader for more bites in clear water.'
                }, {
                    title: 'Subtle Action',
                    description: 'Don\'t overwork the bait. Let the gentle rocking of the boat provide the action.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Twitch-twitch-pause.',
                    reason: 'Mimics dying baitfish.',
                    isPrimary: true
                }, {
                    name: 'Tube Jig',
                    technique: 'Slow drag on the bottom.',
                    reason: 'Imitates a crawfish.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Vertical jig with sharp, short rips.',
                    reason: 'A great reaction lure for deep, cold, and lethargic smallmouth.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Pound on the bottom with sharp upward snaps.',
                    reason: 'The erratic darting action is a powerful trigger for deep fish.'
                }], //
                colors: ['Natural Shad', 'Smoke'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Deep Water Points',
                    description: 'Jerkbaits are perfect for targeting fish suspended off of deep points and bluffs.'
                }, //
                tips: [{
                    title: 'Suspend Over Deep Water',
                    description: 'Jerkbaits are perfect for targeting fish suspended off of points.'
                }, {
                    title: 'Drag the Tube',
                    description: 'A slow drag with a tube jig mimics a crawfish, a key cool water forage.'
                }, {
                    title: 'Long Pauses are Key',
                    description: 'Let your jerkbait sit motionless for 10-20 seconds between twitches.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Chatterbait',
                    technique: 'Steady retrieve.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Big Spinnerbait',
                    technique: 'Use big blades for more thump.',
                    reason: 'Helps fish find it in low visibility.'
                }, {
                    name: 'Squarebill Crankbait',
                    technique: 'Crash and deflect off of shallow cover.',
                    reason: 'The erratic deflection triggers reaction strikes from fish holding tight to cover.'
                }, {
                    name: 'Jig',
                    technique: 'Pitch to cover with a bulky, scented trailer.',
                    reason: 'A slow presentation that appeals to their sense of smell and feel.'
                }], //
                colors: ['Black', 'Blue', 'Chartreuse'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Shallow Cover',
                    description: 'Smallmouth will push up into shallow cover like laydowns and docks to find food in muddy water.'
                }, //
                tips: [{
                    title: 'Vibration is Everything',
                    description: 'In muddy water, smallmouth rely on their lateral line to find prey.'
                }, {
                    title: 'Fish Shallow and Slow',
                    description: 'They will push up into shallow cover to find food.'
                }, {
                    title: 'Go Big',
                    description: 'Use a larger profile bait to be more easily found.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Lipless Crankbait',
                    technique: 'Yo-yo retrieve.',
                    reason: 'Loud rattles.'
                }, {
                    name: 'Jig',
                    technique: 'Slow drag with a bulky trailer.',
                    reason: 'Large profile, scent-friendly.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Use sharp rips for maximum vibration.',
                    reason: 'The most vibration you can get in a small package to call fish in.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Slowly retrieve along the bottom.',
                    reason: 'A different, thumping vibration for when fish ignore rattling baits.'
                }], //
                colors: ['Crawfish', 'Red', 'Black'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Hard Bottom Areas',
                    description: 'Find any rock or gravel bottom that will hold heat and provide a hard surface for sound to travel.'
                }, //
                tips: [{
                    title: 'Yo-Yo Retrieve',
                    description: 'Rip a lipless crankbait off the bottom to trigger reaction bites.'
                }, {
                    title: 'Scented Jigs',
                    description: 'Add scent to your jig to help fish find it in low visibility.'
                }, {
                    title: 'Fish Hard Bottom',
                    description: 'Find any rock or gravel bottom that will hold heat.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Topwater Spook',
                    technique: '"Walk the dog" action.',
                    reason: 'Cloud cover makes them look up.'
                }, {
                    name: 'Swimbait',
                    technique: 'Steady retrieve.',
                    reason: 'Match the hatch for roaming fish.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Use a fast, erratic retrieve with short pauses.',
                    reason: 'A great search bait for aggressive, scattered smallmouth.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Burn it just under the surface.',
                    reason: 'The flash and speed can trigger incredible strikes from fish hunting on flats.'
                }], //
                colors: ['Bone White', 'Natural Shad'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Shallow Flats',
                    description: 'Cloud cover makes smallmouth move up and actively feed on large, shallow flats, especially near deep water.'
                }, //
                tips: [{
                    title: 'Fish are Roaming Flats',
                    description: 'Cloud cover makes smallmouth move up and feed on shallow flats.'
                }, {
                    title: 'Match the Hatch',
                    description: 'Use realistic swimbait colors to mimic local baitfish.'
                }, {
                    title: 'Vary Cadence',
                    description: 'Experiment with your retrieve speed until you get a bite.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Aggressive rips and pauses.',
                    reason: 'Prime time for active smallmouth.',
                    isPrimary: true
                }, {
                    name: 'A-Rig',
                    technique: 'Slow, steady retrieve.',
                    reason: 'Simulates a school of baitfish.'
                }, {
                    name: 'Swimbait',
                    technique: 'Use a heavy jighead and swim it just over the bottom.',
                    reason: 'A big meal for big, aggressive smallmouth hunting for bait.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Cast and rip it back to the boat.',
                    reason: 'Cover water and trigger reaction strikes from fish that won\'t eat a jerkbait.'
                }], //
                colors: ['Perch', 'Silver'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Near Baitfish Schools',
                    description: 'Use your electronics to locate schools of baitfish over points or humps; the smallmouth will be nearby.'
                }, //
                tips: [{
                    title: 'Prime Time Feeding',
                    description: 'Cloudy and cool is a perfect storm for active smallmouth. Fish fast.'
                }, {
                    title: 'Find the Bait',
                    description: 'Use your electronics to locate schools of baitfish; the smallmouth will be nearby.'
                }, {
                    title: 'Aggressive Cadence',
                    description: 'Use faster, more aggressive rips with your jerkbait.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Big Spinnerbait',
                    technique: 'Slow roll with big blades.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Jig',
                    technique: 'Pitch to wood cover.',
                    reason: 'Bulky profile.'
                }, {
                    name: 'Squarebill Crankbait',
                    technique: 'Crash into wood and rock.',
                    reason: 'Loud and erratic, perfect for getting a reaction in dirty water.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Retrieve steadily through sparse cover.',
                    reason: 'A hard vibration that fish can easily track.'
                }], //
                colors: ['Chartreuse', 'Black', 'Blue'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Shallow Wood Cover',
                    description: 'Smallmouth will use laydowns and logjams as ambush points in muddy water. Fish tight to cover.'
                }, //
                tips: [{
                    title: 'Go Big and Bright',
                    description: 'Use a large profile bait with bright colors to be seen.'
                }, {
                    title: 'Fish Tight to Wood',
                    description: 'Smallmouth will use laydowns as ambush points in muddy water.'
                }, {
                    title: 'Rattles Help',
                    description: 'Add a rattle to your jig for extra noise.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Chatterbait',
                    technique: 'Slow retrieve.',
                    reason: 'Vibration is key.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Yo-yo retrieve.',
                    reason: 'Loud rattles.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Slowly roll a big Colorado blade along the bottom.',
                    reason: 'A different vibration that stays in the strike zone.'
                }, {
                    name: 'Crankbait',
                    technique: 'Use a bright, wide-wobbling model.',
                    reason: 'Pushes a lot of water and provides a large, visible profile.'
                }], //
                colors: ['Black', 'Red'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Warmest Water',
                    description: 'The north side of the lake or a shallow bay will be warmest. Look for any source of slightly clearer water.'
                }, //
                tips: [{
                    title: 'Rattles are Key',
                    description: 'Use lures that make a lot of noise.'
                }, {
                    title: 'Slow Your Retrieve',
                    description: 'Give fish time to find your lure in the dirty water.'
                }, {
                    title: 'Find the Warmest Water',
                    description: 'The north side of the lake or a shallow bay will be warmest.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Topwater Plopper',
                    technique: 'Steady retrieve for plopping sound.',
                    reason: 'Rain ignites the topwater bite.',
                    isPrimary: true
                }, {
                    name: 'Jerkbait',
                    technique: 'Erratic retrieve.',
                    reason: 'Mimics wounded baitfish.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Burn just under the surface.',
                    reason: 'Great for active, aggressive smallmouth looking up in the rain.'
                }, {
                    name: 'Fluke',
                    technique: 'Dart and pause on a weightless hook.',
                    reason: 'A subtle surface presentation that can out-fish louder baits.'
                }], //
                colors: ['Black', 'Natural Shad'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Shallow Flats & Points',
                    description: 'The surface disturbance from rain makes smallmouth less wary and willing to chase baits in shallow water.'
                }, //
                tips: [{
                    title: 'Rain Ignites Topwater',
                    description: 'The surface disturbance from rain makes for an incredible topwater bite.'
                }, {
                    title: 'Wait for the Weight',
                    description: 'Don\'t set the hook on the splash; wait to feel the fish.'
                }, {
                    title: 'Vary Topwater Speed',
                    description: 'Try different retrieve speeds with your plopper-style bait.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Tube Jig',
                    technique: 'Slow drag on the bottom.',
                    reason: 'Classic smallmouth bait.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Vertical jigging.',
                    reason: 'Deadly in rainy conditions.'
                }, {
                    name: 'Drop Shot',
                    technique: 'Fish vertically in current.',
                    reason: 'Keeps your bait in a precise location for fish holding in current.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Snap jig aggressively in current.',
                    reason: 'The darting action can trigger strikes from fish using current breaks.'
                }], //
                colors: ['Smoke', 'Silver'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Downstream Side of Structure',
                    description: 'Rain creates current. Fish the downstream side of any structure like points, islands, or rock piles.'
                }, //
                tips: [{
                    title: 'Current is Your Friend',
                    description: 'Rain creates current. Fish the downstream side of any structure.'
                }, {
                    title: 'Stay Vertical',
                    description: 'A blade bait fished vertically is deadly in rainy conditions.'
                }, {
                    title: 'Feel for the "Thump"',
                    description: 'The bite on a tube will feel like a soft thump or just weight.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Jig',
                    technique: 'Pitch to cover with bulky trailer.',
                    reason: 'Dark silhouette.'
                }, {
                    name: 'Big Spinnerbait',
                    technique: 'Slow roll with big blades.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Squarebill Crankbait',
                    technique: 'Deflect loudly off of wood and rock cover.',
                    reason: 'The erratic sound and action is a powerful trigger.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Fish with a slow, steady retrieve.',
                    reason: 'The constant thump is easy for fish to track.'
                }], //
                colors: ['Black', 'Chartreuse'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Current Seams',
                    description: 'Look for where muddy and slightly clearer water meet. Fish will use this edge as an ambush point.'
                }, //
                tips: [{
                    title: 'Dark Silhouette',
                    description: 'A black jig presents the most visible profile in muddy water.'
                }, {
                    title: 'Use Scent',
                    description: 'Add a scented trailer to your jig.'
                }, {
                    title: 'Fish Current Seams',
                    description: 'Look for where muddy and slightly clearer water meet.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Lipless Crankbait',
                    technique: 'Yo-yo retrieve.',
                    reason: 'Loud rattles.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Slow retrieve.',
                    reason: 'Heavy vibration.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Slow-roll a large Colorado blade.',
                    reason: 'A different, thumping vibration for tough bites.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Aggressive vertical rips.',
                    reason: 'Maximum vibration to call fish from a distance.'
                }], //
                colors: ['Red', 'Black', 'Blue'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Cleanest Water Available',
                    description: 'Any incoming creek or river might bring in slightly clearer water. Focus your efforts in these areas.'
                }, //
                tips: [{
                    title: 'Fish the Cleanest Water',
                    description: 'Any incoming creek or river might bring in slightly clearer water.'
                }, {
                    title: 'Make Multiple Casts',
                    description: 'It may take several casts for a fish to find your lure.'
                }, {
                    title: 'Use Loud Rattles',
                    description: 'The more noise your lure makes, the better.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Drop Shot',
                    technique: 'Use a heavy weight to stay down.',
                    reason: 'Perfect for drifting deep flats.'
                }, {
                    name: 'Tube Jig',
                    technique: 'Drift and drag.',
                    reason: 'Mimics bottom-dwelling forage.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Burn across windy points and flats.',
                    reason: 'The flash and speed triggers aggressive fish activated by the wind.'
                }, {
                    name: 'Topwater Spook',
                    technique: 'Work quickly in the waves.',
                    reason: 'The wave action provides camouflage for a topwater bait.'
                }], //
                colors: ['Goby', 'Green Pumpkin'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Deep Flats & Points (Drifting)',
                    description: 'Use the wind to your advantage. Set up a controlled drift over deep flats and points where smallmouth feed.'
                }, //
                tips: [{
                    title: 'Use the Wind to Drift',
                    description: 'Set up a drift over deep flats and points.'
                }, {
                    title: 'Heavy Weight',
                    description: 'Use a heavy enough drop shot weight to maintain contact with the bottom.'
                }, {
                    title: 'Watch Your Line',
                    description: 'You will often see the bite before you feel it. Watch for your line to jump.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Let waves impart action on pauses.',
                    reason: 'Wind breaks up the surface.',
                    isPrimary: true
                }, {
                    name: 'A-Rig',
                    technique: 'Slow, steady retrieve.',
                    reason: 'Simulates a school of baitfish.'
                }, {
                    name: 'Swimbait',
                    technique: 'Use a heavy head to cast into wind.',
                    reason: 'Presents a large profile that is easy to see in the waves.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Cast far and burn it back.',
                    reason: 'Casts a mile in the wind and the sound carries.'
                }], //
                colors: ['Natural Shad', 'White'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Wind-Blown Points & Banks',
                    description: 'The wind provides cover for smallmouth to move up and feed. Target points and shorelines receiving the most wind.'
                }, //
                tips: [{
                    title: 'Wind Breaks up Surface',
                    description: 'The wind provides cover, making jerkbaits more effective.'
                }, {
                    title: 'Count it Down',
                    description: 'Let your jerkbait sink to the desired depth before starting your retrieve.'
                }, {
                    title: 'Use a Drift Sock',
                    description: 'A drift sock will slow your boat down for a more thorough presentation.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Big Spinnerbait',
                    technique: 'Slow roll with big blades.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Steady retrieve.',
                    reason: 'Heavy vibration.'
                }, {
                    name: 'Squarebill Crankbait',
                    technique: 'Crash aggressively into any hard cover.',
                    reason: 'The loud deflection is a key trigger in low visibility.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Use a lift-and-fall retrieve.',
                    reason: 'Combines sound and vibration to call fish in.'
                }], //
                colors: ['Chartreuse', 'White'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Windy Banks (Shallow)',
                    description: 'Focus on shallow (1-5 ft) areas along banks getting the most wind. The water will be warmer and bait will be present.'
                }, //
                tips: [{
                    title: 'Maximum Vibration',
                    description: 'Use a big Colorado blade spinnerbait for a heavy thump.'
                }, {
                    title: 'Stay in the Strike Zone',
                    description: 'Keep your bait in the 1-5 foot depth range along windy banks.'
                }, {
                    title: 'Fish Bright Colors',
                    description: 'Bright, flashy colors are easier for fish to see.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Lipless Crankbait',
                    technique: 'Yo-yo retrieve.',
                    reason: 'Loud rattles.'
                }, {
                    name: 'Big Jig',
                    technique: 'Pitch to hard cover.',
                    reason: 'Bulky profile.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Vertical jig aggressively.',
                    reason: 'Maximum vibration to get noticed in tough conditions.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Retrieve slowly along the bottom.',
                    reason: 'The steady thump helps fish track the lure.'
                }], //
                colors: ['Red', 'Black'], //
                gear: gearMap.smallmouth, //
                location: {
                    title: 'Hard Cover Current Breaks',
                    description: 'Fish will tuck in behind rocks and logs to get out of the wind-driven current and ambush prey.'
                }, //
                tips: [{
                    title: 'Target Hard Cover',
                    description: 'Fish will tuck in behind rocks and logs to get out of the current.'
                }, {
                    title: 'Be Persistent',
                    description: 'Windy and muddy is tough, but the fish are often concentrated in small areas.'
                }, {
                    title: 'Go Slow',
                    description: 'Even with reaction baits, a slower retrieve can be better.'
                }, {
                    title: 'Sweeping Hookset',
                    description: 'When you feel the bite, reel down and pull firmly to the side.'
                }] //
            }
        }
    }
},
               rainbowtrout: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Drift under a float.',
                    reason: 'Natural and irresistible.',
                    isPrimary: true
                }, {
                    name: 'Small Spinners',
                    technique: 'Cast upstream, retrieve with blade spin.',
                    reason: 'Flash attracts trout.'
                }, {
                    name: 'Small Spoons',
                    technique: 'Cast and retrieve with a slight flutter.',
                    reason: 'The wobble and flash mimic a small, fleeing baitfish.'
                }, {
                    name: 'Scented Dough Bait',
                    technique: 'On a small treble hook with a slip sinker.',
                    reason: 'A highly effective bait, especially for stocked trout.'
                }],
                colors: ['Gold', 'Silver'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Deep Pools',
                    description: 'Trout will seek the coldest, most oxygenated water in deep pools. Look for the deepest holes in rivers or lakes.'
                },
                tips: [{
                    title: 'Fish Deep Pools',
                    description: 'Trout will seek the coldest, most oxygenated water in deep pools.'
                }, {
                    title: 'Go Natural',
                    description: 'A simple worm drifted under a float is hard to beat.'
                }, {
                    title: 'Light Leader',
                    description: 'Use a 2-4lb fluorocarbon leader as it is nearly invisible.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Inline Spinners',
                    technique: 'Retrieve just fast enough to spin.',
                    reason: 'Classic trout catcher.',
                    isPrimary: true
                }, {
                    name: 'Small Spoons',
                    technique: 'Flutter on the fall.',
                    reason: 'Mimics wounded baitfish.'
                }, {
                    name: 'Small Jerkbaits',
                    technique: 'Use a subtle twitch-pause retrieve.',
                    reason: 'Mimics a wounded minnow, which can trigger larger, predatory trout.'
                }, {
                    name: 'Small Jig',
                    technique: 'Swim it steadily or fish it under a float.',
                    reason: 'A versatile lure that can imitate insects or small minnows.'
                }],
                colors: ['Silver', 'Rainbow Trout'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Current Seams & Tailouts',
                    description: 'Cast upstream and retrieve your lure through current seams and the tailouts of pools where trout wait to feed.'
                },
                tips: [{
                    title: 'Cast Upstream',
                    description: 'Cast upstream and retrieve just fast enough to make the blade spin.'
                }, {
                    title: 'Vary Retrieve Speed',
                    description: 'Experiment with different retrieve speeds until you find what the trout want.'
                }, {
                    title: 'Polarized Glasses',
                    description: 'Good polarized sunglasses will help you spot fish and structure.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Stationary on the bottom.',
                    reason: 'Fish find it by scent.'
                }, {
                    name: 'Scented Dough',
                    technique: 'Use a bait holder hook.',
                    reason: 'Bright colors and strong scent.'
                }, {
                    name: 'Live Minnow',
                    technique: 'Fish on bottom or under a float in the clearest water available.',
                    reason: 'The scent and vibration of a live minnow can be found easily by trout.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Use a slow retrieve with a bright, thumping blade.',
                    reason: 'The flash and vibration can help call in fish in stained water.'
                }],
                colors: ['Orange', 'Hot Pink'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Clear Water Inflows',
                    description: 'Find any small stream or pipe bringing in clearer water. Trout will congregate there.'
                },
                tips: [{
                    title: 'Stationary is Best',
                    description: 'Let your bait sit on the bottom where fish can find it by scent.'
                }, {
                    title: 'Find Inflows',
                    description: 'Any small stream or pipe bringing in clearer water will attract trout.'
                }, {
                    title: 'Use a Bell',
                    description: 'Attach a small bell to your rod tip to detect bites.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Live Minnow',
                    technique: 'Drift under a float.',
                    reason: 'Larger profile for big fish.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Retrieve slowly.',
                    reason: 'More vibration.'
                }, {
                    name: 'Scented Jigs',
                    technique: 'Tip with a wax worm and fish slowly on the bottom.',
                    reason: 'Combines a bright color with a strong scent for tough conditions.'
                }, {
                    name: 'Worms',
                    technique: 'Use a full nightcrawler for a larger, more scented presentation.',
                    reason: 'A classic bait that works in almost any condition for trout.'
                }],
                colors: ['Chartreuse', 'White'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Current Breaks',
                    description: 'Fish any current break, like a log or a big rock, where trout can get out of the main flow.'
                },
                tips: [{
                    title: 'Bigger Profile',
                    description: 'Use a larger lure that displaces more water.'
                }, {
                    title: 'Fish Slow',
                    description: 'Give trout time to find your offering in the dirty water.'
                }, {
                    title: 'Look for Breaks',
                    description: 'Fish any current break, like a log or a big rock.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Small Jerkbaits',
                    technique: 'Erratic retrieve.',
                    reason: 'Mimics wounded minnow.'
                }, {
                    name: 'Spoons',
                    technique: 'Flutter on the fall.',
                    reason: 'Flashy and attractive.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Cast and retrieve at a medium pace.',
                    reason: 'The flash of a spinner is highly effective under overcast skies.'
                }, {
                    name: 'Worms',
                    technique: 'Drift under a float through likely runs.',
                    reason: 'A natural presentation for trout that may be wary of hardware.'
                }],
                colors: ['Rainbow Trout', 'Silver'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Shallow Water',
                    description: 'Cloud cover makes trout less wary and more willing to chase lures in shallower water than usual.'
                },
                tips: [{
                    title: 'Fish are Cruising',
                    description: 'Cloud cover makes trout less wary and more willing to chase.'
                }, {
                    title: 'Erratic Action',
                    description: 'An erratic retrieve with a jerkbait mimics a wounded minnow.'
                }, {
                    title: 'Fish the Shallows',
                    description: 'Trout will move into shallower water to feed under cloud cover.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Inline Spinners',
                    technique: 'Slow, steady retrieve.',
                    reason: 'Classic trout catcher.'
                }, {
                    name: 'Small Swimbaits',
                    technique: 'Match the hatch.',
                    reason: 'Realistic presentation.'
                }, {
                    name: 'Small Spoons',
                    technique: 'Use an erratic retrieve with pauses.',
                    reason: 'The flutter on the pause is an excellent trigger for following trout.'
                }, {
                    name: 'Small Crankbait',
                    technique: 'Retrieve steadily over flats or along drop-offs.',
                    reason: 'Covers water quickly to find active schools of feeding trout.'
                }],
                colors: ['Gold', 'Perch'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Entire Water Column',
                    description: 'Trout will be actively feeding. Try different depths until you find where the fish are holding.'
                },
                tips: [{
                    title: 'Cover the Water Column',
                    description: 'Try different depths until you find where the fish are holding.'
                }, {
                    title: 'Match the Hatch',
                    description: 'Look for what insects or minnows are in the water and match your lure color.'
                }, {
                    title: 'Steady Retrieve',
                    description: 'A slow and steady retrieve is often best.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Fish on the bottom.',
                    reason: 'Scent is primary.'
                }, {
                    name: 'PowerBait',
                    technique: 'Use a Carolina rig.',
                    reason: 'Keeps bait off bottom.',
                    isPrimary: true
                }, {
                    name: 'Live Minnow',
                    technique: 'Fish under a float near creek mouths.',
                    reason: 'The scent and movement is a powerful combination in murky water.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Retrieve slowly with a large, thumping blade.',
                    reason: 'The vibration helps trout home in on your lure in low visibility.'
                }],
                colors: ['Hot Pink', 'Orange'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Eddies & Calm Pockets',
                    description: 'Trout will hold in calm eddies to escape the main current and find food by scent.'
                },
                tips: [{
                    title: 'Focus on Scent',
                    description: 'In muddy water, scent is the primary way trout will find your bait.'
                }, {
                    title: 'Fish Eddies',
                    description: 'Trout will hold in calm eddies to escape the main current.'
                }, {
                    title: 'Carolina Rig',
                    description: 'A Carolina rig can keep your bait just off the bottom.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Live Minnow',
                    technique: 'Under a slip bobber.',
                    reason: 'Detects light bites.'
                }, {
                    name: 'Scented Jigs',
                    technique: 'Tip with a worm.',
                    reason: 'Extra scent and action.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Slow retrieve for maximum blade vibration.',
                    reason: 'A big, thumping blade is easy for lethargic fish to find.'
                }, {
                    name: 'Small Crankbait',
                    technique: 'Use a bright, rattling model with a slow retrieve.',
                    reason: 'The noise and wobble can call fish in from a distance.'
                }],
                colors: ['Chartreuse', 'White'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Shallow Bank Eddies',
                    description: 'Fish will often be right on the bank in muddy water, seeking calmer, slightly warmer water.'
                },
                tips: [{
                    title: 'Add a "Tidbit"',
                    description: 'Tip your jig with a piece of worm or a minnow head.'
                }, {
                    title: 'Fish the Edges',
                    description: 'Fish will often be right on the bank in muddy water.'
                }, {
                    title: 'Bobber Down',
                    description: 'A slip bobber rig is great for detecting light bites.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Drift in current.',
                    reason: 'Rain washes food in.',
                    isPrimary: true
                }, {
                    name: 'Inline Spinners',
                    technique: 'Retrieve across current.',
                    reason: 'Flashy and effective.'
                }, {
                    name: 'Small Jig',
                    technique: 'Cast to the bank and swim it back.',
                    reason: 'Imitates a disoriented insect or minnow washed into the water.'
                }, {
                    name: 'Spoons',
                    technique: 'Let it flutter in the current near the bank.',
                    reason: 'The flash and wobble triggers aggressive, rain-activated fish.'
                }],
                colors: ['Silver', 'Gold'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Current Seams',
                    description: 'Rain triggers feeding. Fish the line where fast and slow water meet, as trout will look up for food.'
                },
                tips: [{
                    title: 'Rain Triggers Feeding',
                    description: 'Rain washes food into the water, putting trout on the bite.'
                }, {
                    title: 'Target Current Seams',
                    description: 'Fish the line where fast and slow water meet.'
                }, {
                    title: 'Top of the Water Column',
                    description: 'Trout will look up for food during a rain.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Spoons',
                    technique: 'Flutter in current.',
                    reason: 'Disturbed surface makes trout less spooky.'
                }, {
                    name: 'Small Jerkbaits',
                    technique: 'Erratic retrieve.',
                    reason: 'Mimics wounded baitfish.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Cast across current and let it swing.',
                    reason: 'Covers water and finds aggressive fish.'
                }, {
                    name: 'Live Minnow',
                    technique: 'Drift under a float through deep pools.',
                    reason: 'A larger offering for bigger trout taking advantage of the conditions.'
                }],
                colors: ['Rainbow Trout', 'Silver'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Pools & Runs',
                    description: 'The disturbed surface makes trout less wary. Stay mobile and cover water in various pools and runs.'
                },
                tips: [{
                    title: 'Don\'t Be Afraid of a Ripple',
                    description: 'The disturbed surface makes trout less spooky.'
                }, {
                    title: 'Stay Mobile',
                    description: 'Move around to find where the fish are concentrated.'
                }, {
                    title: 'Try a Tandem Rig',
                    description: 'Tie on a second, smaller fly or jig 18 inches above your main lure.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Stationary on bottom.',
                    reason: 'Scent is everything.'
                }, {
                    name: 'Scented Dough Bait',
                    technique: 'Use bait holder hook.',
                    reason: 'Maximum scent.'
                }, {
                    name: 'Live Minnow',
                    technique: 'Fish on the bottom in calm pools.',
                    reason: 'The scent and vibration is a powerful attractant.'
                }, {
                    name: 'Scented Jigs',
                    technique: 'Fish very slowly in calm areas.',
                    reason: 'Combines a bright color with a strong scent trail.'
                }],
                colors: ['Orange', 'Hot Pink'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Bottom of Calm Pools',
                    description: 'The most effective technique is to fish a scented bait right on the bottom. Patience is key.'
                },
                tips: [{
                    title: 'Bottom Fishing',
                    description: 'The most effective technique is to fish a scented bait right on the bottom.'
                }, {
                    title: 'Patience is a Virtue',
                    description: 'It may take time for fish to find your bait.'
                }, {
                    title: 'Use a Bait Holder Hook',
                    description: 'These hooks have small barbs on the shank to hold your bait on better.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Live Minnow',
                    technique: 'Fish under a float.',
                    reason: 'Large profile and scent.'
                }, {
                    name: 'Big Spinners',
                    technique: 'Slow retrieve.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Worms',
                    technique: 'Use a large gob on the bottom.',
                    reason: 'A big, smelly target that is easy to find.'
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip with bait and fish slowly.',
                    reason: 'A bright target with the added attraction of scent.'
                }],
                colors: ['Chartreuse', 'White'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Calmest Water Available',
                    description: 'Look for any area that is out of the main, muddy flow. Go big and bright to call fish in.'
                },
                tips: [{
                    title: 'Fish the Calmest Water',
                    description: 'Look for any area that is out of the main, muddy flow.'
                }, {
                    title: 'Go Big or Go Home',
                    description: 'Use a large, vibrating lure to call fish in.'
                }, {
                    title: 'Stay Safe',
                    description: 'Be aware of rising water levels during heavy rain.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Kastmasters',
                    technique: 'Long casts and fast retrieve.',
                    reason: 'Cuts through wind.'
                }, {
                    name: 'Weighted Spinners',
                    technique: 'Retrieve through "trout chop".',
                    reason: 'Heavy for casting distance.'
                }, {
                    name: 'Spoons',
                    technique: 'Cast with the wind and let it flutter.',
                    reason: 'A heavy spoon casts far and its action is deadly in waves.'
                }, {
                    name: 'Small Crankbait',
                    technique: 'Make long casts and retrieve steadily.',
                    reason: 'Helps cover water to find scattered, feeding fish.'
                }],
                colors: ['Silver', 'Blue'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Wind-Blown Side of Lake',
                    description: 'The wind-blown side of the lake will have a "trout chop" that provides cover and concentrates food.'
                },
                tips: [{
                    title: 'Casting Distance',
                    description: 'Use heavy lures that can cut through the wind.'
                }, {
                    title: 'Fish the "Chop"',
                    description: 'The wind-blown side of the lake will have a "trout chop" that provides cover.'
                }, {
                    title: 'Keep Line Tight',
                    description: 'Reel up slack quickly to detect bites.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Spoons',
                    technique: 'Let it sink and flutter.',
                    reason: 'Imitates wounded baitfish.'
                }, {
                    name: 'Small Crankbaits',
                    technique: 'Steady retrieve.',
                    reason: 'Covers water in wind.'
                }, {
                    name: 'Weighted Spinners',
                    technique: 'Retrieve just fast enough to spin the blade.',
                    reason: 'A heavier spinner is needed for long casts in the wind.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Let the waves impart a natural rocking motion.',
                    reason: 'The wind provides camouflage for an aggressive presentation.'
                }],
                colors: ['Gold', 'Silver'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Windy Shorelines',
                    description: 'Cast heavy spoons from shore, letting them flutter down through the water column before retrieving.'
                },
                tips: [{
                    title: 'Let it Sink',
                    description: 'After casting, let your spoon flutter down through the water column.'
                }, {
                    title: 'Keep a Bow in Your Line',
                    description: 'A slight bow in your line will help you detect subtle bites.'
                }, {
                    title: 'Point Your Rod Tip Down',
                    description: 'This helps keep your lure in the water.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Stationary on bottom.',
                    reason: 'Scent based.'
                }, {
                    name: 'Scented Baits',
                    technique: 'Let it sit.',
                    reason: 'Strong smell.'
                }, {
                    name: 'Live Minnow',
                    technique: 'Fish under a float in a calm bay.',
                    reason: 'The movement and scent can attract fish.'
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip with a wax worm and let it sit.',
                    reason: 'A bright, smelly, and stationary target.'
                }],
                colors: ['Hot Pink', 'Orange'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Calm Side of Lake',
                    description: 'In muddy water, it\'s often better to find the side of the lake protected from the wind and fish scented baits.'
                },
                tips: [{
                    title: 'Fish the Calm Side',
                    description: 'In muddy water, it\'s often better to find the side of the lake protected from the wind.'
                }, {
                    title: 'Stay Put',
                    description: 'Find a likely spot and let your scented bait do the work.'
                }, {
                    title: 'Use Multiple Rods',
                    description: 'Where legal, use multiple rods to present different baits.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            },
            cool: {
                lures: [{
                    name: 'Live Minnow',
                    technique: 'Under a float.',
                    reason: 'Scent and action.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Slow retrieve.',
                    reason: 'Vibration.'
                }, {
                    name: 'Worms',
                    technique: 'Fish a large bunch on the bottom.',
                    reason: 'A big target that relies on scent.'
                }, {
                    name: 'Scented Jigs',
                    technique: 'Let it sit on the bottom with occasional twitches.',
                    reason: 'A bright, scented offering for very tough conditions.'
                }],
                colors: ['Chartreuse', 'White'],
                gear: gearMap.rainbowtrout,
                location: {
                    title: 'Protected Points & Drop-offs',
                    description: 'These are tough conditions. Find structure on the calm side of the lake and be patient.'
                },
                tips: [{
                    title: 'Find Structure',
                    description: 'Even in muddy water, trout will relate to points and drop-offs.'
                }, {
                    title: 'Be Patient',
                    description: 'These are tough conditions, but can produce big fish.'
                }, {
                    title: 'Go Big and Bright',
                    description: 'Use the largest and brightest lure you have.'
                }, {
                    title: 'Gentle Hookset',
                    description: 'Trout have soft mouths. A gentle lift of the rod is all you need.'
                }]
            }
        }
    }
},
             laketrout: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Trolling Spoons',
                    technique: 'Use downriggers to target the thermocline.',
                    reason: 'Trout will be suspended in deep, cool water.'
                }, {
                    name: 'Flutter Spoons',
                    technique: 'Find suspended bait and fish vertically.',
                    reason: 'Mimics dying cisco or alewife.'
                }, {
                    name: 'Dodger/Flasher Rig',
                    technique: 'Troll with a fly or spoon trailer for maximum attraction.',
                    reason: 'The flash and vibration can draw fish in from a great distance.'
                }, {
                    name: 'Bondy Bait',
                    technique: 'Jig vertically with sharp rips when marking fish deep.',
                    reason: 'A heavy, large-profile bait for targeting big, aggressive trout.'
                }], //
                colors: ['Smelt', 'Chrome', 'White'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Deep Open Water (Thermocline)',
                    description: 'Lake trout will suspend over the deepest parts of the lake to find cool, oxygenated water. Use electronics to find bait and the thermocline.'
                }, //
                tips: [{
                    title: 'Find the Thermocline',
                    description: 'Your fish finder will show a distinct line where the water temperature changes. This is the zone to target.'
                }, {
                    title: 'Downrigger Trolling',
                    description: 'Downriggers are essential for keeping your lures at a precise depth for long periods.'
                }, {
                    title: 'Match the Hatch',
                    description: 'Use spoons that match the size and color of local baitfish like ciscoes or smelt.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'White Tube Jigs',
                    technique: 'Jig vertically on the bottom.',
                    reason: 'Imitates a sculpin or other bottom-dweller.',
                    isPrimary: true
                }, {
                    name: 'Jigging Spoons',
                    technique: 'Use sharp snaps of the rod tip.',
                    reason: 'Triggers reaction strikes from aggressive fish.'
                }, {
                    name: 'Swimbait',
                    technique: 'Use a heavy jighead and hop it on the bottom.',
                    reason: 'A realistic baitfish profile for targeting fish keyed in on smelt or cisco.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use sharp rips to make it dart off the bottom.',
                    reason: 'The erratic, circular swimming action is a powerful trigger for curious lake trout.'
                }], //
                colors: ['White', 'Silver', 'Glow'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Deep Humps and Points (40-100ft)',
                    description: 'In cooler water, lake trout will relate to deep structure like humps, points, and saddles. Use your electronics to find them before dropping.'
                }, //
                tips: [{
                    title: 'Stay Vertical',
                    description: 'Position your boat directly over the fish or structure for the best presentation.'
                }, {
                    title: 'Pound the Bottom',
                    description: 'Let your tube jig hit the bottom to stir up silt, attracting curious trout.'
                }, {
                    title: 'Watch For "Up-Bites"',
                    description: 'Often a trout will hit your lure on the fall, and your line will suddenly go slack. Set the hook!'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Glow-in-the-Dark Spoons',
                    technique: 'Troll slowly near structure.',
                    reason: 'Glow patterns can be seen in low visibility.'
                }, {
                    name: 'Large, Vibrating Lures',
                    technique: 'Use a lure that thumps, like a large spinner.',
                    reason: 'Fish will find it by feel.'
                }, {
                    name: 'Dodger/Flasher Rig',
                    technique: 'The thump and flash is essential for getting noticed in dirty water.',
                    reason: 'The primary attractor in low-visibility trolling situations.'
                }, {
                    name: 'Scented Jigs',
                    technique: 'Tip a large glow jig with sucker meat.',
                    reason: 'Combines sight (glow) with a strong scent trail.'
                }], //
                colors: ['Glow', 'Chartreuse'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Deep River Mouths or Inflows',
                    description: 'This is a very tough condition. Your best bet is to find an area where clearer water may be flowing in, creating an edge.'
                }, //
                tips: [{
                    title: 'Charge Your Glow Lures',
                    description: 'Use a camera flash or UV light to get the maximum glow from your lures.'
                }, {
                    title: 'Slow Your Trolling Speed',
                    description: 'Troll slower than usual (1.0-1.5 mph) to give fish a chance to find your lure.'
                }, {
                    title: 'Use Scent',
                    description: 'Adding a piece of sucker meat or a commercial scent can help tremendously.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Glow Tube Jigs',
                    technique: 'Jig slowly with scent.',
                    reason: 'Combines sight (glow) and smell.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Vertical jig with sharp rips.',
                    reason: 'Maximum vibration to call in fish.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use a bright, noisy model.',
                    reason: 'The erratic action and sound helps fish find it.'
                }, {
                    name: 'Heavy Spoons with Rattles',
                    technique: 'Jig aggressively to create noise.',
                    reason: 'The added sound is a major advantage in dirty water.'
                }], //
                colors: ['Glow', 'Chartreuse', 'Gold'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Deep Rock Piles',
                    description: 'Fish will hold very tight to structure in these conditions. Repetitive drops on a marked location are key.'
                }, //
                tips: [{
                    title: 'Vibration is Key',
                    description: 'Use a blade bait or other lure that creates a lot of vibration.'
                }, {
                    title: 'Be Persistent',
                    description: 'You may have to drop on the same spot 20 times to get a bite.'
                }, {
                    title: 'Use a Heavy Jig',
                    description: 'A heavy jig will help you maintain contact with the bottom and feel subtle bites.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Trolling Spoons',
                    technique: 'Fish higher in the water column.',
                    reason: 'Cloud cover makes trout more active and willing to rise.'
                }, {
                    name: 'Large Swimbaits',
                    technique: 'Cast over deep points.',
                    reason: 'A big, slow meal for an active predator.'
                }, {
                    name: 'Dodger/Flasher Rig',
                    technique: 'Troll faster than usual over structure.',
                    reason: 'Covers water to find aggressive, hunting fish.'
                }, {
                    name: 'Flutter Spoons',
                    technique: 'Let it fall on a slack line over deep water.',
                    reason: 'Mimics a large, dying baitfish that big lakers can\'t resist.'
                }], //
                colors: ['Smelt', 'White', 'Blue'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Suspended Over Deep Structure',
                    description: 'Cloudy weather makes lake trout more aggressive. They will rise higher off the bottom and suspend over points and humps to hunt.'
                }, //
                tips: [{
                    title: 'Fish are Hunting',
                    description: 'Cloud cover is a prime time. Fish are more active and willing to chase.'
                }, {
                    title: 'Raise Your Downriggers',
                    description: 'Try running your spoons 10-20 feet higher than you would on a sunny day.'
                }, {
                    title: 'Long Casts',
                    description: 'When casting swimbaits, make long casts past the structure and retrieve it slowly through the strike zone.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'White Tube Jigs',
                    technique: 'Drag or hop on structure.',
                    reason: 'Prime time for jigging.',
                    isPrimary: true
                }, {
                    name: 'Large Spoons',
                    technique: 'Cast and retrieve over deep points.',
                    reason: 'Covers water to find active fish.'
                }, {
                    name: 'Swimbait',
                    technique: 'Cast a large swimbait on a heavy head.',
                    reason: 'Targets the largest, most aggressive fish on the structure.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use an aggressive snap-jigging cadence.',
                    reason: 'The darting, unpredictable action is a major trigger in prime conditions.'
                }], //
                colors: ['White', 'Chartreuse', 'Smelt'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Tops of Deep Structure',
                    description: 'This is the best time to be lake trout fishing. They will move to the very tops of deep humps and points to feed.'
                }, //
                tips: [{
                    title: 'Prime Time Jigging',
                    description: 'Cloudy and cool is a perfect storm for an active jig bite.'
                }, {
                    title: 'Use Your Electronics',
                    description: 'Find fish on your graph and drop right on their heads.'
                }, {
                    title: 'Heavier is Better',
                    description: 'Use a heavy tube jig (1-2 oz) to get down fast and maintain bottom contact.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Glow Spoons',
                    technique: 'Troll with a dodger or flasher.',
                    reason: 'The flasher adds vibration and flash.'
                }, {
                    name: 'Scented Jigs',
                    technique: 'Fish vertically and slowly.',
                    reason: 'Scent is paramount.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Troll slowly or jig vertically.',
                    reason: 'The intense vibration can be detected from a long way off.'
                }, {
                    name: 'Large, Vibrating Lures',
                    technique: 'Troll a large crankbait or spinner.',
                    reason: 'Pushes a lot of water and creates a large profile.'
                }], //
                colors: ['Glow', 'Chartreuse'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Find the Clearest Deep Water',
                    description: 'Use your electronics and visual cues to find the deepest basin with the clearest available water. Trolling is most effective.'
                }, //
                tips: [{
                    title: 'Add a Dodger',
                    description: 'A large dodger or flasher in front of your spoon adds crucial vibration and flash.'
                }, {
                    title: 'Cover Water Slowly',
                    description: 'Troll slowly to give fish time to home in on your lure.'
                }, {
                    title: 'Check Lures Often',
                    description: 'Debris in muddy water can foul your hooks. Check them every 15 minutes.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Blade Baits',
                    technique: 'Vertical jigging.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Glow Jigs with Sucker Meat',
                    technique: 'Deadstick near bottom.',
                    reason: 'The ultimate combo of sight, sound, and smell.'
                }, {
                    name: 'Heavy Spoons with Rattles',
                    technique: 'Jig aggressively on the bottom.',
                    reason: 'The added sound helps fish locate the bait.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use a loud, brightly colored model.',
                    reason: 'Combines sound and erratic action for tough conditions.'
                }], //
                colors: ['Gold', 'Chartreuse', 'Glow'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Sharp Deep Ledges',
                    description: 'Fish will hold tight to sharp ledges. Use your trolling motor to slowly work along the edge while jigging.'
                }, //
                tips: [{
                    title: 'Tip with Bait',
                    description: 'Tip your glow jig with a small piece of sucker or herring for extra scent.'
                }, {
                    title: 'Use Braided Line',
                    description: 'Braid will help you feel the very subtle bites in deep, muddy water.'
                }, {
                    title: 'Be Patient',
                    description: 'This is a tough bite, but it can produce the biggest fish.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Flutter Spoons',
                    technique: 'Jig over deep structure.',
                    reason: 'Rain can trigger a feeding response.'
                }, {
                    name: 'Trolling Spoons',
                    technique: 'Vary trolling depths.',
                    reason: 'Find where the active fish are.'
                }, {
                    name: 'Swimbait',
                    technique: 'Cast or troll a large swimbait.',
                    reason: 'A big profile for active, hunting fish.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Jig aggressively for suspended fish.',
                    reason: 'The darting action triggers fish activated by the weather change.'
                }], //
                colors: ['Smelt', 'Blue', 'White'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Deep Structure & Ledges',
                    description: 'Rain and clouds will make fish more active. They may suspend higher or move to the edges of structure to feed.'
                }, //
                tips: [{
                    title: 'Rain Can Trigger a Bite',
                    description: 'A steady rain often improves the bite for deepwater predators.'
                }, {
                    title: 'Watch Your Graph',
                    description: 'Pay close attention to your electronics to see if fish are suspending higher than normal.'
                }, {
                    title: 'Vary Your Speed',
                    description: 'S-turns in your trolling path can speed up and slow down lures, triggering strikes.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jigging Spoons',
                    technique: 'Aggressive jigging.',
                    reason: 'The bite is on.',
                    isPrimary: true
                }, {
                    name: 'White Tube Jigs',
                    technique: 'Fish near bottom.',
                    reason: 'Classic and effective.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Use sharp, upward rips.',
                    reason: 'The strong vibration is perfect for aggressive, feeding fish.'
                }, {
                    name: 'Swimbait',
                    technique: 'Cast and retrieve through schools of fish.',
                    reason: 'A realistic offering for fish keyed in on bait.'
                }], //
                colors: ['White', 'Chrome', 'Smelt'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Wind-Blown Points and Humps',
                    description: 'Rain often comes with wind. The wind will create current and concentrate baitfish on deep structure.'
                }, //
                tips: [{
                    title: 'Fish the Windy Side',
                    description: 'Even in deep water, the wind-blown side of a hump will be more productive.'
                }, {
                    title: 'Use a Drift Sock',
                    description: 'A drift sock will slow your drift and allow for a more vertical presentation.'
                }, {
                    title: 'Aggressive Jigging',
                    description: 'Use sharp, fast rips of your rod to make the spoon dart erratically.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Dodger and Fly/Spoon',
                    technique: 'Slow troll.',
                    reason: 'Maximum attraction in low vis.'
                }, {
                    name: 'Scented Glow Jigs',
                    technique: 'Fish the clearest water.',
                    reason: 'The best option in a tough situation.'
                }, {
                    name: 'Large Trolling Spoons',
                    technique: 'Use bright, glow patterns and troll slowly.',
                    reason: 'A large, visible profile that can be found in the murk.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Troll slowly or jig vertically.',
                    reason: 'The heavy vibration helps fish find the lure by feel.'
                }], //
                colors: ['Glow', 'Chartreuse'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Mouths of Inflowing Rivers',
                    description: 'The current from an inflow will create a seam of slightly clearer water. Fish will stack up on this edge.'
                }, //
                tips: [{
                    title: 'Fish the Seam',
                    description: 'Look for the edge where muddy and clearer water mix. This is a fish magnet.'
                }, {
                    title: 'Go Big and Gaudy',
                    description: 'Use the largest dodger and brightest lure in your box.'
                }, {
                    title: 'Be Prepared for Debris',
                    description: 'Rain washes in leaves and branches. Check your lines often.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Blade Baits',
                    technique: 'Vertical jig.',
                    reason: 'Heavy vibration.'
                }, {
                    name: 'Glow Jigs with Bait',
                    technique: 'Let it sit.',
                    reason: 'Patience game.'
                }, {
                    name: 'Heavy Spoons with Rattles',
                    technique: 'Jig with sharp, loud snaps.',
                    reason: 'The combination of sound and vibration is key.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use a bright, rattling model.',
                    reason: 'The erratic action and sound can trigger a reaction.'
                }], //
                colors: ['Gold', 'Orange', 'Glow'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Calm, Deep Holes',
                    description: 'Find the deepest water that is out of the main current. Fish will hunker down here.'
                }, //
                tips: [{
                    title: 'Anchor and Wait',
                    description: 'Find a promising spot and be patient. This is not a fast bite.'
                }, {
                    title: 'Sharp Hooks are a Must',
                    description: 'Bites can be very subtle. Make sure your hooks are sticky sharp.'
                }, {
                    title: 'Use a High-Vis Line',
                    description: 'High-visibility braided line will help you detect subtle "line-jump" bites.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Trolling Spoons',
                    technique: 'Use snap weights to get deep.',
                    reason: 'Effective way to cover water in wind.'
                }, {
                    name: 'Bondy Bait',
                    technique: 'Controlled drift and jigging.',
                    reason: 'Heavy bait for deep water.'
                }, {
                    name: 'Heavy Tube Jigs',
                    technique: 'Use a heavy 1-2 oz jig for drifting.',
                    reason: 'Keeps you in contact with the bottom in deep water.'
                }, {
                    name: 'Flutter Spoons',
                    technique: 'Use a heavy model for vertical jigging on a drift.',
                    reason: 'The large size and falling action is perfect for big, aggressive trout.'
                }], //
                colors: ['Smelt', 'White'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Wind-Drifted Deep Flats',
                    description: 'Use the wind to your advantage. A controlled drift with heavy jigs or by trolling allows you to cover vast deep flats where trout roam.'
                }, //
                tips: [{
                    title: 'Use a Drift Sock',
                    description: 'A large drift sock is essential to slow your boat down for an effective presentation.'
                }, {
                    title: 'Use Snap Weights',
                    description: 'Instead of downriggers, snap weights are an easy way to get lures deep while drifting or trolling.'
                }, {
                    title: 'Point Your Rod at the Lure',
                    description: 'This helps you maintain contact and feel bites in the waves.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Heavy Tube Jigs',
                    technique: 'Drift and jig.',
                    reason: 'Keeps you in contact with the bottom.'
                }, {
                    name: 'Jigging Raps',
                    technique: 'Pound the bottom on a drift.',
                    reason: 'The erratic action triggers bites.'
                }, {
                    name: 'Swimbait',
                    technique: 'Use a heavy 1-2 oz head to stay down.',
                    reason: 'A large, realistic profile for trophy hunting in the wind.'
                }, {
                    name: 'Jigging Spoons',
                    technique: 'Use a heavy spoon for a controlled drift.',
                    reason: 'The flash and flutter is effective for attracting fish in waves.'
                }], //
                colors: ['White', 'Chartreuse', 'Smelt'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Windy Side of Deep Structure',
                    description: 'Wind concentrates baitfish and microorganisms, and the entire food chain follows. Find deep points and humps getting hit by wind.'
                }, //
                tips: [{
                    title: 'Heavier is Better',
                    description: 'Use the heaviest jig you can get away with (1.5 - 3 oz) to maintain bottom contact.'
                }, {
                    title: 'Braid is a Must',
                    description: 'Low-stretch braid is crucial for feeling bites and setting the hook in deep, windy water.'
                }, {
                    title: 'Controlled Drifting',
                    description: 'Use your trolling motor to keep your drift speed and direction consistent over the structure.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Large Trolling Spoons',
                    technique: 'Troll the windy bank.',
                    reason: 'The warmest, most oxygenated water is here.'
                }, {
                    name: 'Vibrating Lures',
                    technique: 'Troll slowly.',
                    reason: 'Helps fish find it.'
                }, {
                    name: 'Dodger/Flasher Rig',
                    technique: 'Troll a large, thumping flasher.',
                    reason: 'The best option for attracting fish in windy, muddy water.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Troll a large, deep-diving, rattling crankbait.',
                    reason: 'The noise and wide wobble can call in active fish.'
                }], //
                colors: ['Glow', 'Chartreuse', 'Orange'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Wind-Blown Shoreline Drop-offs',
                    description: 'The wind will push warmer surface water toward one side of the lake. Find the sharpest drop-off on that side and troll it.'
                }, //
                tips: [{
                    title: 'Follow the Wind',
                    description: 'Fish the side of the lake the wind is blowing into. It will have the most active fish.'
                }, {
                    title: 'Use Planer Boards',
                    description: 'Planer boards help get your lures out to the side of the boat and away from the noise.'
                }, {
                    title: 'Short Leaders',
                    description: 'In muddy water, a shorter leader from your dodger to your lure provides a more erratic action.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Blade Baits',
                    technique: 'Jig vertically.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Heavy Spoons with Rattles',
                    technique: 'Jig aggressively.',
                    reason: 'Sound can attract fish.'
                }, {
                    name: 'Glow Jigs with Bait',
                    technique: 'Deadstick on the bottom.',
                    reason: 'The ultimate combination of sight, smell, and subtle action.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use a loud, rattling model.',
                    reason: 'The sound and darting action can trigger a bite in the toughest conditions.'
                }], //
                colors: ['Gold', 'Firetiger', 'Glow'], //
                gear: gearMap.laketrout, //
                location: {
                    title: 'Calm Side Deep Structure',
                    description: 'This is the toughest scenario. Find a deep hump on the calm side of the lake and be extremely patient, jigging vertically.'
                }, //
                tips: [{
                    title: 'Fish the Calm Side',
                    description: 'In these conditions, fish will often seek refuge from the wind and waves.'
                }, {
                    title: 'Electronics are Everything',
                    description: 'Do not start fishing until you have marked fish on your graph.'
                }, {
                    title: 'Make Repeated Drops',
                    description: 'It may take dozens of drops on a fish\'s head to get a reaction.'
                }, {
                    title: 'Fight with Patience',
                    description: 'Lake trout are strong. Dont horse them in; let the drag do the work.'
                }] //
            }
        }
    }
},
           walleye: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Bottom Bouncer Rig',
                    technique: 'Slow troll with worm harness.',
                    reason: 'Covers deep structure effectively.',
                    isPrimary: true
                }, {
                    name: 'Lindy Rig',
                    technique: 'Slowly drift with live bait.',
                    reason: 'Natural presentation for wary fish.'
                }, {
                    name: 'Drop Shot',
                    technique: 'Fish vertically for suspended fish or on deep structure.',
                    reason: 'A finesse presentation that keeps the bait in the strike zone.'
                }, {
                    name: 'Crankbait',
                    technique: 'Troll deep-diving models along structure edges.',
                    reason: 'Covers water to find active fish suspended off the bottom.'
                }], //
                colors: ['Chartreuse', 'Orange'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Deep Humps & Points',
                    description: 'Walleye will be on the deepest structure they can find. Look for deep humps and points in 20-40+ feet of water.'
                }, //
                tips: [{
                    title: 'Go Deep',
                    description: 'Walleye will be on the deepest structure they can find.'
                }, {
                    title: 'Slow Trolling',
                    description: 'Troll just fast enough to make the blades spin.'
                }, {
                    title: 'Use Your Electronics',
                    description: 'This is not the time for casting; use your fish finder to locate deep schools.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jig with a Minnow',
                    technique: 'Vertical jigging.',
                    reason: 'Classic cold-water walleye tactic.',
                    isPrimary: true
                }, {
                    name: 'Blade Bait',
                    technique: 'Sharp rips off the bottom.',
                    reason: 'Triggers reaction strikes.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Snap it aggressively off the bottom and let it glide down.',
                    reason: 'The erratic darting action triggers reaction strikes from neutral fish.'
                }, {
                    name: 'Jigging Spoons',
                    technique: 'Use short, sharp hops off the bottom.',
                    reason: 'The flash and flutter on the fall mimics a dying baitfish.'
                }], //
                colors: ['White', 'Silver'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Deep Holes & Sharp Drop-offs',
                    description: 'Position your boat directly over fish marking in deep holes or on sharp ledges and jig vertically.'
                }, //
                tips: [{
                    title: 'Vertical Jigging',
                    description: 'Position your boat directly over fish and jig vertically.'
                }, {
                    title: 'Subtle Bites',
                    description: 'Walleye bites can be very light. Use a sensitive rod.'
                }, {
                    title: 'Stay Vertical',
                    description: 'Keep your line as close to a 90-degree angle as possible.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Jig with a Minnow',
                    technique: 'Fish slowly in cover.',
                    reason: 'Big, smelly bait is easy to find.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Slow retrieve.',
                    reason: 'Bright color and vibration.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Rip it aggressively through cover.',
                    reason: 'The intense vibration is key for getting noticed in muddy water.'
                }, {
                    name: 'Lindy Rig',
                    technique: 'Drift a large crawler or leech slowly through cover.',
                    reason: 'A pure scent-based presentation for tough, low-visibility conditions.'
                }], //
                colors: ['Black', 'Orange'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Tight to Wood or Rock Cover',
                    description: 'Walleye will use any available wood or rock as an ambush point. Fish slowly and deliberately.'
                }, //
                tips: [{
                    title: 'Big and Smelly',
                    description: 'Use the largest minnow you can find and hook it lightly to keep it lively.'
                }, {
                    title: 'Fish Tight to Cover',
                    description: 'Walleye will use any available wood or rock as an ambush point.'
                }, {
                    title: 'Go Slow and Deliberate',
                    description: 'Pick apart cover slowly and methodically.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Blade Bait',
                    technique: 'Aggressive rips.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Rippin\' Rap',
                    technique: 'Vertical jigging.',
                    reason: 'Loud rattles.'
                }, {
                    name: 'Jig with a Minnow',
                    technique: 'Use a brightly colored jig and large minnow.',
                    reason: 'Combines bright color, scent, and a subtle action for lethargic fish.'
                }, {
                    name: 'Rattling Crankbait',
                    technique: 'Slowly grind and bounce off hard bottom.',
                    reason: 'The noise and deflection can trigger bites when a vertical presentation won\'t.'
                }], //
                colors: ['Gold', 'Chartreuse'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Hard Bottom Areas',
                    description: 'Gravel and rock will hold heat and attract walleye. Use loud, vibrating lures to call them in.'
                }, //
                tips: [{
                    title: 'Loud and Proud',
                    description: 'Vibration is the only way fish will find your lure in these conditions.'
                }, {
                    title: 'Fish the Hard Bottom',
                    description: 'Gravel and rock will hold heat and attract walleye.'
                }, {
                    title: 'Sharp Rips',
                    description: 'Use an aggressive, sharp rip of the rod to make the lure vibrate.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Swimbait',
                    technique: 'Slow, steady retrieve.',
                    reason: 'Mimics cruising baitfish.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Erratic retrieve.',
                    reason: 'Triggers chasing fish.'
                }, {
                    name: 'Slip Bobber Rig',
                    technique: 'Anchor upwind and drift a leech over structure.',
                    reason: 'An incredibly effective way to target walleye holding on specific spots.'
                }, {
                    name: 'Topwater Spook',
                    technique: 'Use a walk-the-dog retrieve over shallow rocks at dawn/dusk.',
                    reason: 'An exciting way to catch aggressive walleye feeding shallow.'
                }], //
                colors: ['Natural Shad', 'Perch'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Suspended over Structure',
                    description: 'Cloudy skies make walleye more aggressive. They will suspend off of points and humps to chase schools of bait.'
                }, //
                tips: [{
                    title: 'Fish are Hunting',
                    description: 'Cloudy skies make walleye more aggressive. They will suspend and chase baits.'
                }, {
                    title: 'Erratic Retrieve',
                    description: 'Use a jerk-jerk-pause retrieve to mimic a dying baitfish.'
                }, {
                    title: 'Target Suspended Fish',
                    description: 'Use your electronics to find fish suspended off of structure.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jig with a Minnow',
                    technique: 'Cast to structure.',
                    reason: 'Prime time for active walleye.',
                    isPrimary: true
                }, {
                    name: 'Swimbait',
                    technique: 'Slow roll near bottom.',
                    reason: 'Realistic profile.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Use a twitch-twitch-pause retrieve along drop-offs.',
                    reason: 'A deadly presentation for aggressive, cool-water walleye.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Cast and retrieve over shallow flats and points.',
                    reason: 'Covers water quickly to find active schools.'
                }], //
                colors: ['White', 'Chartreuse'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Shallow Structure',
                    description: 'This is the best time to be walleye fishing. They will be shallower and actively feeding. Cast to rock piles and points.'
                }, //
                tips: [{
                    title: 'Prime Time',
                    description: 'This is the best time to be walleye fishing. They will be shallower and actively feeding.'
                }, {
                    title: 'Cast to Structure',
                    description: 'Cast your jig and swimbait to rock piles and points instead of just fishing vertically.'
                }, {
                    title: 'Slow Roll the Swimbait',
                    description: 'A slow and steady retrieve is best for the swimbait.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Jig and Minnow',
                    technique: 'Fish slowly.',
                    reason: 'Scent and profile.'
                }, {
                    name: 'Crankbait',
                    technique: 'Use loud rattles.',
                    reason: 'Noise is key.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Slow-roll a large Colorado blade.',
                    reason: 'The intense vibration helps fish find it in dirty water.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Steady retrieve with a scented trailer.',
                    reason: 'A different vibration that combines well with scent.'
                }], //
                colors: ['Chartreuse', 'Orange'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'River Inflows',
                    description: 'Any incoming water will be clearing up the water and bringing in food. Fish will stack up here.'
                }, //
                tips: [{
                    title: 'Bright Colors',
                    description: 'Use the brightest, most obnoxious colors you have.'
                }, {
                    title: 'Fish the Inflows',
                    description: 'Any incoming water will be clearing up the water and bringing in food.'
                }, {
                    title: 'Add a Rattle',
                    description: 'Use the loudest crankbait you can find.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Rippin\' Rap',
                    technique: 'Yo-yo retrieve.',
                    reason: 'Maximum noise.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Vertical jigging.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Use a slow retrieve with pauses.',
                    reason: 'A different sound profile that can trigger bites.'
                }, {
                    name: 'Jig and Minnow',
                    technique: 'Use a large, scented plastic trailer.',
                    reason: 'Combines scent, vibration, and a slow fall.'
                }], //
                colors: ['Gold', 'Firetiger'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Current Areas',
                    description: 'Find any current from wind or inflows. The fish will be using it as an ambush point.'
                }, //
                tips: [{
                    title: 'Make Some Noise',
                    description: 'Rattling lures are essential for calling fish in.'
                }, {
                    title: 'Fish Slower',
                    description: 'Slow your retrieve down to give fish a chance to find your lure.'
                }, {
                    title: 'Target Current',
                    description: 'Find any current from wind or inflows.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Erratic retrieve.',
                    reason: 'Rain activates the bite.'
                }, {
                    name: 'Slip Bobber with Leech',
                    technique: 'Fish over structure.',
                    reason: 'Natural presentation.'
                }, {
                    name: 'Swimbait',
                    technique: 'Cast and retrieve over shallow rocks.',
                    reason: 'A great imitation for walleye hunting shallow.'
                }, {
                    name: 'Topwater Plopper',
                    technique: 'Steady retrieve at night.',
                    reason: 'Big walleye will crush a topwater at night in the rain.'
                }], //
                colors: ['Natural Shad', 'Black'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Shallow Flats & Rock',
                    description: 'Walleye will move surprisingly shallow to feed in the rain, especially in the evening. Be stealthy.'
                }, //
                tips: [{
                    title: 'Rain Activates Them',
                    description: 'Rain often triggers a hot walleye bite, especially in the evening.'
                }, {
                    title: 'Fish the Shallows',
                    description: 'Walleye will move surprisingly shallow to feed in the rain.'
                }, {
                    title: 'Stay Quiet',
                    description: 'Shallow walleye are spooky. Avoid making noise in the boat.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jig with a Minnow',
                    technique: 'Drift and jig.',
                    reason: 'Live bait is king.',
                    isPrimary: true
                }, {
                    name: 'Lindy Rig',
                    technique: 'Slowly drift live bait.',
                    reason: 'Classic walleye catcher.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Use a slow lift-and-fall retrieve while drifting.',
                    reason: 'The vibration can trigger bites from more aggressive fish.'
                }, {
                    name: 'Bottom Bouncer',
                    technique: 'Drift with a slow-death rig or spinner harness.',
                    reason: 'Keeps the bait in the strike zone and covers water.'
                }], //
                colors: ['White', 'Chartreuse'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Large Flats (Drifting)',
                    description: 'Use the wind to slowly drift over large flats while jigging a live minnow. This is a deadly technique.'
                }, //
                tips: [{
                    title: 'Live Bait is King',
                    description: 'In cool, rainy conditions, it\'s hard to beat a live minnow or leech.'
                }, {
                    title: 'Drift and Jig',
                    description: 'Use the wind to slowly drift over flats while jigging.'
                }, {
                    title: 'Let Them Take It',
                    description: 'With a Lindy rig, give the fish a few seconds to eat the bait before setting the hook.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Jig and Minnow',
                    technique: 'Use a large minnow.',
                    reason: 'Big target.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Loud rattles.',
                    reason: 'Noise maker.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Slow-roll a thumping Colorado blade.',
                    reason: 'Maximum vibration to get noticed in the current.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Jig vertically in current seams.',
                    reason: 'The heavy vibration is a key trigger in dirty water.'
                }], //
                colors: ['Black', 'Chartreuse'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Current Bottlenecks',
                    description: 'Rain creates current. Find any bottleneck or point where current is concentrated and fish will stack up.'
                }, //
                tips: [{
                    title: 'Fish the Current',
                    description: 'Rain creates current. Find any bottleneck or point where current is concentrated.'
                }, {
                    title: 'Big Minnows',
                    description: 'Use a large minnow to present a bigger target.'
                }, {
                    title: 'Stay Stationary',
                    description: 'Anchor your boat and let the fish come to you.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Blade Bait',
                    technique: 'Vertical jigging.',
                    reason: 'Heavy vibration.'
                }, {
                    name: 'Rippin\' Rap',
                    technique: 'Aggressive rips.',
                    reason: 'Loud rattles.'
                }, {
                    name: 'Jig with a Minnow',
                    technique: 'Use a large, brightly-colored plastic and scent.',
                    reason: 'A slow-moving but highly visible and smelly option.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Yo-yo retrieve in calmer areas.',
                    reason: 'A different sound and vibration profile to trigger inactive fish.'
                }], //
                colors: ['Gold', 'Orange'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Cleanest Water Available',
                    description: 'Even a small area of slightly clearer water can hold all the fish. Be patient.'
                }, //
                tips: [{
                    title: 'Vertical Jigging',
                    description: 'Position your boat over structure and jig vertically with a loud lure.'
                }, {
                    title: 'Be Patient',
                    description: 'Bites will be few and far between, but they are often big fish.'
                }, {
                    title: 'Find the Cleanest Water',
                    description: 'Even a small area of slightly clearer water can hold all the fish.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Slip Bobber with Leech',
                    technique: 'Drift across flats.',
                    reason: '"Walleye chop" is perfect.'
                }, {
                    name: 'Jig',
                    technique: 'Drift and jig.',
                    reason: 'Covers water.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Burn across windy points.',
                    reason: 'An aggressive presentation for highly active walleye.'
                }, {
                    name: 'Bottom Bouncer',
                    technique: 'Use a controlled drift with a spinner harness.',
                    reason: 'Covers water effectively while keeping your bait near the bottom.'
                }], //
                colors: ['Black', 'White'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Wind-Blown Flats',
                    description: 'The wind-rippled surface is perfect for walleye fishing. Use a drift sock to slow your drift across large flats.'
                }, //
                tips: [{
                    title: '"Walleye Chop"',
                    description: 'The wind-rippled surface is perfect for walleye fishing.'
                }, {
                    title: 'Drift the Flats',
                    description: 'Use a drift sock to slow your drift across large flats.'
                }, {
                    title: 'Long Leaders',
                    description: 'Use a long leader with your slip bobber to keep the bait looking natural.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jig with a Minnow',
                    technique: 'Use a heavy jig.',
                    reason: 'Maintain bottom contact.',
                    isPrimary: true
                }, {
                    name: 'Lindy Rig',
                    technique: 'Slow drift.',
                    reason: 'Natural presentation.'
                }, {
                    name: 'Swimbait',
                    technique: 'Use a heavy jighead and cast to windy points.',
                    reason: 'A larger profile bait to tempt the biggest fish.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Cast parallel to windy banks.',
                    reason: 'Targets aggressive fish chasing bait in the shallow chop.'
                }], //
                colors: ['Chartreuse', 'White'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Windy Side of Structure',
                    description: 'If you find a school, anchor upwind and cast jigs to them. The wind will push bait to them.'
                }, //
                tips: [{
                    title: 'Anchor and Jig',
                    description: 'If you find a school, anchor upwind and cast jigs to them.'
                }, {
                    title: 'Heavier Jigs',
                    description: 'Use a heavier jig than normal to maintain bottom contact in the wind.'
                }, {
                    title: 'Braided Line',
                    description: 'Braid will help you feel bites and cut through the wind.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Jig with a Minnow',
                    technique: 'Use large minnow.',
                    reason: 'Big target, strong scent.'
                }, {
                    name: 'Crankbait',
                    technique: 'Loud rattles, wide wobble.',
                    reason: 'Maximum disturbance.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Slow-roll a large Colorado blade.',
                    reason: 'A strong, thumping vibration that is easy to track.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Retrieve slowly along the windy bank.',
                    reason: 'The hard vibration stands out in the churned-up water.'
                }], //
                colors: ['Chartreuse', 'Orange'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Shallow Windy Structure',
                    description: 'Fish will be surprisingly shallow on windy, muddy days. Target rock piles and points in 5-10 feet.'
                }, //
                tips: [{
                    title: 'Target Shallow Structure',
                    description: 'Fish will be surprisingly shallow on windy, muddy days. Target rock piles and points in 5-10 feet.'
                }, {
                    title: 'Loud Crankbaits',
                    description: 'Use a crankbait with a loud rattle that also has a wide wobble.'
                }, {
                    title: 'Slow Down',
                    description: 'Even though it\'s windy, a slow presentation is key.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Rippin\' Rap',
                    technique: 'Sharp rips.',
                    reason: 'Loud and vibrating.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Heavy lure to maintain contact.',
                    reason: 'Intense vibration.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Cast into the wind and retrieve slowly.',
                    reason: 'Casts well and provides a different sound profile.'
                }, {
                    name: 'Jig',
                    technique: 'Use a heavy jig with a bulky, scented plastic.',
                    reason: 'A slower option for fish unwilling to chase fast-moving baits.'
                }], //
                colors: ['Gold', 'Firetiger'], //
                gear: gearMap.walleye, //
                location: {
                    title: 'Warmest Windy Water',
                    description: 'The wind-blown side of the lake will have slightly warmer water. Use heavy, loud lures to get their attention.'
                }, //
                tips: [{
                    title: 'Find the Warmest Water',
                    description: 'The wind-blown side of the lake will have slightly warmer water.'
                }, {
                    title: 'Sharp Rips',
                    description: 'Use a sharp upward rip of your rod to make your lure vibrate intensely.'
                }, {
                    title: 'Heavy Lures',
                    description: 'Use the heaviest lure you can get away with to maintain contact.'
                }, {
                    title: 'Reel-and-Sweep Hookset',
                    description: 'When you feel a "tick" or weight, reel down and sweep the rod.'
                }] //
            }
        }
    }
},
             pike: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Large Spoons',
                    technique: 'Fast, burning retrieve.',
                    reason: 'Maximum flash in the sun.',
                    isPrimary: true
                }, {
                    name: 'Bucktails',
                    technique: 'Bulge just under the surface.',
                    reason: 'Covers water quickly.'
                }, {
                    name: 'Large Jerkbaits',
                    technique: 'Use aggressive rips and long pauses.',
                    reason: 'A suspending presentation can trigger strikes from pike that follow but won\'t commit to faster baits.'
                }, {
                    name: 'Topwater Plopper',
                    technique: 'Use a steady retrieve to create a loud plopping noise.',
                    reason: 'An exciting way to call up big pike sunning in calm, shallow bays.'
                }], //
                colors: ['Silver', 'White'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Shallow, Calm Bays',
                    description: 'Pike will often sun themselves in shallow, calm bays. Look for them visually before casting.'
                }, //
                tips: [{
                    title: 'Look for Sunbathers',
                    description: 'Pike will often sun themselves in shallow, calm bays.'
                }, {
                    title: 'Use a Wire Leader',
                    description: 'Absolutely essential for pike. Their teeth will cut any other line.'
                }, {
                    title: 'Fast Retrieve',
                    description: 'A fast, burning retrieve will often trigger strikes.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Long pauses.',
                    reason: 'Mimics dying baitfish.'
                }, {
                    name: 'Large Minnow Lures',
                    technique: 'Slow, twitching retrieve.',
                    reason: 'Looks like an easy meal.'
                }, {
                    name: 'Large Swimbaits',
                    technique: 'Use a heavy jighead and slowly roll it along the bottom.',
                    reason: 'A large, realistic profile that looks like an easy meal for a lethargic pike.'
                }, {
                    name: 'Large Spoons',
                    technique: 'Let it flutter down next to drop-offs.',
                    reason: 'The flash and wobble on the fall is a classic trigger for less active pike.'
                }], //
                colors: ['Perch', 'Natural Shad'], //
                gear: gearMap.pike, //
                location: {
                    title: 'First Drop-off Edge',
                    description: 'Pike will sit on the edge of the first drop-off from a shallow flat, waiting to ambush prey.'
                }, //
                tips: [{
                    title: 'Fish the First Drop-off',
                    description: 'Pike will sit on the edge of the first drop-off, waiting to ambush prey.'
                }, {
                    title: 'Long Pauses',
                    description: 'A suspending jerkbait paused for several seconds can be irresistible.'
                }, {
                    title: 'Watch for Followers',
                    description: 'Pike will often follow your lure to the boat. Do a figure-eight.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Large Spinnerbaits',
                    technique: 'Use double Colorado blades.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Noisy Topwater',
                    technique: 'Steady, churning retrieve.',
                    reason: 'Sound is key.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Retrieve steadily through sparse weeds.',
                    reason: 'The hard, thumping vibration is easy for pike to locate in zero visibility.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Use a yo-yo retrieve to create sound and vibration.',
                    reason: 'The loud rattles are a key attractant when fish are hunting by sound.'
                }], //
                colors: ['Black', 'Chartreuse'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Very Shallow Water',
                    description: 'Pike will push into extremely shallow water (1-3 feet) looking for food. Target any cover.'
                }, //
                tips: [{
                    title: 'Vibration and Noise',
                    description: 'Use the biggest, loudest, most obnoxious lure in your box.'
                }, {
                    title: 'Fish Very Shallow',
                    description: 'Pike will push into extremely shallow water looking for food.'
                }, {
                    title: 'Use a Wire Leader!',
                    description: 'Do not forget this! Pike will bite you off every time.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Chatterbaits',
                    technique: 'Slow and loud retrieve.',
                    reason: 'Heavy vibration.'
                }, {
                    name: 'Rattling Lipless Cranks',
                    technique: 'Yo-yo retrieve.',
                    reason: 'Loud rattles.'
                }, {
                    name: 'Big Jig',
                    technique: 'Pitch to cover and drag slowly on the bottom.',
                    reason: 'A large, bulky profile with scent that lethargic fish can find easily.'
                }, {
                    name: 'Large Spinnerbaits',
                    technique: 'Slow-roll a big single Colorado blade for maximum thump.',
                    reason: 'A slow-moving but high-vibration bait for cold, muddy water.'
                }], //
                colors: ['White', 'Red'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Hard Cover Current Breaks',
                    description: 'Pike will use logs and rocks as current breaks and ambush points. Make multiple casts to the same spot.'
                }, //
                tips: [{
                    title: 'Slow and Loud',
                    description: 'Retrieve your lure slowly while still making as much noise as possible.'
                }, {
                    title: 'Target Hard Cover',
                    description: 'Pike will use logs and rocks as current breaks and ambush points.'
                }, {
                    title: 'Make Multiple Casts',
                    description: 'It might take 10 casts to the same spot to get a bite.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Glide Baits',
                    technique: 'Slow, side-to-side action.',
                    reason: 'Big baits for big fish.'
                }, {
                    name: 'Large Swimbaits',
                    technique: 'Methodical retrieve.',
                    reason: 'Looks like an easy meal.'
                }, {
                    name: 'Bucktails',
                    technique: 'Burn them quickly over weed tops and points.',
                    reason: 'A fast-moving lure to trigger reaction strikes from aggressive, hunting pike.'
                }, {
                    name: 'Large Spoons',
                    technique: 'Cast and retrieve with an erratic action.',
                    reason: 'The flash and wobble is highly effective for active fish under cloudy skies.'
                }], //
                colors: ['Sucker', 'Perch'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Weed Edges & Points',
                    description: 'Cloudy weather gives big, wary pike the confidence to eat a large meal. Target prime ambush spots.'
                }, //
                tips: [{
                    title: 'Big Baits for Big Fish',
                    description: 'Cloudy weather gives big, wary pike the confidence to eat a large meal.'
                }, {
                    title: 'Slow and Steady',
                    description: 'Use a slow, methodical retrieve to make your bait look like an easy meal.'
                }, {
                    title: 'Sharp Hooks are a Must',
                    description: 'Make sure your hooks are sticky sharp.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bucktails',
                    technique: 'Fast, burning retrieve.',
                    reason: 'Speed kills.',
                    isPrimary: true
                }, {
                    name: 'Large Minnow Lures',
                    technique: 'Twitch and pause.',
                    reason: 'Classic pike lure.'
                }, {
                    name: 'Large Swimbaits',
                    technique: 'Slowly retrieve with a paddle tail swimbait.',
                    reason: 'A realistic presentation for big, wary pike in cool water.'
                }, {
                    name: 'Glide Bait',
                    technique: 'Use a tap-pause retrieve for a wide, gliding action.',
                    reason: 'Mimics a large, wounded baitfish, an easy meal for a trophy.'
                }], //
                colors: ['Black', 'Silver'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Cabbage Weed Beds',
                    description: 'Find the healthiest, greenest weed beds and burn a bucktail over the top. Figure eight every cast.'
                }, //
                tips: [{
                    title: 'Speed Kills',
                    description: 'A fast, burning retrieve with a bucktail can trigger explosive strikes.'
                }, {
                    title: 'Fish the Cabbage',
                    description: 'Find the healthiest, greenest weed beds.'
                }, {
                    title: 'Figure Eight Every Cast',
                    description: 'Make it a habit. It will get you more fish.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Large Spinnerbaits',
                    technique: 'Use double Colorado blades.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Chatterbaits',
                    technique: 'Steady retrieve.',
                    reason: 'Heavy vibration.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Use the loudest rattling model you have.',
                    reason: 'Sound is a primary attractant in muddy water.'
                }, {
                    name: 'Squarebill Crankbait',
                    technique: 'Crash and deflect off of shallow hard cover.',
                    reason: 'The violent, erratic action triggers reaction strikes.'
                }], //
                colors: ['Chartreuse', 'White', 'Black'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Thickest Available Weeds',
                    description: 'Pike will bury themselves in the thickest weeds available. Use a big, vibrating lure to call them out.'
                }, //
                tips: [{
                    title: 'Double Colorado Blades',
                    description: 'Use a spinnerbait with two Colorado blades for maximum thump.'
                }, {
                    title: 'Fish Tight to Weeds',
                    description: 'Pike will bury themselves in the thickest weeds available.'
                }, {
                    title: 'Go Big',
                    description: 'This is the time for your largest lures.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Rattling Lipless Cranks',
                    technique: 'Slow retrieve.',
                    reason: 'Loudest lure you have.'
                }, {
                    name: 'Big Jigs',
                    technique: 'Pitch to cover.',
                    reason: 'Bulky profile.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Retrieve as slowly as possible while keeping the blade moving.',
                    reason: 'A slow but hard-thumping vibration for lethargic fish.'
                }, {
                    name: 'Large Spinnerbait',
                    technique: 'Slow-roll a big Colorado blade.',
                    reason: 'A different type of vibration that can be worked very slowly.'
                }], //
                colors: ['Red', 'Black'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Baitfish Schools',
                    description: 'If you can find schools of baitfish with your electronics, the pike will be there too. Fish slow.'
                }, //
                tips: [{
                    title: 'Make a Ruckus',
                    description: 'Use the loudest lure you have.'
                }, {
                    title: 'Find the Bait',
                    description: 'If you can find schools of baitfish, the pike will be there too.'
                }, {
                    title: 'Slow it Down',
                    description: 'A slower retrieve is key in cool, muddy water.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Whopper Ploppers',
                    technique: 'Steady retrieve.',
                    reason: 'Rain triggers topwater bites.',
                    isPrimary: true
                }, {
                    name: 'Large Spooks',
                    technique: '"Walk the dog" action.',
                    reason: 'Exciting surface strikes.'
                }, {
                    name: 'Frog',
                    technique: 'Walk over lily pads and slop.',
                    reason: 'A weedless topwater for targeting pike in heavy vegetation.'
                }, {
                    name: 'Bucktails',
                    technique: 'Burn just under the surface to create a wake.',
                    reason: 'An aggressive presentation for highly active, rain-fired pike.'
                }], //
                colors: ['Loon', 'Bone White'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Over Weed Flats',
                    description: 'Rain often puts pike in the mood to crush topwater baits over large weed flats.'
                }, //
                tips: [{
                    title: 'Topwater Excitement',
                    description: 'Rain often puts pike in the mood to crush topwater baits.'
                }, {
                    title: 'Violent Strikes',
                    description: 'Be prepared for some of the most exciting strikes in freshwater.'
                }, {
                    title: 'Wait to Set the Hook',
                    description: 'Wait until you feel the weight of the fish before setting the hook.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Large Swimbaits',
                    technique: 'Match the forage.',
                    reason: 'Realistic profile.'
                }, {
                    name: 'Spoons',
                    technique: 'Let it flutter on the fall.',
                    reason: 'Strikes happen on the fall.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Use an aggressive twitching retrieve.',
                    reason: 'Mimics a wounded baitfish disorganized by the rain.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Slow-roll with willow blades for flash.',
                    reason: 'A classic choice that combines flash and vibration.'
                }], //
                colors: ['Perch', 'Silver'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Main Lake Points',
                    description: 'Pike will use points to ambush schools of bait being disorganized by the rain.'
                }, //
                tips: [{
                    title: 'Match the Forage',
                    description: 'Use lures that look like the local food source.'
                }, {
                    title: 'Let it Fall',
                    description: 'After casting a spoon, let it flutter down. Many strikes happen on the fall.'
                }, {
                    title: 'Target Points',
                    description: 'Pike will use points to ambush schools of bait.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Large Spinnerbaits',
                    technique: 'Slow retrieve.',
                    reason: 'Big profile, big vibration.'
                }, {
                    name: 'Noisy Topwater',
                    technique: 'Steady retrieve.',
                    reason: 'Calls them in.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Use the largest model available with a bulky trailer.',
                    reason: 'A huge profile with a hard, thumping vibration.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Retrieve slowly with pulls and drops.',
                    reason: 'The loudest lure in the box for calling in fish from afar.'
                }], //
                colors: ['Black', 'Chartreuse', 'White'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Shallowest Water Available',
                    description: 'Use the largest profile lure you can cast effectively and fish it slowly in very shallow water.'
                }, //
                tips: [{
                    title: 'Go Big',
                    description: 'Use the largest profile lure you can cast effectively.'
                }, {
                    title: 'Fish Slow',
                    description: 'A slow, steady retrieve helps fish track your lure.'
                }, {
                    title: 'Use Scent',
                    description: 'Add scent to your lures to help fish find them.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Chatterbaits',
                    technique: 'Slow and loud.',
                    reason: 'Heavy vibration.'
                }, {
                    name: 'Rattling Lipless Cranks',
                    technique: 'Yo-yo retrieve.',
                    reason: 'Maximum noise.'
                }, {
                    name: 'Large Spinnerbaits',
                    technique: 'Slow-roll a single large Colorado blade.',
                    reason: 'The slowest and deepest thumping vibration possible.'
                }, {
                    name: 'Big Jig',
                    technique: 'Drag a large, scented jig on the bottom.',
                    reason: 'A slow, scent-based approach for the toughest conditions.'
                }], //
                colors: ['Red', 'Black', 'Blue'], //
                gear: gearMap.pike, //
                location: {
                    title: 'River Inflows',
                    description: 'Rain will create current. Pike will use any inflow to their advantage. Be patient.'
                }, //
                tips: [{
                    title: 'Find the Inflows',
                    description: 'Rain will create current, and pike will use it to their advantage.'
                }, {
                    title: 'Be Patient',
                    description: 'This is a low-percentage game, but the reward can be huge.'
                }, {
                    title: 'Target Structure',
                    description: 'Fish will hold tight to any available cover.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Large Spoons',
                    technique: 'Cast with the wind.',
                    reason: 'Long casts.'
                }, {
                    name: 'Heavy Spinners',
                    technique: 'Fast retrieve.',
                    reason: 'Cuts through wind.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Burn it across windy flats.',
                    reason: 'Casts a mile and the sound attracts fish in the chop.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Use willow blades and retrieve quickly.',
                    reason: 'The flash and speed mimic baitfish being blown around.'
                }], //
                colors: ['Silver', 'White'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Windy Points',
                    description: 'Wind concentrates baitfish on points, and pike will be there to eat them. Use the wind for extra long casts.'
                }, //
                tips: [{
                    title: 'Cast with the Wind',
                    description: 'Use the wind to your advantage to make extra-long casts.'
                }, {
                    title: 'Fish the Windy Points',
                    description: 'Wind concentrates baitfish on points.'
                }, {
                    title: 'Let it Flutter',
                    description: 'Let your spoon flutter in the wind-driven current.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Large Jerkbaits',
                    technique: 'Waves impart natural action.',
                    reason: 'Suspending baits are key.'
                }, {
                    name: 'Swimbaits',
                    technique: 'Use a heavy model.',
                    reason: 'Maintains contact.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Cast with the wind and retrieve steadily.',
                    reason: 'Cuts through the wind and its sound carries well.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Use tandem blades to create flash and vibration.',
                    reason: 'A versatile choice for covering windy shorelines.'
                }], //
                colors: ['Perch', 'Sucker'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Wind-Blown Rocky Shores',
                    description: 'The wind and waves will impart a natural action on a suspending jerkbait. Target rocky shorelines.'
                }, //
                tips: [{
                    title: 'Suspending Baits',
                    description: 'The wind and waves will impart a natural action on a suspending jerkbait.'
                }, {
                    title: 'Heavy is Better',
                    description: 'Use a heavy swimbait to get down in the water column and maintain contact.'
                }, {
                    title: 'Use Your Rod Tip',
                    description: 'Use your rod tip to work the bait, not the reel.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Giant Spinnerbaits',
                    technique: 'Slow roll.',
                    reason: 'Maximum vibration.',
                    isPrimary: true
                }, {
                    name: 'Chatterbaits',
                    technique: 'Steady retrieve.',
                    reason: 'Heavy vibration.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Retrieve just fast enough to feel it vibrate.',
                    reason: 'The loudest bait you can throw in the wind.'
                }, {
                    name: 'Squarebill Crankbait',
                    technique: 'Crash into shallow hard cover.',
                    reason: 'The sound of the deflection is a major trigger.'
                }], //
                colors: ['Chartreuse', 'Black'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Windy Bank',
                    description: 'This is where the most active fish will be. Focus on the shallowest water available.'
                }, //
                tips: [{
                    title: 'Fish the Windy Bank',
                    description: 'This is where the most active fish will be.'
                }, {
                    title: 'Maximum Vibration',
                    description: 'Use a lure that you can feel thumping in your rod tip.'
                }, {
                    title: 'Keep it Shallow',
                    description: 'Focus your efforts on the 1-5 foot depth range.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Rattling Lipless Cranks',
                    technique: 'Loud and slow.',
                    reason: 'Perfect combo.'
                }, {
                    name: 'Big Jigs',
                    technique: 'Pitch to cover.',
                    reason: 'Bulky profile.'
                }, {
                    name: 'Large Spinnerbait',
                    technique: 'Use a large single Colorado blade and retrieve slowly.',
                    reason: 'The best bait for a slow, high-vibration presentation.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Slow-roll along the bottom.',
                    reason: 'The hard thump is easy to track in the wind and dirty water.'
                }], //
                colors: ['Red', 'Gold'], //
                gear: gearMap.pike, //
                location: {
                    title: 'Shallow Bays',
                    description: 'The wind will push warmer water into shallow bays, and pike will follow. Make repetitive casts.'
                }, //
                tips: [{
                    title: 'Target Shallow Bays',
                    description: 'The wind will push warmer water into shallow bays, and pike will follow.'
                }, {
                    title: 'Repetitive Casting',
                    description: 'Make dozens of casts to a likely-looking spot.'
                }, {
                    title: 'Go Loud and Slow',
                    description: 'The perfect combination for these conditions.'
                }, {
                    title: 'Hard, Firm Hookset',
                    description: 'Pike have extremely bony mouths. Use a powerful hookset.'
                }] //
            }
        }
    }
},
              muskie: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Large Bucktails ("Double 10s")',
                    technique: 'Fast, burning retrieve over cover.',
                    reason: 'Triggers reaction strikes from active fish.',
                    isPrimary: true
                }, {
                    name: 'Topwater "Creeper"',
                    technique: 'Slow, gurgling retrieve in calm conditions.',
                    reason: 'Irresistible to big, lazy muskie.'
                }, {
                    name: 'Large Spoons',
                    technique: 'Cast and rip through weed pockets.',
                    reason: 'The flash from a large spoon is a classic trigger for sunny conditions.'
                }, {
                    name: 'Glide Bait',
                    technique: 'Use a slow, side-to-side action along weed edges.',
                    reason: 'A subtle presentation to entice wary muskie in calm, clear water.'
                }], //
                colors: ['Black', 'Silver', 'Gold'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Shallow Weed Flats & Sand Bars',
                    description: 'muskie will sun themselves in shallow areas. A fast-moving bucktail can trigger them, or a slow topwater in calm, low-light periods.'
                }, //
                tips: [{
                    title: 'Figure Eight Every Cast',
                    description: 'This is not optional. A huge percentage of muskie are caught at boatside.'
                }, {
                    title: 'Speed is Your Friend',
                    description: 'A fast retrieve often prevents muskie from getting a good look and encourages a reaction strike.'
                }, {
                    title: 'Heavy Duty Everything',
                    description: 'Your leader, line, rod, and reel must be up to the task.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Large Glide Baits',
                    technique: 'Tap-pause retrieve for a side-to-side glide.',
                    reason: 'Mimics large, dying baitfish.',
                    isPrimary: true
                }, {
                    name: 'Big Soft Plastics ("Bulldawg")',
                    technique: 'Long pulls followed by a drop.',
                    reason: 'Targets deep, lethargic fish.'
                }, {
                    name: 'Large Swimbaits',
                    technique: 'Slowly swim a large paddle tail swimbait near the bottom.',
                    reason: 'A realistic presentation for targeting big, slow-moving fish.'
                }, {
                    name: 'Giant Crankbaits',
                    technique: 'Troll or cast, slowly grinding along deep structure.',
                    reason: 'Gets down deep and presents a massive meal for a cold-water giant.'
                }], //
                colors: ['Sucker', 'Perch', 'Walleye'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Deep Weed Edges & Rocky Points',
                    description: 'muskie will stage on the first deep structure off of spawning flats. These big, slow-moving baits are ideal.'
                }, //
                tips: [{
                    title: 'Master the Glide',
                    description: 'Practice with your glide bait until you get a consistent side-to-side action.'
                }, {
                    title: 'Watch Your Line',
                    description: 'Most strikes on a falling Bulldawg are just a "tick" or your line going slack.'
                }, {
                    title: 'Stay Patient',
                    description: 'This is a game of hours of casting for a few seconds of chaos. Stay focused.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Giant Spinnerbaits',
                    technique: 'Slow roll with massive blades.',
                    reason: 'The most vibration you can create.'
                }, {
                    name: 'Extra Loud Topwater',
                    technique: 'Retrieve with maximum noise.',
                    reason: 'Sound is the only sense they can use.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Use the largest available model with a big trailer.',
                    reason: 'A hard, thumping vibration that can be felt from a long distance.'
                }, {
                    name: 'Giant Crankbaits',
                    technique: 'Use a model with a loud rattle and wide wobble.',
                    reason: 'Pushes a lot of water and creates a large, noisy profile.'
                }], //
                colors: ['Black', 'Chartreuse', 'Orange'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Shallowest Water with Cover',
                    description: 'muskie will push extremely shallow. Focus on any wood or rock cover that can serve as an ambush point.'
                }, //
                tips: [{
                    title: 'Sound is Everything',
                    description: 'Use the largest, loudest, most obnoxious lure in your tackle box.'
                }, {
                    title: 'Fish Slower',
                    description: 'Even with a loud bait, a slow retrieve helps the fish track it down.'
                }, {
                    title: 'Make Multiple Casts',
                    description: 'It might take dozens of casts to a single log to get a muskie to react.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Giant Crankbaits',
                    technique: 'Slow, wide-wobbling retrieve.',
                    reason: 'Big profile and pushes a lot of water.'
                }, {
                    name: 'Big Soft Plastics',
                    technique: 'Slow, bottom-dragging retrieve.',
                    reason: 'Keeps the bait in the strike zone.'
                }, {
                    name: 'Giant Spinnerbaits',
                    technique: 'Slow-roll a massive single Colorado blade.',
                    reason: 'The slowest, deepest thumping bait in your arsenal.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Use the largest, loudest model you can find.',
                    reason: 'The combination of rattles and vibration is key for tough conditions.'
                }], //
                colors: ['Red', 'Black', 'Firetiger'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Hard Bottom Areas & Inflows',
                    description: 'Find any rock or gravel that might hold heat. Also check any area with clearer, incoming water.'
                }, //
                tips: [{
                    title: 'Push Water',
                    description: 'Use a crankbait with a wide, slow wobble that displaces a lot of water.'
                }, {
                    title: 'Add Scent',
                    description: 'In these conditions, adding a strong scent attractant can make a difference.'
                }, {
                    title: 'Patience is Required',
                    description: 'These are the toughest conditions. Be prepared for a long day of casting.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Large Glide Baits',
                    technique: 'Slow, side-to-side action.',
                    reason: 'Big baits for big fish.'
                }, {
                    name: 'Large Swimbaits',
                    technique: 'Methodical retrieve.',
                    reason: 'Looks like an easy meal.'
                }, {
                    name: 'Bucktails',
                    technique: 'Fast, burning retrieve.',
                    reason: 'Covers water quickly to find active, hunting fish.'
                }, {
                    name: 'Topwater Plopper',
                    technique: 'Steady retrieve to create surface commotion.',
                    reason: 'Cloud cover gives muskie the confidence to attack surface lures all day.'
                }], //
                colors: ['Sucker', 'Perch'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Weed Edges & Points',
                    description: 'Cloudy weather gives big, wary muskie the confidence to eat a large meal. Target prime ambush spots.'
                }, //
                tips: [{
                    title: 'Big Baits for Big Fish',
                    description: 'Cloudy weather gives big, wary muskie the confidence to eat a large meal.'
                }, {
                    title: 'Slow and Steady',
                    description: 'Use a slow, methodical retrieve to make your bait look like an easy meal.'
                }, {
                    title: 'Sharp Hooks are a Must',
                    description: 'Make sure your hooks are sticky sharp.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bucktails',
                    technique: 'Fast, burning retrieve.',
                    reason: 'Speed kills.',
                    isPrimary: true
                }, {
                    name: 'Large Minnow Lures',
                    technique: 'Twitch and pause.',
                    reason: 'Classic muskie lure.'
                }, {
                    name: 'Large Swimbaits',
                    technique: 'Use a slow, steady retrieve to mimic large forage.',
                    reason: 'A realistic presentation for trophy hunting.'
                }, {
                    name: 'Glide Bait',
                    technique: 'Use an erratic tap-and-pull retrieve.',
                    reason: 'The unpredictable gliding action can trigger reaction strikes.'
                }], //
                colors: ['Black', 'Silver'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Cabbage Weed Beds',
                    description: 'Find the healthiest, greenest weed beds and burn a bucktail over the top. Figure eight every cast.'
                }, //
                tips: [{
                    title: 'Speed Kills',
                    description: 'A fast, burning retrieve with a bucktail can trigger explosive strikes.'
                }, {
                    title: 'Fish the Cabbage',
                    description: 'Find the healthiest, greenest weed beds.'
                }, {
                    title: 'Figure Eight Every Cast',
                    description: 'Make it a habit. It will get you more fish.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Large Spinnerbaits',
                    technique: 'Use double Colorado blades.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Chatterbaits',
                    technique: 'Steady retrieve.',
                    reason: 'Heavy vibration.'
                }, {
                    name: 'Noisy Topwater',
                    technique: 'Use a large plopper-style bait for maximum sound.',
                    reason: 'The sound helps muskie locate the lure from a distance.'
                }, {
                    name: 'Giant Crankbaits',
                    technique: 'Retrieve slowly with a wide wobble.',
                    reason: 'Displaces a lot of water and creates a large, easy-to-find target.'
                }], //
                colors: ['Chartreuse', 'White', 'Black'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Thickest Available Weeds',
                    description: 'muskie will bury themselves in the thickest weeds available. Use a big, vibrating lure to call them out.'
                }, //
                tips: [{
                    title: 'Double Colorado Blades',
                    description: 'Use a spinnerbait with two Colorado blades for maximum thump.'
                }, {
                    title: 'Fish Tight to Weeds',
                    description: 'muskie will bury themselves in the thickest weeds available.'
                }, {
                    title: 'Go Big',
                    description: 'This is the time for your largest lures.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Rattling Lipless Cranks',
                    technique: 'Slow retrieve.',
                    reason: 'Loudest lure you have.'
                }, {
                    name: 'Big Jigs',
                    technique: 'Pitch to cover.',
                    reason: 'Bulky profile.'
                }, {
                    name: 'Giant Spinnerbaits',
                    technique: 'Slow-roll a single large Colorado blade.',
                    reason: 'The slowest, deepest thumping bait for lethargic fish.'
                }, {
                    name: 'Big Soft Plastics',
                    technique: 'Drag and hop on the bottom with added scent.',
                    reason: 'A slow presentation that appeals to their sense of feel and smell.'
                }], //
                colors: ['Red', 'Black'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Baitfish Schools',
                    description: 'If you can find schools of baitfish with your electronics, the muskie will be there too. Fish slow.'
                }, //
                tips: [{
                    title: 'Make a Ruckus',
                    description: 'Use the loudest lure you have.'
                }, {
                    title: 'Find the Bait',
                    description: 'If you can find schools of baitfish, the muskie will be there too.'
                }, {
                    title: 'Slow it Down',
                    description: 'A slower retrieve is key in cool, muddy water.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Whopper Ploppers',
                    technique: 'Steady retrieve.',
                    reason: 'Rain triggers topwater bites.',
                    isPrimary: true
                }, {
                    name: 'Large Spooks',
                    technique: '"Walk the dog" action.',
                    reason: 'Exciting surface strikes.'
                }, {
                    name: 'Bucktails',
                    technique: 'Bulge just under the surface.',
                    reason: 'An aggressive presentation for rain-activated fish.'
                }, {
                    name: 'Topwater Creeper',
                    technique: 'Slow, gurgling retrieve in calmer areas.',
                    reason: 'The rain provides cover for a slow, large topwater presentation.'
                }], //
                colors: ['Loon', 'Bone White'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Over Weed Flats',
                    description: 'Rain often puts muskie in the mood to crush topwater baits over large weed flats.'
                }, //
                tips: [{
                    title: 'Topwater Excitement',
                    description: 'Rain often puts muskie in the mood to crush topwater baits.'
                }, {
                    title: 'Violent Strikes',
                    description: 'Be prepared for some of the most exciting strikes in freshwater.'
                }, {
                    title: 'Wait to Set the Hook',
                    description: 'Wait until you feel the weight of the fish before setting the hook.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Large Swimbaits',
                    technique: 'Match the forage.',
                    reason: 'Realistic profile.'
                }, {
                    name: 'Spoons',
                    technique: 'Let it flutter on the fall.',
                    reason: 'Strikes happen on the fall.'
                }, {
                    name: 'Bucktails',
                    technique: 'Use a moderate retrieve speed.',
                    reason: 'A versatile choice for covering water in cool rain.'
                }, {
                    name: 'Giant Crankbaits',
                    technique: 'Cast and retrieve with a slow, steady wobble.',
                    reason: 'A large meal for a fish looking to expend minimal energy.'
                }], //
                colors: ['Perch', 'Silver'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Main Lake Points',
                    description: 'muskie will use points to ambush schools of bait being disorganized by the rain.'
                }, //
                tips: [{
                    title: 'Match the Forage',
                    description: 'Use lures that look like the local food source.'
                }, {
                    title: 'Let it Fall',
                    description: 'After casting a spoon, let it flutter down. Many strikes happen on the fall.'
                }, {
                    title: 'Target Points',
                    description: 'muskie will use points to ambush schools of bait.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Large Spinnerbaits',
                    technique: 'Slow retrieve.',
                    reason: 'Big profile, big vibration.'
                }, {
                    name: 'Noisy Topwater',
                    technique: 'Steady retrieve.',
                    reason: 'Calls them in.'
                }, {
                    name: 'Chatterbaits',
                    technique: 'Use the largest model possible.',
                    reason: 'A hard, thumping vibration that stands out.'
                }, {
                    name: 'Giant Crankbaits',
                    technique: 'Use a loud, rattling model with a wide wobble.',
                    reason: 'Maximum water displacement and sound.'
                }], //
                colors: ['Black', 'Chartreuse', 'White'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Shallowest Water Available',
                    description: 'Use the largest profile lure you can cast effectively and fish it slowly in very shallow water.'
                }, //
                tips: [{
                    title: 'Go Big',
                    description: 'Use the largest profile lure you can cast effectively.'
                }, {
                    title: 'Fish Slow',
                    description: 'A slow, steady retrieve helps fish track your lure.'
                }, {
                    title: 'Use Scent',
                    description: 'Add scent to your lures to help fish find them.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Chatterbaits',
                    technique: 'Slow and loud.',
                    reason: 'Heavy vibration.'
                }, {
                    name: 'Rattling Lipless Cranks',
                    technique: 'Yo-yo retrieve.',
                    reason: 'Maximum noise.'
                }, {
                    name: 'Giant Spinnerbaits',
                    technique: 'Use a single huge Colorado blade and retrieve slowly.',
                    reason: 'The best slow-moving, high-vibration option.'
                }, {
                    name: 'Big Soft Plastics',
                    technique: 'Drag on the bottom with long pauses.',
                    reason: 'A slow, bottom-contact presentation for inactive fish.'
                }], //
                colors: ['Red', 'Black', 'Blue'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'River Inflows',
                    description: 'Rain will create current. muskie will use any inflow to their advantage. Be patient.'
                }, //
                tips: [{
                    title: 'Find the Inflows',
                    description: 'Rain will create current, and muskie will use it to their advantage.'
                }, {
                    title: 'Be Patient',
                    description: 'This is a low-percentage game, but the reward can be huge.'
                }, {
                    title: 'Target Structure',
                    description: 'Fish will hold tight to any available cover.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Large Spoons',
                    technique: 'Cast with the wind.',
                    reason: 'Long casts.'
                }, {
                    name: 'Heavy Spinners',
                    technique: 'Fast retrieve.',
                    reason: 'Cuts through wind.'
                }, {
                    name: 'Bucktails',
                    technique: 'Burn across windy points and flats.',
                    reason: 'Speed is a major trigger for wind-activated muskie.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Make long casts and use a fast, steady retrieve.',
                    reason: 'Casts well in the wind and the sound attracts fish in the choppy water.'
                }], //
                colors: ['Silver', 'White'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Windy Points',
                    description: 'Wind concentrates baitfish on points, and muskie will be there to eat them. Use the wind for extra long casts.'
                }, //
                tips: [{
                    title: 'Cast with the Wind',
                    description: 'Use the wind to your advantage to make extra-long casts.'
                }, {
                    title: 'Fish the Windy Points',
                    description: 'Wind concentrates baitfish on points.'
                }, {
                    title: 'Let it Flutter',
                    description: 'Let your spoon flutter in the wind-driven current.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Large Jerkbaits',
                    technique: 'Waves impart natural action.',
                    reason: 'Suspending baits are key.'
                }, {
                    name: 'Swimbaits',
                    technique: 'Use a heavy model.',
                    reason: 'Maintains contact.'
                }, {
                    name: 'Big Soft Plastics',
                    technique: 'Use a slow, lift-and-fall retrieve on a controlled drift.',
                    reason: 'Gets deep and stays in the strike zone on windy days.'
                }, {
                    name: 'Giant Crankbaits',
                    technique: 'Troll with the wind over deep structure.',
                    reason: 'Covers water and presents a huge meal to big, cold-water muskie.'
                }], //
                colors: ['Perch', 'Sucker'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Wind-Blown Rocky Shores',
                    description: 'The wind and waves will impart a natural action on a suspending jerkbait. Target rocky shorelines.'
                }, //
                tips: [{
                    title: 'Suspending Baits',
                    description: 'The wind and waves will impart a natural action on a suspending jerkbait.'
                }, {
                    title: 'Heavy is Better',
                    description: 'Use a heavy swimbait to get down in the water column and maintain contact.'
                }, {
                    title: 'Use Your Rod Tip',
                    description: 'Use your rod tip to work the bait, not the reel.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Giant Spinnerbaits',
                    technique: 'Slow roll.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Chatterbaits',
                    technique: 'Steady retrieve.',
                    reason: 'Heavy vibration.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Use the loudest model you have and retrieve slowly.',
                    reason: 'Casts well into the wind and creates a lot of noise.'
                }, {
                    name: 'Noisy Topwater',
                    technique: 'Use a large plopper-style bait for maximum commotion.',
                    reason: 'Sound is the primary attractant on windy, muddy days.'
                }], //
                colors: ['Chartreuse', 'Black'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Windy Bank',
                    description: 'This is where the most active fish will be. Focus on the shallowest water available.'
                }, //
                tips: [{
                    title: 'Fish the Windy Bank',
                    description: 'This is where the most active fish will be.'
                }, {
                    title: 'Maximum Vibration',
                    description: 'Use a lure that you can feel thumping in your rod tip.'
                }, {
                    title: 'Keep it Shallow',
                    description: 'Focus your efforts on the 1-5 foot depth range.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Rattling Lipless Cranks',
                    technique: 'Loud and slow.',
                    reason: 'Perfect combo.'
                }, {
                    name: 'Big Jigs',
                    technique: 'Pitch to cover.',
                    reason: 'Bulky profile.'
                }, {
                    name: 'Giant Spinnerbaits',
                    technique: 'Slow-roll a huge Colorado blade.',
                    reason: 'The ultimate in slow, thumping vibration.'
                }, {
                    name: 'Big Soft Plastics',
                    technique: 'Drag slowly through calm pockets near windy areas.',
                    reason: 'A scent-friendly, slow presentation for tough conditions.'
                }], //
                colors: ['Red', 'Gold'], //
                gear: gearMap.muskie, //
                location: {
                    title: 'Shallow Bays',
                    description: 'The wind will push warmer water into shallow bays, and muskie will follow. Make repetitive casts.'
                }, //
                tips: [{
                    title: 'Target Shallow Bays',
                    description: 'The wind will push warmer water into shallow bays, and muskie will follow.'
                }, {
                    title: 'Repetitive Casting',
                    description: 'Make dozens of casts to a likely-looking spot.'
                }, {
                    title: 'Go Loud and Slow',
                    description: 'The perfect combination for these conditions.'
                }, {
                    title: 'Proper Fish Handling',
                    description: 'Have a large net, long pliers, and jaw spreaders ready. Keep the fish in the water.'
                }] //
            }
        }
    }
},
              perch: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Drop Shot with Minnow',
                    technique: 'Fish vertically over deep structure.',
                    reason: 'Keeps the bait in the strike zone for deep fish.'
                }, {
                    name: 'Small Jigging Spoon',
                    technique: 'Use subtle hops off the bottom.',
                    reason: 'Flash attracts fish from a distance in clear water.'
                }, {
                    name: 'Slip Bobber with Minnow',
                    technique: 'Set the depth to hold the bait just above the school.',
                    reason: 'A highly effective way to present live bait to deep, suspended perch.'
                }, {
                    name: 'Small Jig with Plastic',
                    technique: 'Use subtle hops and twitches on the bottom.',
                    reason: 'Imitates small invertebrates and minnows that deep perch feed on.'
                }], //
                colors: ['Silver', 'Natural Shad'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Deep Weedlines & Rock Piles',
                    description: 'Perch will move to the deepest available cover. Look for the bottom edge of weed beds or rock piles in 15-30 feet of water.'
                }, //
                tips: [{
                    title: 'Find Deep Cover',
                    description: 'Use your electronics to find schools of perch relating to deep weed edges or rocks.'
                }, {
                    title: 'Light Line is Key',
                    description: 'In clear water, 4lb fluorocarbon will get you significantly more bites.'
                }, {
                    title: 'Subtle Jigging',
                    description: 'You dont need big hops; small, subtle movements are more effective for perch.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Slip Bobber with Minnow',
                    technique: 'Set bait 6-12 inches off bottom.',
                    reason: 'A classic and highly effective technique.',
                    isPrimary: true
                }, {
                    name: 'Small Jig with Plastic',
                    technique: 'Slowly drag along the bottom.',
                    reason: 'Mimics invertebrates that perch feed on.'
                }, {
                    name: 'Small Inline Spinner',
                    technique: 'Retrieve slowly just off the bottom.',
                    reason: 'The flash can attract curious perch from a distance in clear water.'
                }, {
                    name: 'Drop Shot',
                    technique: 'Use a small minnow or plastic and fish vertically.',
                    reason: 'Perfect for targeting fish holding tight to a specific piece of structure.'
                }], //
                colors: ['Chartreuse', 'White'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Sunny Transitional Banks',
                    description: 'Perch will move into shallower areas (8-15 ft) where the sun is warming the water, especially areas that transition from soft to hard bottom.'
                }, //
                tips: [{
                    title: 'Find the School',
                    description: 'Perch are almost always in large schools. If you catch one, anchor and fish the area thoroughly.'
                }, {
                    title: 'Use a Jigging Cadence',
                    description: 'Even with a slip bobber, occasionally twitching your rod will attract more fish.'
                }, {
                    title: 'Go Small',
                    description: 'Use small hooks (#6 or #8) and small minnows for the best results.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Live Minnow on a Jig',
                    technique: 'Fish slowly near any cover.',
                    reason: 'Scent and vibration are most important.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Slow retrieve with vibration.',
                    reason: 'The small blade helps fish find the lure.'
                }, {
                    name: 'Worms',
                    technique: 'Fish a piece of worm under a float near cover.',
                    reason: 'The strong scent is a primary attractant in muddy water.'
                }, {
                    name: 'Small Crankbait',
                    technique: 'Use a bright, rattling model and retrieve it slowly.',
                    reason: 'The noise and vibration helps fish find the lure in low visibility.'
                }], //
                colors: ['Orange', 'Chartreuse'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Shallow Wood Cover & Docks',
                    description: 'Perch will move shallow and hold tight to any available cover. The bite will be based on scent and vibration.'
                }, //
                tips: [{
                    title: 'Scent is Key',
                    description: 'In muddy water, the scent of a live minnow is your best tool.'
                }, {
                    title: 'Fish Tight to Cover',
                    description: 'Drop your bait right beside dock pilings or submerged wood.'
                }, {
                    title: 'Slow Down',
                    description: 'Give fish time to find your bait. A slow retrieve or still-fishing is best.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Live Minnow under a Bobber',
                    technique: 'Fish near inflows.',
                    reason: 'Scent is king in these conditions.'
                }, {
                    name: 'Bright Jig with Scent',
                    technique: 'Tip jig with a worm or minnow head.',
                    reason: 'Combines bright color with natural scent.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Use subtle vertical jigs near the bottom.',
                    reason: 'The vibration is a powerful trigger when fish are hunting by feel.'
                }, {
                    name: 'Small Rattling Lures',
                    technique: 'Cast and retrieve slowly with pauses.',
                    reason: 'The sound helps call in fish from a distance in the dirty water.'
                }], //
                colors: ['Shock Pink', 'Chartreuse'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Creek Mouths & Inflows',
                    description: 'Look for areas where slightly clearer or warmer water is entering the main body. Perch will congregate here.'
                }, //
                tips: [{
                    title: 'Tip Your Jigs',
                    description: 'Always add a piece of worm or a minnow head to your jig for scent.'
                }, {
                    title: 'Use a High-Vis Bobber',
                    description: 'A bright bobber helps you detect very subtle bites.'
                }, {
                    title: 'Stay Patient',
                    description: 'The bite will be slow. Find a good spot and give it time.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Small Inline Spinner',
                    technique: 'Cast and retrieve over flats.',
                    reason: 'Covers water to find roaming schools.'
                }, {
                    name: 'Small Swimbait',
                    technique: 'Steady retrieve.',
                    reason: 'Mimics the baitfish perch are chasing.'
                }, {
                    name: 'Small Jigs under a Bobber',
                    technique: 'Once a school is located, use a bobber to stay in the zone.',
                    reason: 'A great way to thoroughly fish an area after finding perch with moving baits.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve slowly over the tops of weeds.',
                    reason: 'The combination of a jig and spinner is a classic perch catcher.'
                }], //
                colors: ['Perch', 'Silver'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Weed Flats and Edges',
                    description: 'Cloud cover makes perch more aggressive and they will roam shallow weed flats looking for minnows. This is a prime time for casting.'
                }, //
                tips: [{
                    title: 'Cover Water',
                    description: 'Use moving baits like spinners and swimbaits to locate active schools.'
                }, {
                    title: 'Once You Find Them, Slow Down',
                    description: 'After you locate a school, switch to a jig or slip bobber to fish the area thoroughly.'
                }, {
                    title: 'Match the Hatch',
                    description: 'Look at the baitfish in the area and match your lure size and color to them.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Small Crankbait',
                    technique: 'Slow, steady retrieve.',
                    reason: 'Triggers reaction strikes.'
                }, {
                    name: 'Jig and Minnow',
                    technique: 'Cast and hop back to the boat.',
                    reason: 'Classic and effective combination.'
                }, {
                    name: 'Small Inline Spinner',
                    technique: 'Vary the retrieve speed to find what fish want.',
                    reason: 'A classic lure for covering water and finding active schools.'
                }, {
                    name: 'Small Jigging Spoon',
                    technique: 'Cast and hop it back to the boat.',
                    reason: 'The flash and flutter on the fall triggers reaction strikes.'
                }], //
                colors: ['Firetiger', 'Crawfish'], //
                gear: gearMap.perch, //
                location: {
                    title: 'First Drop-off from Shore',
                    description: 'Excellent conditions for perch. They will be active and feeding along the first major drop-off or breakline from shore.'
                }, //
                tips: [{
                    title: 'Prime Time',
                    description: 'Cloudy and cool conditions are often the best for a hot perch bite.'
                }, {
                    title: 'Make Bottom Contact',
                    description: 'Try to have your crankbait occasionally dig into the bottom.'
                }, {
                    title: 'Use a Sensitive Rod',
                    description: 'A light-action rod with a fast tip will help you feel the subtle bites.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Live Minnow',
                    technique: 'Fish under a bobber near cover.',
                    reason: 'Best way for fish to find your bait.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Slow retrieve.',
                    reason: 'Vibration helps fish locate it.'
                }, {
                    name: 'Worms',
                    technique: 'Use a piece of worm on a bright jighead.',
                    reason: 'Combines strong scent with a visible target.'
                }, {
                    name: 'Small Crankbait',
                    technique: 'Use a bright, rattling model retrieved slowly.',
                    reason: 'The sound and vibration is key for getting noticed.'
                }], //
                colors: ['Chartreuse', 'Orange'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Shallow Weeds & Docks',
                    description: 'Perch will move very shallow and use any available cover as an ambush point. Fish slowly and methodically.'
                }, //
                tips: [{
                    title: 'Go Bright and Slow',
                    description: 'Use bright colors and a slow retrieve to give fish a chance to find your lure.'
                }, {
                    title: 'Use Your Senses',
                    description: 'Pay attention to the vibration of your spinner; a bite will often feel like it just stopped.'
                }, {
                    title: 'Stay Shallow',
                    description: 'Focus your efforts in water less than 8 feet deep.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Rattling Blade Bait',
                    technique: 'Subtle vertical jigging.',
                    reason: 'Vibration and noise are key.'
                }, {
                    name: 'Jig with a Minnow',
                    technique: 'Use a larger minnow.',
                    reason: 'Bigger profile and more scent.'
                }, {
                    name: 'Small Rattling Lures',
                    technique: 'Fish slowly with a lift-and-fall retrieve.',
                    reason: 'The sound helps call fish in from a distance.'
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip with a wax worm or piece of worm.',
                    reason: 'A bright, smelly target for lethargic fish.'
                }], //
                colors: ['Gold', 'Silver'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Hard Bottom Areas',
                    description: 'Perch will relate to the warmest bottom available, which is often rock or gravel. Use lures that make noise.'
                }, //
                tips: [{
                    title: 'Make Some Noise',
                    description: 'Use a small rattling lure to call fish in from a distance.'
                }, {
                    title: 'Fish Vertically',
                    description: 'If you find a school, fishing vertically is the most efficient way to stay on them.'
                }, {
                    title: 'Use a Stinger Hook',
                    description: 'Adding a small treble hook can catch light-biting fish.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Small Spinner',
                    technique: 'Cast towards the bank.',
                    reason: 'Rain washes food into the water.',
                    isPrimary: true
                }, {
                    name: 'Jig under a Bobber',
                    technique: 'Drift along weed edges.',
                    reason: 'Natural presentation for active fish.'
                }, {
                    name: 'Worms',
                    technique: 'Use a small piece on a plain hook.',
                    reason: 'The most natural imitation of what\'s being washed in.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve slowly through run-off areas.',
                    reason: 'A classic lure that excels when fish are feeding aggressively.'
                }], //
                colors: ['White', 'Silver'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Shallow Shorelines & Inflows',
                    description: 'Rain washes insects and other food into the water, creating a feeding frenzy for perch along the banks.'
                }, //
                tips: [{
                    title: 'Fish the Banks',
                    description: 'Cast your lures right up to the shoreline where runoff is entering the water.'
                }, {
                    title: 'The Bite is On',
                    description: 'Rain often triggers an aggressive feeding response in perch.'
                }, {
                    title: 'Stay Mobile',
                    description: 'Work your way along a shoreline, casting as you go, to find active schools.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Live Minnow',
                    technique: 'Drift with the current.',
                    reason: 'The most natural presentation.'
                }, {
                    name: 'Small Jig',
                    technique: 'Cast into eddies and slack water.',
                    reason: 'Perch will rest out of the main current.'
                }, {
                    name: 'Worms',
                    technique: 'Drift a piece of worm on a split-shot rig.',
                    reason: 'An irresistible offering in cool, rain-fed current.'
                }, {
                    name: 'Inline Spinner',
                    technique: 'Swing it through current seams.',
                    reason: 'The flash of the blade can trigger strikes from fish in eddies.'
                }], //
                colors: ['White', 'Shock Pink'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Current Breaks and Eddies',
                    description: 'Increased current from rain will position perch predictably behind any object that breaks the flow, like rocks or logs.'
                }, //
                tips: [{
                    title: 'Fish the Slack Water',
                    description: 'Cast your jig into the calm water just behind a current-breaking object.'
                }, {
                    title: 'Natural Drift',
                    description: 'Let your bait drift naturally with the current under a bobber for the best results.'
                }, {
                    title: 'Stay Safe',
                    description: 'Be mindful of rising water levels in rivers and streams.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Fish a gob of worms on the bottom.',
                    reason: 'Maximum scent and an easy meal.'
                }, {
                    name: 'Minnows under a Bobber',
                    technique: 'Use a lively minnow.',
                    reason: 'The vibration helps fish find it.'
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip with a worm or minnow and fish stationary.',
                    reason: 'Adds a bright visual target to your scented bait.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve extremely slowly along the bottom.',
                    reason: 'Provides a bit of vibration to help fish find it.'
                }], //
                colors: ['Chartreuse', 'Orange'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Protected Coves and Inflows',
                    description: 'Live bait is your best bet. Find the calmest, clearest water available, often in a cove or near a small inflow.'
                }, //
                tips: [{
                    title: 'Live Bait is a Must',
                    description: 'In these conditions, perch will rely almost entirely on scent to feed.'
                }, {
                    title: 'Stay Put',
                    description: 'Find a likely spot and be patient, letting the scent from your bait draw fish in.'
                }, {
                    title: 'Use a Bait-Holder Hook',
                    description: 'These hooks have extra barbs to help keep your worms on.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Live Minnow',
                    technique: 'Fish on the bottom.',
                    reason: 'Scent and vibration are key.'
                }, {
                    name: 'Scented Jigs',
                    technique: 'Fish very slowly.',
                    reason: 'Tough conditions require patience.'
                }, {
                    name: 'Worms',
                    technique: 'Use a small piece on a bright jig head.',
                    reason: 'The most reliable bait for tough bites.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Jig with very subtle twitches.',
                    reason: 'The vibration might be the only thing that gets a reaction.'
                }], //
                colors: ['Shock Pink', 'Chartreuse'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Calmest, Clearest Water',
                    description: 'This is a tough bite. Find any small area that is protected from wind and current and fish slowly with scented bait.'
                }, //
                tips: [{
                    title: 'Patience is a Virtue',
                    description: 'The bite will likely be slow and very light. Stay focused.'
                }, {
                    title: 'Use a Spring Bobber',
                    description: 'A sensitive spring bobber on your rod tip will help you see the lightest bites.'
                }, {
                    title: 'Keep it Fresh',
                    description: 'Change your minnow or worm often to ensure maximum scent.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Drop Shot with Minnow',
                    technique: 'Drift across flats.',
                    reason: 'Keeps bait in the strike zone.'
                }, {
                    name: 'Jig and Minnow',
                    technique: 'Use a heavier jig to stay down.',
                    reason: 'A controlled drift is deadly.'
                }, {
                    name: 'Slip Bobber with Leech',
                    technique: 'Use a larger float and drift along weed edges.',
                    reason: 'A classic presentation that covers water effectively.'
                }, {
                    name: 'Bottom Bouncer',
                    technique: 'Use a light bottom bouncer with a plain hook and minnow.',
                    reason: 'Ensures your bait is always on the bottom during a fast drift.'
                }], //
                colors: ['White', 'Silver'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Wind-Blown Points & Flats',
                    description: 'The "perch chop" on the water surface gets the fish active. Drift across windy flats and the edges of points.'
                }, //
                tips: [{
                    title: 'The "Perch Chop" is Key',
                    description: 'A rippled surface makes perch less wary and more aggressive.'
                }, {
                    title: 'Use a Drift Sock',
                    description: 'A drift sock will slow your boat down for a perfect drift speed (0.5-1.0 mph).'
                }, {
                    title: 'Stay in Contact',
                    description: 'Use a heavier jig or drop shot weight to ensure you can always feel the bottom.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Small Rattling Lures',
                    technique: 'Cast on windy shorelines.',
                    reason: 'Noise and vibration attract active fish.'
                }, {
                    name: 'Jig and Minnow',
                    technique: 'Anchor and cast to schools.',
                    reason: 'Classic and effective.'
                }, {
                    name: 'Small Inline Spinner',
                    technique: 'Use a weighted model for longer casts.',
                    reason: 'The flash is a major attractant for perch feeding in the chop.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Cast and rip it back to the boat.',
                    reason: 'Casts well in the wind and the vibration calls fish in.'
                }], //
                colors: ['Firetiger', 'Gold'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Windy Shorelines and Points',
                    description: 'Wind concentrates baitfish on the downwind shore, and perch will be there in numbers. Keep moving until you find a school.'
                }, //
                tips: [{
                    title: 'Fish the Windy Bank',
                    description: 'All the food is being pushed to the windy side of the lake; that\'s where the perch will be.'
                }, {
                    title: 'Anchor Upwind',
                    description: 'Once you find a school, anchor upwind and cast to them to avoid spooking them.'
                }, {
                    title: 'Braided Line Helps',
                    description: 'Light braid cuts through the wind for longer casts and better bite detection.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Jig with a Minnow',
                    technique: 'Use a large, lively minnow.',
                    reason: 'More scent and vibration.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Slow roll along the bottom.',
                    reason: 'Vibration helps fish find it.'
                }, {
                    name: 'Worms',
                    technique: 'Fish a full worm on a bright jighead.',
                    reason: 'Maximum scent profile with a pop of color.'
                }, {
                    name: 'Small Rattling Lures',
                    technique: 'Cast and retrieve slowly.',
                    reason: 'The sound can be the primary trigger in these conditions.'
                }], //
                colors: ['Chartreuse', 'Orange'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Windy Banks with Cover',
                    description: 'The warmest and most oxygenated water will be on the shallow, windy bank. Focus on any available cover like wood or rocks.'
                }, //
                tips: [{
                    title: 'Go Big and Bright',
                    description: 'Use a larger minnow and a brightly colored jighead.'
                }, {
                    title: 'Vibration is Key',
                    description: 'In muddy, windy water, fish rely on their lateral line. Use a lure with a blade.'
                }, {
                    title: 'Stay Shallow',
                    description: 'Focus your efforts in less than 6 feet of water on the windy side.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Blade Bait',
                    technique: 'Vertical jigging.',
                    reason: 'Maximum vibration.'
                }, {
                    name: 'Live Minnow',
                    technique: 'Fish on a heavy jig.',
                    reason: 'Scent and maintaining contact.'
                }, {
                    name: 'Small Rattling Lures',
                    technique: 'Jig vertically in calm pockets.',
                    reason: 'The sound can attract fish in tough conditions.'
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip with a minnow head for maximum scent.',
                    reason: 'A bright, smelly offering for inactive fish.'
                }], //
                colors: ['Gold', 'Orange'], //
                gear: gearMap.perch, //
                location: {
                    title: 'Calm Side of Structure',
                    description: 'Perch will often tuck into the calm, protected side of a point or hump to get out of the wind-driven current.'
                }, //
                tips: [{
                    title: 'Fish the "Quiet" Side',
                    description: 'Look for structure that has a calm spot on the downwind side.'
                }, {
                    title: 'Vertical is Easiest',
                    description: 'In strong wind, it\'s often easiest to control your lure by fishing straight below the boat.'
                }, {
                    title: 'Be Patient',
                    description: 'These are tough conditions, but the perch will be tightly schooled up when you find them.'
                }, {
                    title: 'Watch for the "Tick"',
                    description: 'Perch bites are often just a small "tick" or a feeling of weight on your line.'
                }] //
            }
        }
    }
},
             freshwaterdrum: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Crawfish Crankbait',
                    technique: 'Bounce off the bottom on hard surfaces.',
                    reason: 'Triggers reaction strikes from feeding drum.',
                    isPrimary: true
                }, {
                    name: 'Drop Shot Rig',
                    technique: 'Fish vertically with a goby or minnow imitation.',
                    reason: 'Perfect for targeting deep fish on structure.'
                }, {
                    name: 'Tube Jig',
                    technique: 'Drag and hop along the bottom to imitate a crawfish.',
                    reason: 'A subtle presentation for fish keyed in on bottom forage.'
                }, {
                    name: 'Football Jig',
                    technique: 'Slowly drag a jig with a crawfish trailer on gravel.',
                    reason: 'Mimics a primary food source for drum.'
                }], //
                colors: ['Crawfish', 'Goby', 'Silver'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Deep Hard-Bottom Flats',
                    description: 'Drum will be feeding on mussels and crayfish on deep gravel or rock flats. Look for them in 15-30 feet of water.'
                }, //
                tips: [{
                    title: 'Find the Hard Bottom',
                    description: 'Drum feed on mollusks and crayfish, so find their food on gravel, rock, or sand.'
                }, {
                    title: 'Make Bottom Contact',
                    description: 'Your lure should be actively hitting the bottom to stir up sediment and attract attention.'
                }, {
                    title: 'They Fight Hard',
                    description: 'Drum are powerful fighters. Be prepared for a strong, bulldog-like fight.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jig and Worm',
                    technique: 'Slowly drag or hop a nightcrawler on a jig.',
                    reason: 'A simple, effective presentation for less active fish.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Use short, sharp vertical rips.',
                    reason: 'The vibration can trigger bites when nothing else will.'
                }, {
                    name: 'Ned Rig',
                    technique: 'Fish slowly on the bottom.',
                    reason: 'A small, subtle profile for a tough, cold-water bite.'
                }, {
                    name: 'Jigging Spoons',
                    technique: 'Use subtle hops right on the bottom.',
                    reason: 'The flash and flutter can attract bites from lethargic fish.'
                }], //
                colors: ['Black', 'Purple', 'Silver'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Deepest River Holes & Eddies',
                    description: 'Drum will congregate in the deepest, slowest moving water available to conserve energy. Fish vertically.'
                }, //
                tips: [{
                    title: 'Fish Slow and Deep',
                    description: 'In cool water, drum will be lethargic and holding in the deepest holes available.'
                }, {
                    title: 'A Nightcrawler is Tough to Beat',
                    description: 'The scent of a real nightcrawler is often all you need.'
                }, {
                    title: 'Feel for a "Heavy" Bite',
                    description: 'The bite will often feel like you just snagged a wet sock. Reel down and sweep the hook.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Nightcrawlers',
                    technique: 'Fish a large bunch on the bottom.',
                    reason: 'Maximum scent is key in muddy water.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Use fresh cut shad or suckers.',
                    reason: 'The oily scent trail is easy for them to find.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Retrieve slowly with loud rattles.',
                    reason: 'The sound helps fish locate the bait when they can\'t see.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Use a slow, steady retrieve for maximum vibration.',
                    reason: 'The hard thumping action is easy for drum to track.'
                }], //
                colors: [], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Current Seams and Inflows',
                    description: 'Drum will use their strong sense of smell to feed along current seams that concentrate food and scent.'
                }, //
                tips: [{
                    title: 'Scent is Everything',
                    description: 'In muddy water, drum rely almost entirely on smell. Use fresh, smelly bait.'
                }, {
                    title: 'Use a Carolina Rig',
                    description: 'A Carolina rig keeps your bait right on the bottom but allows the fish to pick it up without feeling the weight.'
                }, {
                    title: 'Be Patient',
                    description: 'Let your bait soak. Give the fish time to follow the scent trail to your hook.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Rattling Lipless Crankbait',
                    technique: 'Yo-yo retrieve off the bottom.',
                    reason: 'Loud rattles call fish in.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Fish on the bottom.',
                    reason: 'Scent is the most reliable producer.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Use aggressive vertical rips.',
                    reason: 'Maximum vibration to trigger a reaction.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Use a large bunch for a big, scented target.',
                    reason: 'A classic bait that is always effective.'
                }], //
                colors: ['Chrome', 'Red'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Deep Holes with Hard Bottom',
                    description: 'Find the deepest holes with a hard bottom composition. The sound from a rattling lure will travel farther.'
                }, //
                tips: [{
                    title: 'Noise and Scent',
                    description: 'Your only tools in these tough conditions are loud rattles and strong scent.'
                }, {
                    title: 'Make Repeated Casts',
                    description: 'It may take several casts to the same spot to get a fish to react.'
                }, {
                    title: 'Heavy is Good',
                    description: 'Use a heavy lipless crankbait (3/4 oz) to maintain contact with the bottom.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Tube Jig',
                    technique: 'Drag and hop along the bottom.',
                    reason: 'Perfectly imitates a crayfish or goby.'
                }, {
                    name: 'Silver Spoon',
                    technique: 'Cast and retrieve with pauses.',
                    reason: 'Mimics a fleeing baitfish that drum will chase.'
                }, {
                    name: 'Swimbait',
                    technique: 'Retrieve slowly near the bottom on a jighead.',
                    reason: 'A realistic baitfish profile for actively feeding drum.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Slow-roll along the bottom, making contact.',
                    reason: 'The flash and vibration can call in fish from a distance.'
                }], //
                colors: ['Green Pumpkin', 'Smoke', 'Silver'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Mid-Depth Flats & Points',
                    description: 'Cloud cover makes drum more aggressive and willing to move out of the deepest water to feed on flats and points in 10-20 feet.'
                }, //
                tips: [{
                    title: 'Drum Will Roam',
                    description: 'Cloudy days get drum moving. Use casting techniques to cover water and find them.'
                }, {
                    title: 'Let it Flutter',
                    description: 'Many bites on a spoon will come as it flutters towards the bottom on a pause.'
                }, {
                    title: 'Strong Hookset',
                    description: 'Drum have hard, bony mouths. Set the hook firmly.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jig and Minnow',
                    technique: 'Slowly swim just off the bottom.',
                    reason: 'A classic presentation for many species, including drum.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Vertical jigging over structure.',
                    reason: 'The vibration is a powerful trigger.'
                }, {
                    name: 'Jigging Spoons',
                    technique: 'Use sharp, short hops off the bottom.',
                    reason: 'The flash from the spoon attracts fish in the low light.'
                }, {
                    name: 'Tube Jig',
                    technique: 'Drag slowly on hard bottoms.',
                    reason: 'A subtle crawfish or goby imitation for less active fish.'
                }], //
                colors: ['White', 'Silver', 'Gold'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Sharp Drop-offs and Ledges',
                    description: 'Drum will move up to the edges of sharp drop-offs to feed. Use your electronics to find schools of fish.'
                }, //
                tips: [{
                    title: 'Find the Edge',
                    description: 'Use your map or electronics to find where shallow flats drop into the main basin.'
                }, {
                    title: 'A Bite is a Bite',
                    description: 'You will likely catch other species like walleye and smallmouth in the same areas.'
                }, {
                    title: 'Feel the Vibration',
                    description: 'A bite on a blade bait often just feels like the vibration has stopped. Set the hook!'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Nightcrawlers',
                    technique: 'Fish on bottom.',
                    reason: 'Maximum scent trail.'
                }, {
                    name: 'Rattling Crankbait',
                    technique: 'Slowly grind along the bottom.',
                    reason: 'Noise and vibration trigger strikes.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Use fresh, oily baitfish for a strong scent.',
                    reason: 'An irresistible meal for drum hunting by smell.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Use a slow retrieve with frequent pauses.',
                    reason: 'The loud rattles are easy for fish to locate.'
                }], //
                colors: ['Chartreuse', 'Orange'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Shallow Flats with Current',
                    description: 'This is a prime time for big drum. They will move shallow to feed aggressively, especially in areas with current.'
                }, //
                tips: [{
                    title: 'Prime Time Drum',
                    description: 'These conditions can produce some of the best drum fishing of the year.'
                }, {
                    title: 'Grind the Bottom',
                    description: 'Retrieve your crankbait just fast enough that it is constantly digging into the sand or gravel.'
                }, {
                    title: 'Use Circle Hooks with Bait',
                    description: 'Circle hooks are great for bottom fishing and result in more hook-ups.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Use the freshest bait you can.',
                    reason: 'Scent is most important.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Slow retrieve with pauses.',
                    reason: 'Loud rattles and vibration.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Jig vertically with sharp rips.',
                    reason: 'The intense vibration can trigger a reaction from inactive fish.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Let a large bunch sit on the bottom.',
                    reason: 'A classic scent-based approach that always works.'
                }], //
                colors: ['Red', 'Chrome'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'River Bends and Channel Swings',
                    description: 'Drum will hold in deeper river bends where the current slows down. Fish the deepest parts of the bend.'
                }, //
                tips: [{
                    title: 'Go with the Flow',
                    description: 'In a river, cast upstream and let your bait or lure drift down into the deep holes.'
                }, {
                    title: 'Patience is Key',
                    description: 'This can be a slow bite. Find a good hole and fish it thoroughly.'
                }, {
                    title: 'Keep it Fresh',
                    description: 'Replace your cut bait every 20-30 minutes for the best scent trail.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jig and Worm',
                    technique: 'Cast to inflows and run-off areas.',
                    reason: 'Rain washes in an easy meal of worms.'
                }, {
                    name: 'Silver Spoon',
                    technique: 'Cast and retrieve.',
                    reason: 'The disturbed surface makes fish less wary.'
                }, {
                    name: 'Inline Spinner',
                    technique: 'Retrieve through current from run-offs.',
                    reason: 'The flash and vibration is great for aggressive, rain-activated fish.'
                }, {
                    name: 'Crawfish Crankbait',
                    technique: 'Work along the mudlines created by inflows.',
                    reason: 'Mimics crawfish being washed out by the rain.'
                }], //
                colors: ['Black', 'Silver'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Creek Mouths and Runoffs',
                    description: 'Rain washes food into the lake, and drum will congregate at these inflows to feed. Cast right into the moving water.'
                }, //
                tips: [{
                    title: 'Match the "Wash-In"',
                    description: 'A simple jig and nightcrawler is the perfect imitation of what is naturally being washed in.'
                }, {
                    title: 'Fish the Mudline',
                    description: 'Look for the edge where the muddy runoff meets the clearer lake water. Fish love this edge.'
                }, {
                    title: 'Stay Safe',
                    description: 'Be mindful of lightning and rising water levels.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Nightcrawlers',
                    technique: 'On a simple bottom rig.',
                    reason: 'Rain makes worms active and available.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Jig in current breaks.',
                    reason: 'Vibration stands out.'
                }, {
                    name: 'Jig and Minnow',
                    technique: 'Drift through eddies and calm pockets.',
                    reason: 'The scent and profile of a minnow is a great option.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Cast into current and use a lift-and-fall retrieve.',
                    reason: 'The sound will attract fish holding in the current.'
                }], //
                colors: ['Silver', 'Gold'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Behind Current Breaks',
                    description: 'The increased current will position drum predictably behind any structure that breaks the flow, like bridge pilings or large rocks.'
                }, //
                tips: [{
                    title: 'Find the Calm Spot',
                    description: 'Fish will sit in the calm water directly behind an object breaking the current.'
                }, {
                    title: 'Keep Your Line Tight',
                    description: 'Current can put a bow in your line, making bites hard to detect. Use enough weight.'
                }, {
                    title: 'They Will Be Stacked',
                    description: 'In current, drum will often be very tightly schooled. Where you find one, there are many.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Fish in high-flow areas.',
                    reason: 'The scent travels a long way in the current.',
                    isPrimary: true
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Use a large bunch for a bigger target.',
                    reason: 'A classic for a reason.'
                }, {
                    name: 'Rattling Lipless Crankbait',
                    technique: 'Cast into current and retrieve slowly.',
                    reason: 'The sound and vibration can trigger bites from aggressive fish.'
                }, {
                    name: 'Stink Bait',
                    technique: 'Use commercial catfish baits for maximum scent.',
                    reason: 'A powerful scent that can draw fish from downstream.'
                }], //
                colors: [], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Main River Channels & Bottlenecks',
                    description: 'Rain and muddy water turn on the bite. Fish the main channel or any bottleneck that concentrates the current and feeding fish.'
                }, //
                tips: [{
                    title: 'The Bite is On!',
                    description: 'These are some of the best possible conditions for catching large numbers of drum.'
                }, {
                    title: 'Use Heavy Sinkers',
                    description: 'You will need a heavy sinker (2-4 oz or more) to hold your bait in place in the strong current.'
                }, {
                    title: 'Use a Bait Feeder Reel',
                    description: 'This lets the fish pick up the bait and run in the current without feeling resistance.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Fish in slow, deep pools.',
                    reason: 'Scent is the only factor.'
                }, {
                    name: 'Rattling Lures',
                    technique: 'Jig vertically.',
                    reason: 'Vibration and noise.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Let a large bunch sit on the bottom.',
                    reason: 'A classic scent-based approach.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Jig vertically with sharp rips.',
                    reason: 'Maximum vibration for the toughest bites.'
                }], //
                colors: ['Chrome', 'Red'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Deep, Slow Eddies',
                    description: 'Drum will get out of the main muddy flow and rest in deep, slow-moving eddies. Find these and you will find the fish.'
                }, //
                tips: [{
                    title: 'Find the Slowest Water',
                    description: 'Look for any area where the current is noticeably slower than the main river.'
                }, {
                    title: 'Be Patient',
                    description: 'The bite may be slow, but the fish will be concentrated in these areas.'
                }, {
                    title: 'Fresh Bait is Best',
                    description: 'In cold, muddy water, the freshest, oiliest bait will work best.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Crawfish Crankbait',
                    technique: 'Grind the bottom of windy points.',
                    reason: 'Wind activates the entire food chain.'
                }, {
                    name: 'Drop Shot Rig',
                    technique: 'Drift across windy flats.',
                    reason: 'An effective way to cover water while keeping the bait in the zone.'
                }, {
                    name: 'Football Jig',
                    technique: 'Drag a crawfish imitation along windy, rocky shorelines.',
                    reason: 'Keeps your bait on the bottom where feeding drum are looking.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Burn across windy flats.',
                    reason: 'The sound and vibration is great for calling in active fish in the chop.'
                }], //
                colors: ['Crawfish', 'Goby'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Wind-Blown Points & Flats',
                    description: 'Wind pushes bait and creates a "mudline" from the waves that drum use as cover to feed. Fish the side of the lake getting the most wind.'
                }, //
                tips: [{
                    title: 'Fish the "Chop"',
                    description: 'Windy conditions that create a 1-2 foot chop are perfect for activating drum.'
                }, {
                    title: 'Use a Drift Sock',
                    description: 'A drift sock will slow your boat and allow for a more controlled presentation.'
                }, {
                    title: 'Braid for Sensitivity',
                    description: 'Braided line will help you feel the bottom and detect bites in the waves.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Blade Bait',
                    technique: 'Drift and jig vertically.',
                    reason: 'Vibration cuts through the chop.'
                }, {
                    name: 'Jig and Worm',
                    technique: 'Use a heavy jig to maintain contact.',
                    reason: 'A simple and effective choice.'
                }, {
                    name: 'Jigging Spoons',
                    technique: 'Use a heavy spoon to stay vertical while drifting.',
                    reason: 'The flash is a great attractant for fish feeding in the wind.'
                }, {
                    name: 'Drop Shot',
                    technique: 'Use a heavy weight to pin to the bottom.',
                    reason: 'Keeps the bait in a precise zone during a controlled drift.'
                }], //
                colors: ['Silver', 'Gold'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Windy Side of Deep Structure',
                    description: 'Drum will position on the downwind side of deep humps and points, waiting for bait to be pushed to them by the current.'
                }, //
                tips: [{
                    title: 'Heavier is Better',
                    description: 'Use a heavy enough jig or blade bait to feel the bottom at all times.'
                }, {
                    title: 'Stay Vertical',
                    description: 'Drifting while keeping your line as vertical as possible is the most effective presentation.'
                }, {
                    title: 'Don\'t Be Afraid of the Wind',
                    description: 'Windy days are often the best days for drum fishing.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Rattling Lipless Crankbait',
                    technique: 'Burn across shallow, windy flats.',
                    reason: 'Triggers aggressive reaction strikes.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Fish on bottom on windy points.',
                    reason: 'Scent and commotion concentrate fish.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Retrieve slowly through the churned-up water.',
                    reason: 'The hard vibration is easy to locate in low visibility.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Use a bottom rig with a heavy sinker.',
                    reason: 'The scent will attract any drum feeding on the windy flat.'
                }], //
                colors: ['Chrome', 'Chartreuse'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Shallow, Windy, Hard-Bottom Flats',
                    description: 'This is a perfect storm for big drum. Find a shallow (2-8 ft) flat with rock or gravel that is getting hit hard by the wind.'
                }, //
                tips: [{
                    title: 'Fish the Windy Bank',
                    description: 'This is where the warmest, most oxygenated, and food-rich water will be.'
                }, {
                    title: 'Burn it Back',
                    description: 'Retrieve a rattling lure very quickly to trigger an instinctive bite.'
                }, {
                    title: 'Use a Strong Rod',
                    description: 'Casting heavy lures in the wind and fighting strong fish requires a solid medium-power rod.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Fish on bottom in calm areas.',
                    reason: 'Scent is most reliable.'
                }, {
                    name: 'Blade Bait',
                    technique: 'Jig vertically in calm pockets.',
                    reason: 'Vibration is still effective.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Use a heavy sinker to hold bottom.',
                    reason: 'A simple, effective bait for tough conditions.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Make repeated casts to calm pockets.',
                    reason: 'The sound can draw fish out of hiding.'
                }], //
                colors: ['Silver', 'Gold'], //
                gear: gearMap.freshwaterdrum, //
                location: {
                    title: 'Calm Pockets near Windy Areas',
                    description: 'Drum will often tuck into a calm cove or the quiet side of a point to get a break from the wind and waves.'
                }, //
                tips: [{
                    title: 'Find the Calm in the Storm',
                    description: 'Look for small pockets of calm water adjacent to the main windy areas.'
                }, {
                    title: 'Patience is Required',
                    description: 'This is a tough combination of conditions. The bite will be slow.'
                }, {
                    title: 'Fresh Bait is Best',
                    description: 'Even more so in cold and muddy water, use the freshest bait you can find.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Dragging lures on the bottom will dull hooks quickly. Check them often.'
                }] //
            }
        }
    }
},
               crappie: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Small Jigs under a Bobber',
                    technique: 'Set to a specific depth.',
                    reason: 'Keeps bait in the strike zone.',
                    isPrimary: true
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Worms or minnows.',
                    reason: 'Natural presentation.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Use a slow, steady retrieve around cover.',
                    reason: 'Helps locate active schools of fish holding in the shade.'
                }, {
                    name: 'Drop Shot',
                    technique: 'Fish vertically in deeper shade or brush piles.',
                    reason: 'A great way to present a small bait at a precise depth.'
                }], //
                colors: ['White', 'Shock Pink'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Shade Lines',
                    description: 'Panfish will be tightly packed into any available shade, especially under docks and overhanging trees.'
                }, //
                tips: [{
                    title: 'Find the Shade',
                    description: 'Panfish will be tightly packed into any available shade.'
                }, {
                    title: 'Set the Depth',
                    description: 'Adjust your bobber stop until you find the exact depth the fish are holding.'
                }, {
                    title: 'Light Line',
                    description: 'Use 2-4lb line for a more natural presentation.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Wax Worms',
                    technique: 'On a small jig.',
                    reason: 'Classic ice fishing bait.'
                }, {
                    name: 'Small Minnows',
                    technique: 'Under a bobber.',
                    reason: 'Lively action.'
                }, {
                    name: 'Small Jigs',
                    technique: 'Fish vertically with very subtle twitches.',
                    reason: 'A simple plastic on a light jighead is a go-to for cool water crappie.'
                }, {
                    name: 'Small Jigging Spoon',
                    technique: 'Use tiny hops off the bottom near cover.',
                    reason: 'The flash and flutter can trigger a reaction strike when they won\'t eat anything else.'
                }], //
                colors: ['Chartreuse', 'White'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Sunny Side of Cover',
                    description: 'Panfish will move to the sunny side of cover like docks or laydowns to warm up.'
                }, //
                tips: [{
                    title: 'Fish the Sunny Side',
                    description: 'Panfish will move to the sunny side of cover to warm up.'
                }, {
                    title: 'Slow, Slow, Slow',
                    description: 'Use a very slow presentation. Sometimes no movement at all is best.'
                }, {
                    title: 'Use a Spring Bobber',
                    description: 'A spring bobber on your rod tip can help detect the lightest bites.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'On the bottom.',
                    reason: 'Scent is everything.'
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Under a float.',
                    reason: 'Scent and movement.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve very slowly next to cover.',
                    reason: 'The blade\'s vibration helps fish find the lure in dirty water.'
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip a brightly colored jig with a minnow.',
                    reason: 'Combines the key triggers of color, scent, and vibration.'
                }], //
                colors: ['Chartreuse', 'Orange'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Shallow Cover',
                    description: 'In muddy water, live bait is by far the most effective. Find a likely spot with cover and let the fish find your bait.'
                }, //
                tips: [{
                    title: 'Scent is Everything',
                    description: 'In muddy water, live bait is by far the most effective.'
                }, {
                    title: 'Stay Put',
                    description: 'Find a likely spot and give the fish time to find your bait by smell.'
                }, {
                    title: 'Use a Bait Feeder',
                    description: 'A bait feeder style reel can help you detect bites.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Jigs with Scent',
                    technique: 'Fish slowly.',
                    reason: 'Bright color and smell.'
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Under a high-vis bobber.',
                    reason: 'Detect subtle bites.'
                }, {
                    name: 'Small Rattling Lures',
                    technique: 'Fish slowly with a lift-and-fall retrieve.',
                    reason: 'The added sound can help call in fish in very low visibility.'
                }, {
                    name: 'Scented Glow Jigs',
                    technique: 'Charge the glow and tip with a minnow.',
                    reason: 'Provides the ultimate combination of sight, sound, and smell for tough conditions.'
                }], //
                colors: ['Shock Pink', 'Chartreuse'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Shallow Banks',
                    description: 'Panfish will often be in less than two feet of water. Use a bright bobber to detect bites.'
                }, //
                tips: [{
                    title: 'Fish Right on the Bank',
                    description: 'Panfish will often be in less than two feet of water.'
                }, {
                    title: 'Use a High-Vis Bobber',
                    description: 'A bright bobber will help you detect the subtle bites.'
                }, {
                    title: 'Go Slow',
                    description: 'The slower the presentation, the better.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Small Spinners',
                    technique: 'Cover water.',
                    reason: 'Find active schools.'
                }, {
                    name: 'Beetle Spins',
                    technique: 'Fan cast areas.',
                    reason: 'Flash and thump.'
                }, {
                    name: 'Small Jigs',
                    technique: 'Cast and swim the jig through the middle of the water column.',
                    reason: 'A subtle presentation for schools of active, roaming crappie.'
                }, {
                    name: 'Small Swimbait',
                    technique: 'Use a slow, steady retrieve.',
                    reason: 'Perfectly mimics the small minnows crappie are feeding on.'
                }], //
                colors: ['White', 'Yellow'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Shallow Flats',
                    description: 'Cloud cover makes panfish spread out and roam shallow flats. Use small spinners to cover water and find them.'
                }, //
                tips: [{
                    title: 'Fish are Roaming',
                    description: 'Cloud cover makes panfish spread out and roam shallow flats.'
                }, {
                    title: 'Cover Water',
                    description: 'Use a small spinner to cast and retrieve and find where the schools are.'
                }, {
                    title: 'Fan Cast',
                    description: 'Make casts in a fan pattern to cover all the water in front of you.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Small Jigs',
                    technique: 'Slow swimming retrieve.',
                    reason: 'Subtle presentation.',
                    isPrimary: true
                }, {
                    name: 'Crappie Tubes',
                    technique: 'Cast and retrieve.',
                    reason: 'Watch your line for bites.'
                }, {
                    name: 'Small Crankbait',
                    technique: 'Retrieve slowly with pauses along weed edges.',
                    reason: 'Can trigger aggressive strikes from bigger crappie.'
                }, {
                    name: 'Small Inline Spinner',
                    technique: 'Use a slow, steady retrieve.',
                    reason: 'The flash of a spinner is highly effective under overcast skies.'
                }], //
                colors: ['Black', 'Blue'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Shallow Weed Beds',
                    description: 'A slow, swimming retrieve with a small jig can be deadly over the top of shallow vegetation.'
                }, //
                tips: [{
                    title: 'Cast and Retrieve Slowly',
                    description: 'A slow, swimming retrieve with a small jig can be deadly.'
                }, {
                    title: 'Watch Your Line',
                    description: 'Often you won\'t feel the bite, but you will see your line jump or move sideways.'
                }, {
                    title: 'Use a Loop Knot',
                    description: 'A loop knot will give your jig more freedom of movement.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Under a bobber.',
                    reason: 'Scent is key.'
                }, {
                    name: 'Minnows',
                    technique: 'Fish near inflows.',
                    reason: 'Attracts fish.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve very slowly.',
                    reason: 'The blade provides vibration for fish to find it.'
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip with a minnow and fish under a float.',
                    reason: 'Combines color, scent, and action.'
                }], //
                colors: ['Chartreuse', 'Shock Pink'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'River/Creek Inflows',
                    description: 'Any source of clearer water will concentrate panfish. Use a small hook and live bait.'
                }, //
                tips: [{
                    title: 'Fish the Inflows',
                    description: 'Any source of clearer water will concentrate panfish.'
                }, {
                    title: 'Use a Small Hook',
                    description: 'Don\'t use a hook that is too large for their small mouths.'
                }, {
                    title: 'Go Bright',
                    description: 'Use a brightly colored jig head with your live bait.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Jigs',
                    technique: 'Add a crappie nibble.',
                    reason: 'Extra scent.'
                }, {
                    name: 'Scented Baits',
                    technique: 'Fish very slow.',
                    reason: 'Tough conditions.'
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Fish under a sensitive float.',
                    reason: 'The most reliable producer in tough conditions.'
                }, {
                    name: 'Small Rattling Lures',
                    technique: 'Jig vertically with subtle shakes.',
                    reason: 'The sound can help attract fish in zero visibility.'
                }], //
                colors: ['Orange', 'Chartreuse'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Shallowest, Calmest Water',
                    description: 'A very slow presentation is key in cool, muddy water. Panfish will often be surprisingly shallow.'
                }, //
                tips: [{
                    title: 'Slow it Down',
                    description: 'A very slow presentation is key in cool, muddy water.'
                }, {
                    title: 'Stay Shallow',
                    description: 'Even in these conditions, panfish will often be surprisingly shallow.'
                }, {
                    title: 'Add a Crappie Nibble',
                    description: 'The extra scent can make a big difference.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Under a float.',
                    reason: 'Rain washes in food.',
                    isPrimary: true
                }, {
                    name: 'Small Jigs',
                    technique: 'Cast to the bank.',
                    reason: 'Fish are feeding shallow.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve slowly through run-off areas.',
                    reason: 'A classic lure that excels when fish are feeding aggressively.'
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Use a light split shot and drift it.',
                    reason: 'A natural presentation for rain-activated crappie.'
                }], //
                colors: ['Black', 'White'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Shallow Banks',
                    description: 'Rain washes insects into the water, and panfish go on a feeding frenzy right up against the bank.'
                }, //
                tips: [{
                    title: 'Rain Means Food',
                    description: 'Rain washes insects into the water, and panfish go on a feeding frenzy.'
                }, {
                    title: 'Fish Right on the Bank',
                    description: 'Cast right up to the water\'s edge.'
                }, {
                    title: 'Use a Float',
                    description: 'A small float will help you detect bites.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Crappie Minnows',
                    technique: 'Drift in current.',
                    reason: 'Natural presentation.'
                }, {
                    name: 'Wax Worms',
                    technique: 'On a small jig.',
                    reason: 'Classic bait.'
                }, {
                    name: 'Small Jigs',
                    technique: 'Cast into eddies and let it sink.',
                    reason: 'Imitates a washed-out insect or grub.'
                }, {
                    name: 'Small Inline Spinner',
                    technique: 'Swing it through current breaks.',
                    reason: 'The flash can attract bites from fish holding in slack water.'
                }], //
                colors: ['Shock Pink', 'Chartreuse'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Current Breaks',
                    description: 'Fish will sit behind rocks or logs to get out of the current. Drift your bait naturally past them.'
                }, //
                tips: [{
                    title: 'Find Current Breaks',
                    description: 'Fish will sit behind rocks or logs to get out of the current.'
                }, {
                    title: 'Drift with the Current',
                    description: 'Drift your bait under a bobber naturally with the current.'
                }, {
                    title: 'Stay Mobile',
                    description: 'If you don\'t get a bite in a few minutes, move.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Live Worms',
                    technique: 'On the bottom.',
                    reason: 'Scent is king.'
                }, {
                    name: 'Minnows',
                    technique: 'Under a float.',
                    reason: 'Scent and vibration.'
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip with a minnow for maximum attraction.',
                    reason: 'Combines the top three triggers: color, scent, and action.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve extremely slowly.',
                    reason: 'The vibration from the blade is key.'
                }], //
                colors: ['Chartreuse', 'Orange'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Calmest Water',
                    description: 'In muddy, rainy conditions, live bait is your best option. Find a cove or area protected from the main flow.'
                }, //
                tips: [{
                    title: 'Scent is King',
                    description: 'In muddy, rainy conditions, live bait is your best and only option.'
                }, {
                    title: 'Fish the Calmest Water',
                    description: 'Find a cove or area protected from the main flow.'
                }, {
                    title: 'Bottom Fishing',
                    description: 'Let your bait sit right on the bottom.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Scented Jigs',
                    technique: 'Dead-stick it.',
                    reason: 'Patience is key.'
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Keep it simple.',
                    reason: 'Tough conditions.'
                }, {
                    name: 'Worms',
                    technique: 'Fish a small piece on the bottom.',
                    reason: 'A reliable scent-based bait.'
                }, {
                    name: 'Scented Glow Jigs',
                    technique: 'Tip with a minnow and let it sit.',
                    reason: 'The best possible combination for the absolute toughest bite.'
                }], //
                colors: ['Shock Pink', 'Chartreuse'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Protected Areas',
                    description: 'These are tough conditions. You have to be patient and let the fish find your scented bait in calm areas.'
                }, //
                tips: [{
                    title: 'Patience',
                    description: 'These are tough conditions. You have to be patient and let the fish find your bait.'
                }, {
                    title: 'Use a Light',
                    description: 'At night, a small submersible light can attract baitfish, and then panfish.'
                }, {
                    title: 'Keep it Simple',
                    description: 'A hook, a sinker, and a worm is all you need.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Drift under a slip bobber.',
                    reason: 'A controlled drift is a great way to cover water.'
                }, {
                    name: 'Drop Shot',
                    technique: 'Use a heavier weight.',
                    reason: 'Maintains contact in wind.'
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Drift on a light jighead.',
                    reason: 'A natural presentation that covers a lot of water.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Cast downwind and retrieve slowly.',
                    reason: 'Lets you cover flats and find scattered schools.'
                }], //
                colors: ['White', 'Shock Pink', 'Yellow'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Windy Side of Flats',
                    description: 'Use a drift sock to slow your drift across large flats where panfish will be feeding on stirred-up organisms.'
                }, //
                tips: [{
                    title: 'Use the Wind to Drift',
                    description: 'A controlled drift with a slip bobber is a great way to cover water.'
                }, {
                    title: 'Heavier Weight',
                    description: 'Use a heavier sinker or jig to maintain contact in the wind.'
                }, {
                    title: 'Long Rod',
                    description: 'A long crappie rod will help you control your line in the wind.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Crappie Minnows',
                    technique: 'Anchor upwind and cast.',
                    reason: 'Live bait is effective.'
                }, {
                    name: 'Jigs',
                    technique: 'Use a heavier jig.',
                    reason: 'Helps feel bites.'
                }, {
                    name: 'Small Rattling Lures',
                    technique: 'Cast along windy banks.',
                    reason: 'The sound helps fish find the lure in the chop.'
                }, {
                    name: 'Small Inline Spinner',
                    technique: 'Use a weighted spinner for long casts.',
                    reason: 'The flash attracts active fish on windy shorelines.'
                }], //
                colors: ['Chartreuse', 'White'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Windy Shorelines',
                    description: 'The wind will concentrate food on the downwind shore. Anchor upwind of a likely spot and cast to it.'
                }, //
                tips: [{
                    title: 'Find the Windy Side',
                    description: 'The wind will concentrate food on the downwind shore.'
                }, {
                    title: 'Anchor Upwind',
                    description: 'Anchor your boat upwind of a school and cast to them.'
                }, {
                    title: 'Use a Heavier Jig',
                    description: 'A 1/16 or 1/8 oz jig will help you feel bites.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Crappie Minnows',
                    technique: 'Use a heavy, stable bobber.',
                    reason: 'Won\'t blow around.'
                }, {
                    name: 'Worms',
                    technique: 'Inject with air to float.',
                    reason: 'Keeps it off bottom.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve slowly along cover in calm pockets.',
                    reason: 'The vibration helps fish locate the lure.'
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip with a minnow and fish under a float.',
                    reason: 'A bright, scented target for low visibility.'
                }], //
                colors: ['Chartreuse', 'Orange'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Calm Pockets',
                    description: 'Find any small area that is protected from the main wind and fish live bait slowly.'
                }, //
                tips: [{
                    title: 'Fish the Calm Pockets',
                    description: 'Find any small area that is protected from the main wind.'
                }, {
                    title: 'Heavy Bobber',
                    description: 'Use a heavy bobber that won\'t get blown around as much.'
                }, {
                    title: 'Use a Bait Injector',
                    description: 'Injecting air into a worm can help it float off the bottom.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Scented Jigs',
                    technique: 'Dead-stick presentation.',
                    reason: 'Let it sit.'
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Fish very slow.',
                    reason: 'Tough conditions.'
                }, {
                    name: 'Wax Worms',
                    technique: 'Fish on a small jig on the bottom.',
                    reason: 'A classic bait for the toughest bites.'
                }, {
                    name: 'Scented Glow Jigs',
                    technique: 'The ultimate combination for visibility and scent.',
                    reason: 'Gives you the best chance in the worst conditions.'
                }], //
                colors: ['Shock Pink', 'Chartreuse'], //
                gear: gearMap.crappie, //
                location: {
                    title: 'Warmest, Calmest, Clearest Water',
                    description: 'This is the toughest combination. Focus on finding the warmest, calmest, clearest water you can and fish very slowly.'
                }, //
                tips: [{
                    title: 'Tough Conditions',
                    description: 'This is the toughest combination. Focus on finding the warmest, calmest, clearest water you can.'
                }, {
                    title: 'Go Slow',
                    description: 'A dead-stick presentation is often best.'
                }, {
                    title: 'Stay Home',
                    description: 'Sometimes, the best fishing trip is the one you don\'t take!'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'Panfish have delicate mouths. A gentle flick is all that is needed.'
                }] //
            }
        }
    }
},
              catfish: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Cut Bait (Shad/Sucker)',
                    technique: 'Fish on the bottom in deep holes.',
                    reason: 'Natural scent trail is irresistible.',
                    isPrimary: true
                }, {
                    name: 'Live Bluegill',
                    technique: 'Suspend under a large float near cover.',
                    reason: 'Targets large, predatory flatheads.'
                }, {
                    name: 'Chicken Livers',
                    technique: 'Use a treble hook and bait mesh to secure it.',
                    reason: 'A classic bait with a powerful scent for channel catfish.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Fish a large bunch on a hook near the bottom.',
                    reason: 'An effective bait for all catfish species, especially in river current.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Deepest River Bends & Holes',
                    description: 'Catfish will seek refuge from the sun in the deepest, coolest water available. Look for outside river bends and deep holes.'
                }, //
                tips: [{
                    title: 'Find the Deepest Hole',
                    description: 'During the day, catfish will stack up in the deepest water they can find.'
                }, {
                    title: 'Fresh Bait is Best',
                    description: 'Use fresh cut bait for the strongest scent trail. Oily fish work well.'
                }, {
                    title: 'Use a Circle Hook',
                    description: 'Circle hooks result in more jaw hooksets, which is better for the fish and easier to unhook.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Fish on the bottom.',
                    reason: 'Scent is key for lethargic fish.'
                }, {
                    name: 'Chicken Livers',
                    technique: 'Use a treble hook and bait mesh.',
                    reason: 'Classic, strong-scented bait.'
                }, {
                    name: 'Live Minnow',
                    technique: 'Hook a large minnow on a jig or bottom rig.',
                    reason: 'The struggling action can trigger bites from less active catfish.'
                }, {
                    name: 'Stink Bait',
                    technique: 'Use a dip worm or tube to hold the bait.',
                    reason: 'A powerful scent attractant that works well in cooler water.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Sunny, Shallow Flats (at night)',
                    description: 'The water warms up fastest on shallow flats. Fish will move into these areas to feed after dark.'
                }, //
                tips: [{
                    title: 'Night Fishing is Prime',
                    description: 'Catfish will move from their deep daytime holes to shallow flats to feed at night.'
                }, {
                    title: 'Let it Sit',
                    description: 'Patience is key. Let your bait soak to allow the scent to spread.'
                }, {
                    title: 'Secure Your Livers',
                    description: 'Use bait mesh or thread to keep soft chicken livers on the hook.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Stink Bait',
                    technique: 'Let it soak on the bottom.',
                    reason: 'Maximum scent for zero visibility.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Use a large bunch on a hook.',
                    reason: 'Classic bait that works everywhere.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Use fresh, oily bait for the strongest scent trail.',
                    reason: 'A top choice for targeting bigger catfish in muddy water.'
                }, {
                    name: 'Chicken Livers',
                    technique: 'Fish in areas with current to spread the scent.',
                    reason: 'A strong, distinct scent that fish can find easily.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Shallow Flats & Creek Mouths',
                    description: 'Muddy water gives catfish the confidence to feed in shallow water, even during the day. Look for incoming water.'
                }, //
                tips: [{
                    title: 'Scent is Everything',
                    description: 'In muddy water, catfish hunt exclusively by smell and vibration. Use punch baits.'
                }, {
                    title: 'Fish Shallow',
                    description: 'Don\'t be afraid to fish in only a few feet of water, especially near incoming creeks.'
                }, {
                    title: 'Use a Bait Feeder Reel',
                    description: 'This allows the fish to take the bait without feeling resistance.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Use oily fish like shad or mackerel.',
                    reason: 'Oily fish release more scent.',
                    isPrimary: true
                }, {
                    name: 'Chicken Livers',
                    technique: 'An old-school classic for a reason.',
                    reason: 'Strong, distinct scent trail.'
                }, {
                    name: 'Stink Bait',
                    technique: 'Use a dip tube to ensure a potent scent.',
                    reason: 'A highly effective bait that excels in low visibility.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Use a large bunch for a bigger target and more scent.',
                    reason: 'A universally effective catfish bait.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Calm Pockets & Eddies',
                    description: 'Catfish will get out of the main, muddy flow and hold in calmer pockets of water. Find these and you\'ll find the fish.'
                }, //
                tips: [{
                    title: 'Patience Pays Off',
                    description: 'This can be a slow bite, but the fish you catch are often large.'
                }, {
                    title: 'Find the Calmest Water',
                    description: 'Look for any area protected from the main current.'
                }, {
                    title: 'Use a Bell',
                    description: 'A bell on your rod tip is a great way to detect bites when you\'re not holding the rod.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Fish on bottom near structure.',
                    reason: 'Clouds make catfish roam more.'
                }, {
                    name: 'Live Bluegill',
                    technique: 'Fish near log jams for flatheads.',
                    reason: 'Big bait for a big predator.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Drift along channel edges.',
                    reason: 'A great bait for finding actively feeding channel cats.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Retrieve slowly, bumping the bottom.',
                    reason: 'Can trigger aggressive strikes from flathead catfish.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Mid-depth Flats and Channel Edges',
                    description: 'Cloud cover allows catfish to move out of their deep holes and roam on adjacent flats and channel edges to feed.'
                }, //
                tips: [{
                    title: 'Fish are Roaming',
                    description: 'Cloud cover makes catfish more comfortable moving shallower to feed.'
                }, {
                    title: 'Target Structure on Flats',
                    description: 'Any isolated log or rock on a flat can hold a big catfish.'
                }, {
                    title: 'Circle Hooks are Key',
                    description: 'Use circle hooks for better hooksets and easier releases.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Fish on bottom.',
                    reason: 'Scent is most important.'
                }, {
                    name: 'Live Minnow',
                    technique: 'Can trigger bites from less active fish.',
                    reason: 'Vibration attracts attention.'
                }, {
                    name: 'Chicken Livers',
                    technique: 'A classic choice for channel catfish.',
                    reason: 'The strong scent is highly effective.'
                }, {
                    name: 'Stink Bait',
                    technique: 'Let it soak on the bottom near transition areas.',
                    reason: 'A powerful attractant for catfish moving up to feed.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Transition Areas',
                    description: 'Focus on areas where deep water transitions to shallower flats. The fish will use these as highways.'
                }, //
                tips: [{
                    title: 'Focus on Transitions',
                    description: 'Fish the edges where deep water meets a shallow flat.'
                }, {
                    title: 'Use a Slip-Sinker Rig',
                    description: 'This allows the fish to pick up the bait and run without feeling the weight.'
                }, {
                    title: 'Keep Your Bait Fresh',
                    description: 'Change your cut bait every 20-30 minutes to maintain a strong scent trail.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Stink Bait',
                    technique: 'Let it soak on the bottom.',
                    reason: 'Maximum scent for zero visibility.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Use a large bunch on a hook.',
                    reason: 'Classic bait that works everywhere.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Use fresh bait for the best scent trail.',
                    reason: 'The top choice for targeting trophy catfish.'
                }, {
                    name: 'Chicken Livers',
                    technique: 'An excellent choice for channel cats in warm, muddy water.',
                    reason: 'The scent disperses extremely well.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Shallow Flats & Creek Mouths',
                    description: 'Muddy water gives catfish the confidence to feed in shallow water, even during the day. Look for incoming water.'
                }, //
                tips: [{
                    title: 'Scent is Everything',
                    description: 'In muddy water, catfish hunt exclusively by smell and vibration. Use punch baits.'
                }, {
                    title: 'Fish Shallow',
                    description: 'Don\'t be afraid to fish in only a few feet of water, especially near incoming creeks.'
                }, {
                    title: 'Use a Bait Feeder Reel',
                    description: 'This allows the fish to take the bait without feeling resistance.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Use oily fish like shad or mackerel.',
                    reason: 'Oily fish release more scent.'
                }, {
                    name: 'Chicken Livers',
                    technique: 'An old-school classic for a reason.',
                    reason: 'Strong, distinct scent trail.'
                }, {
                    name: 'Stink Bait',
                    technique: 'Let it soak on the bottom in calm areas.',
                    reason: 'A great choice for attracting numbers of fish.'
                }, {
                    name: 'Live Minnow',
                    technique: 'Fish under a float in eddies.',
                    reason: 'The struggling action can trigger a bite.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Calm Pockets & Eddies',
                    description: 'Catfish will get out of the main, muddy flow and hold in calmer pockets of water. Find these and you\'ll find the fish.'
                }, //
                tips: [{
                    title: 'Patience Pays Off',
                    description: 'This can be a slow bite, but the fish you catch are often large.'
                }, {
                    title: 'Find the Calmest Water',
                    description: 'Look for any area protected from the main current.'
                }, {
                    title: 'Use a Bell',
                    description: 'A bell on your rod tip is a great way to detect bites when you\'re not holding the rod.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Fish near inflows.',
                    reason: 'Rain washes food in.'
                }, {
                    name: 'Live Bluegill',
                    technique: 'Active fish will chase a meal.',
                    reason: 'Targets bigger fish.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Fish on the bottom where rain is washing in.',
                    reason: 'A natural presentation that matches what\'s being washed in.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Retrieve slowly near inflows for flatheads.',
                    reason: 'An unconventional but effective way to trigger predatory flatheads.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Creek Mouths & Runoffs',
                    description: 'Rain washes nutrients and food into the main body of water, and catfish will congregate in these areas to feed.'
                }, //
                tips: [{
                    title: 'Rain Means Feeding Time',
                    description: 'A summer rain often triggers an aggressive catfish bite.'
                }, {
                    title: 'Fish the Inflows',
                    description: 'Target any area where fresh, rain-swollen water is entering the lake or river.'
                }, {
                    title: 'Stay Safe',
                    description: 'Be aware of lightning and rising water levels.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Nightcrawlers',
                    technique: 'A big bunch on a hook.',
                    reason: 'Rain makes worms active.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Always a good choice.',
                    reason: 'Reliable scent trail.'
                }, {
                    name: 'Live Minnow',
                    technique: 'Fish in current breaks and eddies.',
                    reason: 'The struggling action gets noticed in the current.'
                }, {
                    name: 'Chicken Livers',
                    technique: 'Let the current carry the scent downstream.',
                    reason: 'A powerful scent that travels well in moving water.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Current Breaks',
                    description: 'The increased current will position fish predictably behind any object that breaks the flow.'
                }, //
                tips: [{
                    title: 'Find the Current Break',
                    description: 'Any log, rock, or bridge piling can hold a fish.'
                }, {
                    title: 'Natural Bait is Best',
                    description: 'Rain makes worms and other natural prey active, so matching that is a good strategy.'
                }, {
                    title: 'Keep Your Line Tight',
                    description: 'The current can create slack in your line, making it hard to detect bites.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Stink Bait',
                    technique: 'Let it soak on the bottom.',
                    reason: 'Maximum scent for zero visibility.',
                    isPrimary: true
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Use a large bunch on a hook.',
                    reason: 'Classic bait that works everywhere.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Use an oily fish like shad or sucker.',
                    reason: 'The top bait for targeting the largest fish in the system.'
                }, {
                    name: 'Chicken Livers',
                    technique: 'Fish in the strongest current you can find.',
                    reason: 'The scent trail will be massive in the moving water.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Main River Channels & Bottlenecks',
                    description: 'Rain and muddy water turn on the bite. Fish the main channel or any bottleneck that concentrates the current and feeding fish.'
                }, //
                tips: [{
                    title: 'Scent is Everything',
                    description: 'In muddy water, catfish hunt exclusively by smell and vibration. Use punch baits.'
                }, {
                    title: 'Fish Shallow',
                    description: 'Don\'t be afraid to fish in only a few feet of water, especially near incoming creeks.'
                }, {
                    title: 'Use a Bait Feeder Reel',
                    description: 'This allows the fish to take the bait without feeling resistance.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Use oily fish like shad or mackerel.',
                    reason: 'Oily fish release more scent.'
                }, {
                    name: 'Chicken Livers',
                    technique: 'An old-school classic for a reason.',
                    reason: 'Strong, distinct scent trail.'
                }, {
                    name: 'Stink Bait',
                    technique: 'Best for attracting numbers of channel cats.',
                    reason: 'The scent disperses well in cold, muddy water.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'A reliable backup for any situation.',
                    reason: 'Catfish will always eat a worm.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Calm Pockets & Eddies',
                    description: 'Catfish will get out of the main, muddy flow and hold in calmer pockets of water. Find these and you\'ll find the fish.'
                }, //
                tips: [{
                    title: 'Patience Pays Off',
                    description: 'This can be a slow bite, but the fish you catch are often large.'
                }, {
                    title: 'Find the Calmest Water',
                    description: 'Look for any area protected from the main current.'
                }, {
                    title: 'Use a Bell',
                    description: 'A bell on your rod tip is a great way to detect bites when you\'re not holding the rod.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Fish on windy points.',
                    reason: 'Bait gets pushed to these areas.'
                }, {
                    name: 'Live Bait under a Slip Float',
                    technique: 'Drift across windy flats.',
                    reason: 'Covers water to find active fish.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Drift on a Carolina rig.',
                    reason: 'A simple and effective way to cover windy flats.'
                }, {
                    name: 'Rattling Lipless Crankbait',
                    technique: 'Cast and retrieve along the mudline created by waves.',
                    reason: 'Can trigger aggressive flatheads using the dirty water to ambush prey.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Wind-Blown Points & Shorelines',
                    description: 'The wind will push baitfish and create a "mudline" that catfish use for cover. Fish these areas.'
                }, //
                tips: [{
                    title: 'Fish the Windy Side',
                    description: 'Wind concentrates baitfish and creates feeding opportunities for catfish.'
                }, {
                    title: 'Use a Drift Sock',
                    description: 'A drift sock can slow your boat for a more controlled presentation while drifting.'
                }, {
                    title: 'Anchor Upwind',
                    description: 'Find a key spot like a point and anchor upwind, casting your baits into the area.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Use a heavy sinker.',
                    reason: 'Keeps bait pinned in the wind.'
                }, {
                    name: 'Live Bait',
                    technique: 'The action can trigger bites.',
                    reason: 'More visible in chop.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Fish a large bunch on the bottom.',
                    reason: 'A reliable bait that holds up well in the wind.'
                }, {
                    name: 'Stink Bait',
                    technique: 'Use a heavy sinker to keep it stationary.',
                    reason: 'The wind-driven current will carry the scent a long way.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Windy Side of Deep Structure',
                    description: 'Fish will hold on the downwind side of deep humps and points, waiting for bait to be pushed over the top.'
                }, //
                tips: [{
                    title: 'Use a Heavy Sinker',
                    description: 'You need enough weight to keep your bait on the bottom and maintain contact.'
                }, {
                    title: 'Braided Line Helps',
                    description: 'Braid has a thinner diameter and cuts through the wind and water better.'
                }, {
                    title: 'Look for the Mudline',
                    description: 'Find where the wind is churning the bottom, creating a distinct edge of muddy water.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Stink Bait',
                    technique: 'Let it soak on the bottom.',
                    reason: 'Maximum scent for zero visibility.'
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Use a large bunch on a hook.',
                    reason: 'Classic bait that works everywhere.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Use fresh, oily bait on the windy bank.',
                    reason: 'The ultimate big-fish bait in prime conditions.'
                }, {
                    name: 'Chicken Livers',
                    technique: 'Secure well and fish in high-current areas.',
                    reason: 'A powerful scent that travels well in windy, muddy water.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Shallow Flats & Creek Mouths',
                    description: 'Muddy water gives catfish the confidence to feed in shallow water, even during the day. Look for incoming water.'
                }, //
                tips: [{
                    title: 'Scent is Everything',
                    description: 'In muddy water, catfish hunt exclusively by smell and vibration. Use punch baits.'
                }, {
                    title: 'Fish Shallow',
                    description: 'Don\'t be afraid to fish in only a few feet of water, especially near incoming creeks.'
                }, {
                    title: 'Use a Bait Feeder Reel',
                    description: 'This allows the fish to take the bait without feeling resistance.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Cut Bait',
                    technique: 'Use oily fish like shad or mackerel.',
                    reason: 'Oily fish release more scent.'
                }, {
                    name: 'Chicken Livers',
                    technique: 'An old-school classic for a reason.',
                    reason: 'Strong, distinct scent trail.'
                }, {
                    name: 'Stink Bait',
                    technique: 'Fish in calm pockets out of the main wind.',
                    reason: 'The scent will concentrate in these calmer areas.'
                }, {
                    name: 'Live Minnow',
                    technique: 'Use a large, lively minnow.',
                    reason: 'The extra vibration helps it get noticed.'
                }], //
                colors: [], //
                gear: gearMap.catfish, //
                location: {
                    title: 'Calm Pockets & Eddies',
                    description: 'Catfish will get out of the main, muddy flow and hold in calmer pockets of water. Find these and you\'ll find the fish.'
                }, //
                tips: [{
                    title: 'Patience Pays Off',
                    description: 'This can be a slow bite, but the fish you catch are often large.'
                }, {
                    title: 'Find the Calmest Water',
                    description: 'Look for any area protected from the main current.'
                }, {
                    title: 'Use a Bell',
                    description: 'A bell on your rod tip is a great way to detect bites when you\'re not holding the rod.'
                }, {
                    title: 'Strong Gear is a Must',
                    description: 'Big catfish are incredibly powerful. Use heavy-duty gear.'
                }] //
            }
        }
    }
},
				              brooktrout: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Live Worms',
                    technique: 'Drift under a small float.',
                    reason: 'The most natural and irresistible bait for wary brook trout.',
                    isPrimary: true
                }, {
                    name: 'Small Spinners',
                    technique: 'Cast upstream and retrieve with the current.',
                    reason: 'The flash triggers aggressive strikes.'
                }, {
                    name: 'Small Jigs',
                    technique: 'Use a micro jig tipped with a wax worm.',
                    reason: 'A subtle presentation for targeting fish in deep, shaded pools.'
                }, {
                    name: 'Spoons',
                    technique: 'Use a tiny spoon and let it flutter in the current.',
                    reason: 'The wobble mimics a small, injured minnow.'
                }], //
                colors: ['Gold', 'Silver', 'Black'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Deep, Shaded Pools & Undercut Banks',
                    description: 'Brook trout will seek the coldest, most oxygenated water, which is in deep pools, especially those with shade from overhanging trees or undercut banks.'
                }, //
                tips: [{
                    title: 'Stealth is Everything',
                    description: 'Brook trout are extremely spooky. Wear drab clothing and approach streams carefully.'
                }, {
                    title: 'Drift Naturally',
                    description: 'Your worm or lure should drift at the same speed as the current.'
                }, {
                    title: 'Light Line',
                    description: 'Use a 2-4lb fluorocarbon leader as it is nearly invisible to wary fish.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Inline Spinners',
                    technique: 'Retrieve just fast enough to spin the blade.',
                    reason: 'A classic and highly effective lure for active brook trout.',
                    isPrimary: true
                }, {
                    name: 'Small Spoons',
                    technique: 'Let it flutter in the current.',
                    reason: 'Mimics a small, wounded baitfish.'
                }, {
                    name: 'Small Jerkbaits',
                    technique: 'Use a subtle twitch-pause retrieve.',
                    reason: 'Imitates a minnow, which can trigger larger, predatory brook trout.'
                }, {
                    name: 'Small Jigs',
                    technique: 'Cast and swim a 1/32oz jig with a plastic trailer.',
                    reason: 'A versatile lure that imitates a wide variety of forage.'
                }], //
                colors: ['Silver', 'Gold', 'Red'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Tailouts of Pools & Current Seams',
                    description: 'Active brook trout will position themselves where food is being delivered by the current, such as the downstream end of pools and along current seams.'
                }, //
                tips: [{
                    title: 'Cast Upstream',
                    description: 'Casting upstream and retrieving downstream presents the lure in the most natural way.'
                }, {
                    title: 'Polarized Glasses are a Must',
                    description: 'Good polarized sunglasses will help you spot fish, structure, and read the current.'
                }, {
                    title: 'Vary Your Retrieve',
                    description: 'Try different speeds and add occasional pauses or twitches to trigger a bite.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Live Worms',
                    technique: 'Let it sit on the bottom in calm areas.',
                    reason: 'Scent is the primary way they will find food.',
                    isPrimary: true
                }, {
                    name: 'Scented Dough Bait',
                    technique: 'Use a small hook and let it sit.',
                    reason: 'The strong scent can draw fish in from a distance.'
                }, {
                    name: 'Live Minnows',
                    technique: 'Fish under a float in the clearest water available.',
                    reason: 'The scent and vibration of a live minnow can be found easily.'
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip a bright jig with a wax worm for added scent.',
                    reason: 'Combines a visible target with a strong scent trail.'
                }], //
                colors: ['Hot Pink', 'Orange'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Calm Eddies & Backwaters',
                    description: 'Brook trout will get out of the main, muddy flow and rest in calm eddies and backwaters. Look for the clearest water available.'
                }, //
                tips: [{
                    title: 'Focus on Scent',
                    description: 'In muddy water, brook trout rely almost entirely on their sense of smell.'
                }, {
                    title: 'Stay Put',
                    description: 'Find a likely-looking calm spot and be patient. Give the scent time to work.'
                }, {
                    title: 'Use a Bell',
                    description: 'A small bell on your rod tip can help you detect bites while your rod is in a holder.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Live Minnows',
                    technique: 'Drift under a float in slower water.',
                    reason: 'A larger, smellier bait for less active fish.',
                    isPrimary: true
                }, {
                    name: 'Large Spinners',
                    technique: 'Retrieve very slowly.',
                    reason: 'The added vibration helps fish locate the lure.'
                }, {
                    name: 'Worms',
                    technique: 'Use a full nightcrawler for a bigger profile.',
                    reason: 'A large, scented bait for hungry trout in dirty water.'
                }, {
                    name: 'Small Crankbait',
                    technique: 'Use a bright, rattling model with a slow retrieve.',
                    reason: 'The sound and vibration can call in aggressive fish.'
                }], //
                colors: ['Chartreuse', 'White'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Behind Current Breaks',
                    description: 'Fish will tuck in behind large rocks or logs to get out of the heavy current and ambush whatever comes by.'
                }, //
                tips: [{
                    title: 'Go a Little Bigger',
                    description: 'A slightly larger lure or bait can be easier for fish to find in low visibility.'
                }, {
                    title: 'Fish Slowly',
                    description: 'Retrieve your lure just fast enough to feel it working. Fish will be less willing to chase.'
                }, {
                    title: 'Target Structure',
                    description: 'Any object that breaks the current is a potential hiding spot for a trout.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Small Jerkbaits',
                    technique: 'Use a twitch-twitch-pause retrieve.',
                    reason: 'Mimics a wounded minnow, which brook trout will readily attack.',
                    isPrimary: true
                }, {
                    name: 'Spoons',
                    technique: 'Let it flutter on the fall.',
                    reason: 'The flash and wobble are highly attractive.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Cast and retrieve at a medium pace.',
                    reason: 'The flash of a spinner is highly effective under overcast skies.'
                }, {
                    name: 'Worms',
                    technique: 'Drift under a float through likely runs.',
                    reason: 'A natural presentation for trout that may be wary of hardware.'
                }], //
                colors: ['Rainbow Trout', 'Silver', 'Black'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Roaming Shallow Flats',
                    description: 'Cloud cover makes brook trout feel secure and they will leave their deep holes to actively hunt for food in shallower areas.'
                }, //
                tips: [{
                    title: 'Fish are Hunting',
                    description: 'Cloudy days are prime time. Brook trout will be more aggressive and willing to chase your lures.'
                }, {
                    title: 'Cover Water',
                    description: 'Stay mobile and cast to likely spots like submerged logs, rocks, and weed edges.'
                }, {
                    title: 'Watch for a Follow',
                    description: 'Brook trout will often follow a lure. If you see one, pause your retrieve to trigger a strike.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Inline Spinners',
                    technique: 'Slow, steady retrieve.',
                    reason: 'The absolute best conditions for a spinner bite.',
                    isPrimary: true
                }, {
                    name: 'Small Swimbaits',
                    technique: 'Use a slow, steady retrieve.',
                    reason: 'A realistic presentation for educated fish.'
                }, {
                    name: 'Small Spoons',
                    technique: 'Use an erratic retrieve with pauses.',
                    reason: 'The flutter on the pause is an excellent trigger for following trout.'
                }, {
                    name: 'Small Crankbait',
                    technique: 'Retrieve steadily over flats or along drop-offs.',
                    reason: 'Covers water quickly to find active schools of feeding trout.'
                }], //
                colors: ['Gold', 'Perch', 'White'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'All Water Depths',
                    description: 'These are perfect conditions. Trout will be actively feeding throughout the water column. Start shallow and work your way deeper until you find them.'
                }, //
                tips: [{
                    title: 'Prime Time Conditions',
                    description: 'This is as good as it gets for brook trout. Be ready for an active bite.'
                }, {
                    title: 'Match the Hatch',
                    description: 'Look for insects or minnows in the water and choose your lure color accordingly.'
                }, {
                    title: 'Steady Does It',
                    description: 'A slow, constant-speed retrieve is often the most effective with a spinner.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Live Worms',
                    technique: 'Fish on the bottom in calm pockets.',
                    reason: 'Scent is the most important factor.',
                    isPrimary: true
                }, {
                    name: 'Scented Jigs',
                    technique: 'Tip with a piece of worm.',
                    reason: 'Combines bright color with natural scent.'
                }, {
                    name: 'Live Minnows',
                    technique: 'Fish under a float in calm eddies.',
                    reason: 'The movement and scent will attract fish in the dirty water.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Retrieve slowly to create a noticeable thump.',
                    reason: 'The strong vibration helps fish locate your lure.'
                }], //
                colors: ['Hot Pink', 'Chartreuse'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Mouths of Clearer Inflows',
                    description: 'Find any small stream or ditch that is bringing in clearer water. Brook trout will stack up in these areas.'
                }, //
                tips: [{
                    title: 'Tip Your Jigs',
                    description: 'Always add a piece of worm or a commercial scented bait to your jig.'
                }, {
                    title: 'Fish the Seam',
                    description: 'Focus on the edge where the muddy water meets the clearer water.'
                }, {
                    title: 'Patience is Key',
                    description: 'Let your bait sit and allow the fish to find it by smell.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Live Minnows',
                    technique: 'Under a slip bobber.',
                    reason: 'The extra scent and movement helps in low visibility.',
                    isPrimary: true
                }, {
                    name: 'Bright Jigs',
                    technique: 'Add a scented nibble.',
                    reason: 'A bright target with a strong scent.'
                }, {
                    name: 'Worms',
                    technique: 'Fish a full nightcrawler on the bottom.',
                    reason: 'A large, smelly bait for the toughest conditions.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Retrieve as slowly as possible for maximum vibration.',
                    reason: 'A thumping blade is easy for fish to find by feel.'
                }], //
                colors: ['Orange', 'White'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Shallow Bank Eddies',
                    description: 'Fish will often be very close to the bank, seeking calmer and slightly warmer water out of the main flow.'
                }, //
                tips: [{
                    title: 'Fish the Edges',
                    description: 'Cast right along the bank. Fish will often be in less than 2 feet of water.'
                }, {
                    title: 'Use a High-Vis Float',
                    description: 'A bright float will help you detect the very subtle bites in these conditions.'
                }, {
                    title: 'Slow it Way Down',
                    description: 'The slower you can present your bait, the better.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Live Worms',
                    technique: 'Drift through runs and pools.',
                    reason: 'Rain washes worms into the stream, making it the top bait.',
                    isPrimary: true
                }, {
                    name: 'Inline Spinners',
                    technique: 'Cast across and downstream.',
                    reason: 'The disturbed surface makes trout less spooky.'
                }, {
                    name: 'Small Jigs',
                    technique: 'Cast to the bank and let the current carry it.',
                    reason: 'Imitates insects and other food being washed into the water.'
                }, {
                    name: 'Spoons',
                    technique: 'Let it swing and flutter in the current.',
                    reason: 'The flash and wobble can trigger aggressive, rain-activated trout.'
                }], //
                colors: ['Silver', 'Gold'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Current Seams & Bank Eddies',
                    description: 'Rain triggers a feeding response. Fish will move to the edges of current to intercept food being washed downstream.'
                }, //
                tips: [{
                    title: 'The Bite is On!',
                    description: 'Rain often triggers the most aggressive brook trout bite.'
                }, {
                    title: 'Match the "Wash-In"',
                    description: 'Drifting a live worm is the most natural presentation you can offer.'
                }, {
                    title: 'Target Inflows',
                    description: 'Fish any spot where a small trickle of water is entering the main stream.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Spoons',
                    technique: 'Let it flutter in the current.',
                    reason: 'A flashy, wounded baitfish is an easy meal.',
                    isPrimary: true
                }, {
                    name: 'Small Jerkbaits',
                    technique: 'Erratic retrieve.',
                    reason: 'The disturbed surface makes trout more willing to chase.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Cast across current and let it swing.',
                    reason: 'Covers water effectively to find active fish.'
                }, {
                    name: 'Live Minnows',
                    technique: 'Drift under a float in deeper pools.',
                    reason: 'A larger profile bait for bigger trout feeding in the rain.'
                }], //
                colors: ['Rainbow Trout', 'Silver', 'Gold'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Deeper Pools & Runs',
                    description: 'The rain and cloud cover make trout less wary. Stay mobile and thoroughly fish deeper pools and runs where bigger fish hold.'
                }, //
                tips: [{
                    title: 'Cover Water',
                    description: 'Don\'t stay in one spot for too long. Active fish are waiting.'
                }, {
                    title: 'Let it Swing',
                    description: 'Cast your spoon across the current and let it swing downstream, fluttering as it goes.'
                }, {
                    title: 'Stay Safe',
                    description: 'Be aware of rising water levels, especially in smaller streams.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Live Worms',
                    technique: 'Fish on the bottom in a calm area.',
                    reason: 'Scent is the only thing that matters in these conditions.',
                    isPrimary: true
                }, {
                    name: 'Scented Dough Bait',
                    technique: 'Use a bait-holder hook.',
                    reason: 'Maximum scent and bright color.'
                }, {
                    name: 'Live Minnows',
                    technique: 'Fish under a float in an eddy.',
                    reason: 'The scent and vibration is a powerful attractant.'
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip with a worm and let it sit.',
                    reason: 'Combines color and scent for low visibility.'
                }], //
                colors: ['Orange', 'Hot Pink'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Bottom of the Deepest, Calmest Pools',
                    description: 'Your best bet is to find the deepest, slowest pool and fish a scented bait directly on the bottom. Patience is critical.'
                }, //
                tips: [{
                    title: 'Bottom Fishing is Key',
                    description: 'Fish will be holding tight to the bottom. Let your bait sit.'
                }, {
                    title: 'Patience is a Virtue',
                    description: 'It can take a long time for a fish to find your bait by smell.'
                }, {
                    title: 'Use a Bait-Holder Hook',
                    description: 'These hooks have small barbs on the shank to keep soft bait from falling off.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Live Minnows',
                    technique: 'Under a float in an eddy.',
                    reason: 'A large, smelly bait for tough conditions.',
                    isPrimary: true
                }, {
                    name: 'Big Spinners',
                    technique: 'Retrieve as slowly as possible.',
                    reason: 'Maximum vibration to call fish in.'
                }, {
                    name: 'Worms',
                    technique: 'Use a full nightcrawler on the bottom.',
                    reason: 'A large, highly-scented offering.'
                }, {
                    name: 'Small Crankbait',
                    technique: 'Use a bright, rattling model with a slow retrieve.',
                    reason: 'The sound and vibration may trigger a strike.'
                }], //
                colors: ['Chartreuse', 'White', 'Firetiger'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'The Calmest Water You Can Find',
                    description: 'Look for any area that is protected from the main, muddy flow. Go big, bright, and slow to get their attention.'
                }, //
                tips: [{
                    title: 'Find the Calmest Pocket',
                    description: 'Even a small area of slack water behind a log can hold all the fish.'
                }, {
                    title: 'Go Big or Go Home',
                    description: 'Use a larger, more vibrant lure than you normally would to help fish find it.'
                }, {
                    title: 'Be Aware of Conditions',
                    description: 'High, muddy water can be dangerous. Prioritize safety.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Kastmasters',
                    technique: 'Long casts and a varied retrieve.',
                    reason: 'Cuts through the wind effectively.',
                    isPrimary: true
                }, {
                    name: 'Weighted Spinners',
                    technique: 'Retrieve through the "trout chop".',
                    reason: 'The extra weight allows for longer casts.'
                }, {
                    name: 'Spoons',
                    technique: 'Use a heavy, compact spoon for maximum casting distance.',
                    reason: 'The flash and wobble is deadly for trout feeding in the wind.'
                }, {
                    name: 'Small Crankbait',
                    technique: 'Cast with the wind and retrieve steadily.',
                    reason: 'Covers water quickly and imitates a fleeing baitfish.'
                }], //
                colors: ['Silver', 'Blue', 'Gold'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Wind-Blown Side of a Lake or Pond',
                    description: 'The wind creates a "trout chop" on the surface that provides cover and concentrates food, making the fish more active.'
                }, //
                tips: [{
                    title: 'Use the Wind for Casting',
                    description: 'Position yourself to cast with the wind at your back for maximum distance.'
                }, {
                    title: 'Fish the "Chop"',
                    description: 'The rippled surface makes trout less wary and more willing to chase lures.'
                }, {
                    title: 'Keep Your Line Tight',
                    description: 'After casting, reel up slack quickly to maintain contact with your lure and detect bites.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Spoons',
                    technique: 'Let it sink and flutter before retrieving.',
                    reason: 'Imitates a wounded baitfish pushed by the waves.',
                    isPrimary: true
                }, {
                    name: 'Small Crankbaits',
                    technique: 'Steady retrieve covers water.',
                    reason: 'Effectively battles the wind to find active fish.'
                }, {
                    name: 'Weighted Spinners',
                    technique: 'Use a heavy model to cast into the wind.',
                    reason: 'The weight helps achieve casting distance.'
                }, {
                    name: 'Small Jerkbaits',
                    technique: 'Let the wave action impart a natural wobble on the pause.',
                    reason: 'A great choice for triggering fish in the choppy water.'
                }], //
                colors: ['Gold', 'Silver', 'Rainbow Trout'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Windy Shorelines and Points',
                    description: 'Cast heavy spoons or crankbaits from shore, letting them sink through the water column before starting your retrieve.'
                }, //
                tips: [{
                    title: 'Let it Sink',
                    description: 'Many strikes will happen as your spoon flutters down through the water after a cast.'
                }, {
                    title: 'Point Your Rod Tip Down',
                    description: 'Keeping your rod tip low helps your lure run properly in the waves.'
                }, {
                    title: 'Braid to a Leader',
                    description: 'Using light braided line with a fluorocarbon leader will help you cast farther and feel more bites.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Live Worms',
                    technique: 'Stationary on the bottom.',
                    reason: 'Scent is the most reliable producer.',
                    isPrimary: true
                }, {
                    name: 'Scented Baits',
                    technique: 'Let it sit in a calm area.',
                    reason: 'Strong smell for low visibility.'
                }, {
                    name: 'Live Minnows',
                    technique: 'Fish under a float in a protected bay.',
                    reason: 'The action and scent can call in fish.'
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip with a wax worm and let it sit.',
                    reason: 'A bright, smelly, and stationary target for tough conditions.'
                }], //
                colors: ['Hot Pink', 'Orange'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Calm, Protected Side of the Lake',
                    description: 'In windy and muddy conditions, it is best to find the side of the lake that is protected from the wind and fish scented baits.'
                }, //
                tips: [{
                    title: 'Fish the Calm Side',
                    description: 'Trout will seek refuge from the churned-up water on the protected side.'
                }, {
                    title: 'Stay Put',
                    description: 'Find a likely spot, like a drop-off or point on the calm side, and let your bait soak.'
                }, {
                    title: 'Use Multiple Rods',
                    description: 'Where legal, using two rods with different baits can increase your odds.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Live Minnows',
                    technique: 'Under a float near cover.',
                    reason: 'The scent and action can entice a bite.',
                    isPrimary: true
                }, {
                    name: 'Large Spinners',
                    technique: 'Slow retrieve for vibration.',
                    reason: 'Helps fish find it in the murk.'
                }, {
                    name: 'Live Worms',
                    technique: 'Fish a full nightcrawler on the bottom.',
                    reason: 'A large, easy, scented meal for lethargic fish.'
                }, {
                    name: 'Scented Jigs',
                    technique: 'Fish a brightly colored, scented jig very slowly.',
                    reason: 'A visual and scented target for the absolute toughest conditions.'
                }], //
                colors: ['Chartreuse', 'White'], //
                gear: gearMap.brooktrout, //
                location: {
                    title: 'Protected Points & Drop-offs',
                    description: 'These are very tough conditions. Find a piece of structure on the calm side of the lake and fish it very slowly and patiently.'
                }, //
                tips: [{
                    title: 'Find Structure on the Calm Side',
                    description: 'Even in bad conditions, trout will relate to structure.'
                }, {
                    title: 'Be Patient',
                    description: 'The bite will be slow. Stay focused and be ready for a subtle take.'
                }, {
                    title: 'Go Big and Bright',
                    description: 'Use a larger and more colorful lure than you normally would for brook trout.'
                }, {
                    title: 'Quick, Gentle Hookset',
                    description: 'A gentle lift of the rod is all that is needed to set the hook.'
                }] //
            }
        }
    }
},
				            splake: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jigging Spoons',
                    technique: 'Jig vertically over deep structure.',
                    reason: 'The flash is perfect for calling in fish from a distance in deep, clear water.',
                    isPrimary: true
                }, {
                    name: 'White Tube Jigs',
                    technique: 'Hop or drag along the bottom.',
                    reason: 'Imitates sculpin and other bottom forage that splake feed on.'
                }, {
                    name: 'Drop Shot',
                    technique: 'Use a small minnow or plastic and hold it still.',
                    reason: 'A finesse presentation for targeting finicky, deep-holding fish.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Use sharp, vertical rips to trigger reaction strikes.',
                    reason: 'The vibration can entice bites when fish are less active in the sun.'
                }], //
                colors: ['Smelt', 'White', 'Chartreuse'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Deep Basins & Humps (Thermocline)',
                    description: 'Splake will retreat to the deepest, coolest water available. Use your electronics to find them suspended near the thermocline or on deep humps.'
                }, //
                tips: [{
                    title: 'Find the Thermocline',
                    description: 'Splake will relate to the thermocline just like lake trout. Target this zone.'
                }, {
                    title: 'Vertical is Key',
                    description: 'In warm water, a vertical presentation is the most efficient way to stay on deep fish.'
                }, {
                    title: 'Watch For "Up-Bites"',
                    description: 'Often a fish will hit your lure on the fall, and your line will go slack. Set the hook!'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'White Tube Jigs',
                    technique: 'Jig vertically or cast to structure.',
                    reason: 'Arguably the most effective splake lure ever created.',
                    isPrimary: true
                }, {
                    name: 'Small Swimbaits',
                    technique: 'Slow, steady retrieve near bottom.',
                    reason: 'A realistic imitation of the baitfish they are feeding on.'
                }, {
                    name: 'Jigging Spoons',
                    technique: 'Use an aggressive jigging motion.',
                    reason: 'The flash and falling action triggers aggressive strikes.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Snap jig aggressively near the bottom.',
                    reason: 'The erratic darting action is a powerful trigger for active splake.'
                }], //
                colors: ['White', 'Smoke', 'Natural Shad'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Deep Points & Rocky Drop-offs',
                    description: 'Splake will relate to classic structure like deep points and the edges of rocky shoals. Use your electronics to find fish before casting.'
                }, //
                tips: [{
                    title: 'Electronics are Your Best Friend',
                    description: 'Find the fish first. Splake often form tight schools on specific pieces of structure.'
                }, {
                    title: 'Pound the Bottom',
                    description: 'Let your tube jig hit the bottom repeatedly to stir up silt, which attracts curious fish.'
                }, {
                    title: 'Stay in Contact',
                    description: 'It is crucial to always feel your lure. Most bites will be subtle.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Glow Spoons',
                    technique: 'Jig vertically near the bottom.',
                    reason: 'A bright glow pattern can be seen in low visibility deep water.',
                    isPrimary: true
                }, {
                    name: 'Blade Baits',
                    technique: 'Use sharp rips for maximum vibration.',
                    reason: 'Helps fish find your lure by feel.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use a bright, rattling model to create noise.',
                    reason: 'Combines vibration and sound to attract fish.'
                }, {
                    name: 'Scented Jigs',
                    technique: 'Tip a large glow jig with a minnow or sucker meat.',
                    reason: 'Combines sight (glow) with a powerful scent trail.'
                }], //
                colors: ['Glow', 'Chartreuse'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Deepest Available Water',
                    description: 'This is a tough scenario. Find the deepest basin in the lake and use vibrating or glowing lures to try and trigger a bite.'
                }, //
                tips: [{
                    title: 'Charge Your Lures',
                    description: 'Use a camera flash or a UV flashlight to get the maximum glow from your lures every few minutes.'
                }, {
                    title: 'Vibration is Key',
                    description: 'In muddy water, fish rely on their lateral line. Use lures that create a strong thump.'
                }, {
                    title: 'Use Scent',
                    description: 'Tipping your jig or spoon with a piece of minnow or sucker can make a huge difference.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Blade Baits',
                    technique: 'Vertical jig with sharp rips.',
                    reason: 'The best lure for calling in fish with vibration in dirty water.',
                    isPrimary: true
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip with a live minnow.',
                    reason: 'Combines bright color with the irresistible scent and action of live bait.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Use a rattling model and jig it vertically.',
                    reason: 'The loud rattles are a major advantage in muddy water.'
                }, {
                    name: 'Glow Spoons',
                    technique: 'Tip with bait and jig slowly.',
                    reason: 'Combines sight and scent for lethargic fish.'
                }], //
                colors: ['Gold', 'Chartreuse', 'Orange'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Hard Bottom Areas & Inflows',
                    description: 'Find any rock or gravel areas that might hold some heat. Also check any areas where clearer water is flowing in.'
                }, //
                tips: [{
                    title: 'Tip it With a Minnow',
                    description: 'The combination of a bright jig and a live minnow is deadly in these conditions.'
                }, {
                    title: 'Repetitive Jigging',
                    description: 'You may have to jig in the same spot for a long time to get a reaction.'
                }, {
                    title: 'Fish the Cleanest Water',
                    description: 'Even a small area of slightly clearer water can concentrate the fish.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Spoons',
                    technique: 'Cast and let it flutter down.',
                    reason: 'Cloud cover makes splake more willing to chase a flashy, moving bait.',
                    isPrimary: true
                }, {
                    name: 'Small Crankbaits',
                    technique: 'Use a slow, steady retrieve.',
                    reason: 'Covers water effectively to find active, roaming fish.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Use an erratic twitch-pause retrieve.',
                    reason: 'Triggers aggressive strikes from fish suspended over deep structure.'
                }, {
                    name: 'Swimbait',
                    technique: 'Cast and retrieve over deep points.',
                    reason: 'A realistic baitfish imitation for hunting splake.'
                }], //
                colors: ['Smelt', 'Blue', 'White'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Suspended Over Deep Structure',
                    description: 'Cloudy weather makes splake more aggressive. They will rise higher off the bottom and suspend over points and humps to hunt baitfish.'
                }, //
                tips: [{
                    title: 'Fish are Hunting',
                    description: 'Cloud cover is a prime time for splake. They are more active and willing to chase.'
                }, {
                    title: 'Count it Down',
                    description: 'After you cast your spoon, count it down to different depths to find where the fish are suspended.'
                }, {
                    title: 'Long Casts',
                    description: 'Make long casts past the structure and retrieve your lure through the strike zone.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Inline Spinners',
                    technique: 'Slow, steady retrieve.',
                    reason: 'Perfect for when splake move shallower to feed under cloud cover.',
                    isPrimary: true
                }, {
                    name: 'Jerkbait',
                    technique: 'Use an erratic twitch-pause retrieve.',
                    reason: 'Mimics a wounded baitfish, an easy meal for an aggressive splake.'
                }, {
                    name: 'Spoons',
                    technique: 'Cast and retrieve with an erratic action.',
                    reason: 'The flash and wobble is highly effective for active fish.'
                }, {
                    name: 'Small Swimbaits',
                    technique: 'Retrieve steadily over the tops of shoals.',
                    reason: 'A subtle, realistic approach for wary fish.'
                }], //
                colors: ['White', 'Chartreuse', 'Smelt'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Tops of Shoals & Points (10-20ft)',
                    description: 'This is the best time to be splake fishing. They will move shallower and feed aggressively on top of rocky shoals and points.'
                }, //
                tips: [{
                    title: 'Prime Time Casting',
                    description: 'Cloudy and cool is a perfect storm for an active casting bite. Stay mobile.'
                }, {
                    title: 'Vary Your Retrieve',
                    description: 'Try different speeds with your spinner until you get a bite.'
                }, {
                    title: 'Watch for Followers',
                    description: 'Splake are notorious for following lures to the boat. Do a figure-eight!'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Use a loud, rattling model.',
                    reason: 'Combines flash, vibration, and a large profile.',
                    isPrimary: true
                }, {
                    name: 'Large Spinners',
                    technique: 'Use a slow retrieve for maximum thump.',
                    reason: 'The vibration helps fish home in on the lure.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Cast and rip back to the boat.',
                    reason: 'Maximum vibration to cover water and find fish.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Use a rattling model with a yo-yo retrieve.',
                    reason: 'Sound is a key attractant in dirty water.'
                }], //
                colors: ['Firetiger', 'Chartreuse'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Shallow Flats near Deep Water',
                    description: 'The cloudy, muddy water gives splake confidence to move very shallow to feed. Find shallow flats adjacent to the main lake basin.'
                }, //
                tips: [{
                    title: 'Noise is Key',
                    description: 'Use your loudest and brightest lures to help fish find them.'
                }, {
                    title: 'Cover Water',
                    description: 'Make long casts in a fan pattern to cover as much water as possible.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'When cranking near bottom, your hooks can get dull. Keep them sticky sharp.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Blade Baits',
                    technique: 'Vertical jig or cast and rip.',
                    reason: 'The most vibration you can get in a small package.',
                    isPrimary: true
                }, {
                    name: 'Rippin\' Rap',
                    technique: 'Yo-yo retrieve off the bottom.',
                    reason: 'Loud rattles and a tight vibration are deadly in these conditions.'
                }, {
                    name: 'Glow Spoons',
                    technique: 'Tip with a minnow for scent and jig vertically.',
                    reason: 'Combines sight, sound, and smell for tough bites.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Jig vertically with a rattling model.',
                    reason: 'The sound can call fish in from a distance.'
                }], //
                colors: ['Gold', 'Orange', 'Glow'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Sharp Deep Ledges & Current',
                    description: 'Fish will hold tight to sharp ledges, especially if there is any wind-driven current. Use heavy, vibrating lures.'
                }, //
                tips: [{
                    title: 'Let it Hit Bottom',
                    description: 'Make sure your lure makes contact with the bottom, then rip it up sharply.'
                }, {
                    title: 'Use Braided Line',
                    description: 'Braid will help you feel the lure vibrate and detect subtle bites in deep, muddy water.'
                }, {
                    title: 'Be Persistent',
                    description: 'This can be a tough bite, but the fish are often concentrated in small areas.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Spoons',
                    technique: 'Jig aggressively over deep structure.',
                    reason: 'Rain often triggers a feeding response in deep water.',
                    isPrimary: true
                }, {
                    name: 'Jerkbait',
                    technique: 'Cast over deep points and suspend.',
                    reason: 'The rain breaks up the surface, making them less wary.'
                }, {
                    name: 'Tube Jigs',
                    technique: 'Drift and jig along deep structure.',
                    reason: 'A reliable producer for deep, rain-activated splake.'
                }, {
                    name: 'Swimbaits',
                    technique: 'Count it down to suspended fish.',
                    reason: 'A realistic baitfish profile for aggressive, hunting fish.'
                }], //
                colors: ['Smelt', 'Blue', 'White'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Deep Structure & Ledges',
                    description: 'Rain and clouds will make fish more active. They may suspend higher or move to the edges of structure to feed.'
                }, //
                tips: [{
                    title: 'Rain Can Trigger a Bite',
                    description: 'A steady rain often improves the bite for deepwater fish.'
                }, {
                    title: 'Watch Your Electronics',
                    description: 'Pay close attention to your fish finder to see if fish are suspending higher in the water column.'
                }, {
                    title: 'Aggressive Jigging',
                    description: 'Use sharp, fast rips of your rod to make the spoon dart erratically.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jigging Spoons',
                    technique: 'Aggressive jigging.',
                    reason: 'The bite is on. A fast-falling lure triggers them.',
                    isPrimary: true
                }, {
                    name: 'Inline Spinners',
                    technique: 'Cast towards windy banks.',
                    reason: 'Classic and effective when splake are active.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Use a fast, erratic retrieve.',
                    reason: 'Triggers aggressive strikes from shallow, feeding fish.'
                }, {
                    name: 'Small Crankbait',
                    technique: 'Retrieve steadily along shoreline structure.',
                    reason: 'Covers water and finds fish that have moved shallow to feed.'
                }], //
                colors: ['White', 'Chrome', 'Chartreuse'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Wind-Blown Points and Shoals',
                    description: 'Rain often comes with wind. The wind will create current and concentrate baitfish on shallow to mid-depth structure.'
                }, //
                tips: [{
                    title: 'Fish the Windy Side',
                    description: 'Even in deep water, the wind-blown side of a shoal will be more productive.'
                }, {
                    title: 'Use a Drift Sock',
                    description: 'A drift sock will slow your boat down and allow for a more precise presentation.'
                }, {
                    title: 'Stay Mobile',
                    description: 'Cover water by casting until you find an active school.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Slow troll or cast.',
                    reason: 'Use a loud, wide-wobbling lure for maximum disturbance.',
                    isPrimary: true
                }, {
                    name: 'Scented Glow Jigs',
                    technique: 'Fish slowly in the clearest water.',
                    reason: 'The best option in a tough situation.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Cast and rip through inflows.',
                    reason: 'The heavy vibration helps fish find the lure.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Retrieve slowly for a deep thump.',
                    reason: 'A different vibration profile that can trigger bites.'
                }], //
                colors: ['Firetiger', 'Chartreuse', 'White'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Mouths of Inflowing Rivers',
                    description: 'The current from an inflow will create a seam of slightly clearer water. Splake will stack up on this edge.'
                }, //
                tips: [{
                    title: 'Fish the Seam',
                    description: 'Look for the edge where muddy and clearer water mix. This is a fish magnet.'
                }, {
                    title: 'Go Big and Gaudy',
                    description: 'Use the largest and brightest lure in your box.'
                }, {
                    title: 'Be Prepared for Debris',
                    description: 'Rain washes in leaves and branches. Check your lines often.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Blade Baits',
                    technique: 'Vertical jig in calm pockets.',
                    reason: 'Heavy vibration is key.',
                    isPrimary: true
                }, {
                    name: 'Glow Jigs with Bait',
                    technique: 'Let it sit near the bottom.',
                    reason: 'Patience game combining sight and smell.'
                }, {
                    name: 'Rattling Lipless Crankbait',
                    technique: 'Jig vertically.',
                    reason: 'The sound can call in fish in zero visibility.'
                }, {
                    name: 'Heavy Spoons with Rattles',
                    technique: 'Aggressively jig to create sound.',
                    reason: 'The combination of flash and sound is your best bet.'
                }], //
                colors: ['Gold', 'Orange', 'Glow'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Calm, Deep Holes',
                    description: 'Find the deepest water that is out of the main current. Fish will hunker down here and get out of the muddy flow.'
                }, //
                tips: [{
                    title: 'Anchor and Wait',
                    description: 'Find a promising spot on your map and be patient. This is not a fast bite.'
                }, {
                    title: 'Sharp Hooks are a Must',
                    description: 'Bites can be very subtle. Make sure your hooks are sticky sharp.'
                }, {
                    title: 'Use a High-Vis Line',
                    description: 'High-visibility braided line will help you detect subtle "line-jump" bites.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jigging Spoons',
                    technique: 'Drift and jig vertically.',
                    reason: 'The flash and weight are perfect for deep, windy conditions.',
                    isPrimary: true
                }, {
                    name: 'Heavy Tube Jigs',
                    technique: 'Use a heavy jig to stay down.',
                    reason: 'Maintains bottom contact while drifting.'
                }, {
                    name: 'Drop Shot',
                    technique: 'Use a heavy weight to stay vertical.',
                    reason: 'Keeps the bait pinned in the strike zone on a drift.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Use a heavy model for vertical jigging.',
                    reason: 'The vibration cuts through the wind and waves.'
                }], //
                colors: ['Smelt', 'White'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Wind-Drifted Deep Flats',
                    description: 'Use the wind to your advantage. A controlled drift with heavy jigs allows you to cover vast deep flats where splake roam.'
                }, //
                tips: [{
                    title: 'Use a Drift Sock',
                    description: 'A large drift sock is essential to slow your boat down for an effective presentation.'
                }, {
                    title: 'Heavier is Better',
                    description: 'Use a heavy enough spoon or jig to feel the bottom at all times.'
                }, {
                    title: 'Point Your Rod at the Lure',
                    description: 'This helps you maintain contact and feel bites in the waves.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Heavy Tube Jigs',
                    technique: 'Drift and jig.',
                    reason: 'Keeps you in contact with the bottom in the wind.',
                    isPrimary: true
                }, {
                    name: 'Jerkbait',
                    technique: 'Cast towards windy shorelines.',
                    reason: 'The erratic action triggers aggressive fish activated by the wind.'
                }, {
                    name: 'Swimbait',
                    technique: 'Use a heavy head and cast with the wind.',
                    reason: 'A large profile that can be seen easily in the waves.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Burn a compact spinnerbait on windy points.',
                    reason: 'A reaction bait for aggressive fish chasing bait in the chop.'
                }], //
                colors: ['White', 'Chartreuse', 'Perch'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Windy Side of Shoals & Points',
                    description: 'Wind concentrates baitfish and microorganisms, and the entire food chain follows. Find shoals and points getting hit by the wind.'
                }, //
                tips: [{
                    title: 'Braid is a Must',
                    description: 'Low-stretch braid is crucial for feeling bites and setting the hook in deep, windy water.'
                }, {
                    title: 'Controlled Drifting',
                    description: 'Use your trolling motor to keep your drift speed and direction consistent over the structure.'
                }, {
                    title: 'Don\'t Be Afraid of the Wind',
                    description: 'Some of the best bites happen in the strongest wind. Be safe, but fish it.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Troll the windy bank.',
                    reason: 'The warmest, most oxygenated water is here.',
                    isPrimary: true
                }, {
                    name: 'Large, Vibrating Lures',
                    technique: 'Troll slowly.',
                    reason: 'Helps fish find it in the churned up water.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Cast a rattling model on windy flats.',
                    reason: 'The sound carries well in the wind and dirty water.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Cast and rip it back to the boat.',
                    reason: 'Maximum vibration to get noticed by active fish.'
                }], //
                colors: ['Chartreuse', 'White', 'Orange'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Wind-Blown Shoreline Drop-offs',
                    description: 'The wind will push warmer surface water toward one side of the lake. Find the sharpest drop-off on that side and troll along it.'
                }, //
                tips: [{
                    title: 'Follow the Wind',
                    description: 'Fish the side of the lake the wind is blowing into. It will have the most active fish.'
                }, {
                    title: 'Use Planer Boards',
                    description: 'Planer boards help get your lures out to the side of the boat and away from the noise.'
                }, {
                    title: 'Go Slow',
                    description: 'Troll slowly (1.5-2.0 mph) to give fish a chance to find and eat your lure.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Blade Baits',
                    technique: 'Jig vertically.',
                    reason: 'Maximum vibration is needed in these tough conditions.',
                    isPrimary: true
                }, {
                    name: 'Heavy Spoons with Rattles',
                    technique: 'Jig aggressively.',
                    reason: 'The added sound can attract fish from a distance.'
                }, {
                    name: 'Rattling Lipless Crankbait',
                    technique: 'Jig vertically with your loudest model.',
                    reason: 'Sound is the number one attractant in these conditions.'
                }, {
                    name: 'Glow Jigs with Bait',
                    technique: 'Let it sit on the bottom in calm areas.',
                    reason: 'The best option for inactive fish in the worst conditions.'
                }], //
                colors: ['Gold', 'Firetiger', 'Glow'], //
                gear: gearMap.splake, //
                location: {
                    title: 'Calm Side of Deep Structure',
                    description: 'This is the toughest scenario. Find a deep hump on the calm side of the lake and be extremely patient, jigging vertically.'
                }, //
                tips: [{
                    title: 'Fish the Calm Side',
                    description: 'In these conditions, fish will often seek refuge from the wind and waves.'
                }, {
                    title: 'Electronics are Everything',
                    description: 'Do not start fishing until you have marked fish on your graph.'
                }, {
                    title: 'Make Repeated Drops',
                    description: 'It may take dozens of drops on a fish\'s head to get a reaction.'
                }, {
                    title: 'Firm Hookset',
                    description: 'Splake have bony mouths like a trout. A firm, sweeping hookset is best.'
                }] //
            }
        }
    }
},
       browntrout: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Drift through deep, shaded pools.',
                    reason: 'A natural presentation for wary, heat-stressed fish.',
                    isPrimary: true
                }, {
                    name: 'Small Spinners',
                    technique: 'Cast into shaded areas and retrieve quickly.',
                    reason: 'The flash can trigger a reaction strike.'
                }, {
                    name: 'Small Jigs',
                    technique: 'Use a micro jig tipped with a wax worm.',
                    reason: 'A subtle presentation for targeting fish holding in deep shade.'
                }, {
                    name: 'Scented Dough Bait',
                    technique: 'Fish on the bottom in the deepest part of a pool.',
                    reason: 'A reliable choice for less active fish, especially stocked ones.'
                }], //
                colors: ['Black', 'Gold', 'Silver'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Deepest Shaded Pools & Undercut Banks',
                    description: 'Browns will retreat to the deepest, darkest, most oxygenated water they can find. Look for undercut banks and deep, shaded holes.'
                }, //
                tips: [{
                    title: 'Stealth is Paramount',
                    description: 'Brown trout are incredibly wary. Approach casting locations with extreme caution and wear natural-colored clothing.'
                }, {
                    title: 'Fish the Shade Line',
                    description: 'Focus your casts right along the edge where sunlight meets shade.'
                }, {
                    title: 'Downsize Your Leader',
                    description: 'In bright sun and clear water, a 4lb fluorocarbon leader is a must.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Use a twitch-twitch-pause retrieve.',
                    reason: 'Perfectly mimics a dying baitfish, a primary food source for browns.',
                    isPrimary: true
                }, {
                    name: 'Inline Spinners',
                    technique: 'Retrieve just fast enough to spin the blade.',
                    reason: 'A classic lure for covering water and finding active fish.'
                }, {
                    name: 'Spoons',
                    technique: 'Let it flutter and swing in the current.',
                    reason: 'The erratic wobble is a powerful trigger for predatory brown trout.'
                }, {
                    name: 'Swimbaits',
                    technique: 'Use a small, realistic swimbait with a steady retrieve.',
                    reason: 'A great choice for targeting larger, educated fish.'
                }], //
                colors: ['Natural Shad', 'Rainbow Trout', 'Silver'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Tailouts of Pools & Deeper Runs',
                    description: 'Browns will sit at the end of pools, waiting to ambush prey being washed towards them. Cast upstream and work your lure through these zones.'
                }, //
                tips: [{
                    title: 'Long Pauses are Key',
                    description: 'When fishing a jerkbait, the bite will almost always come when the lure is sitting perfectly still.'
                }, {
                    title: 'Target Structure',
                    description: 'Cast towards any submerged log, rock, or current seam.'
                }, {
                    title: 'Fish at Dawn and Dusk',
                    description: 'Even on sunny days, the low-light periods are when big brown trout are most active.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Live Minnows',
                    technique: 'Fish under a float in the calmest water.',
                    reason: 'Scent and vibration are the only way fish will find your offering.',
                    isPrimary: true
                }, {
                    name: 'Large Spinners',
                    technique: 'Use a slow retrieve for maximum vibration.',
                    reason: 'The large blade creates a "thump" that fish can feel.'
                }, {
                    name: 'Worms',
                    technique: 'Use a large bunch on the bottom for a big scent trail.',
                    reason: 'A classic bait that is easy for fish to find by smell.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Retrieve slowly with a wide wobble.',
                    reason: 'The noise and water displacement helps fish locate it.'
                }], //
                colors: ['Chartreuse', 'White', 'Black'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Clear Water Inflows',
                    description: 'Find any small stream or pipe bringing in clearer water. Brown trout will congregate there to escape the mud.'
                }, //
                tips: [{
                    title: 'Go Big and Bright',
                    description: 'Use a larger profile lure with bright colors or a lot of flash to be more easily found.'
                }, {
                    title: 'Fish the Cleanest Water',
                    description: 'Even a small trickle of clear water can hold a surprising number of fish.'
                }, {
                    title: 'Be Patient',
                    description: 'Let your live bait sit in a likely spot. It may take a while for a fish to find it.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Slowly retrieve through deep holes.',
                    reason: 'The wobble and sound can call in fish from a distance.',
                    isPrimary: true
                }, {
                    name: 'Live Minnows',
                    technique: 'Drift under a float.',
                    reason: 'A large, natural meal for a hungry brown.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Use a large Colorado blade for a slow, thumping retrieve.',
                    reason: 'The best lure for a high-vibration, slow presentation.'
                }, {
                    name: 'Worms',
                    technique: 'Drift a full nightcrawler through the deepest parts of pools.',
                    reason: 'A can\'t-miss offering for lethargic, bottom-hugging fish.'
                }], //
                colors: ['Firetiger', 'Chartreuse', 'Orange'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Deep Outer Bends of Rivers',
                    description: 'The deepest water in a river is on the outside of a bend. Fish will hold here out of the main muddy flow.'
                }, //
                tips: [{
                    title: 'Make Some Noise',
                    description: 'Use a crankbait with loud rattles to help fish find it in the dirty water.'
                }, {
                    title: 'Slow Your Retrieve',
                    description: 'A slow, wide-wobbling crankbait is often more effective than one that is retrieved quickly.'
                }, {
                    title: 'Stay Safe',
                    description: 'Muddy, cool water often means high water. Be extremely careful of slick banks and strong currents.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Use an aggressive twitch-pause retrieve.',
                    reason: 'Cloud cover makes browns extremely aggressive towards baitfish imitators.',
                    isPrimary: true
                }, {
                    name: 'Topwater Popper',
                    technique: 'Fish early in the morning near logjams.',
                    reason: 'A rare but exciting way to catch a big brown.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Burn the spinner just under the surface.',
                    reason: 'A fast, flashy presentation for active, hunting fish.'
                }, {
                    name: 'Swimbaits',
                    technique: 'Retrieve a paddle tail swimbait at a medium pace.',
                    reason: 'A realistic imitation for targeting larger, cruising fish.'
                }], //
                colors: ['Bone White', 'Black', 'Perch'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Over & Around Submerged Cover',
                    description: 'Cloudy skies give brown trout the confidence to roam. They will hunt aggressively over submerged wood, weed beds, and rocks.'
                }, //
                tips: [{
                    title: 'This is Prime Time',
                    description: 'Cloudy, overcast days are when the biggest and wariest brown trout are most likely to be caught.'
                }, {
                    title: 'Be Aggressive',
                    description: 'Use faster retrieves and more erratic action with your lures to trigger violent strikes.'
                }, {
                    title: 'Stay Mobile',
                    description: 'Cover as much water as you can. Active fish are looking for a meal.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Large Swimbaits',
                    technique: 'Slow, steady retrieve.',
                    reason: 'Perfectly imitates the large baitfish big browns feed on.',
                    isPrimary: true
                }, {
                    name: 'Large Spinners',
                    technique: 'Retrieve over the tops of weedbeds.',
                    reason: 'Covers water and calls in fish.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Use a slow retrieve with long pauses.',
                    reason: 'A classic presentation for big, cold-water brown trout.'
                }, {
                    name: 'Glide Bait',
                    technique: 'Use a slow, side-to-side retrieve.',
                    reason: 'A large profile bait for targeting true trophy-class fish.'
                }], //
                colors: ['Sucker', 'Rainbow Trout', 'Perch'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Large Weed Flats & Points',
                    description: 'These are the best conditions. Big browns will be on the prowl for a substantial meal. Target areas that hold baitfish.'
                }, //
                tips: [{
                    title: 'Think Big',
                    description: 'Don\'t be afraid to use a 4-6 inch swimbait. Big browns want a big meal.'
                }, {
                    title: 'Match the Hatch',
                    description: 'Use swimbaits that look like the local forage, whether it\'s suckers, perch, or stocked trout.'
                }, {
                    title: 'Figure Eight',
                    description: 'Like pike or muskie, big browns will often follow a lure to the boat. A figure eight can trigger a strike.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Cast into and around heavy cover.',
                    reason: 'Big profile and loud rattles are key in low visibility.',
                    isPrimary: true
                }, {
                    name: 'Live Minnow',
                    technique: 'Still-fish under a float near cover.',
                    reason: 'Scent and vibration will draw them out.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Use a large, thumping Colorado blade.',
                    reason: 'The strong vibration helps fish find the lure.'
                }, {
                    name: 'Worms',
                    technique: 'Fish a large bunch on the bottom.',
                    reason: 'The scent trail is easy for fish to follow.'
                }], //
                colors: ['Chartreuse', 'Firetiger', 'White'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Thick Wood Cover & Logjams',
                    description: 'Browns will tuck into the thickest cover they can find and wait for a meal to drift by. You have to put the lure right on their nose.'
                }, //
                tips: [{
                    title: 'Be Fearless',
                    description: 'You have to cast into the nasty stuff. If you aren\'t getting snagged occasionally, you aren\'t close enough.'
                }, {
                    title: 'Make Multiple Casts',
                    description: 'It can take 10-15 casts to the same logjam to coax a bite.'
                }, {
                    title: 'Heavy Line',
                    description: 'Use a slightly heavier line (8-10lb) to help pull fish out of cover.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Large, Vibrating Lures',
                    technique: 'Slow retrieve.',
                    reason: 'A big, thumping lure like a large spinner or Chatterbait is easiest to find.',
                    isPrimary: true
                }, {
                    name: 'Nightcrawlers',
                    technique: 'Fish on bottom.',
                    reason: 'Scent is most reliable.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Use a loud, rattling model with a slow retrieve.',
                    reason: 'The sound and wobble can trigger strikes in dirty water.'
                }, {
                    name: 'Live Minnows',
                    technique: 'Drift under a float in the slowest part of a pool.',
                    reason: 'The best live bait option for cold, muddy water.'
                }], //
                colors: ['Black', 'Blue', 'White'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Deepest Pools',
                    description: 'In these tough conditions, browns will retreat to the bottom of the deepest, slowest pools. You need a lure that gets down and makes a commotion.'
                }, //
                tips: [{
                    title: 'Slow and Low',
                    description: 'Keep your lure close to the bottom and retrieve it as slowly as you can while still feeling it work.'
                }, {
                    title: 'Patience is Critical',
                    description: 'This is a low-percentage bite. You have to be patient and fish thoroughly.'
                }, {
                    title: 'Use Scent',
                    description: 'Adding a commercial scent attractant to your lure can significantly increase your odds.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Erratic retrieve near the surface.',
                    reason: 'Rain triggers an aggressive feeding response.',
                    isPrimary: true
                }, {
                    name: 'Worms',
                    technique: 'Drift in current.',
                    reason: 'A classic for a reason; rain washes worms in.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Cast across current and retrieve steadily.',
                    reason: 'Perfect for active trout feeding in the rain.'
                }, {
                    name: 'Topwater Popper',
                    technique: 'Use subtle pops near cover.',
                    reason: 'The rain provides cover for an exciting topwater bite.'
                }], //
                colors: ['Silver', 'Black', 'Natural Shad'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Shallow Riffles & Bank Eddies',
                    description: 'Rain activates the entire ecosystem. Browns will move surprisingly shallow to feed on disoriented baitfish and insects.'
                }, //
                tips: [{
                    title: 'The Bite is On',
                    description: 'Rainy days often produce the best brown trout fishing of the year. Fish with confidence.'
                }, {
                    title: 'Don\'t Ignore Shallow Water',
                    description: 'Cast into water that is only a foot or two deep, especially along the banks.'
                }, {
                    title: 'Stay Stealthy',
                    description: 'Even though the rain provides cover, you should still move quietly and avoid spooking fish.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Large Swimbaits',
                    technique: 'Cast to current breaks.',
                    reason: 'A big, easy meal for a trophy brown taking advantage of the conditions.',
                    isPrimary: true
                }, {
                    name: 'Spoons',
                    technique: 'Swing them through deep pools.',
                    reason: 'The flash and wobble is a classic trigger.'
                }, {
                    name: 'Large Jerkbaits',
                    technique: 'Use a slow retrieve with long pauses.',
                    reason: 'Imitates a large, dying baitfish that a trophy can\'t resist.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Use a large model and retrieve slowly.',
                    reason: 'Covers water and finds aggressive, hunting fish.'
                }], //
                colors: ['Rainbow Trout', 'Sucker', 'Silver'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Deep Pools Below Rapids',
                    description: 'The most aggressive, largest fish in the system will position in deep pools to feed. A large lure can trigger a trophy.'
                }, //
                tips: [{
                    title: 'Go for a Trophy',
                    description: 'These conditions are when the biggest fish in the river are caught. Use big lures.'
                }, {
                    title: 'Let it Swing',
                    description: 'Cast your spoon across the current and let it swing downstream on a tight line. The current gives it the action.'
                }, {
                    title: 'Check Your Gear',
                    description: 'Ensure your knots are perfect and your hooks are sharp. This is your best chance at a giant.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Retrieve slowly through likely spots.',
                    reason: 'Noise and vibration are essential.',
                    isPrimary: true
                }, {
                    name: 'Live Minnow',
                    technique: 'Fish under a float.',
                    reason: 'The ultimate combination of scent and action.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Use a big Colorado blade for a slow, thumping retrieve.',
                    reason: 'The heavy vibration helps fish find your lure.'
                }, {
                    name: 'Worms',
                    technique: 'Use a large bunch on the bottom to maximize scent.',
                    reason: 'A simple, effective, and easy-to-find bait.'
                }], //
                colors: ['Firetiger', 'Chartreuse', 'Red'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Current Seams & Bottlenecks',
                    description: 'Rain creates current. Fish will hold on the edge of the current, waiting to ambush anything that washes by.'
                }, //
                tips: [{
                    title: 'Fish the Seam',
                    description: 'Target the visible line where the fast current meets the slower water.'
                }, {
                    title: 'Anchor Upstream',
                    description: 'Position your boat upstream of a likely hole and let your bait drift down into it.'
                }, {
                    title: 'Go Bright or Go Home',
                    description: 'Use the most obnoxiously bright lure in your tackle box.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Large, Vibrating Lures',
                    technique: 'Slow retrieve near bottom.',
                    reason: 'A big spinner with a Colorado blade creates a thump fish can feel.',
                    isPrimary: true
                }, {
                    name: 'Cut Bait',
                    technique: 'Fish a piece of sucker or shad on the bottom.',
                    reason: 'A strong scent trail for inactive fish.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Use a loud, slow-wobbling model.',
                    reason: 'The sound and vibration can trigger a bite when nothing else will.'
                }, {
                    name: 'Live Minnows',
                    technique: 'Use a large minnow under a float in an eddy.',
                    reason: 'A large, lively meal for a big, lethargic brown.'
                }], //
                colors: ['Black', 'White', 'Orange'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Deepest, Slowest Pools',
                    description: 'Tough conditions. Browns will be inactive on the bottom of the deepest pools. You need a presentation they can either feel or smell.'
                }, //
                tips: [{
                    title: 'Patience is Everything',
                    description: 'You may only get one or two bites all day. Make them count.'
                }, {
                    title: 'Dead Sticking',
                    description: 'Sometimes the best retrieve is no retrieve. Let your scented bait sit on the bottom.'
                }, {
                    title: 'Stay Warm and Safe',
                    description: 'Cold rain and high water can be dangerous. Dress appropriately and be safe.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Let the waves provide the action.',
                    reason: 'The wind-rippled surface makes browns less wary and more aggressive.',
                    isPrimary: true
                }, {
                    name: 'Spoons',
                    technique: 'Long casts with the wind.',
                    reason: 'Effectively covers water to find wind-activated fish.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Use a weighted model and cast with the wind.',
                    reason: 'The flash is highly effective in the "trout chop".'
                }, {
                    name: 'Swimbaits',
                    technique: 'Use a small, heavy swimbait to imitate baitfish.',
                    reason: 'A realistic profile for targeting larger, educated fish.'
                }], //
                colors: ['Silver', 'White', 'Perch'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Wind-Blown Points & Shorelines',
                    description: 'Wind pushes baitfish towards the shore, and brown trout will be there to feed. The "trout chop" provides excellent cover.'
                }, //
                tips: [{
                    title: 'Fish the "Trout Chop"',
                    description: 'A steady 1-2 foot chop on the water is a brown trout fisherman\'s best friend.'
                }, {
                    title: 'Cast With the Wind',
                    description: 'Position your boat or yourself on the bank to make long casts with the wind.'
                }, {
                    title: 'Pause Your Jerkbait',
                    description: 'On the pause, the waves will give your suspending jerkbait a subtle rocking motion that is irresistible.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Large Swimbaits',
                    technique: 'Use a heavy, slow-sinking model.',
                    reason: 'A big meal for big fish taking advantage of the wind.',
                    isPrimary: true
                }, {
                    name: 'Heavy Spoons',
                    technique: 'Cast far and let it sink.',
                    reason: 'Gets down deep in the waves.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Use a large, suspending model.',
                    reason: 'The waves provide a natural action for a big, enticing bait.'
                }, {
                    name: 'Crankbait',
                    technique: 'Troll a deep-diving model along windy shorelines.',
                    reason: 'Covers water and finds schools of fish feeding in the wind.'
                }], //
                colors: ['Sucker', 'Rainbow Trout', 'White'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Windy Side of Deep Structure',
                    description: 'Wind creates current that concentrates baitfish and plankton on deep points and humps. Browns will be there feeding.'
                }, //
                tips: [{
                    title: 'Heavier is Better',
                    description: 'Use heavy lures (1/2 oz or more) to make long casts and get down in the water column.'
                }, {
                    title: 'Braid is Your Friend',
                    description: 'Braided line with a fluorocarbon leader cuts through the wind for better casting and bite detection.'
                }, {
                    title: 'Use Your Rod Tip',
                    description: 'After a long cast, keep your rod tip low to the water to keep your lure running true.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Retrieve along windy banks.',
                    reason: 'The warmest, most active fish will be shallow.',
                    isPrimary: true
                }, {
                    name: 'Large Spinners',
                    technique: 'Use a big Colorado blade.',
                    reason: 'Maximum vibration to call fish in.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Cast and retrieve slowly.',
                    reason: 'The loud rattles are key for getting noticed in the chop.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Use a slow, steady retrieve for a hard thump.',
                    reason: 'A different vibration profile that stands out.'
                }], //
                colors: ['Firetiger', 'Chartreuse', 'Orange'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Shallow Windy Banks with Hard Bottom',
                    description: 'The wind will push the warmest water to the shallow, windy side of the lake. Find any rock or gravel and you will find the fish.'
                }, //
                tips: [{
                    title: 'Fish the Windy Bank!',
                    description: 'All the food and warmest water is being pushed there. It\'s where the fish will be.'
                }, {
                    title: 'Make Bottom Contact',
                    description: 'Grind your crankbait into the bottom. The noise and disturbance attracts fish.'
                }, {
                    title: 'Stay Shallow',
                    description: 'Focus your efforts in 3-8 feet of water.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Rattling Lipless Crankbait',
                    technique: 'Slow retrieve.',
                    reason: 'Loud rattles and heavy vibration are your best tools in these conditions.',
                    isPrimary: true
                }, {
                    name: 'Live Bait',
                    technique: 'Fish on bottom.',
                    reason: 'Scent can be the deciding factor.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Use a slow, wide-wobbling model.',
                    reason: 'The heavy thump and bright color can trigger a bite.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Slow-roll a big Colorado blade.',
                    reason: 'A slow-moving but high-vibration lure.'
                }], //
                colors: ['Red', 'Chrome', 'Gold'], //
                gear: gearMap.browntrout, //
                location: {
                    title: 'Calm Pockets adjacent to Windy Areas',
                    description: 'Tough conditions. Browns will often tuck just inside a calm pocket, waiting to ambush anything that blows by the entrance.'
                }, //
                tips: [{
                    title: 'Find the Calm in the Storm',
                    description: 'Look for small pockets of calm water right next to the main windy part of the lake.'
                }, {
                    title: 'Go Loud and Slow',
                    description: 'Retrieve a loud rattling lure as slowly as possible.'
                }, {
                    title: 'Be Patient',
                    description: 'The bite will be tough, but the fish you catch could be the largest of the year.'
                }, {
                    title: 'Set the Hook Firmly',
                    description: 'Brown trout have bony jaws. A firm, sweeping hookset is needed.'
                }] //
            }
        }
    }
},
    chinooksalmon: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Trolling Spoons',
                    technique: 'Use downriggers to target deep, suspended fish.',
                    reason: 'Allows you to cover water and present a lure at a precise depth where salmon are holding.',
                    isPrimary: true
                }, {
                    name: 'Dodger and Fly/Spoon',
                    technique: 'The dodger provides flash and action to attract fish from a long distance.',
                    reason: 'A classic Great Lakes trolling setup for a reason.'
                }, {
                    name: 'Swimbait',
                    technique: 'Troll a large, realistic swimbait behind a downrigger.',
                    reason: 'A subtle, natural presentation for wary, deep-water salmon.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Troll a cut herring or alewife in a teaser head.',
                    reason: 'The ultimate natural presentation, combining scent and a realistic roll.'
                }], //
                colors: ['Smelt', 'Chrome', 'Blue'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'Deep Offshore Water (Thermocline)',
                    description: 'Chinook will be suspended deep over the main lake basin, following schools of baitfish like alewife. The thermocline is the key depth to target.'
                }, //
                tips: [{
                    title: 'Find the Bait, Find the Salmon',
                    description: 'Your electronics are your most important tool. Do not start fishing until you locate large schools of baitfish.'
                }, {
                    title: 'Speed Kills',
                    description: 'Vary your trolling speed between 2.0 and 3.5 mph. S-turns are a great way to impart speed changes that trigger strikes.'
                }, {
                    title: 'Pay Attention to Temperature',
                    description: 'Salmon prefer a specific temperature range (45-55°F). Find this on your fish finder and keep your lures there.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jigging Spoons',
                    technique: 'Jig vertically over schools of fish.',
                    reason: 'Mimics a wounded baitfish perfectly and triggers aggressive strikes.',
                    isPrimary: true
                }, {
                    name: 'Large Minnow Lures',
                    technique: 'Cast towards river mouths and let it sink.',
                    reason: 'Imitates the large baitfish salmon are staging to feed on.'
                }, {
                    name: 'Crankbait',
                    technique: 'Cast a deep-diving crankbait from a pier or boat.',
                    reason: 'Covers water and its wobble can trigger strikes from staging fish.'
                }, {
                    name: 'Swimbait',
                    technique: 'Use a heavy jighead and fish it vertically or cast and retrieve.',
                    reason: 'A large, realistic profile for big, staging salmon.'
                }], //
                colors: ['White', 'Smelt', 'Chartreuse', 'Glow'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'Staging Areas Near River Mouths',
                    description: 'In the spring and fall, salmon will "stage" in large numbers near the mouths of their natal rivers before their spawning run. They will be in 30-80 feet of water.'
                }, //
                tips: [{
                    title: 'Watch For "Up-Bites"',
                    description: 'When jigging, a salmon will often hit the lure on the fall. Your line will go slack - set the hook!'
                }, {
                    title: 'Low Light is Key',
                    description: 'The bite in these staging areas will be best at first and last light.'
                }, {
                    title: 'Current is Your Friend',
                    description: 'Focus on any current coming out of the river mouth, as it will concentrate the fish.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Large Trolling Spoons',
                    technique: 'Use bright, flashy spoons.',
                    reason: 'In muddy water, a large, bright, flashy profile is easiest to see.',
                    isPrimary: true
                }, {
                    name: 'Dodger and Fly/Spoon',
                    technique: 'Use a large dodger for maximum vibration.',
                    reason: 'The "thump" of the dodger helps call fish in.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Troll a large, rattling, wide-wobbling crankbait.',
                    reason: 'The sound and water displacement are key attractants.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Troll a fresh cut bait rig with added flash.',
                    reason: 'The scent is crucial for getting bites in low visibility.'
                }], //
                colors: ['Chartreuse', 'Orange', 'Firetiger', 'Glow'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'Suspended Near Strong Current',
                    description: 'This is a tough bite. Troll slowly in areas with current, like river mouths, where the scent trail is strongest.'
                }, //
                tips: [{
                    title: 'Go Big and Bright',
                    description: 'Use your largest and most obnoxious lures. Size and flash are more important than realism.'
                }, {
                    title: 'Use Scent',
                    description: 'Adding a strip of herring or a commercial scent to your lures can make a world of difference.'
                }, {
                    title: 'Troll Slower',
                    description: 'Slow your trolling speed down to 1.5-2.0 mph to give fish more time to find your lure.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Cast into the current from shore/pier.',
                    reason: 'The wobble and rattle can be detected by staging fish.',
                    isPrimary: true
                }, {
                    name: 'Large Spoons',
                    technique: 'Use a slow, wobbling retrieve.',
                    reason: 'The flash can still be seen in stained water.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Use a large, bright spinnerbait and retrieve it slowly.',
                    reason: 'The thump of the blades is a powerful attractant.'
                }, {
                    name: 'Spawn Sacs',
                    technique: 'Drift spawn under a float in river mouths.',
                    reason: 'A natural bait presentation that works when lures won\'t.'
                }], //
                colors: ['Firetiger', 'Chartreuse', 'Red'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'River Mouths & Pier Heads',
                    description: 'The clearest water will be found near inflows. Fish will stack up in these zones. This is often a shore-casting bite.'
                }, //
                tips: [{
                    title: 'Let it Swing',
                    description: 'Cast your crankbait or spoon upstream and let it swing through the current in an arc.'
                }, {
                    title: 'Night Bite can be Epic',
                    description: 'In these conditions, the bite is often best after dark when fish feel more secure.'
                }, {
                    title: 'Repetitive Casting',
                    description: 'You may have to make dozens of casts to the same spot to trigger a bite.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Trolling Spoons',
                    technique: 'Run lures higher in the water column.',
                    reason: 'Cloud cover makes salmon more aggressive and willing to rise for a bait.',
                    isPrimary: true
                }, {
                    name: 'Large Swimbaits',
                    technique: 'Troll slowly behind a downrigger.',
                    reason: 'A large, natural profile for trophy hunting.'
                }, {
                    name: 'Dodger and Fly/Spoon',
                    technique: 'Use glow or UV patterns for best results.',
                    reason: 'Glow and UV are highly visible to salmon on overcast days.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Troll a cut-herring rig for the biggest fish.',
                    reason: 'The ultimate natural presentation for hunting trophy salmon.'
                }], //
                colors: ['Smelt', 'Blue', 'Green', 'Purple'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'Suspended Higher Over Deep Water',
                    description: 'Cloudy days are prime time. Salmon will suspend higher in the water column (5-20 feet above the thermocline) to actively hunt.'
                }, //
                tips: [{
                    title: 'Prime Time - Fish are Hunting',
                    description: 'This is the best time to be on the water. Be ready for aggressive strikes.'
                }, {
                    title: 'Raise Your Lures',
                    description: 'Run your downriggers and divers higher than you would on a sunny day. Active fish look up.'
                }, {
                    title: 'Try Meat Rigs',
                    description: 'A cut-herring rig trolled slowly can be deadly for the largest salmon on cloudy days.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Cast from piers or river mouths.',
                    reason: 'An aggressive, wobbling bait for aggressive fish.',
                    isPrimary: true
                }, {
                    name: 'Jigging Spoons',
                    technique: 'Jig vertically if fish are deep.',
                    reason: 'Always a reliable producer.'
                }, {
                    name: 'Inline Spinner',
                    technique: 'Cast and retrieve a large spinner from shore.',
                    reason: 'The flash and thump is a classic trigger for near-shore salmon.'
                }, {
                    name: 'Swimbait',
                    technique: 'Use a heavy head to cast far and retrieve slowly.',
                    reason: 'A realistic profile that can fool wary, pressured fish.'
                }], //
                colors: ['Firetiger', 'Perch', 'Smelt'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'River Mouths, Piers, & Shorelines',
                    description: 'Cloudy, cool conditions will bring salmon in very shallow. This is the best time for shore and pier anglers to have a shot at a trophy.'
                }, //
                tips: [{
                    title: 'Shore Anglers Rejoice',
                    description: 'These are the days shore anglers live for. The fish will be within casting distance.'
                }, {
                    title: 'Fan Cast',
                    description: 'Work an area thoroughly by making casts in a fan pattern to cover all the water.'
                }, {
                    title: 'Watch the Water',
                    description: 'You will often see salmon jumping or rolling on the surface in these conditions. Cast to them!'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Dodger and Fly/Spoon',
                    technique: 'Use a large, vibrating dodger.',
                    reason: 'Maximum flash and vibration to call fish in from a distance.',
                    isPrimary: true
                }, {
                    name: 'Bright Trolling Spoons',
                    technique: 'Use spoons with UV or glow paint.',
                    reason: 'These colors penetrate deeper in dirty water.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Troll a large, rattling crankbait.',
                    reason: 'The sound and vibration is a key attractant.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Troll with a large flasher for added attraction.',
                    reason: 'Combines the ultimate attractant (scent) with vibration.'
                }], //
                colors: ['Chartreuse', 'Glow', 'Orange', 'White'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'Trolling Offshore "Mud Lines"',
                    description: 'Look for the visible edge where muddy river water meets clearer lake water. Troll along this edge.'
                }, //
                tips: [{
                    title: 'Fish the Mud Line',
                    description: 'This edge acts as a wall that concentrates both baitfish and the salmon hunting them.'
                }, {
                    title: 'UV is Your Friend',
                    description: 'Lures with UV-reactive paint are significantly more visible to salmon in dirty water.'
                }, {
                    title: 'Slow Down',
                    description: 'Decrease your trolling speed to 1.8-2.2 mph to make your lures easier to find.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Cast and retrieve with a slow wobble.',
                    reason: 'The noise and vibration are critical.',
                    isPrimary: true
                }, {
                    name: 'Large Spoons',
                    technique: 'Use a wide, slow-wobbling spoon.',
                    reason: 'This pushes more water and is easier to feel.'
                }, {
                    name: 'Spawn Sacs',
                    technique: 'Drift under a float in calmer eddies.',
                    reason: 'The number one bait once salmon enter a river system.'
                }, {
                    name: 'Inline Spinner',
                    technique: 'Use a large spinner with a big, thumping blade.',
                    reason: 'The vibration helps fish locate the lure.'
                }], //
                colors: ['Firetiger', 'Chartreuse', 'Red'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'River Mouths and Harbors',
                    description: 'The fish will be concentrated in and around river mouths and harbors. This is a casting bite.'
                }, //
                tips: [{
                    title: 'Slow and Loud',
                    description: 'A slow retrieve with a noisy, wide-wobbling lure is the key to success.'
                }, {
                    title: 'Fish After Dark',
                    description: 'The bite is almost always better at night under these conditions.'
                }, {
                    title: 'Be Patient',
                    description: 'It can take many casts to get a bite, but the fish are there.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Trolling Spoons',
                    technique: 'Experiment with depths.',
                    reason: 'Rain scatters bait; active fish could be anywhere in the column.',
                    isPrimary: true
                }, {
                    name: 'Dodger and Fly/Spoon',
                    technique: 'A classic producer in all conditions.',
                    reason: 'The added attraction works well on active fish.'
                }, {
                    name: 'Swimbait',
                    technique: 'Troll a large swimbait higher in the water column.',
                    reason: 'A big, natural profile for aggressive, hunting salmon.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Troll fresh bait, as the rain will activate their sense of smell.',
                    reason: 'The scent is a powerful trigger during a rain.'
                }], //
                colors: ['Smelt', 'Green', 'Blue', 'Glow'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'Offshore, Searching for Bait',
                    description: 'Rain activates the bite but can scatter baitfish. Cover water by trolling to find concentrations of fish.'
                }, //
                tips: [{
                    title: 'The Bite is On',
                    description: 'Rainy days are often the best days for salmon fishing. Expect action.'
                }, {
                    title: 'Vary Your Depths',
                    description: 'Run your lures at a variety of depths until you establish a pattern. Stagger your downriggers.'
                }, {
                    title: 'Erratic Action',
                    description: 'Making sharp S-turns with the boat will cause your lures to speed up and slow down, triggering strikes.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Cast from a pier or in a river mouth.',
                    reason: 'The rain and current will trigger a phenomenal bite.',
                    isPrimary: true
                }, {
                    name: 'Large Spoons',
                    technique: 'Cast and let it swing in the current.',
                    reason: 'A heavy spoon can get down in the current.'
                }, {
                    name: 'Inline Spinner',
                    technique: 'Use a large spinner with a fast retrieve.',
                    reason: 'A classic lure for aggressive, rain-activated salmon.'
                }, {
                    name: 'Swimbait',
                    technique: 'Cast a heavy swimbait into the current.',
                    reason: 'A large profile for targeting trophy fish near shore.'
                }], //
                colors: ['Firetiger', 'Chartreuse', 'Blue', 'Smelt'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'Piers, River Mouths, and Current',
                    description: 'This is a prime-time scenario for shore anglers. The salmon will be very aggressive and pushed in close by the rain and wind.'
                }, //
                tips: [{
                    title: 'Dress for Success',
                    description: 'Good rain gear is a must. The fishing can be incredible if you can stay comfortable.'
                }, {
                    title: 'Let it Swing',
                    description: 'Cast your spoon out and let the current "swing" it across the channel. The bite is often violent.'
                }, {
                    title: 'Stay Safe',
                    description: 'Piers and river banks can be extremely slippery when wet. Be very careful.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Dodger and Fly/Spoon',
                    technique: 'Use a large dodger and a bright fly.',
                    reason: 'The best combination of flash, vibration, and color.',
                    isPrimary: true
                }, {
                    name: 'Bright Trolling Spoons',
                    technique: 'Troll slowly.',
                    reason: 'Use UV and glow patterns.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Troll a large cut bait rig with a flasher.',
                    reason: 'The ultimate combination of scent and attraction.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Troll a large, rattling crankbait.',
                    reason: 'The sound and vibration can attract fish from far away.'
                }], //
                colors: ['Chartreuse', 'Glow', 'White', 'Orange'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'Trolling the "Transition Zone"',
                    description: 'Look for areas where the muddy river water starts to mix with the main lake water. This transition zone will hold fish.'
                }, //
                tips: [{
                    title: 'Scent is Your Friend',
                    description: 'Add herring strips or commercial scent to everything you are trolling.'
                }, {
                    title: 'Stay Organized',
                    description: 'Trolling in the rain can be chaotic. Keep your gear organized and ready.'
                }, {
                    title: 'Watch Your Sonar',
                    description: 'Pay close attention to your electronics for bait balls and large hooks which indicate salmon.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Cast into the current.',
                    reason: 'Loud, bright, and obnoxious is what you need.',
                    isPrimary: true
                }, {
                    name: 'Cut Bait',
                    technique: 'Fish on bottom.',
                    reason: 'Scent is king.'
                }, {
                    name: 'Spawn Sacs',
                    technique: 'Drift under a float in deep, slow pools.',
                    reason: 'The number one bait for river-bound salmon.'
                }, {
                    name: 'Large Spoons',
                    technique: 'Use a bright, wide-wobbling spoon.',
                    reason: 'The flash and thump can be detected in dirty water.'
                }], //
                colors: ['Firetiger', 'Red', 'Chartreuse'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'River Eddies & Seams',
                    description: 'The fish will be in the river but will get out of the main muddy flow. Target calm eddies behind points or logjams.'
                }, //
                tips: [{
                    title: 'Find the Calmest Water',
                    description: 'Any small pocket of calmer water next to the main current can hold a large number of fish.'
                }, {
                    title: 'Heavy is Right',
                    description: 'Use a heavy enough crankbait or sinker to get down to the bottom in the current.'
                }, {
                    title: 'Be Patient',
                    description: 'This is a tough, gritty bite. You have to be willing to wait for it.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Trolling Spoons',
                    technique: 'Troll with the waves for better boat control.',
                    reason: 'Covering water is key to finding scattered fish.',
                    isPrimary: true
                }, {
                    name: 'Dodger and Fly/Spoon',
                    technique: 'The action of the waves imparts extra action.',
                    reason: 'A go-to in windy conditions.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Troll with the waves.',
                    reason: 'The natural scent and roll is deadly in the chop.'
                }, {
                    name: 'Large Swimbaits',
                    technique: 'Troll a large, heavy swimbait.',
                    reason: 'A big profile for big fish hunting in the waves.'
                }], //
                colors: ['Smelt', 'Green', 'Blue'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'Offshore, Following Wind Lines',
                    description: 'Wind creates "scum lines" or seams on the surface that concentrate plankton and baitfish. Troll along these lines.'
                }, //
                tips: [{
                    title: 'Troll With the Wind',
                    description: 'Trolling into large waves is difficult and inefficient. Go with the flow for better speed and lure action.'
                }, {
                    title: 'Use Planer Boards',
                    description: 'Planer boards are essential for spreading your lines out and covering more water in the wind.'
                }, {
                    title: 'Safety First',
                    description: 'The Great Lakes can get dangerous quickly. Always wear your life jacket and watch the weather.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Cast from a wind-swept pier or point.',
                    reason: 'The wind and waves push baitfish shallow.',
                    isPrimary: true
                }, {
                    name: 'Heavy Spoons',
                    technique: 'Long casts to reach distant fish.',
                    reason: 'Heavy spoons are needed to cast into the wind.'
                }, {
                    name: 'Swimbait',
                    technique: 'Use a heavy model to cast far and retrieve slowly.',
                    reason: 'A large, natural profile for pressured fish.'
                }, {
                    name: 'Jigging Spoons',
                    technique: 'Jig vertically off the end of piers.',
                    reason: 'A great way to target fish holding deep near structure.'
                }], //
                colors: ['Firetiger', 'Chrome', 'Blue'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'Wind-Blown Shorelines & Piers',
                    description: 'The entire food chain gets pushed to the windy side of the lake. This is the number one spot to be for a shore angler.'
                }, //
                tips: [{
                    title: 'Fish the Windy Side',
                    description: 'All the active, feeding fish will be on the side of the lake getting hit by the wind.'
                }, {
                    title: 'Let it Sink',
                    description: 'After casting a heavy spoon, let it sink and flutter in the waves before you start your retrieve.'
                }, {
                    title: 'Braided Line Cuts the Wind',
                    description: 'Using a thin diameter braided line will allow you to cast much farther in windy conditions.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Dodger and Fly/Spoon',
                    technique: 'Use the largest and brightest combo you have.',
                    reason: 'Maximum flash and vibration are needed.',
                    isPrimary: true
                }, {
                    name: 'Bright Trolling Spoons',
                    technique: 'Troll slowly on the windy side.',
                    reason: 'The warmest, most oxygenated water will be here.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Troll a large, rattling, wide-wobbling model.',
                    reason: 'The sound and vibration can be detected from far away.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Troll behind a large flasher for scent and attraction.',
                    reason: 'The ultimate combination for tough conditions.'
                }], //
                colors: ['Chartreuse', 'Glow', 'White', 'Orange'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'Shallow, Windy Flats',
                    description: 'This is a perfect storm. The wind pushes warm, muddy water onto shallow flats, and the salmon will follow to feed aggressively.'
                }, //
                tips: [{
                    title: 'Perfect Storm',
                    description: 'Windy, warm, and muddy can produce some of the most frantic salmon fishing of the year.'
                }, {
                    title: 'Troll Shallow',
                    description: 'Focus your trolling efforts in water less than 30 feet deep.'
                }, {
                    title: 'Use Short Leaders',
                    description: 'In muddy water, a shorter leader from your dodger to your lure creates a more aggressive, erratic action.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Cast into the wind-driven current.',
                    reason: 'Loud, vibrant, and easy for fish to find.',
                    isPrimary: true
                }, {
                    name: 'Cut Bait',
                    technique: 'Fish on bottom in calmer pockets.',
                    reason: 'Scent is a reliable backup plan.'
                }, {
                    name: 'Large Spoons',
                    technique: 'Cast a heavy, bright spoon into the current.',
                    reason: 'The flash and wide wobble gets noticed in dirty water.'
                }, {
                    name: 'Spawn Sacs',
                    technique: 'Use a heavy sinker to fish on bottom.',
                    reason: 'The scent is a powerful attractant for fish seeking refuge.'
                }], //
                colors: ['Firetiger', 'Red', 'Chartreuse'], //
                gear: gearMap.chinooksalmon, //
                location: {
                    title: 'Harbor Mouths and Inflows',
                    description: 'Find areas where current is concentrated by man-made structures. The fish will use these as ambush points.'
                }, //
                tips: [{
                    title: 'Find a Current Break',
                    description: 'Fish will sit on the calm side of a pier wall or breakwater, waiting for bait to wash by.'
                }, {
                    title: 'Be Prepared to Lose Lures',
                    description: 'Casting crankbaits around piers and rocks often means getting snagged. Bring extras.'
                }, {
                    title: 'Tough it Out',
                    description: 'These are tough, grinding conditions, but they can produce the biggest fish of the year.'
                }, {
                    title: 'Re-Check Your Lines',
                    description: 'Even a small piece of debris on your lure can ruin its action. Re-check lines frequently.'
                }] //
            }
        }
    }
},
     cohosalmon: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Trolling Spoons',
                    technique: 'Troll fast and high in the water column.',
                    reason: 'Coho are aggressive and often feed near the surface on sunny days.',
                    isPrimary: true
                }, {
                    name: 'Dodger and Fly/Spoon',
                    technique: 'Use smaller dodgers and brightly colored flies.',
                    reason: 'The flash and action is a classic coho attractor.'
                }, {
                    name: 'Inline Spinner',
                    technique: 'Cast a weighted spinner a long distance and burn it back.',
                    reason: 'A great option for targeting surface-feeding coho from a boat or pier.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Use a small, flashy crankbait for casting.',
                    reason: 'The tight wobble and flash can trigger strikes from active fish.'
                }], //
                colors: ['Silver', 'Orange', 'Hot Pink', 'Blue'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Offshore Surface Waters',
                    description: 'Coho will be chasing schools of alewife and smelt in the top 30 feet of water over the main lake basin. Look for temperature breaks.'
                }, //
                tips: [{
                    title: 'Speed is Key',
                    description: 'Troll faster for coho than you would for chinook, often in the 2.5-4.0 mph range.'
                }, {
                    title: 'Look for Surface Activity',
                    description: 'Watch for diving birds and baitfish breaking the surface, as coho will be nearby.'
                }, {
                    title: 'Bright and Flashy',
                    description: 'On a sunny day, use your brightest and flashiest spoons to attract attention.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Inline Spinners',
                    technique: 'Cast from piers or in river mouths.',
                    reason: 'The flash and vibration is irresistible to aggressive, staging coho.',
                    isPrimary: true
                }, {
                    name: 'Spoons',
                    technique: 'Use a fast, erratic retrieve.',
                    reason: 'A fluttering spoon perfectly mimics the frantic action of a dying baitfish.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Cast and retrieve with a fast, steady wobble.',
                    reason: 'Covers water quickly to find active schools near shore.'
                }, {
                    name: 'Spawn Sacs',
                    technique: 'Drift under a float in river mouths.',
                    reason: 'A natural presentation for fish beginning to stage for their run.'
                }], //
                colors: ['Chartreuse', 'Orange', 'Hot Pink', 'Blue'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Piers, Harbors, & River Mouths',
                    description: 'In the spring and fall, coho will stage in massive numbers near shore, making them accessible to pier and shore anglers.'
                }, //
                tips: [{
                    title: 'Cast, Cast, Cast',
                    description: 'This is a casting game. Cover as much water as you can to find active schools.'
                }, {
                    title: 'Fast and Erratic',
                    description: 'A fast, ripping retrieve with occasional pauses is often the best way to trigger a strike.'
                }, {
                    title: 'Fish the "Scum Line"',
                    description: 'Look for the line of foam and debris created by current, as it concentrates food.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Dodger and Fly/Spoon',
                    technique: 'Use a large dodger and a bright, contrasting fly.',
                    reason: 'The combination of thump and color is key in low visibility.',
                    isPrimary: true
                }, {
                    name: 'Bright Trolling Spoons',
                    technique: 'Use spoons with bold, simple color patterns.',
                    reason: 'A solid, bright color is easier to see than a complex pattern.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Troll a large, rattling, wide-wobbling crankbait.',
                    reason: 'The sound and vibration will help call in fish.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Troll a large spinner with a big Colorado blade.',
                    reason: 'The deep thump is easy for fish to track in dirty water.'
                }], //
                colors: ['Orange', 'Chartreuse', 'Glow', 'Red'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Trolling Near River Plumes',
                    description: 'The muddy water from a river mouth creates a plume. Troll the edges of this plume where it meets clearer water.'
                }, //
                tips: [{
                    title: 'Vibration and Color',
                    description: 'Use a large dodger that creates a strong "thump" and pair it with a brightly colored fly.'
                }, {
                    title: 'Troll the Edges',
                    description: 'The edge of the mudline is a natural barrier that concentrates both bait and salmon.'
                }, {
                    title: 'Use Scent',
                    description: 'Adding a scent strip to your lures can make a significant difference in muddy water.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Use a wide, slow wobble.',
                    reason: 'The vibration and noise helps fish find it.',
                    isPrimary: true
                }, {
                    name: 'Spawn Sacs',
                    technique: 'Drift spawn sacs under a float.',
                    reason: 'The most natural presentation for river-run fish.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Retrieve slowly with a large, thumping blade.',
                    reason: 'The vibration is a key trigger in muddy river water.'
                }, {
                    name: 'Worms',
                    technique: 'Drift a large bunch of nightcrawlers.',
                    reason: 'A classic bait with a strong scent that is effective in dirty water.'
                }], //
                colors: ['Firetiger', 'Chartreuse', 'Orange'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Deeper Holes in Rivers & Harbors',
                    description: 'Fish will move into rivers and harbors but hold in deeper, slower pools to get out of the muddy flow.'
                }, //
                tips: [{
                    title: 'Spawn is King',
                    description: 'Once in the rivers, salmon eggs (spawn sacs) are the most effective bait.'
                }, {
                    title: 'Bottom Bouncing',
                    description: 'In a river, bouncing your bait along the bottom is a classic and effective technique.'
                }, {
                    title: 'Fish the "Soft" Water',
                    description: 'Look for any area where the current is slower than the main flow.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Trolling Spoons',
                    technique: 'Run lures just below the surface.',
                    reason: 'Cloud cover makes coho extremely aggressive and they will feed very high.',
                    isPrimary: true
                }, {
                    name: 'Dodger and Fly/Spoon',
                    technique: 'A go-to method for active, hunting fish.',
                    reason: 'The flash is visible from a great distance.'
                }, {
                    name: 'Topwater Plopper',
                    technique: 'Cast and retrieve over suspended schools.',
                    reason: 'An exciting way to catch ultra-aggressive coho.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Cast and burn it back to the boat.',
                    reason: 'The sound and speed can trigger violent strikes.'
                }], //
                colors: ['Blue', 'Green', 'Purple', 'Glow'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'High in the Water Column Offshore',
                    description: 'PRIME TIME. Coho will be actively hunting just under the surface across the main lake basin. This is as good as it gets.'
                }, //
                tips: [{
                    title: 'Absolute Prime Time',
                    description: 'If you have cloudy skies in the summer, get on the water. The bite can be legendary.'
                }, {
                    title: 'Run it High',
                    description: 'Run your lures in the top 20 feet of the water column, sometimes right in the prop wash.'
                }, {
                    title: 'Glow Lures are Key',
                    description: 'Even during the day, glow-in-the-dark lures are extremely effective for coho under cloudy skies.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Inline Spinners',
                    technique: 'Cast and retrieve from shore or piers.',
                    reason: 'The best conditions for a casting bite for aggressive coho.',
                    isPrimary: true
                }, {
                    name: 'Spoons',
                    technique: 'Use a fast, erratic retrieve.',
                    reason: 'Triggers reaction strikes from fish chasing bait.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Use a fast, ripping retrieve.',
                    reason: 'The erratic action mimics a fleeing alewife.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Cast far and retrieve quickly.',
                    reason: 'The sound and vibration helps find active schools.'
                }], //
                colors: ['Chartreuse', 'Blue', 'Silver', 'Hot Pink'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Shorelines, Piers, and Breakwalls',
                    description: 'The ultimate conditions for shore anglers. Coho will be very shallow and feeding aggressively within casting distance.'
                }, //
                tips: [{
                    title: 'Shore Angler\'s Dream',
                    description: 'These conditions bring the fish to you. Cover water and find the schools.'
                }, {
                    title: 'Vary Retrieve Speed',
                    description: 'Start with a fast retrieve, but slow down if you aren\'t getting bites. Let the fish tell you what they want.'
                }, {
                    title: 'Watch for Other Anglers',
                    description: 'If you see a group of anglers on a pier, it\'s for a reason. The fish are likely there.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Dodger and Fly/Spoon',
                    technique: 'Use your biggest, brightest combo you have.',
                    reason: 'Maximum flash, color, and vibration.',
                    isPrimary: true
                }, {
                    name: 'Bright Trolling Spoons',
                    technique: 'Use UV and Glow patterns.',
                    reason: 'These colors are most visible in stained water.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Troll a large, rattling model.',
                    reason: 'The sound and wobble helps attract fish.'
                }, {
                    name: 'Spinnerbait',
                    technique: 'Troll a large, bright spinnerbait for vibration.',
                    reason: 'An unconventional but effective way to add thump.'
                }], //
                colors: ['Glow', 'Chartreuse', 'Orange', 'White'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Trolling the Outer Edges of Mud Lines',
                    description: 'Find the plume of muddy water from a river and troll the clearer edges of it. This is a major concentration zone.'
                }, //
                tips: [{
                    title: 'Fish the Edge',
                    description: 'Trolling right on the seam between muddy and clear water is the highest percentage tactic.'
                }, {
                    title: 'UV and Glow',
                    description: 'Lures with UV and Glow paint are significantly more effective in these conditions.'
                }, {
                    title: 'Run Lines at Multiple Depths',
                    description: 'Spread your lures throughout the top 40 feet to find where the fish are most active.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Slow retrieve with lots of pauses.',
                    reason: 'The noise and wobble helps them find it, the pause triggers the bite.',
                    isPrimary: true
                }, {
                    name: 'Spawn Sacs',
                    technique: 'Drift under a float in river pools.',
                    reason: 'The number one bait once salmon enter the rivers.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Use a large, bright spinner with a thumping blade.',
                    reason: 'The vibration is easy for fish to track in dirty water.'
                }, {
                    name: 'Large Spoons',
                    technique: 'Use a wide, slow wobbling spoon for maximum thump.',
                    reason: 'The heavy wobble can be felt by nearby fish.'
                }], //
                colors: ['Firetiger', 'Chartreuse', 'Hot Pink'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Inside Harbors & First Deep River Pools',
                    description: 'Fish will push into the harbors and rivers. Focus on the first deep, slow pool you can find, as they will stack up there.'
                }, //
                tips: [{
                    title: 'Let it Swing',
                    description: 'In river current, cast your crankbait out and let it swing across the pool on a tight line.'
                }, {
                    title: 'Cure Your Eggs',
                    description: 'Use commercial bait cures in bright colors like red and pink to make your spawn sacs more effective.'
                }, {
                    title: 'Fish the Tailout',
                    description: 'The downstream end of a pool is a prime holding area for salmon.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Trolling Spoons',
                    technique: 'Troll erratically.',
                    reason: 'Rain activates the bite and a chaotic presentation triggers strikes.',
                    isPrimary: true
                }, {
                    name: 'Dodger and Fly/Spoon',
                    technique: 'A reliable producer that works well in the rain.',
                    reason: 'Flash and action are always effective.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Troll a large jerkbait high in the water column.',
                    reason: 'The erratic action mimics a wounded baitfish in the rain.'
                }, {
                    name: 'Inline Spinner',
                    technique: 'Cast and retrieve quickly for surface-feeding fish.',
                    reason: 'Perfect for targeting aggressive coho chasing bait on top.'
                }], //
                colors: ['Smelt', 'Green', 'Blue', 'Glow'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Offshore, but Higher in the Column',
                    description: 'Rain will make coho very active. They will often be higher in the water column than on sunny days. Cover water.'
                }, //
                tips: [{
                    title: 'The Bite is On!',
                    description: 'Rainy summer days can produce some of the most intense salmon bites. Be ready.'
                }, {
                    title: 'S-Trolls are Your Friend',
                    description: 'Making sharp S-turns with your boat speeds up the outside lines and slows the inside lines, a great way to trigger bites.'
                }, {
                    title: 'Look for Temperature Pockets',
                    description: 'A surface temperature gauge can help you find pockets of cooler upwelling water that hold fish.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Inline Spinners',
                    technique: 'Cast and retrieve.',
                    reason: 'Rain puts coho on an aggressive bite right near shore.',
                    isPrimary: true
                }, {
                    name: 'Spoons',
                    technique: 'Use a fast, ripping retrieve.',
                    reason: 'Triggers violent reaction strikes.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Cast and retrieve with a steady wobble.',
                    reason: 'Covers water and finds schools of fish pushed shallow.'
                }, {
                    name: 'Swimbait',
                    technique: 'Use a small, bright swimbait.',
                    reason: 'A realistic profile for fish keyed in on bait.'
                }], //
                colors: ['Chartreuse', 'Blue', 'Smelt', 'Orange'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'River Mouths & Piers',
                    description: 'A cool rain will trigger a major push of salmon towards the rivers. This is the best time to be a shore angler.'
                }, //
                tips: [{
                    title: 'This is The Time',
                    description: 'If you want to catch a salmon from shore, this is the day to do it. The fish will be aggressive and close.'
                }, {
                    title: 'Heavier Lures',
                    description: 'Use a slightly heavier spinner or spoon to cast farther into the wind that often accompanies rain.'
                }, {
                    title: 'Safety First',
                    description: 'Piers and rocks are incredibly slippery when wet. Be very careful.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Dodger and Fly/Spoon',
                    technique: 'Use your biggest and brightest setup.',
                    reason: 'Maximum attraction for tough conditions.',
                    isPrimary: true
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Troll slowly along mud lines.',
                    reason: 'The vibration can call them in.'
                }, {
                    name: 'Bright Trolling Spoons',
                    technique: 'Use large, brightly colored spoons.',
                    reason: 'A big, flashy profile is easiest to see.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Troll fresh bait with a flasher.',
                    reason: 'The scent is a powerful attractant in dirty water.'
                }], //
                colors: ['Glow', 'Chartreuse', 'Firetiger'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Trolling the Clearest Side of a Mud Line',
                    description: 'Find a distinct mud line from a river outflow and troll the clearer side of it. The fish will use it as a wall to trap bait.'
                }, //
                tips: [{
                    title: 'Add Scent',
                    description: 'In these low-visibility conditions, adding scent to your lures is a major advantage.'
                }, {
                    title: 'Watch Your Electronics',
                    description: 'Your fish finder is crucial for locating bait and fish that you can\'t see visually.'
                }, {
                    title: 'Stay Organized',
                    description: 'Trolling in the rain can be a challenge. Keep your boat and gear organized.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Spawn Sacs',
                    technique: 'Drift under a float.',
                    reason: 'The number one bait for salmon in rivers.',
                    isPrimary: true
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Slow retrieve in deep holes.',
                    reason: 'The vibration helps fish find it in the dark water.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Use a large, thumping blade for vibration.',
                    reason: 'A great choice for aggressive fish in river current.'
                }, {
                    name: 'Worms',
                    technique: 'Drift a large bunch of nightcrawlers.',
                    reason: 'The scent can be very effective for river-run fish.'
                }], //
                colors: ['Hot Pink', 'Chartreuse', 'Orange'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Deep, Slow River Pools',
                    description: 'Salmon entering a muddy river will often seek out the deepest, slowest pools to rest. This is where they will be concentrated.'
                }, //
                tips: [{
                    title: 'Find the Deepest Hole',
                    description: 'The first deep pool upstream from the mouth is often the best spot.'
                }, {
                    title: 'Use a Float',
                    description: 'A float helps you detect the subtle bites of river salmon and keeps your bait off the bottom.'
                }, {
                    title: 'Be Patient',
                    description: 'You may have to drift through the same hole many times to get a bite.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Trolling Spoons',
                    technique: 'Troll with the wind and waves.',
                    reason: 'The wave action gives the spoons an irresistible, erratic action.',
                    isPrimary: true
                }, {
                    name: 'Dodger and Fly/Spoon',
                    technique: 'A classic that excels in choppy water.',
                    reason: 'The chop adds to the lure\'s action.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Cast and burn over shallow, windy areas.',
                    reason: 'The sound and speed trigger violent strikes.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Troll erratically behind the boat.',
                    reason: 'The darting action mimics a confused baitfish in the waves.'
                }], //
                colors: ['Smelt', 'Green', 'Blue', 'Orange'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Offshore, Trolling With the Waves',
                    description: 'The "salmon chop" created by the wind makes the fish very active. Trolling with the waves is the most effective and safest way to fish.'
                }, //
                tips: [{
                    title: 'The "Salmon Chop"',
                    description: 'A 2-3 foot wave chop is often considered the best possible condition for offshore salmon fishing.'
                }, {
                    title: 'Troll With the Wind',
                    description: 'It\'s safer and gives your lures a better, more erratic action.'
                }, {
                    title: 'Use Planer Boards',
                    description: 'Planer boards are crucial for spreading out your lines and covering more water in the waves.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Spoons',
                    technique: 'Cast from a windy point or pier.',
                    reason: 'The wind pushes baitfish in close.',
                    isPrimary: true
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Use a heavy model to cast into the wind.',
                    reason: 'The noise and vibration attract fish in the chop.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Use a weighted body for long casts.',
                    reason: 'The flash and vibration are key for near-shore fish.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Cast far and retrieve quickly.',
                    reason: 'Cuts through the wind and its sound attracts fish.'
                }], //
                colors: ['Chartreuse', 'Smelt', 'Blue', 'Hot Pink'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Wind-Swept Piers and Points',
                    description: 'The wind will stack up baitfish and plankton against the windy shoreline, and salmon will be there to feed. This is a prime shore bite.'
                }, //
                tips: [{
                    title: 'Fish the Windy Side',
                    description: 'It might be uncomfortable, but the windy side of the lake is where the feeding fish will be.'
                }, {
                    title: 'Heavy Lures are Key',
                    description: 'You need to use heavy spoons and crankbaits (3/4 - 1 oz) to be able to cast effectively.'
                }, {
                    title: 'Watch Your Line',
                    description: 'The wind will put a bow in your line, so watch it carefully for any sign of a bite.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Dodger and Fly/Spoon',
                    technique: 'Use your biggest, most vibrant setup.',
                    reason: 'The ultimate combination of flash and vibration for low visibility.',
                    isPrimary: true
                }, {
                    name: 'Bright Trolling Spoons',
                    technique: 'Troll slowly along the windy shore.',
                    reason: 'The warmest, most active fish will be here.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Troll a large, rattling, wide-wobbling model.',
                    reason: 'Maximum sound and vibration to get noticed.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Troll behind a large flasher for scent.',
                    reason: 'Combines scent with maximum attraction.'
                }], //
                colors: ['Glow', 'Chartreuse', 'Firetiger'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Shallow, Windy, Muddy Flats',
                    description: 'This can be an incredible bite. The combination of wind, warm water, and low visibility makes salmon extremely aggressive in shallow water.'
                }, //
                tips: [{
                    title: 'The Perfect Storm',
                    description: 'These conditions can produce some of the fastest salmon fishing of the season.'
                }, {
                    title: 'Troll Shallow',
                    description: 'Focus your trolling efforts in 15-40 feet of water, often right along the shore.'
                }, {
                    title: 'Use Scent',
                    description: 'Adding scent is always a good idea in muddy water.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Cast into the current.',
                    reason: 'Loud rattles are key.',
                    isPrimary: true
                }, {
                    name: 'Spawn Sacs',
                    technique: 'Fish under a float.',
                    reason: 'Natural scent is hard to beat.'
                }, {
                    name: 'Large Spoons',
                    technique: 'Use a wide, thumping spoon.',
                    reason: 'The wobble can be detected in dirty water.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Retrieve slowly to maximize vibration.',
                    reason: 'The thump of the blade calls them in.'
                }], //
                colors: ['Firetiger', 'Chartreuse', 'Red'], //
                gear: gearMap.cohosalmon, //
                location: {
                    title: 'Harbor Mouths & Protected Side of Piers',
                    description: 'Fish will tuck into areas with concentrated current but some protection from the main lake waves.'
                }, //
                tips: [{
                    title: 'Find a Current Break',
                    description: 'Fish will sit on the calm side of a pier wall or breakwater, waiting for bait to wash by.'
                }, {
                    title: 'Be Prepared to Lose Lures',
                    description: 'Casting crankbaits around piers and rocks often means getting snagged. Bring extras.'
                }, {
                    title: 'Tough it Out',
                    description: 'These are tough, grinding conditions, but they can produce the biggest fish of the year.'
                }, {
                    title: 'Chaotic Fighters',
                    description: 'Coho are known for chaotic, high-jumping fights. Keep a tight line!.'
                }] //
            }
        }
    }
},
      atlanticsalmon: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Live Minnow',
                    technique: 'Drift live minnows or worms under a float.',
                    reason: 'A subtle, natural presentation is key for wary Atlantics in warm water.',
                    isPrimary: true
                }, {
                    name: 'Small Spoons',
                    technique: 'Cast and retrieve with a flutter.',
                    reason: 'The flash can trigger strikes from fish that won\'t commit to other baits.'
                }, {
                    name: 'Small Jigs',
                    technique: 'Use a marabou or soft plastic jig under a float.',
                    reason: 'A very subtle presentation that imitates an insect or leech.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Use a small, dressed spinner in deep pools.',
                    reason: 'The flash can draw fish out of deep, shaded cover.'
                }], //
                colors: ['Smelt', 'Blue', 'Black'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Deep, Oxygenated Pools & Runs',
                    description: 'Atlantic salmon will seek out the deepest, coolest, and most oxygenated water available, often at the bottom of deep pools with good current.'
                }, //
                tips: [{
                    title: 'Stealth is Crucial',
                    description: 'Landlocked Atlantic salmon are notoriously spooky. Approach holes with caution and make long casts.'
                }, {
                    title: 'Light Fluorocarbon Leaders',
                    description: 'A 6-8lb fluorocarbon leader is essential for getting bites in clear, sunny conditions.'
                }, {
                    title: 'Natural Drift is Everything',
                    description: 'Your bait or lure must move at the exact same speed as the current.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Inline Spinners',
                    technique: 'Cast across current and let it swing.',
                    reason: 'The flash and vibration is a classic trigger for aggressive, cold-water salmon.',
                    isPrimary: true
                }, {
                    name: 'Jerkbait',
                    technique: 'Use a subtle twitch-pause retrieve.',
                    reason: 'Perfectly imitates a baitfish, a primary food source.'
                }, {
                    name: 'Spoons',
                    technique: 'Use a thin, fluttering spoon on the swing.',
                    reason: 'The wobble and flash are deadly for salmon holding in current.'
                }, {
                    name: 'Swimbaits',
                    technique: 'Retrieve a small, realistic swimbait steadily.',
                    reason: 'A great imitation for salmon keying in on smelt or alewife.'
                }], //
                colors: ['Gold', 'Silver', 'Black', 'Perch'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Tailouts of Pools & Current Seams',
                    description: 'Active salmon will move to the edges of current and tailouts of pools to intercept food drifting downstream.'
                }, //
                tips: [{
                    title: 'Let it Swing',
                    description: 'Casting a spinner across the current and letting it swing downstream on a tight line is a deadly technique.'
                }, {
                    title: 'Don\'t Overwork It',
                    description: 'Unlike with bass, a very subtle twitch is all that is needed for a jerkbait.'
                }, {
                    title: 'Cover Water',
                    description: 'Stay mobile and fish all the likely-looking spots. Active fish will reveal themselves.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Fish a large worm or minnow on the bottom.',
                    reason: 'Scent is the only way fish will find your bait in these conditions.',
                    isPrimary: true
                }, {
                    name: 'Large Spinners',
                    technique: 'Use a slow retrieve for maximum vibration.',
                    reason: 'The thump of a large blade can call fish in.'
                }, {
                    name: 'Live Minnows',
                    technique: 'Fish under a float in the calmest water.',
                    reason: 'The combination of scent and vibration gets noticed.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Use a loud, rattling crankbait with a slow retrieve.',
                    reason: 'The noise and wide wobble can attract fish from a distance.'
                }], //
                colors: ['Chartreuse', 'Orange', 'White'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Calm Eddies & Backwaters',
                    description: 'Fish will move out of the main muddy flow into calmer areas. Find the clearest pocket of water you can.'
                }, //
                tips: [{
                    title: 'Scent is Everything',
                    description: 'In warm, muddy water, fish will be relying entirely on their sense of smell.'
                }, {
                    title: 'Fish the Calmest Water',
                    description: 'Look for any area that is protected from the main current.'
                }, {
                    title: 'Be Patient',
                    description: 'This is a low-percentage bite. You have to let your bait soak and wait for a fish to find it.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Use a slow, wide wobble.',
                    reason: 'The vibration and noise helps fish find the lure.',
                    isPrimary: true
                }, {
                    name: 'Spawn Sacs',
                    technique: 'Drift under a float.',
                    reason: 'A natural, high-protein meal that is hard to resist.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Retrieve as slowly as possible for a deep thump.',
                    reason: 'The strong vibration is easy for fish to find in dirty water.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Fish a piece of smelt or sucker on the bottom.',
                    reason: 'A strong scent offering for less active fish.'
                }], //
                colors: ['Firetiger', 'Chartreuse', 'Hot Pink'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Deep Holes & River Bends',
                    description: 'In high, muddy water, fish will congregate in the deepest, slowest sections of the river to conserve energy.'
                }, //
                tips: [{
                    title: 'Go Big and Bright',
                    description: 'Use a large, brightly colored crankbait with loud rattles.'
                }, {
                    title: 'Slow it Down',
                    description: 'A slow retrieve is critical to give fish time to find and react to your lure.'
                }, {
                    title: 'Check Your Hooks',
                    description: 'Make sure your hooks are sticky sharp, as bites can be subtle.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Use an erratic retrieve.',
                    reason: 'Cloud cover makes Atlantics more aggressive and willing to chase a fleeing baitfish.',
                    isPrimary: true
                }, {
                    name: 'Swimbaits',
                    technique: 'Slow and steady retrieve.',
                    reason: 'A realistic imitation for wary, educated fish.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Cast and retrieve over flats and points.',
                    reason: 'Covers water to find actively hunting salmon.'
                }, {
                    name: 'Spoons',
                    technique: 'Use an erratic retrieve with lots of pauses.',
                    reason: 'The flutter on the fall triggers following fish to strike.'
                }], //
                colors: ['Natural Shad', 'Smelt', 'Silver'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Suspended Over Deep Water',
                    description: 'Cloudy skies give salmon the confidence to leave cover and suspend over deeper water to hunt for schools of baitfish.'
                }, //
                tips: [{
                    title: 'Prime Time',
                    description: 'Cloudy days are often the best days to catch a trophy Atlantic Salmon.'
                }, {
                    title: 'Watch for Followers',
                    description: 'Atlantics will often follow a lure right to the boat. A pause or twitch at the end of the retrieve can trigger a strike.'
                }, {
                    title: 'Match the Hatch',
                    description: 'Use lures that closely mimic the size and color of the local baitfish.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Spoons',
                    technique: 'Cast and let it flutter on the fall.',
                    reason: 'The flash and wobble is a classic attractor for all salmonids.',
                    isPrimary: true
                }, {
                    name: 'Inline Spinners',
                    technique: 'Vary your retrieve speed.',
                    reason: 'Covers water and finds aggressive, hunting fish.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Use a slow retrieve with long pauses.',
                    reason: 'A deadly imitation of a dying baitfish in cold water.'
                }, {
                    name: 'Swimbaits',
                    technique: 'Fish a realistic swimbait slowly near the bottom.',
                    reason: 'A great choice for targeting the largest, wariest fish.'
                }], //
                colors: ['Silver', 'Blue', 'Gold', 'Orange'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Tributary Mouths and Points',
                    description: 'These are perfect conditions. Salmon will be actively hunting for meals around major points and near the mouths of rivers.'
                }, //
                tips: [{
                    title: 'The Bite is On',
                    description: 'These are the conditions anglers dream of. Fish with confidence and cover water.'
                }, {
                    title: 'Strikes on the Fall',
                    description: 'Many bites on a spoon will come as the lure is fluttering down. Watch your line!'
                }, {
                    title: 'Use a Snap',
                    description: 'A small snap swivel will allow your spoon or spinner to have the best possible action.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Slow retrieve through pools.',
                    reason: 'The noise and vibration calls them in.',
                    isPrimary: true
                }, {
                    name: 'Live Minnow',
                    technique: 'Fish on bottom.',
                    reason: 'Scent is most reliable.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Use a large, thumping blade to create vibration.',
                    reason: 'The vibration helps fish find the lure in dirty water.'
                }, {
                    name: 'Worms',
                    technique: 'Use a large bunch for a strong scent trail.',
                    reason: 'A can\'t-miss bait when visibility is low.'
                }], //
                colors: ['Chartreuse', 'Firetiger', 'White'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Deep Pools & Current Breaks',
                    description: 'Fish will hold tight to the bottom in deep pools. You need a lure that gets down and makes a disturbance.'
                }, //
                tips: [{
                    title: 'Make Bottom Contact',
                    description: 'Your crankbait should be periodically digging into the gravel or sand.'
                }, {
                    title: 'Multiple Casts',
                    description: 'It might take many casts to the same spot to trigger a fish into biting.'
                }, {
                    title: 'Use a Scent Attractant',
                    description: 'Adding scent to your crankbait can be a major advantage in muddy water.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Spawn Sacs',
                    technique: 'Drift under a float.',
                    reason: 'The number one bait for river-run salmon.',
                    isPrimary: true
                }, {
                    name: 'Large Spinners',
                    technique: 'Use a big blade for a slow, thumping retrieve.',
                    reason: 'Maximum vibration helps fish find your lure.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Use a loud, rattling model with a slow wobble.',
                    reason: 'The sound and vibration can trigger fish in low visibility.'
                }, {
                    name: 'Live Minnows',
                    technique: 'Fish under a float in calm eddies.',
                    reason: 'The natural scent and action is a powerful trigger.'
                }], //
                colors: ['Hot Pink', 'Chartreuse', 'Orange'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'First Deep Pool Upriver',
                    description: 'Salmon entering a muddy river will often stack up in the first deep, slow pool they find. This concentrates the fish.'
                }, //
                tips: [{
                    title: 'Find the "Walking Speed" Current',
                    description: 'You want a drift speed that is about the same as a slow walk. This is perfect for a natural presentation.'
                }, {
                    title: 'Use a High-Vis Float',
                    description: 'A bright float (bobber) will help you detect the incredibly subtle bites.'
                }, {
                    title: 'Fresh is Best',
                    description: 'Use fresh, well-cured spawn for the best results.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Erratic retrieve.',
                    reason: 'Rain triggers an aggressive feeding response.',
                    isPrimary: true
                }, {
                    name: 'Worms',
                    technique: 'Drift them naturally.',
                    reason: 'Rain washes worms into the river, making them a key food source.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Retrieve quickly across current.',
                    reason: 'A great choice for active fish feeding in the rain.'
                }, {
                    name: 'Spoons',
                    technique: 'Let it flutter in the current.',
                    reason: 'The flash and wobble will attract aggressive, rain-activated salmon.'
                }], //
                colors: ['Smelt', 'Black', 'Natural Shad'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Shallow Riffles & Bank Eddies',
                    description: 'Rain activates the entire ecosystem. Salmon will move into shallow water to feed on disoriented baitfish and insects.'
                }, //
                tips: [{
                    title: 'An Aggressive Bite',
                    description: 'Rain often triggers the best bite of the day. Fish faster and more aggressively than you would in the sun.'
                }, {
                    title: 'Fish Close to the Bank',
                    description: 'Don\'t be afraid to cast into water that is only a foot or two deep.'
                }, {
                    title: 'The Surface is Your Friend',
                    description: 'The rain breaks up the surface, making the fish less wary of your presence.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Spoons',
                    technique: 'Swing them through deep runs.',
                    reason: 'A classic presentation that is deadly in the rain.',
                    isPrimary: true
                }, {
                    name: 'Inline Spinners',
                    technique: 'Cast across current.',
                    reason: 'Perfect for active, hunting fish.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Use a slow retrieve with long pauses.',
                    reason: 'A great imitation of a large, dying baitfish.'
                }, {
                    name: 'Swimbaits',
                    technique: 'Fish slowly through deep pools.',
                    reason: 'A realistic profile for targeting trophy fish.'
                }], //
                colors: ['Silver', 'Gold', 'Blue', 'Orange'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Deep Pools and Runs',
                    description: 'A cool rain will have the biggest fish in the system on the move. Target classic holding spots like deep runs and pools.'
                }, //
                tips: [{
                    title: 'Go for a Trophy',
                    description: 'These are the conditions where the largest fish are most likely to be caught. Use lures you are confident in.'
                }, {
                    title: 'Let it Swing',
                    description: 'Cast your spoon across the current and let it swing downstream in an arc on a tight line. The current gives it the action.'
                }, {
                    title: 'Stay Safe',
                    description: 'Be aware of rising water levels and slippery rocks.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Slow retrieve with pauses.',
                    reason: 'Noise and vibration are key.',
                    isPrimary: true
                }, {
                    name: 'Live Minnow',
                    technique: 'Fish a large minnow or worm on the bottom.',
                    reason: 'Scent is the most reliable way to get a bite.'
                }, {
                    name: 'Large Spinners',
                    technique: 'Use a big, thumping blade retrieved slowly.',
                    reason: 'The intense vibration is easy for fish to locate.'
                }, {
                    name: 'Worms',
                    technique: 'Use a large bunch for a bigger scent trail.',
                    reason: 'A classic bait that\'s always effective.'
                }], //
                colors: ['Firetiger', 'Chartreuse', 'Red'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Current Seams & River Mouths',
                    description: 'The influx of muddy water will create current seams. Salmon will use these seams as ambush points.'
                }, //
                tips: [{
                    title: 'Fish the Seam',
                    description: 'Target the visible line where the muddy water meets any slightly clearer water.'
                }, {
                    title: 'Go Loud',
                    description: 'Use your loudest rattling crankbaits to help fish find your lure.'
                }, {
                    title: 'Be Patient',
                    description: 'This is a tough bite. Let your baits soak and give fish time to find them.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Spawn Sacs',
                    technique: 'Drift under a float through deep holes.',
                    reason: 'The number one choice for river salmon.',
                    isPrimary: true
                }, {
                    name: 'Large Spinners',
                    technique: 'Use a slow, thumping retrieve.',
                    reason: 'The vibration of a large blade can call fish in.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Use a loud, slow-wobbling model.',
                    reason: 'The sound and water displacement gets noticed.'
                }, {
                    name: 'Worms',
                    technique: 'Drift a full nightcrawler along the bottom.',
                    reason: 'A natural, high-scent option for tough conditions.'
                }], //
                colors: ['Hot Pink', 'Chartreuse', 'White'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Deepest, Slowest Pools',
                    description: 'Fish will be concentrated on the bottom of the deepest and slowest pools to get out of the heavy, cold current.'
                }, //
                tips: [{
                    title: 'Focus on the Deepest Holes',
                    description: 'Find the deepest water in the stretch of river you are fishing, and you will find the salmon.'
                }, {
                    title: 'Natural Drift',
                    description: 'Your float should move downstream at the exact same speed as the bubbles on the surface.'
                }, {
                    title: 'Stay Warm',
                    description: 'Cold, rainy days are for the dedicated angler. Dress in warm layers and good rain gear.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jerkbait',
                    technique: 'Let the waves impart a natural rocking motion.',
                    reason: 'The chop on the surface makes the fish less wary and more aggressive.',
                    isPrimary: true
                }, {
                    name: 'Spoons',
                    technique: 'Make long casts with the wind.',
                    reason: 'Covers water efficiently to find active fish.'
                }, {
                    name: 'Inline Spinners',
                    technique: 'Use a weighted model and cast with the wind.',
                    reason: 'The flash is highly effective in the chop.'
                }, {
                    name: 'Swimbaits',
                    technique: 'Cast a small, heavy swimbait far.',
                    reason: 'A realistic profile for targeting wary salmon in the waves.'
                }], //
                colors: ['Silver', 'White', 'Smelt'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Wind-Blown Points & Shorelines',
                    description: 'Wind concentrates baitfish and creates a "chop" that salmon use as cover. Fish the windy side of the lake.'
                }, //
                tips: [{
                    title: 'Fish the "Chop"',
                    description: 'A steady 1-2 foot wave is a salmon angler\'s best friend.'
                }, {
                    title: 'Use the Wind',
                    description: 'Position yourself so you can make long casts with the wind at your back.'
                }, {
                    title: 'Pause is Key',
                    description: 'The waves will give a suspending jerkbait a subtle rocking motion on the pause that drives fish crazy.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Heavy Spoons',
                    technique: 'Cast far and let it sink before retrieving.',
                    reason: 'The weight is needed to cast in the wind and get down in the water column.',
                    isPrimary: true
                }, {
                    name: 'Swimbaits',
                    technique: 'Use a heavy, slow-sinking model.',
                    reason: 'A large, realistic profile for big fish.'
                }, {
                    name: 'Jerkbait',
                    technique: 'Use a large, deep-diving model.',
                    reason: 'Gets down under the waves to where the big fish are.'
                }, {
                    name: 'Trolling Spoons',
                    technique: 'Troll with the wind along deep drop-offs.',
                    reason: 'An effective way to cover water and find fish stacked up by the wind.'
                }], //
                colors: ['Silver', 'Blue', 'Rainbow Trout'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Windy Side of Deep Structure',
                    description: 'Wind creates current that will concentrate baitfish against deep points and shoals. The salmon will be there to feed.'
                }, //
                tips: [{
                    title: 'Heavier is Better',
                    description: 'Use heavy lures (3/4 oz or more) to get casting distance and maintain contact with your lure.'
                }, {
                    title: 'Braid is Your Friend',
                    description: 'Braided line cuts through the wind and increases casting distance. Always use a fluorocarbon leader.'
                }, {
                    title: 'Keep Your Rod Tip Low',
                    description: 'Keeping your rod tip pointed down at the water helps your lure run true in the waves.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Bright Crankbait',
                    technique: 'Troll or cast along windy banks.',
                    reason: 'The warmest, most active fish will be shallow.',
                    isPrimary: true
                }, {
                    name: 'Large Spinners',
                    technique: 'Use a big Colorado blade for thump.',
                    reason: 'Vibration is key.'
                }, {
                    name: 'Lipless Crankbait',
                    technique: 'Cast a loud, rattling model.',
                    reason: 'The sound carries well in the wind and dirty water.'
                }, {
                    name: 'Chatterbait',
                    technique: 'Retrieve slowly along the windy bank.',
                    reason: 'The hard vibration is easy for fish to find.'
                }], //
                colors: ['Firetiger', 'Chartreuse', 'Orange'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Shallow, Windy, Hard-Bottom Areas',
                    description: 'The wind pushes warm water shallow. Find any gravel or rock on the windy side and you will find the most active fish.'
                }, //
                tips: [{
                    title: 'Fish the Windy Bank!',
                    description: 'All the food and warmest water is being pushed there. It\'s where the fish will be.'
                }, {
                    title: 'Make Bottom Contact',
                    description: 'Grind your crankbait into the bottom to create a disturbance that attracts fish.'
                }, {
                    title: 'Stay Shallow',
                    description: 'Focus your efforts in 3-10 feet of water.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Rattling Lipless Crankbait',
                    technique: 'Slow retrieve near bottom.',
                    reason: 'Loud rattles and a tight vibration are key.',
                    isPrimary: true
                }, {
                    name: 'Live Minnow',
                    technique: 'Fish on bottom in calmer areas.',
                    reason: 'A reliable backup when the bite is tough.'
                }, {
                    name: 'Bright Crankbait',
                    technique: 'Use a slow, wide-wobbling model.',
                    reason: 'The heavy thump can call fish in.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Jig vertically in calm pockets.',
                    reason: 'Maximum vibration in a small package.'
                }], //
                colors: ['Red', 'Chrome', 'Gold'], //
                gear: gearMap.atlanticsalmon, //
                location: {
                    title: 'Calm Pockets Near Windy Areas',
                    description: 'Tough conditions. Fish will often tuck into a calm cove or the quiet side of a point to get a break from the wind.'
                }, //
                tips: [{
                    title: 'Find the Calm in the Storm',
                    description: 'Look for small pockets of calm water right next to the main windy areas.'
                }, {
                    title: 'Go Loud and Slow',
                    description: 'Retrieve a loud rattling lure as slowly as possible to give fish a chance to find it.'
                }, {
                    title: 'Be Patient',
                    description: 'The bite will be tough, but the fish you catch could be a trophy.'
                }, {
                    title: 'Handle with Care',
                    description: 'Atlantics are a sensitive species. Handle them quickly and gently for a successful release.'
                }] //
            }
        }
    }
},
      bluegill: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Small Jigs under a Bobber',
                    technique: 'Set to hover just above weed tops or structure.',
                    reason: 'Keeps the bait in the strike zone for suspended bluegill.',
                    isPrimary: true
                }, {
                    name: 'Worms',
                    technique: 'Use a small piece of worm or a wax worm on a hook.',
                    reason: 'The most natural and effective presentation for wary bluegill.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Use a slow, steady retrieve around the edges of shade.',
                    reason: 'Helps locate active schools of fish holding near cover.'
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Fish a tiny minnow under a float.',
                    reason: 'A lively bait that can entice the largest bluegill in the school.'
                }], //
                colors: ['White', 'Shock Pink', 'Black'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Shade Lines & Weed Pockets',
                    description: 'Bluegill will be tightly packed into any available shade from docks, overhanging trees, or inside pockets of weed beds.'
                }, //
                tips: [{
                    title: 'Find the Shade',
                    description: 'In bright sun, bluegill will always seek out the nearest shade.'
                }, {
                    title: 'Set the Depth Precisely',
                    description: 'Adjust your bobber stop in 6-inch increments until you find the exact depth the fish are holding.'
                }, {
                    title: 'Use Tiny Hooks',
                    description: 'Bluegill have very small mouths. A #8 or #10 hook is ideal.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Wax Worms',
                    technique: 'On a tiny jig, fished vertically.',
                    reason: 'A classic bait for cool-water bluegill.',
                    isPrimary: true
                }, {
                    name: 'Small Minnows',
                    technique: 'Hooked through the lip under a sensitive bobber.',
                    reason: 'The subtle action can trigger bites from lethargic fish.'
                }, {
                    name: 'Small Jigs',
                    technique: 'Fish a tiny plastic jig vertically with very subtle twitches.',
                    reason: 'A simple but highly effective artificial for cool water.'
                }, {
                    name: 'Scented Dough Bait',
                    technique: 'Use a tiny pinch on a small hook.',
                    reason: 'A strong-smelling bait for less active fish.'
                }], //
                colors: ['Chartreuse', 'White', 'Red'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Sunny Side of Deep Cover',
                    description: 'Bluegill will move to the sunny side of deeper cover like brush piles or cribs to warm up.'
                }, //
                tips: [{
                    title: 'Fish the Sunny Side',
                    description: 'Bluegill will seek out any available warmth from the sun.'
                }, {
                    title: 'Go Slow and Subtle',
                    description: 'Use a very slow presentation. Sometimes holding the bait perfectly still is best.'
                }, {
                    title: 'Use a Spring Bobber',
                    description: 'A spring bobber on your rod tip will help you detect the incredibly light bites.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'A small piece on a hook, fished on the bottom.',
                    reason: 'Scent is the most important factor in muddy water.',
                    isPrimary: true
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Under a float near cover.',
                    reason: 'The scent and movement attracts fish.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve very slowly so the blade barely turns.',
                    reason: 'The vibration helps fish find the lure.'
                }, {
                    name: 'Scented Baits',
                    technique: 'Use a crappie nibble or similar bait on a bright jig.',
                    reason: 'Combines a strong scent with a visible color.'
                }], //
                colors: ['Chartreuse', 'Orange'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Shallow Hard Cover',
                    description: 'In muddy water, live bait is the most effective. Find any shallow cover like stumps or dock pilings and let the fish find your bait.'
                }, //
                tips: [{
                    title: 'Scent is Everything',
                    description: 'In muddy water, live bait is by far the most effective way to attract fish.'
                }, {
                    title: 'Stay Put',
                    description: 'Find a likely spot and give the fish time to find your bait by smell.'
                }, {
                    title: 'Use a Bright Jighead',
                    description: 'Combine your live bait with a brightly colored jighead for added visibility.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Jigs with Scent',
                    technique: 'Fish very slowly on the bottom.',
                    reason: 'Combines a bright visual target with a strong smell.',
                    isPrimary: true
                }, {
                    name: 'Wax Worms',
                    technique: 'Use a lively minnow or worm under a high-vis bobber.',
                    reason: 'Helps you detect very subtle bites.'
                }, {
                    name: 'Crappie Minnows',
                    technique: 'The scent and subtle action is key.',
                    reason: 'A classic live bait for tough conditions.'
                }, {
                    name: 'Scented Dough Bait',
                    technique: 'Let it sit on the bottom.',
                    reason: 'A powerful scent-based bait for inactive fish.'
                }], //
                colors: ['Shock Pink', 'Chartreuse'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Shallowest, Warmest Water',
                    description: 'Bluegill will often be in less than two feet of water, seeking warmth. Use a bright bobber to detect bites.'
                }, //
                tips: [{
                    title: 'Fish Right on the Bank',
                    description: 'Bluegill will often be in extremely shallow water right against the bank.'
                }, {
                    title: 'Use a High-Vis Bobber',
                    description: 'A bright bobber will help you detect the subtle "lift" bites common in cool water.'
                }, {
                    title: 'The Slower, The Better',
                    description: 'Use the slowest presentation you possibly can.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Small Spinners',
                    technique: 'Use a slow, steady retrieve over weed tops.',
                    reason: 'Allows you to cover water to find active, roaming schools of bluegill.',
                    isPrimary: true
                }, {
                    name: 'Beetle Spins',
                    technique: 'Fan cast around docks and weed beds.',
                    reason: 'The extra flash and thump attracts aggressive fish.'
                }, {
                    name: 'Small Jigs',
                    technique: 'Cast and swim a tiny jig with a plastic trailer.',
                    reason: 'A subtle presentation for targeting schools once you find them.'
                }, {
                    name: 'Worms',
                    technique: 'Drift a piece of worm under a float.',
                    reason: 'A classic approach that works when fish ignore artificials.'
                }], //
                colors: ['White', 'Yellow', 'Black'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Shallow Weed Flats',
                    description: 'Cloud cover makes bluegill spread out and actively roam shallow flats. Use small moving baits to cover water and find them.'
                }, //
                tips: [{
                    title: 'Fish are Roaming',
                    description: 'Cloud cover makes bluegill feel secure and they will spread out to feed.'
                }, {
                    title: 'Cover Water to Find Them',
                    description: 'Use a small spinner or beetle spin to make long casts and find where the schools are located.'
                }, {
                    title: 'Fan Cast Each Area',
                    description: 'Make casts in a fan pattern to cover all the water in front of you before moving.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Small Jigs',
                    technique: 'Slowly swim the jig back to the boat.',
                    reason: 'A subtle presentation for less active but willing fish.',
                    isPrimary: true
                }, {
                    name: 'Crappie Tubes',
                    technique: 'Cast and retrieve slowly, watching your line.',
                    reason: 'The subtle fall of a tube jig is irresistible.'
                }, {
                    name: 'Small Inline Spinner',
                    technique: 'Use a slow, steady retrieve along weed lines.',
                    reason: 'The flash is highly effective for active fish in low light.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve slowly over submerged cover.',
                    reason: 'The added vibration helps fish find the lure.'
                }], //
                colors: ['Black', 'Blue', 'Purple'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Edges of Shallow Weed Beds',
                    description: 'A slow, swimming retrieve with a tiny jig can be deadly along the edges of shallow vegetation.'
                }, //
                tips: [{
                    title: 'Swim the Jig Slowly',
                    description: 'A slow, steady swimming retrieve with a small jig is a deadly technique.'
                }, {
                    title: 'Line Watching is Key',
                    description: 'Often you will not feel the bite, but you will see your line jump or move sideways. Set the hook!'
                }, {
                    title: 'Use a Loop Knot',
                    description: 'A loop knot will give your tiny jig more freedom of movement and a more natural action.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Fish under a bobber near inflows.',
                    reason: 'The scent is key to attracting fish in dirty water.',
                    isPrimary: true
                }, {
                    name: 'Minnows',
                    technique: 'Use a lively minnow to create vibration.',
                    reason: 'The movement helps fish find the bait.'
                }, {
                    name: 'Bright Jigs',
                    technique: 'Tip a bright jig with a wax worm or minnow.',
                    reason: 'Combines a visual target with a strong scent.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve as slowly as possible.',
                    reason: 'The vibration from the blade helps fish locate the lure.'
                }], //
                colors: ['Chartreuse', 'Shock Pink'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'River/Creek Inflows',
                    description: 'Any source of incoming, slightly clearer water will concentrate bluegill. Use a small hook and live bait.'
                }, //
                tips: [{
                    title: 'Fish the Inflows',
                    description: 'Any source of clearer water acts as a magnet for fish in a muddy system.'
                }, {
                    title: 'Use a Small, Light Hook',
                    description: 'Don\'t use a hook that is too large or heavy; it will impede the action of your live bait.'
                }, {
                    title: 'Go Bright',
                    description: 'Use a brightly colored jig head or even a small colorful bead above your hook.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Jigs',
                    technique: 'Tip with a wax worm or piece of nightcrawler.',
                    reason: 'Combines the visibility of a bright jig with crucial scent.',
                    isPrimary: true
                }, {
                    name: 'Scented Baits',
                    technique: 'Fish very slowly on the bottom.',
                    reason: 'The only option for tough conditions.'
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Fish under a sensitive float.',
                    reason: 'A lively, scented bait for lethargic fish.'
                }, {
                    name: 'Worms',
                    technique: 'Use a small piece on a jig.',
                    reason: 'A classic bait that is always effective.'
                }], //
                colors: ['Orange', 'Chartreuse'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Shallowest, Calmest Water',
                    description: 'A very slow presentation is key in cool, muddy water. Bluegill will often be surprisingly shallow, seeking any available warmth.'
                }, //
                tips: [{
                    title: 'Slow it Way Down',
                    description: 'A dead-stick presentation, where you don\'t move the bait at all, is often best.'
                }, {
                    title: 'Stay Shallow',
                    description: 'Even in bad conditions, bluegill will often push into the shallowest water available.'
                }, {
                    title: 'Tip Your Jig',
                    description: 'Adding a small piece of live bait or a scented artificial nibble makes all the difference.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Live Worms',
                    technique: 'Fish under a small float near run-offs.',
                    reason: 'Rain washes insects and worms into the water.',
                    isPrimary: true
                }, {
                    name: 'Small Jigs',
                    technique: 'Cast to the bank.',
                    reason: 'Fish will be right against the shore feeding.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve slowly through run-off areas.',
                    reason: 'A classic lure that excels when fish are feeding aggressively.'
                }, {
                    name: 'Small Inline Spinner',
                    technique: 'Cast along the bank and retrieve.',
                    reason: 'The flash is great for triggering bites from rain-activated fish.'
                }], //
                colors: ['Black', 'White'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Shallow Banks & Run-offs',
                    description: 'Rain washes insects and worms into the water, and bluegill go on a feeding frenzy right up against the bank.'
                }, //
                tips: [{
                    title: 'Rain Means Food',
                    description: 'Rain washes their favorite foods right to them, triggering an aggressive bite.'
                }, {
                    title: 'Fish Right on the Bank',
                    description: 'Cast right up to the water\'s edge where runoff is entering.'
                }, {
                    title: 'Use a Sensitive Float',
                    description: 'A small, sensitive float will help you detect bites from actively feeding fish.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Crappie Minnows',
                    technique: 'Drift through current seams.',
                    reason: 'A natural presentation for active fish.',
                    isPrimary: true
                }, {
                    name: 'Wax Worms',
                    technique: 'On a small jig, drifted through pools.',
                    reason: 'A classic bait that always works.'
                }, {
                    name: 'Small Jigs',
                    technique: 'Cast into eddies and let it sink.',
                    reason: 'Imitates a washed-out insect or grub.'
                }, {
                    name: 'Worms',
                    technique: 'Drift a small piece on a split-shot rig.',
                    reason: 'An irresistible offering in cool, rain-fed current.'
                }], //
                colors: ['Shock Pink', 'Chartreuse', 'White'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Current Breaks & Eddies',
                    description: 'Fish will sit behind rocks or logs to get out of the increased current. Drift your bait naturally past these ambush points.'
                }, //
                tips: [{
                    title: 'Find Current Breaks',
                    description: 'Any object that breaks the current will hold fish on its down-stream side.'
                }, {
                    title: 'Natural Drift is Key',
                    description: 'Drift your bait under a bobber at the same speed as the current.'
                }, {
                    title: 'Stay Mobile',
                    description: 'If you don\'t get a bite in a few minutes, move to the next current break.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Fish on the bottom.',
                    reason: 'Scent is the only way they will find it.',
                    isPrimary: true
                }, {
                    name: 'Minnows',
                    technique: 'Under a float in calm areas.',
                    reason: 'Scent and vibration from the minnow is key.'
                }, {
                    name: 'Scented Baits',
                    technique: 'Use a crappie nibble on a bright jig.',
                    reason: 'Combines a strong scent with a visual color target.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve extremely slowly along the bottom.',
                    reason: 'The vibration helps fish find the lure by feel.'
                }], //
                colors: ['Chartreuse', 'Orange'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Calmest Water Available',
                    description: 'In muddy, rainy conditions, live bait is your best option. Find a cove or area protected from the main flow and be patient.'
                }, //
                tips: [{
                    title: 'Scent is King',
                    description: 'In muddy, rainy conditions, live bait is your best and often only option.'
                }, {
                    title: 'Fish the Calmest Water',
                    description: 'Find a cove or small area protected from the main flow.'
                }, {
                    title: 'Bottom Fishing is Best',
                    description: 'Let your scented bait sit right on the bottom where fish can find it.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Scented Jigs',
                    technique: 'Dead-stick it on the bottom.',
                    reason: 'Patience is key; let the scent do the work.',
                    isPrimary: true
                }, {
                    name: 'Worms',
                    technique: 'Keep it simple and fish slow.',
                    reason: 'The only choice for the toughest conditions.'
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Fish under a very sensitive float.',
                    reason: 'The subtle action can be the only thing that gets a bite.'
                }, {
                    name: 'Wax Worms',
                    technique: 'Use on a bright jighead.',
                    reason: 'A classic cold, dirty water combination.'
                }], //
                colors: ['Shock Pink', 'Chartreuse'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Protected Shallow Areas',
                    description: 'These are tough conditions. You have to be patient and let the fish find your scented bait in calm, shallow areas seeking warmth.'
                }, //
                tips: [{
                    title: 'Be Patient',
                    description: 'These are tough conditions. You have to be willing to wait for a bite.'
                }, {
                    title: 'Use a Light',
                    description: 'If fishing at dusk, a small submersible light can attract microscopic organisms, which attract bluegill.'
                }, {
                    title: 'Keep it Simple',
                    description: 'A hook, a small split shot, and a worm is all you need.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Worms',
                    technique: 'Drift under a slip bobber.',
                    reason: 'A controlled drift is a great way to cover water for scattered fish.',
                    isPrimary: true
                }, {
                    name: 'Small Jigs',
                    technique: 'Use a slightly heavier jig (1/16 oz).',
                    reason: 'Maintains contact with the bottom in the wind.'
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Drift on a light jighead or under a slip bobber.',
                    reason: 'A lively presentation to find active, feeding fish.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Cast downwind and use a slow, steady retrieve.',
                    reason: 'A great search bait for covering windy flats.'
                }], //
                colors: ['White', 'Shock Pink', 'Yellow'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Windy Side of Flats',
                    description: 'Use a drift sock to slow your drift across large flats where bluegill will be feeding on stirred-up insects and organisms.'
                }, //
                tips: [{
                    title: 'Drift With the Wind',
                    description: 'A controlled drift with a slip bobber is a highly effective way to cover water.'
                }, {
                    title: 'Heavier is Better',
                    description: 'Use a slightly heavier jig or sinker to maintain contact with your bait in the wind.'
                }, {
                    title: 'Use a Long Rod',
                    description: 'A long panfish rod (7-9 ft) will help you control your line and float in the wind.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Crappie Minnows',
                    technique: 'Anchor upwind and cast to cover.',
                    reason: 'Live bait is very effective for wind-activated fish.',
                    isPrimary: true
                }, {
                    name: 'Small Jigs',
                    technique: 'Use a heavier jig to feel bites.',
                    reason: 'Helps feel the subtle bites in the waves.'
                }, {
                    name: 'Small Inline Spinner',
                    technique: 'Use a weighted spinner to cast into the wind.',
                    reason: 'The flash attracts fish that are actively feeding in the chop.'
                }, {
                    name: 'Worms',
                    technique: 'Fish under a bobber near windy points.',
                    reason: 'A classic bait that always produces.'
                }], //
                colors: ['Chartreuse', 'White'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Windy Shorelines & Points',
                    description: 'The wind will concentrate food on the downwind shore. Anchor upwind of a likely spot like a weedbed or dock and cast to it.'
                }, //
                tips: [{
                    title: 'Fish the Windy Side',
                    description: 'The wind concentrates food on the downwind shore, and the fish will follow.'
                }, {
                    title: 'Anchor Upwind',
                    description: 'Anchor your boat upwind of a school and cast to them to avoid spooking them with the boat.'
                }, {
                    title: 'Use a Heavier Jig',
                    description: 'A 1/16 or 1/8 oz jig will help you feel bites in the waves.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Crappie Minnows',
                    technique: 'Use a heavy, stable bobber.',
                    reason: 'A heavy bobber won\'t get blown around by the wind as much.',
                    isPrimary: true
                }, {
                    name: 'Worms',
                    technique: 'Inject with air to float it off the bottom.',
                    reason: 'Keeps the bait visible just above the silt.'
                }, {
                    name: 'Beetle Spin',
                    technique: 'Retrieve very slowly in calm pockets.',
                    reason: 'The blade\'s vibration can help fish find the lure.'
                }, {
                    name: 'Scented Baits',
                    technique: 'Use a bright jig tipped with a scented nibble.',
                    reason: 'Combines the best of sight and smell for tough conditions.'
                }], //
                colors: ['Chartreuse', 'Orange'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Calm Pockets & Coves',
                    description: 'Find any small area that is protected from the main wind and fish live bait slowly and patiently.'
                }, //
                tips: [{
                    title: 'Fish the Calm Pockets',
                    description: 'Find any small cove or the calm side of a point that is protected from the wind.'
                }, {
                    title: 'Use a Stable Bobber',
                    description: 'A heavier, weighted bobber won\'t get blown around as much, making bites easier to see.'
                }, {
                    title: 'Use a Bait Injector',
                    description: 'Injecting a small bubble of air into a worm can help it float up off the bottom.'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Scented Jigs',
                    technique: 'Use a dead-stick presentation.',
                    reason: 'Let the scent and the subtle wave action do the work.',
                    isPrimary: true
                }, {
                    name: 'Wax Worms',
                    technique: 'Fish very slowly on the bottom.',
                    reason: 'The ultimate choice for the toughest conditions.'
                }, {
                    name: 'Crappie Minnows',
                    technique: 'Fish under a sensitive float in a calm pocket.',
                    reason: 'The subtle action of a live minnow can be key.'
                }, {
                    name: 'Scented Dough Bait',
                    technique: 'Use a small pinch on a hook.',
                    reason: 'A strong-smelling bait for the worst conditions.'
                }], //
                colors: ['Shock Pink', 'Chartreuse'], //
                gear: gearMap.bluegill, //
                location: {
                    title: 'Warmest, Calmest, Clearest Water',
                    description: 'This is the toughest combination. Focus on finding the warmest, calmest, clearest water you can and fish very slowly.'
                }, //
                tips: [{
                    title: 'Toughest Conditions',
                    description: 'This is a challenge. Focus on finding the warmest, calmest water available, even if it\'s a small area.'
                }, {
                    title: 'Dead-Stick is Best',
                    description: 'A dead-stick presentation, letting the waves impart all the action, is often best.'
                }, {
                    title: 'Sometimes it\'s Just Tough',
                    description: 'Sometimes, the best decision is to wait for better conditions!'
                }, {
                    title: 'Flick of the Wrist Hookset',
                    description: 'A gentle flick is all that is needed to set the hook.'
                }] //
            }
        }
    }
},
				lakewhitefish: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jigging Spoons',
                    technique: 'Use small, subtle hops right on the bottom in deep water.',
                    reason: 'Whitefish are deep. The flash of a spoon mimics small baitfish or invertebrates.',
                    isPrimary: true
                }, {
                    name: 'Drop Shot with Minnow',
                    technique: 'Hook a small live minnow and hold it perfectly still just off bottom.',
                    reason: 'A very natural presentation for wary, deep-water fish.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Use a small blade bait with short, sharp vertical rips.',
                    reason: 'The vibration can call in fish from a distance in deep, clear water.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use a subtle jigging motion to make it dart and circle.',
                    reason: 'The erratic swimming action can trigger bites from curious but inactive fish.'
                }], //
                colors: ['Silver', 'Gold', 'Chartreuse'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Deepest Basins of the Lake',
                    description: 'In warm water, whitefish will be in the deepest, coldest part of the lake, often in 50-100+ feet of water. Electronics are essential.'
                }, //
                tips: [{
                    title: 'Electronics are Mandatory',
                    description: 'You must use a fish finder to locate schools of whitefish in the deep basins.'
                }, {
                    title: 'Pound the Bottom',
                    description: 'Repeatedly letting your spoon hit the bottom stirs up silt, attracting curious fish.'
                }, {
                    title: 'Subtle is Key',
                    description: 'Use very small jigging motions. Often, just tapping your finger on the rod is enough.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jigging Spoons',
                    technique: 'Jig vertically over deep structure.',
                    reason: 'The number one lure for whitefish through the ice or in open water.',
                    isPrimary: true
                }, {
                    name: 'Blade Baits',
                    technique: 'Use small, sharp rips to create vibration.',
                    reason: 'The vibration can call in fish from a distance.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Snap it aggressively to make it dart and circle.',
                    reason: 'The erratic action is a powerful trigger for active, cool-water fish.'
                }, {
                    name: 'Tube Jig',
                    technique: 'Use a white or glow tube jig and hop it on the bottom.',
                    reason: 'A subtle presentation that imitates bottom-dwelling gobies or sculpin.'
                }], //
                colors: ['Silver', 'Gold', 'Glow'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Deep Humps and Shoals (40-80ft)',
                    description: 'Whitefish will relate to deep underwater humps and the edges of shoals. Look for schools near the bottom.'
                }, //
                tips: [{
                    title: 'Stay Vertical',
                    description: 'Position your boat or ice hut directly over the school of fish for the best presentation.'
                }, {
                    title: 'Tip Your Spoon',
                    description: 'Tipping the treble hook of your spoon with a wax worm or minnow head can double your bites.'
                }, {
                    title: 'Watch For "Up-Bites"',
                    description: 'Often a whitefish will hit your lure from below as it falls. Your line will suddenly go slack - set the hook!'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Glow Spoons',
                    technique: 'Jig slowly and charge the glow often.',
                    reason: 'In deep, dark, or stained water, a glowing lure is the most visible.',
                    isPrimary: true
                }, {
                    name: 'Blade Baits',
                    technique: 'Use a vibrating lure to help fish find it by feel.',
                    reason: 'Vibration is key when visibility is low.'
                }, {
                    name: 'Rattling Lipless Crankbait',
                    technique: 'Jig vertically to create noise and vibration.',
                    reason: 'The added sound is a major advantage in muddy water.'
                }, {
                    name: 'Glow Jigs with Bait',
                    technique: 'Tip a glow jig with a minnow for maximum scent and visibility.',
                    reason: 'Combines the top attractants for the toughest conditions.'
                }], //
                colors: ['Glow', 'Chartreuse', 'Orange'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Deepest Water Available',
                    description: 'This is a very tough bite. Find the deepest basin in the lake and use lures that glow or create a lot of vibration.'
                }, //
                tips: [{
                    title: 'Charge That Glow',
                    description: 'Use a camera flash or UV light to get the maximum glow from your lures every few minutes.'
                }, {
                    title: 'Use Scent',
                    description: 'Adding a commercial scent like Gulp! or tipping with bait is crucial in low visibility.'
                }, {
                    title: 'Be Patient',
                    description: 'The bite will be slow. You may have to jig for a long time to get a reaction.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Rattling Blade Bait',
                    technique: 'Jig with sharp rips to maximize noise.',
                    reason: 'Noise and vibration are the best tools for calling fish in.',
                    isPrimary: true
                }, {
                    name: 'Glow Jigs with Bait',
                    technique: 'Tip a glow jig with a minnow.',
                    reason: 'The ultimate combination of sight (glow), sound (jigging), and smell (bait).'
                }, {
                    name: 'Heavy Spoons with Rattles',
                    technique: 'Jig aggressively to create sound.',
                    reason: 'The added noise helps fish find your lure in the murk.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use a rattling model for extra sound.',
                    reason: 'The combination of darting action and sound can trigger bites.'
                }], //
                colors: ['Gold', 'Silver', 'Glow'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Deep Hard-Bottom Areas',
                    description: 'Sound travels well over hard bottoms. Find deep rock or gravel and use loud, vibrating lures.'
                }, //
                tips: [{
                    title: 'Make Some Noise',
                    description: 'Use the loudest rattling and vibrating lure you have to help fish find it.'
                }, {
                    title: 'Braided Line is Key',
                    description: 'Braided line has zero stretch, allowing you to feel the lure vibrate and detect extremely light bites.'
                }, {
                    title: 'Stay on a Spot',
                    description: 'If you mark fish, stay on them. It may take dozens of jigs to get a bite in these conditions.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jigging Spoons',
                    technique: 'Jig higher in the water column.',
                    reason: 'Cloud cover makes whitefish more active and willing to rise off the bottom to feed.',
                    isPrimary: true
                }, {
                    name: 'Drop Shot with Minnow',
                    technique: 'Suspend the bait 2-3 feet off bottom.',
                    reason: 'Targets the more aggressive, suspended fish.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use an aggressive cadence for suspended fish.',
                    reason: 'The darting action can draw fish in and trigger strikes.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Use a lift-and-fall retrieve through schools of fish.',
                    reason: 'The vibration is highly effective for active, hunting whitefish.'
                }], //
                colors: ['Smelt', 'White', 'Blue'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Suspended Over Deep Basins',
                    description: 'Cloudy weather makes whitefish more aggressive. They will rise off the bottom to chase schools of suspended baitfish like smelt.'
                }, //
                tips: [{
                    title: 'Fish are Hunting',
                    description: 'Cloudy skies are a prime time. Fish are more active and willing to chase.'
                }, {
                    title: 'Watch Your Electronics',
                    description: 'Pay close attention to your fish finder to see if fish are suspended 5-15 feet off the bottom.'
                }, {
                    title: 'Aggressive Jigging',
                    description: 'Use slightly larger and more aggressive hops with your spoon to attract attention.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jigging Spoons',
                    technique: 'Use an aggressive jigging cadence.',
                    reason: 'This is the best time to be whitefish fishing. They will be active and feeding.',
                    isPrimary: true
                }, {
                    name: 'Small Swimbaits',
                    technique: 'Drop to the bottom and slowly retrieve.',
                    reason: 'A realistic imitation of the baitfish they are feeding on.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Cast and rip it back to the boat over shoals.',
                    reason: 'A great way to cover water and trigger strikes from active fish.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use a faster, more erratic retrieve.',
                    reason: 'Perfect for triggering aggressive bites in prime conditions.'
                }], //
                colors: ['White', 'Chartreuse', 'Smelt'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Tops and Edges of Deep Shoals',
                    description: 'PRIME TIME. Whitefish will move up onto the tops of deep shoals (30-50ft) to feed. Use your electronics to find them.'
                }, //
                tips: [{
                    title: 'Prime Time Conditions',
                    description: 'Cloudy and cool is a perfect storm for an active whitefish bite. This is as good as it gets.'
                }, {
                    title: 'Find the "Popcorn"',
                    description: 'On your sonar, active whitefish schools often look like a pile of popcorn on the bottom.'
                }, {
                    title: 'Don\'t Be Afraid to Move',
                    description: 'If a school isn\'t biting after a few minutes, move to the next piece of structure.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Glow Spoons',
                    technique: 'Jig with a slow, methodical rhythm.',
                    reason: 'Glow is the most visible attractor in deep, stained water.',
                    isPrimary: true
                }, {
                    name: 'Blade Baits',
                    technique: 'Jig with vibration.',
                    reason: 'Helps fish find it by feel.'
                }, {
                    name: 'Rattling Lipless Crankbait',
                    technique: 'Jig vertically to add sound.',
                    reason: 'The rattles are key for getting noticed in dirty water.'
                }, {
                    name: 'Glow Jigs with Bait',
                    technique: 'Tip with a minnow or worm for maximum scent.',
                    reason: 'The ultimate combination of sight and smell.'
                }], //
                colors: ['Glow', 'Chartreuse'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Deepest Water near Inflows',
                    description: 'Find the deepest water you can that might be influenced by a river bringing in slightly clearer water. This is a tough bite.'
                }, //
                tips: [{
                    title: 'Maximize Your Glow',
                    description: 'Use a UV light to charge your glow lures for the brightest and longest-lasting effect.'
                }, {
                    title: 'Scent is Non-Negotiable',
                    description: 'You must tip your lure with bait or add a commercial scent in these conditions.'
                }, {
                    title: 'Be Methodical',
                    description: 'Once you find a spot, fish it thoroughly and patiently.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Rattling Blade Bait',
                    technique: 'Use sharp, aggressive rips.',
                    reason: 'The loudest, most vibrant lure in your box is your best bet.',
                    isPrimary: true
                }, {
                    name: 'Glow Jigs with Bait',
                    technique: 'Fish it right on the bottom.',
                    reason: 'Combines the key triggers: glow, scent, and subtle action.'
                }, {
                    name: 'Heavy Spoons with Rattles',
                    technique: 'Jig aggressively to create a lot of noise.',
                    reason: 'The sound helps fish find your lure.'
                }, {
                    name: 'Rippin\' Rap',
                    technique: 'Jig vertically with a loud, rattling model.',
                    reason: 'The sound and vibration is a powerful trigger.'
                }], //
                colors: ['Gold', 'Orange', 'Glow'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Sharp Deep Ledges with Hard Bottom',
                    description: 'Fish will hold tight to sharp ledges. Use your trolling motor to slowly work along the edge while jigging vertically.'
                }, //
                tips: [{
                    title: 'Let it Hit Bottom',
                    description: 'Make sure your lure makes contact with the bottom on every drop, then rip it up sharply.'
                }, {
                    title: 'Braided Line is a Must',
                    description: 'Braid helps you feel the lure vibrate and detect the incredibly subtle bites in deep water.'
                }, {
                    title: 'Pound a Small Area',
                    description: 'If you mark a fish, stay right on top of it and make repeated drops.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jigging Spoons',
                    technique: 'Use an erratic jigging motion.',
                    reason: 'Rain and clouds can trigger a feeding response, and an aggressive presentation works well.',
                    isPrimary: true
                }, {
                    name: 'Drop Shot with Minnow',
                    technique: 'Fish over deep structure.',
                    reason: 'A natural presentation for active but wary fish.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Jig aggressively for suspended fish.',
                    reason: 'The strong vibration is perfect for active, hunting fish.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use a faster cadence than usual.',
                    reason: 'The erratic darting action triggers fish activated by the rain.'
                }], //
                colors: ['Smelt', 'Blue', 'White'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Deep Structure & Ledges',
                    description: 'Rain and clouds will make fish more active. They may suspend slightly higher or move to the edges of deep structure to feed.'
                }, //
                tips: [{
                    title: 'Rain Can Trigger a Bite',
                    description: 'A steady rain often improves the bite for deepwater predators like whitefish.'
                }, {
                    title: 'Watch Your Graph Closely',
                    description: 'Pay close attention to your electronics to see if fish are moving up or down in the water column.'
                }, {
                    title: 'Be Ready for a Harder Strike',
                    description: 'Active whitefish will sometimes hit the lure much more aggressively than usual.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Jigging Spoons',
                    technique: 'Aggressive jigging.',
                    reason: 'Rainy and cool is a prime time. A fast-falling lure triggers them.',
                    isPrimary: true
                }, {
                    name: 'Blade Baits',
                    technique: 'Fish near the bottom.',
                    reason: 'Classic and effective vibration.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use a fast, erratic cadence.',
                    reason: 'A great choice for aggressive, feeding fish.'
                }, {
                    name: 'Tube Jig',
                    technique: 'Use a heavy jighead to get down in the wind.',
                    reason: 'A subtle presentation for fish holding tight to structure.'
                }], //
                colors: ['White', 'Chrome', 'Chartreuse'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Wind-Blown Points and Humps',
                    description: 'Rain often comes with wind. The wind will create current and concentrate the microorganisms whitefish feed on.'
                }, //
                tips: [{
                    title: 'Fish the Windy Side',
                    description: 'Even in deep water, the wind-blown side of a hump will be more productive.'
                }, {
                    title: 'Use a Drift Sock',
                    description: 'A drift sock will slow your drift and allow for a more vertical presentation, which is key.'
                }, {
                    title: 'Aggressive Cadence',
                    description: 'Use sharp, fast rips of your rod to make your spoon or blade bait dart erratically.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Glow Spoons',
                    technique: 'Jig very slowly.',
                    reason: 'The best visual attractor in tough conditions.',
                    isPrimary: true
                }, {
                    name: 'Scented Jigs',
                    technique: 'Fish vertically and slowly.',
                    reason: 'Scent is paramount when visibility is near zero.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Jig with a lot of vibration.',
                    reason: 'Helps fish find the lure by feel.'
                }, {
                    name: 'Rattling Lipless Crankbait',
                    technique: 'Jig vertically for added noise.',
                    reason: 'The sound can be a key trigger in muddy water.'
                }], //
                colors: ['Glow', 'Chartreuse'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Mouths of Inflowing Rivers',
                    description: 'The current from an inflow will create a seam of slightly clearer water. Fish will stack up on this edge.'
                }, //
                tips: [{
                    title: 'Fish the Seam',
                    description: 'Look for the edge where muddy and clearer water mix. This is a fish magnet.'
                }, {
                    title: 'Go Big and Gaudy',
                    description: 'Use the largest glowing spoon in your box to create a bigger target.'
                }, {
                    title: 'Be Prepared for Debris',
                    description: 'Rain washes in leaves and branches. Check your lines often for foul-ups.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Rattling Blade Bait',
                    technique: 'Vertical jig with heavy vibration.',
                    reason: 'Noise is your best tool.',
                    isPrimary: true
                }, {
                    name: 'Glow Jigs with Bait',
                    technique: 'Let it sit with subtle twitches.',
                    reason: 'A patience game combining sight and smell.'
                }, {
                    name: 'Heavy Spoons with Rattles',
                    technique: 'Jig aggressively to create noise and flash.',
                    reason: 'The best combination of sound and sight.'
                }, {
                    name: 'Rippin\' Rap',
                    technique: 'Use a loud, rattling model jigged vertically.',
                    reason: 'The sound and vibration is great for dirty water.'
                }], //
                colors: ['Gold', 'Orange', 'Glow'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Calm, Deep Holes',
                    description: 'Find the deepest water that is out of the main current. Fish will hunker down here to get out of the muddy flow.'
                }, //
                tips: [{
                    title: 'Anchor and Wait',
                    description: 'Find a promising deep spot on your map and be patient. This is not a fast bite.'
                }, {
                    title: 'Sticky Sharp Hooks',
                    description: 'Bites can be incredibly subtle. Make sure your hooks are chemically sharpened.'
                }, {
                    title: 'Use a High-Vis Line',
                    description: 'High-visibility braided line will help you detect subtle "line-jump" bites before you feel them.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Jigging Spoons',
                    technique: 'Use a heavy spoon to stay vertical.',
                    reason: 'The extra weight is needed to combat the wind and waves.',
                    isPrimary: true
                }, {
                    name: 'Drop Shot',
                    technique: 'Use a heavy weight to pin it down.',
                    reason: 'Keeps your bait in the strike zone during a drift.'
                }, {
                    name: 'Blade Baits',
                    technique: 'Use a heavy model to stay vertical.',
                    reason: 'The vibration cuts through the waves for better bite detection.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use a larger size to get down quickly.',
                    reason: 'The heavier weight allows you to fish it effectively in deep, windy water.'
                }], //
                colors: ['Smelt', 'White'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Wind-Drifted Deep Flats',
                    description: 'Use the wind to your advantage. A controlled drift with heavy jigs allows you to cover vast deep flats where whitefish roam.'
                }, //
                tips: [{
                    title: 'Use a Drift Sock',
                    description: 'A large drift sock is essential to slow your boat down for an effective presentation.'
                }, {
                    title: 'Heavier is Better',
                    description: 'Use a heavy enough spoon or jig to feel the bottom at all times.'
                }, {
                    title: 'Point Your Rod at the Lure',
                    description: 'This helps you maintain contact and feel bites through the waves and wind.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Heavy Spoons',
                    technique: 'Drift and jig vertically.',
                    reason: 'Keeps you in contact with the bottom in the wind.',
                    isPrimary: true
                }, {
                    name: 'Blade Baits',
                    technique: 'Pound the bottom on a drift.',
                    reason: 'The erratic action and vibration triggers bites.'
                }, {
                    name: 'Jigging Rap',
                    technique: 'Use a heavy model to stay vertical.',
                    reason: 'The darting action is deadly for fish on deep structure.'
                }, {
                    name: 'Tube Jig',
                    technique: 'Use a 1-2 oz head to maintain bottom contact.',
                    reason: 'A subtle presentation for drifting over deep humps.'
                }], //
                colors: ['White', 'Chartreuse', 'Smelt'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Windy Side of Deep Structure',
                    description: 'Wind concentrates plankton and baitfish, and the entire food chain follows. Find deep points and humps getting hit by wind.'
                }, //
                tips: [{
                    title: 'Braid is a Must',
                    description: 'Low-stretch braid is crucial for feeling bites and setting the hook in deep, windy water.'
                }, {
                    title: 'Controlled Drifting',
                    description: 'Use your trolling motor to keep your drift speed and direction consistent over the structure.'
                }, {
                    title: 'Don\'t Be Afraid of the Wind',
                    description: 'Some of the best whitefish bites happen in the strongest wind. Be safe, but get out there.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Glow Spoons',
                    technique: 'Use a very heavy spoon.',
                    reason: 'Needed to get down and be seen in the churned up water.',
                    isPrimary: true
                }, {
                    name: 'Rattling Blade Bait',
                    technique: 'Jig aggressively.',
                    reason: 'Vibration helps fish find it.'
                }, {
                    name: 'Glow Jigs with Bait',
                    technique: 'Tip with a minnow for maximum scent.',
                    reason: 'The best combination of sight and smell.'
                }, {
                    name: 'Rippin\' Rap',
                    technique: 'Jig vertically with a loud model.',
                    reason: 'The sound and vibration can call fish in.'
                }], //
                colors: ['Glow', 'Chartreuse', 'Orange'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Wind-Blown Shoreline Drop-offs',
                    description: 'The wind will push warmer surface water toward one side of the lake. Find the sharpest deep drop-off on that side and drift along it.'
                }, //
                tips: [{
                    title: 'Follow the Wind',
                    description: 'Fish the side of the lake the wind is blowing into. It will have the most active fish.'
                }, {
                    title: 'Use Your Kicker or Trolling Motor',
                    description: 'You need precise boat control to stay on the drop-off in the wind.'
                }, {
                    title: 'Short, Sharp Jigs',
                    description: 'An aggressive jigging cadence is often needed to get a reaction in these conditions.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Blade Baits',
                    technique: 'Jig vertically with maximum vibration.',
                    reason: 'The only way to get their attention in these conditions.',
                    isPrimary: true
                }, {
                    name: 'Heavy Spoons with Rattles',
                    technique: 'Jig aggressively.',
                    reason: 'The added sound can attract fish from a distance.'
                }, {
                    name: 'Glow Jigs with Bait',
                    technique: 'Let it sit on the bottom in calm areas.',
                    reason: 'The best option for inactive fish in the worst conditions.'
                }, {
                    name: 'Rattling Lipless Crankbait',
                    technique: 'Jig vertically to create a lot of noise.',
                    reason: 'The loud rattles can be a powerful trigger.'
                }], //
                colors: ['Gold', 'Firetiger', 'Glow'], //
                gear: gearMap.lakewhitefish, //
                location: {
                    title: 'Calm Side of Deep Structure',
                    description: 'This is the toughest scenario. Find a deep hump on the calm side of the lake and be extremely patient, jigging vertically.'
                }, //
                tips: [{
                    title: 'Fish the Calm Side',
                    description: 'In these conditions, fish will often seek refuge from the wind and waves on the protected side of structure.'
                }, {
                    title: 'Electronics are Everything',
                    description: 'Do not start fishing until you have marked fish on your graph. Do not fish empty water.'
                }, {
                    title: 'Make Repeated Drops',
                    description: 'It may take dozens of drops on a fish\'s head to get a reaction.'
                }, {
                    title: 'Light Bites',
                    description: 'Bites feel like a slight "tick" or added weight. Set the hook on anything that feels different.'
                }] //
            }
        }
    }
},
				carp: {
    sunny: {
        clear: {
            warm: {
                lures: [{
                    name: 'Corn or Boilies on a Hair Rig',
                    technique: 'Fish on the bottom in a pre-baited area.',
                    reason: 'A subtle presentation for wary carp in clear water.',
                    isPrimary: true
                }, {
                    name: 'Zig Rig',
                    technique: 'Suspend a small piece of foam or a buoyant bait off the bottom.',
                    reason: 'Targets carp that are cruising higher in the water column in the sun.'
                }, {
                    name: 'Bread',
                    technique: 'Use a piece of floating bread crust on the surface.',
                    reason: 'An exciting visual way to catch carp feeding on top.'
                }, {
                    name: 'Method Feeder',
                    technique: 'Use a small amount of pack bait around the feeder.',
                    reason: 'Presents a small, concentrated pile of food for wary fish.'
                }], //
                colors: ['Carp Yellow', 'White'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Shallow Flats with Some Cover',
                    description: 'Carp will be "sunning" themselves in shallow, weedy bays. Look for "muds" or tail swirls. Be extremely stealthy.'
                }, //
                tips: [{
                    title: 'Stealth is Everything',
                    description: 'Carp are extremely intelligent and spook easily. Wear polarized glasses and move slowly.'
                }, {
                    title: 'Pre-Baiting (Chumming)',
                    description: 'Throwing handfuls of corn or pack bait into your spot attracts fish and gets them feeding confidently.'
                }, {
                    title: 'Use a Hair Rig',
                    description: 'This rig presents the bait naturally and leads to much better hookups in the corner of the mouth.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Pop-up Boilie',
                    technique: 'Fish a single, bright bait over a handful of corn.',
                    reason: 'A highly visible "super bait" can stand out and entice a bite from a lethargic carp.',
                    isPrimary: true
                }, {
                    name: 'Method Feeder with Pack Bait',
                    technique: 'Pack scented bait around a weight to create a pile of food with your hookbait in the middle.',
                    reason: 'A compact and effective way to present bait.'
                }, {
                    name: 'Pop-up Corn',
                    technique: 'Use a single piece of buoyant, artificial corn.',
                    reason: 'A small, bright, and critically balanced bait that is easy for a carp to inhale.'
                }, {
                    name: 'Worms',
                    technique: 'Fish a bunch of nightcrawlers on a hair rig.',
                    reason: 'The natural scent and movement can be a great attractant in cold water.'
                }], //
                colors: ['Carp Yellow', 'Hi-Vis Orange', 'Shock Pink'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Deeper Holes near Shallow Flats',
                    description: 'Carp will move into deeper holes but will make short trips to adjacent shallow flats to feed, especially on sunny afternoons.'
                }, //
                tips: [{
                    title: 'Find the Warmest Water',
                    description: 'Even a one or two-degree difference can concentrate all the carp in an area.'
                }, {
                    title: 'Single High-Attract Baits',
                    description: 'Instead of a bed of bait, sometimes a single, very bright and smelly bait will get a bite when they aren\'t feeding heavily.'
                }, {
                    title: 'Use PVA Bags',
                    description: 'These dissolving bags allow you to present a small, perfect pile of bait right next to your hook.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Pack Bait with Corn/Boilies',
                    technique: 'Fish a large ball of scented pack bait on the bottom.',
                    reason: 'The strong smell is essential for fish to find your bait in muddy water.',
                    isPrimary: true
                }, {
                    name: 'Large Dough Ball',
                    technique: 'Use a homemade dough ball with strong scents like strawberry or anise.',
                    reason: 'A classic, highly effective bait that leaks a lot of scent.'
                }, {
                    name: 'Method Feeder',
                    technique: 'Use a strong-smelling pack bait and recast often.',
                    reason: 'Effectively creates a concentrated scent trail.'
                }, {
                    name: 'Boilies',
                    technique: 'Use a large, heavily-flavored boilie.',
                    reason: 'A durable bait that can withstand smaller fish while waiting for a carp.'
                }], //
                colors: ['Carp Yellow', 'White'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Shallow Flats & River Mouths',
                    description: 'Muddy water gives carp the confidence to feed aggressively in very shallow water. Any inflow from a creek or river is a magnet.'
                }, //
                tips: [{
                    title: 'Scent is Everything',
                    description: 'In muddy water, carp rely almost entirely on their sense of smell. Use strong, sweet, or fruity flavors.'
                }, {
                    title: 'Go Big',
                    description: 'Use a larger bait and a larger pile of pack bait to create a bigger scent trail for the fish to find.'
                }, {
                    title: 'Fish Close to the Bank',
                    description: 'Don\'t be afraid to fish in only 2-3 feet of water. The fish will be there.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Method Feeder with Scented Pack Bait',
                    technique: 'Use a strong-smelling pack bait to draw fish in.',
                    reason: 'The most efficient way to present a scented bait in tough conditions.',
                    isPrimary: true
                }, {
                    name: 'Bright Pop-up Corn',
                    technique: 'Use artificial corn that is buoyant and brightly colored.',
                    reason: 'A small, bright bait is easy for a lethargic carp to suck in.'
                }, {
                    name: 'Bright Pop-up Boilie',
                    technique: 'Use a small, high-attract boilie.',
                    reason: 'A single, bright bait can stand out and get noticed.'
                }, {
                    name: 'Dough Ball',
                    technique: 'Use a strongly flavored dough ball on a hook.',
                    reason: 'The potent scent trail is key for muddy, cool water.'
                }], //
                colors: ['Chartreuse', 'Shock Pink', 'Hi-Vis Orange'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Calm Pockets & Eddies',
                    description: 'Carp will get out of the main, muddy flow and hold in calmer pockets of water. Find these and you\'ll find the fish.'
                }, //
                tips: [{
                    title: 'Patience Pays Off',
                    description: 'This can be a slow bite, but the fish you catch are often the largest of the season.'
                }, {
                    title: 'Find the Calmest Water',
                    description: 'Look for any area protected from the main current or wind.'
                }, {
                    title: 'Use a Bite Alarm',
                    description: 'Electronic bite alarms are crucial for detecting subtle bites and fishing effectively for long periods.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            }
        }
    },
    cloudy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Corn or Boilies on a Hair Rig',
                    technique: 'Create a large baited area and fish a balanced bait over it.',
                    reason: 'Cloudy weather gets carp moving and feeding heavily. A large bed of bait will hold them.',
                    isPrimary: true
                }, {
                    name: 'Boilies',
                    technique: 'Fish two different colored boilies in a "snowman" rig.',
                    reason: 'A critically balanced presentation that is easy for carp to inhale.'
                }, {
                    name: 'Pack Bait',
                    technique: 'Use a large ball of pack bait on a hair rig.',
                    reason: 'Creates a cloud of attraction that pulls in cruising fish.'
                }, {
                    name: 'Zig Rig',
                    technique: 'Fish mid-depth over weed flats.',
                    reason: 'Targets fish that are cruising and feeding higher in the water column.'
                }], //
                colors: ['Carp Yellow', 'White'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Roaming Large Weed Flats',
                    description: 'PRIME TIME. Carp will be actively and aggressively feeding across large, shallow weed flats. This is the best time to catch large numbers.'
                }, //
                tips: [{
                    title: 'This is Prime Time',
                    description: 'Cloudy, warm, and stable weather is the best it gets for carp fishing. They will be feeding hard.'
                }, {
                    title: 'Bait, Bait, and More Bait',
                    description: 'Don\'t be afraid to put out a good amount of bait (chum) to stop those roaming fish and get them feeding.'
                }, {
                    title: 'Find a Clear Spot',
                    description: 'Look for a sandy or gravel spot in the middle of a weed flat. It\'s a natural feeding area.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Pop-up Boilie',
                    technique: 'Fish a single, high-attract bait.',
                    reason: 'A single bright bait can be more effective than a pile when fish are cruising.',
                    isPrimary: true
                }, {
                    name: 'Method Feeder',
                    technique: 'A small pile of bait for less active fish.',
                    reason: 'Gives them a small meal without over-feeding them.'
                }, {
                    name: 'Pop-up Corn',
                    technique: 'Use a bright, artificial corn on a short rig.',
                    reason: 'A small, highly visible bait for cruising fish.'
                }, {
                    name: 'Worms',
                    technique: 'Fish a bunch of nightcrawlers on the bottom.',
                    reason: 'The natural scent can be very effective in cooler water.'
                }], //
                colors: ['Shock Pink', 'Carp Yellow', 'White'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Transition Lines',
                    description: 'Carp will travel along predictable routes. Focus on the edges where weeds meet sand, or where a shallow flat drops into deeper water.'
                }, //
                tips: [{
                    title: 'Fish Their Highways',
                    description: 'Carp are creatures of habit. Find their travel routes and set an ambush.'
                }, {
                    title: 'Stay Alert',
                    description: 'Bites can be subtle. Watch your rod tips for any slight movement.'
                }, {
                    title: 'Use Slack Lines',
                    description: 'A tight line can be detected by wary carp. Use a light bobbin or slack line for a more natural presentation.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Pack Bait with Strong Scent',
                    technique: 'Use sweet, fruity, or fishy scents to attract fish.',
                    reason: 'The number one way to get bites in muddy water.',
                    isPrimary: true
                }, {
                    name: 'Large Boilies',
                    technique: 'Use 20mm or larger boilies soaked in attractant.',
                    reason: 'A large, smelly bait is easier for big fish to find.'
                }, {
                    name: 'Dough Ball',
                    technique: 'Use a large, homemade dough ball.',
                    reason: 'A classic bait that leeches a ton of scent into the water.'
                }, {
                    name: 'Method Feeder',
                    technique: 'Recast every 30-45 minutes to refresh the scent trail.',
                    reason: 'Keeps a concentrated pile of scent in your spot.'
                }], //
                colors: ['White', 'Carp Yellow'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Shallow Flats with Inflow',
                    description: 'This is a fantastic time to fish. The muddy water makes carp feel safe, and they will feed recklessly in shallow water.'
                }, //
                tips: [{
                    title: 'The Bite is On!',
                    description: 'These conditions can produce some of the most frantic carp action of the year.'
                }, {
                    title: 'Recast Frequently',
                    description: 'Recasting every 30-45 minutes replenishes the scent trail from your pack bait.'
                }, {
                    title: 'Use a "Bait Rocket" or "Spod"',
                    description: 'These tools allow you to accurately deposit a large amount of bait (chum) at a distance.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Method Feeder with Oily Pack Bait',
                    technique: 'Use a fishmeal or oily pack bait.',
                    reason: 'The oils in the bait disperse well in cold, muddy water.',
                    isPrimary: true
                }, {
                    name: 'Bright Artificial Corn',
                    technique: 'Tip your rig with bright, buoyant corn.',
                    reason: 'A small, visible target that also helps balance your hook.'
                }, {
                    name: 'Bright Pop-up Boilie',
                    technique: 'Use a small but highly scented pop-up.',
                    reason: 'A bright, smelly target that stands out on the bottom.'
                }, {
                    name: 'Cut Bait',
                    technique: 'An unconventional but effective bait for large, predatory carp.',
                    reason: 'The strong, natural scent can attract the biggest fish.'
                }], //
                colors: ['Chartreuse', 'Shock Pink'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Deepest, Slowest River Pools',
                    description: 'Fish will be very concentrated in the deepest, slowest pools available. You have to put the bait right on their nose.'
                }, //
                tips: [{
                    title: 'Find the Deepest Hole',
                    description: 'In a river system, the carp will be stacked in the deepest hole they can find.'
                }, {
                    title: 'Be Patient',
                    description: 'You may only get one or two bites all day, but they are often the largest fish.'
                }, {
                    title: 'Use a Heavy Lead',
                    description: 'You will need a heavy sinker (3-5 oz) to hold your bait in place in any current.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            }
        }
    },
    rainy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Bread',
                    technique: 'Fish a piece of bread on the surface.',
                    reason: 'Rain washes in food and carp will feed on top. It\'s a very exciting way to fish!',
                    isPrimary: true
                }, {
                    name: 'Corn on a Hair Rig',
                    technique: 'A classic that works everywhere, especially in the rain.',
                    reason: 'Simple, effective, and always a good choice.'
                }, {
                    name: 'Zig Rig',
                    technique: 'Fish just a few feet below the surface.',
                    reason: 'Targets fish that are cruising high in the water column looking for washed-in food.'
                }, {
                    name: 'Boilies',
                    technique: 'Fish a brightly colored pop-up boilie.',
                    reason: 'A visible bait for fish that are actively looking for food.'
                }], //
                colors: ['Carp Yellow', 'White'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Shallow Coves & Creek Mouths',
                    description: 'Rain washes food into the system and carp will be there to intercept it. Look for inflows and visible slicks on the surface.'
                }, //
                tips: [{
                    title: 'Look Up!',
                    description: 'Don\'t be afraid to try surface fishing for carp, especially in a light summer rain. It\'s a visual and exciting way to fish.'
                }, {
                    title: 'Chum Little and Often',
                    description: 'When surface fishing, constantly throwing in small handfuls of bread or oats will keep the fish interested.'
                }, {
                    title: 'Stay Safe',
                    description: 'Be aware of lightning and rising water levels.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Boilies',
                    technique: 'Fish on the bottom near current.',
                    reason: 'A durable bait that will hold up in the increased flow.',
                    isPrimary: true
                }, {
                    name: 'Pack Bait',
                    technique: 'Recast often to keep the scent fresh.',
                    reason: 'The rain will wash away your scent trail faster.'
                }, {
                    name: 'Method Feeder',
                    technique: 'Use a heavy feeder to hold in the current.',
                    reason: 'Presents a concentrated pile of bait effectively.'
                }, {
                    name: 'Corn or Boilies on a Hair Rig',
                    technique: 'Use a heavier sinker to hold bottom.',
                    reason: 'A classic presentation that is always effective.'
                }], //
                colors: ['Hi-Vis Orange', 'Carp Yellow'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Current Breaks & Seams',
                    description: 'The increased current will position fish predictably. Find any object that breaks the flow, and the carp will be behind it.'
                }, //
                tips: [{
                    title: 'Find the Current Break',
                    description: 'Any log, rock, or bridge piling can hold a carp looking for a rest and a meal.'
                }, {
                    title: 'Replenish Your Bait',
                    description: 'Recast with fresh pack bait more often than you would on a calm day.'
                }, {
                    title: 'Keep Your Line Out of the Current',
                    description: 'Try to position your rod tips high to keep as much line out of the heavy current as possible.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Pack Bait with Corn',
                    technique: 'Use a very strong-smelling pack bait.',
                    reason: 'This is the number one method in these conditions.',
                    isPrimary: true
                }, {
                    name: 'Dough Ball',
                    technique: 'Use a large, smelly dough ball for maximum scent.',
                    reason: 'An easy-to-make and highly effective alternative.'
                }, {
                    name: 'Method Feeder',
                    technique: 'Recast frequently to build a scent trail.',
                    reason: 'A great way to concentrate scent in a specific spot.'
                }, {
                    name: 'Boilies',
                    technique: 'Use a large, heavily flavored boilie soaked in dip.',
                    reason: 'A durable, high-scent bait for big fish.'
                }], //
                colors: ['White', 'Carp Yellow'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Main River Channels & Storm Drains',
                    description: 'THE BITE IS ON. Rain and muddy water create a feeding frenzy. Fish any area with concentrated current.'
                }, //
                tips: [{
                    title: 'This is The Best Time!',
                    description: 'These are the conditions that serious carp anglers live for. The fishing can be incredible.'
                }, {
                    title: 'Use a Heavy Sinker',
                    description: 'You will need a heavy sinker (3-6 oz) to hold bottom in the strong current.'
                }, {
                    title: 'Use a Rod Pod and Alarms',
                    description: 'A sturdy rod pod is essential to keep your gear secure in the rain and mud.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Method Feeder with Oily Pack Bait',
                    technique: 'Fish on the bottom in slow areas.',
                    reason: 'An oily, fishy scent disperses well in cold, muddy water.',
                    isPrimary: true
                }, {
                    name: 'Large Boilies',
                    technique: 'Soak them in attractant for hours before use.',
                    reason: 'Maximizes the scent trail from a durable bait.'
                }, {
                    name: 'Bright Pop-up Corn',
                    technique: 'Use a small, bright bait that stands out.',
                    reason: 'A visual target for fish in low-light conditions.'
                }, {
                    name: 'Cut Bait',
                    technique: 'Fish a piece of oily baitfish on the bottom.',
                    reason: 'The natural oils create a potent scent trail.'
                }], //
                colors: ['White', 'Carp Yellow'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Deep, Slow Eddies Out of the Current',
                    description: 'Carp will get out of the main muddy flow and rest in deep, slow-moving eddies. Find these and you will find the fish.'
                }, //
                tips: [{
                    title: 'Find the Slowest Water',
                    description: 'Look for any area where the current is noticeably slower than the main river.'
                }, {
                    title: 'Be Patient',
                    description: 'The bite may be slow, but the fish will be very concentrated in these areas.'
                }, {
                    title: 'Fresh Bait is Crucial',
                    description: 'In cold, muddy water, the freshest, oiliest bait will work best.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            }
        }
    },
    windy: {
        clear: {
            warm: {
                lures: [{
                    name: 'Corn or Boilies on a Hair Rig',
                    technique: 'Fish on the windy side of the lake.',
                    reason: 'The wind pushes food and gets carp feeding aggressively.',
                    isPrimary: true
                }, {
                    name: 'Bread',
                    technique: 'Fish a piece of bread on the surface.',
                    reason: 'The wind creates "scum lines" that concentrate food on the surface.'
                }, {
                    name: 'Method Feeder',
                    technique: 'Use a heavy feeder to cast into the wind.',
                    reason: 'Effectively presents a pile of bait on the windy bank.'
                }, {
                    name: 'Pack Bait',
                    technique: 'Use a large, heavy sinker to hold bottom.',
                    reason: 'Creates a large, attractive cloud of bait in the chop.'
                }], //
                colors: ['Carp Yellow', 'White'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Wind-Blown Shorelines & Points',
                    description: 'Wind pushes all the natural food to the downwind shore, and the carp will be there in large numbers to feed. The "carp chop" is a good thing.'
                }, //
                tips: [{
                    title: 'Follow the Wind',
                    description: 'The single most important rule in carp fishing. Find the bank the wind is blowing into.'
                }, {
                    title: 'Use Back-Leads',
                    description: 'These small weights pin your line to the bottom, preventing the wind and waves from moving it and creating false bites.'
                }, {
                    title: 'Watch for "Liners"',
                    description: 'If you see your line twitching, it means carp are in your area and bumping your line. Be ready!'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Bright Pop-up Boilie',
                    technique: 'Fish a single, bright bait in the chop.',
                    reason: 'A highly visible bait is easier to find in the churned up water.',
                    isPrimary: true
                }, {
                    name: 'Method Feeder',
                    technique: 'The heavy weight helps you cast into the wind and holds bottom.',
                    reason: 'An efficient way to present bait in tough conditions.'
                }, {
                    name: 'Pop-up Corn',
                    technique: 'Use a bright, buoyant piece of corn.',
                    reason: 'A small, visible target for less active fish.'
                }, {
                    name: 'Worms',
                    technique: 'Fish a large bunch of worms on the bottom.',
                    reason: 'The scent and natural movement is a great attractant.'
                }], //
                colors: ['Shock Pink', 'Carp Yellow', 'White'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Windy Side of Deeper Structure',
                    description: 'Carp will hold on the windy side of points and drop-offs, waiting for food to be pushed to them by the wind-driven current.'
                }, //
                tips: [{
                    title: 'Heavier Leads are Key',
                    description: 'Use a sinker heavy enough (3-4 oz) to hold your bait firmly in place despite the wind and waves.'
                }, {
                    title: 'Braided Line Helps',
                    description: 'Thin braid cuts through the wind better than thick monofilament, allowing for better bite detection.'
                }, {
                    title: 'Look for the Mudline',
                    description: 'The wind will often churn up the bottom, creating a distinct edge of muddy water that carp love to feed in.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            }
        },
        muddy: {
            warm: {
                lures: [{
                    name: 'Pack Bait with Strong Flavor',
                    technique: 'Use a large amount of bait.',
                    reason: 'The wind and mud create a feeding frenzy. Give them a big target.',
                    isPrimary: true
                }, {
                    name: 'Large Dough Ball',
                    technique: 'Use a durable dough ball that can withstand the waves.',
                    reason: 'A big, smelly, and resilient bait.'
                }, {
                    name: 'Method Feeder',
                    technique: 'Use a heavy feeder and recast often.',
                    reason: 'Concentrates a powerful scent trail on the windy bank.'
                }, {
                    name: 'Boilies',
                    technique: 'Use a large, highly-scented boilie.',
                    reason: 'A durable bait that stands up to the elements and nuisance fish.'
                }], //
                colors: ['White', 'Carp Yellow'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Shallow, Windy, Muddy Flats',
                    description: 'This is the perfect storm for huge numbers of big carp. Find a shallow flat (2-8 ft) getting hit hard by the wind.'
                }, //
                tips: [{
                    title: 'The Perfect Storm',
                    description: 'These conditions can produce the best carp fishing of the entire year. Don\'t be afraid of the weather.'
                }, {
                    title: 'Pin Your Gear Down',
                    description: 'The wind will be strong. Make sure your rod pod and other gear are securely staked down.'
                }, {
                    title: 'Fish All Your Rods on One Spot',
                    description: 'Concentrate all your bait and rigs in one small area to create a "dinner table" the carp can\'t resist.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            },
            cool: {
                lures: [{
                    name: 'Method Feeder',
                    technique: 'Use a heavy feeder to hold bottom.',
                    reason: 'The most effective presentation for these tough conditions.',
                    isPrimary: true
                }, {
                    name: 'Bright Pop-up Corn',
                    technique: 'A small, bright bait that is easy for them to see and eat.',
                    reason: 'A great choice for lethargic fish.'
                }, {
                    name: 'Bright Pop-up Boilie',
                    technique: 'A single, high-attract bait for tough bites.',
                    reason: 'A visual and scented target that stands out.'
                }, {
                    name: 'Pack Bait',
                    technique: 'Use a heavy sinker and a strong-smelling pack bait.',
                    reason: 'The scent trail is key in cold, muddy water.'
                }], //
                colors: ['Chartreuse', 'Shock Pink'], //
                gear: gearMap.carp, //
                location: {
                    title: 'Calm Pockets Near Windy Areas',
                    description: 'Carp will often tuck into a calm cove or the quiet side of a point to get a break from the wind, but stay close to the food.'
                }, //
                tips: [{
                    title: 'Find the Calm in the Storm',
                    description: 'Look for small pockets of calm water right next to the main windy areas. This is a fish magnet.'
                }, {
                    title: 'Go Loud and Slow',
                    description: 'If using artificials, retrieve a loud rattling lure as slowly as possible to give fish a chance to find it.'
                }, {
                    title: 'Be Patient',
                    description: 'The bite will be tough, but the fish you catch could be a trophy.'
                }, {
                    title: 'Wait for the "Screamer"',
                    description: 'Carp often take the bait and run. Don\'t set the hook until your reel starts screaming!'
                }] //
            }
        }
    }
}


            };