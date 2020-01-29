import React, { Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as TodoActions from "./store/actions/todo";

const TodoList = ({ todos, addTodo, removeTodo }) => (
    <Fragment>
        <ul>
            {todos.map(todo => (
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={() => removeTodo(todo.id)}>Remover</button>
                </li>
            ))}
        </ul>
        <button onClick={() => addTodo("Novo todo")}>Adicionar</button>
    </Fragment>
);

const mapStateToProps = state => ({
    todos: state.todos
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
