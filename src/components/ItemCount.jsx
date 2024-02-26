import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Typography } from "@mui/material";

const ItemCount = ({ cantidad, handleRestar, handleSumar }) => {
  return (
    <div>
      <div className="item-count">
        <Button
          size="small"
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleSumar}
        />
        <Typography variant="subtitle1">{cantidad}</Typography>
        <Button
          size="small"
          variant="contained"
          startIcon={<RemoveIcon />}
          onClick={handleRestar}
        />
      </div>
    </div>
  );
};

export default ItemCount;
