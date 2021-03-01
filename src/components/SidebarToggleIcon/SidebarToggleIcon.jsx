import { React } from "react";
import Icon from "@material-ui/core/Icon";

const SidebarToggleIcon = () => {
  return (
    <>
      <Icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="16"
          viewBox="0 0 20 16"
        >
          <defs></defs>
          <g transform="translate(-235 -63)">
            <rect
              class="a"
              width="20"
              height="2"
              rx="1"
              transform="translate(235 63)"
            />
            <rect
              class="a"
              width="14"
              height="2"
              rx="1"
              transform="translate(241 70)"
            />
            <rect
              class="a"
              width="11"
              height="2"
              rx="1"
              transform="translate(244 77)"
            />
          </g>
        </svg>
      </Icon>
    </>
  );
};

export default SidebarToggleIcon;
