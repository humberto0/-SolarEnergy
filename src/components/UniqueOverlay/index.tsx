import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useTransform } from 'framer-motion';
import { useWrapperScroll } from '../../model';
import logoImg from '../../assets/logoLaranja.png';

import { Container, Header, Footer, StyledMenu, StyledLink } from './styles';
import { useOnClickOutside } from '../../hooks/Menu';
import Hamburger from '../Hamburguer';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll();
  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1]);
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));
  return (
    <Container>
      <Header ref={node}>
        <a href="/">
          <img src={logoImg} alt="github_explorer" />
        </a>
        <a href="/" className="title" type="submit">
          Home
        </a>
        <Link to="/simulator" className="title" type="submit">
          Simule
        </Link>
        <Link to="/contacts" className="title" type="submit">
          Contatos
        </Link>
        <Link to="/signUp" className="title" type="submit">
          Proposta
        </Link>
        <Link to="/works" className="title" type="submit">
          Trabalhos
        </Link>
        <StyledMenu open={open}>
          <a href="/" onClick={() => close()}>
            Home
          </a>
          <Link to="/simulator" onClick={() => close()}>
            Simule
          </Link>
          <Link to="/contacts" onClick={() => close()}>
            Contatos
          </Link>
          <Link to="/signUp" onClick={() => close()}>
            Proposta
          </Link>
          <Link to="/works" onClick={() => close()}>
            Trabalhos
          </Link>
        </StyledMenu>
        <Hamburger open={open} setOpen={setOpen} />
      </Header>
      <Footer id="teste" style={{ opacity }}>
        <ul>
          <li>
            <a className="footer" href="mailto:h7engenharia100@gmail.com">
              {' '}
              H7engenharia100@gmail.com{' '}
            </a>
          </li>
          <li>
            <a className="footer" href="test">
              Celular :98991001013
            </a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
