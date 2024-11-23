import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import "../App.css";





function TotalProgress({ correctAnswers, incorrectAnswers,catagery }) {
 
  const activity = [
    {catagery,
      correctAnswers,
      incorrectAnswers,
    },
  ];


   
  localStorage.setItem("recentactivity", JSON.stringify(activity));
    

   
 
  return (
    <>


<div class="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
 
  <div class="bg-yellow-500 text-white font-bold text-lg flex items-center justify-center py-4 relative">
    <span>Quiz Completed</span>
    <div class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-yellow-700 w-6 h-6 rounded-l-full"></div>
    <div class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-yellow-700 w-6 h-6 rounded-r-full"></div>
  </div>

 
  <div class="bg-black text-white py-6 px-4 text-center">
    <div class="flex justify-around mb-4">
      <div class="text-center">
        <div class="text-xl font-bold">{correctAnswers}</div>
        <div class="text-sm text-green-400">Correct Answers</div>
      </div>
      <div class="text-center">
        <div class="text-xl font-bold text-red-400">{incorrectAnswers}</div>
        <div class="text-sm">Wrong Answers</div>
      </div>
    </div>
    <div class="text-xl font-bold mb-4"> Your Score :{correctAnswers*10}</div>
    
  </div>

  
  <div class="bg-white py-4 flex justify-around items-center">
    <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full">
      
      <span class="text-lg">Skip Question{10 - (correctAnswers + incorrectAnswers)}</span>
    </button>
    <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full">
      
      <span class="text-lg">Attempt Question{correctAnswers + incorrectAnswers}</span>
    </button>
  </div>

 
  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white text-center py-2 font-bold rounded-lg shadow-md hover:bg-yellow-500">
  <Link to="/" className="no-underline text-white">
    Back to Home
  </Link>
</div>

</div>   
    </>
  );
}

export default TotalProgress;
