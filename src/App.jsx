import { Button, Autocomplete, TextField } from "@mui/material";
import top100Films from "./mock/top100Films";

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
      <Button>text button</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={top100Films}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Movie" />}
      />
    </div>
  );
};

export default App;
