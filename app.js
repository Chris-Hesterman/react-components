var GroceryList = () => {
  return (
    <div>
      <ul>
        <SmokedHam />
        <Pizza />
      </ul>
    </div>
  );
};

var SmokedHam = () => {
  return (
    <p>Smoked Ham</p>
  );
};

var Pizza = () => {
  return (
    <p>Pizza</p>
  );
};

ReactDOM.render(<GroceryList />, document.getElementById('app'));
