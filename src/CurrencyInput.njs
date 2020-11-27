import Nullstack from 'nullstack';

class CurrencyInput extends Nullstack {

  parse({event, onchange, separator}) {
    const normalized = event.target.value.replace(separator || '.', '').padStart(3, '0');
    const whole = (parseInt(normalized.slice(0,-2)) || 0).toString();
    const decimal = normalized.slice(normalized.length - 2);
    const value = parseFloat(whole+'.'+decimal);
    onchange && onchange({value});
  }

  mask({value, separator}) {
    const formatted = (value || 0).toFixed(2);
    if(separator) {
      return formatted.replace('.', separator);
    }
    return formatted;
  }

  dataset(context) {
    return Object.keys(context).filter((key) => {
      return key.startsWith('data');
    }).reduce((accumulator, key) => {
      accumulator[key] = context[key];
      return accumulator;
    }, {});
  }

  render({name, placeholder, class: klass, id, disabled}) {   
    return (
      <input
        type="tel"
        name={name}
        value={this.mask()}
        placeholder={placeholder}
        maxlength={18}
        oninput={this.parse}
        class={klass}
        id={id}
        disabled={disabled}
        {...this.dataset()}
      />
    )
  }

}

export default CurrencyInput;