import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "../../constants/constants";
import UseSearch from "../UseSearch/UseSearch";

const DeviceList = () => {
  const [data, setData] = useState();
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const fetchData = async function () {
      const response = await fetch(
        "https://gps.autotracker.group/api/devices",
        {
          headers: {
            Authorization:
              "Bearer RzBFAiEA92qN8JvTQ6BIgvjSTke8iQltj3SJf9vhkqyf5zcuUL4CIF1GRd1vLuSJrzzDqv80AF_BAiF91tCWPMvlhuRNrI0DeyJ1IjozLCJlIjoiMjAyMy0xMi0zMVQyMTowMDowMC4wMDArMDA6MDAifQ",
          },
        }
      );
      let res = await response.json();
      setData(res);
      setRows(() => {
        return res.map((item) => {
          return {
            id: item.id,
            name: item.name,
            uniqueId: item.uniqueId,
            status: item.status,
            lastUpdate: item.lastUpdate,
          };
        });
      });
    };
    fetchData();
  }, []);

  const handlerFilter = function (id) {
    if (id != "") {
      setRows((prev) => prev.filter((item) => item.id == id));
    } else {
      setRows(() => [...data]);
    }
  };

  return (
    <div>
      <div style={{ width: "100%" }}>
        <UseSearch onFilter={handlerFilter} />
        <DataGrid columns={columns} rows={rows} />
      </div>
    </div>
  );
};

export default DeviceList;
