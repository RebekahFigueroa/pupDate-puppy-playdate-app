import { Button } from "@mui/material";

const Logout = () => {
  // const { isAuthed, logout } = useAuthContext();

  return (
    <Button
      size="large"
      sx={{
        backgroundColor: "#D09D7C",
        color: "#FFFFFF",
        borderRadius: 10,
        width: "7rem",
      }}
    >
      Logout
    </Button>
  );
};

export default Logout;
