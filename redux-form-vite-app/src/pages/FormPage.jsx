import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addEntry, updateEntry } from '../redux/dataSlice';

const FormPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const entries = useSelector((state) => state.data.entries);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (id) {
      const entry = entries.find((entry) => entry.id === id);
      if (entry) setFormData(entry);
    }
  }, [id, entries]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateEntry({ id, updatedData: formData }));
    } else {
      dispatch(addEntry({ id: Date.now().toString(), ...formData }));
    }
    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h1>{id ? 'Update Entry' : 'Add Entry'}</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">{id ? 'Update' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default FormPage;
