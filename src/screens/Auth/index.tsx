import Heading from 'components/Heading';
import Logo from 'components/Logo';

import * as S from './styles';

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ title, children }: AuthProps) => (
  <S.Container>
    <S.BannerBlock>
      <S.BannerContent>
        <Logo id="banner" />

        <div>
          <Heading>All your favorite games in one place</Heading>
          <S.Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform
          </S.Subtitle>
        </div>

        <S.Footer>Won Games 2020 - All rights reserved</S.Footer>
      </S.BannerContent>
    </S.BannerBlock>

    <S.ContentWrapper>
      <S.Content>
        <Logo id="form" color="black" size="large" />

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </S.Content>
    </S.ContentWrapper>
  </S.Container>
);

export default Auth;
