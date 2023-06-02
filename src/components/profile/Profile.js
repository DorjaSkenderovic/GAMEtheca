import { useAuthValue } from "./AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

export default function Profile() {
  const { currentUser } = useAuthValue();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // Sign out successful, perform any necessary actions
    } catch (error) {
      // Handle the sign-out error
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="center">
      <div className="profile">
        <h1>Profile</h1>
        <p>
          <strong>Email: </strong>
          {currentUser?.email}
        </p>
        <p>
          <strong>Email verified: </strong>
          {`${currentUser?.emailVerified}`}
        </p>
        <span onClick={handleSignOut}>Sign Out</span>
      </div>
    </div>
  );
}
