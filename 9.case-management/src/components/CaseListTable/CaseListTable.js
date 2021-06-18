/** @format */

import React from "react";

function CaseListTable({ cases, customers }) {
  return (
    <div className='card shadow'>
      <div className='card-body'>
        <div className='list-group'>
          {cases.map((_case) => (
            <a
              key={_case.id}
              href='/#'
              className='list-group-item list-group-item-action '
              aria-current='true'>
              <div className='d-flex w-100 justify-content-between'>
                <h5 className='mb-1'>{_case.subject}</h5>
                <small>{_case.created}</small>
              </div>

              <small>
                {customers.find((x) => x.id == _case.customer).name}
              </small>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseListTable;
