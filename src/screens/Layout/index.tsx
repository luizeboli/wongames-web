import { Container } from 'components/Container';
import Footer from 'components/Footer';
import Menu from 'components/Menu';

import * as S from './styles';

export type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => (
  <section>
    <Container>
      <Menu />
      {children}
    </Container>

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Layout;
