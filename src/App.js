import "./App.css";
import Sidebar from "./Sidebar";
import { Container } from "@mui/material";

function App() {
  return (
    <Container
      maxWidth="md"
      sx={{ background: "#FAF9F6", padding: "20px", display: "flex" }}
    >
      <Sidebar />
    </Container>
  );
}

export default App;
