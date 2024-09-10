import { Button } from "../ui";

export default function FormOptions({
  optionTitle,
  optionDataArr,
  id,
  addConfigOptionHandler,
}) {
  function getOption(key) {
    addConfigOptionHandler(id, key);
  }

  return (
    <>
      <h3>{optionTitle}</h3>
      <ul className="d-flex flex-wrap gap-3">
        {optionDataArr?.map(([key, value]) => (
          <li key={key} className="flex-basis-1/3">
            <Button
              className="w-full"
              onClick={() => {
                getOption(key);
              }}
            >
              {value}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
