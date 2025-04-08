import logo from "/img/logoNav.png"
import group from "/img/Group.png"

export default function Navbar() {
    return (
        <div class="sidebar">
          
            <img src={logo} className="logoNav" />

            <nav class="nav-links">
                <a href="#" class="nav-item active">
                <i class="fa-solid fa-table-columns"></i>
                <span>Dashboard</span>
                </a>
                <a href="#" class="nav-item">
                <i class="fa-regular fa-folder"></i>
                <span>Projects</span>
                </a>
                <a href="#" class="nav-item">
                <i class="fa-solid fa-sitemap"></i>
                <span>Teams</span>
                </a>
                <a href="#" class="nav-item">
                <i class="fa-regular fa-circle"></i>
                <span>Analytics</span>
                </a>
                <a href="#" class="nav-item">
                <i class="fa-regular fa-message"></i>
                <span>Messages</span>
                </a>
                <a href="#" class="nav-item">
                <i class="fa-solid fa-code"></i>
                <span>Integrations</span>
                </a>
            </nav>

            <div class="sidebar-banner">
                <img src={group} alt="Banner" />
                <p class="title">V2.0 is available</p>
                <button class="try-btn">Try now</button>
            </div>
    </div>

    )
}