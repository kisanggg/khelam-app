// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { DataContext } from "../DataContext";
// const Data = () => {
//  const {userData,setUserData}=useContext(DataContext);
//   useEffect(() => {
//     axios
//     .get("http://192.168.1.68:8000/api/get-category")
//       .then((response) => setUserData(response.data))
//       .catch((error) => console.error("Error getting user data.", error));
//   }, []);
//   return (
//     <>
//       <div>
//         {userData.map((data,index) => (
//           <div key={index}>
//             {data.title}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Data;