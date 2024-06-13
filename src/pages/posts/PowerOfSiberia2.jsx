import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HorizontalRule from "../../components/HorizontalRule/HorizontalRule";
import { Link } from "react-router-dom";
import Triangles from "../../components/Triangles/Triangles";
import pos2 from "../../../graphics/china-pipelines-gem-style-tinified.png";

function PowerOfSiberia2() {
  return (
    <>
      <section className="body-div">
        <Header />
        <section className="main-div">
          <article>
            <div className="article-heading-div">
              <div classame="h1-post-div">
                <h1 className="h1-post">
                  Publication-quality static maps with QGIS and Affinity Publisher
                </h1>
              </div>

              <div className="h2-post-div">
                <h2 className="h2-post">
                  I recently created a static map of natural gas pipelines that currently, or may one day, bring
                  Russian gas to China. I was aiming for a newspaper-quality map; here is my process.
                </h2>
              </div>

              <div className="date-author-div">
                <div className="date">June 13, 2024</div>
                <div className="author">by Baird Langenbrunner</div>
              </div>
            </div>

            <p>
              I recently made a figure for some colleagues to include in an{" "}
              <Link
                to="https://webcache.googleusercontent.com/search?q=cache%3Ahttps%3A%2F%2Fwww.scmp.com%2Fopinion%2Fchina-opinion%2Farticle%2F3263391%2Fchina-rightly-dragging-its-feet-russias-power-siberia-2-pipeline&oq=cache%3Ahttps%3A%2F%2Fwww.scmp.com%2Fopinion%2Fchina-opinion%2Farticle%2F3263391%2Fchina-rightly-dragging-its-feet-russias-power-siberia-2-pipeline&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg60gEIMjE4MmowajSoAgCwAgE&sourceid=chrome&ie=UTF-8"
                target="_blank"
              >
                op-ed piece
              </Link>{" "}
              about Power of Siberia 2, a pipeline that Russia is hoping to
              build to China for future gas exports.
            </p>
            <p>
              I think the map turned out well, though we weren't able to use it
              in the piece in the end, so I figured I'd post it here and
              describe my process in making it. I think this is 
            </p>
            <p>
              The steps are:
              <ol>
                <li>Create geojson file</li>
                <li>Use QGIS</li>
                <li>Export as a PDF</li>
                <li>Tweak lines and labels in Affinity Publisher</li>
                <li>
                  Pass it through Tiny.PNG to make it smaller in file size but
                  keeps resolution
                </li>
              </ol>
            </p>
            <h3 className="h3-post">1. Work from geojson file</h3>
            <h3 className="h3-post">2. Import in QGIS, create print layout</h3>
            <p>Don't forget to mention topography</p>
            <h3 className="h3-post">
              3. Export as a PDF so you can continue to work with the vectors
            </h3>
            <h3 className="h3-post">
              4. Tweak line thicknesses and colors in Affinity Publisher
            </h3>
            <h3 className="h3-post">5. Pass it through tinypng</h3>
            <div className="article-text-div">
              <figure>
                <img src={pos2} alt="IPCC AR5 SPM Figure 8" />
                <figcaption></figcaption>
              </figure>
            </div>
          </article>
        </section>
        <Footer />
      </section>
    </>
  );
}

export default PowerOfSiberia2;
