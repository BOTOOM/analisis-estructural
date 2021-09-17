import React from "react";
import { DataGrid,GridRenderCellParams } from "@mui/x-data-grid";
// import { useDemoData } from '@mui/x-data-grid-generator';

// import {  } from "@material-ui/core/styles";

const TablaElementos = () => {
  // const { data } = useDemoData({
  //     dataSet: 'Commodity',
  //     rowLength: 5,
  //     maxColumns: 6,
  //   });

  return (
    <div style={{ height: 600, width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid rowHeight={200}
            columns={[{ field: "username" }, { field: "age" }, {field: 'ima', renderCell: (params: GridRenderCellParams) => (
                <img src={params.value} />
            ), width: 200}]}
            rows={[
              {
                id: 1,
                username: "@MaterialUI",
                age: 20,
                ima: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/docker/docker.png",
              },
              {
                id: 2,
                username: "@algomas",
                age: 20,
                ima: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default TablaElementos;
