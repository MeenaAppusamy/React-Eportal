import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';

function Home() {

  return (

    <div className='container mt-25'>
      <div className='p-5 mt-5' style={{ backgroundColor: 'gray' }}>
        <Carousel>
          <Carousel.Item>
            <img style={{ maxHeight: "80vh" }}
              className="d-block w-100"
              src={"https://as1.ftcdn.net/v2/jpg/06/64/41/32/1000_F_664413268_IV7TsL3pTkqGdvnohvc3rbzvTht3e0v5.jpg"}

            />

          </Carousel.Item>

          <Carousel.Item>
            <img style={{ maxHeight: "80vh" }}
              className="d-block w-100"
              src={"https://as1.ftcdn.net/v2/jpg/05/94/98/60/1000_F_594986042_CxxRPXfiSrDYTYrvivrnThoPQLPnOZOA.jpg"} />


          </Carousel.Item>
          <Carousel.Item>
            <img style={{ maxHeight: "80vh" }} className="d-block w-100" src={"https://www.idea.int/sites/default/files/news/5%20Things%20to%20Know%20about%20BVR%20-%20Header%20-%20UNOPS_0.jpg"}

            />
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ maxHeight: "80vh" }}
              className="d-block w-100"
              src={"https://as2.ftcdn.net/v2/jpg/04/81/33/73/1000_F_481337346_BBakTon3isXiCk0bTxKMP2GbnWe5pFPH.jpg"}

            />
          </Carousel.Item>
          <Carousel.Item>
            <img style={{ maxHeight: "80vh" }}
              className="d-block w-100"
              src={"https://www.eci.gov.in/newimg/one-voter-sure.png"}

            />
          </Carousel.Item>

        </Carousel>
      </div>
      <h2 className="text-center mt-5">LATEST NEWS & EVENTS</h2>
      <p style={{ color: 'black', fontSize: '18px' }} className='mt-4 p-2 d-flex justify-content-center'>
        Bye Election to the Council of States from Tamil Nadu
        Bye Election to the Council of States from Tamil Nadu
        Aug 17, 2021
        Appointment of Special Expenditure Observer
        Appointment of Special Expenditure Observer
        -
        Press Release - Signing of MoU with Postal Department for sending the EPICs by post
        Press Release - Signing of MoU with Postal Department for sending the EPICs by post
        Feb 05,2021
        General Elections to Tamil Nadu Legislative Assembly  2021 - COVID 19 Management Plan
        General Elections to Tamil Nadu Legislative Assembly 2021 - COVID 19 Management Plan
        Jan 12,2021
        Interview of Chief Election Commissioner
        Interview of Chief Election Commissioner
        Dec 28,2020
        Appointment of Special Expenditure Observer
        Appointment of Special Expenditure Observer
        Mar 12, 2021
        Press Release - Voter through postal ballot(optional) by Absentee voters - Guidelines
        Press Release - Voter through postal ballot(optional) by Absentee voters - Guidelines
        Mar 07,2021
        Press Release - Final Publication of Electoral Rolls
        Press Release - Final Publication of Electoral Rolls
        Jan 20,2021
        Meeting with Nodal Officers of Enforcement Agencies on 11-01-2021 Regarding Election Expenditure Monitoring
        Meeting with Nodal Officers of Enforcement Agencies on 11-01-2021 Regarding Election Expenditure Monitoring
        Jan 11,2021
        Electoral Roll Observers meeting in 19.11.2020 - Reg SSR 2021
        Electoral Roll Observers meeting in 19.11.2020 - Reg SSR 2021
        Nov 19,2020</p>


      <h2 className=''>India International Institute of Democracy and Election Management</h2>
      <p>
        The Election Commission of India (ECI), established the India International Institute of Democracy and Election Management (IIIDEM) to advance its professional competence in election management, promote peoples participation, contribute to developing stronger democratic institutions and support the efforts of ECI in carrying out its mandate and functions.

        Over the last six decades, the structure and functions of the Election Commission have undergone major changes and thus the management of elections has become increasingly complex. A rapid transformation in social context and reality, rising number of political parties, changing dynamics and demands of coalitions and alliances, frequent elections and bye-elections, increase in number of eligible voters and continuous updating of electoral rolls have led to new challenges for election management bodies of today.
      </p>
      <h1 className='mt-5 text-center'>Events</h1>
      <div style={{ marginTop: '50px' ,backgroundColor:'lightsteelblue'}} class="row">
        <div class="col-lg-4 col-md-12 mb-10 rounded">
          <img
            src="https://www.eci.gov.in/newimg/gallery/pics-06.jpg"
            class="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src="https://www.eci.gov.in/newimg/gallery/r-pic2.jpg"
            class="w-100 shadow-1-strong rounded mb-4"

          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://www.eci.gov.in/newimg/gallery/president.jpg"
            class="w-100 shadow-1-strong rounded mb-4"

          />

          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpaytm.com%2Fblog%2Fvoter-id%2Fnvsp-portal-national-voter-service-portal%2F&psig=AOvVaw1A7_ynp-6m0ghURaBg7WY_&ust=1707219417869000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPDylIqOlIQDFQAAAAAdAAAAABAE"
            class="w-100 shadow-1-strong rounded mb-4"

          />
        </div>

        <div class="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://www.eci.gov.in/newimg/one-voter-sure.png"
            class="w-100 shadow-1-strong rounded mb-4"

          />

          <img
            src="https://www.eci.gov.in/newimg/gallery/h-pics-02.jpg"
            class="w-100 shadow-1-strong rounded mb-4"

          />
        </div>
      </div>

      <footer style={{marginTop:'25px',height:'350px'}} class="page-footer bg-dark font-small teal mt-25 pt-2">

        <div class="container-fluid text-center text-md-left">

          <div class="row" style={{ color: 'white' }}>

            <div class="col-md-6 mt-md-0 mt-3">

              <h5 class="text-uppercase font-weight-bold">Election Commission of India</h5>
              <img className="m-1" style={{ height: '150px', width: '200px' }} src='https://img.etimg.com/thumb/width-1200,height-1200,imgsize-11306,resizemode-75,msid-102927761/news/india/3-6-crore-voters-in-telangana-according-to-draft-voter-list-over-8-lakh-new-voters-added.jpg'></img>
              <p style={{fontSize:'12px'}}>The Election Commission of India is an autonomous constitutional authority responsible for administering election processes in India. The body administers elections to the Lok Sabha, Rajya Sabha, State Legislative Assemblies in India, and the offices of the President and Vice President in the country.?</p>

            </div>



            <div class="col-md-6 mb-md-0 mb-2">


              <p class="text-uppercase font-weight-bold" style={{color:'yellow'}}>Quick Links</p>
              <div style={{fontSize:'14px'}}>

              <p>.  About ECI</p>
              <p>.  Officers Directory</p>
              <p>.  Contact Us</p>
              <p>.  Apply for Voter Card</p>
              <p>.  SVEEP</p>
</div>

            </div>


          </div>


        </div>
        
        <div class="footer-copyright text-center py-3">© 2020 Copyright:
          <a href="/">Election Commission of India 2024| V 1.0 </a><br></br>
          <a className="text-center mx-5" href='/'>https://www.eci.gov.in/</a>
         
        </div>

      </footer>

    </div>


  )
}
export default Home;  