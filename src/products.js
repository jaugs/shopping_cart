
import driverpic from './images/driver.jpg'
import ironspic from './images/ironset.jpg'
import sandpic from './images/sandwedge.jpg'
import lobpic from './images/lobwedge.jpg'
import glove from './images/glove.jpg'
import golfbag from './images/golfbag.jpg'
import golfleatherbag from './images/golfleatherbag.jpg'
import golfstandbag from './images/golfstandbag.jpg'
import pallyball from './images/pallyball.jpg'
import putter from './images/putter.jpg'
import rangefinder from './images/rangefinder.png'
import trainer from './images/trainer.jpg'
import z1ball from './images/z1ball.jpg'
import z3ball from './images/z3ball.jpg'
import z5ball from './images/z5ball.jpg'
import tees from './images/tees.jpg'



const products = [
    {name: 'Driver',
     category: 'Clubs',
     price: '199',
     description: 'New TRS Mach 3 Epic Distance Driver with 10deg Loft, Tungsten Liner',
     id: 100,
     quantity: 0,
     image: driverpic
    },
    {name: 'Irons',
     category: 'Clubs',
     price: '899',
     description: 'New 4-PW Iron Set, Shiny Chrome Finish, Blue Precision Grips, Standard Shaft Length and Flex',
     id: 101,
     quantity: 0,
     image: ironspic
    },
    {name: 'Sand Wedge',
     category: 'Clubs',
     price: '99',
     description: 'Sand Wedge 56 Degree Wedge, Chrome Satin Max Control Milled P-Grind',
     id: 102,
     quantity: 0,
     image: sandpic
    },
    {name: 'Putter',
     category: 'Clubs',
     price: '199',
     description: '10EQP Model, Oversized Grip',
     id: 103,
     quantity: 0,
     image: putter
    },
    {name: 'Lob Wedge',
     category: 'Clubs',
     price: '159',
     description: 'Lob Wedge 60 Degree Wedge, Black Satin Max Height Milled S-Grind',
     id: 104,
     quantity: 0,
     image: lobpic
    },
    {name: 'Star Bag',
     category: 'Bags',
     price: '189',
     description: 'Leather Like Finish, 14-Way Divider, Velvet-Lined Valuables Pocket.',
     id: 105,
     quantity: 0,
     image: golfleatherbag
    },
    {name: 'Galaxy Bag',
     category: 'Bags',
     price: '139',
     description: 'Extra-Light Stand Bag, 7-Way Divider with Tru-Feel Suspension Harness',
     id: 106,
     quantity: 0,
     image: golfstandbag
    },
    {name: 'Pro Z1 Balls',
     category: 'Balls',
     price: '30',
     description: '36 pack, Max Distance',
     id: 107,
     quantity: 0,
     image: z1ball
    },
    {name: 'Z3 Soft Balls',
    category: 'Balls',
    price: '20',
    description: '36 pack, Max Forgiveness',
    id: 108,
     quantity: 0,
     image: z3ball
   },
   {name: 'Z5 SuperUltraSoft Balls',
    category: 'Balls',
    price: '25',
    description: '36 pack, Max Control',
    id: 109,
     quantity: 0,
     image: z5ball
   },
   {name: 'Pallylist Maxim Balls',
    category: 'Balls',
    price: '50',
    description: '36 pack, Players Choice',
    id: 110,
     quantity: 0,
     image: pallyball
   },
   {name: 'Pallylist Players Bag',
    category: 'Bags',
    price: '155',
    description: 'Deep, Ample Storage Cart Bag, 14-Way Divider, CrossBody FlexFit Carry Rig',
    id: 111,
     quantity: 0,
     image: golfbag
   },
   {name: 'TMJ Ultra Rangefinder',
    category: 'Accessories',
    price: '255',
    description: '20x Zoom, HyperAccurate Rating',
    id: 112,
     quantity: 0,
     image: rangefinder
   },
   {name: 'Zemolist Plastic Tees',
    category: 'Accessories',
    price: '15',
    description: 'Pack of 200, various sizes',
    id: 113,
     quantity: 0,
     image: tees
   },
   {name: 'Pallylist Trainer',
    category: 'Accessories',
    price: '30',
    description: 'Golf Swing Trainer',
    id: 114,
     quantity: 0,
     image: trainer
   },
   {name: 'Wolframade Golf Gloves',
    category: 'Accessories',
    price: '40',
    description: 'Set of 2, Synthetic Leather, RainProof Tech, One Size',
    id: 115,
     quantity: 0,
     image: glove
   },
]


// function getProducts() {
//     return products
// }
export default products;
