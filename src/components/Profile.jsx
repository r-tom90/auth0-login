import { useAuth0 } from "@auth0/auth0-react";
// npm i react-json-pretty to have JSON in a more readable format.
import JSONPretty from "react-json-pretty";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    // && is to show it is true
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>Welcome {user.name}</h2>
        <p>{user.email}</p>
        <h3>Json Data</h3>
        <JSONPretty data={user} />
        {/* or this want */}
        {/* {JSON.stringify(user, null, 2)} */}
      </div>
    )
  );
};

export default Profile;
