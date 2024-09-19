import { Radio } from "@/components/ui";

export default function ProductRadios({
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
      <ul className="d-flex justify-content-between flex-wrap ">
        {optionDataArr?.map(({ title, name }) => (
          <li key={title} className="position-relative basis-1/3 p-4">
            <label
              className={`w-full text-center ${
                title === chooseOption ? "btn-primary" : "btn-gray"
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
