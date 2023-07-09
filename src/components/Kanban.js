import React, { useState } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Grid, Box, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import { columnsFromBackend } from "./KanbanData";
import TaskCard from "./TaskCard";

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  marginLeft: "50px",
  marginTop: "20px",
}));

const TaskList = styled("div")(() => ({
  minHeight: "250px",
  display: "flex",
  flexDirection: "column",
  background: "#ECECEC",
  minWidth: "390px",
  borderRadius: "5px",
  padding: "15px 15px",
  marginRight: "45px",
}));

const TaskColumnStyles = styled("div")(() => ({
  margin: "8px",
  display: "flex",
  width: "100%",
  minHeight: "80vh",
}));
const Title = styled("span")(() => ({
  fontWeight: "bold",
  color: "#333333",
  fontSize: 16,
  marginBottom: "1.5px",
  background: "#f7f8fa",
  width: "341px",
  borderRadius: "5px",
  padding: "15px 15px",
}));

const Kanban = () => {
  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };
  return (
    <DragDropContext
      onDragEnd={(result) => {
        onDragEnd(result, columns, setColumns);
      }}
    >
      <Container>
        <TaskColumnStyles>
          {Object.entries(columns).map(([columnId, column], index) => {
            return (
              <Droppable key={index} droppableId={columnId}>
                {(provided, snapshot) => (
                  <div>
                    <div
                      style={{
                        width: "390px",
                        backgroundColor: "#ECECEC",
                        padding: "5px",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "5px",
                      }}
                    >
                      {column.icon}
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 800,
                          marginLeft: "15px",
                          marginTop: "5px",
                        }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {column.title} [{column.items.length}]
                      </Typography>
                    </div>
                    <br />
                    <TaskList
                      style={{ marginTop: "5px" }}
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                    >
                      {column.items.map((item, index) => (
                        <TaskCard key={index} item={item} index={index} />
                      ))}
                      {provided.placeholder}
                    </TaskList>
                  </div>
                )}
              </Droppable>
            );
          })}
        </TaskColumnStyles>
      </Container>
    </DragDropContext>
  );
};

export default Kanban;
