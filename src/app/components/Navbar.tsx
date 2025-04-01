// src/app/components/Navbar.tsx
"use client";
import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    return (
        <nav className="navbar">
            <a href="#home" title="Home">
                {/* Home Icon */}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2L2 9h3v9h4v-6h2v6h4V9h3L10 2z" />
                </svg>
            </a>
            <a href="https://www.linkedin.com/in/edward-randall-b206b5197" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                {/* LinkedIn Icon */}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.268c.766-1.137 2.114-1.768 3.5-1.768 2.485 0 4.5 2.015 4.5 4.5v4z" />
                </svg>
            </a>
            <a href="https://github.com/edwrand" title="GitHub" target="_blank" rel="noopener noreferrer">
                {/* GitHub Icon */}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.263.82-.583 0-.287-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.997.108-.775.42-1.305.763-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.235-3.22-.125-.303-.535-1.523.115-3.176 0 0 1.005-.322 3.3 1.23a11.48 11.48 0 013-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.655 1.653.245 2.873.12 3.176.77.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.81 1.102.81 2.222 0 1.606-.015 2.896-.015 3.286 0 .32.215.7.825.58C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
            </a>
            <a href="https://twitter.com/edward_randall" title="Twitter" target="_blank" rel="noopener noreferrer">
                {/* Twitter Icon */}
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.38 4.482A13.945 13.945 0 011.671 3.149 4.916 4.916 0 003.195 9.72a4.9 4.9 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.92 4.92 0 004.6 3.417A9.867 9.867 0 010 19.54a13.924 13.924 0 007.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21-.005-.42-.015-.63A10.012 10.012 0 0024 4.557z" />
                </svg>
            </a>
            <ThemeToggle />
        </nav>
    );
}
