import React, { useState } from "react";
import { OutlinedInput } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const UseSearch = (props) => {
  const [value, setValue] = useState("");
  const [data, setData] = useState({
    id: 10,
    name: "postTest",
    uniqueId: 111111,
    status: "item.status",
    lastUpdate: new Date(),
  });

  const postData = async function (data) {
    try {
      //В задании небыло API для post запроса, поэтому выдумал "https://gps.autotracker.group/api/devices/post"
      const response = await fetch(
        "https://gps.autotracker.group/api/devices/post",
        {
          body: JSON.stringify(data),
        }
      );
    } catch (error) {
      alert(`Ошибка: "Нет прав на запрашиваемую операцию"`);
    }
  };

  return (
    <Box
      sx={{
        margin: "20px 10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <OutlinedInput
        placeholder='Поиск по ID'
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          props.onFilter(e.target.value);
        }}
      />
      <Button
        color='success'
        variant='contained'
        onClick={() => {
          postData(data);
        }}
      >
        Добавить запись
      </Button>
    </Box>
  );
};

export default UseSearch;
