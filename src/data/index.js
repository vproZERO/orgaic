import Stars from "../assets/icon/stars.svg";
import bannerBgImg from "../assets/img/banner-bg.png";
import bannerBgImg2 from "../assets/img/banner-bg2.png";

import productImg from "../assets/img/product.png";
import productImg2 from "../assets/img/product2.png";
import productImg3 from "../assets/img/product3.png";
import productImg4 from "../assets/img/product4.png";
import productImg5 from "../assets/img/product5.png";
import productImg6 from "../assets/img/product6.png";
import productImg7 from "../assets/img/product7.png";
import productImg8 from "../assets/img/product8.png";
import productImg9 from "../assets/img/product9.png";
import productImg10 from "../assets/img/product10.png";
import productImg11 from "../assets/img/product11.png";
import productImg12 from "../assets/img/product12.png";

import blogImg from '../assets/img/blog.png'
import blogImg2 from '../assets/img/blog2.png'

import aboutOffetImg from '../assets/img/about-offet.png'
import aboutOffetImg2 from '../assets/img/about-offet2.png'
import aboutOffetImg3 from '../assets/img/about-offet3.png'
import aboutOffetImg4 from '../assets/img/about-offet4.png'

import aboutUserImg from '../assets/img/about-user.png'
import aboutUserImg2 from '../assets/img/about-user2.png'
import aboutUserImg3 from '../assets/img/about-user3.png'

import AboutFacebook from "../assets/icon/about-facebook.svg";
import AboutInstagram from "../assets/icon/about-instagram.svg";
import AboutTwitter from "../assets/icon/about-twitter.svg";



export const aboutUserData = [
    {
        id:1,
        img: aboutUserImg,
        name: 'Giovani Bacardo',
        category: 'Farmer',
        facebook: AboutFacebook,
        twitter: AboutTwitter
    },
    {
        id:2,
        img: aboutUserImg2,
        name: 'Marianne Loreno',
        category: 'Designer',
        instagram: AboutInstagram,
        facebook: AboutFacebook,
        twitter: AboutTwitter
    },
    {
        id:3,
        img: aboutUserImg3,
        name: 'Riga Pelore',
        category: 'Farmer',
        instagram: AboutInstagram,
        facebook: AboutFacebook,
        twitter: AboutTwitter
    }
]

export const aboutOfferData = [
    {
        id:1,
        title: 'Spicy',
        img : aboutOffetImg
    },
    {
        id:2,
        title: 'Nuts & Feesd',
        img : aboutOffetImg2
    },
    {
        id:3,
        title: 'Fruits',
        img : aboutOffetImg3
    },
    {
        id:4,
        title: 'Vegetable',
        img : aboutOffetImg4
    }
]


export const blogData = [
    {
        id:1,
        author: 'By Rachi Card',
        title: 'The Benefits of Vitamin D & How to Get It',
        text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        img: blogImg
    },
    {
        id:2,
        author: 'By Rachi Card',
        title: 'Our Favourite Summertime Tommeto',
        text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
        img: blogImg2
    }
]

export const productsData = [
  {
    id: 1,
    category: "Vegetable",
    img: productImg,
    name: "Calabrese Broccoli",
    subprice: "$20.00",
    price: "$13.00",
    stars: Stars,
  },
  {
    id: 2,
    category: "Fresh",
    img: productImg2,
    name: "Fresh Banana Fruites",
    subprice: "$20.00",
    price: "$14.00",
    stars: Stars,
  },
  {
    id: 3,
    category: "Millets",
    img: productImg3,
    name: "White Nuts",
    subprice: "$20.00",
    price: "$15.00",
    stars: Stars,
  },
  {
    id: 4,
    category: "Vegetable",
    img: productImg4,
    name: "Vegan Red Tomato",
    subprice: "$20.00",
    price: "$17.00",
    stars: Stars,
  },
  {
    id: 5,
    category: "Health",
    img: productImg5,
    name: "Mung Bean",
    subprice: "$20.00",
    price: "$11.00",
    stars: Stars,
  },

  {
    id: 6,
    category: "Nuts",
    img: productImg6,
    name: "Brown Hazelnut",
    subprice: "$20.00",
    price: "$12.00",
    stars: Stars,
  },
  {
    id: 7,
    category: "Fresh",
    img: productImg7,
    name: "Eggs",
    subprice: "$20.00",
    price: "$17.00",
    stars: Stars,
  },
  {
    id: 8,
    category: "Fresh",
    img: productImg8,
    name: "Zelco Suji Elaichi Rusk",
    subprice: "$20.00",
    price: "$15.00",
    stars: Stars,
  },
  {
    id: 9,
    category: "Health",
    img: productImg9,
    name: "Mung Bean",
    subprice: "$20.00",
    price: "$11.00",
    stars: Stars,
  },
  {
    id: 10,
    category: "Nuts",
    img: productImg10,
    name: "White Hazelnut",
    subprice: "$20.00",
    price: "$12.00",
    stars: Stars,
  },
  {
    id: 11,
    category: "Fresh",
    img: productImg11,
    name: "Fresh Corn",
    subprice: "$20.00",
    price: "$17.00",
    stars: Stars,
  },
  {
    id: 12,
    category: "Fresh",
    img: productImg12,
    name: "Organic Almonds",
    subprice: "$20.00",
    price: "$15.00",
    stars: Stars,
  },
];

export const headerPagesData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Pages",
    path: "/pages",
  },
  {
    id: 4,
    name: "Shop",
    path: "/shop",
  },
  {
    id: 5,
    name: "Projects",
    path: "/projects",
  },
  {
    id: 6,
    name: "News",
    path: "/news",
  },
];

export const bannerData = [
  {
    id: 1,
    category: "Natural!!",
    title: "Get Garden Fresh Fruits",
    img: bannerBgImg,
  },
  {
    id: 2,
    category: "Offer!!",
    title: "Get 10% off on Vegetables",
    img: bannerBgImg2,
  },
];

export const testimonialData = [
    {
        id:1,
        title: '100%',
        text: 'Organic'
    },
    {
        id:2,
        title: '285',
        text: 'Active Product'
    },
    {
        id:3,
        title: '350+',
        text: 'Organic Orchads'
    },
    {
        id:4,
        title: '25+',
        text: 'Years of Farming'
    }
]