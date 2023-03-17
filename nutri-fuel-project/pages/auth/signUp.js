import { useState } from "react";

export default function SignUp() {
  const [flipped, setFlipped] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [weight, setWeight] = useState(0);
  const [age, setAge] = useState(0)

  const goalOptions = ["Lose Weight", "Gain Weight", "Maintain Weight"];
  const genderOptions = ["Male", "Female"];
  const activityLevels = ["Sedentary", "Lightly Active", "Moderately Active", "Very Active"]

  const [selectedGoalOption, setSelectedGoalOption] = useState(goalOptions[0]);
  const [gender, setGender] = useState(genderOptions[0])
  const [activityLevel, setActivityLevel] = useState(activityLevels[0])

  const handleGoalOptionChange = (event) => {
    setSelectedGoalOption(event.target.value);
  };
  const handleGenderOptionChange = (event) => {
    setGender(event.target.value)
  }
  const handleActivityOptionChange = (event) => {
    setActivityLevel(event.target.value)
  }

  function flip() {
    setFlipped(!flipped);
    console.log(flipped);
  }

  return (
    <div className="flex justify-center items-center">
      <div className="xl:w-3/12 max-w-2xl shadow-lg h-fit rounded-2xl absolute lg:top-1/4 xl:top-1/3 py-6 px-10 pb-10">
        <h2 className="font-poppins text-3xl font-semibold w-fit mx-auto mb-12">
          Sign Up
        </h2>
        {flipped ? (
          <form className="mx-auto w-full flex justify-around">
            <div className="w-fit px-auto flex-col flex justify-center">
              <input
                id="nameInput"
                required
                placeholder="First Name"
                className="lg:w-56 w-56 h-14 bg-transparent border-solid border-slate-200 border-2 rounded pl-2 mb-6"
              ></input>
              <select
                id="dropdownGoal"
                required
                name="dropdownGoal"
                onChange={handleGoalOptionChange}
                className="lg:w-56 w-56 h-14 bg-transparent border-solid border-slate-200 border-2 rounded pl-2 mb-6"
              >
                {goalOptions.map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
              <select
                id="dropdownGender"
                required
                name="dropdownGender"
                onChange={handleGenderOptionChange}
                className="lg:w-56 w-56 h-14 bg-transparent border-solid border-slate-200 border-2 rounded pl-2 mb-6"
              >
                {genderOptions.map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="w-fit px-auto flex-col flex justify-center">
              <input
                id="weightInput"
                required
                placeholder="Weight (LBS)"
                onChange={(e) => {
                  setWeight(e.target.value);
                }}
                type="number"
                className="lg:w-56 w-56 h-14 bg-transparent border-solid border-slate-200 border-2 rounded pl-2 mb-6"
              ></input>
              <input
                id="ageInput"
                required
                type="number"
                placeholder="Age"
                className="pl-2 h-14 lg:w-56 w-56 bg-transparent border-solid border-slate-200 border-2 rounded mb-6"
                onChange={(e) => {
                  setAge(e.target.value);
                }}
              ></input>
              <select
                id="dropdownActivity"
                required
                name="dropdownActivity"
                onChange={handleActivityOptionChange}
                className="lg:w-56 w-56 h-14 bg-transparent border-solid border-slate-200 border-2 rounded pl-2 mb-6"
              >
                {activityLevels.map((option) => {
                  return (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  );
                })}
              </select>
            </div>
          </form>
        ) : (
          <form className="mx-auto w-fit flex flex-col">
            <input
              id="emailInput"
              placeholder="Email Address"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="lg:w-96 w-72 h-14 bg-transparent border-solid border-slate-200 border-2 rounded pl-2 mb-6"
            ></input>
            <input
              id="passwordInput"
              required
              autoComplete="current-password"
              type="password"
              placeholder="Password"
              className="pl-2 h-14 lg:w-96 w-72 bg-transparent border-solid border-slate-200 border-2 rounded mb-6"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
            <input
              id="passwordInput"
              required
              autoComplete="current-password"
              type="password"
              placeholder="Retype Password"
              className="pl-2 h-14 lg:w-96 w-72 bg-transparent border-solid border-slate-200 border-2 rounded mb-6"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            ></input>
          </form>
        )}
        <div className="flex justify-center mb-6">
          <div className="flex w-8 justify-between">
            <div
              className={
                !flipped
                  ? "rounded-full h-3 w-3 bg-slate-300"
                  : "rounded-full h-3 w-3 border-solid border-slate-300 border-2"
              }
            ></div>
            <div
              className={
                !flipped
                  ? "rounded-full h-3 w-3 border-solid border-slate-300 border-2"
                  : "rounded-full h-3 w-3 bg-slate-300"
              }
            ></div>
          </div>
        </div>
        {flipped ? (
          <div className="flex justify-center">
            <div className="flex justify-between w-52">
              <button
                className="bg-green-300 w-24 h-10 rounded font-inter text-white font-bold text-base hover:bg-green-400 px-4"
                onClick={flip}
              >
                BACK
              </button>
              <button className="bg-green-300 w-24 h-10 rounded font-inter text-white font-bold text-base hover:bg-green-400 px-4">
                SUBMIT
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              className="bg-green-300 h-10 rounded font-inter text-white font-bold text-base hover:bg-green-400 px-4"
              onClick={flip}
            >
              NEXT
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
