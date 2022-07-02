import React from 'react';

type SamovarListItemPropsType = {
  name: string;
}

const SamovarListItem = ({ name }: SamovarListItemPropsType) => (
  <li>
    <h3>{name}</h3>
  </li>
);

export default SamovarListItem;
