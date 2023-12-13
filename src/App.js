import { Component } from 'react';
import cardlist from "./Card-list/card-list";
import './App.css';
import CardList from './Card-list/card-list';
import SearchBox from './search-box/search-box';


class  App extends Component {
  constructor(){
    super();

    this.state={
      monsters : [],
      searchField : '',
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((Response) => Response.json())
    .then((users)  => 
    this.setState(
      () =>{
        return {monsters : users}
      }),
      () => {
        console.log(this.state);
      })
    
  }

  onSeachChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()
    
    this.setState(
      () => {
        return {searchField}
      }

    )
  }
   render(){

    const { monsters , searchField} = this.state
    const{onSeachChange} = this
    const filterMonster = this.state.monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(this.state.searchField)
    });
    return (
      <div className="App">
        <h1 className='app-title'>Monstor Muckga</h1>
        <SearchBox  onChangeHandler = {onSeachChange}
        placeholder = "Search Monster" className='monster-search-box'/>

        <CardList monsters ={filterMonster}/> 
      </div>
    );

   }
}
  

export default App;
