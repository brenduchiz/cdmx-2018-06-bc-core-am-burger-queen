import React, {Fragment} from 'react';
import logo from '../img/bqueen.png'
import '../css/Navbar.css'
import firebaseApp from '../config/firebase' 
import { BrowserRouter,Link,Route} from 'react-router-dom'
import Home from '../components/Home' 
import Breakfast from '../components/Breakfast' 
import Dinner from '../components/Dinner'
import { DropdownItem,DropdownMenu,DropdownToggle,Dropdown,Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink} from 'mdbreact';


class Nav extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
  this.onClick = this.onClick.bind(this);
}
onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}

logout(){
  firebaseApp.auth().signOut()
  .then(function() {
      console.log('Saliendo...');
    })
    .catch(function(error) {
      console.log(error);
    });
}


render() {

    return (
        
          <BrowserRouter>
          <Fragment>
          
            <Navbar id="nav" dark expand="md" scrolling>
                <NavbarBrand href="/">
                <img width="60px"  src={logo} alt="logo"/>  <span id="titule2">Burger Queen</span>
                
                </NavbarBrand>
                <NavbarToggler onClick={this.onClick } />
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left id="tituleNav">
                      <NavItem active>
                         
                      </NavItem>

                           <NavItem>
                              <NavLink to="#">
                              <Link id="titule3" to='/'>
                              Inicio
                              </Link>
                               </NavLink>
                          </NavItem>

                            <NavItem>
                            <Dropdown>
                                <DropdownToggle nav caret>Menú</DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem href="#">
                                    <Link to='/Breakfast'>
                                    Desayunos
                                    </Link>
​
                                    </DropdownItem>
                                    <DropdownItem href="#">

                                    <Link to='/Dinner'>
                                    Almuerzos y Cenas
                                    </Link>
                                   
                                    </DropdownItem>
                                    
                                </DropdownMenu>
                            </Dropdown>
                          </NavItem>
                    </NavbarNav>
                    <NavbarNav right id="tituleNav2">
                      
                      <NavItem>
                      <NavLink onClick={this.logout} to="#" >Cerrar Sesión </NavLink>
                      </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
       

  
       <Route exact path='/' component={Home} />
       <Route path='/Breakfast' component={Breakfast} />
       <Route path='/Dinner' component={Dinner} />



​
​     
         
</Fragment>
</BrowserRouter>
    );
  }
}

export default Nav;