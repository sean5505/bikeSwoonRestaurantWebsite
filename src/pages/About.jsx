import React from "react";
import Layout from "../components/Layout";
import Promotional from "../components/about/Promotional/Promotional";
import Owner from "../components/about/Owner/Owner";
import Employees from "../components/about/Employees/Employees";

export default function About() {
  return (
    <>
      <Layout>
        <Promotional />
        <Owner />
        <Employees />
      </Layout>
    </>
  );
}
