import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./UserDashboard.css";
import "./UserDashboard-resp.css";
import { TiArrowBack } from "react-icons/ti";
import { MdOutlineRefresh } from "react-icons/md";
import { FaBookMedical } from "react-icons/fa";
import { FiHome, FiUsers, FiPaperclip, FiSettings } from "react-icons/fi";

const UserDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedComplaint, setSelectedComplaint] = useState(null);
  const [currentUser] = useState({
    id: 1,
    name: "Ahmad Santri",
    email: "ahmad.santri@pesantren.com",
  });

  useEffect(() => {
    fetchComplaints();
  }, []);

  const fetchComplaints = async () => {
    try {
      setLoading(true);
      setError(null);
      

      setComplaints([]);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching complaints:", err);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "pending":
        return <span className="status-badge pending">Menunggu</span>;
      case "in_progress":
        return <span className="status-badge in-progress">Diproses</span>;
      case "completed":
        return <span className="status-badge completed">Selesai</span>;
      case "rejected":
        return <span className="status-badge rejected">Ditolak</span>;
      default:
        return <span className="status-badge unknown">Tidak Diketahui</span>;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleViewComplaint = (complaint) => {
    setSelectedComplaint(complaint);
  };

  const handleCloseModal = () => {
    setSelectedComplaint(null);
  };

  if (loading) {
    return (
      <div className="dashboard-container">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Memuat data keluhan...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="dashboard-container">
        <div className="error-container">
          <div className="error-icon">?</div>
          <h3>Terjadi Kesalahan</h3>
          <p>{error}</p>
          <button onClick={fetchComplaints} className="retry-btn">
            Coba Lagi
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h3>Menu</h3>
        </div>
        <nav className="sidebar-nav">
          <NavLink to="/dashboard" className="sidebar-btn" end>
            <FiHome />
            <span>Home</span>
          </NavLink>
          <NavLink to="/dashboard/users" className="sidebar-btn">
            <FiUsers />
            <span>Pengguna</span>
          </NavLink>
          <NavLink to="/dashboard/add" className="sidebar-btn">
            <FiPaperclip />
            <span>Tambah Keluhan</span>
          </NavLink>
          <NavLink to="/dashboard/settings" className="sidebar-btn">
            <FiSettings />
            <span>Pengaturan</span>
          </NavLink>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="dashboard-header">
          <div className="header-top">
            <Link to="/" className="back-btn">
              <TiArrowBack /> Kembali ke Beranda
            </Link>
          </div>
          <h1>Dashboard Santri</h1>
          <div className="user-info">
            <div className="welcome-card">
              <h2>Selamat Datang, {currentUser.name}!</h2>
              <p>Kelola kesehatan Anda dengan mudah</p>
            </div>
          </div>
        </div>

      {/* Complaints Section */}
      <div className="complaints-section">
        <div className="section-header">
          <h2>Riwayat Keluhan Saya</h2>
          <div className="complaint-stats">
            <div className="stat-item">
              <span className="stat-value">{complaints.length}</span>
              <span className="stat-label">Total Keluhan</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">
                {complaints.filter((c) => c.status === "pending").length}
              </span>
              <span className="stat-label">Menunggu</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">
                {complaints.filter((c) => c.status === "completed").length}
              </span>
              <span className="stat-label">Selesai</span>
            </div>
          </div>
        </div>
        <div className="table-container">
          <table className="complaints-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Keluhan</th>
                <th>Status</th>
                <th>Tanggal</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id}>
                  <td>{complaint.id}</td>
                  <td>
                    <div className="complaint-text">
                      {complaint.complaint
                        ? complaint.complaint.substring(0, 80) + "..."
                        : "-"}
                    </div>
                  </td>
                  <td>{getStatusBadge(complaint.status)}</td>
                  <td>{formatDate(complaint.created_at)}</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn-view"
                        onClick={() => handleViewComplaint(complaint)}
                      >
                        Lihat Detail
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-section">
        <NavLink to={"/dashboard/add"} className="add-complaint-btn">
          <FaBookMedical />
          Ajukan Keluhan
        </NavLink>
        <button onClick={fetchComplaints} className="refresh-btn">
          <MdOutlineRefresh />
          Refresh Data
        </button>
      </div>

        {/* Complaint Detail Modal */}
        {selectedComplaint && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2>Detail Keluhan</h2>
                <button className="close-btn" onClick={handleCloseModal}>
                  ×
                </button>
              </div>
              <div className="modal-body">
                <div className="detail-section">
                  <h3>Informasi Santri</h3>
                  <div className="detail-grid">
                    <div className="detail-item">
                      <label>Nama:</label>
                      <span>{selectedComplaint.name}</span>
                    </div>
                    <div className="detail-item">
                      <label>Email:</label>
                      <span>{selectedComplaint.email}</span>
                    </div>
                    <div className="detail-item">
                      <label>No. Telepon:</label>
                      <span>{selectedComplaint.phone || "-"}</span>
                    </div>
                    <div className="detail-item">
                      <label>Alamat:</label>
                      <span>{selectedComplaint.address || "-"}</span>
                    </div>
                  </div>
                </div>
                <div className="detail-section">
                  <h3>Detail Keluhan</h3>
                  <div className="complaint-detail">
                    <p>{selectedComplaint.complaint}</p>
                  </div>
                </div>
                <div className="detail-section">
                  <h3>Status</h3>
                  <div className="status-detail">
                    {getStatusBadge(selectedComplaint.status)}
                  </div>
                </div>
                <div className="detail-section">
                  <h3>Tanggal Pengajuan</h3>
                  <p>{formatDate(selectedComplaint.created_at)}</p>
                </div>
              </div>
              <div className="modal-footer">
                <button className="close-modal-btn" onClick={handleCloseModal}>
                  Tutup
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
