import { type Quest } from '@/app/sdvt/types'

const ALL_QUESTS: Quest[] = [
  {
    id: 1,
    name: 'Crafts Room',
    reward: 'Bridge Repair',
    subQuests: [
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
    subQuests: [
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
          { id: 28, name: 'Parsnip', quality: 'gold' },
          { id: 29, name: 'Melon', quality: 'gold' },
          { id: 30, name: 'Pumpkin', quality: 'gold' },
          { id: 31, name: 'Corn', quality: 'gold' },
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
    subQuests: [
      {
        id: 11,
        name: 'River Fish Bundle',
        reward: 'Deluxe Bait',
        items: [
          { id: 60, name: 'Sunfish' },
          { id: 61, name: 'Catfish' },
          { id: 62, name: 'Shad' },
          { id: 63, name: 'Tiger Trout' },
        ],
      },
      {
        id: 12,
        name: 'Lake Fish Bundle',
        reward: 'Dressed Spinner',
        items: [
          { id: 64, name: 'Largemouth Bass' },
          { id: 65, name: 'Carp' },
          { id: 66, name: 'Bullhead' },
          { id: 67, name: 'Sturgeon' },
        ],
      },
      {
        id: 13,
        name: 'Ocean Fish Bundle',
        reward: 'Warp Totem: Beach',
        items: [
          { id: 68, name: 'Sardine' },
          { id: 69, name: 'Tuna' },
          { id: 70, name: 'Red Snapper' },
          { id: 71, name: 'Tilapia' },
        ],
      },
      {
        id: 14,
        name: 'Night Fishing Bundle',
        reward: 'Small Glow Ring',
        items: [
          { id: 72, name: 'Walleye' },
          { id: 73, name: 'Bream' },
          { id: 74, name: 'Eel' },
        ],
      },
      {
        id: 15,
        name: 'Specialty Fish Bundle',
        reward: 'Dish O\' The Sea',
        items: [
          { id: 75, name: 'Pufferfish' },
          { id: 76, name: 'Ghostfish' },
          { id: 77, name: 'Sandfish' },
          { id: 78, name: 'Woodskip' },
        ],
      },
      {
        id: 16,
        name: 'Crab Pot Bundle',
        reward: 'Crab Pot',
        items: [
          { id: 79, name: 'Lobster' },
          { id: 80, name: 'Crayfish' },
          { id: 81, name: 'Crab' },
          { id: 82, name: 'Cockle' },
          { id: 83, name: 'Mussel' },
          { id: 84, name: 'Shrimp' },
          { id: 85, name: 'Snail' },
          { id: 86, name: 'Periwinkle' },
          { id: 87, name: 'Oyster' },
          { id: 88, name: 'Clam' },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Boiler Room',
    reward: 'Minecarts Repaired',
    subQuests: [
      {
        id: 12,
        name: 'Blacksmith\'s Bundle',
        reward: 'Furnace',
        items: [
          { id: 64, name: 'Copper Bar', quantity: 5 },
          { id: 65, name: 'Iron Bar', quantity: 5 },
          { id: 66, name: 'Gold Bar', quantity: 5 },
        ],
      },
      {
        id: 13,
        name: 'Geologist\'s Bundle',
        reward: 'Ore',
        items: [
          { id: 67, name: 'Quartz' },
          { id: 68, name: 'Earth Crystal' },
          { id: 69, name: 'Frozen Tear' },
          { id: 70, name: 'Fire Quartz' },
        ],
      },
      {
        id: 14,
        name: 'Adventurer\'s Bundle',
        reward: 'Small Magnet Ring',
        items: [
          { id: 71, name: 'Slime', quantity: 99 },
          { id: 72, name: 'Bat Wing', quantity: 10 },
          { id: 73, name: 'Solar Essence' },
          { id: 74, name: 'Void Essence' },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Bulletin Board',
    reward: 'Friendship',
    subQuests: [
      {
        id: 17,
        name: 'Chef\'s Bundle',
        reward: 'Pink Cake',
        items: [
          { id: 89, name: 'Maple Syrup' },
          { id: 90, name: 'Fiddlehead Fern' },
          { id: 91, name: 'Truffle' },
          { id: 92, name: 'Poppy' },
          { id: 93, name: 'Maki Roll' },
          { id: 94, name: 'Fried Egg' },
        ],
      },
      {
        id: 18,
        name: 'Dye Bundle',
        reward: 'Seed Maker',
        items: [
          { id: 93, name: 'Red Mushroom' },
          { id: 94, name: 'Sea Urchin' },
          { id: 95, name: 'Sunflower' },
          { id: 96, name: 'Duck Feather' },
          { id: 97, name: 'Aquamarine' },
          { id: 98, name: 'Red Cabbage' },
        ],
      },
      {
        id: 19,
        name: 'Field Research Bundle',
        reward: 'Recycling Machine',
        items: [
          { id: 97, name: 'Purple Mushroom' },
          { id: 98, name: 'Nautilus Shell' },
          { id: 99, name: 'Chub' },
          { id: 100, name: 'Frozen Geode' },
        ],
      },
      {
        id: 20,
        name: 'Fodder Bundle',
        reward: 'Heater',
        items: [
          { id: 101, name: 'Wheat', quantity: 10 },
          { id: 102, name: 'Hay', quantity: 10 },
          { id: 103, name: 'Apple', quantity: 3 },
        ],
      },
      {
        id: 21,
        name: 'Enchanter\'s Bundle',
        reward: 'Gold Bar',
        items: [
          { id: 104, name: 'Oak Resin' },
          { id: 105, name: 'Wine' },
          { id: 106, name: 'Rabbit\'s Foot' },
          { id: 107, name: 'Pomegranate' },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'Vault',
    reward: 'Bus Repair',
    subQuests: [
      {
        id: 22,
        name: '2,500 Bundle',
        reward: 'Chocolate Cake',
        items: [
          { id: 108, name: '2,500g' },
        ],
      },
      {
        id: 23,
        name: '5,000 Bundle',
        reward: 'Quality Fertilizer',
        items: [
          { id: 111, name: '5,000g' },
        ],
      },
      {
        id: 24,
        name: '10,000 Bundle',
        reward: 'Lightning Rod',
        items: [
          { id: 115, name: '10,000g' },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Abandoned JojaMart',
    reward: 'Movie Theater',
    subQuests: [
      {
        id: 25,
        name: 'The Missing Bundle',
        reward: 'Movie Theater',
        items: [
          { id: 116, name: 'Wine', quality: 'silver' },
          { id: 117, name: 'Dinosaur Mayonnaise' },
          { id: 118, name: 'Prismatic Shard' },
          { id: 119, name: 'Ancient Fruit', quality: 'gold', quantity: 5 },
          { id: 120, name: 'Void Salmon', quality: 'gold' },
          { id: 121, name: 'Caviar' },
        ],
      },
    ],
  },
]

export function getAllQuests(): Quest[] {
  const storedQuests = localStorage.getItem('sdvt:quests')


  if (!storedQuests) {
    localStorage.setItem('sdvt:quests', JSON.stringify(ALL_QUESTS))
    return ALL_QUESTS
  }

  return JSON.parse(storedQuests) as Quest[]
}
