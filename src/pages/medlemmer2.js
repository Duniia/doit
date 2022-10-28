import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineLine } from "react-icons/ai";
import { AiFillDownCircle } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
//  Nadia
 
export default function MedlemmerPage() {
  return (
    <section className="medlemmertest">
      <header> 
        {/*intro*/}
        <h1 className="medlemmertest-header"> My Household</h1>
        <p className="medlemmertest-text">the members of your household</p>
      </header>
      <main>
        {/*medlemmer liste*/}
        <div className="container-medlem">
          <div className="medlem2">
              {" "}
              <AiOutlineUser className="icon3" />
            <input type="text" placeholder="Dunia - owner" className="input-medlem" readOnly />
            <AiOutlineLine className="icon4" />
          </div>
        </div>
        <div className="container-medlem">
          <div className="medlem2">
              {" "}
              <AiOutlineUser className="icon3" />
            <input
              type="text"
              placeholder="Michelle"
              className="input-medlem"
              id="inputnr2"
              readOnly
            />
            <AiOutlineLine className="icon4" />
          </div>
        </div>
        <div className="container-medlem">
          <div className="medlem2">
              {" "}
              <AiOutlineUser className="icon3" />
            <input type="text" placeholder="Nadia" className="input-medlem" readOnly />
            <AiOutlineLine className="icon4" />
          </div>
        </div>
        <div className="container-medlem">
          <div className="medlem2">
              {" "}
              <AiOutlineUser className="icon3" />
            <input type="text" placeholder="Rikke" className="input-medlem" readOnly />
            <AiOutlineLine className="icon4" />
          </div>
          <br></br>
          {/*scroll ned knap*/}
          <div className="scroll-container">
            <a href="#">
              {" "}
              <AiFillDownCircle className="scroll-icon" size={40} />
            </a>
          </div>
          <br></br>
          {/*tilføj ny medlem knap - fiks længde og ikon(responsiv)*/}
          <div className="add-container2">
            <p className="add1-knap">Add new Member</p>
            <GrAdd className="icon5" />
          </div>
        </div>
      </main>
    </section>
  );
}
