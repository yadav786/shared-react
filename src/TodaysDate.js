import React from "react";
import { Myname } from 'myname-react-component-example';

const TodaysDate = () => <div>{`Today's date is ${Date()}`}<Myname name="Pankaj" /></div>;

export default TodaysDate;