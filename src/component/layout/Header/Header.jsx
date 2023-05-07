import { ReactNavbar } from 'overlay-navbar'
import React from 'react'
import logo from "../../../../src/images/logo.png";
import { FaUser } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const options = {
    burgerColorHover: "#eb4034",
    logo,
    profileIcon: true,
    ProfileIconElement: FaUser,
    profileIconSize: "2.5vmax",
    cartIcon: true,
    CartIconElement: FaShoppingBag,
    cartIconSize: "2.5vmax",
    searchIcon: true,
    SearchIconElement: FaSearch,
    searchIconSize: "2vmax",
    logoWidth: "20vmax",
    navColor1: "white",
    logoHoverSize: "10px",
    logoHoverColor: "#eb4034",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "About",
    link4Text: "Contact",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/about",
    link4Url: "/contact",
    link1Size: "1.3vmax",
    link1Color: "rgba(35, 35, 35,0.8)",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#eb4034",
    link1Margin: "1vmax",
    profileIconUrl: "/login",
    profileIconColor: "rgba(35, 35, 35,0.8)",
    searchIconColor: "rgba(35, 35, 35,0.8)",
    cartIconColor: "rgba(35, 35, 35,0.8)",
    profileIconColorHover: "#eb4034",
    searchIconColorHover: "#eb4034",
    cartIconColorHover: "#eb4034",
    cartIconMargin: "1vmax",
  };
  

const Header = () => {
  return (
    <ReactNavbar {...options}  />
  )
}

export default Header