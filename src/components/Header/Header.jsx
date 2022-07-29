import React from "react";
import "./Header.css"

export function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-dark header-border-bottom" aria-label="Offcanvas navbar large">
            <div className="container-fluid">
                <a href="#" className="navbar-brand">Samuel Belo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"aria-controls="offcanvasNavbar2">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end text-bg-dark" tabIndex={-1} id="offcanvasNavbar2"aria-labelledby="aria-labelledby">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasNavbar2Label">Samuel Belo</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            <li className="nav-item">
                                <a href="/" className="nav-link" ria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/contact" className="nav-link" ria-current="page">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a href="/about" className="nav-link" ria-current="page">About</a>
                            </li>
                            <li className="nav-item">
                                <select className="">
                                    <option value="pt-br">Português</option>
                                    <option value="en">English</option>
                                </select>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}