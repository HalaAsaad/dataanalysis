import "./App.css";
import React, { useState } from "react";
import { Card } from "primereact/card";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Papa from "papaparse";
import { Galleria } from "primereact//galleria";

import { Fieldset } from "primereact/fieldset";

import Tot_Revenue_Generated_img from "./Images/total-revenue-generated-plot-for-each-month.png";
import Tot_Units_Sold_img from "./Images/total-units-sold-plot-for-each-month.png";
import Ave_Price_Per_Unit_img from "./Images/average-price-per-unit-polt-for-each-month.png";

function App() {
  const [images, setImages] = useState(null);
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 5,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
    },
  ];
  const itemTemplate = (item) => {
    return (
      <img
        src={item.itemImageSrc}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        alt={item.alt}
        style={{ width: "100%", display: "block" }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        onError={(e) =>
          (e.target.src =
            "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png")
        }
        width={"200px"}
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };

  const caption = (item) => {
    return (
      <React.Fragment>
        <h3>{item.title}</h3>
      </React.Fragment>
    );
  };
  const DataForEachProduct = [
    {
      Tot_Revenue_Generated: "2968546.40",
      Tot_Units_Sold: "33992",
      Ave_Price_Per_Unit: "87.0",
      Tot_Num_Of_Orders: "967",
      Name: "Classic Cars",
      Rank: 6.75,
    },
    {
      Tot_Revenue_Generated: "971086.29",
      Tot_Units_Sold: "11663",
      Ave_Price_Per_Unit: "83.0",
      Tot_Num_Of_Orders: "331",
      Name: "Motorcycles",
      Rank: 4.75,
    },
    {
      Tot_Revenue_Generated: "877942.21",
      Tot_Units_Sold: "10727",
      Ave_Price_Per_Unit: "82.0",
      Tot_Num_Of_Orders: "306",
      Name: "Planes",
      Rank: 3.25,
    },
    {
      Tot_Revenue_Generated: "677940.40",
      Tot_Units_Sold: "8127",
      Ave_Price_Per_Unit: "84.0",
      Tot_Num_Of_Orders: "234",
      Name: "Ships",
      Rank: 2.75,
    },
    {
      Tot_Revenue_Generated: "203804.26",
      Tot_Units_Sold: "2712",
      Ave_Price_Per_Unit: "76.0",
      Tot_Num_Of_Orders: "77",
      Name: "Trains",
      Rank: 1.0,
    },
    {
      Tot_Revenue_Generated: "947355.18",
      Tot_Units_Sold: "10777",
      Ave_Price_Per_Unit: "88.0",
      Tot_Num_Of_Orders: "301",
      Name: "Trucks and Buses",
      Rank: 4.5,
    },
    {
      Tot_Revenue_Generated: "1644212.05",
      Tot_Units_Sold: "21069",
      Ave_Price_Per_Unit: "78.0",
      Tot_Num_Of_Orders: "607",
      Name: "Vintage Cars",
      Rank: 5.0,
    },
  ];
  const DataForEachMonth = [
    {
      Tot_Revenue_Generated: "107885.96",
      Tot_Units_Sold: "1357",
      Ave_Price_Per_Unit: "82.13615384615385",
      Name: "2003-01",
    },
    {
      Tot_Revenue_Generated: "120036.8",
      Tot_Units_Sold: "1449",
      Ave_Price_Per_Unit: "83.94024390243904",
      Name: "2003-02",
    },
    {
      Tot_Revenue_Generated: "144096.23",
      Tot_Units_Sold: "1755",
      Ave_Price_Per_Unit: "81.7334",
      Name: "2003-03",
    },
    {
      Tot_Revenue_Generated: "169421.03",
      Tot_Units_Sold: "1993",
      Ave_Price_Per_Unit: "84.91568965517243",
      Name: "2003-04",
    },
    {
      Tot_Revenue_Generated: "163654.12",
      Tot_Units_Sold: "2017",
      Ave_Price_Per_Unit: "81.95120689655172",
      Name: "2003-05",
    },
    {
      Tot_Revenue_Generated: "139552.84",
      Tot_Units_Sold: "1649",
      Ave_Price_Per_Unit: "84.33326086956522",
      Name: "2003-06",
    },
    {
      Tot_Revenue_Generated: "149869.73",
      Tot_Units_Sold: "1725",
      Ave_Price_Per_Unit: "86.20819999999999",
      Name: "2003-07",
    },
    {
      Tot_Revenue_Generated: "166026.32",
      Tot_Units_Sold: "1974",
      Ave_Price_Per_Unit: "83.21137931034481",
      Name: "2003-08",
    },
    {
      Tot_Revenue_Generated: "211045.86",
      Tot_Units_Sold: "2510",
      Ave_Price_Per_Unit: "84.30697368421052",
      Name: "2003-09",
    },
    {
      Tot_Revenue_Generated: "466240.57",
      Tot_Units_Sold: "5515",
      Ave_Price_Per_Unit: "84.60164556962025",
      Name: "2003-10",
    },
    {
      Tot_Revenue_Generated: "850203.27",
      Tot_Units_Sold: "10179",
      Ave_Price_Per_Unit: "83.50638513513513",
      Name: "2003-11",
    },
    {
      Tot_Revenue_Generated: "210117.21",
      Tot_Units_Sold: "2489",
      Ave_Price_Per_Unit: "83.9292857142857",
      Name: "2003-12",
    },
    {
      Tot_Revenue_Generated: "268015.87",
      Tot_Units_Sold: "3245",
      Ave_Price_Per_Unit: "83.25714285714285",
      Name: "2004-01",
    },
    {
      Tot_Revenue_Generated: "258389.05",
      Tot_Units_Sold: "3061",
      Ave_Price_Per_Unit: "83.98511627906976",
      Name: "2004-02",
    },
    {
      Tot_Revenue_Generated: "166958.56",
      Tot_Units_Sold: "1978",
      Ave_Price_Per_Unit: "83.69624999999999",
      Name: "2004-03",
    },
    {
      Tot_Revenue_Generated: "172935.8",
      Tot_Units_Sold: "2077",
      Ave_Price_Per_Unit: "82.529375",
      Name: "2004-04",
    },
    {
      Tot_Revenue_Generated: "220815.14",
      Tot_Units_Sold: "2618",
      Ave_Price_Per_Unit: "84.9045945945946",
      Name: "2004-05",
    },
    {
      Tot_Revenue_Generated: "245190.75",
      Tot_Units_Sold: "2971",
      Ave_Price_Per_Unit: "82.28447058823528",
      Name: "2004-06",
    },
    {
      Tot_Revenue_Generated: "271103.61",
      Tot_Units_Sold: "3174",
      Ave_Price_Per_Unit: "85.6632967032967",
      Name: "2004-07",
    },
    {
      Tot_Revenue_Generated: "386106.59",
      Tot_Units_Sold: "4564",
      Ave_Price_Per_Unit: "83.81842105263156",
      Name: "2004-08",
    },
    {
      Tot_Revenue_Generated: "263854.26",
      Tot_Units_Sold: "3171",
      Ave_Price_Per_Unit: "82.84789473684211",
      Name: "2004-09",
    },
    {
      Tot_Revenue_Generated: "452796.13",
      Tot_Units_Sold: "5483",
      Ave_Price_Per_Unit: "83.30918238993709",
      Name: "2004-10",
    },
    {
      Tot_Revenue_Generated: "894479.18",
      Tot_Units_Sold: "10678",
      Ave_Price_Per_Unit: "83.96192691029901",
      Name: "2004-11",
    },
    {
      Tot_Revenue_Generated: "313055.93",
      Tot_Units_Sold: "3804",
      Ave_Price_Per_Unit: "82.82300000000001",
      Name: "2004-12",
    },
    {
      Tot_Revenue_Generated: "283680.46",
      Tot_Units_Sold: "3395",
      Ave_Price_Per_Unit: "84.16232323232323",
      Name: "2005-01",
    },
    {
      Tot_Revenue_Generated: "289902.3",
      Tot_Units_Sold: "3393",
      Ave_Price_Per_Unit: "84.9301030927835",
      Name: "2005-02",
    },
    {
      Tot_Revenue_Generated: "315131.94",
      Tot_Units_Sold: "3852",
      Ave_Price_Per_Unit: "81.68820754716982",
      Name: "2005-03",
    },
    {
      Tot_Revenue_Generated: "217977.63",
      Tot_Units_Sold: "2634",
      Ave_Price_Per_Unit: "81.36232142857143",
      Name: "2005-04",
    },
    {
      Tot_Revenue_Generated: "372343.65",
      Tot_Units_Sold: "4357",
      Ave_Price_Per_Unit: "84.1775",
      Name: "2005-05",
    },
  ];
  const columns_dataProd = [
    { field: "Name", header: "Product" },
    { field: "Tot_Revenue_Generated", header: "Total revenue generated" },
    { field: "Tot_Units_Sold", header: "Total units sold" },
    { field: "Ave_Price_Per_Unit", header: "Average price per unit" },
    { field: "Tot_Num_Of_Orders", header: "Total number of orders" },
  ];
  const rank_columns = [
    { field: "Name", header: "Product" },
    {
      field: "Tot_Revenue_Generated_Rank",
      header: "Total revenue generated Rank",
    },
    { field: "Tot_Units_Sold_Rank", header: "Total units sold Rank" },
    { field: "Ave_Price_Per_Unit_Rank", header: "Average price per unit Rank" },
    { field: "Tot_Num_Of_Orders_Rank", header: "Total number of orders Rank" },
    { field: "Rank", header: "Mean Rank" },
  ];
  const columns_dataMonth = [
    { field: "Name", header: "Month" },
    { field: "Tot_Revenue_Generated", header: "Total revenue generated" },
    { field: "Tot_Units_Sold", header: "Total units sold" },
    { field: "Ave_Price_Per_Unit", header: "Average price per unit" },
  ];
  const [parsedData, setParsedData] = useState([]);

  //State to store table Column name
  const [tableRows, setTableRows] = useState([]);

  //State to store the values
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    // Passing file data (event.target.files[0]) to parse using Papa.parse
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = [];
        const valuesArray = [];

        // Iterating data to get column name and their values
        results.data.map((d) => {
          rowsArray.push(Object.keys(d));
          valuesArray.push(Object.values(d));
        });

        // Parsed Data Response in array format
        setParsedData(results.data);

        // Filtered Column Names
        setTableRows(rowsArray[0]);

        // Filtered Values
        setValues(valuesArray);
      },
    });
  };
  console.log("ParsedData", parsedData);
  const legendTemplate = (title, icon) => (
    <div className="flex align-items-center text-primary">
      <span className={`pi ${icon} mr-2`}></span>
      <span className="font-bold text-lg">&nbsp; {title}</span>
    </div>
  );
  return (
    <div className="App" style={{ padding: "15px" }}>
      <Card title="Homework Assignment: Data Analysis Using Python">
        <Fieldset
          legend={legendTemplate("Results for each product", "pi-car")}
          toggleable
          collapsed={true}
        >
          <ul>
            <li>Total revenue generated.</li>
            <li>Total units sold</li>
            <li>Average price per unit.</li>
            <li>Total number of orders.</li>
            <li>
              Rank the products based on these metrics and provide
              recommendations on which products the company should focus on
              selling more
            </li>
          </ul>
          {/* <input
            type="file"
            name="file"
            onChange={changeHandler}
            accept=".csv"
            style={{ display: "block", margin: "10px auto" }}
          /> */}
          <DataTable
            value={DataForEachProduct}
            tableStyle={{ minWidth: "50rem" }}
            size="small"
            stripedRows
          >
            {columns_dataProd.map((col, i) => (
              <Column key={col.field} field={col.field} header={col.header} />
            ))}
          </DataTable>
        </Fieldset>
        <br />
        <Fieldset
          legend={legendTemplate("Results for each month:", "pi-calendar")}
          toggleable
          collapsed={true}
        >
          <ul>
            <li>Total revenue generated.</li>
            <li>Total units sold</li>
            <li>Average price per unit.</li>
          </ul>
          <DataTable
            value={DataForEachMonth}
            tableStyle={{ minWidth: "50rem" }}
            paginator
            rows={10}
            size="small"
            stripedRows
          >
            {columns_dataMonth.map((col, i) => (
              <Column key={col.field} field={col.field} header={col.header} />
            ))}
          </DataTable>
          <Galleria
            style={{ width: "70%" }}
            value={[
              {
                itemImageSrc: Tot_Revenue_Generated_img,
                thumbnailImageSrc: Tot_Revenue_Generated_img,
                alt: "Total revenue generated",
                title: "Total revenue generated",
              },
              {
                itemImageSrc: Tot_Units_Sold_img,
                thumbnailImageSrc: Tot_Units_Sold_img,
                alt: "Total units sold",
                title: "Total units sold",
              },
              {
                itemImageSrc: Ave_Price_Per_Unit_img,
                thumbnailImageSrc: Ave_Price_Per_Unit_img,
                alt: "Average price per unit",
                title: "Average price per unit",
              },
            ]}
            responsiveOptions={responsiveOptions}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
            caption={caption}
            showItemNavigator
            showItemNavigatorsOnHover
          />
        </Fieldset>
        <br />
        <Fieldset
          legend={legendTemplate(
            "Top 5 cities  where the company has the highest sales",
            "pi-shopping-cart"
          )}
          toggleable
          collapsed={true}
        >
          <div class="grid">
            {[
              { city: "Madrid", orders: 10958 },
              { city: "San Rafael", orders: 6366 },
              { city: "NYC", orders: 5294 },
              { city: "Singapore", orders: 2760 },
              { city: "Paris", orders: 2521 },
            ].map((val, i) => (
              <div key={i} className="col-12 font-bold">
                <div className="grid">
                  <div className="col-2">
                    <span>{val?.city}</span>
                  </div>
                  <div className="col-2">
                    <span>{val?.orders}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fieldset>
      </Card>
    </div>
  );
}

export default App;
