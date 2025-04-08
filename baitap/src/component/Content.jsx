export default function Content() {
    return ( 
        <>
        <div className="content-top">
           <p>Overview</p>
           <div className="three-box">
               <div className="box">item</div>
               <div className="box">item</div>
               <div className="box">item</div>
           </div>
        </div>
        <div className="content-bottom">
            <div className="bot-title">
                <p>Detaild Report</p>
                <div className="bot-button">
                    <button>import</button>
                    <button>export</button>
                </div>
            </div>

            {/* <table>
                <pead>
                    <tr className="table-header">
                        <p><input type="checkbox" name="" id="" /></p>
                        <p>CUSTOMER NAME</p>
                        <p>COMPANY</p>
                        <p>ORDER VALUE</p>
                        <p>ORDER DATE</p>
                        <p>STATUS</p>
                        <p></p>
                    </tr>
                </pead>
            </table> */}

        <div className="table-wrapper">
            <table className="table">
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>CUSTOMER NAME</th>
                        <th>COMPANY</th>
                        <th>ORDER VALUE</th>
                        <th>ORDER DATE</th>
                        <th>STATUS</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Avatar</td>
                        <td>AvatarSystems</td>
                        <td>$559</td>
                        <td>10/07/2023</td>
                        <td><span className="status-new">New</span></td>
                        <td><button>✏️</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Avatar</td>
                        <td>AvatarSystems</td>
                        <td>$559</td>
                        <td>10/07/2023</td>
                        <td><span className="status-new">New</span></td>
                        <td><button>✏️</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Avatar</td>
                        <td>AvatarSystems</td>
                        <td>$559</td>
                        <td>10/07/2023</td>
                        <td><span className="status-new">New</span></td>
                        <td><button>✏️</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Avatar</td>
                        <td>AvatarSystems</td>
                        <td>$559</td>
                        <td>10/07/2023</td>
                        <td><span className="status-new">New</span></td>
                        <td><button>✏️</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Avatar</td>
                        <td>AvatarSystems</td>
                        <td>$559</td>
                        <td>10/07/2023</td>
                        <td><span className="status-new">New</span></td>
                        <td><button>✏️</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Avatar</td>
                        <td>AvatarSystems</td>
                        <td>$559</td>
                        <td>10/07/2023</td>
                        <td><span className="status-new">New</span></td>
                        <td><button>✏️</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
          
        </div>

        <div class="table-footer">
            <div class="results">63 results</div>
            <div class="pagination">
                <button>&larr;</button>
                <button class="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>...</button>
                <button>10</button>
                <button>11</button>
                <button>&rarr;</button>
            </div>
        </div>
        </>
    )
}