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
          <h1 className="sm:text-6xl text-5xl text-right mt-[100px] font-[900] font-monospace">
            <div>is this</div>
            <div>interesting</div>
            <div>though</div>
            <div>seriously</div>
          </h1>
          <div className="w-[300px] my-auto">
            <article class="m-auto text-lg text-left leading-[1.25rem] font-monospace">
              this site is deeply under construction, but you can see my
              inaugural post{" "}
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
