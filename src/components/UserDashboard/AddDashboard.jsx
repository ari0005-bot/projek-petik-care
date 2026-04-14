import React from "react";
import { Link } from "react-router-dom";
import "./AddDashboard.css";

const AddDashboard = () => {

  return (
    <div className="add-dashboard-container">
      {/* Header Banner */}
      <div className="header-banner">
        <div className="banner-background">
          <div className="banner-overlay"></div>
        </div>
        <div className="banner-content">
          <h1>Form Keluhan</h1>
          <div className="medical-banner">
            <div className="banner-text">
              <h2>Medical Future Care</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="form-container">
        <div className="form-header">
          <h2>Formulir Keluhan</h2>
          <p>
            Silakan isi formulir di bawah ini untuk mengajukan keluhan kesehatan
            Anda
          </p>
        </div>

        <form className="complaint-form">
          {/* Keluhan Anda Field */}
          <div className="form-group">
            <label htmlFor="complaint" className="form-label">
              Keluhan Anda <span className="required">*</span>
            </label>
            <textarea
              id="complaint"
              name="complaint"
              placeholder="Isi disini..."
              className="form-textarea"
            />
          </div>

          {/* Masa Sakit Field */}
          <div className="form-group">
            <label htmlFor="illnessDuration" className="form-label">
              Masa Sakit <span className="required">*</span>
            </label>
            <div className="input-with-icon">
              <input
                type="text"
                id="illnessDuration"
                name="illnessDuration"
                placeholder="MM/DD/YY"
                className="form-input"
              />
              <div className="calendar-icon">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
            </div>
          </div>

          {/* Gejala Sakit Field */}
          <div className="form-group">
            <label htmlFor="symptoms" className="form-label">
              Gejala Sakit <span className="required">*</span>
            </label>
            <input
              type="text"
              id="symptoms"
              name="symptoms"
              placeholder="Batuk"
              className="form-input"
            />
          </div>

          {/* Action Buttons */}
          <div className="form-actions">
            <button type="button" className="submit-btn">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
              </svg>
              Kirim Keluhan
            </button>
            <Link to="/dashboard" className="back-btn">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12,19 5,12 12,5"></polyline>
              </svg>
              Kembali
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDashboard;
