import "../styles/new.css"

import React, { useState, useEffect } from 'react';

export default function NewRequest() {
  const [partNumber, setPartNumber] = useState('');
  const [department, setDepartment] = useState('');
  const [date, setDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [requests, setRequests] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {

    setDate(new Date().toISOString().split('T')[0]);
  }, []);


  const handleAddItem = (e) => {
    e.preventDefault();
    if (editingIndex === null) {
      setRequests([
        ...requests,
        { partNumber, department, date, quantity }
      ]);
    } else {
      const updatedRequests = [...requests];
      updatedRequests[editingIndex] = { partNumber, department, date, quantity };
      setRequests(updatedRequests);
      setEditingIndex(null);
    }
    setPartNumber('');
    setDate(new Date().toISOString().split('T')[0]);
    setQuantity('');
  };

  const handleSubmitAll = (e) => {
    e.preventDefault();
    alert('Requests Submitted');
  };

  const startEditing = (index) => {
    setPartNumber(requests[index].partNumber);
    setDepartment(requests[index].department);
    setDate(requests[index].date);
    setQuantity(requests[index].quantity);
    setEditingIndex(index);
  };

  return (
    <div className="page-container">
      <div className="navbar">
        <button className="add-button">
          Active Requests
        </button>
        <form onSubmit={handleAddItem} className="form-inline">
          <label className="label" htmlFor="part-number">Part Number:</label>
          <input 
            className="input-text" 
            type="text" 
            id="part-number" 
            name="part-number" 
            value={partNumber} 
            onChange={(e) => setPartNumber(e.target.value)} 
            required 
          />

          <label className="label" htmlFor="department">Department:</label>
          <select 
            className="select" 
            id="department" 
            name="department" 
            value={department} 
            onChange={(e) => setDepartment(e.target.value)} 
            required
          >
            <option value="">Select Department</option>
            <option value="hardware">Hardware</option>
            <option value="motor">Motor</option>
            <option value="assembly">Assembly</option>
          </select>

          <label className="label" htmlFor="date">Date:</label>
          <input 
            className="input-date" 
            type="date" 
            id="date" 
            name="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />

          <label className="label" htmlFor="quantity">Quantity:</label>
          <input 
            className="input-number" 
            type="number" 
            id="quantity" 
            name="quantity" 
            value={quantity} 
            onChange={(e) => setQuantity(e.target.value)} 
            required 
            min="1"
          />

          <button className="add-button" type="submit">
            {editingIndex === null ? 'Add Item' : 'Save Changes'}
          </button>
        </form>
      </div>

      <div className="requests-list-container">
        <h3 className="list-title">Submitted Requests</h3>
        <div className="requests-list">
          <ul className="request-items">
            {requests.slice().reverse().map((request, index) => (
              <li key={index} className="request-item">
                <div className="line-item">
                  <strong>Part Number:</strong> {request.partNumber} <br />
                  <strong>Department:</strong> {request.department} <br />
                  <strong>Date:</strong> {request.date} <br />
                  <strong>Quantity:</strong> {request.quantity}
                </div>
                <button onClick={() => startEditing(index)} className="edit-button">
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
        <button onClick={handleSubmitAll} className="submit-button">
          Submit All Requests
        </button>
      </div>
    </div>
  );
}
