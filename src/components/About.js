

function About({logo,about}){
    return ( 
          <div>
            <aside> <img src={logo} alt="blog logo"></img>
            {/* <p>Personal Blog by <span> Adriano Suprine</span></p> */}
            <p>{about}</p>
            </aside>
          </div>
      );

}

export default About ;


