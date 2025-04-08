import React, { useState } from 'react';
import dashboard from '/img/Untitled-3.png'; 
import thongBao from '/img/black.png'
import avt from '/img/avatar.png'
import search from '/img/Search.png'
import chamHoi from '/img/Question1.png'
import bell from '/img/Bell.png'

export default function Header() {
  // const [isSearchOpen, setSearchOpen] = useState(false);

  // const handleSearchClick = () => {
  //   setSearchOpen(!isSearchOpen);
  // };

  return (
    <div className="mainHeader">
      {/* <img className="headerImage" src={dashboard} alt="Dashboard" />
      <div className={`itemImage ${isSearchOpen ? 'open' : ''}`}>
        <input
          type="text"
          placeholder="Nhập từ khóa tìm kiếm..."
          className="search-input"
        />
        <button
          className="search-btn"
          onClick={handleSearchClick}
        >
          Find
        </button>

        <img className='thongBao' src={thongBao} alt="" />
        <img src={avt} alt="" />
      </div> */}

      <div className='headerImage'>
        <p>Dashboard</p>
      </div>

      <div className='itemImage'>
        <div className='search'>
          <img src={search} alt="" />
          <input type="text"
          placeholder='Search...'/>
        </div>

        <img src={chamHoi} alt="" />
        <img src={bell} alt="" />
        <img src={avt} alt="" />
      </div>
    </div>
  );
}
