import React from "react";
import Table from "./table/Table";
import PieChart from "./piechart/Piechart";

function Content (){
    return (
        <div className="body-container">
            <div className="half-split">
                <div className="custom-table">
                    <Table/>
                </div>
            </div>
            <div className="half-split">
                <div className="custom-pie">
                    <PieChart/>
                </div>
            </div>
        </div>
    )
}

export default Content;