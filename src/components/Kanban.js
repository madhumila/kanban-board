import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Typography } from "@mui/material";
import axios from "axios";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import PreviewIcon from "@mui/icons-material/Preview";
import LibraryAddCheckIcon from "@mui/icons-material/LibraryAddCheck";

import TaskCard from "./TaskCard";

const Container = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  marginLeft: "50px",
  marginTop: "40px",
  height: "100vh",
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
  height: "100vh",
  overflowY: "scroll",
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
  const [enquiryData, setEnquiryData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [canceledData, setCanceledData] = useState([]);
  const [clientData, setClientData] = useState([]);
  const [proposalData, setProposalData] = useState([]);
  const [requirementData, setRequirementData] = useState([]);
  const [rejectedData, setRejectedData] = useState([]);

  const [columns, setColumns] = useState({
    column1: {
      title: "New",
      items: [],
      icon: (
        <ListAltIcon
          style={{
            color: "blue",
          }}
        />
      ),
    },
    column2: {
      title: "Proposal",
      items: [],
      icon: (
        <HourglassBottomIcon
          style={{
            color: "#ffbf00",
          }}
        />
      ),
    },
    column3: {
      title: "Client",
      items: [],
      icon: (
        <PreviewIcon
          style={{
            color: "#800080",
          }}
        />
      ),
    },
    column4: {
      title: "Rejected",
      items: [],
      icon: (
        <LibraryAddCheckIcon
          style={{
            color: "#32CD32",
          }}
        />
      ),
    },
  });

  const url =
    "https://crmapi.srvinfotech.com/newleads/list/kanban?followup_status=62c7d7427333e58969b3de0d,62c7d7287333e58969b3de0c,6392cbeb2d917dfcd065310b,62c7d6597333e58969b3de08,62c7d7117333e58969b3de0b,6392cbc22d917dfcd0653108";

  const fetchInfo = () => {
    axios.get(url).then((response) => {
      setEnquiryData(response.data.data);
    });
  };

  const getData = () => {
    let newDataTemp = [];
    let rejectedDataTemp = [];
    let canceledDataTemp = [];
    let clientDataTemp = [];
    let proposalDataTemp = [];
    let requirementDataTemp = [];

    enquiryData &&
      enquiryData.map((data) => {
        if (data.items && data.name === "New") {
          data.items.map((item) => {
            newDataTemp.push({
              id: item._id,
              status: "New",
              task:
                item?.crm?.comment &&
                `${(item?.crm?.comment).trim()}. ${
                  item?.crm?.companyname ? item.crm.companyname : ""
                }`,
              assigned_to: item?.addedby
                ? item.addedby.firstName
                : item?.followup?.addedby[0]?.firstName
                ? item.followup.addedby[0].firstName
                : null,
              assigned_by: item?.lead_reg_id?.reg_name,
              source: item?.crm?.category[0]?.name,
              date: item?.date,
              priority: "High",
            });
          });
        } else if (data.items && data.name === "Rejected") {
          data.items.map((item) => {
            rejectedDataTemp.push({
              id: item._id,
              status: "Rejected",
              task:
                item?.crm?.comment &&
                `${(item?.crm?.comment).trim()}. ${
                  item?.crm?.companyname ? item.crm.companyname : ""
                }`,
              assigned_to: item?.addedby
                ? item.addedby.firstName
                : item?.followup?.addedby[0]?.firstName
                ? item.followup.addedby[0].firstName
                : null,
              assigned_by: item?.lead_reg_id?.reg_name,
              source: item?.lead_source?.name,
              date: item?.date,
              priority: "Medium",
            });
          });
        } else if (data.items && data.name === "Cancelled") {
          data.items.map((item) => {
            canceledDataTemp.push({
              id: item._id,
              status: "Canceled",
              task:
                item?.crm?.comment &&
                `${(item?.crm?.comment).trim()}. ${
                  item?.crm?.companyname ? item.crm.companyname : ""
                }`,
              assigned_to: item?.addedby
                ? item.addedby.firstName
                : item?.followup?.addedby[0]?.firstName
                ? item.followup.addedby[0].firstName
                : null,
              assigned_by: item?.lead_reg_id?.reg_name,
              source: item?.lead_source?.name,
              date: item?.date,
              priority: "Low",
            });
          });
        } else if (data.items && data.name === "Client") {
          data.items.map((item) => {
            clientDataTemp.push({
              id: item._id,
              status: "Client",
              task:
                item?.crm?.comment &&
                `${(item?.crm?.comment).trim()}. ${
                  item?.crm?.companyname ? item.crm.companyname : ""
                }`,
              assigned_to: item?.addedby
                ? item.addedby.firstName
                : item?.followup?.addedby[0]?.firstName
                ? item.followup.addedby[0].firstName
                : null,
              assigned_by: item?.lead_reg_id?.reg_name,
              source: item?.lead_source?.name,
              date: item?.date,
              priority: "High",
            });
          });
        } else if (data.items && data.name === "Proposal") {
          data.items.map((item) => {
            proposalDataTemp.push({
              id: item._id,
              status: "Proposal",
              task:
                item?.crm?.comment &&
                `${(item?.crm?.comment).trim()}. ${
                  item?.crm?.companyname ? item.crm.companyname : ""
                }`,
              assigned_to: item?.addedby
                ? item.addedby.firstName
                : item?.followup?.addedby[0]?.firstName
                ? item.followup.addedby[0].firstName
                : null,
              assigned_by: item?.lead_reg_id?.reg_name,
              source: item?.lead_source?.name,
              date: item?.date,
              priority: "High",
            });
          });
        } else if (data.items && data.name === "Requirement Collection") {
          data.items.map((item) => {
            requirementDataTemp.push({
              id: item._id,
              status: "Requirement",
              task:
                item?.crm?.comment &&
                `${(item?.crm?.comment).trim()}. ${
                  item?.crm?.companyname ? item.crm.companyname : ""
                }`,
              assigned_to: item?.addedby
                ? item.addedby.firstName
                : item?.followup?.addedby[0]?.firstName
                ? item.followup.addedby[0].firstName
                : null,
              assigned_by: item?.lead_reg_id?.reg_name,
              source: item?.lead_source?.name,
              date: item?.date,
              priority: "Medium",
            });
          });
        }
        setNewData(newDataTemp);
        setRejectedData(rejectedDataTemp);
        setCanceledData(canceledDataTemp);
        setClientData(clientDataTemp);
        setProposalData(proposalDataTemp);
        setRequirementData(requirementDataTemp);
      });
  };

  const updateColumns = () => {
    const updatedColumns = { ...columns };
    updatedColumns.column1.items = newData;
    updatedColumns.column2.items = proposalData.concat(requirementData);
    updatedColumns.column3.items = clientData;
    updatedColumns.column4.items = rejectedData.concat(canceledData);
    setColumns(updatedColumns);
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  useEffect(() => {
    getData();
  }, [enquiryData]);

  useEffect(() => {
    updateColumns();
  }, [
    newData,
    proposalData,
    requirementData,
    rejectedData,
    canceledData,
    clientData,
  ]);

  console.log("columns", columns);
  console.log("enquiryData", enquiryData);

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
                  <div style={{ height: "90vh", overflow: "auto" }}>
                    <div
                      style={{
                        width: "390px",
                        backgroundColor: "#ECECEC",
                        padding: "5px",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "5px",
                        position: "fixed",
                      }}
                    >
                      {column.icon}
                      <div
                        style={{
                          width: "90%",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
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
                          {column.title}
                        </Typography>
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
                          {column.items.length}
                        </Typography>
                      </div>
                    </div>
                    <br />
                    <TaskList
                      style={{ marginTop: "30px", overflow: "hidden" }}
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
