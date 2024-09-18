import { Radio } from "@/components/ui";

export default function ProdouctRadios({
  optionTitle,
  optionDataArr,
  id,
  updateConfigOptionHandler,
  orderConfig,
}) {
  const chooseOption = orderConfig[id];

  return (
    <fieldset>
      <legend>
        <h3>{optionTitle}</h3>
      </legend>
      <ul className="d-flex justify-content-between flex-wrap gap-3">
        {optionDataArr?.map(({ title, name }) => (
          <li key={title} className="position-relative flex-basis-1/3">
            <label
              className={`w-full text-center ${
                chooseOption === title ? "btn-primary" : "btn-gray"
              }`}
              htmlFor={title}
            >
              {name}
            </label>
            <Radio
              className="opacity-0 position-absolute top-0"
              id={title}
              name={id}
              value={title}
              required
              checked={title === chooseOption}
              onChange={updateConfigOptionHandler}
            />
          </li>
        ))}
      </ul>
    </fieldset>
  );
}
