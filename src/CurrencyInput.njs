import Nullstack from 'nullstack';

class CurrencyInput extends Nullstack {

  parse({event, onchange, separator}) {
    const normalized = event.target.value.replace(separator || '.', '').padStart(3, '0');
    const whole = (parseInt(normalized.slice(0,-2)) || 0).toString();
    const decimal = normalized.slice(normalized.length - 2);
    const value = parseFloat(whole+'.'+decimal);
    onchange && onchange({value});
  }

  render({name, value, class: klass, separator}) {
    let formatted = value.toFixed(2);
    if(separator) {
      formated = formatted.replace('.', separator);
    }
    return <input type="tel" name={name} value={formatted} oninput={this.parse} class={klass} />
  }

}

export default CurrencyInput;