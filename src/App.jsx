const MyInfo = require('./components/MyInfo'),
    Header = require('./components/Header'),
    ContactCard = require('./components/ContactCard'),
    TodoItem = require('./components/TodoList/TodoItem'),
    Button = require('./components/Button'),
    styles = require('./App.scss'),
    React = require('react'),
    todosData = require('./components/TodoList/todosData');

class App extends React.Component {

  constructor() {
    super();
  }

  render() {
      const displayTodoList = true,
          todosDataMap = todosData.map(todoData => {
            return <TodoItem key={todoData.id} item={todoData} />
          });
      if(displayTodoList) {
        return (
            <div>
                {todosDataMap}

            </div>
        );
      }

      return (
      <div className="App">
        <Header />
        <MyInfo />
        <ContactCard
            name="Mr. Whiskerson"
            imgUrl="http://placekitten.com/200/300"
            phone="(212) 555-1234"
        />
      </div>
    );
  }
}

export default App;
