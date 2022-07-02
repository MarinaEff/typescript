import React from 'react';
import SamovarListItem from './SamovarListItem';

type SamovarListPropsType = {
  data: { id: number, name: string }[];
}

const SamovarList = ({ data }: SamovarListPropsType) => (
  <ul>
    {data.map((el) => (
      <SamovarListItem key={el.id} name={el.name} />
    ))}
  </ul>
);

export default SamovarList;
