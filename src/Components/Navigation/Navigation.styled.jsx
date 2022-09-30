import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavigLink = styled(NavLink)`
  color: white;
  font-size: 20px;
  font-weight: 500;
  display: inline-block;
  text-decoration: none;
  &.active {
    color: #2196f3;
  }
  :not(:last-child) {
    margin-right: 15px;
  }
`;

export const Navig = styled.nav`
  padding: 50px;
  margin-left: 900px;
`;
