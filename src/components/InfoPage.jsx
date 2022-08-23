import { BsTrashFill } from "react-icons/bs";
import { IoTimeSharp, IoLocationSharp } from "react-icons/io5";
import { GoFileDirectory } from "react-icons/go";
import { GiNetworkBars } from "react-icons/gi";
import { MdOutlineCardTravel } from "react-icons/md";
import DataTable from "react-data-table-component";
const InfoPage = () => {
  const datosTable3 = [
    { nombre: "Year", valor1: "2021 (N)", valor2: "(N)", valor3: "(N)" },
    { nombre: "Gross Revenue", valor1: "130,671", valor2: "0", valor3: "0" },
    { nombre: "Cost of Goods", valor1: "0", valor2: "0", valor3: "0" },
    { nombre: "Gross Profit", valor1: "130,671", valor2: "0", valor3: "0" },
    { nombre: "Expenses", valor1: "113,418", valor2: "0", valor3: "0" },
    { nombre: "Net", valor1: "17,253", valor2: "0", valor3: "0" },
    { nombre: "Owner Salary", valor1: "0", valor2: "0", valor3: "0" },
    { nombre: "Benefits", valor1: "0", valor2: "0", valor3: "0" },
    { nombre: "Interes Expense", valor1: "0", valor2: "0", valor3: "0" },
    { nombre: "Depreciation", valor1: "0", valor2: "0", valor3: "0" },
    { nombre: "Other", valor1: "0", valor2: "0", valor3: "0" },
    { nombre: "Owner Benefit", valor1: "17,253", valor2: "0", valor3: "0" },
  ];

  const columnas = [
    {
      name: "Data Source",
      selector: "nombre",
    },
    {
      name: "Annualized",
      selector: "valor1",
    },
    {
      name: "",
      selector: "valor2",
    },
    {
      name: "",
      selector: "valor3",
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "1rem",
      },
    },
  };
  return (
    <div className="infopage">
      <div className="cont">
        <div className="container-info">
          <div className="row1">
            <p>
              Listing Number:<span> BBF-1172-16709</span>
            </p>
            <div>
              <IoTimeSharp className="blue" />
              <GoFileDirectory className="green" />
              <BsTrashFill className="red" />
            </div>
          </div>
          <div className="columns-container">
            <div className="col">
              <p>
                <IoLocationSharp style={{ marginRight: "7px" }} />
                Bussines Location
              </p>
              <div className="col-info">
                <p>
                  <span>Category:</span> Beauty/Personal Care
                </p>
                <p>
                  <span>Detail:</span> Skin and/or Massage
                </p>
                <p>
                  <span>County:</span> Broward
                </p>
                <p>
                  <span>State/Prov:</span> Florida
                </p>
                <p>
                  <span>Country:</span> USA
                </p>
              </div>
            </div>
            <div className="col">
              <p>
                <GiNetworkBars style={{ marginRight: "7px" }} />
                Financial Information
              </p>
              <div className="col-info">
                <p>
                  <span>SIC:</span> 7,299
                </p>
                <p>
                  <span>Price:</span> $75,000
                </p>
                <p>
                  <span>Down:</span> $75,000
                </p>
                <p>
                  <span>Adj Net:</span> $17,253
                </p>
                <p>
                  <span>Sales:</span> $130,671
                </p>
              </div>
            </div>
            <div className="col">
              <p>
                <MdOutlineCardTravel style={{ marginRight: "7px" }} />
                Characteristics
              </p>
              <div className="col-info">
                <p>
                  <span>Relocatable:</span> N
                </p>
                <p>
                  <span>Home Based:</span> N
                </p>
                <p>
                  <span>Franchise:</span> N
                </p>
                <p>
                  <span>Lender Pre-Qualified:</span> N
                </p>
                <p>
                  <span>May Qualify For Visa:</span> N
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row2">
          <p className="details">
            Reason for Sale: Focusing on Family-Organic Boutique Spa located in
            Weston. Established Since 2018 servicing Weston & Dave residents.
            Spa offers a variety of wellness options- masssages, body
            treatment,facils,ozone therapy,reflexology,meditation,reiki,and
            more- to help you renew and recharge. Great location in the heart of
            Weston within an office building. Monthly rent is $4500. Lease
            extends to 2023. Priced to sell at $75k. Great opportunity to enter
            the spa industry for a reasonable price. 2021 # Annualized thru
            September.
          </p>

          <div className="row2-flex">
            <div className="row2_col">
              <p>
                <span>Accounts Rec</span>0
              </p>
              <p>
                <span>Inventory </span>5,000
              </p>
              <p>
                <span>F F & E Rec</span>51,000
              </p>
              <p>
                <span>Leasehold</span>70,000
              </p>
            </div>
            <div className="row2_col fix">
              <p>
                <span>Real Estate</span>0,00
              </p>
              <p>
                <span>Total Assets </span>126,000
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row3">
          <div className="row3-col">
            <p>
              <span>Reason for sale</span>Focusing on Family
            </p>
            <p>
              <span>General location</span>Broward County
            </p>
            <p>
              <span>Organization Type</span>'LLC'
            </p>

            <p>
              <span>Operating dys/hrs</span>Mon-Fri 10am-5pm;Sat 9:30am-2pm
            </p>
            <p>
              <span>Hours owner work</span>35
            </p>
            <p>
              <span>Weeks Training</span>2
            </p>
            <p>
              <span>Training Cost</span>0
            </p>
            <p>
              <span>Skills/Licenses</span>0
            </p>
          </div>
          <div className="row3-col fix2">
            <p>
              <span>Years Established</span>3
            </p>
            <p>
              <span>Years owned</span>3
            </p>
            <p>
              <span>Emp PT</span>0
            </p>
            <p>
              <span>Emp FT</span>0
            </p>
            <p>
              <span>Non Compete Miles</span>15
            </p>
            <p>
              <span>Non Compete Years</span>5
            </p>
            <p>
              <span>Mgrs</span>0
            </p>
          </div>
        </div>
        <hr />
        <div className="row4">
          <DataTable
            columns={columnas}
            data={datosTable3}
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
