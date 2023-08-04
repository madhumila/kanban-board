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

  const dummyData = {
    status: 200,
    data: [
      {
        _id: "62c7d6597333e58969b3de08",
        name: "New",
        items: [
          {
            _id: "64cb9ae2c38090966021ed28",
            date: "2023-08-03",
            time: "17:47:38",
            lead_reg_id: {
              _id: "648aead9fcd76e3a23221b46",
              reg_name: "Paul",
              reg_email: "info@gmail.org",
            },
            followup: {
              followup_status: [],
            },
            lead_ref_form_id: [],
            crm: {
              category: [
                {
                  _id: "63285f08c90196914f63b57f",
                  name: "Web Design & Development",
                  type: "Services",
                },
              ],
              
              comment: "Already send them the Proposal.",
            },
            lead_source: {
              _id: "635f9a4c90d9db5776c2e52c",
              name: "Client",
            },
            addedby: {
              _id: "6368f83bed6b19dfe6e994e3",
              firstName: "John",
              lastName: "M",
            },
          },
          {
            _id: "6475f49e58551ed56ade72c8",
            date: "2023-08-01",
            time: "16:20:33",
            lead_reg_id: {
              _id: "6475f49e58551ed56ade72c4",
              reg_name: "Anil P",
            },
            followup: {
              status: 0,
              _id: "64c8e379c3809096601fdc50",
              ip: "2409:4042:4e0a:2a4d:fcf4:7bcd:d6:78f4",
              addedby: {
                _id: "635fa39b90d9db5776c2e811",
                firstName: "Vijitha ",
                lastName: "K",
                username: "viji",
              },
              date: "2023-08-01",
              time: "16:20:33",
              followup_status: [
                {
                  _id: "62c7d6597333e58969b3de08",
                  name: "New",
                  color: "#00ccff",
                },
              ],
              comments:
                'Vijith  "Requirement Collection" status changed to "New"',
            },
            lead_ref_form_id: [],
            crm: {
              category: [
                {
                  _id: "63285f08c90196914f63b57f",
                  name: "Web Design & Development",
                  type: "Services",
                },
              ],
              country: 101,
              website: "Hotel website",
              address: "Taliparamba",
            },
            addedby: {
              _id: "635fb1a990d9db5776c2ebea",
              firstName: "Rinsha",
              lastName: " T K ",
            },
            latest_followp_status: {
              _id: "62c7d6597333e58969b3de08",
              name: "New",
              color: "#00ccff",
              order: 1,
            },
          },
          {
            _id: "64b24e97c38090966016a945",
            date: "2023-07-15",
            time: "13:15:27",
            lead_reg_id: {
              _id: "64b24e97c38090966016a941",
              reg_name: "Neeraja",
              reg_email: "neeraj@gmail.com",
            },
            followup: {
              followup_status: [],
            },
            lead_ref_form_id: [],
            crm: {
              category: [
                {
                  _id: "6427f988f20e46947c06f696",
                  name: "Creatives",
                  type: "Services",
                },
              ],
             
            },
            addedby: {
              _id: "6368f83bed6b19dfe6e994e3",
              firstName: "Aiswarya",
              lastName: "M",
            },
          },
          {
            _id: "64afae0453629975382d44f7",
            date: "2023-07-13",
            time: "13:25:48",
            lead_reg_id: {
              _id: "64afae0453629975382d44f3",
              reg_name: "Biji",
            },
            followup: {
              followup_status: [],
            },
            lead_ref_form_id: [],
            crm: {
              category: [
                {
                  _id: "63285f08c90196914f63b57f",
                  name: "Web Design & Development",
                  type: "Services",
                },
              ],
             
              comment:
                "Paid old age home \nsuggested by Sunny (secretary susthira)",
            },
            addedby: {
              _id: "6368f83bed6b19dfe6e994e3",
              firstName: "Joseph",
              lastName: "T",
            },
          },
          {
            _id: "64aea32953629975382cb246",
            date: "2023-07-12",
            time: "18:27:13",
            lead_reg_id: {
              _id: "64aea32953629975382cb242",
              reg_name: "Jassira",
              reg_email: "jassira@gmail.com",
            },
            followup: {
              followup_status: [],
            },
            lead_ref_form_id: [],
            crm: {
              category: [
                {
                  _id: "636f5e50660a442b95866216",
                  name: "Mobile App",
                  type: "Product",
                },
              ],
              country: 101,
              comment:
                "Mobile App Requirement\nTMM Traders\nProducts2 brandsfood items40 products\ncategorybrand\nshop 1000 shopssales addreceiptordersorders to sale optiondelivery updatereturnstockpurchase addsuppliers",
             
            },
            addedby: {
              _id: "6368f83bed6b19dfe6e994e3",
              firstName: "Aiswarya",
              lastName: "M",
            },
          },
          {
            _id: "64ae9c6c53629975382cada7",
            date: "2023-07-12",
            time: "17:58:28",
            lead_reg_id: {
              _id: "645dd92558551ed56ac98466",
              reg_name: "Mohith",
              reg_email: "mohit1@gmail.com",
            },
            followup: {
              followup_status: [],
            },
            lead_ref_form_id: [],
            crm: {
              category: [],
            },
            lead_source: {
              _id: "635f9a0690d9db5776c2e4ff",
              name: "Website",
            },
            addedby: {
              firstName: "Web",
            },
          },
        ],
      },
    ],
  };

  const fetchInfo = () => {
      setEnquiryData(dummyData.data);
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
                        padding: "15px",
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
