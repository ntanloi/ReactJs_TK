import { useEffect, useState } from "react"

export default function Content() {

    const [overview, setOverview] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/overview')
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => setOverview(data))
            .catch((err) => console.error("Fetch error:", err));
    }, []);
    

    return ( 
        <>
        <div className="content-top">
           <p>Overview</p>
           <div className="three-box">
               {
                    overview.map((item) => {
                        return (
                            <div className="box" key={item.id}>
                                <div className="header_box">
                                    <div className="title_box">
                                            <p>{item.title}</p>
                                    </div>
                                    <div className="icon_box" dangerouslySetInnerHTML={{ __html: item.icon }} />
                                </div>
                                    <div className="price_box">
                                        <p>{item.value}</p>
                                    </div>
                                    <div className="percent_box">
                                        <p>{item.changePercent} <span>period of change</span></p>
                                    </div>
                            </div>
                        )
                    })
               }
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
                        <td>Elizabeth Lee</td>
                        <td>AvatarSystems</td>
                        <td>$559</td>
                        <td>10/07/2023</td>
                        <td><span className="status-new">New</span></td>
                        <td><button>✏️</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Carlos Garcia</td>
                        <td>SmoozeShift</td>
                        <td>$747</td>
                        <td>24/07/2023</td>
                        <td><span className="status-new">New</span></td>
                        <td><button>✏️</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Elizabeth Bailey</td>
                        <td>Prime Time Telecome</td>
                        <td>$564</td>
                        <td>08/08/2023</td>
                        <td><span className="status-progress">In-progress</span></td>
                        <td><button>✏️</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Ryan Brown</td>
                        <td>OmniTech Corporation</td>
                        <td>$541</td>
                        <td>31/08/2023</td>
                        <td><span className="status-progress">In-progress</span></td>
                        <td><button>✏️</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Ryan Young</td>
                        <td>DataStream Inc.</td>
                        <td>$769</td>
                        <td>01/05/2023</td>
                        <td><span className="status-completed">Completed</span></td>
                        <td><button>✏️</button></td>
                    </tr>
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td>Hailey Adam</td>
                        <td>FlowRush</td>
                        <td>$922</td>
                        <td>10/06/2023</td>
                        <td><span className="status-completed">Completed</span></td>
                        <td><button>✏️</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
          
        </div>

        <div className="table-footer">
            <div className="results">63 results</div>
            <div className="pagination">
                <button>&larr;</button>
                <button className="active">1</button>
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