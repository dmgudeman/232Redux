import { useSelector, useDispatch } from "react-redux";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);
  const showAuthBox = useSelector((state) => state.auth.showAuthBox);

  return (
    <div>
      {!showAuthBox && (
        <main className={classes.profile}>
          <h2>My User Profile</h2>
        </main>
      )}
    </div>
  );
};

export default UserProfile;
