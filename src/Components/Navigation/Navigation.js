import { NavigLink, Navig } from "./Navigation.styled";

export default function Navigation() {
  return (
    <Navig sx={{ my: 1, mx: 1.5 }}>
      <NavigLink to="/films">Home</NavigLink>
      <NavigLink to="/myLibrary">MyLibrary</NavigLink>
      <NavigLink to="/about">About</NavigLink>{" "}
    </Navig>
  );
}
