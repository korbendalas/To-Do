import React from 'react';

 const Header = (props) => {
  return (
    <div className="header">
      <div className="container">
{/*
Ako ostavim da prvi div bude .container, ceo element ce da bude centriran
i bice belo sa strana. Ako ostavim da unutrasnji div bude .container
prvi div ce biti parrent i pozadina ce bude sva crna, a text ce biti centriran
 */
}        <h1 className="header__title">{props.title}</h1>
        {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    </div>
  );
};

Header.defaultProps = {
  title: 'Indecision'
};
export default Header;
