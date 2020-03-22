var GroceryList = () => {
  let items = ['ham', 'pizza', 'eggs', 'kiwis'];
  let groceryItems = items.map((item) => {
    return (
      <GroceryListItem item={item} />
    );
  });
  return (
    <div>
      <ul>{groceryItems}</ul>
    </div>
  );
};

var SmokedHam = () => {
  return (
    <li>Smoked Ham</li>
  );
};

var Pizza = () => {
  return (
    <li>Pizza</li>
  );
};

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    }
  }

  onListItemClick() {
    this.setState({ done: !this.state.done });
  }

  onHoverListItem(event) {
    event.target.style.fontWeight = '700';
  }

  onStopHoverListItem(event) {
    event.target.style.fontWeight = '300';
  }

  render() {
    var style1 = {
      textDecoration: this.state.done ? 'line-through': 'none',
      fontSize: '5rem',
      listStyleType: 'none'
    };
    return (
      <li
        key={this.props.item}
        style={style1}
        onClick={this.onListItemClick.bind(this)}
        onMouseEnter={this.onHoverListItem.bind(this)}
        onMouseLeave={this.onStopHoverListItem.bind(this)}
      >
        {this.props.item}
      </li>
    );
  }
}

ReactDOM.render(<GroceryList />, document.getElementById('app'));
