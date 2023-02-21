const Header = ({ basics }) => (
  <div className="header">
    <h1 className="name">{basics.name}</h1>
    <address className="address">
      {basics.email}
      <br />
      {basics.phone}
    </address>
  </div>
);
export { Header };
