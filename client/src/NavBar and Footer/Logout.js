import { Button } from "@mui/material";
import { useAuthContext } from "../contexts/AuthContext";

const Logout = () => {
  const { logout } = useAuthContext();

  return (
    <Button
      size="large"
      sx={{
        backgroundColor: "#D09D7C",
        color: "#FFFFFF",
        borderRadius: 10,
        width: "7rem",
      }}
      onClick={logout}
    >
      Logout
    </Button>
  );
};

export default Logout;
