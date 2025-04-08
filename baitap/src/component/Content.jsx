import { useEffect, useState } from "react"
import avt from '/img/avatar.png'

export default function Content() {

    const [overview, setOverview] = useState([])
    const [tableData, setTableData] = useState([])

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

    useEffect(() => {
        fetch('http://localhost:3000/table')
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => setTableData(data))
            .catch((err) => console.error("Fetch error:", err));
    }, [])

    

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
                    {
                        tableData.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td><input type="checkbox" /></td>
                                    <td className="td-name"><img src={item.img} alt="" />{item.name}</td>
                                    <td>{item.company}</td>
                                    <td>{item.orderValue}</td>
                                    <td>{item.orderDate}</td>
                                    <td><span className={
                                        item.status === "New" ? 'status-new' :
                                        item.status === "In-progress" ? 'status-progress' :
                                        item.status === "Completed" ? 'status-completed' : ''}>
                                        {item.status}
                                    </span>
                                    </td>
                                    <td><button>✏️</button></td>
                                </tr>
                            )
                        })
                    }
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