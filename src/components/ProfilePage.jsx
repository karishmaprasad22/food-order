import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const savedProfile = JSON.parse(localStorage.getItem("profile"));
    setProfile(savedProfile);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>My Profile</h2>

      {profile ? (
        <div>
          <p><b>Username:</b> {profile.username}</p>
          <p><b>Password:</b> {profile.password}</p>
        </div>
      ) : (
        <div>
          <p>You have not created a profile yet.</p>
          <Link to="/create-profile">
            <button>Create Profile</button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
