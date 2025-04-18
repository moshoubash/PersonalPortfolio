import React from "react";

export default function Projects() {
    return (
        <section class="projects" id="projects">
            <h2>Projects</h2>
            <div class="projects-container">
                <div class="project">
                    <img src="src/material/bloggingsystem.png" alt="Blogging System" class="project-photo"/>
                    <div class="project-content">
                        <div class="top-content">
                            <h3>Blogging System</h3>
                            <p class="project-description">
                                This System is Allowing users write and interact with articles, by using QuillJs we have a great text editor to write articles, and users and can sign in and follow other users, also users have a dashboard to monitor their statistics, Admins in this system can use their dashboard to monitor the system
                            </p>
                        </div>
                        <a href="https://github.com/moshoubash/Blogging-Platform"><i class="fa-brands fa-github"></i> Github Link</a>
                    </div>
                </div>

                <div class="project">
                    <img src="src/material/pchardwaresystem.png" alt="Blogging System" class="project-photo"/>
                    <div class="project-content">
                        <div class="top-content">
                            <h3>Pc Hardware - E-Commerce App</h3>
                            <p class="project-description">Pc Hardware system is an e-commerce system that allow sellers to publish products and monitor orders in their dashboards, and with Stripe payment gateway users can make checkout by put their own payment details.</p>
                        </div>
                        <a href="https://github.com/moshoubash/PcHardwareProject"><i class="fa-brands fa-github"></i> Github Link</a>
                    </div>
                </div>

                <div class="project">
                    <img src="src/material/wms.jpeg" alt="Blogging System" class="project-photo"/>
                    <div class="project-content">
                        <div class="top-content">
                            <h3>Warehouse Management System</h3>
                            <p class="project-description">Warehouse Management System (WMS) is a powerful solution built using ASP.NET Core MVC to improve warehouse operations. Including so many features.</p>
                        </div>
                        <a href="https://github.com/moshoubash/WMS"><i class="fa-brands fa-github"></i> Github Link</a>
                    </div>
                </div>
            </div>
        </section>
    );
}