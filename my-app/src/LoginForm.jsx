import { useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    // Later: send to backend API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="user">Username</label><br />
        <input
          id="user"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          placeholder="Enter username"
        />
      </div>

        <div>
        <label htmlFor="password">Password</label><br />
        <input
          id="password"
          type="password" // hides characters
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter password"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default LoginForm;
