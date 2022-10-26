interface CustomSelectProps {
  name: string;
  currencies: string[];
  selectedCurrency?: string;
  defaultCurrency: string;
  label: string;
  onChange: (newValue: string) => void;
}

export default function CustomSelect(
  { name, currencies, defaultCurrency, selectedCurrency, label, onChange }:
    CustomSelectProps,
) {
  return (
    <div className="mb-6 px-1">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={name}
      >
        {label}
      </label>
      <select
        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={name}
        name={name}
        onChange={(e: any) => {
          console.log("changed custom: ", e.target.value);
          onChange(e.target.value);
        }}
      >
        {currencies.map((currency) => (
          <option
            key={currency.split("-")[1]}
            selected={selectedCurrency
              ? selectedCurrency === currency.split("-")[0].trim()
              : currency === defaultCurrency}
            value={currency.split("-")[0]}
          >
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
}
