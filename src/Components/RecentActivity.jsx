import { useEffect, useState } from "react";

function RecentActivity() {
  const [allActivity, setActivity] = useState([]);

  useEffect(() => {
    
    const storedData = JSON.parse(localStorage.getItem("recentactivity")) || [];
    

    setActivity(storedData);
  }, []);

  const addNewActivity = (newActivity) => {

    const updatedActivities = [...allActivity, newActivity];

   
    setActivity(updatedActivities);

   
    localStorage.setItem("recentactivity", JSON.stringify(updatedActivities));
  };

  console.log("The activities from localStorage are: ", allActivity);

  return (
    <>
 <div className="w-[80vw] h-auto border-4 border-yellow-500 mx-auto my-6 rounded-xl bg-black shadow-lg">
  <h1 id="text">
    Recent Activity
  </h1>
  <div className="space-y-6 px-6 pb-6">
    {allActivity
      .filter((item) => item && typeof item.catagery === 'string') // Ensure item is not null/undefined and has valid data
      .map((item, index) => {
        return (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-4 border-2 border-yellow-400 shadow-md"
          >
            <p className="text-white font-medium mb-2">
              Category: <span className="text-indigo-400">{item.catagery}</span>
            </p>
            <p className="text-white mb-1">
              Correct Answers: <span className="text-green-400">{item.correctAnswers}</span>
            </p>
            <p className="text-white mb-3">
              Incorrect Answers: <span className="text-red-400">{item.incorrectAnswers}</span>
            </p>
            <div className="w-full bg-gray-600 h-3 rounded-full overflow-hidden">
              <div
                className={`h-full bg-green-500`}
                style={{ width: `${item.correctAnswers * 10}%` }}
              ></div>
            </div>
            <p className="text-white mt-2 text-sm text-right">
              {item.correctAnswers * 10}% Progress
            </p>
          </div>
        );
      })}
  </div>
</div>

    </>
  );
}

export default RecentActivity;
