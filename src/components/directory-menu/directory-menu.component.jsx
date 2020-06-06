import React from "react";

import "../directory-menu/directory-menu.styles.scss";

import MenuItem from "../menu-item/menu-item.component";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectSectionsFromDirectory } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectSectionsFromDirectory,
});

export default connect(mapStateToProps)(Directory);
