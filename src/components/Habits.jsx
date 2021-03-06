import React, { Component } from 'react';
import Habit from './Habit';
import HabitAddForm from './HabitAddForm';

class Habits extends Component {
    
    render() {
        return (
            <>
                <HabitAddForm onAdd={this.props.onAdd}/>
                <ul>
                    {
                        this.props.habits.map(habit =>  <Habit 
                            habit={habit} 
                            key={habit.id} 
                            onIncrement={this.props.onIncrement} 
                            onDecrement={this.props.onDecrement} 
                            onDelete={this.props.onDelete}/>)
                    }
                </ul>
                <button className="habits-reset" onClick={this.props.onReset}>Reset All</button>
            </>
        );
    }
    
}

export default Habits;