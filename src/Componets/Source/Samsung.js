import A34 from '../Assets/Samsungs/A34.jpeg'
import A54 from '../Assets/Samsungs/A54.jpeg'
import Galaxy from '../Assets/Samsungs/GalaxyS23ULTRA.jpeg'
import S24ULTRA from '../Assets/Samsungs/S24ULTRA.jpeg'
import A345G from '../Assets/Samsungs/SamsungGalaxyA345G.jpg'
import A24 from '../Assets/Samsungs/SamsungGalaxyA24.jpg'
import F14 from '../Assets/Samsungs/SamsungGalaxyF14.jpg'
import F34 from '../Assets/Samsungs/SamsungGalaxyF345G.jpg'
import M14 from '../Assets/Samsungs/SamsungGalaxyM145G.jpg'
import M34 from '../Assets/Samsungs/SamsungGalaxyM34.jpg'
import S21FE from '../Assets/Samsungs/SamsungGalaxyS21FE.jpg'
import S22 from '../Assets/Samsungs/SamsungGalaxyS225G.jpg'
import S22ULTRA from '../Assets/Samsungs/SamsungGalaxyS22Ultra5G.jpg'
import S23 from '../Assets/Samsungs/SamsungGalaxyS23.jpg'
import S23Plus from '../Assets/Samsungs/SamsungGalaxyS23PLUS.jpg'
import S23ULTRA from '../Assets/Samsungs/SamsungGalaxyS23Ultra5G.jpg'
import S24PLUS from '../Assets/Samsungs/SamsungGalaxyS24Plus5G.jpg'
import Watch2 from '../Assets/Samsungs/SamsungGalaxyWatch-5PRO.jpg'
import Zfold5 from '../Assets/Samsungs/SamsungGalaxyZFold5.jpg'
import ZFOLD from '../Assets/Samsungs/ZFOLD.jpeg'

import A05 from '../Assets/Samsungs/GalaxyA05.jpg'
let Samsung_Products=[
    {
        id:1,
        name:"Samsung Galaxy A05",
        image:A05,
        new_price:"14,500",
        old_price:"24,200",
        details:"128GB/4GB NEW!!",
    },
    {
        id:2,
        name:"Samsung Z Fold 4 256/12GB",
        image:ZFOLD,
        new_price:"110,000",
        old_price:"125,000",
        details:"512GB/8GB NEW!!!",
    },
    {
        id:23,
        name:"Samsung Z Fold 2",
        image:"https://th.bing.com/th/id/OIP.t-TLD__oyPj2hgOhbc3pTwAAAA?w=177&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        new_price:"60,000",
        old_price:"75,000",
        details:"512GB/8GB NEW!!!",
    },
    {
        id:3,
        name:"Samsung Z Fold 5 256/8GB",
        image:Zfold5,
        new_price:"77,000",
        old_price:"85,000",
        details:"512GB/8GB",
    },
    {
        id:24,
        name:"Samsung Z Fold 5 512/12GB",
        image:"https://th.bing.com/th/id/OIP.NQDpsmwUl10eVE7UZVfR2gHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.5&pid=1.7",
        new_price:"144,000",
        old_price:"154,000",
        details:"512GB/8GB",
    },
    {
        id:25,
        name:"Samsung Z Fold 6 512/12GB",
        image:"data:image/jpeg;base64,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",
        new_price:"190,000",
        old_price:"200,000",
        details:"512GB/8GB",
    },
    {
        id:4,
        name:"Samsung Galaxy Watch",
        image:Watch2,
        new_price:"12,000",
        old_price:"25,000",
        details:"Smart bluetooth link",
    },

    {
        id:5,
        name:"Samsung Galaxy S24 Plus",
        image:S24PLUS,
        new_price:"108,000",
        old_price:"115,000",
        details:"Really good look in multiple colors",
    },
    {
        id:6,
        name:"Samsung Galaxy S23 Ultra 256GB",
        image:S23ULTRA,
        new_price:975000,
        old_price:105000,
        details:"256GB/8GB",
    },
    {
        id:7,
        name:"Samsung Galaxy S23 Plus",
        image:S23Plus,
        new_price:90000,
        old_price:105000,
        details:"256GB/8GB",
    },
    {
        id:8,
        name:"Samsung Galaxy S23",
        image:S23,
        new_price:95000,
        old_price:100000,
        details:"128GB/4GB",
    },
    {
        id:9,
        name:"Samsung Galaxy S23 Ultra 5G",
        image:S22ULTRA,
        new_price:"120,000",
        old_price:"135,000",
        details:"256GB/8GB",
    },
    {
        id:10,
        name:"Samsung Galaxy S22 5G",
        image:S22,
        new_price:"99,000",
        old_price:"109,000",
        details:"128GB/8GB",
    },
    {
        id:11,
        name:"Samsung Galaxy S21 FE",
        image:S21FE,
        new_price:"79,000",
        old_price:"85,000",
        details:"128GB/4GB",
    },
    {
        id:12,
        name:"Samsung Galaxy M34 ",
        image:M34,
        new_price:"69,000",
        old_price:"75,000",
        details:"128GB/4GB",
    },
    {
        id:13,
        name:"Samsung Galaxy M14",
        image:M14,
        new_price:"68,000",
        old_price:"75,000",
        details:"128GB/8GB",
    },
    {
        id:14,
        name:"Samsung Galaxy F34 5G",
        image:F34,
        new_price:"65,000",
        old_price:"75,000",
        details:"128GB/4GB",
    },
    {
        id:15,
        name:"Samsung Galaxy F14",
        image:F14,
        new_price:"63,000",
        old_price:"75,000",
        details:"128GB/8GB",
    },
    {
        id:16,
        name:"Samsung Galaxy A24",
        image:A24,
        new_price:"21,700",
        old_price:"35,000",
        details:"128GB/6GB",
    },
    {
        id:17,
        name:"Samsung Galaxy A34 5G",
        image:A345G,
        new_price:"20,700",
        old_price:"32,000",
        details:"128GB/6GB",
    },
    {
        id:18,
        name:"Samsung Galaxy S24 Ultra",
        image:S24ULTRA,
        new_price:"119,000",
        old_price:"125,000",
        details:"256GB/8GB",
    },
    {
        id:19,
        name:"Samsung Galaxy S23 Ultra",
        image:S23ULTRA,
        new_price:"108,000",
        old_price:"115,000",
        details:"256GB/8GB",
    },
    {
        id:20,
        name:"Samsung Galaxy S23 Ultra",
        image:Galaxy,
        new_price:"97,500",
        old_price:"107,000",
        details:"256GB/8GB",
    },
    {
        id:21,
        name:"Samsung A54",
        image:A54,
        new_price:"38,500",
        old_price:"48,000",
        details:"254GB/8GB",
    },
    {
        id:22,
        name:"Samsung A34",
        image:A34,
        new_price:"29,900",
        old_price:"35,000",
        details:"128GB/6GB",
    },
];

export default Samsung_Products;
