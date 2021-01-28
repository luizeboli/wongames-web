import { useRouter } from 'next/router';

import { Container } from 'components/Container';
import Heading from 'components/Heading';
import ProfileMenu from 'components/ProfileMenu';
import Layout from 'screens/Layout';

import * as S from './styles';

export type ProfileTemplateProps = {
  children: React.ReactNode;
};

const Profile = ({ children }: ProfileTemplateProps) => {
  const { asPath } = useRouter();
  return (
    <Layout>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My profile
        </Heading>

        <S.Main>
          <ProfileMenu activeLink={asPath} />
          <S.Content>{children}</S.Content>
        </S.Main>
      </Container>
    </Layout>
  );
};

export default Profile;
