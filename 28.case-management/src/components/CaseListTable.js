/** @format */

import React from "react";

const CaseListTable = ({ cases, customers }) => {
  return (
    <div className='case-list-table card'>
      <div className='card-body'>
        <h4>Overview: Active Cases</h4>
        <div className='list-group'>
          {cases.map((_case) => (
            <a
              key={_case.id}
              href='/#'
              className='list-group-item list-group-item-action'
              aria-current='true'>
              <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>{_case.subject}</h5>
                <small>{_case.created}</small>
              </div>
              <small className='text-muted title-sm-2'>
                {
                  customers.find((x) => x.value == _case.customer).name
                }
              </small>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseListTable;
