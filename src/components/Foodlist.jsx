
 import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./Foodlist.css";
import choputting from "../assets/choputting.jpg";
import chatitem from "../assets/chatitem.jpg";
import fish from "../assets/fish.jpg";
import pzza from "../assets/pzza.jpg";
import burger3 from "../assets/burger3.jpg";
import brownie from "../assets/brownie.jpg";
import cake1 from "../assets/cake1.jpg";
import choco from "../assets/choco.jpg";
import putting from "../assets/putting.jpg";
import rice from "../assets/rice.jpg";
import starberry from "../assets/starberry.jpg";
import samosa from "../assets/samosa.jpg";
import sweet from "../assets/sweet.jpg";
import wrap from "../assets/wrap.jpg";
import porota from "../assets/porota.jpg";
import riceveg from "../assets/riceveg.jpg";
import starbeery1 from "../assets/starbeery1.jpg";
import samosa1 from "../assets/samosa1.jpg";
import pasta from "../assets/pasta.jpg";
import pizza from "../assets/pizza.jpg";
import plainrice from "../assets/plainrice.jpg";
import panipuri from "../assets/pani puri.jpg";
import pasta1 from "../assets/pasta1.jpg";
import pongal from "../assets/pongal.jpg";
import puri from "../assets/puri.jpg";
import putting4 from "../assets/putting4.jpg";
import pancake from "../assets/pancake.jpg";
import onion from "../assets/onion.jpg";
import needlechick from "../assets/needlechick.jpg";
import milk from "../assets/milk.jpg";
import milk1 from "../assets/milk1.jpg";
import jamun from "../assets/jamun.jpg";
import hawla from "../assets/halwa.jpg";
import fries from "../assets/fries.jpg";
import fish2 from "../assets/fish2.jpg";
import briyani2 from "../assets/briyani2.jpg";
import briyani3 from "../assets/briyani3.jpg";
import briyani4 from "../assets/briyani4.jpg";
import briyani5 from "../assets/briyani5.jpg";
import briyani6 from "../assets/briyani6.jpg";
import briyani7 from "../assets/briyani7.jpg";
import briyani8 from "../assets/briyani8.jpg";
import brownie1 from "../assets/brownie1.jpg";
import brownie3 from "../assets/brownie3.jpg";
import burger2 from "../assets/burger2.jpg";
import burger4 from "../assets/burger4.jpg";
import burger5 from "../assets/burger5.jpg";
import burger6 from "../assets/burger6.jpg";
import burger7 from "../assets/burger7.jpg";
import burger8 from "../assets/burger8.jpg";
import burger9 from "../assets/burger9.jpg";
import Burgr1 from "../assets/Burgr1.jpg";
import cake from "../assets/cake.jpg";
import cake2 from "../assets/cake2.jpg";
import cake3 from "../assets/cake3.jpg";
import cake4 from "../assets/cake4.jpg";
import cake5 from "../assets/cake5.jpg";
import cake6 from "../assets/cake6.jpg";
import cake7 from "../assets/cake7.jpg";
import cake8 from "../assets/cake8.jpg";
import caramel from "../assets/caramel.jpg";
import chicken from "../assets/chicken.jpg";
import cocoputting from "../assets/cocoputting.jpg";
import creamy from "../assets/creamy.jpg";
import creamy1 from "../assets/creamy1.jpg";
import creamy2 from "../assets/creamy2.jpg";
import creamy3 from "../assets/creamy3.jpg";
import creamy4 from "../assets/creamy4.jpg";
import dosa from "../assets/dosa.jpg";
import dosa1 from "../assets/dosa1.jpg";
import dosa2 from "../assets/dosa2.jpg";
import dosa3 from "../assets/dosa3.jpg";
import dosa4 from "../assets/dosa4.jpg";
import dosa5 from "../assets/dosa5.jpg";
import dosa6 from "../assets/dosa6.jpg";
import dosa7 from "../assets/dosa7.jpg";
import dosa8 from "../assets/dosa8.jpg";
import falooda from "../assets/falooda.jpg";
import falooda1 from "../assets/falooda1.jpg";
import falooda2 from "../assets/falooda2.jpg";
import falooda3 from "../assets/falooda3.jpg";
import falooda4 from "../assets/falooda4.jpg";
import fried from "../assets/fried.jpg";
import icecream from "../assets/icecream.jpg";
import icecream2 from "../assets/icecream2.jpg";
import icecream3 from "../assets/icecream3.jpg";
import icecream4 from "../assets/icecream4.jpg";
import icecream5 from "../assets/icecream5.jpg";
import icecream6 from "../assets/icecream6.jpg";
import jamun1 from "../assets/jamun1.jpg";
import mint from "../assets/mint.jpg";
import mint1 from "../assets/mint1.jpg";
import mint2 from "../assets/mint2.jpg";
import mint3 from "../assets/mint3.jpg";
import mint4 from "../assets/mint4.jpg";
import mint5 from "../assets/mint5.jpg";
import pasta2 from "../assets/pasta2.jpg";
import pizza1 from "../assets/pizza1.jpg";
import pizza2 from "../assets/pizza2.jpg";
import pizza3 from "../assets/pizza3.jpg";
import pizza4 from "../assets/pizza4.jpg";
import pizza5 from "../assets/pizza5.jpg";
import pizza6 from "../assets/pizza6.jpg";
import pizza7 from "../assets/pizza7.jpg";
import pizza8 from "../assets/pizza8.jpg";
import putting1 from "../assets/putting1.jpg";
import putting2 from "../assets/putting2.jpg";
import putting3 from "../assets/putting3.jpg";
import cocoballs from "../assets/cocoballs.jpg";
  const demoFoods = [
    {
      id:1,
      img: wrap,
      name: " TASTY CHICKEN WRAP",
      desc: "Wrap, Chinese, Oriental",
      offer: "₹40 OFF",
      price: "₹300 for one",
      time: "40 min",
      rating: "4.1",
    },
    { 
      id:2,
      img: chatitem,
      name: "CHAT ITEM",
      desc: "North Indian, Mughlai",
      offer: "₹80 OFF",
      price: "₹200 for one",
      time: "35 min",
      rating: "4.3",
    },
    {
      id:3,
      img: pasta1,
      name: "NOODLES",
      desc: "Cheesy Noodle, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:4,
      img: cake1,
      name: "CREAMY MULTI COLOUR BUNS",
      desc: "Creamy, Colorfull Buns",
      offer: "₹90 OFF",
      price: "₹250 for 5 piece",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:150,
      img: burger3,
      name: "BURGER",
      desc: "Crunchy and Tasty, Chicken",
      offer: "₹50 OFF",
      price: "₹150 for one",
      time: "25 min",
      rating: "4.0",
    },
    {
      id:5,
      img: pzza,
      name: "Pizza WITH EXTRA CHEESE",
      desc: "Italian, Continental",
      offer: "₹120 OFF",
      price: "₹400 for one",
      time: "45 min",
      rating: "4.5",
    },
    {
      id:6,
      img: briyani5,
      name: "MUTTON BRIYANI",
      desc: "Flavorable Jusicy Mutton",
      offer: "₹90 OFF",
      price: "₹300 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:7,
      img: choputting,
      name: "CHOCOLATE PUTTING",
      desc: "Jelly consistency, chocolate",
      offer: "₹40 OFF",
      price: "₹180 for one",
      time: "20 min",
      rating: "4.2",
    },
    {
      id:8,
      img: dosa7,
      name: "MASALA DOSA",
      desc: "Crispy Rice Crep Filled with Special Potato Masala",
      offer: "₹90 OFF",
      price: "₹150 for one",
      time: "45 min",
      rating: "4.7",
    },
    {
      id:9,
      img: burger5,
      name: "BURGER WITH FRANCH FRIES",
      desc: "Spongy Buns with Crispy Fries",
      offer: "₹50 OFF",
      price: "₹450 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:10,
      img: pizza8,
      name: "PIZZA WITH EXTRA CHEESE",
      desc: "Pizza, Fast Food",
      offer: "₹20 OFF",
      price: "₹550 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:11,
      img: cake2,
      name: "CHOCO TRUFFLE CAKE ",
      desc: "Chocolate, Full Creamy",
      offer: "₹30 OFF",
      price: "₹250 for one piece",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:12,
      img: putting3,
      name: "PUTTING WITH BERRIES",
      desc: "Tasty putting, Tasty Berries",
      offer: "₹40 OFF",
      price: "₹180 for one",
      time: "20 min",
      rating: "4.2",
    },
    {
      id:13,
      img: falooda2,
      name: "FALOODA",
      desc: "Strawberry Flavor, Extra Ice Cream",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:14,
      img: porota,
      name: "Parotta",
      desc: "North Indian, Soft Inside and Crispy Outside",
      offer: "₹60 OFF",
      price: "₹100 for five",
      time: "30 min",
      rating: "4.4",
    },
    {
      id:15,
      img: fried,
      name: "PRAWN RICE",
      desc: "Tasty Masala Flavor, Extra Prawns",
      offer: "₹40 OFF",
      price: "₹350 for one  plate",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:16,
      img: cake,
      name: "VENNILA CAKE",
      desc: "Full Creamed Spongy Cake",
      offer: "₹60 OFF",
      price: "₹750 for one",
      time: "35 min",
      rating: "3.7",
    },
    {
      id:17,
      img: jamun,
      name: "GULAB JAMUN",
      desc: "Jusicy jamuns with Sugar Syrup",
      offer: "₹20 OFF",
      price: "₹70 for one",
      time: "15 min",
      rating: "4.6",
    },
    {
      id:18,
      img: dosa,
      name: "CRISPY DOSA",
      desc: "South Idia Special Sambar",
      offer: "₹50 OFF",
      price: "₹150 for one",
      time: "35 min",
      rating: "2.7",
    },
    {
      id:19,
      img: Burgr1,
      name: "PANEER BUTTER MASALA",
      desc: "Paneer Masala, Fast Food",
      offer: "₹20 OFF",
      price: "₹150 for one",
      time: "35 min",
      rating: "1.7",
    },
    {
      id:20,
      img: dosa6,
      name: "CRISPY DOSA",
      desc: "Special Masala With Crunchy Dosa",
      offer: "₹50 OFF",
      price: "₹50 for one",
      time: "15 min",
      rating: "4.7",
    },
    {
      id:21,
      img: cake3,
      name: "CHOCOLATE WITH VENNILA CAKE",
      desc: "Full Creamy and Chocolate Cakw",
      offer: "₹90 OFF",
      price: "₹550 for one",
      time: "35 min",
      rating: "2.7",
    },
    {
      id:22,
      img: fish,
      name: "SPECIAL FISH CURRY",
      desc: "South Indian Special Masala ",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:23,
      img: pasta2,
      name: "WHITE SAUCE PASTA",
      desc: "Flavourable sauce ",
      offer: "₹70 OFF",
      price: "₹450 for one",
      time: "35 min",
      rating: "3.7",
    },
    {
      id:24,
      img: mint,
      name: "LEMON MINT",
      desc: "Fresh Lemon with Mint",
      offer: "₹10 OFF",
      price: "₹120 for one",
      time: "35 min",
      rating: "2.7",
    },
    {
      id:25,
      img: putting2,
      name: "CHOCOLATE WITH MILK PUTING",
      desc: "Freash Cream with Dark chcolate",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:26,
      img: dosa8,
      name: "DOSA",
      desc: "Special Dosa with Special Side Dish",
      offer: "₹20 OFF",
      price: "₹150 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:27,
      img: milk,
      name: "CHOCOLATE MILK PUTTING",
      desc: "Tasty fresh chocolate, creamy chocolate",
      offer: "₹30 OFF",
      price: "₹250 for one",
      time: "25 min",
      rating: "4.7",
    },
    {
      id:28,
      img: fries,
      name:"FRANCH FRIES WITH FRIED CHICKEN",
      desc: "Crispy chcken, crunchy fries",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:29,
      img: burger9,
      name: "BURGER",
      desc: "Chicken stuffed flavorale burger",
      offer: "₹90 OFF",
      price: "₹120 for one",
      time: "2.5 min",
      rating: "2.7",
    },
    {
      id:30,
      img: pizza7,
      name: "MINI PIZZA",
      desc: "Soft bread with veg flavour pizza",
      offer: "₹10 OFF",
      price: "₹50 for one",
      time: "45 min",
      rating: "1.5",
    },
    {
      id:31,
      img: cake5,
      name: "CHOCOLATE CAKE",
      desc: "Spongy cake with  chocolate flvour",
      offer: "₹90 OFF",
      price: "₹340 for one",
      time: "35 min",
      rating: "2.7",
    },
    {
      id:32,
      img: dosa5,
      name: "MASALA DOSA ",
      desc: "Masala stuffed dosa",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "3.7",
    },
    {
      id:33,
      img: falooda4,
      name: "FALOOODA",
      desc: "Vanilla cream with full nuts ",
      offer: "₹90 OFF",
      price: "₹450 for one",
      time: "35 min",
      rating: "3.7",
    },
    {
      id:34,
      img: onion,
      name: "SAMOSA",
      desc: "Crunchy  and crispy samosa",
      offer: "₹30 OFF",
      price: "₹80 for one",
      time: "35 min",
      rating: "5.7",
    },
    {
      id:35,
      img: burger8,
      name: "BURGER",
      desc: "Spongy bun with spicy chicken burger",
      offer: "₹90 OFF",
      price: "₹450 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:36,
      img: icecream,
      name: "BROWNIE",
      desc: "Icrecream with brownie",
      offer: "₹90 OFF",
      price: "₹450 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:37,
      img: mint1,
      name: "LEMON MINT",
      desc: "Fresh mint",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:38,
      img: pongal,
      name: "PONGAL",
      desc: "Tasty pongal",
      offer: "₹30 OFF",
      price: "₹120 for one",
      time: "35 min",
      rating: "3.7",
    },
    {
      id:39,
      img: dosa4,
      name: "DOSA WITH SAMBAR",
      desc: "Crispy dosa with spicy sambar",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:40,
      img: cake6,
      name: "CHOCOLATE CAKE",
      desc: "Full chocolate flavoured cake",
      offer: "₹90 OFF",
      price: "₹750 for one",
      time: "35 min",
      rating: "5.7",
    },
    {
      id:41,
      img: pizza6,
      name: "VEG PIZZA",
      desc: "Spongy bun with veg flavour pizza",
      offer: "₹90 OFF",
      price: "₹150 for one",
      time: "35 min",
      rating: "5.7",
    },
    {
      id:42,
      img: falooda3,
      name: "FAOODA",
      desc: "Fruits wih icecreame falooda",
      offer: "₹50 OFF",
      price: "₹550 for one",
      time: "35 min",
      rating: "3.7",
    },
    {
      id:43,
      img: putting1,
      name: "CARAMEL PUTTING",
      desc: "Caramelised putting with  extra sweet",
      offer: "₹40 OFF",
      price: "₹150 for one",
      time: "35 min",
      rating: "3.7",
    },
    {
      id:44,
      img: burger7,
      name: "BURGER",
      desc: "veg burger with extra sauce",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "2.7",
    },
    {
      id:45,
      img: pancake,
      name: "PAN CAKE",
      desc: "Honey fulled with each pan cake",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "3.7",
    },
     {
      id:46,
      img: starberry,
      name: "STRAWBERRY ICECREAM",
      desc: " Fresh Strawberry with ice creame",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:47,
      img: dosa3,
      name: "DOSA",
      desc: "Crispy dosa with special side dish",
      offer: "₹40 OFF",
      price: "₹350 for one",
      time: "35 min",
      rating: "2.7",
    },
   {
    id:48,
      img: pizza5,
      name: "PIZZA",
      desc: "Pizza, fast food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:49,
      img: cake7,
      name: "BROWNIE",
      desc: "CHOCOLATE BROWNIE",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:50,
      img: burger6,
      name: "CHICKEN BURGER",
      desc: "Chicken burger with extraa sauce",
      offer: "₹90 OFF",
      price: "₹450 for one",
      time: "35 min",
      rating: "3.7",
    },
    {
      id:51,
      img: mint1,
      name: "MINT",
      desc: "Fresh lemon mint",
      offer: "₹90 OFF",
      price: "₹150 for one",
      time: "35 min",
      rating: "3.7",
    },
    {
      id:52,
      img: panipuri,
      name: "PANI PURI",
      desc: "Panni puri , Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:53,
      img: falooda2,
      name: "FALOODA",
      desc: "Fruis with nuts falooda",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "3.7",
    },
    {
      id:54,
      img: cake8,
      name: "CHOCOLATE CAKE",
      desc: "Spongy cake with chocolate",
      offer: "₹90 OFF",
      price: "₹450 for one",
      time: "25 min",
      rating: "3.4",
    },
    {
      id:55,
      img: putting,
      name: "STRAWBERRY PUTTING",
      desc: "Starwberry sweet sauce putting",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:56,
      img: burger4,
      name: "VEG BURGER",
      desc: "",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:57,
      img: dosa3,
      name: "DOSA",
      desc: "Crispy dosa with spcial side dish",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:58,
      img: puri,
      name:"CHAT ITEM",
      desc: "Chat item with extra masala flavour, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:59,
      img: caramel,
      name: "PALKOVA",
      desc: "Milk palkova",
      offer: "₹60 OFF",
      price: "₹50 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:60,
      img: putting1,
      name: "MILK PUTTING",
      desc: "Caramelised milk putting",
      offer: "₹30 OFF",
      price: "₹150 for one",
      time: "35 min",
      rating: "3.7",
    },
    {
      id:61,
      img: burger3,
      name: "BURGER",
      desc: "Spongy bun with chicken burger, Fast Food",
      offer: "₹50 OFF",
      price: "₹350 for one",
      time: "55 min",
      rating: "4.8",
    },
    {
      id:62,
      img: samosa,
      name: "SAMOSA",
      desc: "Samosa with extra flavour masala",
      offer: "₹90 OFF",
      price: "₹100 for one",
      time: "35 min",
      rating: "4.2",
    },
    {
      id:63,
      img: chatitem,
      name: "CHAT ITEM",
      desc: "Masala stuffed chat items",
      offer: "₹30 OFF",
      price: "₹750 for one",
      time: "25 min",
      rating: "2.3",
    },
    {
      id:64,
      img: mint2,
      name:"MINT",
      desc: "Fresh lemon mint",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:65,
      img: sweet,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id: 66,
      img: dosa2,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:67,
      img: burger2,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:68,
      img: cocoballs,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:69,
      img: creamy3,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:170,
      img: falooda1,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:70,
      img: starbeery1,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:71,
      img: pizza1,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:72,
      img: burger4,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:73,
      img: rice,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:74,
      img: pizza,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:75,
      img: falooda,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:76,
      img: mint3,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:77,
      img: dosa1,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:78,
      img: creamy4,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
     {
      id:79,
      img: riceveg,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:80,
      img: briyani2,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:81,
      img: burger6,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
     {
      id:82,
      img: pasta,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
   {
    id:83,
      img: icecream4,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
   {
    id:84,
      img: pizza1,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:85,
      img: samosa1,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:86,
      img: brownie,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:87,
      img: briyani3,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:88,
      img: brownie1,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:89,
      img: pizza2,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:90,
      img: cake4,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:91,
      img: icecream2,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:92,
      img: creamy3,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:93,
      img: chicken,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:94,
      img: mint4,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
     {
      id:95,
      img: plainrice,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
   {
    id:96,
      img: brownie3,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:97,
      img: briyani8,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
     {
      id:98,
      img: choco,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
   
     {
      id:99,
      img: cake1,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:100,
      img: icecream3,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
     {
      id:101,
      img: fries,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:102,
      img: cocoputting,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:103,
      img: briyani4,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:104,
      img: creamy2,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:105,
      img: pizza3,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
     {
      id:106,
      img: hawla,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:107,
      img: icecream4,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:108,
      img: briyani7,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
     {
      id:109,
      img: fish2,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:110,
      img: needlechick,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
     {
      id:111,
      img: milk1,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
     {
      id:112,
      img: pasta1,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:113,
      img: creamy,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:114,
      img: mint5,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:115,
      img: putting4,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:116,
      img: briyani6,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
   {
    id:117,
      img: icecream5,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
   {
    id:118,
      img: pizza4,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
   
   {
    id:119,
      img: milk1,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
   {
    id:120,
      img: briyani4,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
   {
    id:121,
      img: jamun1,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:122,
      img: icecream6,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
   {
      
    id:123,
    img: creamy1,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
    {
      id:124,
      img: briyani3,
      name: "Dominos Meal",
      desc: "Pizza, Fast Food",
      offer: "₹90 OFF",
      price: "₹250 for one",
      time: "35 min",
      rating: "4.7",
    },
     ];
     function Foodlist() {
  const { keyword } = useParams();
  const navigate = useNavigate();

  const [foods, setFoods] = useState(demoFoods);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    if (!keyword) {
      setFoods(demoFoods);
    } else {
      const filteredFoods = demoFoods.filter((food) =>
        food.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setFoods(filteredFoods);
    }

    setLoading(false);
  }, [keyword]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
  <div className="demoFoods-section">
    <h2 className="demoFoods-heading">Popular Foods</h2>

    <div className="demoFoods-container">
      {foods.map((food) => (
        <div
          key={food.id}
          className="demoFoods-card"
          onClick={() => navigate(`/food/${food.id}`)}
          style={{ cursor: "pointer" }}
        >
          <img
            src={food.img}
            alt={food.name}
            className="demoFoods-img"
          />

          {food.offer && (
            <div className="offer-tag">{food.offer}</div>
          )}

          <div className="demoFoods-info">
            <h3 className="demoFoods-name">{food.name}</h3>
            <p className="demoFoods-desc">{food.desc}</p>

            <div className="demoFoods-bottom">
              <span className="demoFoods-price">{food.price}</span>
              <span className="demoFoods-time">{food.time}</span>
            </div>

            <div className="rating-box">⭐ {food.rating}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
     }
export default Foodlist;