import { Link } from "react-router-dom";

const Header =()=> {
    return(
        <div>
           
            <ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">Home</a></li>
  <li> <Link to="/About">About</Link> </li>
  <li class="divider"><Link to="/Footer" >Address</Link></li>
  <li><a href="#!"><Link to="/contacts" >Contacts</Link></a></li>
</ul>
<nav>
    <div class="nav-wrapper">
      <a href="13" class="brand-logo"><Link to="/" >Home</Link></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="badges.html"><Link to="/About" >About</Link></a></li>
       
        <li><a href="badges.html"><Link to="/contacts" >Contacts</Link></a></li>
        
        <li><a href="sass.html"><Link to="/Footer" >Address</Link></a></li>
      </ul>
    </div>
  </nav>

        </div>
    )
}

export default Header;