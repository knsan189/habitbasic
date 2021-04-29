import React, { Component } from 'react';
import Habits from './components/Habits';
import Navbar from './components/Navbar';

class App extends Component {
  state = {
    habits : [
        {name : 'Reading', count : 0, id: 1},
        {name : 'Running', count : 0, id: 2},
        {name : 'Coding', count : 0,  id: 3}
        ]
    };

handleIncrement = (habit) => {
    const habits = this.state.habits.map(item=>{
      if(item.id === habit.id) {
        return {...habit, count: habit.count + 1}
      }
      return item
    })
    this.setState({habits : habits})
}

handleDecrement = (habit) => {
  const habits = this.state.habits.map(item=>{
    if(item.id === habit.id) {
      const count = habit.count - 1
      return {...habit, count: count < 0 ? 0 : count}
    }
    return item
  })
  this.setState({habits : habits})
}

handleDelete = (habit) => {
    const habits = [...this.state.habits];
    const newHabits = habits.filter(data => habit.id !== data.id)
    this.setState({habits : newHabits})
}
handleAdd = (name) => {
    const newHabits = [...this.state.habits, {name, count:0, id:Date.now()}]
    this.setState({habits : newHabits})
}

handleReset = () => {
    const habits = this.state.habits.map( habit => {
      if(habit.count !== 0) return {...habit, count:0}
      return habit;
    })
    this.setState({habits})
    
}

  render() {
    return (
      <>
        <Navbar totalCount={this.state.habits.filter(item => item.count > 0).length}/>
        <Habits 
          onIncrement={this.handleIncrement} 
          onDecrement={this.handleDecrement} 
          onDelete={this.handleDelete} 
          habits={this.state.habits}
          onAdd={this.handleAdd}
          onReset={this.handleReset}/>
      </>
    );
  }
}

export default App;
