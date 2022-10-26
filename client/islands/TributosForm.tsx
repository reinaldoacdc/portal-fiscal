import origemJson from "../data/origem.json" assert { type: "json" };

import { useState } from "https://esm.sh/stable/preact@10.11.0/deno/hooks.js";
import CustomSelect from "../components/CustomSelect.tsx";

const origemCodes = Object.values(origemJson);

interface ConverterFormProps {
  amount?: number;
  origem?: string;
  to?: string;
}

export default function ConverterForm(
  { amount, origem, to }: ConverterFormProps,
) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    amount,
    origem,
    to,
  });

  return (
    <form
      className=""
      //action="/convert"
      onSubmit={() => {
        console.log("submit: ", form);
        setSubmitted(true);
      }}
    >
      <div className="flex">
        <CustomSelect
          currencies={origemCodes}
          name="origem"
          selectedCurrency={form.origem}
          label="Origem"
          onChange={(from) => setForm({ ...form, origem })}
        >
        </CustomSelect>
      </div>

      <div className="flex items-center justify-center px-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          disabled={submitted}
        >
          {submitted ? "Converting..." : "Convert"}
        </button>
      </div>
    </form>
  );
}
