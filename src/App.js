
import  { Component } from 'react';
import { Container, Col, Row} from 'reactstrap';
// import Select from 'react-select';

/* Components */
import SearchBar from './SearchBar';

// import ContactCard from './ContactCard';
import NavigationMenu from './NavigationMenu';
import {
	ReactiveBase,
	RangeSlider,
	SelectedFilters,
  ReactiveList,
  ResultList
} from '@appbaseio/reactivesearch';
import './index.css';

var React = require('react');
// var createReactClass = require('create-react-class');
/* API on mockable */
const contactsAPI='https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';


// const options = [
//   { value: 'Black', label: 'Black' },
//   { value: 'Blue', label: 'Blue' },
//   { value: 'Red', label: 'Red' },
//   { value: 'Green', label: 'Green' },
//   { value: 'Orange', label: 'Orange' },
//   { value: 'Violet', label: 'Violet' },
//   { value: 'Yellow', label: 'Yellow' },
//   { value: 'Purple', label: 'Purple'},
//   { value: 'Indigo', label: 'Indigo' },
//   { value: 'Pink', label: 'Pink' },
//   { value: 'Magenta', label: 'Magenta' },
//   { value: 'White', label: 'White'},
//   { value: 'Brown', label: 'Brown'},
// ];
class App extends Component {
 
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      searchText: '',
      searchResult: [],
      loadingState: false,
      contactList: [],
      show: false,
      searchType: '',
      searchProf: '',
      visible: 4,
      error: false
    }
    ////
   
    this.loadMore = this.loadMore.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSearch2 = this.handleSearch2.bind(this);
    this.handleSearch3 = this.handleSearch3.bind(this);
    this.returnContactList = this.returnContactList.bind(this);
    this.handleChanges4 = this.handleChanges4.bind(this);
    this.handleChanges5 = this.handleChanges5.bind(this);
    this.handleChanges6 = this.handleChanges6.bind(this);
   
  }

  /* ContactList Logic*/

  handleSearch(searchText,searchType) {
  this.setState({ searchResult: [], searchText: searchText, searchType: searchType });
  this.state.contactList.map(contact => {
      if (searchContact(contact, searchText)) {
        this.setState(prevState => ({
          searchResult: [...prevState.searchResult, contact]
        }))
      }
      
    })
    
  }
  handleSearch2(searchText,searchType) {
   this.setState({ searchResult: [], searchText: searchText, searchType: searchType });
   this.state.contactList.map(contact => {
      if (searchContactAge(contact, searchText)) {
        this.setState(prevState => ({
          searchResult: [...prevState.searchResult, contact]
        }))
      }
      
    }
    )
  }
  handleSearch3(searchText,searchType) {
    this.setState({ searchResult: [], searchText: searchText, searchType: searchType});
    this.state.contactList.map(contact => {
       if (searchContactPro(contact, searchText)) {
         this.setState(prevState => ({
           searchResult: [...prevState.searchResult, contact]
         }))
       }
       
     }
     )
   }
   handleChanges4 (searchText,searchType) {
  this.setState({searchResult: [], searchText: searchText,searchType: searchType });
  this.state.contactList.map(contact => {
    if (searchColor(contact, searchText)) {
     
      this.setState(prevState => ({
        searchResult: [...prevState.searchResult, contact]
      }))
    } 
  })
}

handleChanges5 (searchText,searchType) {
   var splitSentence = searchText.split("-");
 
  this.setState({searchResult: [], searchText: searchText,searchType: searchType });
  this.state.contactList.map(contact => {
    if(contact.weight>splitSentence[0] && contact.weight<splitSentence[1]){
      this.setState(prevState => ({
        searchResult: [...prevState.searchResult, contact]
      }))
    } 
  })
}

handleChanges6 (searchText,searchType) {
  var splitSentence = searchText.split("-");

 this.setState({searchResult: [], searchText: searchText,searchType: searchType });
 this.state.contactList.map(contact => {
   if(contact.height>splitSentence[0] && contact.height<splitSentence[1]){
     this.setState(prevState => ({
       searchResult: [...prevState.searchResult, contact]
     }))
   } 
 })
}
  componentWillMount() {
    let init = {
      method: 'GET',
      headers: new Headers(),
      mode: 'cors',
      cache: 'default'
    };

    fetch(contactsAPI, init)
      .then(response => response.json())
      .then(
        
      data => this.setState(
        prevState => ({
          contactList: [...data.Brastlewark],
          
        }) )).catch(error => {
          console.error(error);
          this.setState({
            error: true
          });
        });
  }
/**scorll page */
loadMore() {

  this.setState((prev) => {
    return {visible: prev.visible + 4};
  });
}
  returnContactList() {
    return this.state.searchText ? this.state.searchResult : this.state.contactList
  }

  /* UI Logic */

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  // state = {
  //   selectedOption: null,
  // };
  
  // handleChanges = selectedOption => {
  //   this.setState({ selectedOption });
  // };
  
  // handleChanges2 = textOption => {
  //   this.setState({ searchType: textOption });
  //   //console.log(`Option selected:`, selectedOption);
  // };
  render() {
    // const { selectedOption } = this.state;
    return (

      <div>
       
        <NavigationMenu />
        <br /> <br /> <br />

        {/* fluid Grid */}
        <Container fluid>
          <Row>
           
          <Col sm={{ size: 4}} id="filter_section">
          <div id="title_filter">Filter Box</div><br/> 
               {/* Search bar*/}
               <SearchBar onSearch={this.handleSearch} onSearch2={this.handleSearch2} onSearch3={this.handleSearch3} onSearch4={this.handleChanges4} onSearch5={this.handleChanges5} onSearch6={this.handleChanges6}/>
              <br />
          </Col>
            <Col sm={{ size: 8}} >
            
            <section className="app">
        <div>
          
          { this.state.searchText!=''?
                      
              this.returnContactList().slice(0, this.state.visible).map((contactList, index) => {
                return (
                  <div className="tile fade-in" key={contactList.id}>
                    <span className="count">{index+1}</span>
                    <Col xs={{size: 2}}>
                        <img src={contactList.thumbnail} alt="avatar"  width="150" height="150" />
                    </Col>
                    <Col xs={{size: 10}}>
                    <h4> Name: {contactList.name }</h4>
                    <h5> Age: {contactList.age}</h5>
                    <h5> Weight: {contactList.weight}</h5>
                    <h5> Height: {contactList.height}</h5>
                    <h5> Hair-color: {contactList.hair_color}</h5>
                    <h5> Professions: {contactList.professions.join(",")}</h5>
                    <h5> Friends: {contactList.friends.join(",")}</h5>
                    </Col>
                  </div>
                );
              })
              
            :
              this.state.contactList.slice(0, this.state.visible).map((contactList, index) => {
                return (
                  <div className="tile fade-in" key={contactList.id}>
                    <span className="count">{index+1}</span>
                    <Col xs={{size: 2}}>
                        <img src={contactList.thumbnail} alt="avatar"  width="150" height="150" />
                    </Col>
                    <Col xs={{size: 10}}>
                    <h4> Name: {contactList.name }</h4>
                    <h5> Age: {contactList.age}</h5>
                    <h5> Weight: {contactList.weight}</h5>
                    <h5> Height: {contactList.height}</h5>
                    <h5> Hair-color: {contactList.hair_color}</h5>
                    <h5> Professions: {contactList.professions.join(",")}</h5>
                    <h5> Friends: {contactList.friends.join(",")}</h5>
                    </Col>
                  </div>
                );
              })
           
             }
          </div>
          {this.state.visible < this.state.contactList.length &&
             <button onClick={this.loadMore} type="button" className="load-more">Load more</button>
          }
        </section>
             
            
            </Col>
          </Row>
        </Container>
        
      </div>



    );
  }
 
}

/* Search Contact Logic */
const searchContact = (contact, searchText) => (
  contact.name.toLowerCase().search(searchText) !== -1
  //contact.professions.toLowerCase().search(searchText.toLowerCase()) !== -1 
)
const searchContactAge = (contact, searchText) => (
  contact.age.toString().search(searchText) !== -1 
)
const searchContactPro = (contact, searchText) => (
  contact.professions.toString().replace(/[^\w\s]/gi, " ").toLowerCase().search(searchText) !== -1
)
const searchColor = (contact, searchText) => (
  contact.hair_color.toString().search(searchText) !== -1 
)
  

export default App;

