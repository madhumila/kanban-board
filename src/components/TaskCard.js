import * as React from "react";
import {
  Card,
  Typography,
  CardContent,
} from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Tooltip from "@mui/material/Tooltip";

const TaskCard = ({ item, index }) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card
            sx={{
              width: "300px",
              height: "auto",
              marginTop: "8px",
              marginBottom: "8px",
              borderLeft: `solid #FFD400 5px`,
              borderRadius: "15px",
            }}
          >
            <CardContent sx={{}}>
              <Typography
                sx={{ fontSize: 20, fontWeight: 800 }}
                color="text.secondary"
                gutterBottom
              >
                {item.assigned_by}
              </Typography>
              <Tooltip title={item.task}>
                <Typography
                  sx={{ fontSize: 18, fontWeight: 500, cursor: "default" }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.task?.length > 30
                    ? item.task.substring(0, 30) + " ..."
                    : item.task}
                </Typography>
              </Tooltip>
              <Typography
                sx={{ fontSize: 14, cursor: "default" }}
                color="text.secondary"
                gutterBottom
              >
                {item.source}
              </Typography>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  marginTop: "15px",
                }}
              >
                <Typography
                  sx={{ fontSize: 16, fontWeight: 400 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {item.date}
                </Typography>
                <div className=" flex flex-row justify-between w-1/2">
                  <Typography
                    sx={{ fontSize: 16, fontWeight: 400 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {item.assigned_to}
                  </Typography>
                  <RemoveRedEyeIcon color="disabled" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </Draggable>
  );
};
export default TaskCard;
