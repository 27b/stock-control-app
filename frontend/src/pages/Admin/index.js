import React from 'react';

const AdminIndex = () => {
    return (
        <div className="page-flex">

        <aside className="sidebar">
            <div className="sidebar-start">
                <div className="sidebar-head">
                    <a href="/" className="logo-wrapper" title="Home">
                        <span className="sr-only">Home</span>
                        <div className="logo-text">
                            <span className="logo-title">Admin Panel</span>
                            <span className="logo-subtitle">Inventory Management</span>
                        </div>
                    </a>
                    <button className="sidebar-toggle transparent-btn" title="Menu" type="button">
                        <span className="sr-only">Toggle menu</span>
                        <span className="icon menu-toggle" aria-hidden="true"></span>
                    </button>
                </div>
                <div className="sidebar-body">
                    <ul className="sidebar-body-menu">
                        <li>
                            <a className="active" href="/"><span className="icon home" aria-hidden="true"></span>Dashboard</a>
                        </li>
                        <li>
                            <a className="show-cat-btn" href="##">
                                <span className="icon document" aria-hidden="true"></span>Posts
                                <span className="category__btn transparent-btn" title="Open list">
                                    <span className="sr-only">Open list</span>
                                    <span className="icon arrow-down" aria-hidden="true"></span>
                                </span>
                            </a>
                            <ul className="cat-sub-menu">
                                <li>
                                    <a href="posts.html">All Posts</a>
                                </li>
                                <li>
                                    <a href="new-post.html">Add new post</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="show-cat-btn" href="##">
                                <span className="icon folder" aria-hidden="true"></span>Categories
                                <span className="category__btn transparent-btn" title="Open list">
                                    <span className="sr-only">Open list</span>
                                    <span className="icon arrow-down" aria-hidden="true"></span>
                                </span>
                            </a>
                            <ul className="cat-sub-menu">
                                <li>
                                    <a href="categories.html">All categories</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="show-cat-btn" href="##">
                                <span className="icon image" aria-hidden="true"></span>Media
                                <span className="category__btn transparent-btn" title="Open list">
                                    <span className="sr-only">Open list</span>
                                    <span className="icon arrow-down" aria-hidden="true"></span>
                                </span>
                            </a>
                            <ul className="cat-sub-menu">
                                <li>
                                    <a href="media-01.html">Media-01</a>
                                </li>
                                <li>
                                    <a href="media-02.html">Media-02</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="show-cat-btn" href="##">
                                <span className="icon paper" aria-hidden="true"></span>Pages
                                <span className="category__btn transparent-btn" title="Open list">
                                    <span className="sr-only">Open list</span>
                                    <span className="icon arrow-down" aria-hidden="true"></span>
                                </span>
                            </a>
                            <ul className="cat-sub-menu">
                                <li>
                                    <a href="pages.html">All pages</a>
                                </li>
                                <li>
                                    <a href="new-page.html">Add new page</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="comments.html">
                                <span className="icon message" aria-hidden="true"></span>
                                Comments
                            </a>
                            <span className="msg-counter">7</span>
                        </li>
                    </ul>
                    <span className="system-menu__title">system</span>
                    <ul className="sidebar-body-menu">
                        <li>
                            <a href="appearance.html"><span className="icon edit" aria-hidden="true"></span>Appearance</a>
                        </li>
                        <li>
                            <a className="show-cat-btn" href="##">
                                <span className="icon category" aria-hidden="true"></span>Extentions
                                <span className="category__btn transparent-btn" title="Open list">
                                    <span className="sr-only">Open list</span>
                                    <span className="icon arrow-down" aria-hidden="true"></span>
                                </span>
                            </a>
                            <ul className="cat-sub-menu">
                                <li>
                                    <a href="extention-01.html">Extentions-01</a>
                                </li>
                                 <li>
                                    <a href="extention-02.html">Extentions-02</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a className="show-cat-btn" href="##">
                                <span className="icon user-3" aria-hidden="true"></span>Users
                                <span className="category__btn transparent-btn" title="Open list">
                                    <span className="sr-only">Open list</span>
                                    <span className="icon arrow-down" aria-hidden="true"></span>
                                </span>
                            </a>
                            <ul className="cat-sub-menu">
                                <li>
                                    <a href="users-01.html">Users-01</a>
                                </li>
                                <li>
                                    <a href="users-02.html">Users-02</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="##"><span className="icon setting" aria-hidden="true"></span>Settings</a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
        <div className="main-wrapper">

            <nav className="main-nav--bg">
                <div className="container main-nav">
                    <div className="main-nav-start">
                        <div className="search-wrapper">
                            <i data-feather="search" aria-hidden="true"></i>
                            <input type="text" placeholder="Enter keywords ..." required />
                        </div>
                    </div>
                    <div className="main-nav-end">
                        <button className="sidebar-toggle transparent-btn" title="Menu" type="button">
                            <span className="sr-only">Toggle menu</span>
                            <span className="icon menu-toggle--gray" aria-hidden="true"></span>
                        </button>
                        <div className="lang-switcher-wrapper">
                            <button className="lang-switcher transparent-btn" type="button">
                                EN
                                <i data-feather="chevron-down" aria-hidden="true"></i>
                            </button>
                            <ul className="lang-menu dropdown">
                                <li><a href="##">English</a></li>
                                <li><a href="##">French</a></li>
                                <li><a href="##">Uzbek</a></li>
                            </ul>
                        </div>
                        <button className="theme-switcher gray-circle-btn" type="button" title="Switch theme">
                            <span className="sr-only">Switch theme</span>
                            <i className="sun-icon" data-feather="sun" aria-hidden="true"></i>
                            <i className="moon-icon" data-feather="moon" aria-hidden="true"></i>
                        </button>
                        <div className="notification-wrapper">
                            <button className="gray-circle-btn dropdown-btn" title="To messages" type="button">
                                <span className="sr-only">To messages</span>
                                <span className="icon notification active" aria-hidden="true"></span>
                            </button>
                            <ul className="users-item-dropdown notification-dropdown dropdown">
                                <li>
                                    <a href="##">
                                        <div className="notification-dropdown-icon info">
                                            <i data-feather="check"></i>
                                        </div>
                                        <div className="notification-dropdown-text">
                                            <span className="notification-dropdown__title">System just updated</span>
                                            <span className="notification-dropdown__subtitle">The system has been successfully upgraded. Read more here.</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        <div className="notification-dropdown-icon danger">
                                            <i data-feather="info" aria-hidden="true"></i>
                                        </div>
                                        <div className="notification-dropdown-text">
                                            <span className="notification-dropdown__title">The cache is full!</span>
                                            <span className="notification-dropdown__subtitle">Unnecessary caches take up a lot of memory space and interfere ...</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        <div className="notification-dropdown-icon info">
                                            <i data-feather="check" aria-hidden="true"></i>
                                        </div>
                                        <div className="notification-dropdown-text">
                                            <span className="notification-dropdown__title">New Subscriber here!</span>
                                            <span className="notification-dropdown__subtitle">A new subscriber has subscribed.</span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a className="link-to-page" href="##">Go to Notifications page</a>
                                </li>
                            </ul>
                        </div>
                        <div className="nav-user-wrapper">
                            <button href="##" className="nav-user-btn dropdown-btn" title="My profile" type="button">
                                <span className="sr-only">My profile</span>
                                <span className="nav-user-img">
                                    <picture>
                                        <source srcSet="./img/avatar/avatar-illustrated-02.webp" type="image/webp" />
                                        <img src="./img/avatar/avatar-illustrated-02.png" alt="User name" />
                                    </picture>
                                </span>
                            </button>
                            <ul className="users-item-dropdown nav-user-dropdown dropdown">
                                <li>
                                    <a href="##">
                                        <i data-feather="user" aria-hidden="true"></i>
                                        <span>Profile</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="##">
                                        <i data-feather="settings" aria-hidden="true"></i>
                                        <span>Account settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="danger" href="##">
                                        <i data-feather="log-out" aria-hidden="true"></i>
                                        <span>Log out</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <main className="main users chart-page" id="skip-target">
                <div className="container">
                    <h2 className="main-title">Dashboard</h2>
                    <div className="row stat-cards">
                        <div className="col-md-6 col-xl-3">
                            <article className="stat-cards-item">
                                <div className="stat-cards-icon primary">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bar-chart-2" aria-hidden="true">
                                        <line x1="18" y1="20" x2="18" y2="10"></line>
                                        <line x1="12" y1="20" x2="12" y2="4"></line>
                                        <line x1="6" y1="20" x2="6" y2="14"></line>
                                    </svg>
                                </div>
                                <div className="stat-cards-info">
                                    <p className="stat-cards-info__num">1478 286</p>
                                    <p className="stat-cards-info__title">Total visits</p>
                                    <p className="stat-cards-info__progress">
                                        <span className="stat-cards-info__profit success">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trending-up" aria-hidden="true" >
                                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                                <polyline points="17 6 23 6 23 12"></polyline>
                                            </svg>
                                            4.07%
                                        </span> Last month
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <article className="stat-cards-item">
                                <div className="stat-cards-icon warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file" aria-hidden="true">
                                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                        <polyline points="13 2 13 9 20 9"></polyline>
                                    </svg>
                                </div>
                                <div className="stat-cards-info">
                                    <p className="stat-cards-info__num">1478 286</p>
                                    <p className="stat-cards-info__title">Total visits</p>
                                    <p className="stat-cards-info__progress">
                                        <span className="stat-cards-info__profit success">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trending-up" aria-hidden="true">
                                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                                <polyline points="17 6 23 6 23 12"></polyline>
                                            </svg>
                                            0.24%
                                        </span> Last month
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <article className="stat-cards-item">
                                <div className="stat-cards-icon purple">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file" aria-hidden="true">
                                        <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                        <polyline points="13 2 13 9 20 9"></polyline>
                                    </svg>
                                </div>
                                <div className="stat-cards-info">
                                    <p className="stat-cards-info__num">1478 286</p>
                                    <p className="stat-cards-info__title">Total visits</p>
                                    <p className="stat-cards-info__progress">
                                        <span className="stat-cards-info__profit danger">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trending-down" aria-hidden="true" >
                                                <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
                                                <polyline points="17 18 23 18 23 12"></polyline>
                                            </svg>
                                            1.64%
                                        </span> Last month
                                    </p>
                                </div>
                            </article>
                        </div>
                        <div className="col-md-6 col-xl-3">
                            <article className="stat-cards-item">
                                <div className="stat-cards-icon success">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-feather" aria-hidden="true">
                                        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                                        <line x1="16" y1="8" x2="2" y2="22"></line>
                                        <line x1="17.5" y1="15" x2="9" y2="15"></line>
                                    </svg>
                                </div>
                                <div className="stat-cards-info">
                                    <p className="stat-cards-info__num">1478 286</p>
                                    <p className="stat-cards-info__title">Total visits</p>
                                    <p className="stat-cards-info__progress">
                                        <span className="stat-cards-info__profit warning">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-trending-up" aria-hidden="true">
                                                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                                <polyline points="17 6 23 6 23 12"></polyline>
                                            </svg>
                                            0.00%
                                        </span> Last month
                                    </p>
                                </div>
                            </article>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="users-table table-wrapper">
                                <table className="posts-table">
                                    <thead>
                                        <tr className="users-table-info">
                                            <th>
                                                <label className="users-table__checkbox ms-20"> <input type="checkbox" className="check-all" />Thumbnail </label>
                                            </th>
                                            <th>Title</th>
                                            <th>Author</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <label className="users-table__checkbox">
                                                    <input type="checkbox" className="check" />
                                                    <div className="categories-table-img">
                                                        <picture>
                                                            <source srcSet="./img/categories/01.webp" type="image/webp" />
                                                            <img src="./img/categories/01.jpg" alt="category" />
                                                        </picture>
                                                    </div>
                                                </label>
                                            </td>
                                            <td>
                                                Starting your traveling blog with Vasco
                                            </td>
                                            <td>
                                                <div className="pages-table-img">
                                                    <picture>
                                                        <source srcSet="./img/avatar/avatar-face-04.webp" type="image/webp" />
                                                        <img src="./img/avatar/avatar-face-04.png" alt="User Name" />
                                                    </picture>
                                                    Jenny Wilson
                                                </div>
                                            </td>
                                            <td><span className="badge-pending">Pending</span></td>
                                            <td>17.04.2021</td>
                                            <td>
                                                <span className="p-relative">
                                                    <button className="dropdown-btn transparent-btn" type="button" title="More info">
                                                        <div className="sr-only">More info</div>
                                                        <i data-feather="more-horizontal" aria-hidden="true"></i>
                                                    </button>
                                                    <ul className="users-item-dropdown dropdown">
                                                        <li><a href="##">Edit</a></li>
                                                        <li><a href="##">Quick edit</a></li>
                                                        <li><a href="##">Trash</a></li>
                                                    </ul>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="users-table__checkbox">
                                                    <input type="checkbox" className="check" />
                                                    <div className="categories-table-img">
                                                        <picture>
                                                            <source srcSet="./img/categories/02.webp" type="image/webp" />
                                                            <img src="./img/categories/02.jpg" alt="category" />
                                                        </picture>
                                                    </div>
                                                </label>
                                            </td>
                                            <td>
                                                Start a blog to reach your creative peak
                                            </td>
                                            <td>
                                                <div className="pages-table-img">
                                                    <picture>
                                                        <source srcSet="./img/avatar/avatar-face-03.webp" type="image/webp" />
                                                        <img src="./img/avatar/avatar-face-03.png" alt="User Name" />
                                                    </picture>
                                                    Annette Black
                                                </div>
                                            </td>
                                            <td><span className="badge-pending">Pending</span></td>
                                            <td>23.04.2021</td>
                                            <td>
                                                <span className="p-relative">
                                                    <button className="dropdown-btn transparent-btn" type="button" title="More info">
                                                        <div className="sr-only">More info</div>
                                                        <i data-feather="more-horizontal" aria-hidden="true"></i>
                                                    </button>
                                                    <ul className="users-item-dropdown dropdown">
                                                        <li><a href="##">Edit</a></li>
                                                        <li><a href="##">Quick edit</a></li>
                                                        <li><a href="##">Trash</a></li>
                                                    </ul>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="users-table__checkbox">
                                                    <input type="checkbox" className="check" />
                                                    <div className="categories-table-img">
                                                        <picture>
                                                            <source srcSet="./img/categories/03.webp" type="image/webp" />
                                                            <img src="./img/categories/03.jpg" alt="category" />
                                                        </picture>
                                                    </div>
                                                </label>
                                            </td>
                                            <td>
                                                Helping a local business reinvent itself
                                            </td>
                                            <td>
                                                <div className="pages-table-img">
                                                    <picture>
                                                        <source srcSet="./img/avatar/avatar-face-02.webp" type="image/webp" />
                                                        <img src="./img/avatar/avatar-face-02.png" alt="User Name" />
                                                    </picture>
                                                    Kathryn Murphy
                                                </div>
                                            </td>
                                            <td><span className="badge-active">Active</span></td>
                                            <td>17.04.2021</td>
                                            <td>
                                                <span className="p-relative">
                                                    <button className="dropdown-btn transparent-btn" type="button" title="More info">
                                                        <div className="sr-only">More info</div>
                                                        <i data-feather="more-horizontal" aria-hidden="true"></i>
                                                    </button>
                                                    <ul className="users-item-dropdown dropdown">
                                                        <li><a href="##">Edit</a></li>
                                                        <li><a href="##">Quick edit</a></li>
                                                        <li><a href="##">Trash</a></li>
                                                    </ul>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="users-table__checkbox">
                                                    <input type="checkbox" className="check" />
                                                    <div className="categories-table-img">
                                                        <picture>
                                                            <source srcSet="./img/categories/04.webp" type="image/webp" />
                                                            <img src="./img/categories/04.jpg" alt="category" />
                                                        </picture>
                                                    </div>
                                                </label>
                                            </td>
                                            <td>
                                                Caring is the new marketing
                                            </td>
                                            <td>
                                                <div className="pages-table-img">
                                                    <picture>
                                                        <source srcSet="./img/avatar/avatar-face-05.webp" type="image/webp" />
                                                        <img src="./img/avatar/avatar-face-05.png" alt="User Name" />
                                                    </picture>
                                                    Guy Hawkins
                                                </div>
                                            </td>
                                            <td><span className="badge-active">Active</span></td>
                                            <td>17.04.2021</td>
                                            <td>
                                                <span className="p-relative">
                                                    <button className="dropdown-btn transparent-btn" type="button" title="More info">
                                                        <div className="sr-only">More info</div>
                                                        <i data-feather="more-horizontal" aria-hidden="true"></i>
                                                    </button>
                                                    <ul className="users-item-dropdown dropdown">
                                                        <li><a href="##">Edit</a></li>
                                                        <li><a href="##">Quick edit</a></li>
                                                        <li><a href="##">Trash</a></li>
                                                    </ul>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="users-table__checkbox">
                                                    <input type="checkbox" className="check" />
                                                    <div className="categories-table-img">
                                                        <picture>
                                                            <source srcSet="./img/categories/01.webp" type="image/webp" />
                                                            <img src="./img/categories/01.jpg" alt="category" />
                                                        </picture>
                                                    </div>
                                                </label>
                                            </td>
                                            <td>
                                                How to build a loyal community online and offline
                                            </td>
                                            <td>
                                                <div className="pages-table-img">
                                                    <picture>
                                                        <source srcSet="./img/avatar/avatar-face-03.webp" type="image/webp" />
                                                        <img src="./img/avatar/avatar-face-03.png" alt="User Name" />
                                                    </picture>
                                                    Robert Fox
                                                </div>
                                            </td>
                                            <td><span className="badge-active">Active</span></td>
                                            <td>17.04.2021</td>
                                            <td>
                                                <span className="p-relative">
                                                    <button className="dropdown-btn transparent-btn" type="button" title="More info">
                                                        <div className="sr-only">More info</div>
                                                        <i data-feather="more-horizontal" aria-hidden="true"></i>
                                                    </button>
                                                    <ul className="users-item-dropdown dropdown">
                                                        <li><a href="##">Edit</a></li>
                                                        <li><a href="##">Quick edit</a></li>
                                                        <li><a href="##">Trash</a></li>
                                                    </ul>
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <label className="users-table__checkbox">
                                                    <input type="checkbox" className="check" />
                                                    <div className="categories-table-img">
                                                        <picture>
                                                            <source srcSet="./img/categories/03.webp" type="image/webp" />
                                                            <img src="./img/categories/03.jpg" alt="category" />
                                                        </picture>
                                                    </div>
                                                </label>
                                            </td>
                                            <td>
                                                How to build a loyal community online and offline
                                            </td>
                                            <td>
                                                <div className="pages-table-img">
                                                    <picture>
                                                        <source srcSet="./img/avatar/avatar-face-03.webp" type="image/webp" />
                                                        <img src="./img/avatar/avatar-face-03.png" alt="User Name" />
                                                    </picture>
                                                    Robert Fox
                                                </div>
                                            </td>
                                            <td><span className="badge-active">Active</span></td>
                                            <td>17.04.2021</td>
                                            <td>
                                                <span className="p-relative">
                                                    <button className="dropdown-btn transparent-btn" type="button" title="More info">
                                                        <div className="sr-only">More info</div>
                                                        <i data-feather="more-horizontal" aria-hidden="true"></i>
                                                    </button>
                                                    <ul className="users-item-dropdown dropdown">
                                                        <li><a href="##">Edit</a></li>
                                                        <li><a href="##">Quick edit</a></li>
                                                        <li><a href="##">Trash</a></li>
                                                    </ul>
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <article className="white-block">
                                <div className="top-cat-title">
                                    <h3>Top categories</h3>
                                    <p>28 Categories, 1400 Posts</p>
                                </div>
                                <ul className="top-cat-list">
                                    <li>
                                        <a href="##">
                                            <div className="top-cat-list__title">Lifestyle <span>8.2k</span></div>
                                            <div className="top-cat-list__subtitle">Dailiy lifestyle articles <span className="purple">+472</span></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="##">
                                            <div className="top-cat-list__title">Tutorials <span>8.2k</span></div>
                                            <div className="top-cat-list__subtitle">Coding tutorials <span className="blue">+472</span></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="##">
                                            <div className="top-cat-list__title">Technology <span>8.2k</span></div>
                                            <div className="top-cat-list__subtitle">Dailiy technology articles <span className="danger">+472</span></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="##">
                                            <div className="top-cat-list__title">UX design <span>8.2k</span></div>
                                            <div className="top-cat-list__subtitle">UX design tips <span className="success">+472</span></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="##">
                                            <div className="top-cat-list__title">Interaction tips <span>8.2k</span></div>
                                            <div className="top-cat-list__subtitle">Interaction articles <span className="warning">+472</span></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="##">
                                            <div className="top-cat-list__title">App development <span>8.2k</span></div>
                                            <div className="top-cat-list__subtitle">Mobile development articles <span className="warning">+472</span></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="##">
                                            <div className="top-cat-list__title">Nature <span>8.2k</span></div>
                                            <div className="top-cat-list__subtitle">Wildlife animal articles <span className="warning">+472</span></div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="##">
                                            <div className="top-cat-list__title">Geography <span>8.2k</span></div>
                                            <div className="top-cat-list__subtitle">Geography articles <span className="primary">+472</span></div>
                                        </a>
                                    </li>
                                </ul>
                            </article>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    )
}

export default AdminIndex;