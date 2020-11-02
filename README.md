
# Nullstack Currency Input

Simple input that converts user formatted input into a number and the other way around.

## Install

```bash
npm install --save nullstack-currency-input
```

## Usage with one way binding

```jsx
import Nullstack from 'nullstack';
import CurrencyInput from 'nullstack-currency-input';

class Application extends Nullstack {

  price = 10;

  updatePrice({value}) {
    this.price = value;
  }

  render() {
    return (
      <CurrencyInput name="price" value={this.price} onchange={this.updatePrice} />
    )
  }

}

export default Application;
```

## Usage with two way binding

```jsx
import Nullstack from 'nullstack';
import CurrencyInput from 'nullstack-currency-input';

class Application extends Nullstack {

  price = 10;

  render() {
    return (
      <CurrencyInput bind={this.price} />
    )
  }

}

export default Application;
```

## Changing the separator

The default separator is a ".", but you can override it by passing a separator attribute to the input

```jsx
import Nullstack from 'nullstack';
import CurrencyInput from 'nullstack-currency-input';

class Application extends Nullstack {

  price = 10;

  render() {
    return (
      <CurrencyInput bind={this.price} separator="," />
    )
  }

}

export default Application;
```


## License

Nullstack Currency Input is released under the [MIT License](https://opensource.org/licenses/MIT).