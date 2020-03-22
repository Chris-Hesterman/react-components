var GroceryList = () => {
  return (
    <div>
      <GroceryListItem groceryItems={['ham', 'pizza', 'eggs', 'kiwis']} />
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
  let items = props.items.map((item) => {
    return <li>{item}</li>
  });
  return (
    <ul>{items}</ul>
  );
}

ReactDOM.render(<GroceryList />, document.getElementById('app'));
