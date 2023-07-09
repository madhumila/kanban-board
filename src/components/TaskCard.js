import * as React from "react";
import {
  Box,
  Card,
  CardHeader,
  CardFooter,
  Grid,
  Chip,
  Badge,
  IconButton,
  Typography,
  CardContent,
  CardActions,
  Avatar,
} from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import { styled } from "@mui/system";
import Tooltip from "@mui/material/Tooltip";

const Title = styled("div")(() => ({
  marginBottom: "1.5px",
  color: "#666666",
}));

const SubTitle = styled("span")(() => ({
  marginBottom: "1.5px",
  color: "#333333",
  fontWeight: "bold",
}));
const Heading = styled("div")(() => ({
  color: "#333333",
  fontWeight: "bold",
  fontSize: "16px",
}));

const rightIconAction = (
  <>
    <Badge
      badgeContent={4}
      color="error"
      sx={{
        "& .MuiBadge-badge": {
          right: "1.8px",
          top: "0.5px",
        },
      }}
    >
      <NotificationsNoneIcon color="action" />
    </Badge>
    <IconButton>
      <MoreVertIcon />
    </IconButton>
  </>
);

const StyledCard = styled(Card)(({ theme }) => ({
  borderLeft: `4px solid ${theme.palette.primary}`,
  margin: theme.spacing(2),
}));

const getRandomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const TaskCard = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <StyledCard
            sx={{
              width: "350px",
              height: "210px",
              m: "8px 1px",
              padding: "10px",
              borderLeft: `solid ${getRandomColor()} 5px`,
            }}
          >
            <CardContent sx={{ p: "0 16px" }}>
              <Typography
                sx={{ fontSize: 14, fontWeight: 800 }}
                color="text.secondary"
                gutterBottom
              >
                {item.ticket}
              </Typography>
              <br />
              <Tooltip title={item.task}>
                <Typography
                  sx={{ fontSize: 14, cursor: "default" }}
                  color="black"
                  gutterBottom
                >
                  {item.task.substring(0, 60) + "..."}
                </Typography>
              </Tooltip>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "50px",
                }}
              >
                <span style={{ display: "flex", justifyContent: "" }}>
                  <PriorityHighIcon
                    style={{
                      backgroundColor:
                        item.priority === "High"
                          ? "red"
                          : item.priority === "Medium"
                          ? "orange"
                          : "lightgreen",
                      color: "#ffffff",
                    }}
                  />

                  <Typography
                    sx={{ fontSize: 14, fontWeight: 800, marginLeft: "10px" }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.priority}
                  </Typography>
                </span>
                <Tooltip title={item.assigned_To}>
                  <Avatar
                    sx={{
                      bgcolor: `${getRandomColor()}`,
                      color: "white",
                      cursor: "default",
                    }}
                    aria-label="recipe"
                  >
                    {item.assigned_To.charAt(0).toUpperCase()}
                  </Avatar>
                </Tooltip>
              </div>
            </CardContent>
          </StyledCard>
        </div>
      )}
    </Draggable>
  );
};
export default TaskCard;
