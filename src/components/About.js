

function About({image,about}){
  const defaultImage = 'https://via.placeholder.com/215';
    return ( 
          <div>
            <aside> 
              <img src={image || defaultImage} alt="blog logo"></img>
            {/* <p>Personal Blog by <span> Adriano Suprine</span></p> */}
            <p>{about}</p>
            </aside>
          </div>
      );

}

export default About ;


