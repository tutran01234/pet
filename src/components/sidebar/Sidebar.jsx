import "./sidebar.css";
import {
  RssFeed,
  Chat,
} from "@material-ui/icons";
import PetsIcon from '@mui/icons-material/Pets';


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Posting</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Trading</span>
          </li>
          <li className="sidebarListItem">
            <PetsIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Wiki</span>
          </li>


        </ul>
        <button className="sidebarButton">Show More</button>
  
      </div>
    </div>
  );
}
