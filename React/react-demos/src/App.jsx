// const App = () => {
//   const styles = { color: "Red", backgroundColor: "yellow", padding: "2.2rem" };

//   return (
//     <section>
//       <h1 style={styles}>Inline Style</h1>
//     </section>
//   );
// };

// export default App;


// import { FaBeer } from "react-icons/fa";

// const IconComponent = () => {
//   return (
//     <div>
//       <FaBeer />
//       <FaBeer size={300} />
//       <FaBeer size={300} color="red" />
//     </div>
//   );
// };

// export default IconComponent;

// App.jsx

// import React from "react";

// const App = () => {
//   const handleClick = () => {
//     console.log(Math.round(Math.random() * 10));
//   };

//   return (
//     <div>
//       <h1>Hello from App</h1>
//       <button onClick={handleClick}>Click</button>
//     </div>
//   );
// };

// export default App;



// import React, { useState } from "react";

// const App = () => {
//   const [randomNumber, setRandomNumber] = useState(0); // 👈 state to hold the number

//   const handleClick = () => {
//     const number = Math.round(Math.random() * 100000);
//     setRandomNumber(number); // 👈 update state
//   };

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Random Number Generator</h1>
//       <h2>{randomNumber}</h2> {/* 👈 Show the number on screen */}
//       <button onClick={handleClick}>Generate Number</button>
//     </div>
//   );
// };

// export default App;


// import { useState } from "react";
// const Counter = () =>{
//   const[count, setCount] = useState(0);
//   const incre = () =>  setCount(count+1);
//   const decre = () =>  setCount(count-1);
//   return(
//     <div>
//       <h1>
//         {count}
//       </h1>
//       <button onClick = {incre}> Increment </button>
//       <button onClick = {decre}> Decrement</button>
//     </div>
//   );

// };

// const App =()=>{
//   return <Counter/>

// };
// export default App;.




// import { useState } from "react";

// const App = () => {
//   const [friends, setFriends] = useState(["Alex", "John"]);

//   const addOne = () => setFriends([...friends, "HuXn"]);
//   const removeOne = () => setFriends(friends.filter((f) => f !== "John"));
//   const updateOne = () =>
//     setFriends(friends.map((f) => (f === "Alex" ? "Alex Smith" : f)));

//   return (
//     <div>
//       {friends.map((t) => (
//         <li key={Math.random()}>{t}</li>
//       ))}
//       <button onClick={addOne}>Add One</button>
//       <button onClick={removeOne}>Remove One</button>
//       <button onClick={updateOne}>Update One</button>
//     </div>
//   );
// };

// export default App;


// import { useState } from "react";

// const App = () => {
//   const [movie, setMovie] = useState({
//     title: "Equalizer 3",
//     ratings: 7,
//   });

//   const handleClick = () => {
//     // 🥂 To tell react about state updates, we have to give react a brand new object.

//     // 👉 LONG WAY
//     // const copyMovie = {
//     //   // This will copy all the properties, into the new object, and then we can change whatever we want in new object.
//     //   ...movie,
//     //   ratings: 5,
//     // };
//     // setMovie(copyMovie);

//     // 👉 SHORT WAY
//     setMovie({ ...movie, ratings: 5 });
//   };

//   return (
//     <div>
//       <h1>{movie.title}</h1>
//       <p>{movie.ratings}</p>
//       <button onClick={handleClick}>Change Ratings</button>
//     </div>
//   );
// };

// export default App;



// 1. Without the empty array
// import { useState, useEffect } from "react";

// const App = () => {
//   const [value, setValue] = useState(0);

//   useEffect(() => {
//     console.log("call useEffect");
//     document.title = `Increment (${value})`;
//   }, [value]); // ✅ dependency array added

//   return (
//     <>
//       <h1>{value}</h1>
//       <button onClick={() => setValue(value + 10000)}>Click me</button>
//     </>
//   );
// };

// export default App;




// import { useState, useEffect } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [message, setMessage] = useState(""); // 👈 use this to show on screen

//   useEffect(() => {
//     const newMsg = `You clicked ${count} times`;
//     console.log(newMsg);             // 👉 still in console
//     setMessage(newMsg);              // 👉 set message to show in UI
//   }, [count]); // run only when count changes

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>{count}</h1>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
      
//       <hr />
//       <h2>{message}</h2> {/* 👈 Showing useEffect message here */}
//     </div>
//   );
// };

// export default App;


import { useReducer } from "react";

const Counter = () => {
  // 2 👇
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      {/*  6 👇 */}
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <h1>{state.count}</h1>
    </div>
  );
};

// 3 👇
const initialState = { count: 0 };

// 4 👇
const reducer = (state, action) => {
  // 5 👇
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1,
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1,
      };
    case "reset":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};

const App = () => {
  return <Counter />;
};

export default App;
