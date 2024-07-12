import { useState } from "react";
import { FaFolder } from "react-icons/fa";
import { FaFolderOpen } from "react-icons/fa6";
import PropTypes from "prop-types";
function Folder({ dataFolder }) {
  const [showchildren, setshowchildren] = useState(false);
  const handleClick = () => {
    setshowchildren(!showchildren);
  };
  return (
    <div className="Container">
      <p className="Icon">
        {dataFolder.type === "folder" ? (
          showchildren ? (
            <FaFolderOpen />
          ) : (
            <FaFolder />
          )
        ) : (
          <FaFolderOpen />
        )}
        <span className="active" onClick={handleClick}>
          {dataFolder.title}
        </span>
      </p>

      {showchildren &&
        dataFolder?.children?.map((item, id) => {
          return (
            <div key={id}>
              <Folder className="active" dataFolder={item} />
            </div>
          );
        })}
    </div>
  );
}

Folder.propTypes = {
  dataFolder: PropTypes.shape({
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.array,
  }).isRequired,
};
export default Folder;
