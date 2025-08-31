
import React, { useEffect, useState } from 'react';

function Reports(){
  const [reports, setReports] = useState({});

  useEffect(()=>{
    const savedReports = localStorage.getItem('reports');
    if(savedReports) setReports(JSON.parse(savedReports));
  },[]);

  const addReport = () => {
    const today = new Date().toISOString().split('T')[0];
    const newReports = {...reports, [today]: { totalSales: Math.floor(Math.random()*1000), transactions: Math.floor(Math.random()*20) }};
    setReports(newReports);
    localStorage.setItem('reports', JSON.stringify(newReports));
  };

  return (
    <div className="p-4">
      <h2 className="font-bold mb-4">Reports</h2>
      <button onClick={addReport} className="mb-4 bg-green-500 text-white px-4 py-2">Generate Dummy Report</button>
      <pre>{JSON.stringify(reports,null,2)}</pre>
    </div>
  );
}

export default Reports;
