import { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      const response = await fetch("http://20.244.56.144/evaluation-service/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "amrithashirley@gmail.com",
          name: "Amritha Shirley Katta",
          mobileNo: "9177231327",
          githubUsername: "amrithashirley",
          rollNo: "22J41A0505",
          accessCode: "eeWErx"
        }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Client ID:", data.clientID);
      console.log("Client Secret:", data.clientSecret);

      setUser(data);
    } catch (err) {
      console.error("Registration failed", err);
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div>
      <button onClick={handleRegister}>Register</button>

      {error && <p style={{ color: "pink" }}>{error}</p>}

      {user && (
        <div style={{ marginTop: "20px" }}>
          <h3>Registered Success</h3>
          <p><strong>Client ID:</strong> {user.clientID}</p>
          <p><strong>Client Secret:</strong> {user.clientSecret}</p>
        </div>
      )}
    </div>
  );
};

export default Register;