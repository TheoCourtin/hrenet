import React from "react";
import Table from "../components/table";
import listImg from "../assets/list-employee.png";

const ListEmployee = () => {
  return (
    <main className="employee-list">
      <div className="img-wrapper">
        <img src={listImg} alt="" />
        </div>
        <div className="content-wrapper">
        <h1 className="h1">Employee List</h1>
        <Table />
      </div>
    </main>
  );
};

export default ListEmployee;