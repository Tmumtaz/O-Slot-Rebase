import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../../firebaseUtils";

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out was successfull");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Siged In as ${authUser.email}`}</p>
          <button onClick={signOutHandler}>Sign Out</button>
        </>
      ) : (
        <p>Current Status: Signed Out</p>
      )}
    </div>
  );
};

export default AuthDetails;
