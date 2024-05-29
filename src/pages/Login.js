import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (email !== "volta.szczepanski@gmail.com") {
      setError("Invalid email");
      return;
    }

    if (password !== "Michal") {
      setError('Invalid password. Password must be "Michal".');
      return;
    }

    try {
      const response = await axios.post("/api/login", { email, password });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        window.location.href = "/home"; // Przekieruj użytkownika do strony głównej
      } else {
        setError("Invalid password");
      }
    } catch (error) {
      console.error("There was an error!", error);
      setError("An error occurred while logging in");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      {error && <p>{error}</p>}
      <input type="submit" value="Log in" />
    </form>
  );
};

// import React, { useState } from "react";
// import axios from "axios";

// export const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     if (email !== "volta.szczepanski@gmail.com") {
//       setError("Invalid email");
//       return;
//     }

//     if (password !== "Michal") {
//       setError('Invalid password. Password must be "Michal".');
//       return;
//     }

//     try {
//       const response = await axios.post("/api/login", { email, password });

//       if (response.data.token) {
//         localStorage.setItem("token", response.data.token);
//         // Przekieruj użytkownika do strony głównej lub panelu administracyjnego
//       } else {
//         setError("Invalid password");
//       }
//     } catch (error) {
//       console.error("There was an error!", error);
//       setError("An error occurred while logging in");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Email:
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//       </label>
//       <label>
//         Password:
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </label>
//       {error && <p>{error}</p>}
//       <input type="submit" value="Log in" />
//     </form>
//   );
// };
