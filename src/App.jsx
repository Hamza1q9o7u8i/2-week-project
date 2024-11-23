import "./App.css";
import { Link } from "react-router-dom";
import adobeVideo from "../src/img/timer.mp4";
import quizImage1 from "../src/img/Quizbg1.jpg"
import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import RecentActivity from "./Components/RecentActivity";


function App() {

  return (

    <section className="bg-stone-950 m-2 app">
<video
  className="w-[100vw] h-[30vw] mx-auto object-cover"
  controls
  loop
  autoPlay
  muted
>
  <source src={adobeVideo} type="video/mp4" />
  Your browser does not support the video tag.
</video>

<div className="lightimg w-[100vw] h-[125vh] border-yellow-300 shadow-md border mt-5 mx-4 my-0 rounded-xl"
     style={{
       backgroundImage: `url(${quizImage1})`,
       backgroundSize: "cover",
       backgroundRepeat: "no-repeat",
       backgroundPosition: "center",
     }}
>
  <div className="myimagebg .bg-image">
    <i id="text">Quiz Category</i>
    <div className="cardflex flex flex-wrap  w-[70vw] h-[95vh] mx-auto align-middle justify-center">
      <div class="cardbox w-[20vw] h-[45vh] p-0">
        <div class="content h-full bg-stone-950 rounded-lg shadow-md text-center p-6">
          <div
            className="absolute inset-0 bg-cover bg-cente"
            style={{
              backgroundImage: "url('https://i.gifer.com/6HY.gif')",
              filter: "blur(8px)",
              zIndex: -1,
            }}></div>
          <img
            alt="testimonial"
            class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://i.gifer.com/6HY.gif"/>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
            General 
          </h2>
          <div className="mystart">
            <button class="button-85" role="button">
              <Link class="quizbutton" to="/GeographyQuestion">
                Start
              </Link>
            </button>
          </div>
        </div>
      </div>
      <div class="cardbox w-[20vw] h-[45vh] p-0">
        <div class="content h-full rounded-lg shadow-md text-center p-6">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://i.gifer.com/3SLF.gif')",
              filter: "blur(8px)",
              zIndex: -1,
            }}></div>
          <img
            alt="testimonial"
            class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://i.gifer.com/3SLF.gif"/>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
            Nature
          </h2>
          <button class="button-85" role="button">
            <Link class="quizbutton" to="/NatureQuestion">
              Start
            </Link>
          </button>
        </div>
      </div>
      <div class="cardbox w-[20vw] h-[45vh] p-0">
        <div class="content h-full rounded-lg shadow-md text-center p-6">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://i.gifer.com/7Cvv.gif')",
              filter: "blur(8px)",
              zIndex: -1,
            }}></div>
          <img
            alt="testimonial"
            class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://i.gifer.com/7Cvv.gif"/>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
            Geography
          </h2>
          <button class="button-85" role="button">
            <Link class="quizbutton" to="/GeographyQuestion">
              Start
            </Link>
          </button>
        </div>
      </div>
      <div class="cardbox w-[20vw] h-[45vh] p-0">
        <div class="content h-full rounded-lg shadow-md text-center p-6">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://i.gifer.com/pXp.gif')",
              filter: "blur(8px)",
              zIndex: -1,
            }}></div>
          <img
            alt="testimonial"
            class="w-20 h-20 mb-4 object-cover object-bottom rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://i.gifer.com/pXp.gif"/>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
            Sports
          </h2>
          <button class="button-85" role="button">
            <Link class="quizbutton" to="/SportQuestion">
              Start
            </Link>
          </button>
        </div>
      </div>
      <div class="cardbox w-[20vw] h-[45vh] p-0">
        <div class="content h-full rounded-lg shadow-md text-center p-6">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://i.gifer.com/7zHX.gif')",
              filter: "blur(8px)",
              zIndex: -1,
            }}></div>
          <img
            alt="testimonial"
            class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://i.gifer.com/7zHX.gif"/>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
            Vehicles
          </h2>
          <button class="button-85" role="button">
            <Link class="quizbutton" to="/Question">
              Start
            </Link>
          </button>
        </div>
      </div>
      <div class="cardbox w-[20vw] h-[45vh] p-0">
        <div class="content h-full rounded-lg shadow-md text-center p-6">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://i.gifer.com/9lfC.gif')",
              filter: "blur(8px)",
              zIndex: -1,
            }}></div>
          <img
            alt="testimonial"
            class="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
            src="https://i.gifer.com/9lfC.gif"/>
          <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
            Entertainment
          </h2>
          <button class="button-85" role="button">
            <Link class="quizbutton" to="/EntertainmentQuestion">
              Start
            </Link>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>


      <RecentActivity/>

{/*            
      {allquestion && allquestion.length > 0 ? (
        allquestion.map((mera, index) => (
          <div key={index}>{mera.question}</div>
          ))
          ) : (
            <p className="text-center text-gray-500">Loading questions...</p>
            )} */}
    </section>

  );
}
export default App;