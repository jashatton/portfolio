import { type Quest } from '@/app/sdvt/types'

const ALL_QUESTS = [
  {
    id: 1,
    name: 'Crafts Room',
    reward: 'Bridge Repair',
    achievements: [
      {
        id: 1,
        name: 'Spring Foraging',
        reward: 'Spring Seeds',
        items: [
          { id: 1, name: 'Wild Horseradish' },
          { id: 2, name: 'Daffodil' },
          { id: 3, name: 'Leek' },
          { id: 4, name: 'Dandelion' },
        ],
      },
      {
        id: 2,
        name: 'Summer Foraging',
        reward: 'Summer Seeds',
        items: [
          { id: 5, name: 'Grape' },
          { id: 6, name: 'Spice Berry' },
          { id: 7, name: 'Sweet Pea' },
        ],
      },
      {
        id: 3,
        name: 'Fall Foraging',
        reward: 'Fall Seeds',
        items: [
          { id: 8, name: 'Common Mushroom' },
          { id: 9, name: 'Wild Plum' },
          { id: 10, name: 'Hazelnut' },
          { id: 11, name: 'Blackberry' },
        ],
      },
      {
        id: 4,
        name: 'Winter Foraging',
        reward: 'Winter Seeds',
        items: [
          { id: 12, name: 'Winter Root' },
          { id: 13, name: 'Crystal Fruit' },
          { id: 14, name: 'Snow Yam' },
          { id: 15, name: 'Crocus' },
        ],
      },
      {
        id: 5,
        name: 'Construction Bundle',
        reward: 'Charcoal Kiln',
        items: [
          { id: 36, name: 'Wood', quantity: 99 },
          { id: 37, name: 'Wood', quantity: 99 },
          { id: 38, name: 'Stone', quantity: 99 },
          { id: 39, name: 'Hardwood', quantity: 10 },
        ],
      },
      {
        id: 6,
        name: 'Exotic Foraging',
        reward: 'Autumn\'s Bounty',
        items: [
          { id: 32, name: 'Coconut' },
          { id: 33, name: 'Cactus Fruit' },
          { id: 34, name: 'Cave Carrot' },
          { id: 35, name: 'Red Mushroom' },
          { id: 36, name: 'Purple Mushroom' },
          { id: 37, name: 'Maple Syrup' },
          { id: 38, name: 'Oak Resin' },
          { id: 39, name: 'Pine Tar' },
          { id: 40, name: 'Morel' },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Pantry',
    reward: 'Greenhouse',
    achievements: [
      {
        id: 5,
        name: 'Spring Crops',
        reward: 'Speed-Gro',
        items: [
          { id: 16, name: 'Parsnip' },
          { id: 17, name: 'Green Bean' },
          { id: 18, name: 'Cauliflower' },
          { id: 19, name: 'Potato' },
        ],
      },
      {
        id: 6,
        name: 'Summer Crops',
        reward: 'Quality Sprinkler',
        items: [
          { id: 20, name: 'Tomato' },
          { id: 21, name: 'Hot Pepper' },
          { id: 22, name: 'Blueberry' },
          { id: 23, name: 'Melon' },
        ],
      },
      {
        id: 7,
        name: 'Fall Crops',
        reward: 'Bee House',
        items: [
          { id: 24, name: 'Corn' },
          { id: 25, name: 'Eggplant' },
          { id: 26, name: 'Pumpkin' },
          { id: 27, name: 'Yam' },
        ],
      },
      {
        id: 8,
        name: 'Quality Crops',
        reward: 'Preserves Jar',
        items: [
          { id: 28, name: 'Parsnip' },
          { id: 29, name: 'Melon' },
          { id: 30, name: 'Pumpkin' },
          { id: 31, name: 'Corn' },
        ],
      },
      {
        id: 9,
        name: 'Animal Bundle',
        reward: 'Cheese Press',
        items: [
          { id: 41, name: 'Large Milk' },
          { id: 42, name: 'Large Egg' },
          { id: 43, name: 'Large Egg (Brown)' },
          { id: 45, name: 'Large Goat Milk' },
          { id: 46, name: 'Wool' },
          { id: 47, name: 'Duck Egg' },
        ],
      },
      {
        id: 10,
        name: 'Artisan Bundle',
        reward: 'Keg',
        items: [
          { id: 48, name: 'Truffle Oil' },
          { id: 49, name: 'Cloth' },
          { id: 50, name: 'Goat Cheese' },
          { id: 51, name: 'Cheese' },
          { id: 52, name: 'Honey' },
          { id: 53, name: 'Jelly' },
          { id: 54, name: 'Apple' },
          { id: 55, name: 'Apricot' },
          { id: 56, name: 'Orange' },
          { id: 57, name: 'Peach' },
          { id: 58, name: 'Pomegranate' },
          { id: 59, name: 'Cherry' },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Fish Tank',
    reward: 'Glittering Boulder Removed',
    achievements: [
      {
        id: 11, name: 'River Fish Bundle',
        reward: 'Bait',
        items: [
          { id: 60, name: 'Sunfish' },
          { id: 61, name: 'Catfish' },
          { id: 62, name: 'Shad' },
          { id: 63, name: 'Tiger Trout' },
        ],
      },
    ],
  },
]

export function getAllQuests(): Quest[] {
  const storedQuests = localStorage.getItem('sdvt:quests')


  if(!storedQuests) {
    localStorage.setItem('sdvt:quests', JSON.stringify(ALL_QUESTS))
    return ALL_QUESTS
  }

  return JSON.parse(storedQuests) as Quest[]
}
