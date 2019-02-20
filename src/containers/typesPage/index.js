import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { TypesPageLayout } from "components/typesPage";
import { showList } from "./actions";

const typesPageComponent = ({ showList }) =>
  <TypesPageLayout showList={showList} />

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      showList,
    },
    dispatch
  );

export const TypesPage = connect(null, mapDispatchToProps)(typesPageComponent);


