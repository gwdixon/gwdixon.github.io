export default {
    "Concentration": {category: "Fundamentals", maxXp: 100, effect: {type: "all_skill_xp", value: 0.01, },
                      requirement: [],
                      tooltip: "Improve your learning speed through practising intense concentration activities."},
    "Productivity":  {category: "Fundamentals", maxXp: 100, effect: {type: "all_job_xp",   value: 0.01, },
                      requirement: [{skill: "Concentration", level: 5}], 
                      tooltip: "Learn to procrastinate less at work and receive more job experience per day." }, 
    "Bargaining":    {category: "Fundamentals", maxXp: 100, effect: {type: "expense",   value: 0.01, multiplier: "inverse"},
                      requirement: [{skill: "Concentration", level: 20}], 
                      tooltip: "Study the tricks of the trade and persuasive skills to lower any type of expense." },
    "Meditation":    {category: "Fundamentals", maxXp: 100, effect: {type: "happiness", value: 0.01, },
                      requirement: [{skill: "Concentration", level: 30}, {skill: "Productivity", level: 20}],
                      tooltip: "Fill your mind with peace and tranquility to tap into greater happiness from within." }, 
    
    "Strength":             {category: "Combat", maxXp: 100, effect: {type: "category_pay", value: 0.01, category: "Military"},
                             requirement: [],
                             tooltip: "Condition your body and strength through harsh training. Stronger individuals are paid more in the military."},
    "Battle tactics":       {category: "Combat", maxXp: 100, effect: {type: "category_xp",  value: 0.01, category: "Military"},
                             requirement: [{skill: "Concentration", level: 20}],
                             tooltip: "Create and revise battle strategies, improving experience gained in the military."},
    "Muscle memory":        {category: "Combat", maxXp: 100, effect: {type: "skill_xp",     value: 0.01, skill: "Strength"},
                             requirement: [{skill: "Concentration", level: 30}, {skill: "Strength", level: 30}],
                             tooltip: "Strengthen your neurons through habit and repetition, improving strength gains throughout the body."},
    "Aura manipulation":    {category: "Combat", maxXp: 100, effect: {type: "skill_xp",     value: 0.01, skill: "Mana control"},
                             requirement: [{skill: "Strength", level: 200}, {skill: "Mana control", level: 100}],
                             tooltip: "Imbue your body with mana, improving your aura and the use of mana for any other defensive or offensive purpose."},


    "Mana control":      {category: "Magic", maxXp: 100, effect: {type: "category_xp", value: 0.01, category: "Arcane"},
                          requirement: [{skill: "Concentration", level: 200}, {skill: "Meditation", level: 200}], 
                          tooltip: "Strengthen your mana channels throughout your body, aiding you in becoming a more powerful magical user."},
    "Immortality":       {category: "Magic", maxXp: 100, effect: {type: "lifespan",     value: 0.33, multiplier: "log", },
                          requirement: [{job: "Apprentice mage", level: 10}],
                          tooltip: "Lengthen your lifespan through the means of magic. However, is this truly the immortality you have tried seeking for...?"},
    "Time warping":      {category: "Magic", maxXp: 100, effect: {type: "gamespeed",    value: 0.13, multiplier: "log", },
                          requirement: [],
                          tooltip: "Bend space and time through forbidden techniques, resulting in a faster gamespeed.",},
    "Ritual casting":    {category: "Magic", maxXp: 100, effect: {type: "category_pay", value: 0.01, category: "Arcane"},
                          requirement: [{job: "Wizard", level: 10}], 
                          tooltip: "Amplify and speed up the incantation of your ritual, improving the result and the money gain of them."},
    "Super immortality": {category: "Magic", maxXp: 100, effect: {type: "lifespan",     value: 0.01, },
                          requirement: [{job: "Chairman", level: 10}],
                          tooltip: "Through harnessing ancient, forbidden techniques, lengthen your lifespan drastically beyond comprehension."},

    "Dark influence":   {category: "Dark magic", maxXp: 100, effect: {type: "all_xp",      value: 0.01, },
                         requirement: [{rebirthEvil: 1}],
                         tooltip: "Encompass yourself with formidable power bestowed upon you by evil, allowing you to pick up and absorb any job or skill with ease."},
    "Evil control":     {category: "Dark magic", maxXp: 100, effect: {type: "evil",        value: 0.01, },
                         requirement: [{rebirthEvil: 1}],
                         tooltip: "Tame the raging and growing evil within you, improving evil gain in-between rebirths."},
    "Intimidation":     {category: "Dark magic", maxXp: 100, effect: {type: "expense",     value: 0.01, multiplier: "inverse"},
                         requirement: [{mutation: "Evil soul", level: 25}],
                         tooltip: "Learn to emit a devilish aura which strikes extreme fear into other merchants, forcing them to give you heavy discounts."},
    "Demon training":   {category: "Dark magic", maxXp: 100, effect: {type: "all_xp",      value: 0.01, },
                         requirement: [{mutation: "Evil soul", level: 50}, {mutation: "Demon Body", level: 50}],
                         tooltip: "A mere human body is too feeble and weak to withstand evil. Train with forbidden methods to slowly manifest into a demon, capable of absorbing knowledge rapidly."},
    "Blood meditation": {category: "Dark magic", maxXp: 100, effect: {type: "evil",        value: 0.01, },
                         requirement: [{mutation: "Evil soul", level: 75}, {mutation: "Demon Body", level: 50}, {mutation: "Dark Mana", level: 25}],
                         tooltip: "Grow and culture the evil within you through the sacrifise of other living beings, drastically increasing evil gain.",},
    "Demon's wealth":   {category: "Dark magic", maxXp: 100, effect: {type: "all_job_pay", value: 0.002, },
                         requirement: [{mutation: "Evil soul", level: 100}, {mutation: "Demon Body", level: 50}, {mutation: "Dark Mana", level: 75}],
                         tooltip: "Through the means of dark magic, multiply the raw matter of the coins you receive from your job."},
}