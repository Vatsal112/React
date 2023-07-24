import React from "react";
import { PrimaryNav, MenuLink, Menu, Hamburger } from "./NavElement";

const Navbar = () => {
  return (
    <>
      <PrimaryNav>
        <Hamburger />
        <Menu>
          <MenuLink to="/">UseLayoutEffectDemo</MenuLink>
          <MenuLink to="/callback">UseCallbackDemo</MenuLink>
          <MenuLink to="/memo">UseMemoDemo</MenuLink>
          <MenuLink to="/reducer">UseReducerDemo</MenuLink>
          <MenuLink to="/ref">UseRefDemo</MenuLink>
          <MenuLink to="/custom-hook">Custom Hook</MenuLink>
        </Menu>
      </PrimaryNav>
    </>
  );
};

export default Navbar;
