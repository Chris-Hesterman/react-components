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

var GroceryListItem = (props) => {
  return (
    <li>{props.item}</li>
  );
}

ReactDOM.render(<GroceryList />, document.getElementById('app'));
