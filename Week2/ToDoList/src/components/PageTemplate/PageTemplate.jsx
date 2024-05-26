import React from 'react';
import './PageTemplate.css'

function PageTemplate({ children }){
  return (
    <div className="page-template">
      <div className="header">
        <h1>UMC Study Plan</h1>
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default PageTemplate;