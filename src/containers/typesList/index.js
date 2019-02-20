import React from "react";
import { connect } from 'react-redux';
import { TypesListLayout } from "components/typesList";

const typesListComponent = ({ data }) =>
  <TypesListLayout data={data}/>

const dataMock = [
  {
    type: 1,
    name: "familie"
  },
  {
    type: 2,
    name: "prieten"
  },
  {
    type: 1,
    name: "fam"
  },
];

const mapStateToProps = ({ typesPage }) => {
  const newData = dataMock.filter(dt => dt.type === typesPage.type);

  return {
    data: newData,
  }
}

export const TypesList = connect(mapStateToProps)(typesListComponent);

