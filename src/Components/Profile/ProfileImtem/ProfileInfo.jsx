import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
export default function ProfileHeader() {
  return (
    <div className="d-flex flex-column flex-sm-row gap-4">
      <div className="d-flex flex-column justify-content-center align-items-center mx-auto">
        <img
          src="https://th.bing.com/th/id/OIP.MaDrjtmPQGzKiLHrHEPfFAHaHa?rs=1&pid=ImgDetMain"
          alt="Avatar"
          className="rounded-circle mb-3 shadow-4"
          style={{ width: "140px" }}
        />
        <p
          className="mb-2 badge d-flex justify-content-center align-items-center"
          style={{
            width: "90px",
            height: "36px",
            borderRadius: "50px",
            fontSize: "18px",
            backgroundColor: "#046CB8",
            cursor: "pointer",
          }}
        >
          Tripper
        </p>
        <a
          href="/upgradeUser"
          style={{ color: "#046CB8", textDecoration: "underline" }}
        >
          Nâng cấp tài khoản
          <i className="bi bi-arrow-right ms-1"></i>
        </a>
      </div>

      <div className="d-flex flex-column align-items-start gap-2 mx-auto flex-grow-1">
        <div className="d-flex flex-column flex-sm-row gap-4 justify-content-center justify-content-sm-start align-items-center w-100">
          <h3 className="mb-1">
            <strong>Hồ Minh Quân</strong>
          </h3>
          <div className="d-flex gap-4 align-items-center justify-content-center">
            <button
              className="btn btn-sm"
              style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
            >
              <i className="bi bi-pencil-square  mr-2"></i>
              Chỉnh sửa
            </button>
            <button
              className="btn btn-sm"
              style={{ backgroundColor: "#D9D9D9", borderRadius: "10px" }}
            >
              <i className="bi bi-share mr-2"></i>
              Chia sẻ
            </button>
          </div>
        </div>
        <div className="d-flex align-items-center gap-4">
          <h5 className="mb-2 text-muted">
            <strong>@hmquandec05</strong>
          </h5>
        </div>
        <div className="d-flex align-items-center gap-2 gap-sm-4 mb-1">
          <span>
            <strong className="mr-1">100</strong> Followers
          </span>
          <span>
            <strong className="mr-1">50</strong> Following
          </span>
        </div>

        <p className=" mb-0">
          <i>Chưa có tiểu sử</i>
        </p>
      </div>
    </div>
  );
}
