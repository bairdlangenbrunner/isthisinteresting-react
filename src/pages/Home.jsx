import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Homolosine from "../components/Homolosine/Homolosine";
import HorizontalRule from "../components/HorizontalRule/HorizontalRule";
import FavoriteResources from "./FavoriteResources";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="body-div">
        <Header />
        <div className="main-div">
          {/* <Homolosine /> */}
          <h1 className="sm:text-8xl text-5xl text-right mt-[100px] font-[900]">
            is this interesting though seriously
          </h1>
          <div className="w-[250px] my-auto">
            <article class="m-auto text-lg text-left leading-[1.25rem]">
              this site is still deeply under construction, but you can see my
              inaugural post, and read about whatever this is,{" "}
              <Link to="/posts/first-post">here</Link>
            </article>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
