import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = (event) => {
        event.preventDefault()
        const name = this.inputRef.current.value
        name && this.props.onAdd(name);
        // this.inputRef.current.value = '';
        this.formRef.current.reset()
    }

    render() {
        return (
            <form className="add-form" onSubmit={this.onSubmit} ref={this.formRef}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="Habit" />
                <button className="add-button">Add</button>
            </form>
        )
    }
}

export default HabitAddForm;