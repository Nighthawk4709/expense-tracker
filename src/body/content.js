import React from "react";
import Table from "./table/Table";
import Form from "./table/Form";
// import PieChart from "./piechart/Piechart";

function Content (){
    return (
        <div className="body-container">
            <div className="half">
                <Form/>
            </div>
            <div className="half">
                <Table/>
            </div>
            {/* <div className="half">
            <div className="custom-pie">
                <PieChart/>
                </div>
            </div> */}
        </div>
    )
}

export default Content;