import { Button } from "../ui";

export default function FormOptions({
  optionTitle,
  optionDataArr,
  id,
  updateConfigOptionHandler,
  orderConfig,
}) {
  function getOption({ title, name }) {
    updateConfigOptionHandler(id, { title, name });
  }

  const chooseOption = orderConfig[id]?.title;

  return (
    <>
      <h3>{optionTitle}</h3>
      <ul className="d-flex justify-content-between flex-wrap gap-3">
        {optionDataArr?.map(({ title, name }) => (
          <li key={title} className="flex-basis-1/3">
            <Button
              className={`w-full ${
                chooseOption === title ? "btn-primary" : "btn-gray"
              }`}
              onClick={() => {
                getOption({ title, name });
              }}
            >
              {name}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
