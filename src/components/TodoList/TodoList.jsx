import React from 'react';
import './TodoList.scss';
import Table from 'react-bootstrap/Table';
import { Col, Container, Row } from 'react-bootstrap';
import Todo from '../Todo';
import { ListShape } from '../../Types';

const TodoList = ({ todos }) => (
  <>
    <Container>
      <Row>
        <Col>
          <h1>Static list of todos</h1>
          <Table striped bordered hover responsive="lg">
            <thead>
              <tr>
                <th>#id</th>
                <th>#idTodo</th>
                <th>Name</th>
                <th>User name</th>
                <th>User Todo</th>
                <th className="status">Status</th>
              </tr>
            </thead>
            <tbody>
              {todos.map(todo => (
                <tr key={todo.id}>
                  <Todo {...todo} />
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>

  </>
);

TodoList.propTypes = ListShape.isRequired;

export default TodoList;
