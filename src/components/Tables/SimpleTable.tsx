import React, { useState } from "react";
import chunk from "lodash/chunk";
import { Link } from "react-router-dom";
import "./Tables.scss";

type tableItem = {
  items: Array<any>;
};

type tableItemDetail = {
  id: string;
  name: string;
  popularly: number;
  rate: number;
  level: number;
};

const SimpleTable = (props: tableItem) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = chunk(props.items, 10);

  return (
    <div className="simple-table-container">
      <div className="table-item table-header">
        <div className={"left"}>
          <div>Name</div>
        </div>
        <div className={"right"}>
          <div>Popularly</div>
          <div>Rate</div>
          <div>Level</div>
        </div>
      </div>
      {pages[currentPage - 1].map((item: tableItemDetail) => (
        <div key={item.name} className="table-item">
          <div className={"left"}>
            <Link to={`/challenge/5e45329a39b327402d403457`}>{item.name}</Link>
          </div>
          <div className={"right"}>
            <div>{item.popularly}</div>
            <div>{item.rate}</div>
            <div>{item.level}</div>
          </div>
        </div>
      ))}
      <div className="table-pagination">
        <div className="pages">
          <div
            className="table-btn left"
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          ></div>
          <div>{currentPage - 1 < 1 ? "" : currentPage - 1}</div>
          <div className="current-page"> {currentPage}</div>
          <div>
            {currentPage + 1 <= pages.length ? `${currentPage + 1}` : ""}
          </div>
          <div
            className="table-btn right"
            onClick={() =>
              currentPage < pages.length && setCurrentPage(currentPage + 1)
            }
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SimpleTable;
