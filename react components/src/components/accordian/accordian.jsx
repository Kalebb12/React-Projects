// single selection
import "./accordian.css";
import { useState } from "react";
import data from "./data";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multile, setMultiple] = useState([]);
  const handleSingleSelection = (currentId) => {
    setSelected(currentId == selected ? null : currentId);
  };
  const handleMultiSelection = (currentId) => {
    const multipleState = [...multile];
    const findCurrentIndex = multipleState.indexOf(currentId);
    if (findCurrentIndex == -1) {
      multipleState.push(currentId);
    } else {
      multipleState.splice(findCurrentIndex, 1);
    }
    setMultiple(multipleState);
  };

  return (
    <div className="wrapper">
      <button onClick={() => {
        setEnableMultiSelection(!enableMultiSelection)
        setMultiple([])
        setSelected(null)
        }}>
        {
          enableMultiSelection
           ? "Disable Multi Selection"
            : "Enable Multi Selection"
        }
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => {
            return (
              <div className="item" key={dataItem.id}>
                <div className="title">
                  <h3
                    onClick={
                      enableMultiSelection
                        ? () =>{ 
                          handleMultiSelection(dataItem.id)
                        }
                        : () => {
                          handleSingleSelection(dataItem.id)
                        }
                      }
                    className="question"
                  >
                    {dataItem.question}
                  </h3>
                  <span>+</span>
                </div>
                {selected == dataItem.id || enableMultiSelection &&
                  multile.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            );
          })
        ) : (
          <div>No Data Present </div>
        )}
      </div>
    </div>
  );
};

export default Accordian;